# TeroSocial

Una red social uruguaya ficticia, construida como entorno de entrenamiento OSINT.
Sin dependencias, sin build, sin internet: son archivos estáticos que se abren con
un navegador.

**Todavía no tiene flags ni ejercicios.** Es el escenario: la ciudad donde después
vas a esconder las pistas. Ver "Cómo sembrar los ejercicios" más abajo.

---

## Arranque rápido

Clic derecho sobre `servir.ps1` → **Ejecutar con PowerShell**, y entrar a
`http://localhost:8000/`.

Desde consola, parado en esta carpeta:

```bash
powershell -ExecutionPolicy Bypass -File .\servir.ps1
```

No necesita instalar nada: usa solo lo que ya trae Windows. Para que entren desde
otras máquinas, abrir la consola como administrador y agregar `-Publico`.

También funciona abriendo `web/index.html` con doble clic, pero se pierden
`robots.txt` y el listado de directorios.

---

## Qué hay adentro

| | |
|---|---|
| Perfiles | **86**: 70 del padrón principal + 10 señuelos + 3 del ejercicio 2 + el sospechoso del ej.3 + 2 comercios (2 quedan archivados/ocultos). El volcado interno `api/usuarios.json` lista **82** |
| Publicaciones | **837** (325 en el feed general, 512 en los grupos) |
| Comentarios | **3.225** (incluidas las respuestas anidadas) |
| Grupos | **12** |
| Avisos del marketplace | **296** |
| Eventos | **36** (13 pasados, 23 por venir) |
| Reportes de moderación | **38** |
| Ilustraciones | **14** SVG con metadatos de cámara |
| Peso total | 1,3 MB |

**Siete secciones**, todas navegables:

| Sección | Archivo | En el menú | Qué es |
|---|---|---|---|
| Feed | `index.html` | sí | El muro público, ordenado por fecha |
| Grupos | `grupos.html` · `grupo.html?g=<slug>` | sí | 12 comunidades con reglas, admins y sus hilos |
| Marketplace | `marketplace.html` · `aviso.html?id=<id>` | sí | Compraventa con filtros por categoría y consultas |
| Eventos | `eventos.html` | sí | Próximos y pasados, con asistentes e interesados |
| Perfiles | `perfil.html?u=<alias>` | no | Bio, datos, grupos, publicaciones y avisos de cada cuenta |
| Publicación | `post.html?id=<id>` | no | Una publicación con todos sus comentarios |
| Buscador | `buscar.html?q=` | no | Busca en cuentas, grupos, publicaciones, avisos y eventos |
| Moderación | `moderacion.html` | **no** | Cola pública de contenido reportado y sus resoluciones |

**La moderación existe y funciona, pero no está enlazada desde ningún lado.** Solo se
llega escribiendo la URL. Queda así a propósito: es una superficie "descubrible" ideal
para un reto, y se puede volver a enlazar agregándola al array `NAV` en `js/app.js`.

**Los 12 grupos:** La posta (conspiraciones), Vecinos del Cerro, Compro y Vendo,
Pesca de costa, Murgas y Carnaval, Mateando (humor), Ruta 5, Avistaje de aves,
Radioaficionados CX, Docentes en red, Perdidos y encontrados, Cocina uruguaya.

**Superficies de plataforma** (pensadas para esconder cosas más adelante):

| Ruta | Qué contiene |
|---|---|
| `robots.txt` | Prohíbe `/respaldo/`, `/api/` y `/_dev/`. Es el mapa de lo que el administrador prefiere esconder |
| `sitemap.xml` | Perfiles públicos. No lista los archivados ni la moderación |
| `/api/usuarios.json` | Correo, teléfono parcial, IP de alta y huella de dispositivo de las 82 cuentas |
| `/respaldo/` | Publicaciones eliminadas, telemetría con zona horaria del dispositivo, y un **registro de accesos** con fecha, hora, IP y navegador |
| `/_dev/` | Notas del equipo de plataforma: tickets abiertos, por qué el buscador no indexa comentarios, por qué el bot duplica |

