# CTF Blue Team — Reconstrucción de una intrusión (logs estilo Wazuh/Sysmon)

Dataset progresivo de logs (v1 → v2 → v3) que reconstruye una intrusión completa —
acceso inicial, robo de credenciales y exfiltración — pensado para ejercicios de
análisis forense / threat hunting en Kibana / OpenSearch Dashboards.

Todos los eventos "reales" están camuflados entre ruido benigno con el mismo
`rule.level` (3) y las mismas `rule.description` genéricas que el resto de los
eventos de su tipo. No se pueden encontrar filtrando por severidad ni por texto
de la alerta: hay que revisar nombres de proceso, relaciones padre-hijo, IPs,
logon types y nombres de tareas programadas.

## Contenido

```
logs-ctf/
  logs-v1-acceso-inicial.json     # 202 eventos — VICTIM-HOST-01
  logs-v2-credenciales.json       # 299 eventos — + SCDC01 (incluye v1 completo)
  logs-v3-exfiltracion.json       # 450 eventos — + FS01.corp.local (incluye v2 completo)
  bulk/*.ndjson                   # mismos archivos en formato bulk, cada uno apuntado a su propio indice
tools/
  generate_logs.py                # genera los 3 JSON a partir de logs-wazuh-v2.json
  to_bulk_ndjson.py                # convierte logs-ctf/*.json a bulk NDJSON (indices wazuh-alerts-ctf-v1/v2/v3)
docker-compose.yml                 # OpenSearch + OpenSearch Dashboards (single-node, sin TLS/seguridad)
load-logs.sh                       # espera el stack, carga los 3 NDJSON y crea los 3 index patterns
logs-wazuh-v2.json                  # dataset base original (91 eventos, punto de partida)
CHALLENGES.md                       # enunciados + resoluciones de los 3 retos, para armar en CTFd
```

Cada versión vive en su **propio índice** (`wazuh-alerts-ctf-v1`, `-v2`, `-v3`)
con su propio index pattern nombrado "CTF v1 - Acceso inicial", "CTF v2 -
Credenciales", "CTF v3 - Exfiltracion". Así, en Discover, el jugador cambia de
etapa eligiendo el índice correspondiente en el selector de arriba a la
izquierda, sin tener que acotar el rango de fechas a mano.

> Nota: se usó **OpenSearch + OpenSearch Dashboards** en vez de Elasticsearch + Kibana
> para evitar la gestión de licencia/seguridad de Elastic 8.x en un entorno de
> pruebas local. La API bulk y el modelo de index pattern son compatibles; en
> Dashboards, "Discover" cumple el mismo rol que en Kibana.

## Cómo levantar el entorno

```bash
docker compose up -d
./load-logs.sh
```

`load-logs.sh` hace lo siguiente:
1. Espera a que OpenSearch responda en `http://localhost:9200/_cluster/health`.
2. Borra el índice combinado viejo `wazuh-alerts-4.x-2025.10.08` si existe
   (de una versión anterior de este setup) para evitar confusión.
3. Carga cada `logs-ctf/bulk/*.ndjson` en su propio índice vía la API `_bulk`:
   `wazuh-alerts-ctf-v1`, `wazuh-alerts-ctf-v2`, `wazuh-alerts-ctf-v3`.
4. Espera a OpenSearch Dashboards y crea 3 index patterns (uno por índice),
   cada uno con un nombre amigable: **"CTF v1 - Acceso inicial"**, **"CTF v2 -
   Credenciales"**, **"CTF v3 - Exfiltracion"** (campo de tiempo: `timestamp`).
5. Fija el rango de fechas por defecto de Discover para que cubra el
   2025-10-08 (la fecha de todo el dataset), así no hace falta expandir el
   time picker a mano al entrar.

