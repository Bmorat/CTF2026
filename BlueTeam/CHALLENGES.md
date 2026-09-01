# Fichas de reto — CTF Blue Team (para armar en CTFd)

Este documento separa, para cada versión, el **enunciado** (lo que ve el
jugador, pegalo tal cual o adaptalo en la descripción del reto de CTFd) de la
**resolución** (solo para el organizador — no publicar). Las tres son parte
de una misma cadena de intrusión, así que tiene sentido liberarlas como retos
encadenados dentro de una misma categoría "Blue Team / Threat Hunting".

Acceso al entorno para el jugador: `http://localhost:5601` (o la URL donde
esté publicado) → *Discover* → elegir el index pattern correspondiente a la
versión (`CTF v1 - Acceso inicial`, `CTF v2 - Credenciales`, `CTF v3 -
Exfiltracion`).

---

## Reto 1 — "Primer Contacto" (Acceso inicial)

**Categoría:** Blue Team / Threat Hunting
**Dificultad sugerida:** Fácil-Media
**Índice / vista:** `CTF v1 - Acceso inicial`

### Enunciado (jugador)

> El SOC de INSIGHTNEXUS recibió un aviso de que `VICTIM-HOST-01.corp.local`
> (10.10.5.23) tuvo actividad inusual el **08/10/2025 entre las 08:00 y las
> 12:30**. Se te entregan los logs de Sysmon de ese host tal cual los bajó el
> analista de turno.
>
> Ningún evento importante se distingue por su severidad — todos los eventos
> de este host tienen el mismo `rule.level` y descripciones genéricas
> ("A process was created.", "Network connection detected."). Vas a tener
> que revisar árbol de procesos (proceso ↔ padre), líneas de comando y
> conexiones de red.
>
> **Preguntas:**
> 1. ¿Cuál es la IP externa con la que se comunicó el proceso malicioso?
> 2. ¿Qué cuenta ejecutó el comando malicioso, y por qué resulta sospechosa
>    para este tipo de actividad? (una oración)
>
> **Pista:** hay varios procesos legítimos de Windows que también arrancan
> con un padre distinto de `explorer.exe`, así que ese dato solo no alcanza.
> Cruzalo con qué proceso es (¿tiene sentido que ese binario lo lance ese
> padre?), y buscá el evento de red que comparte su mismo `ProcessGuid`.

### Resolución (organizador)

1. En Discover, elegir el index pattern `CTF v1 - Acceso inicial`.
2. El ruido usa `explorer.exe`/`svchost.exe` como padre casi siempre; hay
   algunos procesos legítimos de Windows con padre `services.exe` (spooler,
   Defender, indexador), así que conviene cruzar dos condiciones: proceso
   `powershell.exe` **y** padre `services.exe`:
   ```
   data.win.eventdata.Image: *powershell.exe and data.win.eventdata.ParentImage: services.exe
   ```
   Devuelve un único evento: `powershell.exe` con `-EncodedCommand`,
   `User: CORP\svc-update`. (Nota para el organizador: el `ParentImage` de
   este evento viene con "system32" en minúscula tal como llegó en el
   dataset semilla — si buscás por ruta exacta con mayúsculas no va a
   matchear; usar el campo de texto, no `.keyword`, evita el problema.)
3. Decodificar el Base64 de `CommandLine` (o directamente leerlo, ya viene
   legible en texto): descarga y ejecuta
   `http://198.51.100.24/defender/sys_health_check.ps1` y lo guarda/corre
   desde `C:\Windows\Temp\sys_health_check.ps1`.
4. Confirmar la comunicación real con un evento de red que comparta
   `ProcessGuid` (`{e9b2a6d2-9f0c-4b3d-91a4-1f2d3e5a6b7c}`):
   ```
   data.win.eventdata.ProcessGuid.keyword: "{e9b2a6d2-9f0c-4b3d-91a4-1f2d3e5a6b7c}"
   ```
   Segundo resultado (eventID 3): `DestinationIp: 198.51.100.24`,
   `DestinationPort: 443`.

