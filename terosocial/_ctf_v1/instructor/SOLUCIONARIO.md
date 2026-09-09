# Operación Tero — Solucionario del instructor

> **CONFIDENCIAL.** Este archivo contiene todas las flags en claro.
> No debe quedar dentro de la carpeta `web/` ni ser accesible desde el navegador
> de los participantes. Mantenerlo fuera de la raíz que se sirve.

---

## Resumen del caso

La cuenta anónima **@charrua_libre** filtra información interna. Detrás está
**Rodrigo Píriz (@mateamargo_87)**, técnico en redes, que además tuvo una tercera
cuenta en 2019 (**@tero_anon_2019**) que dio de baja pero sigue archivada.

La cadena de investigación que deberían recorrer los participantes es:

```
perfil público de @charrua_libre
        │
        ├─ bio completa ............................... R01
        ├─ código fuente de la página ................. R02
        ├─ campo "Estado" en Base64 ................... R03
        │
        └─ robots.txt → /respaldo/ .................... R04
                    │
                    ├─ posts borrados → menciona cuenta vieja
                    ├─ telemetría con zona horaria ..... R08
                    │
                    └─ /api/usuarios.json
                                │
                                ├─ correlación teléfono + IP + dispositivo → R05
                                │       └─ identidad real: @mateamargo_87
                                │                   │
                                │                   └─ su foto → metadatos GPS → R06
                                │
                                └─ alias de la cuenta archivada → R10

Ramas independientes: R07 (geolocalización visual), R09 (texto oculto), R11 (ROT13)
```

Puntaje total: **250 puntos** repartidos en 11 retos.

---

## R01 — Reconocimiento inicial · 10 pts

**Flag:** `TERO{b13nv3n1d0_4l_n1d0_d3l_t3r0}`

**Dónde está:** perfil de `@charrua_libre`, dentro de la biografía extendida.
Se ve al pulsar el botón **"Ver biografía completa"**.

**Procedimiento:** entrar a `perfil.html?u=charrua_libre` y expandir la bio.

**Qué enseña:** la mayoría de las plataformas truncan campos. Lo primero en
cualquier reconocimiento es **expandir todo**: bios, descripciones, "ver más",
comentarios colapsados.

**Error común:** quedarse con lo que muestra el feed y no entrar al perfil.

---

## R02 — Lo que el navegador no dibuja · 10 pts

**Flag:** `TERO{c0m3nt4r10_qu3_qu3d0_3n_pr0ducc10n}`

**Dónde está:** comentario HTML en el `<head>` de `web/perfil.html`, como
`token_depuracion`.

**Procedimiento:** `Ctrl+U` en cualquier página de perfil, o F12 → pestaña
Elementos. También `curl` o "Guardar página como".

**Qué enseña:** el código fuente que llega al cliente suele traer notas de
desarrollo, rutas internas, nombres de empleados y credenciales olvidadas.
El comentario además menciona a "Fabián" y adelanta la pista de `robots.txt`,
así que sirve de puente hacia R04.

---

## R03 — Eso no está cifrado · 15 pts

**Flag:** `TERO{b4s364_n0_3s_c1fr4d0}`

**Dónde está:** campo *Estado actual* del perfil de `@charrua_libre`:

```
VEVST3tiNHMzNjRfbjBfM3NfYzFmcjRkMH0=
```

**Procedimiento:** reconocer Base64 (alfabeto A–Z a–z 0–9 + / y relleno con `=`)
y decodificar. Con CyberChef, con `base64 -d`, o en PowerShell:

```powershell
[System.Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('VEVST3tiNHMzNjRfbjBfM3NfYzFmcjRkMH0='))
```

**Qué enseña:** la diferencia entre **codificar** (reversible, sin secreto) y
**cifrar** (requiere clave). Base64 no protege absolutamente nada.

---

## R04 — Lo que se pide no indexar · 20 pts

**Flag:** `TERO{l0s_p0st_b0rr4d0s_n0_d3s4p4r3c3n}`

