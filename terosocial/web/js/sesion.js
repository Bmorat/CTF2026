/* =========================================================
   TeroSocial - estado de sesión

   No hay servidor: la sesión vive en el navegador de cada
   participante. Sirve para dos cosas:
     1. Decidir qué se ve sin haber iniciado sesión.
     2. Llevar el contador de recargas, que es lo que hace
        rotar el feed en cada F5.
   ========================================================= */

window.SESION = (function () {
  "use strict";

  var CLAVE = "terosocial_sesion";
  var CLAVE_VISITAS = "terosocial_visitas";

  function leer() {
    try { return JSON.parse(localStorage.getItem(CLAVE)) || null; }
    catch (e) { return null; }
  }

  function guardar(o) {
    try {
      if (o) localStorage.setItem(CLAVE, JSON.stringify(o));
      else localStorage.removeItem(CLAVE);
    } catch (e) {}
  }

  /* Cada carga de página incrementa el contador. Es la semilla que
     mueve el feed: con el mismo número, el orden es reproducible. */
  function visita() {
    var n = 0;
    try {
      n = parseInt(localStorage.getItem(CLAVE_VISITAS) || "0", 10) || 0;
      n++;
      localStorage.setItem(CLAVE_VISITAS, String(n));
    } catch (e) { n = 1; }
    return n;
  }

  function normalizar(s) { return String(s == null ? "" : s).trim().toLowerCase(); }

  return {
    activa: function () { return !!leer(); },

    usuario: function () {
      var s = leer();
      return s ? s.usuario : null;
    },

    desde: function () {
      var s = leer();
      return s ? s.desde : null;
    },

    /* Valida contra las credenciales de la plataforma.
       Devuelve {ok:true, usuario} o {ok:false, motivo}. */
    intentar: function (usuario, clave) {
      var msg = window.MENSAJES_LOGIN || {};
      var u = normalizar(usuario);
      var c = String(clave == null ? "" : clave);

      if (!u || !c) return { ok: false, motivo: msg.vacio || "Faltan datos." };
      if (typeof window.sha256 !== "function") {
        return { ok: false, motivo: "No se pudo verificar la contraseña en este navegador." };
      }

      var lista = window.CREDENCIALES || [];
      var h = window.sha256(c);
      for (var i = 0; i < lista.length; i++) {
        // Se acepta el identificador tal cual o el correo de la cuenta.
        var alias = normalizar(lista[i].usuario);
        if (u !== alias && u !== alias + "@correo.uy") continue;

        /* El campo `hashes` es un arreglo por si alguna vez hiciera falta
           aceptar más de una transcripción. En ESTE ejercicio se siembra un
           único hash a propósito: la contraseña también se entrega como flag
           y el validador solo da por buena la cadena exacta. Si se agregara
           una variante acá, alguien entraría al sitio con una contraseña que
           después le rechazan como flag. No agregar variantes sin cambiar
           también el validador de flags. (Ver README → "Las credenciales".) */
        var validos = lista[i].hashes || (lista[i].hash ? [lista[i].hash] : []);
        for (var j = 0; j < validos.length; j++) {
          if (validos[j] === h) {
            guardar({ usuario: lista[i].usuario, desde: new Date().toISOString() });
            return { ok: true, usuario: lista[i].usuario };
          }
        }
      }
      return { ok: false, motivo: msg.incorrecto || "Credenciales incorrectas." };
    },

    salir: function () { guardar(null); },

    visita: visita
  };
})();
