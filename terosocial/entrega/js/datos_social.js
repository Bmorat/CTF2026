/* =========================================================
   TeroSocial - vínculos y reacciones forzadas

   El grafo social se genera solo (ver js/social.js). Este
   archivo se aplica ENCIMA de lo generado y sirve para sembrar
   relaciones concretas cuando se arma un ejercicio.

   Ejemplos de uso:

     sigue: {
       "charrua_libre": ["laura.rambla"]     // que la siga sí o sí
     },
     no_sigue: {
       "charrua_libre": ["mateamargo_87"]    // que NO la siga nunca
     },
     reaccionan: {
       4012: ["dona_elsa_47", "taxi_cx_1420"]  // lista exacta para esa publicación
     }

   Está casi vacío a propósito: hoy los vínculos son los que
   salen del padrón, sin nada plantado.
   ========================================================= */

window.VINCULOS_FORZADOS = {

  // Vínculos que se agregan sí o sí
  sigue: {
    /* Las tres cuentas de la misma persona no se siguen entre sí: sería
       demasiado obvio. La coincidencia está en los datos de registro,
       no en el grafo. */
  },

  // Vínculos que se eliminan aunque el grafo los proponga
  no_sigue: {
    "charrua_libre": ["mateamargo_87", "tero_anon_2019"],
    "mateamargo_87": ["charrua_libre", "tero_anon_2019"]
  },

  // Lista exacta de quiénes reaccionaron a una publicación
  reaccionan: {}
};
