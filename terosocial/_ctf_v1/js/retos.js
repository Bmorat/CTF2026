/* =========================================================
   Definición de los retos del ejercicio OSINT "Operación Tero"
   Este archivo NO contiene las flags: solo los enunciados.
   ========================================================= */

window.RETOS = [

  {
    id: "r01",
    nombre: "Reconocimiento inicial",
    puntos: 10,
    nivel: "Fácil",
    enunciado: "Una cuenta anónima llamada @charrua_libre está publicando información interna de la Unidad. " +
      "Empezá por lo básico: entrá al perfil y leelo entero, hasta el último renglón. " +
      "No todo lo que una cuenta muestra en pantalla entra en tres líneas.",
    formato: "TERO{...}"
  },

  {
    id: "r02",
    nombre: "Lo que el navegador no dibuja",
    puntos: 10,
    nivel: "Fácil",
    enunciado: "Las páginas web tienen más texto del que se ve. Los desarrolladores dejan notas para ellos mismos " +
      "que el navegador no muestra pero que siguen viajando hasta tu computadora. Mirá el código fuente de la " +
      "página de perfil (Ctrl+U).",
    formato: "TERO{...}"
  },

  {
    id: "r03",
    nombre: "Eso no está cifrado",
    puntos: 15,
    nivel: "Fácil",
    enunciado: "El campo \"Estado actual\" del perfil de @charrua_libre muestra algo que parece basura. " +
      "No lo es: es una codificación muy común en la web, y codificar no es lo mismo que cifrar. " +
      "Identificá el esquema y revertilo.",
    formato: "TERO{...}"
  },

  {
    id: "r04",
    nombre: "Lo que se pide no indexar",
    puntos: 20,
    nivel: "Media",
    enunciado: "Todo sitio web le deja instrucciones a los buscadores sobre qué no indexar. Esa lista de " +
      "\"no mires acá\" es pública y es un mapa de lo que el administrador prefiere esconder. Encontrá ese " +
      "archivo, seguí lo que prohíbe y revisá el respaldo. Los mensajes borrados por los usuarios están ahí.",
    formato: "TERO{...}"
  },

  {
    id: "r05",
    nombre: "Una persona, dos caras",
    puntos: 30,
    nivel: "Media",
    enunciado: "@charrua_libre es un alias, pero atrás hay una persona con otra cuenta pública en TeroSocial. " +
      "El volcado interno de cuentas de la plataforma guarda datos de registro que la interfaz nunca muestra. " +
      "Cruzá esos datos y encontrá con qué cuenta pública comparte identidad. Respondé con el alias de la cuenta pública.",
    formato: "TERO{alias_de_la_cuenta_publica}"
  },

  {
    id: "r06",
    nombre: "La foto habla de más",
    puntos: 25,
    nivel: "Media",
    enunciado: "Las imágenes que suben los usuarios traen adentro un bloque de datos de la cámara: modelo, fecha, " +
      "hora y —cuando el dueño se olvida de desactivarlo— coordenadas exactas. En esta plataforma el limpiador " +
      "de metadatos está roto. Abrí el archivo de la imagen, no la imagen: buscá el bloque de metadatos.",
    formato: "TERO{...}"
  },

  {
    id: "r07",
    nombre: "Geolocalización a ojo",
    puntos: 30,
    nivel: "Media-Alta",
    enunciado: "@charrua_libre publicó una foto y borró las coordenadas antes de subirla, pero dejó la imagen. " +
      "En la foto hay una torre de hormigón escalonada con una placa, un cartel de tribuna a medio tapar y " +
      "un comentario de otro usuario que ayuda. Identificá el lugar exacto (es un sitio real y muy conocido de Montevideo). " +
      "Respondé con el nombre del lugar, cada palabra con mayúscula inicial y separadas por guión bajo.",
    formato: "TERO{Nombre_Del_Lugar}"
  },

  {
    id: "r08",
    nombre: "El huso horario lo delata",
    puntos: 35,
    nivel: "Alta",
    enunciado: "La plataforma muestra todo en hora de Montevideo, pero por dentro guarda la zona horaria real del " +
      "dispositivo desde el que se publicó cada mensaje. Casi todos los registros dicen -03:00. Casi todos. " +
      "Encontrá el día en que el autor publicó desde otro huso horario, es decir, el día en que estaba fuera del país. " +
      "Respondé con esa fecha.",
    formato: "TERO{AAAA-MM-DD}"
  },

  {
    id: "r09",
    nombre: "Texto que no se ve",
    puntos: 20,
    nivel: "Alta",
    enunciado: "Hay contenido publicado que está en la página pero es invisible a simple vista: alguien lo dejó " +
      "con un estilo que lo hace transparente. Un truco viejo pero efectivo. Probá seleccionar todo el texto de " +
      "una publicación, o inspeccioná el elemento.",
    formato: "TERO{...}"
  },

  {
    id: "r10",
    nombre: "La cuenta fantasma",
    puntos: 40,
    nivel: "Alta",
    enunciado: "El objetivo dijo que en 2019 tenía otra cuenta y que la dio de baja. Dar de baja no es borrar: " +
      "el perfil sigue existiendo y se llega por URL directa si sabés el alias exacto. El buscador no la lista. " +
      "Entre los mensajes borrados hay una descripción del alias viejo, y el volcado de cuentas lo confirma. " +
      "Entrá a ese perfil y leelo completo.",
    formato: "TERO{...}"
  },

  {
    id: "r11",
    nombre: "Bonus: el comentario raro",
    puntos: 15,
    nivel: "Fácil",
    enunciado: "Un usuario deja comentarios que parecen un error de tipeo y hasta avisó cómo leerlos: " +
      "\"rotalo trece lugares\". Es el cifrado por sustitución más viejo de internet. Aplicalo y traducí el comentario.",
    formato: "TERO{...}"
  }

];