El registro de accesos cruza con las IP del volcado de cuentas. Ahí se ve, por
ejemplo, que el administrador de La posta entra siempre por Tor desde salidas
distintas, y que hay una cuenta con intentos de contraseña fallidos.

---

## Estructura

```
TeroSocial/
├── servir.ps1              ← levanta el sitio, sin instalar nada
├── CANON.md                ← padrón de personajes y esquema de datos. LEER ANTES DE TOCAR NADA
├── web/                    ← lo único que se publica a los participantes
│   ├── *.html                  las diez páginas
│   ├── diagnostico.html        herramienta interna: valida la integridad del contenido
│   ├── css/estilo.css
│   ├── js/
│   │   ├── app.js              motor de render (todas las vistas)
│   │   ├── datos_usuarios.js   70 perfiles
│   │   ├── datos_posts_a.js    feed general 2026
│   │   ├── datos_posts_b.js    feed general 2019-2025
│   │   ├── datos_grupos_a.js   barrio, compraventa, pesca, murgas, humor, mascotas
│   │   ├── datos_grupos_b.js   ruta, aves, radio, docentes, cocina
│   │   ├── datos_laposta.js    el grupo de conspiraciones
│   │   ├── datos_market.js     avisos del marketplace
│   │   └── datos_eventos.js    eventos y cola de moderación
│   ├── media/                  ilustraciones SVG con metadatos de cámara
│   ├── api/usuarios.json       volcado interno de cuentas
│   └── respaldo/               respaldo expuesto de la plataforma
├── herramientas/
│   └── generar_infraestructura.ps1   regenera api/usuarios.json y sitemap.xml
└── _ctf_v1/                ← ejercicio anterior, archivado. NO se publica
```

---

## Acceso: con sesión y sin sesión

La plataforma tiene dos estados. El primer obstáculo del ejercicio es pasar del
primero al segundo.

**Sin iniciar sesión** se ve un cintillo ámbar que lo aclara, y:

| | |
|---|---|
| Muro público | solo las primeras 12 publicaciones, después un corte |
| Grupos cerrados | invisibles: **La posta y Docentes**, 149 publicaciones |
| Perfiles | sin biografía completa, sin el campo "estado", sin grupos cerrados |
| Marketplace | avisos visibles, **datos de contacto ocultos** |
| Cola de moderación | bloqueada |
| Buscador | no devuelve nada de grupos cerrados |

**Con sesión iniciada** se ve todo, y la barra muestra quién sos con un enlace
para salir.

### Las credenciales

`login.html` es la pantalla del 3b: ingreso, registro y el aviso del sanitizador
caído. La letra chica del registro avisa que **el correo y el departamento son
públicos por omisión** — está a la vista, sin trucos, y es material aprovechable.

Las contraseñas **no están en claro en ningún archivo**: `web/js/credenciales.js`
guarda solo el SHA-256. Quien lea el código encuentra el hash, no la contraseña.

**Hay una sola cuenta con acceso, y su contraseña está sembrada en el entorno:**

| usuario | contraseña | dónde está |
|---|---|---|
| `elpibe.delcerro` | `t3Ro_B4nd1d0` | Escrita a mano en un post-it, en la foto del aviso **5116** del marketplace (un monitor en venta) |

Se acepta **únicamente esa cadena, exacta**. No hay tolerancia a transcripciones
parecidas, porque la contraseña también se entrega como flag y el validador de
flags solo da por buena la cadena correcta: si el login aceptara variantes,
alguien entraría con una que después le van a rechazar.

Por eso el formulario tolera hasta 10 intentos antes de bloquearse (se libera
recargando): probar si un carácter es un uno o una ele es un intento legítimo.

El login acepta el alias tal cual o con `@correo.uy`.

Para cambiarla: editá la tabla `$CUENTAS` en
`herramientas/generar_credenciales.ps1` y corré el script. Si cambiás la
contraseña, hay que sacar una foto nueva del post-it.

---

## El grafo social

Los perfiles ya no dicen solo "4.127 seguidores": **se sabe quiénes**. El grafo se
calcula solo a partir del padrón y es determinista — la misma cuenta da siempre el
mismo resultado. Pesan, en este orden: compartir un grupo, vivir en el mismo lugar,
y que la cuenta de destino sea conocida.

