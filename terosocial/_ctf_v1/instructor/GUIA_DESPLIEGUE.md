# Operación Tero — Guía de despliegue

## Antes que nada

La carpeta `instructor/` **no se sirve nunca**. Contiene las flags en claro.
Solo se publica el contenido de `web/`.

---

## Opción A — Servidor local con `servir.ps1` (recomendada)

Es la que hay que usar: sin servidor, los retos R04 y R05 pierden sentido porque
`robots.txt` y el listado de directorios no existen como concepto.

El script `TeroSocial/servir.ps1` levanta el sitio sin instalar nada: usa solo lo
que ya trae Windows. **Probado y funcionando en esta máquina.**

La forma más simple: clic derecho sobre `servir.ps1` → **"Ejecutar con PowerShell"**.

Desde una consola, parado en la carpeta `TeroSocial`:

```bash
powershell -ExecutionPolicy Bypass -File .\servir.ps1
```

Queda sirviendo en `http://localhost:8000/`. Para detenerlo, `Ctrl+C`.

Si el puerto 8000 está ocupado:

```bash
powershell -ExecutionPolicy Bypass -File .\servir.ps1 -Puerto 8080
```

### Para que entren desde otras máquinas de la red

Hace falta una consola **abierta como administrador** (es un requisito de
Windows para escuchar en todas las interfaces, no del script):

```bash
powershell -ExecutionPolicy Bypass -File .\servir.ps1 -Publico
```

El script imprime en pantalla las direcciones a las que tienen que entrar los
participantes, del estilo `http://192.168.1.50:8000/`.

Si aun así no entran desde otra máquina, es el firewall. Permitir el puerto una
sola vez (consola como administrador):

```bash
netsh advfirewall firewall add rule name="CTF TeroSocial 8000" dir=in action=allow protocol=TCP localport=8000
```

Y al terminar el ejercicio, eliminar la regla:

```bash
netsh advfirewall firewall delete rule name="CTF TeroSocial 8000"
```

**Verificación previa** (hacerla siempre antes de que entren los participantes):

- `http://localhost:8000/` muestra el feed con publicaciones.
- `http://localhost:8000/robots.txt` se descarga y menciona `/respaldo/`.
- `http://localhost:8000/respaldo/` lista los dos archivos.
- `http://localhost:8000/api/usuarios.json` se abre.
- `http://localhost:8000/perfil.html?u=tero_anon_2019` muestra el perfil archivado.
- `http://localhost:8000/verificar.html` acepta una flag de prueba del solucionario.

### Alternativas

Cualquier servidor de archivos estáticos sirve, **siempre que liste directorios**
(hace falta para `/respaldo/` en R04). Si en la máquina donde se despliega hay
Python o Node instalados, desde la carpeta `web/`:

```bash
python -m http.server 8000
```

```bash
npx --yes http-server -p 8000
```

**Ojo con Python en Windows 11:** por defecto `python` es solo un acceso directo
a la Microsoft Store y falla con *"no se encontró Python"*. En esta máquina es
justamente el caso, por eso `servir.ps1` es la opción recomendada.

Si el servidor elegido no lista directorios, agregar la ruta completa del JSON a
la pista 3 de R04, o crear un `index.html` de listado en esa carpeta.

---

## Opción B — Sin servidor (`file://`)

Funciona: no hay dependencias, ni fetch, ni build. Se abre `web/index.html` con
doble clic y la red social anda, incluido el verificador de flags.

**Lo que se pierde:**
- `robots.txt` deja de ser un descubrimiento natural (R04).
- No hay listado de directorios; hay que decirles que exploren la carpeta.

**Cómo adaptar R04 si se usa esta opción:** cambiar el enunciado a *"explorá la
estructura de carpetas del sitio con el explorador de archivos"*. El resto de los
retos no cambia.

---

## Opción C — Copia por USB o red compartida

Copiar la carpeta `web/` entera (renombrada a `TeroSocial`) a cada máquina y usar
la opción B, o dejar una sola máquina sirviendo con la opción A y que el resto
entre por navegador. La segunda es mejor: todos ven el mismo estado.