**Dónde está:** `web/respaldo/export_terosocial_2026-08-03.json`, en la
publicación eliminada con `id: 107`.

**Procedimiento:**
1. Abrir `/robots.txt` → ve `Disallow: /respaldo/`, `/api/`, `/_dev/`.
2. Navegar a `/respaldo/` (el servidor lista el directorio).
3. Abrir el JSON de respaldo y leer las publicaciones eliminadas.

**Qué enseña:** `robots.txt` es una **solicitud** a los buscadores, no un control
de acceso. En la práctica funciona como un índice de lo que el administrador
considera sensible. Es una de las primeras cosas que se revisan en cualquier
reconocimiento web.

**Nota:** en ese mismo archivo están las pistas de R08 (zonas horarias) y R10
(descripción del alias viejo). Conviene que el instructor no apure este reto:
es el nodo central del ejercicio.

---

## R05 — Una persona, dos caras · 30 pts

**Flag:** `TERO{mateamargo_87}`

**Dónde está:** se **deduce**, no está escrita en ningún lado.

**Procedimiento:** abrir `/api/usuarios.json` (mencionado en `robots.txt`) y
comparar los registros. `charrua_libre` y `mateamargo_87` comparten:

| Campo | charrua_libre | mateamargo_87 |
|---|---|---|
| teléfono | `+598 9* *** 4471` | `+598 9* *** 4471` |
| IP de registro | `179.27.118.42` | `179.27.118.42` |
| ID de dispositivo | `AND-8f31c-77b2` | `AND-8f31c-77b2` |
| correo de recuperación | `r****z87@correo.uy` | — |

El correo alterno de `charrua_libre` (`r****z87`) encaja con
`rodri.piriz87@correo.uy`, y el de `mateamargo_87` (`c*****mvd`) encaja con
`c.libre.mvd@correo.uy`: **se apuntan mutuamente**.

**Pistas de refuerzo dentro de la red:**
- Ambas cuentas usan **la misma foto de perfil** (`media/avatar_rambla.svg`).
- El post eliminado `id: 109` dice "no volver a entrar a las dos cuentas desde
  la misma conexión".
- `@mateamargo_87` es técnico en redes; `@charrua_libre` dice haber trabajado
  "cerca de los servidores".

**Qué enseña:** la correlación de identidades por **selectores** (teléfono, correo,
IP, huella de dispositivo, reutilización de imágenes). Es el corazón del OSINT real.

---

## R06 — La foto habla de más · 25 pts

**Flag:** `TERO{gps_-34.9186_-56.1550}`

**Dónde está:** dentro del archivo `web/media/rambla_atardecer.svg`, en el bloque
`<metadata>`, campo `UserComment`. La imagen la publicó `@mateamargo_87` (post 201).

**Procedimiento:** abrir el archivo de la imagen con un editor de texto, o hacer
clic derecho → "Abrir imagen en pestaña nueva" y ver el fuente. El bloque incluye
marca y modelo del teléfono, fecha, hora, offset horario y coordenadas.

Las coordenadas `-34.9186, -56.1550` caen en la rambla de Pocitos, Montevideo, y
la descripción dice "a media cuadra de casa": ubica el domicilio del objetivo.

**Qué enseña:** los metadatos EXIF. Se usa SVG en vez de JPEG para que el ejercicio
funcione sin instalar nada, pero el concepto es idéntico.

**Variante avanzada (opcional):** si la unidad tiene `exiftool`, ver
`GUIA_DESPLIEGUE.md` para convertir esto en un JPEG con EXIF real.

---

## R07 — Geolocalización a ojo · 30 pts

**Flag:** `TERO{Estadio_Centenario}`

**Dónde está:** se deduce de la imagen `web/media/cancha_misterio.svg` (post 103
de `@charrua_libre`).

**Elementos que permiten identificarlo:**
1. La **torre de hormigón escalonada** al fondo: la Torre de los Homenajes.
2. La **placa con el año 1930** al pie de la torre (se lee haciendo zoom).
3. El cartel `TRIB. OL` a medio tapar: Tribuna Olímpica.
4. El comentario de `@laura.rambla` en el post 309: "nadie sabe en qué año se
   construyó el estadio donde juega la selección", respondido con "1930, para el
   primer mundial".
