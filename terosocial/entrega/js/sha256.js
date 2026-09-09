/* =========================================================
   SHA-256 en JavaScript puro.
   Se usa una implementación propia en vez de crypto.subtle
   porque esa API no está disponible cuando las páginas se
   abren directamente con file:// (sin servidor).
   ========================================================= */

window.sha256 = (function () {
  "use strict";

  function utf8(s) {
    // Convierte la cadena a una secuencia de bytes (0-255) en formato string.
    return unescape(encodeURIComponent(s));
  }

  function sha256(texto) {
    var ascii = utf8(texto);

    function rot(v, n) { return (v >>> n) | (v << (32 - n)); }

    var pot = Math.pow;
    var maxWord = pot(2, 32);
    var i, j;
    var resultado = "";
    var words = [];
    var bitsMensaje = ascii.length * 8;

    var hash = sha256.h = sha256.h || [];
    var k = sha256.k = sha256.k || [];
    var contadorPrimos = k.length;

    var compuesto = {};
    for (var cand = 2; contadorPrimos < 64; cand++) {
      if (!compuesto[cand]) {
        for (i = 0; i < 313; i += cand) compuesto[i] = cand;
        hash[contadorPrimos] = (pot(cand, 0.5) * maxWord) | 0;
        k[contadorPrimos++] = (pot(cand, 1 / 3) * maxWord) | 0;
      }
    }

    ascii += "\x80";
    while (ascii.length % 64 - 56) ascii += "\x00";

    for (i = 0; i < ascii.length; i++) {
      j = ascii.charCodeAt(i);
      if (j >> 8) return null;
      words[i >> 2] |= j << ((3 - i) % 4) * 8;
    }
    words[words.length] = (bitsMensaje / maxWord) | 0;
    words[words.length] = bitsMensaje;

    for (j = 0; j < words.length;) {
      var w = words.slice(j, j += 16);
      var previo = hash;
      hash = hash.slice(0, 8);

      for (i = 0; i < 64; i++) {
        var w15 = w[i - 15], w2 = w[i - 2];
        var a = hash[0], e = hash[4];

        var t1 = hash[7]
          + (rot(e, 6) ^ rot(e, 11) ^ rot(e, 25))
          + ((e & hash[5]) ^ ((~e) & hash[6]))
          + k[i]
          + (w[i] = (i < 16) ? w[i] : (
              w[i - 16]
              + (rot(w15, 7) ^ rot(w15, 18) ^ (w15 >>> 3))
              + w[i - 7]
              + (rot(w2, 17) ^ rot(w2, 19) ^ (w2 >>> 10))
            ) | 0);

        var t2 = (rot(a, 2) ^ rot(a, 13) ^ rot(a, 22))
          + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));

        hash = [(t1 + t2) | 0].concat(hash);
        hash[4] = (hash[4] + t1) | 0;
      }

      for (i = 0; i < 8; i++) hash[i] = (hash[i] + previo[i]) | 0;
    }

    for (i = 0; i < 8; i++) {
      for (j = 3; j + 1; j--) {
        var b = (hash[i] >> (j * 8)) & 255;
        resultado += ((b < 16) ? "0" : "") + b.toString(16);
      }
    }
    return resultado;
  }

  return sha256;
})();
