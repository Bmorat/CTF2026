/* =========================================================
   Panel del ejercicio: envío y validación de flags.
   Las flags nunca están en claro: se compara el SHA-256.
   El progreso se guarda en el navegador de cada participante.
   ========================================================= */

(function () {
  "use strict";

  var CLAVE = "terosocial_progreso_v1";

  function leerProgreso() {
    try {
      return JSON.parse(localStorage.getItem(CLAVE)) || {};
    } catch (e) {
      return {};
    }
  }

  function guardarProgreso(p) {
    try { localStorage.setItem(CLAVE, JSON.stringify(p)); } catch (e) {}
  }

  function normalizar(s) {
    return String(s).trim().replace(/\s+/g, "");
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function pintarTabla() {
    var p = leerProgreso();
    var cuerpo = document.getElementById("cuerpo-tabla");
    var total = 0, obtenidos = 0, resueltos = 0;
    var h = "";

    for (var i = 0; i < window.RETOS.length; i++) {
      var r = window.RETOS[i];
      total += r.puntos;
      var ok = !!p[r.id];
      if (ok) { obtenidos += r.puntos; resueltos++; }

      h += "<tr>";
      h += "<td>" + esc(r.id.toUpperCase()) + "</td>";
      h += "<td>" + esc(r.nombre) + "</td>";
      h += "<td>" + esc(r.nivel) + "</td>";
      h += "<td>" + r.puntos + "</td>";
      h += '<td class="' + (ok ? "resuelto" : "pendiente") + '">' + (ok ? "✔ resuelto" : "pendiente") + "</td>";
      h += "</tr>";
    }

    cuerpo.innerHTML = h;
    document.getElementById("marcador").textContent =
      resueltos + " de " + window.RETOS.length + " retos · " + obtenidos + " / " + total + " puntos";
  }

  function pintarEnunciados() {
    var cont = document.getElementById("enunciados");
    var h = "";
    for (var i = 0; i < window.RETOS.length; i++) {
      var r = window.RETOS[i];
      h += '<div class="panel"><div class="panel-cab">' + esc(r.id.toUpperCase()) + " · " + esc(r.nombre) +
        " · " + r.puntos + " pts · " + esc(r.nivel) + "</div>";
      h += '<div class="panel-cuerpo">' + esc(r.enunciado) +
        '<div style="margin-top:8px"><span class="chip">Formato: ' + esc(r.formato) + "</span></div></div></div>";
    }
    cont.innerHTML = h;
  }

  function mostrar(clase, texto) {
    var caja = document.getElementById("resultado");
    caja.className = "resultado " + clase;
    caja.textContent = texto;
  }

  function enviar(e) {
    e.preventDefault();
    var valor = normalizar(document.getElementById("flag").value);

    if (!valor) { mostrar("mal", "Escribí una flag."); return; }

    if (!window.HASHES || !window.HASHES.r01) {
      mostrar("mal", "El verificador todavía no fue configurado por el instructor (falta js/hashes.js).");
      return;
    }

    if (!/^TERO\{.*\}$/.test(valor)) {
      mostrar("mal", "Formato incorrecto. Todas las flags tienen la forma TERO{...}");
      return;
    }

    var h = window.sha256(valor);
    var p = leerProgreso();

    for (var i = 0; i < window.RETOS.length; i++) {
      var r = window.RETOS[i];
      if (window.HASHES[r.id] === h) {
        if (p[r.id]) {
          mostrar("ok", "Correcta, pero ya la habías entregado: " + r.id.toUpperCase() + " · " + r.nombre);
        } else {
          p[r.id] = true;
          guardarProgreso(p);
          mostrar("ok", "¡Correcta! " + r.id.toUpperCase() + " · " + r.nombre + " (+" + r.puntos + " puntos)");
        }
        document.getElementById("flag").value = "";
        pintarTabla();
        return;
      }
    }

    mostrar("mal", "Flag incorrecta. Revisá mayúsculas, guiones bajos y que no falte ningún carácter.");
  }

  document.addEventListener("DOMContentLoaded", function () {
    pintarEnunciados();
    pintarTabla();
    document.getElementById("form-flag").addEventListener("submit", enviar);
    document.getElementById("reiniciar").addEventListener("click", function () {
      if (confirm("¿Borrar tu progreso guardado en este navegador?")) {
        guardarProgreso({});
        pintarTabla();
        mostrar("mal", "Progreso reiniciado.");
      }
    });
  });

})();