Luego abrí **http://localhost:5601**, andá a *Discover* y elegí en el
selector de arriba a la izquierda la versión que quieras revisar
("CTF v1 - Acceso inicial", "CTF v2 - Credenciales" o "CTF v3 -
Exfiltracion"). Si el nombre amigable no se ve y aparece el nombre técnico
del índice (`wazuh-alerts-ctf-v1`), es normal en esta versión de OpenSearch
Dashboards — el `title` se usa como fallback en el selector aunque el
`name` amigable esté guardado.

Si preferís cargar solo una versión a mano (por ejemplo para armar el reto en
etapas y liberar los índices de a uno), podés apuntar el `_bulk` a un único
archivo — ya trae su propio nombre de índice embebido en cada línea de acción:

```bash
curl -H "Content-Type: application/x-ndjson" \
  -X POST http://localhost:9200/_bulk \
  --data-binary @logs-ctf/bulk/logs-v1-acceso-inicial.ndjson
```

Para reiniciar desde cero (borra los índices y los datos cargados):

```bash
docker compose down -v
```

## Regenerar los datos

Los tres JSON y sus NDJSON se generan con Python 3 a partir de
`logs-wazuh-v2.json` (que contiene los dos eventos clave "semilla": el
downloader de PowerShell en VICTIM-HOST-01 y el mimikatz en SCDC01):

```bash
python tools/generate_logs.py
python tools/to_bulk_ndjson.py
```

El seed de `random` está fijado (`1337`) en `generate_logs.py`, así que
correrlo de nuevo reproduce exactamente el mismo dataset.

## Resumen de la intrusión y preguntas objetivo

### v1 — Acceso inicial (host: `VICTIM-HOST-01.corp.local`, `10.10.5.23`)

Un proceso `powershell.exe` lanzado por `services.exe` (persistencia via
servicio) ejecuta un `-EncodedCommand` que descarga y corre un segundo script
desde un servidor externo, bajo la cuenta de servicio `CORP\svc-update`. Un
evento de conexión de red (mismo `ProcessGuid` que el PowerShell) confirma la
conexión saliente a `198.51.100.24:443`.

- **P1: ¿Cuál es la IP externa del C2?** → `198.51.100.24`
- **P2: ¿Qué cuenta ejecutó el comando malicioso, y por qué es sospechosa?**
  → `CORP\svc-update`; es una cuenta de servicio (no una cuenta de usuario
  humano) ejecutando PowerShell interactivo oculto (`-WindowStyle Hidden`,
  `-EncodedCommand`, `-ExecutionPolicy Bypass`), algo atípico para su rol.

Pistas a seguir: correlacionar `ProcessGuid` entre el evento de creación de
proceso (eventID 1) y el de conexión de red (eventID 3); revisar el
`CommandLine` decodificado en base64; fijarse que el padre del proceso es
`services.exe`, no `explorer.exe` como en la mayoría del ruido circundante
(aunque hay algunos procesos legítimos de Windows que también usan
`services.exe` como padre, así que ese dato solo no alcanza).

### v2 — Robo de credenciales (+ host `SCDC01`, `172.16.200.50`)

Con acceso al entorno, el atacante llega a `SCDC01` y ejecuta `mimikatz.exe`
(hijo de `firefox.exe`, descargado desde el navegador) bajo la cuenta
`Administrator`. Minutos después aparece un logon de la cuenta administrativa
`adm.backup_svc` con `logonType 9` (`NewCredentials`), la firma típica de un
pass-the-hash / `runas /netonly` tras un dump exitoso.

- **P1: ¿Qué herramienta se usó para extraer credenciales?** → `mimikatz.exe`
- **P2: ¿Qué cuenta se autentica después del dump, y con qué tipo de logon?**
  → `adm.backup_svc`, `logonType 9` (NewCredentials)

Pistas a seguir: `parentProcessName` de `mimikatz.exe` es `firefox.exe`
(descarga vía navegador, no una entrega típica); el campo `logonType` no
aparece en el ruido de logons normales de `SCDC01`, solo en este evento.

### v3 — Exfiltración (+ host `FS01.corp.local`, `10.10.5.40`)

La cuenta robada `adm.backup_svc` se mueve lateralmente al file server: un
logon de red (`logonType 3`) desde `10.10.5.23` (el mismo host del acceso
inicial), copia de una carpeta sensible (`robocopy.exe` sobre
`D:\Shares\Finance\Confidential`), compresión con PowerShell
(`Compress-Archive` hacia `update_cache.zip`, un nombre disfrazado de archivo
de Windows Update), creación de una tarea programada de persistencia
camuflada como `WindowsUpdateCheck`, y finalmente una conexión saliente hacia
un destino distinto al de la v1: `203.0.113.77:8443`.

- **P1: ¿Cómo se llama la tarea programada de persistencia?** →
  `WindowsUpdateCheck`
- **P2: ¿Cuál es el destino final de la exfiltración?** → `203.0.113.77`
  (puerto `8443`)

Pistas a seguir: el logon de red a `FS01` trae un campo `ipAddress` que
apunta de vuelta a `VICTIM-HOST-01` (`10.10.5.23`), cerrando la cadena de
movimiento lateral; hay tareas programadas legítimas de ruido (Google
Update, OneDrive, Adobe) con el mismo `rule.id`/`rule.description` que la
maliciosa, así que el nombre de la tarea es el único diferenciador; la
conexión de exfiltración usa un puerto (`8443`) fuera de lo común comparado
con el resto del tráfico del host.

## Notas para armar las fichas de CTFd

- Cada versión es standalone (v2 incluye todo v1, v3 incluye todo v2), así que
  se puede liberar un archivo por vez sin romper la narrativa si el CTF se
  arma como una progresión de retos.
- Ninguna pregunta objetivo se puede resolver ordenando por `rule.level` o
  buscando texto llamativo en `rule.description`: todas las respuestas
  requieren pivotear sobre campos de `eventdata` (`ProcessGuid`, `Image`,
  `ParentImage`/`parentProcessName`, `logonType`, `DestinationIp`,
  `taskName`).
- Ver `CHALLENGES.md` para el enunciado listo para pegar en CTFd y la
  resolución paso a paso (con las queries exactas) de cada reto.
