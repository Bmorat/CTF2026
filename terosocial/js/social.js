/* =========================================================
   TeroSocial - grafo social y reacciones

   Quién sigue a quién y quién reacciona a qué. Se calcula de
   forma determinista a partir del padrón: la misma cuenta da
   siempre el mismo resultado, en cualquier navegador y en
   cualquier recarga.

   Los vínculos no son al azar. Pesan, en este orden:
     - compartir un grupo
     - vivir en el mismo lugar
     - que la cuenta de destino sea conocida

   Para forzar vínculos concretos (por ejemplo, que dos cuentas
   se sigan aunque no tengan nada en común), usar el archivo
   js/datos_social.js, que se aplica encima de lo generado.
   ========================================================= */

window.SOCIAL = (function () {
  "use strict";

  var U = Array.isArray(window.USUARIOS) ? window.USUARIOS : [];
  var forzado = window.VINCULOS_FORZADOS || { sigue: {}, no_sigue: {}, reaccionan: {} };

  var indice = {};
  for (var i = 0; i < U.length; i++) indice[U[i].alias] = U[i];

  function semilla(s) {
    var t = String(s), h = 0;
    for (var k = 0; k < t.length; k++) h = (h * 31 + t.charCodeAt(k)) & 0x7fffffff;
    return h;
  }
  function mezclar(n) {
    n = (n ^ 61) ^ (n >>> 16);
    n = (n + (n << 3)) | 0;
    n = n ^ (n >>> 4);
    n = Math.imul(n, 0x27d4eb2d);
    n = n ^ (n >>> 15);
    return n >>> 0;
  }
  function ruido(a, b) { return mezclar(semilla(a + ">" + b)); }

  function lugar(u) {
    // "Pocitos, Montevideo" -> "montevideo"
    var s = String(u.ubicacion || "").toLowerCase();
    var partes = s.split(",");
    return partes[partes.length - 1].trim();
  }

  function compartenGrupo(a, b) {
    var ga = a.grupos || [], gb = b.grupos || [];
    for (var k = 0; k < ga.length; k++) if (gb.indexOf(ga[k]) >= 0) return true;
    return false;
  }

  // 0 a 20 según lo conocida que sea la cuenta
  function fama(u) {
    var s = Number(u.seguidores || 0);
    if (s > 15000) return 20;
    if (s > 5000) return 15;
    if (s > 1500) return 10;
    if (s > 500) return 6;
    if (s > 150) return 3;
    return 0;
  }

  function sigueCalculado(a, b) {
    if (a.alias === b.alias) return false;
    // Las cuentas archivadas salen del grafo por los dos lados: ni se las
    // sigue ni figuran siguiendo a nadie. Si quedaran del lado de "seguidor"
    // aparecerían listadas en el perfil ajeno y se llegaría a ellas de un clic,
    // que es justo lo que la baja tiene que impedir.
    if (a.oculto || b.oculto) return false;
    var umbral = 4;
    if (compartenGrupo(a, b)) umbral += 24;
    if (lugar(a) && lugar(a) === lugar(b)) umbral += 15;
    umbral += fama(b);
    return (ruido(a.alias, b.alias) % 100) < umbral;
  }

  /* ---- Construcción del grafo ---- */

  var SIGUE = {};      // alias -> [alias, ...]
  var SEGUIDORES = {}; // alias -> [alias, ...]

  (function construir() {
    var k, j;
    for (k = 0; k < U.length; k++) { SIGUE[U[k].alias] = []; SEGUIDORES[U[k].alias] = []; }

    for (k = 0; k < U.length; k++) {
      for (j = 0; j < U.length; j++) {
        if (k === j) continue;
        var a = U[k], b = U[j];
        var s = sigueCalculado(a, b);

        var fz = forzado.sigue && forzado.sigue[a.alias];
        if (fz && fz.indexOf(b.alias) >= 0) s = true;
        var nf = forzado.no_sigue && forzado.no_sigue[a.alias];
        if (nf && nf.indexOf(b.alias) >= 0) s = false;

        if (s) { SIGUE[a.alias].push(b.alias); SEGUIDORES[b.alias].push(a.alias); }
      }
    }
  })();

  /* ---- Reacciones ----

     Reacciona quien ya tenía cuenta cuando se publicó, y con más
     probabilidad si sigue al autor o comparte el grupo. La lista es
     un subconjunto del padrón: el resto del número de "me gusta"
     corresponde a las cuentas que la plataforma no modela. */

  function reaccionan(p) {
    var fz = forzado.reaccionan && forzado.reaccionan[p.id];
    if (fz) return fz.slice();

    var autor = indice[p.autor];
    var fecha = String(p.fecha).slice(0, 10);
    var out = [];

    for (var k = 0; k < U.length; k++) {
      var u = U[k];
      if (u.alias === p.autor || u.oculto) continue;
      if (u.se_unio && u.se_unio > fecha) continue;   // todavía no tenía cuenta

      var umbral = 3;
      if (SIGUE[u.alias] && SIGUE[u.alias].indexOf(p.autor) >= 0) umbral += 26;
      if (p.grupo && (u.grupos || []).indexOf(p.grupo) >= 0) umbral += 20;
      if (autor && lugar(u) && lugar(u) === lugar(autor)) umbral += 8;

      if ((mezclar(semilla(u.alias + "@" + p.id)) % 100) < umbral) out.push(u.alias);
    }
    return out;
  }

  return {
    sigue: function (alias) { return SIGUE[alias] || []; },
    seguidores: function (alias) { return SEGUIDORES[alias] || []; },

    // Cuentas que siguen tanto a "a" como a "b"
    enComun: function (a, b) {
      var sa = SEGUIDORES[a] || [], sb = SEGUIDORES[b] || [];
      return sa.filter(function (x) { return sb.indexOf(x) >= 0; });
    },

    // Cuentas a las que ambos siguen
    sigueAmbos: function (a, b) {
      var sa = SIGUE[a] || [], sb = SIGUE[b] || [];
      return sa.filter(function (x) { return sb.indexOf(x) >= 0; });
    },

    reaccionan: reaccionan,

    // Para el diagnóstico
    _resumen: function () {
      var total = 0, min = 1e9, max = 0;
      Object.keys(SIGUE).forEach(function (a) {
        var n = SIGUE[a].length;
        total += n; if (n < min) min = n; if (n > max) max = n;
      });
      return { cuentas: U.length, aristas: total,
               promedio: Math.round(total / (U.length || 1)), min: min, max: max };
    }
  };
})();
