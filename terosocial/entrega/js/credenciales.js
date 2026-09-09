/* =========================================================
   TeroSocial - credenciales válidas de la plataforma

   Las contraseñas NO están en claro: se guarda el SHA-256.
   Un participante que lea este archivo ve el hash y no la
   contraseña, así que las credenciales tiene que encontrarlas
   investigando el entorno, no leyendo el código.

   Se acepta UNA SOLA contraseña por cuenta, exactamente como
   está escrita. No hay tolerancia a transcripciones parecidas:
   esta contraseña también se entrega como flag del ejercicio y
   el validador de flags solo da por buena la cadena correcta.
   Si el login aceptara variantes, alguien entraría con una que
   después le van a rechazar.

   Para cambiarla: herramientas\generar_credenciales.ps1
   ========================================================= */

window.CREDENCIALES = [
  {
    usuario: "elpibe.delcerro",
    hashes: [
      "b5afc25a8e91b5d7ba67d230a9236b2abc44c156a0523e27e9b38306e6d966e7"
    ]
  }
];

/* La contraseña de esta cuenta está escrita a mano en un post-it que
   aparece en la foto de un aviso de La Feria. Se transcribe tal cual,
   respetando mayúsculas y dígitos. */

/* Mensajes que muestra el formulario. Se dejan acá para poder
   ajustarlos sin tocar la lógica. */
window.MENSAJES_LOGIN = {
  vacio:      "Completá usuario y contraseña.",
  incorrecto: "El usuario o la contraseña no son correctos.",
  bloqueo:    "Demasiados intentos fallidos. Actualizá la página para volver a probar."
};