Son **1.704 vínculos** entre las cuentas: unos 20 seguidos en promedio, hasta 35.

Cada perfil muestra a quiénes sigue, quiénes lo siguen y, si iniciaste sesión, los
**conocidos en común** con tu cuenta. Eso habilita preguntas que antes no se podían
hacer: *"¿qué cuentas siguen a la vez a estas dos?"*. Por ejemplo, `charrua_libre` y
`mateamargo_87` **no se siguen entre sí** —sería demasiado obvio— pero comparten
6 seguidores.

Para sembrar vínculos concretos al armar un ejercicio, está
`web/js/datos_social.js`: se aplica encima de lo generado y permite forzar que dos
cuentas se sigan, o impedirlo.

### Reacciones con nombre

Las publicaciones dicen *"A Elsa Perdomo, Ramón Estévez y 49 personas más les gusta
esto"*. Quién reacciona depende de si sigue al autor, si comparte el grupo y si vive
cerca, y nunca reacciona alguien que todavía no tenía cuenta en esa fecha. En la
vista de una publicación, con sesión iniciada, se lista la lista completa.

Aparecen patrones de afinidad: gente que reacciona siempre a las mismas cuentas.

---

## El buscador tiene los límites de 2018

Es deliberado. Un buscador que encuentra cualquier palabra en 763 publicaciones al
instante convierte cualquier reto en un Ctrl+F. Este:

- **no mira dentro de los comentarios** (y son 1.761);
- **no indexa nada publicado hace más de un año** (anterior al 05/08/2025);
- devuelve **como mucho 20 publicaciones**, las más recientes;
- no muestra grupos cerrados si no iniciaste sesión.

Los límites están declarados en pantalla, con el número exacto de resultados que se
está omitiendo: *"Hay 13 publicaciones anteriores a agosto de 2025 que coinciden,
pero el buscador no indexa contenido de más de un año"*. No es un buscador roto: es
uno viejo que avisa lo que no hace, y eso empuja a recorrer la red.

Se ajusta en `vistas.buscar` de `app.js`: `TOPE` y `LIMITE_ANTIGUEDAD`.

---

## El muro se mueve

El feed no está ordenado solo por fecha. Como en las redes de la época, una
publicación vieja vuelve arriba cuando tiene movimiento, y **qué publicaciones
tienen movimiento cambia en cada carga de la página**. Entre un F5 y el
siguiente, el orden de las primeras 12 cambia casi por completo (medido: entre 0
y 3 coinciden).

Cada publicación que subió lo dice: *"Actividad reciente · hace 20 minutos ·
último comentario de Fulano"*, usando el último comentario real de esa
publicación. No se inventan comentarios que no existen.

**Nada desaparece.** Lo que baja sigue estando más abajo en el muro, en el perfil
de su autor, en el buscador y en su URL directa. El efecto buscado es que no
puedan confiar en "estaba tercero desde arriba" y tengan que anotar el enlace o
el nombre.

Para ajustarlo, en `web/js/app.js`: `PORCENTAJE_ACTIVO` (hoy 18) define qué
proporción del muro se mueve por carga. Bajalo para un feed más estable, subilo
para uno más caótico.

---

## Las imágenes

Hay dos capas y el motor elige sola cuál usar:

1. **Fotos reales** en `web/media/fotos/`, descargadas de Wikimedia Commons bajo
   licencia libre. Están nombradas `<tema>_<n>.jpg`.
2. **Ilustraciones SVG** en `web/media/`, originales de este proyecto. Se usan como
   respaldo cuando un tema no tiene foto.

El motor lee el texto de cada publicación, deduce el tema (mate, asado, ruta, ave,
murga, cancha…) y elige una imagen de ese tema. La elección es **determinista**: la
misma publicación muestra siempre la misma foto, no cambia entre recargas.

**Atribución:** `web/media/fotos/CREDITOS.md` lista autor y licencia de cada foto.
Las licencias CC BY y CC BY-SA obligan a mantener ese archivo. No lo borres.

