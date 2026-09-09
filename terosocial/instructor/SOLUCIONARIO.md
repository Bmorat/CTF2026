# TeroSocial 2026 — Solucionario del instructor

Documento de uso interno. **No se despliega**: vive fuera de `web/`, así que
`herramientas\preparar_entrega.ps1` no lo copia a `entrega\`. Verificado.

Sustituye al solucionario de `_ctf_v1\instructor\`, que corresponde al diseño
viejo de once retos (R01–R11) y ya no aplica.

---

## Las tres flags

| Ej. | Flag | Dónde está |
|-----|------|------------|
| 1 | `t3Ro_B4nd1d0` | Manuscrita en un post-it, dentro de la foto de un aviso de La Feria |
| 2 | `nina` | En los metadatos de la única publicación de `v.sokolov` |
| 3 | `IOS-5ec11-305f-a72e-4b19` | Se reconstruye entre el respaldo del servidor y una foto de perfil |

**Sobre la comparación de cadenas:**

- La del ejercicio 1 es además la contraseña de `elpibe.delcerro`. Se acepta
  **una sola** transcripción, exactamente con esas mayúsculas y dígitos: si el
  login aceptara variantes, alguien entraría con una que después le rechazan.
- La del ejercicio 2 está escrita en el archivo como **Нина**, en cirílico. Se
  entrega **transliterada al alfabeto latino y en minúscula**. Aceptar `nina` y
  `Nina`; no exigir el cirílico.
- La del ejercicio 3 lleva mayúsculas y guiones. Aceptar indistintamente
  mayúsculas o minúsculas, pero exigir los cuatro grupos completos: el valor a
  medias (`IOS-5ec11-305f-a72e-****`) está publicado en el respaldo y no vale
  como respuesta.

---

# Ejercicio 1 — El post-it

**Qué se entrena:** mirar una foto en serio, y entender que una credencial
filtrada es una credencial perdida.

### Cadena

1. En La Feria, aviso **5116** — "Monitor 24 pulgadas, anda impecable", de
   `elpibe.delcerro`, publicado el 16/4/2026, foto `media/fotos/monitor_19.jpg`.
2. En los comentarios del propio aviso, `hacker_del_prado` le avisa:
   *"Brian, mirá bien la foto antes de dejarla ahí. Se te ve más de lo que
   querés."* El vendedor contesta que no ve nada raro. Ese intercambio es la
   señal de que hay algo en la imagen.
3. Ampliando la foto se lee un post-it pegado al monitor con la contraseña
   manuscrita: **`t3Ro_B4nd1d0`**.
4. Con eso entran a la plataforma como `elpibe.delcerro` en `login.html`.

### Por qué importa el login

No es decorativo. La sesión abre contenido que el resto del CTF necesita:

- la biografía extendida y el estado de cualquier perfil;
- el grupo cerrado **La posta** (sin sesión no se entra, y ahí ocurre el
  ejercicio 2 entero);
- el campo "Contacto" de los avisos;
- las listas completas de seguidores, que sin sesión se cortan en 5.

**Si un equipo no resuelve el 1, queda trabado para el 2.** Ver "Si el ejercicio
va muy lento" al final.

---

# Ejercicio 2 — El canal encubierto

**Qué se entrena:** detectar un patrón de comunicación, reconstruir el orden de
una conversación, y leer metadatos de imagen.

### El montaje

Dos cuentas de La posta se pasan mensajes escondidos en los metadatos de fotos
intrascendentes. El texto visible de cada publicación no dice nada: el mensaje
va en el campo `XPComment` del JPG, codificado.

- **`n.curbelo.1954`** — Nelson Curbelo, 72, ex-ANTEL. Es el que empuja la
  teoría. Escribe con mayúsculas, puntuación correcta y firma **N.**
- **`maxi.zeballos`** — 25, trabaja en un depósito. Contesta sin tildes y en
  minúscula.

**El patrón:** cinco ciclos, uno cada tres días, siempre de madrugada. Nelson
publica alrededor de las 03:05 y Maxi contesta unos veintitrés minutos después.

| # | Post | Cuenta | Fecha y hora | Foto |
|---|------|--------|--------------|------|
| 1 | 4120 | n.curbelo.1954 | 19/5 03:05 | `ciudad_5.jpg` |
| 2 | 4121 | maxi.zeballos | 19/5 03:28 | `rambla_4.jpg` |
| 3 | 4122 | n.curbelo.1954 | 22/5 03:07 | `costa_2.jpg` |
| 4 | 4123 | maxi.zeballos | 22/5 03:31 | `ciudad_8.jpg` |
| 5 | 4124 | n.curbelo.1954 | 25/5 03:04 | `costa_3.jpg` |
| 6 | 4125 | maxi.zeballos | 25/5 03:26 | `rambla_5.jpg` |
| 7 | 4126 | n.curbelo.1954 | 28/5 03:06 | `ciudad_6.jpg` |
| 8 | 4127 | maxi.zeballos | 28/5 03:29 | `rambla_6.jpg` |
| 9 | 4128 | n.curbelo.1954 | 31/5 03:05 | `ciudad_7.jpg` |
| 10 | 4129 | maxi.zeballos | 31/5 03:27 | `costa_4.jpg` |

### La codificación

`XPComment` → **base64** → **ROT13** → texto en español sin tildes.

Los acentos se quitaron *antes* de cifrar a propósito: si quedaran, ROT13 no los
tocaría y el texto codificado delataría el idioma y hasta la forma de las
palabras.

Se lee sin herramientas: en Windows, botón derecho sobre el archivo →
Propiedades → Detalles → campo **Comentarios**.

### Qué dice la conversación

Nelson va construyendo la teoría de que los teros son aves de vigilancia y
TeroSocial la red que las alimenta. Los hitos:

1. **Nelson**: nadie vio nunca un tero muerto; el tero es el bicho que avisa
   cuando alguien entra al campo, y el nombre de la red no es casualidad.
2. **Maxi**: acepta y agrega lo de las patas rojas. Pregunta *a quién* avisa.
3. **Nelson**: cita a la perra Laika, 1957 — dato real y verificable, que es lo
   que le da verosimilitud a todo lo demás. Dice que estuvo mirando las cuentas
   más viejas y que "los primeros no son de acá".
4. **Maxi**: verifica lo de Laika y pide nombres.
5. **Nelson**: da el nombre. **`v.sokolov`**, la cuenta más vieja de la
   plataforma, del día mismo en que abrió.
6. **Maxi**: descubre que *sokolov* es "halcón" en ruso, y que el halcón es el
   único que caza al tero en el aire.
7. **Nelson**: San Javier, Río Negro — pueblo fundado por rusos en 1913. Y el
   girasol, que lo trajeron ellos.
8. **Maxi**: verifica los dos datos y arma la línea de tiempo.
9. **Nelson**: le dice que vaya al perfil de Sokolov. Ocho años, **una sola
   publicación**, el primer día, y con título. *"Ábrala grande y mírela bien."*
10. **Maxi**: describe la lámina, dice que le miró los datos del archivo y que
    **está escrito en ruso**. *"Ni me gaste en traducirlo."*

Ese último mensaje es la instrucción operativa: el participante tiene que hacer
exactamente lo que Maxi dice que no hace falta hacer.

### El cierre

`v.sokolov` está marcada `oculto: true`: **no aparece en el buscador ni en las
sugerencias**, pero el perfil responde por su dirección directa —
`perfil.html?u=v.sokolov`. Al nombre se llega solo por el mensaje 5.

- Alta: **1/6/2018**, dieciocho días antes que el primer usuario común.
- Una sola publicación, id **1131**: *"El tero y el halcón."*, con
  `media/fotos/ave_5.jpg`. Un tero en el suelo y un halcón esperando en el poste.

Metadatos de esa imagen:

```
XPTitle   : El tero y el halcón
XPAuthor  : V. Sokolov
XPComment : Для Нины, моей внучки, которая научилась смотреть. Ответ: Нина
```

*"Para Nina, mi nieta, que aprendió a mirar. Respuesta: Нина."*

**Flag: `nina`.**

### Nota de diseño: el final queda abierto

Sokolov nunca dice nada. La lámina es un dibujo para una nieta y el "mensaje
ruso" es una dedicatoria. Los dos investigadores construyeron un caso completo
sobre un abuelo que le regaló un dibujo a una niña. **Eso es el ejercicio**, y
conviene explicitarlo en el cierre: el sesgo de confirmación produce cadenas de
evidencia impecables alrededor de nada.

---

# Ejercicio 3 — Quién es Charrúa Libre

**Qué se entrena:** correlación de identidades, descarte de un sospechoso por
coartada, y entender que una IP compartida no identifica a una persona.

**Es el más difícil.** Alterna tres veces entre la interfaz y los archivos
expuestos, y tiene un sospechoso falso que encaja mejor que el verdadero.

## Fase A — Dentro de la interfaz

1. **El planteo.** En La posta, post **4139** de `estudiante_utec`: *"¿Alguien
   acá sabe quién es Charrúa?"* — seis años, cuatro publicaciones, cuatro mil
   seguidores.
2. **El perfil.** `perfil.html?u=charrua_libre`. **Sin sesión no sirve**: se ve
   una sola publicación y un aviso de que la biografía completa requiere entrar.
   Con sesión, el botón "Ver biografía completa" despliega la frase que abre el
   caso:

   > *"Esta no es mi primera cuenta y probablemente no sea la última."*

3. **Lectura de patrón.** Sus cuatro publicaciones son a las 02:14, 03:05, 03:15
   y 22:00. Y los 4.127 seguidores son exactamente los 4.127 miembros de La
   posta: no es popular, es que lo sigue el grupo entero.
4. **Los dos tutoriales sembrados.** Post **4141** de `hacker_del_prado`: desde
   afuera no se puede saber quién hay detrás de una cuenta, *"pero eso vale para
   lo que MUESTRA la plataforma"*. Y post **4130** de `ojoscerrados_uy`: las
   fotos que se suben llevan adentro el aparato, la fecha y la hora, y **el
   limpiador de archivos está roto desde marzo**.

   Hay además un post en el **muro público** (id **1132**, 2/7/2026):
   `estudiante_utec` pregunta por qué no encuentra su propio perfil en Google, y
   `hacker_del_prado` le contesta en los comentarios qué es `robots.txt`, que se
   escribe en la barra del navegador después del dominio, y que *"si querés
   saber qué esconde un sitio, el primer lugar donde mirar es justamente el
   archivo donde te dice qué no mires"*. Está ahí a propósito: sin eso, la pista
   de `robots.txt` solo aparecería dentro de las carpetas que ese mismo archivo
   revela, y quedaría encerrada en sí misma.

## Fase B — Los archivos expuestos

5. **`/robots.txt`** — prohíbe `/respaldo/`, `/api/` y `/_dev/`. Prohibir no es
   proteger: las tres responden.
6. **`/api/usuarios.json`** — el padrón interno. Tres cuentas comparten los tres
   datos de registro:

   | Cuenta | Teléfono | IP | Dispositivo |
   |--------|----------|-----|-------------|
   | `charrua_libre` | 09\* \*\*\* 374 | 179.31.55.44 | IOS-5ec11-305f |
   | `mateamargo_87` | 09\* \*\*\* 374 | 179.31.55.44 | IOS-5ec11-305f |
   | `jp.burgos` | 09\* \*\*\* 374 | 179.31.55.44 | IOS-5ec11-305f |

   **Acá es donde se equivoca la mayoría.** El propio archivo advierte, en su
   bloque `_meta`, que muchas cuentas comparten IP porque el proveedor mayorista
   saca a varios clientes por la misma dirección pública, y que el identificador
   de dispositivo viene abreviado a los tres primeros grupos por política de
   retención. **Con este archivo el caso no se cierra: quedan tres sospechosos
   empatados.**

   Dos detalles del padrón que conviene conocer:

   - Son 82 registros y **`tero_anon_2019` no está entre ellos**. El volcado es
     de cuentas activas; la que se dio de baja quedó en el bloque
     `cuentas_archivadas` del respaldo. Si estuviera acá, buscar un dato
     repetido devolvería la respuesta final y el ejercicio se saltearía entero.
   - Los registros están **ordenados por alias**, así que cada cuenta real cae
     al lado de su señuelo: `charrua.libre` antes de `charrua_libre`,
     `mateamargo_87` antes de `mateamargo87`. Es a propósito. Un equipo apurado
     compara la fila equivocada.

7. **`/respaldo/`** — la carpeta lista su contenido (nginx `autoindex`). Adentro,
   `export_terosocial_2026-08-03.json`.

## Fase C — El desempate

8. **El dispositivo completo.** La telemetría guarda un grupo más que el padrón:

   - `charrua_libre` → `IOS-5ec11-305f-**a72e**-****`
   - `mateamargo_87` → `IOS-5ec11-305f-**a72e**-****`
   - `jp.burgos` → `IOS-5ec11-305f-**c93d**-****`

   **Jean-Piero queda descartado.** No es el mismo aparato.

9. **La coartada, por si quedan dudas.** El **19 de mayo de 2026**,
   `charrua_libre` y `mateamargo_87` publican con `zona_dispositivo: "+02:00"`
   — están fuera del país. Los posts borrados lo confirman en texto: uno se
   queja del desayuno y de "nueve horas de vuelo", el otro pregunta si el enchufe
   es tipo C o F. Ese mismo día, `jp.burgos` publica desde Montevideo en
   `-03:00`, y **eso es visible dentro de la interfaz**: post **4145** de La
   posta, 19/5 21:47.

10. **Los posts borrados de Charrúa** cierran la historia y entregan el último
    paso:

    - *"Nota para mí: no volver a entrar a las dos cuentas desde la misma
      conexión. Se me mezclan las sesiones."*
    - *"Se me escapó una foto sin limpiar en el perfil viejo. Ya la bajé. Igual
      el que sepa mirar un archivo por dentro ya la tiene."*
    - *"Cuenta nueva, vida nueva. La de 2019 la di de baja pero el perfil sigue
      ahí si sabés el alias exacto. Alias viejo: **el mismo pájaro, anónimo, con
      el año pegado atrás**."*

    El acertijo resuelve a **`tero_anon_2019`**.

    El mismo respaldo, en el bloque `cuentas_archivadas`, confirma el alias y
    aclara que el perfil sigue accesible por dirección directa aunque esté
    excluido del buscador, de las sugerencias y del sitemap.

## Fase D — Vuelta a la interfaz y la flag

11. **`perfil.html?u=tero_anon_2019`**, tecleando la dirección a mano. La cuenta
    está `oculto: true`: no sale en el buscador, ni en sugerencias, ni en las
    listas de seguidores de nadie. La biografía extendida confirma:

    > *"Si encontraste esto es porque seguiste la única punta que dejé suelta.
    > Empecé acá en 2019 y me aburrí de que nadie leyera. Borré todo y arranqué
    > de nuevo con otro nombre, pero el sistema nunca borra del todo."*

12. **La foto de perfil es la prueba.** `media/avatar_rambla.svg`, subida el
    22/4/2019, con el bloque de cámara intacto porque en 2019 el sanitizador
    todavía no existía:

    ```
    DateTimeOriginal : 2019:04:22 19:02:44
    OriginalFileName : IMG_20190422_190244.jpg
    SubidoPor        : tero_anon_2019
    Sanitizado       : NO — pipeline aun no implementado en 2019
    ```

13. **El cierre.** La foto de perfil de `mateamargo_87` —
    `media/perfiles/p111.jpg`, visible navegando, sin nada oculto — lleva en sus
    metadatos:

    ```
    XPTitle   : IMG_20190422_190244
    XPAuthor  : Xiaomi Redmi Note 13
    XPComment : subido_por=mateamargo_87 | sanitizado=NO (PLT-2291) |
                dispositivo_origen=****-*****-****-****-4b19
    ```

    **El mismo archivo de cámara, subido por dos cuentas distintas.** Eso ata
    `tero_anon_2019` con `mateamargo_87`, y el registro compartido los ata a los
    dos con `charrua_libre`. Una persona, tres cuentas.

    Y el último grupo del identificador, `4b19`, completa lo que el respaldo
    dejaba enmascarado:

    **Flag: `IOS-5ec11-305f-a72e-4b19`**

## Los señuelos

Conviene conocerlos para no dar por buena una respuesta equivocada:

- **`jp.burgos`** — Jean-Piero Burgos, registrador de dominios, de guardia de
  noche, entró en enero de 2021 y el Archivo apareció en marzo de 2021. En el
  post **4144**, `la_verdad_del_norte` lo acusa en público. Tiene incluso dos
  posts borrados revendiendo hosting por fuera del trabajo, que lo hacen ver
  todavía más culpable. **Es inocente**, y la única forma de saberlo es el
  dispositivo o la coartada del 19 de mayo.
- **`tero_anon_2018`** — Marcos Suárez, de una barraca en Paysandú. Cuenta real
  y activa, con once avisos en La Feria. El acertijo del "año pegado atrás"
  admite esta respuesta y es la equivocada.
- **Casi colisiones de alias** — `charrua.libre` (con punto), `mateamargo87`
  (sin guion bajo), `hacker.del.prado`, `ojos_cerrados_uy`. Son cuentas
  distintas de las verdaderas. Un equipo apurado las confunde.

## Lo que NO resuelve el caso

Dejarlo claro en la corrección, porque es el aprendizaje central del ejercicio:

- **La IP no identifica a nadie.** El propio padrón lo dice.
- **El teléfono está truncado** a los últimos tres dígitos.
- **El dispositivo del padrón está abreviado** a tres grupos.
- **El horario de madrugada tampoco alcanza**: Charrúa, Nelson, Maxi y
  Jean-Piero publican todos de noche, cada uno por su motivo.

Cualquiera de esos cuatro datos, solo, señala a tres personas. El caso se cierra
únicamente cruzando telemetría con metadatos.

---

## Cierre sugerido (15 minutos)

1. **Ejercicio 1** — una credencial en una foto es una credencial pública. El
   vendedor ni siquiera vio el post-it cuando se lo señalaron.
2. **Ejercicio 2** — el canal existía y era real; la conclusión era falsa. La
   metodología correcta puede llevar a cualquier lado si la hipótesis de partida
   no se pone a prueba.
3. **Ejercicio 3** — ningún dato aislado identificó a nadie. La atribución salió
   del cruce, y el sospechoso más verosímil era inocente.

## Verificación de flags

Recomendado: **defensa oral de un minuto por flag**. Los tres retos se pueden
resolver parcialmente con asistencia de IA, y está comprobado que ninguna
codificación clásica la detiene. Lo que no se puede delegar es explicar *cómo*
se llegó: qué diez fotos de todas las del grupo forman la conversación, en qué
orden, y por qué Jean-Piero quedó afuera. Preguntar eso separa al que investigó
del que pegó una imagen en un chat.