5. El bloque de metadatos declara que el GPS fue removido **por el usuario**, lo
   que confirma que el lugar importa.

**Aceptar como correcta únicamente:** `TERO{Estadio_Centenario}`
(mayúscula inicial en cada palabra, separadas por guión bajo, sin tildes).

**Si un participante entrega una variante razonable** (`TERO{estadio_centenario}`,
`TERO{Estadio Centenario}`), el instructor puede darla por buena a mano: el
verificador es estricto con el formato a propósito, para acostumbrarlos a
respetar el formato pedido.

**Qué enseña:** geolocalización por rasgos visuales cuando no hay coordenadas.
Borrar el GPS no alcanza si la foto muestra un monumento reconocible.

---

## R08 — El huso horario lo delata · 35 pts

**Flag:** `TERO{2026-05-19}`

**Dónde está:** se deduce de `web/respaldo/export_terosocial_2026-08-03.json`.

**Procedimiento:** en ese archivo, cada registro trae `zona_dispositivo`. Casi
todos dicen `-03:00` (Montevideo). Dos dicen `+02:00`:

- publicación eliminada `id: 108`, autor `charrua_libre`, `2026-05-19T15:47:00Z`
- publicación eliminada `id: 211`, autor `mateamargo_87`, `2026-05-19T18:02:00Z`

Ambas del **mismo día** y desde el **mismo huso horario** (Europa central en
horario de verano). Se refuerza con el bloque `telemetria_publicacion`, donde el
post público 203 de `@mateamargo_87` también figura con `+02:00`.

En la superficie pública, ese día `@mateamargo_87` escribió *"Extrañando el mate
desde el otro lado del charco"* y `@sofi.tortasfritas` publicó sobre estar fuera
del país; el objetivo le respondió *"justo hoy estaba pensando exactamente eso"*.

**Doble hallazgo:** además de la fecha, las dos cuentas publicaron desde el mismo
lugar y el mismo día. Es una confirmación independiente de R05.

**Qué enseña:** el análisis de patrones temporales. Los husos horarios, las horas
de actividad y los silencios revelan ubicación, rutina laboral y viajes.

---

## R09 — Texto que no se ve · 20 pts

**Flag:** `TERO{s13mpr3_s3l3cc10n4_t0d0_3l_t3xt0}`

**Dónde está:** publicación `id: 104` de `@charrua_libre`, en un `div` con la
clase `nota-interna-oculta` (definida en `css/estilo.css` como texto transparente
de 1 píxel).

**Procedimiento:** cualquiera de estas tres formas:
- `Ctrl+A` sobre la página: el texto seleccionado se vuelve visible.
- F12 → inspeccionar el elemento de esa publicación.
- Buscar `nota-interna-oculta` en el CSS y después en el HTML renderizado.

**Qué enseña:** ocultar por estilo no es ocultar. Es una técnica clásica tanto en
SEO abusivo como en filtraciones accidentales.

---

## R10 — La cuenta fantasma · 40 pts

**Flag:** `TERO{0p3r4c10n_t3r0_c0mpl3t4d4}`

**Dónde está:** biografía extendida del perfil `perfil.html?u=tero_anon_2019`.
La cuenta **no aparece** en el buscador, en las sugerencias ni en el sitemap.

**Cómo se llega al alias — dos caminos:**

1. **Por deducción:** el post eliminado `id: 110` dice *"la de 2019 la di de baja
   pero el perfil sigue ahí si sabés el alias exacto. Alias viejo: el mismo pájaro,
   anónimo, con el año pegado atrás"* → `tero` + `anon` + `2019`.
2. **Por confirmación:** `/api/usuarios.json` lista el registro `tero_anon_2019`
   con `estado_cuenta: BAJA_VOLUNTARIA` y la nota de moderación que explica que
   sigue siendo accesible por URL directa. Comparte teléfono, IP y dispositivo con
   las otras dos cuentas, y usa el mismo correo que `charrua_libre`.