**Respuestas:**
- **P1:** `198.51.100.24`
- **P2:** `CORP\svc-update` — es una cuenta de servicio (prefijo `svc-`),
  pensada para ejecutar procesos en segundo plano sin interacción; acá
  aparece lanzando PowerShell oculto (`-WindowStyle Hidden`,
  `-EncodedCommand`, `-ExecutionPolicy Bypass`) para descargar y ejecutar un
  script externo, algo completamente atípico para su rol, y encima con
  `services.exe` como padre en vez de un flujo interactivo normal.

---

## Reto 2 — "Manos en la Masa" (Robo de credenciales)

**Categoría:** Blue Team / Threat Hunting
**Dificultad sugerida:** Media
**Índice / vista:** `CTF v2 - Credenciales`

### Enunciado (jugador)

> El acceso inicial en `VICTIM-HOST-01` fue el punto de entrada. Ahora el
> incidente se extendió: `SCDC01` (172.16.200.50, dominio `INSIGHTNEXUS`)
> también aparece involucrado. Se agregaron sus logs a la vista
> `CTF v2 - Credenciales` (que ya incluye todo lo de la v1).
>
> **Preguntas:**
> 1. ¿Qué herramienta (nombre de archivo) se usó en `SCDC01` para extraer
>    credenciales?
> 2. Minutos después aparece una nueva autenticación con una cuenta
>    administrativa distinta. ¿Cuál es esa cuenta, y qué tipo de logon
>    (`logonType`) se usó?
>
> **Pista:** fijate quién es el proceso padre de la herramienta de dumping
> — no es la forma habitual en que llega ese tipo de herramienta a un
> servidor. Para la segunda pregunta, el campo que la delata no aparece en
> ningún otro logon de este dataset.

### Resolución (organizador)

1. Elegir el index pattern `CTF v2 - Credenciales`.
2. Buscar la herramienta de dumping:
   ```
   data.win.eventdata.newProcessName.keyword: "C:\\Users\\Administrator\\Downloads\\mimikatz.exe"
   ```
   o más simple: `newProcessName: *mimikatz*`. Único resultado, con
   `parentProcessName: firefox.exe` (se descargó desde el navegador, no vino
   por un canal típico de administración) y `subjectUserName: Administrator`.
3. Buscar el campo `logonType`, que **no existe en ningún evento de ruido**:
   ```
   data.win.eventdata.logonType: *
   ```
   Único resultado: `subjectUserName: adm.backup_svc`, `logonType: 9`, pocos
   minutos después del dump (mimikatz ~18:02:53, logon ~18:07:15).

**Respuestas:**
- **P1:** `mimikatz.exe`
- **P2:** `adm.backup_svc`, `logonType 9` (NewCredentials — la firma típica
  de un `runas /netonly` o pass-the-hash inmediatamente después de robar
  credenciales).

---

## Reto 3 — "La Fuga" (Exfiltración)

**Categoría:** Blue Team / Threat Hunting
**Dificultad sugerida:** Media-Alta
**Índice / vista:** `CTF v3 - Exfiltracion`

### Enunciado (jugador)

> Con la cuenta administrativa comprometida, el atacante se movió al file
> server `FS01.corp.local` (10.10.5.40). Se agregaron sus logs a la vista
> `CTF v3 - Exfiltracion` (que ya incluye todo lo de v1 + v2).
>
> **Preguntas:**
> 1. ¿Cómo se llama la tarea programada que el atacante creó para
>    persistencia en `FS01`?
> 2. ¿Cuál es el destino final (IP) de la exfiltración de datos?
>
> **Pista:** hay varias tareas programadas "de rutina" (actualizadores de
> software legítimos) mezcladas en el dataset, con la misma severidad y
> descripción que la maliciosa — el nombre es lo único que las diferencia.
> Para la exfiltración, fijate qué conexión de red usa un puerto de destino
> fuera de lo común comparado con el resto del tráfico de ese host.

