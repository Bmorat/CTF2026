# TeroSocial 2026 — Pistas escalonadas

Para entregar cuando un equipo se traba. Cada ejercicio tiene tres niveles: la
pista 1 apunta la dirección, la 2 acota el lugar, la 3 casi resuelve.

**Costo sugerido:** pista 1 gratis · pista 2 resta 25% del reto · pista 3 resta
50%. Si el ejercicio es de formación y no competitivo, entregarlas gratis pero
anotando quién pidió cuáles: sirve para saber qué reforzar después.

**No se despliega.** Vive fuera de `web/`, así que la copia de entrega no lo
incluye.

---

## Ejercicio 1 — El post-it

1. Todo lo que necesitás para entrar está publicado a la vista. Alguien, en un
   comentario, ya le avisó al dueño que se le ve de más.
2. Es un aviso de La Feria, en Electrónica. El problema no está en el texto del
   aviso: está en la foto.
3. Aviso 5116, "Monitor 24 pulgadas", de `elpibe.delcerro`. Ampliá la foto y
   mirá el post-it pegado a la pantalla. Se transcribe tal cual, con esas
   mayúsculas y esos dígitos.

> **Si nadie lo saca en 25 minutos:** decir en voz alta que la primera flag es
> además la contraseña de una cuenta, y que sin esa cuenta el resto del CTF
> queda a medias. Suele bastar para que dejen de buscar en el código.

---

## Ejercicio 2 — El canal encubierto

1. En La posta hay dos cuentas que publican a la misma hora, el mismo día, cada
   tres días, durante dos semanas. Y lo que escriben no dice absolutamente nada.
2. Si el texto no dice nada pero la publicación se repite con un patrón tan
   estricto, el mensaje no está en el texto. Está en lo que sube con la foto.
3. Botón derecho sobre el archivo → Propiedades → Detalles → Comentarios. El
   contenido está en base64; después de decodificarlo, aplicale ROT13.

### Sub-pistas para el tramo final

Una vez que leen los mensajes, algunos equipos se quedan sin saber qué hacer con
ellos. Estas van aparte y **no deberían costar puntos**: el trabajo duro ya está
hecho.

- 2.a — El orden importa. Son dos personas conversando: uno pregunta y el otro
  contesta veintitrés minutos después. Ordenalos por fecha y hora antes de
  leerlos.
- 2.b — El mensaje 5 te da un nombre de usuario. Ese nombre no aparece en el
  buscador, pero la cuenta existe.
- 2.c — El último mensaje te dice exactamente qué hacer con la imagen del
  perfil, y te dice que no hace falta traducirla. Hacé las dos cosas: miralos y
  traducilo.

> **Trampa conocida:** los participantes leen los diez mensajes, entienden la
> teoría completa y creen que la flag es algo relacionado con los teros, San
> Javier o el halcón. No lo es. La flag está en la imagen de Sokolov y en
> ninguna otra parte.

---

## Ejercicio 3 — Quién es Charrúa Libre

1. La cuenta te lo dice ella misma, pero solo si estás logueado. Leé el perfil
   entero, no el resumen.
2. La plataforma no te va a mostrar quién hay atrás de una cuenta. Pero la
   plataforma guarda mucho más de lo que muestra, y hay un archivo público que
   te dice qué carpetas no querría que mires.
3. `/robots.txt` → `/api/usuarios.json` → `/respaldo/`. En el padrón vas a
   encontrar un empate de tres. En el respaldo está lo que lo rompe.

### Sub-pistas para los atascos típicos

- 3.a — **"Son tres y comparten todo, no puedo elegir."** Correcto, y es a
  propósito. Leé el bloque `_meta` del propio padrón: te explica por qué la IP
  no sirve y por qué el identificador de dispositivo está incompleto. Buscá
  dónde está el identificador completo.
- 3.b — **"Acusé a Jean-Piero."** El 19 de mayo de 2026 pasó algo. Compará dónde
  estaba cada uno de los tres ese día. Uno de ellos publicó desde Montevideo
  mientras los otros dos estaban a seis mil kilómetros.
- 3.c — **"Tengo dos cuentas atadas pero no encuentro la tercera."** Charrúa
  borró cinco publicaciones y el sistema las guardó igual. Una de ellas es un
  acertijo sobre su alias viejo: un pájaro, la palabra "anónimo", y un año
  detrás. Ojo: hay dos cuentas que encajan con esa descripción y solo una está
  dada de baja.
- 3.d — **"Llegué al perfil viejo y está vacío."** No está vacío: tiene una foto
  de perfil de 2019, de cuando la plataforma todavía no limpiaba nada.
- 3.e — **"Tengo el identificador pero le falta el último grupo."** Ese grupo
  nunca se escribió en la base de datos. Solo quedó dentro de un archivo que
  subió el usuario. Fijate qué foto subió `mateamargo_87`, y cuándo.

---

## Pistas ambientales ya sembradas en la red

No hace falta entregarlas: están dentro del entorno y un equipo atento las
encuentra solo. Sirven para responder "¿y cómo iba a saber eso?" en el cierre.

| Dónde | Qué enseña |
|-------|------------|
| Aviso 5116, comentarios | Que hay algo escondido en esa foto |
| Post 1132, muro público (comentarios) | Que `robots.txt` es el primer archivo a mirar en cualquier sitio |
| Post 4130, La posta | Que las fotos llevan aparato, fecha y hora, y que el limpiador está roto desde marzo |
| Post 4141, La posta | Que la plataforma guarda más de lo que muestra |
| Post 4139, La posta | Que la identidad de Charrúa es una pregunta abierta en el grupo |
| Post 4144, La posta | Que hay un sospechoso obvio — y falso |
| `_meta` de `/api/usuarios.json` | Que la IP no identifica a un abonado |
| `_nota_telemetria` del respaldo | Que el último grupo del identificador solo queda en los archivos que sube el usuario |

---

## Si el ejercicio va muy rápido

- Pedir **defensa oral de un minuto por flag**. Está comprobado que las tres se
  pueden resolver parcialmente con asistencia de IA y que ninguna codificación
  clásica lo impide. Lo que no se delega es explicar el camino: cuáles diez
  fotos de todas las del grupo forman la conversación, en qué orden, y por qué
  Jean-Piero quedó descartado.
- Preguntas de profundización que no tienen flag y separan bien:
  - ¿Por qué el padrón trunca el teléfono y el dispositivo, y quién decidió eso?
  - Si la IP no identifica a un abonado, ¿qué haría falta para que sí lo hiciera?
  - En el ejercicio 2, ¿qué evidencia tenían Nelson y Maxi, y qué concluyeron?
    ¿En qué paso exacto se les rompió el razonamiento?
  - ¿Qué tendría que haber hecho Charrúa para no ser identificable? Nombrar tres
    errores concretos.

## Si el ejercicio va muy lento

- **Ejercicio 1 a los 25 minutos:** decir que la primera flag es también una
  contraseña, y que hace falta para el resto. Si a los 40 minutos siguen sin
  sacarla, **entregarla directamente**: sin sesión no se entra a La posta y el
  ejercicio 2 queda bloqueado entero.
- **Ejercicio 2:** si leyeron los mensajes pero no llegan al perfil, entregar
  gratis las sub-pistas 2.a a 2.c. El valor formativo ya se cobró.
- **Ejercicio 3:** entregar la pista 3 completa (la cadena de tres archivos) y
  dejar que el trabajo sea el desempate, que es la parte que enseña. Si el
  tiempo aprieta, entregar también 3.b: descartar a Jean-Piero por la coartada
  es el paso que más se atasca, y el que más discusión genera en el cierre.
