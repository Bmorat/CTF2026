# Operación Tero — Pistas escalonadas

Para entregar cuando un equipo se traba. Cada reto tiene tres niveles: la pista 1
apunta la dirección, la 2 acota el lugar, la 3 casi resuelve.

**Costo sugerido:** pista 1 gratis · pista 2 resta 25% del reto · pista 3 resta 50%.
Si el ejercicio es de formación y no competitivo, entregarlas gratis pero anotando
quién pidió cuáles: sirve para saber qué tema reforzar después.

---

### R01 — Reconocimiento inicial

1. ¿Estás viendo el perfil completo o solo lo que entra en pantalla?
2. Hay un botón debajo de la biografía.
3. Entrá a `perfil.html?u=charrua_libre` y pulsá "Ver biografía completa".

### R02 — Lo que el navegador no dibuja

1. El navegador dibuja el HTML, pero el HTML tiene más cosas que las que dibuja.
2. `Ctrl+U` en la página de perfil. Mirá arriba de todo.
3. Buscá la palabra `token` en el código fuente de `perfil.html`.

### R03 — Eso no está cifrado

1. El "Estado actual" no es basura: es un texto transformado.
2. Terminación en `=`, alfabeto de letras y números: esquema muy común en la web.
3. Es Base64. Pegalo en CyberChef y aplicá "From Base64".

### R04 — Lo que se pide no indexar

1. Todo sitio le dice a Google qué no mirar, y ese archivo es público.
2. Abrí `/robots.txt`. Fijate qué carpetas prohíbe.
3. Entrá a `/respaldo/` y abrí el archivo JSON que hay adentro.

### R05 — Una persona, dos caras

1. La interfaz oculta los datos de registro, pero la plataforma los guarda.
2. `robots.txt` prohíbe dos carpetas, no una. Mirá la otra.
3. En `/api/usuarios.json`, compará teléfono, IP y `id_dispositivo` de
   `charrua_libre` con los del resto. Y mirá los correos de recuperación.

### R06 — La foto habla de más

1. Una imagen es un archivo, y un archivo tiene más adentro que la imagen.
2. Abrí el archivo de la foto con el Bloc de notas en vez de con el visor.
3. La foto del atardecer de `@mateamargo_87`: `media/rambla_atardecer.svg`.
   Buscá el bloque `<metadata>`.

### R07 — Geolocalización a ojo

1. Borró las coordenadas pero no borró lo que se ve en la foto.
2. La torre del fondo tiene una placa. Hacé zoom. También mirá el cartel de la
   tribuna, aunque esté a medio tapar.
3. Es el estadio donde se jugó la final del primer mundial. Alguien lo dice en un
   comentario, en otra publicación de la red. Respondé
   `TERO{Nombre_Del_Lugar}` con guiones bajos.

### R08 — El huso horario lo delata

1. La pantalla te muestra hora de Montevideo. La base de datos no.
2. En el respaldo, cada registro tiene un campo con la zona horaria del
   dispositivo. Compará todos.
3. Buscá los `+02:00`. Están todos el mismo día. Esa fecha es la respuesta,
   en formato `TERO{AAAA-MM-DD}`.

### R09 — Texto que no se ve

1. Hay texto en la página que tus ojos no ven pero el navegador sí dibujó.
2. Probá `Ctrl+A` sobre el feed y mirá qué se resalta de más.
3. Publicación 104 de `@charrua_libre`. Inspeccioná el elemento (F12) y buscá
   la clase `nota-interna-oculta`.

### R10 — La cuenta fantasma

1. Dio de baja una cuenta en 2019. Dar de baja no es borrar.
2. El buscador no la lista, pero los perfiles se abren por URL:
   `perfil.html?u=ALGO`. Necesitás el alias exacto.
3. Entre los posts borrados describe el alias: "el mismo pájaro, anónimo, con el
   año pegado atrás". Y en `/api/usuarios.json` está escrito tal cual.

### R11 — Bonus: el comentario raro

1. Ese comentario no es un error de tipeo, y el propio usuario avisó cómo leerlo.
2. Buscá otra publicación de `@dj_candombe` donde explica qué hacer.
3. Es ROT13. Fijate que `GREB{` tiene la misma forma que `TERO{`.

---

## Pistas ambientales ya sembradas en la red

No hace falta entregarlas: están dentro del propio ejercicio, y sirven para
empujar sin intervenir.

| Dónde | Qué insinúa |
|---|---|
| Post 302 de `@el_tero_viajero` | Que los originales traen metadatos (R06) |
| Post 307 de `@soporte_terosocial` | Que el respaldo queda expuesto (R04) |
| Post 315 de `@soporte_terosocial` | Que el estado y la ubicación dicen de más (R03) |
| Post 309 de `@laura.rambla` | El año 1930 y el estadio de la selección (R07) |
| Post 312 de `@dj_candombe` | "rotalo trece lugares" (R11) |
| Post 205 de `@mateamargo_87` | Que su primera cuenta es del mismo día (R10) |
| Comentario del código de `perfil.html` | Nombra el `robots.txt` (R02 → R04) |
| `respaldo/notas_admin.txt` | Resume los cuatro fallos de la plataforma |

---

## Si el ejercicio va muy rápido

Ideas para subir la exigencia sin tocar los archivos:

- **Sin verificador.** Que entreguen un informe escrito con las flags y, sobre
  todo, con la cadena de razonamiento y las capturas que la sostienen.
- **Contrarreloj.** 90 minutos para los 250 puntos.
- **Informe de inteligencia.** Que produzcan una ficha del objetivo: identidad,
  domicilio aproximado, ocupación, dispositivos, viaje detectado, cuentas
  vinculadas, y el nivel de confianza de cada dato con su fuente.
- **Rol defensivo.** Que escriban las cinco recomendaciones que le darían al
  objetivo y las cinco que le darían a la plataforma.

## Si el ejercicio va muy lento

- Entregar de arranque la pista 1 de R01 a R04 y trabajarlos en plenario.
- Dejar R07, R08 y R10 como opcionales.
- Hacer R04 en conjunto en el proyector: es el nodo del que cuelga casi todo.