### Resolución (organizador)

1. Elegir el index pattern `CTF v3 - Exfiltracion`.
2. Confirmar el movimiento lateral: buscar el logon de red de
   `adm.backup_svc` en `FS01`:
   ```
   agent.name.keyword: "FS01.corp.local" and data.win.eventdata.subjectUserName.keyword: "adm.backup_svc"
   ```
   El primer resultado (`logonType: 3`) trae `ipAddress: 10.10.5.23` — el
   mismo host de la v1, cerrando la cadena acceso inicial → credenciales →
   movimiento lateral.
3. Ver la etapa de staging (opcional, da contexto):
   ```
   data.win.eventdata.commandLine: *robocopy* or data.win.eventdata.commandLine: *Compress-Archive*
   ```
   `robocopy.exe` copia `D:\Shares\Finance\Confidential` y luego PowerShell
   comprime todo en `update_cache.zip` (nombre disfrazado de caché de
   Windows Update).
4. Buscar la tarea programada de persistencia:
   ```
   data.win.system.eventID: "4698" and data.win.eventdata.taskName: *WindowsUpdateCheck*
   ```
   Notar que hay 3 tareas de ruido (`GoogleUpdateTaskMachineUA`, `OneDrive
   Standalone Update Task-S-1-5-21`, `AdobeAAMUpdater-1.0-Administrator`)
   con el mismo `rule.id`/`rule.description` — el nombre es el único
   diferenciador.
5. Buscar la conexión de exfiltración final. Filtrar solo por host + eventID
   de red da **varias decenas de resultados** (FS01 tiene bastante tráfico de red de
   ruido), así que conviene acotar por lo que realmente distingue a la
   maliciosa: mientras todo el tráfico de ruido de `FS01` va a IPs internas
   (`10.10.5.x`, `172.16.x.x`) o a Microsoft (`13.107.4.50`) por puertos
   estándar (443, 80, 389, 445, 53, 9100), esta conexión usa un **puerto
   fuera de lo común**:
   ```
   agent.name: "FS01.corp.local" and data.win.eventdata.DestinationPort: "8443"
   ```
   Único resultado: `DestinationIp: 203.0.113.77`, `DestinationPort: 8443`,
   `User: CORP\adm.backup_svc` — distinta a la IP de C2 de la v1
   (`198.51.100.24`), confirmando un canal de salida separado para los
   datos robados.

**Respuestas:**
- **P1:** `WindowsUpdateCheck`
- **P2:** `203.0.113.77` (puerto `8443`)

---

## Reto bonus opcional — "Reconstruí la cadena completa"

Si querés cerrar el CTF con una pregunta integradora (por ejemplo como
último reto de la categoría, valiendo más puntos), pedí al jugador que
entregue la cadena completa de la intrusión en orden:

1. Acceso inicial vía `powershell.exe` (hijo de `services.exe`) en
   `VICTIM-HOST-01`, cuenta `CORP\svc-update`, C2 en `198.51.100.24:443`.
2. Robo de credenciales con `mimikatz.exe` (hijo de `firefox.exe`) en
   `SCDC01`, cuenta `Administrator`.
3. Uso de credenciales robadas: logon `NewCredentials` (`logonType 9`) con
   `adm.backup_svc` en `SCDC01`.
4. Movimiento lateral a `FS01` con la misma cuenta (`logonType 3`, origen
   `10.10.5.23`).
5. Staging y compresión de `D:\Shares\Finance\Confidential`.
6. Persistencia vía tarea programada `WindowsUpdateCheck`.
7. Exfiltración final a `203.0.113.77:8443`.

Esto sirve para validar que el jugador entendió el pivote completo y no solo
encontró campos sueltos.