---

## Configuración de tiempos

| Modalidad | Duración | Retos |
|---|---|---|
| Charla demostrativa | 45 min | R01 a R04 en plenario, proyectados |
| Taller estándar | 2 h | Los 11 retos, en duplas |
| Contrarreloj | 90 min | Los 11 retos, individual, ranking por puntos |
| Jornada completa | 4 h | Los 11 retos + informe de inteligencia escrito + puesta en común |

---

## El verificador de flags

`web/verificar.html` valida las flags comparando su **SHA-256** contra
`web/js/hashes.js`. Las flags nunca están en claro en el sitio: ese archivo es
seguro de publicar.

El progreso se guarda en el `localStorage` del navegador de cada participante,
así que **es local a cada máquina y cada navegador**. Si se limpian los datos del
sitio o se usa modo incógnito, se pierde. Para llevar el puntaje real, que cada
equipo anote sus flags en papel o que el instructor las reciba por mensaje.

### Cambiar las flags

Si se quieren usar otras flags (recomendable si el ejercicio se repite con otra
tanda de gente):

1. Editar el texto de la flag donde esté sembrada (ver `SOLUCIONARIO.md` para la
   ubicación exacta de cada una).
2. Recalcular su SHA-256 y actualizar `web/js/hashes.js`. En PowerShell:

```powershell
$f='TERO{tu_flag_nueva}'; $s=[System.Security.Cryptography.SHA256]::Create(); (($s.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($f)) | ForEach-Object { $_.ToString('x2') }) -join '')
```

3. Para el reto R03 hay que recalcular también el Base64 del campo `estado` de
   `charrua_libre` en `web/js/datos.js`:

```powershell
[Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes('TERO{tu_flag_nueva}'))
```

### Integración con CTFd

Si la unidad usa CTFd u otra plataforma, ignorar `verificar.html` por completo:
cargar los 11 retos con los enunciados de `web/js/retos.js`, las flags del
solucionario y los puntajes de la tabla. TeroSocial queda solo como el entorno
a investigar.

---

## Mejora opcional: EXIF real en vez de SVG

El reto R06 usa un SVG con un bloque `<metadata>` para que funcione sin instalar
nada. Si se quiere que los participantes practiquen con **EXIF de verdad** y con
`exiftool`, hay que reemplazar la imagen por un JPEG:

1. Conseguir cualquier foto JPEG de una rambla (o exportar el SVG a JPEG).
2. Guardarla como `web/media/rambla_atardecer.jpg`.
3. Escribirle los metadatos:

```bash
exiftool -overwrite_original -GPSLatitude=34.9186 -GPSLatitudeRef=S -GPSLongitude=56.1550 -GPSLongitudeRef=W -Make=Xiaomi -Model="Redmi Note 13" -DateTimeOriginal="2026:08:02 18:41:07" -Artist="R. Piriz" -UserComment="respaldo antes de subir - TERO{gps_-34.9186_-56.1550}" rambla_atardecer.jpg
```

4. En `web/js/datos.js`, cambiar `imagen: "media/rambla_atardecer.svg"` por
   `imagen: "media/rambla_atardecer.jpg"` en la publicación 201.
5. Verificar que se lee:

```bash
exiftool rambla_atardecer.jpg
```

Con esto el reto pasa a exigir la herramienta real, que es lo que van a usar en
un caso verdadero.

---

## Higiene del laboratorio

- Advertir al inicio que **todo el contenido es ficticio**: personas, correos,
  teléfonos, IP y fotos. Está escrito también en `terminos.html`.
- Dejar claro el alcance: se investiga **este** entorno. Nada de aplicar las
  técnicas contra cuentas reales de compañeros, ni de "probar" contra plataformas
  de verdad. Es la parte del ejercicio que más conviene subrayar.
- Aprovechar el cierre para pasar de lo ofensivo a lo defensivo: el objetivo del
  ejercicio no es que aprendan a espiar, sino que entiendan qué de ellos mismos
  está expuesto.