Además, la fecha de alta de `tero_anon_2019` (2019-04-22) es **el mismo día** en
que se creó `@mateamargo_87`, cosa que el propio objetivo insinúa en el post 205:
*"mi primera cuenta la abrí el mismo día que esta"*.

**Procedimiento:** ir a `perfil.html?u=tero_anon_2019` y pulsar "Ver biografía
completa".

**Qué enseña:** el contenido "eliminado" rara vez desaparece, y la ausencia de un
recurso en el índice de búsqueda no implica que no sea accesible. Enumerar por
URL directa es una técnica básica y muy productiva.

---

## R11 — Bonus: el comentario raro · 15 pts

**Flag:** `TERO{r0t13_p4r4_l0s_qu3_l33n_c0m3nt4r10s}`

**Dónde está:** comentario de `@dj_candombe` en la publicación `id: 101`:

```
GREB{e0g13_c4e4_y0f_dh3_y33a_p0z3ag4e10f}
```

**Procedimiento:** aplicar ROT13. La pista está en el post 312 del mismo usuario:
*"rotalo trece lugares y fijate"*. Hay un segundo texto en ROT13 dentro del
respaldo (`id: 213`): `Ynznqnf rfgn abpur, dhr ab snyyr anqvr` → "Llamadas esta
noche, que no falle nadie" (relleno para practicar, no otorga puntos).

**Qué enseña:** reconocer cifrados clásicos por su forma. Que `GREB{` tenga la
estructura del prefijo de flag ya delata la sustitución.

---

## Tabla de flags para copiar y pegar

| ID | Reto | Pts | Flag |
|---|---|---|---|
| R01 | Reconocimiento inicial | 10 | `TERO{b13nv3n1d0_4l_n1d0_d3l_t3r0}` |
| R02 | Lo que el navegador no dibuja | 10 | `TERO{c0m3nt4r10_qu3_qu3d0_3n_pr0ducc10n}` |
| R03 | Eso no está cifrado | 15 | `TERO{b4s364_n0_3s_c1fr4d0}` |
| R04 | Lo que se pide no indexar | 20 | `TERO{l0s_p0st_b0rr4d0s_n0_d3s4p4r3c3n}` |
| R05 | Una persona, dos caras | 30 | `TERO{mateamargo_87}` |
| R06 | La foto habla de más | 25 | `TERO{gps_-34.9186_-56.1550}` |
| R07 | Geolocalización a ojo | 30 | `TERO{Estadio_Centenario}` |
| R08 | El huso horario lo delata | 35 | `TERO{2026-05-19}` |
| R09 | Texto que no se ve | 20 | `TERO{s13mpr3_s3l3cc10n4_t0d0_3l_t3xt0}` |
| R10 | La cuenta fantasma | 40 | `TERO{0p3r4c10n_t3r0_c0mpl3t4d4}` |
| R11 | Bonus: el comentario raro | 15 | `TERO{r0t13_p4r4_l0s_qu3_l33n_c0m3nt4r10s}` |
| | **Total** | **250** | |

---

## Cierre sugerido del ejercicio (15 minutos)

Vale más que las conclusiones las digan ellos. Preguntas para la puesta en común:

1. El objetivo hizo casi todo bien: no dio el nombre, borró los posts
   comprometedores, quitó el GPS de una foto. **¿Cuál fue el error que lo hundió?**
   (Reutilizar teléfono, dispositivo y conexión entre las dos cuentas.)
2. ¿Cuántas de las pistas dependieron de un error del **usuario** y cuántas de un
   error de la **plataforma**? ¿Sobre cuáles tenemos control nosotros?
3. Si tuvieran que operar una cuenta separada de su identidad, **¿qué harían
   distinto?** (Dispositivo separado, línea separada, conexión separada, no
   compartir fotos ni horarios, no comentar en las publicaciones de la otra cuenta.)
4. Aplicado a la Unidad: ¿qué de todo esto está expuesto hoy en nuestras cuentas
   personales?