**No hay caras de personas reales identificables.** Es deliberado: estas fotos se
muestran como si las hubieran publicado personajes ficticios, y poner ahí la cara de
una persona real dentro de un ejercicio donde se investiga gente sería un problema
de privacidad, además de material fácil de sacar de contexto.

### Agregar tus propias fotos

Es lo más recomendable para las publicaciones que después van a tener retos: son
únicas, nadie las encuentra con una búsqueda inversa de imagen, y podés ponerles
coordenadas reales de lugares que la unidad conoce.

1. Copiá tus fotos a `web/media/fotos/` con el nombre `<tema>_<n>.jpg`
   (por ejemplo `rambla_3.jpg`, `mate_1.jpg`). Los temas válidos son: rambla, cancha,
   mate, mascota, bici, ave, comida, ruta, pesca, murga, auto, casa, herramienta,
   electro, campo, ciudad, costa, feria.
2. Corré `herramientas/indexar_fotos.ps1`. Eso regenera `web/js/fotos.js` y la web
   las empieza a usar sola.

Si querés que una publicación concreta muestre una foto concreta, poné la ruta
directa en el campo `imagen` de ese post y el motor la respeta.

Para bajar más fotos libres por tema: `herramientas/traer_fotos.ps1` (respeta el
límite de peticiones de Wikimedia y registra la atribución automáticamente).

---

## Cómo está hecho el contenido

`CANON.md` es la fuente de verdad: define los 70 personajes (alias, edad, oficio,
barrio y **voz**), los 12 grupos y el esquema exacto de cada tipo de dato. Si vas a
agregar contenido, respetalo: es lo que hace que la red se sienta coherente.

Principios que sigue todo el contenido:

- **Español rioplatense.** Voseo, *ta*, *bo*, *ni ahí*, *salado*.
- **Nadie escribe perfecto.** Faltas, mayúsculas de más, audios que nadie puede oír.
- **Las conversaciones se desvían.** Un post sobre una bicicleta termina en política.
- **Los personajes son consistentes.** El mismo vecino se queja siempre de lo mismo;
  la abuela escribe siempre en mayúsculas; el escéptico siempre pide fuentes.
- **Coherencia de horarios.** El tambero publica a las 5 AM, el remisero a las 3 AM.
- **El "hoy" de la plataforma es el 5 de agosto de 2026.** Nada es posterior a esa
  fecha. Está fijo a propósito, para que el contenido no envejezca.
- **Cero personas, empresas, medios u organismos reales.** Todo inventado.

### Sobre el grupo "La posta"

Es el grupo de teorías conspirativas, y está construido en tres capas que conviven:
preocupaciones plausibles y hasta legítimas, teorías endebles pero seductoras, y
delirio abierto. **El grupo a veces tiene razón**, y eso es deliberado: si fueran
todos tontos no serviría para entrenar el ojo crítico.

Tiene además escépticos con protagonismo real (`escepticouy`, `hacker_del_prado`,
`astro.mvd`, `agronomo_paysandu`, `profe_hernandez_hist`) que desarman las
teorías con datos y a veces pierden la discusión por cansancio.

Los temas salen del *Archivo T.E.R.O.* (Tecnología de Espionaje Rural Oriental),
un sitio conspirativo ficticio que circula dentro de la red: teros que serían drones
de vigilancia, la bombilla del mate como antena pasiva, la rambla como barra de
calibración. Las tres referencias del material original que apuntaban a una persona
real y a dos organismos estatales reales fueron reemplazadas por equivalentes
inventados.

---

## Cómo sembrar los ejercicios

El escenario ya tiene los ganchos puestos. Cuando definas los retos, estos son los
lugares naturales donde esconder cosas:

| Dónde | Qué se puede esconder | Técnica que entrena |
|---|---|---|
| Bio extendida de un perfil | Texto que solo se ve al expandir | Reconocimiento básico |
| Comentario HTML en una página | Nota de desarrollo olvidada | Ver código fuente |
| Campo "estado" del perfil | Texto codificado | Base64, ROT13 |
| `robots.txt` → `/respaldo/` | Publicaciones eliminadas | Directorios expuestos |
| `/api/usuarios.json` | Correo, teléfono, IP, huella de dispositivo | Correlación de identidades |
| Metadatos de los SVG en `media/` | Coordenadas, fecha, modelo de cámara | Metadatos de imagen |
| Contenido de una ilustración | Un lugar reconocible sin nombrarlo | Geolocalización visual |
| Telemetría del respaldo | Zona horaria del dispositivo | Análisis temporal |
| Perfil con `oculto: true` | Cuenta archivada, fuera del buscador | Enumeración por URL |
| Avisos del marketplace | Ubicación de entrega, horarios, contacto | Perfilado por hábitos |
| Cola de moderación | Publicaciones borradas y quién las reportó | Rastro documental |

**Ganchos ya sembrados, sin flags:** hay diez apellidos compartidos entre personajes
que nunca se declaran como parentesco; `charrua_libre`, `mateamargo_87` y
`tero_anon_2019` comparten teléfono, IP y huella de dispositivo en el volcado
interno; `tero_anon_2019` está dado de baja y no aparece en el buscador ni en el
sitemap, pero responde por URL directa; y hay rutinas horarias consistentes por
personaje.

### Hilos largos que ya existen y conviene aprovechar

El contenido no son frases sueltas: hay historias que se siguen a lo largo de años
y que sirven de esqueleto para cualquier ejercicio.

- **El alumbrado del Cerro** (grupo `vecinos-cerro`): del primer reclamo al
  relevamiento de 63 columnas, la nota vecinal, la respuesta oficial que contesta
  solo lo barato, y la luz que finalmente se arregla el 30 de julio de 2026.
- **Tito** (grupo `mascotas`): un perro que aparece en 2020, se pierde en 2024, se da
  por perdido en 2025 y sigue sin aparecer. Su dueña adopta otra perra en 2026.
- **El duelo de cocina**: la repostera de 63 años y el chef de 34 discutiendo el
  chivito desde 2022, hasta que en julio de 2026 él se retracta en público.
- **El sereno que se hizo radioaficionado**: de preguntar "¿qué es ese ruido?" a
  obtener su indicativo CX2DS y lograr su contacto más lejano.
- **La jubilación del profesor de Historia**, contada en seis años de publicaciones.
- **El divorcio que nunca se nombra**: se deduce de cinco posts entre 2019 y 2025.
- **El viaje al exterior**: dos cuentas distintas publicando desde el mismo huso
  horario ajeno el mismo día.

### Después de sembrar

Corré `web/diagnostico.html` para confirmar que no rompiste nada. Valida alias
inexistentes, IDs duplicados, fechas imposibles, publicaciones anteriores al alta de
la cuenta, reportes huérfanos e imágenes faltantes.

Y corré `herramientas/verificar_ejercicios.ps1`, que cubre lo que `diagnostico.html`
no puede: los **metadatos de las imágenes** donde viven los artefactos ocultos (el
`XPComment` de la lámina de Sokolov y de las 10 fotos del canal encubierto, el
`-4b19` de `p111.jpg`, el bloque de 2019 de `avatar_rambla.svg`) y las referencias de
datos que los sostienen. No imprime las respuestas: solo dice OK o FALLA. Es la red
de seguridad para el día que reproceses una foto sin querer y le borres el metadato.

Si tocaste el padrón de usuarios, corré también
`herramientas/generar_infraestructura.ps1` (regenera el volcado de cuentas y el
sitemap) y `herramientas/reconciliar.ps1` (arregla incoherencias cruzadas entre
archivos de contenido).

---

## Aviso

Todo el contenido es inventado: personas, correos, teléfonos, direcciones IP,
empresas, organismos, medios, fotografías y publicaciones. TeroSocial no existe y el
entorno no se conecta a internet.

Es material de entrenamiento defensivo. El grupo de conspiraciones está construido
para que se aprenda a **evaluar credibilidad de fuentes**, no para difundir nada:
por eso las teorías conviven con quienes las desarman, y por eso no hay ni una sola
afirmación sanitaria ni una sola persona real nombrada.
