/* =========================================================
   TeroSocial - motor de render del cliente v4.0

   Identidad "3a": feed cronológico, sin algoritmo, con sus
   defectos intactos. Cada página declara su vista con
   <body data-vista="...">; la barra, el menú lateral, la
   columna derecha y el pie se generan desde acá.
   ========================================================= */

(function () {
  "use strict";

  /* =======================================================
     1. Consolidación de datos
     ======================================================= */

  function arr(x) { return Array.isArray(x) ? x : []; }

  var USUARIOS = arr(window.USUARIOS);

  var POSTS = []
    .concat(arr(window.POSTS_A))
    .concat(arr(window.POSTS_B))
    .concat(arr(window.POSTS_GRUPOS_A))
    .concat(arr(window.POSTS_GRUPOS_B))
    .concat(arr(window.POSTS_LAPOSTA))
    .concat(arr(window.POSTS_SENUELOS));

  var GRUPOS = []
    .concat(arr(window.GRUPOS_A))
    .concat(arr(window.GRUPOS_B))
    .concat(window.GRUPO_LAPOSTA ? [window.GRUPO_LAPOSTA] : []);

  var AVISOS = []
    .concat(arr(window.AVISOS))
    .concat(arr(window.AVISOS_B))
    .concat(arr(window.AVISOS_C))
    .concat(arr(window.AVISOS_D))
    .concat(arr(window.AVISOS_E));
  var EVENTOS  = arr(window.EVENTOS);
  var REPORTES = arr(window.REPORTES);

  // "Hoy" de la plataforma. Fijo a propósito: el contenido no envejece.
  var HOY = "2026-08-05T12:00:00-03:00";

  /* Sesión. Sin ella la plataforma muestra una versión recortada:
     el muro público sí, los grupos cerrados y los datos de contacto no. */
  var HAY_SESION = !!(window.SESION && window.SESION.activa());
  var YO = HAY_SESION ? window.SESION.usuario() : null;

  /* Contador de cargas. Es lo que hace rotar el feed: con el mismo
     número el orden se repite, con el siguiente cambia. */
  var VISITA = window.SESION ? window.SESION.visita() : 1;

  var indiceUsuarios = {}, i;
  for (i = 0; i < USUARIOS.length; i++) indiceUsuarios[USUARIOS[i].alias] = USUARIOS[i];

  var indicePosts = {};
  for (i = 0; i < POSTS.length; i++) indicePosts[POSTS[i].id] = POSTS[i];

  var indiceGrupos = {};
  for (i = 0; i < GRUPOS.length; i++) indiceGrupos[GRUPOS[i].slug] = GRUPOS[i];

  /* Publicaciones idénticas del mismo autor: el bot de noticias repite.
     No es un error del motor, es un defecto de la plataforma que se muestra. */
  var repetidas = {};
  (function () {
    var vistos = {};
    for (var k = 0; k < POSTS.length; k++) {
      var p = POSTS[k];
      var clave = p.autor + " " + String(p.texto).trim();
      if (!vistos[clave]) vistos[clave] = [];
      vistos[clave].push(p.id);
    }
    Object.keys(vistos).forEach(function (clave) {
      if (vistos[clave].length < 2) return;
      vistos[clave].forEach(function (id) { repetidas[id] = vistos[clave].length; });
    });
  })();

  /* =======================================================
     2. Utilidades
     ======================================================= */

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function param(nombre) {
    var m = new RegExp("[?&]" + nombre + "=([^&#]*)").exec(location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : "";
  }

  function usuario(alias) {
    return indiceUsuarios[alias] || {
      alias: alias, nombre: alias, bio: "", bio_extendida: "", estado: "",
      ubicacion: "", se_unio: "", avatar: "iniciales", verificado: false,
      seguidores: 0, siguiendo: 0, oculto: true, grupos: [], _inexistente: true
    };
  }

  function grupo(slug) { return indiceGrupos[slug] || null; }

  function semillaDe(v) {
    var s = String(v), h = 0;
    for (var j = 0; j < s.length; j++) h = (h * 31 + s.charCodeAt(j)) & 0x7fffffff;
    return h;
  }

  // Avatares de iniciales: fondo pastel, texto del mismo tono en oscuro.
  function paletaDe(alias) {
    var h = semillaDe(alias) % 360;
    return "background:hsl(" + h + ",30%,89%);color:hsl(" + h + ",36%,33%)";
  }

  function iniciales(u) {
    var base = (u.nombre && u.nombre.charAt(0) !== "(") ? u.nombre : u.alias;
    var partes = String(base).replace(/[^\wáéíóúñÁÉÍÓÚÑ ]/g, " ").trim().split(/\s+/);
    var t = (partes[0] || "?").charAt(0);
    if (partes.length > 1 && partes[1]) t += partes[1].charAt(0);
    return t.toUpperCase();
  }

  function avatarHTML(u, clase, conEnlace) {
    var c = "avatar" + (clase ? " " + clase : "");
    var interior;
    if (u.avatar && u.avatar !== "iniciales") {
      interior = '<span class="' + c + '"><img src="' + esc(u.avatar) + '" alt=""></span>';
    } else {
      interior = '<span class="' + c + '" style="' + paletaDe(u.alias) + '">' + esc(iniciales(u)) + "</span>";
    }
    if (conEnlace === false) return interior;
    return '<a class="sin-deco" href="perfil.html?u=' + encodeURIComponent(u.alias) + '">' + interior + "</a>";
  }

  var MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "set", "oct", "nov", "dic"];

  function partes(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(String(iso));
    if (!m) return null;
    return { a: m[1], m: m[2], d: m[3], h: m[4], min: m[5], mn: +m[2], dn: +m[3], an: +m[1] };
  }

  // Formato de la plataforma: dd/mm/aaaa a las HH:MM
  function fechaLarga(iso) {
    var p = partes(iso);
    if (!p) return String(iso);
    return p.d + "/" + p.m + "/" + p.a + " a las " + p.h + ":" + p.min;
  }
  function fechaCorta(iso) {
    var p = partes(iso);
    if (!p) return String(iso);
    return p.d + "/" + p.m + "/" + p.a;
  }
  function fechaHora(iso) {
    var p = partes(iso);
    if (!p) return String(iso);
    return p.d + "/" + p.m + "/" + p.a + " " + p.h + ":" + p.min;
  }

  function dias(desde, hasta) {
    var a = partes(desde), b = partes(hasta);
    if (!a || !b) return 0;
    return Math.round((Date.UTC(b.an, b.mn - 1, b.dn) - Date.UTC(a.an, a.mn - 1, a.dn)) / 86400000);
  }

  function numero(n) { return Number(n || 0).toLocaleString("es-UY"); }

  /* Presencia. "En línea" si la última conexión declarada es del mismo día
     que el "hoy" de la plataforma. Es un dato del padrón, no una consulta:
     la red no tiene servidor, así que la presencia también es fija. */
  function enLinea(u) {
    return !!(u && u.ultima_conexion && dias(u.ultima_conexion, HOY) === 0);
  }
  function puntoEnLinea(u) {
    return enLinea(u) ? ' <span class="dot-enlinea" title="en línea ahora"></span>' : "";
  }

  /* Contadores redactados en prosa. En esta plataforma no se "da me gusta":
     se aplaude. Cuando se sabe quiénes lo hicieron, se los nombra. El resto
     del número son cuentas que la plataforma no modela. */
  function contadores(p, conNombres) {
    var trozos = [];
    var likes = Number(p.likes || 0);
    var quienes = (conNombres !== false && window.SOCIAL) ? SOCIAL.reaccionan(p) : [];

    if (quienes.length) {
      var muestra = quienes.slice(0, 2).map(function (a) {
        return '<a href="perfil.html?u=' + esc(a) + '">' + esc(usuario(a).nombre) + "</a>";
      });
      var resto = Math.max(0, likes - muestra.length);
      var txt = "Aplaudieron " + muestra.join(", ");
      if (resto === 1) txt += " y 1 persona más";
      else if (resto > 1) txt += " y " + numero(resto) + " personas más";
      trozos.push(txt);
    } else if (likes === 1) {
      trozos.push("1 aplauso");
    } else if (likes > 1) {
      trozos.push(numero(likes) + " aplausos");
    }

    var n = arr(p.comentarios).length;
    if (n === 1) trozos.push("1 respuesta");
    else if (n > 1) trozos.push(n + " respuestas");
    return trozos.join(" · ");
  }

  // Lista completa de reacciones, para la vista de una publicación
  function listaReacciones(p) {
    var quienes = window.SOCIAL ? SOCIAL.reaccionan(p) : [];
    if (!quienes.length) return "";
    var h = '<div class="panel"><div class="panel-cab">Le gusta a ' + quienes.length +
      " cuentas de tu red</div><ul class=\"lista\">";
    for (var k = 0; k < quienes.length; k++) {
      var u = usuario(quienes[k]);
      h += "<li>" + avatarHTML(u, "avatar-ch") + "<div>";
      h += '<div class="lista-nombre"><a href="perfil.html?u=' + esc(u.alias) + '">' + esc(u.nombre) + "</a></div>";
      h += '<div class="lista-sub">' + esc(u.ubicacion || u.alias) + "</div></div></li>";
    }
    h += "</ul></div>";
    return h;
  }

  function insignia(u) {
    if (!u.verificado) return "";
    return ' <span class="etiqueta verificada"><span class="punto-dorado"></span>VERIFICADA</span>';
  }

  function enlazar(txt) {
    return esc(txt)
      .replace(/@([a-z0-9_.]+[a-z0-9_])/gi, function (t, a) {
        return '<a href="perfil.html?u=' + encodeURIComponent(a) + '">@' + esc(a) + "</a>";
      })
      .replace(/#([\wáéíóúñÁÉÍÓÚÑ]+)/g, function (t, h) {
        return '<a href="buscar.html?q=%23' + encodeURIComponent(h) + '">#' + esc(h) + "</a>";
      });
  }

  function ordenarDesc(a, b) { return a.fecha < b.fecha ? 1 : (a.fecha > b.fecha ? -1 : 0); }

  /* ---- Qué se ve sin haber iniciado sesión ---- */

  function grupoCerrado(slug) {
    var g = indiceGrupos[slug];
    return !!(g && g.privacidad === "cerrado");
  }

  // Las publicaciones de un grupo cerrado no salen del grupo.
  function visible(p) {
    if (HAY_SESION) return true;
    return !(p.grupo && grupoCerrado(p.grupo));
  }

  function muroHTML(titulo, texto) {
    return '<div class="muro"><p class="muro-tit">' + esc(titulo) + "</p>" +
      '<p class="muro-txt">' + esc(texto) + "</p>" +
      '<a class="boton" href="login.html" style="display:inline-block;text-decoration:none">Ingresar</a></div>';
  }

  /* ---- Feed vivo: orden por última actividad ----

     El muro no se ordena solo por fecha de publicación. Como en las
     redes de la época, una publicación vieja vuelve arriba cuando
     tiene movimiento. Qué publicaciones tienen movimiento depende del
     número de carga, así que en cada F5 el orden cambia.

     Nada se oculta ni se pierde: lo que baja sigue estando más abajo,
     en el perfil de su autor, en el buscador y en su URL directa. */

  var PORCENTAJE_ACTIVO = 18;   // cuántas publicaciones "se mueven" por carga

  /* Mezcla de avalancha. Hace falta porque semillaDe() es lineal: al
     pasar de la visita 2 a la 3 su resultado cambiaba en apenas +1 y
     el muro quedaba casi igual. Con esto, una carga y la siguiente dan
     conjuntos bien distintos. */
  function mezclar(n) {
    n = (n ^ 61) ^ (n >>> 16);
    n = (n + (n << 3)) | 0;
    n = n ^ (n >>> 4);
    n = Math.imul(n, 0x27d4eb2d);
    n = n ^ (n >>> 15);
    return n >>> 0;
  }

  function ruido(id, visita) {
    return mezclar(mezclar(semillaDe(id)) ^ mezclar(visita * 2654435761));
  }

  /* Un hilo no revive solo: para que figure con movimiento reciente tiene
     que haberse comentado hace poco de verdad. Sin esta condición, una
     publicación de 2019 aparecía como "actividad hace 15 minutos" citando
     como último comentario uno de hace siete años. */
  var VENTANA_ACTIVIDAD = 45;   // días

  function ultimaMovida(p) {
    var f = p.fecha;
    arr(p.comentarios).forEach(function (c) {
      if (c.fecha > f) f = c.fecha;
      arr(c.respuestas).forEach(function (r) { if (r.fecha > f) f = r.fecha; });
    });
    return f;
  }

  function actividadDe(p) {
    if (dias(ultimaMovida(p), HOY) > VENTANA_ACTIVIDAD) return null;
    var s = ruido(p.id, VISITA);
    if ((s % 100) >= PORCENTAJE_ACTIVO) return null;
    return { minutos: (s >>> 8) % 720 };   // hasta 12 horas atrás
  }

  function haceCuanto(min) {
    if (min < 1) return "recién";
    if (min === 1) return "hace 1 minuto";
    if (min < 60) return "hace " + min + " minutos";
    var h = Math.floor(min / 60);
    return h === 1 ? "hace 1 hora" : "hace " + h + " horas";
  }

  // Devuelve la lista ordenada: primero lo que tuvo movimiento, después por fecha.
  function ordenarPorActividad(posts) {
    var activos = [], quietos = [];
    for (var k = 0; k < posts.length; k++) {
      var a = actividadDe(posts[k]);
      if (a) { posts[k]._act = a; activos.push(posts[k]); }
      else { posts[k]._act = null; quietos.push(posts[k]); }
    }
    activos.sort(function (x, y) { return x._act.minutos - y._act.minutos; });
    quietos.sort(ordenarDesc);
    return activos.concat(quietos);
  }

  /* ---- Elección de ilustración según el contenido ---- */

  /* ---- Elección de la fotografía que acompaña a un texto ----

     No alcanza con buscar la primera palabra que coincida: así una
     "estufa de chapa" terminaba ilustrada con un auto y un "alternador
     reacondicionado" con la rambla. Cada tema tiene un vocabulario con
     pesos, se suma el puntaje de todos y gana el más votado. Los
     términos inequívocos pesan 3, los ambiguos 1.

     Si nadie llega al umbral, se cae a una señal más gruesa pero
     confiable: la categoría del aviso o el grupo de la publicación. */

  var VOCAB = {
    mate:        [[/\bmate\b|bombilla|yerba|termo|cimarr[oó]n/gi, 3], [/cebar|amargo|verde\b/gi, 1]],
    mascota:     [[/\bperr[oa]s?\b|\bgat[oa]s?\b|cachorr|mascota|veterinari|michi|gallina|ponedora/gi, 3],
                  [/collar|adopci[oó]n|se perdi[oó]|chapita|refugio|castrac/gi, 2], [/jaula|alimento balanceado/gi, 1]],
    bici:        [[/bicicleta|\bbici\b|rodado \d|pi[ñn][oó]n|manubrio|c[aá]mara rodado/gi, 3],
                  [/pedal|cubierta|cadena|aro\b|freno/gi, 1]],
    ave:         [[/\btero\b|hornero|bentev|cardenal|chaj[aá]|garza|cisne|calandria|picaflor|carancho|tordo|avistaje/gi, 3],
                  [/\bnido\b|\bave\b|p[aá]jaro|plumaje|binocular/gi, 2]],
    comida:      [[/asado|parrilla|chorizo|milanesa|chivito|tortas? frita|empanada|bizcoch|guiso|pastel de|receta|masa\b/gi, 3],
                  [/harina|az[uú]car|huevos?\b|dulce de leche|horno|olla|sart[eé]n|cocinar|amasar|almuerzo|cena\b/gi, 2],
                  [/\bcarne\b|\bpan\b|salsa|postre/gi, 1]],
    ruta:        [[/\bruta \d|kil[oó]metro|\bkm\b|cami[oó]n|gasoil|peaje|banquina|balanza/gi, 3],
                  [/[oó]mnibus|viaje|carretera|niebla|reparto/gi, 1]],
    pesca:       [[/pescar|pesca\b|corvina|br[oó]tola|tararira|dorado\b|carnada|anzuelo|plomada|ca[ñn]a de/gi, 3],
                  [/marea|mojarr|red\b|reel|pique/gi, 2]],
    murga:       [[/murga|candombe|tamboril|carnaval|tablado|cupl[eé]|retirada|llamadas/gi, 3],
                  [/tambor|ensayo|coro|desfile/gi, 1]],
    auto:        [[/\bauto\b|coche|camioneta|\bmoto\b|alternador|carburador|amortiguador|patente|cubiertas? \d|motor\b/gi, 3],
                  [/nafta|mec[aá]nic|taller|service|bater[ií]a de \d|caja de cambios/gi, 2], [/chapa|pintura del/gi, 1]],
    casa:        [[/casa\b|apartamento|\bapto\b|alquil|terreno|padr[oó]n|inmobiliaria|fachada|techo\b|gotera|humedad/gi, 3],
                  [/mudanza|pieza\b|ventana|puerta\b|pared|azotea|patio|vereda de casa/gi, 2],
                  [/biblioteca de pino|estante|mueble|colch[oó]n|cuna\b|ropero/gi, 2]],
    herramienta: [[/herramienta|martillo|taladro|amoladora|destornillador|pinza|ferreter|carretilla|soldadora|andamio/gi, 3],
                  [/tornillo|clavo|pincel|escalera|balde|obra\b|alba[ñn]il|pintor/gi, 2]],
    electro:     [[/televisor|notebook|celular|auricular|parlante|heladera|ventilador|microondas|licuadora|lavarropa|impresora|monitor/gi, 3],
                  [/\bradio\b|antena|frecuencia|cargador|pantalla|equipo de m[uú]sica|transmisor/gi, 2]],
    cancha:      [[/cancha|estadio|tribuna|\bgol\b|cl[aá]sico\b|mundial|selecci[oó]n|hinchada|pen[aá]l|arquero/gi, 3],
                  [/f[uú]tbol|partido|camiseta|hincha\b|celeste\b/gi, 2]],
    feria:       [[/feria|puesto de|verdur|frutas?\b|mercado|bodeg[oó]n|lote de|colecci[oó]n de|monedas/gi, 3],
                  [/tomate|zapall|golosina|whisky|licor|ropa de|saldos/gi, 2]],
    campo:       [[/\bcampo\b|ganado|\bvacas?\b|tambo\b|chacra|estancia|cosecha|siembra|colmena|apicultor|oveja/gi, 3],
                  [/alambrado|pradera|rural|tranquera/gi, 2]],
    ciudad:      [[/ciudad vieja|casco hist[oó]rico|palacio|plaza\b|empedrado|museo|edificio/gi, 3],
                  [/barrio|esquina|alumbrado|columna de luz|vereda|cuadra|centro\b|liceo|escuela/gi, 2]],
    costa:       [[/playa|balneario|\bfaro\b|m[eé]dano|\bduna\b|punta del diablo|cabo polonio|piri[aá]polis/gi, 3],
                  [/arena|\borilla\b|verano|temporada/gi, 1]],
    rambla:      [[/rambla|atardecer|puesta de sol|\bola[s]?\b/gi, 3], [/\bmar\b|r[ií]o\b|costanera|muelle/gi, 2]]
  };

  var RESPALDO_SVG = {
    mate: "media/mate.svg", mascota: "media/mascota.svg", bici: "media/bici.svg",
    ave: "media/ave.svg", comida: "media/comida.svg", ruta: "media/ruta.svg",
    pesca: "media/pesca.svg", murga: "media/murga.svg", auto: "media/auto.svg",
    casa: "media/casa.svg", herramienta: "media/herramienta.svg", electro: "media/electro.svg",
    cancha: "media/cancha_misterio.svg", feria: "media/comida.svg", campo: "media/ruta.svg",
    ciudad: "media/casa.svg", costa: "media/rambla_atardecer.svg", rambla: "media/rambla_atardecer.svg"
  };

  // Señales de respaldo cuando el texto no alcanza para decidir
  var POR_CATEGORIA = {
    "Vehículos": "auto", "Hogar": "casa", "Electrónica": "electro",
    "Inmuebles": "casa", "Servicios": "herramienta", "Animales": "mascota", "Varios": "feria"
  };
  var POR_GRUPO = {
    pesca: "pesca", cocina: "comida", murgas: "murga", "vecinos-cerro": "ciudad",
    ruta5: "ruta", aves: "ave", mascotas: "mascota", "cx-radio": "electro",
    docentes: "ciudad", comprovendo: "feria", mateando: "mate", laposta: "ciudad"
  };

  var UMBRAL = 3;

  function temaDe(texto) {
    var mejor = null, max = 0;
    Object.keys(VOCAB).forEach(function (t) {
      var s = 0;
      for (var k = 0; k < VOCAB[t].length; k++) {
        var m = String(texto).match(VOCAB[t][k][0]);
        if (m) s += m.length * VOCAB[t][k][1];
      }
      if (s > max) { max = s; mejor = t; }
    });
    return { tema: mejor, puntaje: max };
  }

  /* Fotos apalabradas: pertenecen a una publicación concreta y llevan algo
     adentro (un mensaje en los metadatos, una ficha de especie). No pueden
     salir sorteadas para ilustrar cualquier otra publicación, porque eso
     las repartiría por todo el sitio y arruinaría lo que sostienen. */
  var RESERVADAS = {
    "ciudad_5.jpg": 1, "ciudad_6.jpg": 1, "ciudad_7.jpg": 1, "ciudad_8.jpg": 1,
    "costa_2.jpg": 1, "costa_3.jpg": 1, "costa_4.jpg": 1,
    "rambla_4.jpg": 1, "rambla_5.jpg": 1, "rambla_6.jpg": 1,
    "ave_5.jpg": 1, "ave_6.jpg": 1, "ave_7.jpg": 1, "ave_8.jpg": 1,
    "ave_9.jpg": 1, "ave_10.jpg": 1, "ave_11.jpg": 1, "ave_12.jpg": 1
  };

  function fotoDelTema(tema, semilla) {
    var fotos = (window.FOTOS || {})[tema];
    if (fotos && fotos.length) {
      var libres = [];
      for (var i = 0; i < fotos.length; i++) {
        var nombre = String(fotos[i]).split("/").pop();
        if (!RESERVADAS[nombre]) libres.push(fotos[i]);
      }
      if (libres.length) return libres[semillaDe(semilla) % libres.length];
    }
    return RESPALDO_SVG[tema] || "media/rambla_atardecer.svg";
  }

  /* Imagen de una publicación. Si declara una foto concreta del banco,
     manda esa. Los valores `media/*.svg` que traen muchas publicaciones
     son solo la marca de "esta lleva foto", no una elección: en ese caso
     se deduce del texto y, si no alcanza, del grupo. */
  function imagenDe(p) {
    if (p.imagen && p.imagen.indexOf("media/fotos/") === 0) return p.imagen;
    var r = temaDe(p.texto);
    if (r.tema && r.puntaje >= UMBRAL) return fotoDelTema(r.tema, p.id);
    if (p.grupo && POR_GRUPO[p.grupo]) return fotoDelTema(POR_GRUPO[p.grupo], p.id);
    if (r.tema && r.puntaje > 0) return fotoDelTema(r.tema, p.id);
    return fotoDelTema("ciudad", p.id);
  }

  /* Imagen de un aviso. Si el aviso declara su foto, manda esa: las fotos
     del banco son escenas, no fotos de catálogo, así que los avisos se
     escribieron para la foto que les toca. Si no la declara, se deduce
     del título (que pesa doble) y, en última instancia, de la categoría. */
  function imagenAviso(a) {
    if (a.imagen) return a.imagen;
    var r = temaDe(a.titulo + " " + a.titulo + " " + a.descripcion);
    if (r.tema && r.puntaje >= UMBRAL) return fotoDelTema(r.tema, a.id);
    var porCat = POR_CATEGORIA[a.categoria];
    if (porCat) return fotoDelTema(porCat, a.id);
    if (r.tema && r.puntaje > 0) return fotoDelTema(r.tema, a.id);
    return fotoDelTema("feria", a.id);
  }

  /* Pie de archivo. El sanitizador de metadatos está caído desde marzo,
     así que la plataforma muestra el archivo tal como llegó. */
  var CAMARAS = ["Motorola moto g24", "Samsung SM-A546E", "Xiaomi Redmi Note 13",
                 "Motorola moto e13", "Samsung SM-A155M", "iPhone SE (3.ª generación)"];

  function pieDeArchivo(p) {
    var f = partes(p.fecha);
    if (!f) return "";
    var s = semillaDe(p.id);
    var seq = (s % 9000) + 1000;
    var nombre = "IMG-" + f.a + f.m + f.d + "-WA" + String(seq).slice(0, 4) + ".jpg";
    var camara = CAMARAS[s % CAMARAS.length];
    var txt = nombre + " · tomada " + fechaHora(p.fecha) + " · " + camara;
    if (p.gps) txt += " · " + p.gps;
    return '<div class="post-archivo">' + esc(txt) + "</div>";
  }

  /* Audios que la gente manda y nadie puede escuchar. Se detectan por el
     propio texto de la publicación: "audio de 3:20". */
  function adjuntoAudio(p) {
    var texto = String(p.texto);
    // Si habla de un audio ajeno que anda dando vueltas, no lo está adjuntando.
    if (/circul|reenvi|recibieron|me lleg|est[aá]n pasando|anda dando vueltas|no lo pasen/i.test(texto)) return "";
    var m = /audio\s+(?:de\s+)?(\d{1,2}):(\d{2})/i.exec(texto);
    if (!m) return "";
    var f = partes(p.fecha);
    if (!f) return "";
    var min = parseInt(m[1], 10), seg = parseInt(m[2], 10);
    var kb = (min * 60 + seg) * 14 + 40;
    var nombre = "audio-" + f.a + f.m + f.d + "-" + f.h + f.min + ".amr";
    return '<div class="adjunto">' +
      '<span class="adjunto-icono">AMR</span>' +
      '<span class="adjunto-datos">' +
      '<span class="adjunto-nombre">' + esc(nombre) + "</span>" +
      '<span class="adjunto-detalle">' + min + " min " + seg + " s · " + numero(kb) +
      " KB · este formato no se puede reproducir en el navegador</span></span>" +
      '<span style="font-size:12.5px;color:var(--azul);text-decoration:underline">Descargar</span></div>';
  }

  /* =======================================================
     3. Componentes
     ======================================================= */

  function encuestaHTML(e) {
    if (!e || !e.opciones || !e.opciones.length) return "";
    var total = 0, k;
    for (k = 0; k < e.opciones.length; k++) total += Number(e.opciones[k].votos || 0);
    var maxi = 0;
    for (k = 0; k < e.opciones.length; k++) {
      if (Number(e.opciones[k].votos || 0) > Number(e.opciones[maxi].votos || 0)) maxi = k;
    }
    var h = '<div style="margin:11px 14px 0;border:1px solid var(--borde);border-radius:4px;padding:11px 13px;background:#fbfcfd">';
    h += '<div style="font-weight:600;margin-bottom:9px;font-size:14px">' + esc(e.pregunta) + "</div>";
    for (k = 0; k < e.opciones.length; k++) {
      var o = e.opciones[k], v = Number(o.votos || 0);
      var pct = total ? Math.round(v * 100 / total) : 0;
      h += '<div style="margin-bottom:7px">';
      h += '<div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:3px">' +
        "<span>" + esc(o.texto) + "</span><span style=\"color:var(--gris-claro)\">" + pct + "% · " + numero(v) + "</span></div>";
      h += '<div style="height:7px;background:#e4e9ef;border-radius:2px;overflow:hidden">' +
        '<div style="height:100%;width:' + pct + '%;background:' + (k === maxi ? "var(--dorado)" : "var(--azul)") + '"></div></div>';
      h += "</div>";
    }
    h += '<div style="font-size:12px;color:var(--gris-claro);margin-top:8px">' + numero(total) + " votos";
    if (e.cierra) h += " · cierra el " + fechaCorta(e.cierra);
    h += "</div></div>";
    return h;
  }

  function comentarioHTML(c, destacado) {
    var u = usuario(c.autor);
    var h = '<div class="comentario' + (destacado ? " destacado" : "") + '">';
    h += '<span class="comentario-autor"><a href="perfil.html?u=' + esc(u.alias) + '">' + esc(u.nombre) + "</a></span>";
    h += ' <span class="comentario-fecha">· ' + fechaHora(c.fecha) + "</span><br>";
    h += '<span class="comentario-txt">' + enlazar(c.texto) + "</span>";
    if (arr(c.respuestas).length) {
      h += '<div class="respuestas">';
      for (var k = 0; k < c.respuestas.length; k++) h += comentarioHTML(c.respuestas[k]);
      h += "</div>";
    }
    h += "</div>";
    return h;
  }

  function postHTML(p, op) {
    op = op || {};
    var u = usuario(p.autor);
    var g = p.grupo ? grupo(p.grupo) : null;

    // El filete de la izquierda toma el color de la sección de la que viene
    var h = '<article class="post' + (g ? " p-grupo" : "") + '" id="post-' + p.id + '">';

    // "Te lo compartió Fulano" — sólo visible con sesión, para no revelar
    // qué cuentas hay en el grafo antes de iniciar sesión.
    if (p.compartido_por && HAY_SESION) {
      var cp = usuario(p.compartido_por);
      h += '<div class="post-compartido">↪ <a href="perfil.html?u=' + esc(cp.alias) + '">' +
        esc(cp.nombre) + "</a> compartió esto</div>";
    }

    // Por qué esta publicación volvió a subir al muro
    if (p._act) {
      var coms = arr(p.comentarios), ultimo = null;
      coms.forEach(function (c) {
        if (!ultimo || c.fecha > ultimo.fecha) ultimo = c;
        arr(c.respuestas).forEach(function (r) { if (r.fecha > ultimo.fecha) ultimo = r; });
      });
      var quien = ultimo ? usuario(ultimo.autor).nombre : null;
      h += '<div class="actividad">Actividad reciente · ' + haceCuanto(p._act.minutos);
      if (quien) h += " · último comentario de " + esc(quien);
      h += "</div>";
    }

    h += '<div class="post-cab">' + avatarHTML(u);
    h += '<div class="post-quien">';
    h += '<div class="post-nombre"><a href="perfil.html?u=' + esc(u.alias) + '">' + esc(u.nombre) + "</a>" + insignia(u);
    if (u.ubicacion) h += ' <span class="post-donde">· ' + esc(u.ubicacion) + "</span>";
    h += "</div>";

    // Línea de metadatos: fecha, visibilidad y de dónde salió la publicación
    var meta = fechaLarga(p.fecha);
    if (g && op.mostrarGrupo !== false) {
      meta += ' · Grupo: <a href="grupo.html?g=' + esc(g.slug) + '">' + esc(g.nombre) + "</a>";
    } else if (!g) {
      meta += " · Público";
    }
    if (u.alias === "tero_bot_noticias") meta += " · publicado automáticamente";
    if (p.editado) meta += ' · <span class="tag-editado">editado</span>';
    h += '<div class="post-meta">' + meta + "</div>";
    h += "</div>";
    h += '<span class="post-puntos">···</span></div>';

    h += '<div class="post-texto">' + enlazar(p.texto) + "</div>";

    if (p.nota_interna) h += '<div class="nota-interna-oculta">' + esc(p.nota_interna) + "</div>";
    if (p.encuesta) h += encuestaHTML(p.encuesta);
    h += adjuntoAudio(p);

    if (p.imagen) {
      var img = imagenDe(p);
      // alt descriptivo para lectores de pantalla: tema de la foto + autor
      var temaImg = (String(img).split("/").pop().split("_")[0] || "").replace(/\.[a-z]+$/i, "");
      var altImg = "Foto" + (temaImg ? " (" + temaImg + ")" : "") + " en la publicación de " + usuario(p.autor).nombre;
      h += '<div class="post-medios">';
      h += '<a href="' + esc(img) + '" target="_blank" rel="noopener"><img src="' + esc(img) +
        '" alt="' + esc(altImg) + '" loading="lazy"></a>';
      h += pieDeArchivo(p);
      h += "</div>";
    }

    h += '<div class="post-pie">';

    if (repetidas[p.id]) {
      var otras = repetidas[p.id] - 1;
      h += '<div class="aviso-sistema">Esta publicación es idéntica a ' +
        (otras === 1 ? "otra de la misma cuenta" : "otras " + otras + " de la misma cuenta") + ". " +
        '<a href="buscar.html?q=' + encodeURIComponent(String(p.texto).slice(0, 40)) + '">Ver las anteriores</a></div>';
    }
    if (p.reenviado && p.reenviado >= 10) {
      h += '<div class="post-reenviado">↺ reenviado ' + numero(p.reenviado) + " veces</div>";
    }

    h += '<div class="post-acciones">';
    h += '<span class="acciones"><span>Aplaudir</span><span>Responder</span><span>Pasar</span></span>';
    var c = contadores(p);
    h += '<span class="contadores">' + (c || "todavía nadie dijo nada") + "</span>";
    h += "</div>";

    var coms = arr(p.comentarios);
    if (coms.length && op.comentarios !== false) {
      var lista = op.todos ? coms : coms.slice(0, 2);
      h += '<div class="comentarios">';
      for (var k = 0; k < lista.length; k++) h += comentarioHTML(lista[k]);
      h += "</div>";
      if (!op.todos && coms.length > 2) {
        h += '<a class="ver-mas" href="post.html?id=' + p.id + '">Ver las ' + coms.length + " respuestas</a>";
      }
    }
    h += "</div></article>";
    return h;
  }

  function avisoHTML(a) {
    var h = '<a class="aviso" href="aviso.html?id=' + a.id + '">';
    if (a.vendido) h += '<span class="cinta-vendido">VENDIDO</span>';
    h += '<span class="aviso-foto"><img src="' + esc(imagenAviso(a)) + '" alt="' + esc(a.titulo || "aviso") + '" loading="lazy"></span>';
    h += '<span class="aviso-cuerpo">';
    h += '<span class="aviso-precio">' + (a.moneda === "USD" ? "USD " : "$ ") + numero(a.precio) + "</span>";
    h += '<span class="aviso-titulo">' + esc(a.titulo) + "</span>";
    h += '<span class="aviso-lugar">' + esc(a.ubicacion) + " · " + fechaCorta(a.publicado) + "</span>";
    h += "</span></a>";
    return h;
  }

  function eventoHTML(ev) {
    var p = partes(ev.fecha);
    var pasado = dias(ev.fecha, HOY) > 0;
    var g = ev.grupo ? grupo(ev.grupo) : null;

    var h = '<article class="evento' + (pasado ? " pasado" : "") + '" id="ev-' + ev.id + '">';
    h += '<div class="evento-fecha"><div class="mes">' + (p ? MESES[p.mn - 1] : "—") + "</div>";
    h += '<div class="dia">' + (p ? p.dn : "?") + "</div>";
    h += '<div class="anio">' + (p ? p.a : "") + "</div></div>";

    h += '<div class="evento-cuerpo"><h3>' + esc(ev.titulo) + "</h3>";
    h += '<div class="evento-lugar">' + esc(ev.lugar) + " · " + (p ? p.h + ":" + p.min : "") +
      (pasado ? ' · <span class="etiqueta">ya pasó</span>' : "") + "</div>";
    if (g) h += '<div style="margin-bottom:6px"><a class="etiqueta grupo" href="grupo.html?g=' + esc(g.slug) + '">' + esc(g.nombre) + "</a></div>";
    h += '<div class="evento-desc">' + enlazar(ev.descripcion) + "</div>";

    var org = usuario(ev.organizador);
    h += '<div style="font-size:13px;color:var(--gris)">Organiza <a href="perfil.html?u=' +
      esc(org.alias) + '">' + esc(org.nombre) + "</a></div>";

    var asist = arr(ev.asistentes), inter = arr(ev.interesados);
    h += '<div style="font-size:12.5px;color:var(--gris-claro);margin-top:7px">' +
      asist.length + " personas confirmaron · " + inter.length + " marcaron interés</div>";
    if (asist.length) {
      h += '<div class="asistentes">';
      for (var k = 0; k < Math.min(asist.length, 14); k++) h += avatarHTML(usuario(asist[k]), "avatar-mini");
      if (asist.length > 14) h += '<span class="etiqueta">+' + (asist.length - 14) + "</span>";
      h += "</div>";
    }
    h += "</div></article>";
    return h;
  }

  function reporteHTML(r) {
    var p = indicePosts[r.post_id];
    var h = '<article class="reporte ' + esc(r.estado) + '">';
    h += '<div class="reporte-cab"><span>Caso #' + r.id + " · motivo: <b>" + esc(r.motivo) +
      "</b> · " + fechaCorta(r.fecha) + "</span>";
    h += '<span class="etiqueta ' + (r.estado === "resuelto" ? "ok" : (r.estado === "pendiente" ? "alerta" : "")) +
      '">' + esc(r.estado) + "</span></div>";

    h += "<div style=\"font-size:13.5px\">Publicación reportada: ";
    if (p) {
      var txt = p.texto.length > 90 ? p.texto.slice(0, 90) + "…" : p.texto;
      h += '<a href="post.html?id=' + p.id + '">#' + p.id + "</a> de " + esc(usuario(p.autor).nombre) +
        ' — <span style="color:var(--gris)">“' + esc(txt) + '”</span>';
    } else {
      h += '<a href="post.html?id=' + esc(r.post_id) + '">#' + esc(r.post_id) + "</a> " +
        '<span class="etiqueta">contenido ya no disponible</span>';
    }
    h += "</div>";

    var quienes = arr(r.reportado_por).map(function (a) {
      return '<a href="perfil.html?u=' + esc(a) + '">' + esc(usuario(a).nombre) + "</a>";
    }).join(", ");
    h += '<div style="font-size:12.5px;color:var(--gris-claro);margin:6px 0">Reportada por ' +
      arr(r.reportado_por).length + ": " + quienes + "</div>";

    if (r.detalle) h += '<div class="reporte-detalle">“' + esc(r.detalle) + "”</div>";
    h += '<div class="reporte-resolucion"><span class="et">Resolución</span>' +
      (r.resolucion ? esc(r.resolucion) : "Sin resolver. En cola.") + "</div>";
    h += "</article>";
    return h;
  }

  /* =======================================================
     4. Estructura de la página
     ======================================================= */

  var NAV = [
    { href: "index.html",       txt: "Inicio",      vistas: ["feed"],              cls: "n-inicio" },
    { href: "grupos.html",      txt: "Grupos",      vistas: ["grupos", "grupo"],   cls: "n-grupos" },
    { href: "feria.html", txt: "La Feria", vistas: ["market", "aviso"], cls: "n-feria" },
    { href: "eventos.html",     txt: "Eventos",     vistas: ["eventos"],           cls: "n-eventos" }
  ];

  /* El cacharro del clima de la barra. Decorativo: no consulta nada.
     Cambia una vez por día, no en cada recarga, para que no distraiga. */
  /* Paleta invernal: el "hoy" de la plataforma es el 5 de agosto, pleno
     invierno rioplatense. Nada de solazos ni 19°: garúa, viento sur y
     alguna helada, coherente con el "garúa · 11°" del login. */
  var CLIMAS = [
    ["Garúa", 11], ["Nublado", 12], ["Fresco", 9], ["Helada", 4],
    ["Viento sur", 7], ["Húmedo", 13], ["Llovizna", 10], ["Despejado frío", 8]
  ];
  function climaHTML() {
    var d = new Date();
    var dia = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
    var c = CLIMAS[mezclar(dia) % CLIMAS.length];
    var svg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8fb0c4" ' +
      'stroke-width="1.7" aria-hidden="true"><path d="M6 13a4 4 0 0 1 .6-8 5.5 5.5 0 0 1 10.5 1.4A3.5 3.5 0 0 1 17 13z"/>' +
      '<path d="M8 16.5l-1 2.5M12 16.5l-1 2.5M16 16.5l-1 2.5"/></svg>';
    return svg + esc(c[0]) + " · " + c[1] + "°";
  }

  function pintarBarra(vista) {
    var el = document.getElementById("barra");
    if (!el) return;
    var yo = usuario(YO);

    var h = '<a class="saltar" href="#vista">Saltar al contenido</a>';
    h += '<div class="barra-int"><div class="barra-izq">';
    h += '<a class="logo" href="index.html"><span class="logo-disco">';
    h += '<span style="width:11px;height:11px;border-radius:50%;background:#e4e0d6"></span>';
    h += "</span><b>tero</b><i>social</i></a>";

    // La navegación va adentro de la misma franja, en pastillas
    h += '<nav class="nav-links" aria-label="Secciones">';
    for (var n = 0; n < NAV.length; n++) {
      var activo = NAV[n].vistas.indexOf(vista) >= 0 ? "activo " + NAV[n].cls : "";
      h += '<a class="' + activo + '" href="' + NAV[n].href + '">' + NAV[n].txt + "</a>";
    }
    h += "</nav></div>";

    h += '<div class="barra-der">';
    h += '<form action="buscar.html" method="get" style="display:flex">';
    h += '<input type="search" name="q" placeholder="Buscá gente, grupos, avisos…" aria-label="Buscar" value="' +
      esc(vista === "buscar" ? param("q") : "") + '"></form>';
    h += '<span class="clima">' + climaHTML() + "</span>";

    if (HAY_SESION) {
      h += '<a class="barra-yo" href="perfil.html?u=' + esc(yo.alias) + '">' +
        avatarHTML(yo, "avatar-mini", false) + esc(yo.alias) + "</a>";
      h += '<a href="#" id="salir" class="barra-salir">Salir</a>';
    } else {
      h += '<a class="barra-yo" href="login.html" style="text-decoration:underline">Ingresar</a>';
    }
    h += "</div></div>";

    el.className = "barra";
    el.innerHTML = h;

    var salir = document.getElementById("salir");
    if (salir) {
      salir.addEventListener("click", function (e) {
        e.preventDefault();
        window.SESION.salir();
        location.href = "login.html";
      });
    }

    // Cintillo permanente mientras no haya sesión iniciada
    if (!HAY_SESION) {
      var c = document.createElement("div");
      c.className = "cintillo";
      c.innerHTML = '<div class="cintillo-int"><span>Estás viendo TeroSocial sin iniciar sesión. ' +
        "Los grupos cerrados, los datos de contacto y la cola de moderación no se muestran.</span>" +
        '<a href="login.html">Ingresar</a></div>';
      el.parentNode.insertBefore(c, el.nextSibling);
    }
  }

  function pintarMenu(vista) {
    var el = document.getElementById("nav");
    if (!el) return;

    var items = [
      { href: "index.html",       txt: "Inicio",      vistas: ["feed"] },
      { href: "grupos.html",      txt: "Grupos",      vistas: ["grupos", "grupo"], num: GRUPOS.length },
      { href: "feria.html", txt: "La Feria", vistas: ["market", "aviso"] },
      { href: "eventos.html",     txt: "Eventos",     vistas: ["eventos"] }
    ];

    var h = '<nav class="menu">';
    for (var k = 0; k < items.length; k++) {
      var act = items[k].vistas.indexOf(vista) >= 0 ? " activo" : "";
      h += '<a class="' + act.trim() + '" href="' + items[k].href + '">';
      h += '<span class="menu-izq"><span class="menu-cuadro"></span>' + items[k].txt + "</span>";
      if (items[k].num) h += '<span class="menu-num">' + items[k].num + "</span>";
      h += "</a>";
    }
    h += "</nav>";

    /* Con sesión iniciada se listan los grupos a los que pertenece esa
       cuenta, no los más grandes de la red: si no, cualquiera parecería
       miembro de todo. Sin sesión se muestran los más concurridos. */
    var destacados, tituloGrupos, verTodos;
    if (HAY_SESION) {
      destacados = arr(usuario(YO).grupos).map(grupo).filter(Boolean);
      tituloGrupos = "Mis grupos";
      verTodos = destacados.length ? "ver todos los grupos" : "";
    } else {
      destacados = GRUPOS.slice().sort(function (a, b) {
        return (b.miembros || 0) - (a.miembros || 0);
      }).slice(0, 5);
      tituloGrupos = "Los más concurridos";
      verTodos = GRUPOS.length > 5 ? "ver los " + GRUPOS.length : "";
    }

    if (destacados.length) {
      h += '<div class="panel"><div class="panel-cuerpo">';
      h += '<div class="panel-tit">' + tituloGrupos + '</div><div class="mis-grupos">';
      for (var j = 0; j < destacados.length; j++) {
        h += '<a href="grupo.html?g=' + esc(destacados[j].slug) + '">' +
          '<span class="punto-grupo" style="background:' + esc(destacados[j].color || "#4f7d9c") + '">' +
          esc(String(destacados[j].nombre).replace(/^(los|las|el|la) /i, "").charAt(0).toUpperCase()) + "</span>" +
          "<span>" + esc(destacados[j].nombre) + "</span></a>";
      }
      if (verTodos) {
        h += '<a href="grupos.html" style="color:var(--azul-osc);font-weight:600;margin-top:2px">' + verTodos + "</a>";
      }
      h += "</div></div></div>";
    }
    el.innerHTML = h;
  }

  function pintarLateral(extra) {
    var el = document.getElementById("lateral");
    if (!el) return;
    var h = extra || "";

    var prox = EVENTOS.filter(function (e) { return dias(e.fecha, HOY) <= 0; })
      .sort(function (a, b) { return a.fecha < b.fecha ? -1 : 1; }).slice(0, 3);
    // El primero va destacado en terracota; los demás, en lista
    if (prox.length) {
      var p0 = prox[0];
      var anotados = arr(p0.asistentes).length;
      h += '<div class="evento-destacado"><div class="et">Próximo evento</div>';
      h += '<h3><a href="eventos.html#ev-' + p0.id + '">' + esc(p0.titulo) + "</a></h3>";
      h += '<div class="cuando">' + fechaCorta(p0.fecha) + " · " + esc(p0.lugar);
      if (anotados) h += " · " + anotados + " anotados";
      h += "</div></div>";

      if (prox.length > 1) {
        h += '<div class="panel"><div class="panel-cuerpo"><div class="panel-tit t-eventos">Lo que viene</div>';
        h += '<div style="display:flex;flex-direction:column;gap:11px">';
        for (var k = 1; k < prox.length; k++) {
          h += '<div><div class="lista-nombre"><a href="eventos.html#ev-' + prox[k].id + '">' + esc(prox[k].titulo) + "</a></div>";
          h += '<div class="lista-sub">' + fechaCorta(prox[k].fecha) + " · " + esc(prox[k].lugar) + "</div></div>";
        }
        h += "</div></div></div>";
      }
    }

    // Lo más comentado: los hilos públicos con más movimiento. Se arma solo
    // a partir de los datos, así que siempre refleja el estado real de la red.
    var masComentado = POSTS.filter(function (p) {
      return !p.grupo && visible(p) && arr(p.comentarios).length >= 3;
    }).map(function (p) {
      var n = 0;
      arr(p.comentarios).forEach(function (c) { n++; arr(c.respuestas).forEach(function () { n++; }); });
      return { p: p, n: n };
    }).sort(function (a, b) { return b.n - a.n; }).slice(0, 4);
    if (masComentado.length) {
      h += '<div class="panel"><div class="panel-cuerpo"><div class="panel-tit t-azul">Lo más comentado</div>';
      h += '<div style="display:flex;flex-direction:column;gap:11px">';
      for (var mc = 0; mc < masComentado.length; mc++) {
        var pm = masComentado[mc].p;
        var resumen = String(pm.texto).replace(/\s+/g, " ").slice(0, 62);
        if (pm.texto.length > 62) resumen += "…";
        h += '<div><div class="lista-nombre"><a href="post.html?id=' + pm.id + '">' + esc(resumen) + "</a></div>";
        h += '<div class="lista-sub">' + esc(usuario(pm.autor).nombre) + " · " + masComentado[mc].n + " respuestas</div></div>";
      }
      h += "</div></div></div>";
    }

    /* Cuentas que quizá conozcas: amigos de tus amigos. Se arma sólo con
       sesión, del mismo grafo que el resto del sitio, así que las cuentas
       ocultas (dadas de baja o fuera del padrón) nunca asoman acá. Cuenta
       cuántos de tus seguidos siguen también a cada candidata. */
    if (HAY_SESION && window.SOCIAL && YO) {
      var yoSigue = SOCIAL.sigue(YO);
      var yaConocidas = {}; yaConocidas[YO] = 1;
      for (var s0 = 0; s0 < yoSigue.length; s0++) yaConocidas[yoSigue[s0]] = 1;
      var puntaje = {};
      for (var s1 = 0; s1 < yoSigue.length; s1++) {
        var suyos = SOCIAL.sigue(yoSigue[s1]);
        for (var s2 = 0; s2 < suyos.length; s2++) {
          var cand = suyos[s2];
          if (yaConocidas[cand]) continue;
          var uc = indiceUsuarios[cand];
          if (!uc || uc.oculto) continue;
          puntaje[cand] = (puntaje[cand] || 0) + 1;
        }
      }
      var pymk = Object.keys(puntaje).sort(function (a, b) {
        return puntaje[b] - puntaje[a] || semillaDe(a) - semillaDe(b);
      }).slice(0, 4);
      if (pymk.length) {
        h += '<div class="panel"><div class="panel-cuerpo"><div class="panel-tit">Cuentas que quizá conozcas</div>';
        h += '<ul class="lista lista-sug">';
        for (var s3 = 0; s3 < pymk.length; s3++) {
          var up = usuario(pymk[s3]);
          h += "<li>" + avatarHTML(up, "avatar-ch");
          h += '<div><div class="lista-nombre"><a href="perfil.html?u=' + esc(up.alias) + '">' +
            esc(up.nombre) + "</a>" + insignia(up) + puntoEnLinea(up) + "</div>";
          var enComun = puntaje[pymk[s3]];
          h += '<div class="lista-sub">' + (enComun === 1 ? "1 conocido en común" : enComun + " conocidos en común") + "</div>";
          h += "</div></li>";
        }
        h += "</ul></div></div>";
      }
    }

    var sug = GRUPOS.slice().sort(function (a, b) {
      return semillaDe(a.slug) - semillaDe(b.slug);
    }).slice(0, 3);
    if (sug.length) {
      h += '<div class="panel"><div class="panel-cuerpo"><div class="panel-tit">Grupos que quizá te interesen</div>';
      h += '<div style="display:flex;flex-direction:column;gap:11px">';
      for (var j = 0; j < sug.length; j++) {
        h += '<div><div class="lista-nombre"><a href="grupo.html?g=' + esc(sug[j].slug) + '">' + esc(sug[j].nombre) + "</a></div>";
        h += '<div class="lista-sub">' + numero(sug[j].miembros) + " miembros · " +
          (sug[j].privacidad === "cerrado" ? "cerrado" : "público") + "</div></div>";
      }
      h += "</div></div></div>";
    }

    var recientes = AVISOS.filter(function (a) { return !a.vendido; })
      .sort(function (a, b) { return a.publicado < b.publicado ? 1 : -1; }).slice(0, 3);
    if (recientes.length) {
      h += '<div class="panel"><div class="panel-cuerpo"><div class="panel-tit t-feria">La Feria · cerca tuyo</div>';
      h += '<div style="display:flex;flex-direction:column;gap:11px">';
      for (var m = 0; m < recientes.length; m++) {
        var a = recientes[m];
        h += '<a class="mini-aviso" href="aviso.html?id=' + a.id + '" style="color:inherit">';
        h += '<span class="mini-aviso-foto"><img src="' + esc(imagenAviso(a)) + '" alt="' + esc(a.titulo || "aviso") + '" loading="lazy"></span>';
        h += "<span><span class=\"mini-aviso-tit\">" + esc(a.titulo) + "</span>";
        h += '<span class="mini-aviso-precio">' + (a.moneda === "USD" ? "USD " : "$ ") + numero(a.precio) + "</span>";
        h += '<span class="mini-aviso-sub">' + esc(a.ubicacion) + "</span></span></a>";
      }
      h += "</div></div></div>";
    }

    h += '<div class="pie-lateral">TeroSocial · desde 2018<br>' +
      (HAY_SESION ? '<a href="configuracion.html">Configuración</a> · ' : "") +
      '<a href="terminos.html">Términos</a> · <a href="terminos.html">Privacidad</a> · ' +
      '<a href="terminos.html">Ayuda</a> · <a href="perfil.html?u=soporte_terosocial">Contacto</a><br>Motor 3.0</div>';

    el.innerHTML = h;
  }

  function paginar(contenedor, items, render, tam, vacio) {
    tam = tam || 20;
    var mostrados = 0;

    function pintar() {
      var hasta = Math.min(mostrados + tam, items.length);
      var h = "";
      for (var k = mostrados; k < hasta; k++) h += render(items[k]);
      mostrados = hasta;

      var boton = contenedor.querySelector(".boton-mas");
      if (boton) boton.parentNode.removeChild(boton);
      contenedor.insertAdjacentHTML("beforeend", h);

      if (mostrados < items.length) {
        var b = document.createElement("button");
        b.className = "boton-mas";
        b.textContent = "Ver publicaciones más antiguas";
        b.addEventListener("click", pintar);
        contenedor.appendChild(b);
      }
    }

    if (!items.length) {
      contenedor.innerHTML = '<div class="panel"><div class="vacio">' + (vacio || "No hay nada por acá todavía.") + "</div></div>";
      return;
    }
    contenedor.innerHTML = "";
    pintar();
  }

  /* =======================================================
     5. Vistas
     ======================================================= */

  var vistas = {};

  vistas.estatica = function () { pintarLateral(); };

  vistas.feed = function (cont) {
    var posts = ordenarPorActividad(POSTS.filter(function (p) { return !p.grupo && visible(p); }));
    var h = "";

    if (HAY_SESION) {
      var yo = usuario(YO);
      h += '<div class="panel"><div class="componer">' + avatarHTML(yo, "", false);
      h += '<div class="componer-campo">Contá algo, ' + esc(String(yo.nombre).split(" ")[0]) + "?</div>";
      h += '<button class="boton" type="button">Publicar</button></div>';
      h += '<div class="componer-pie"><div class="componer-opts">' +
        "<span>Foto</span><span class=\"o-feria\">Aviso en La Feria</span>" +
        "<span class=\"o-evento\">Evento</span></div></div></div>";
    }

    var movidas = posts.filter(function (p) { return p._act; }).length;
    h += '<div class="nota-orden"><span>Muro público. Arriba, lo que tuvo movimiento hace poco' +
      (movidas ? " (" + movidas + " publicaciones)" : "") + "; debajo, por fecha.</span>" +
      '<a href="index.html">Actualizar</a></div>';
    cont.innerHTML = h;

    var lista = document.createElement("div");
    lista.style.display = "flex";
    lista.style.flexDirection = "column";
    lista.style.gap = "12px";
    cont.appendChild(lista);

    // Sin sesión el muro se corta: se ve el principio y nada más.
    var tope = HAY_SESION ? posts.length : Math.min(posts.length, 12);
    paginar(lista, posts.slice(0, tope), function (p) { return postHTML(p); }, 20);

    if (!HAY_SESION && posts.length > tope) {
      lista.insertAdjacentHTML("beforeend", muroHTML(
        "Hay " + numero(posts.length - tope) + " publicaciones más en el muro público",
        "Ingresá con tu cuenta para seguir viendo el muro, los grupos y los datos de contacto."));
    }
    pintarLateral();
  };

  vistas.perfil = function (cont) {
    var alias = param("u") || YO;
    var u = usuario(alias);
    document.title = u.nombre + " · TeroSocial";

    if (u._inexistente) {
      cont.innerHTML = '<div class="panel"><div class="vacio">No existe ninguna cuenta con el identificador <b>' +
        esc(alias) + "</b>.</div></div>";
      pintarLateral();
      return;
    }

    var h = '<div class="perfil-cab"><div class="portada"></div><div class="perfil-cuerpo">';
    h += '<div class="perfil-fila">' + avatarHTML(u, "avatar-gr", false) + "<div>";
    h += '<h1 class="perfil-nombre">' + esc(u.nombre) + insignia(u) +
      (enLinea(u) ? ' <span class="pill-enlinea"><span class="dot-enlinea"></span>en línea</span>' : "") + "</h1>";
    h += '<div class="perfil-alias">' + esc(u.alias) + "</div></div></div>";

    if (u.oculto) {
      h += '<div class="aviso-baja">Esta cuenta fue dada de baja por su titular. El contenido se conserva ' +
        "en modo archivo de solo lectura y no aparece en el buscador ni en las sugerencias.</div>";
    }

    h += '<div class="perfil-bio" id="bio">' + esc(u.bio) + "</div>";
    if (HAY_SESION) {
      h += '<button class="btn-texto" id="btn-bio">Ver biografía completa</button>';
      if (u.estado) {
        h += '<div class="ficha-dato"><span class="et">Estado actual</span><span class="mono">' + esc(u.estado) + "</span></div>";
      }
    } else {
      h += '<div class="oculto-sesion" style="font-size:12.5px">La biografía completa y el estado ' +
        'solo se muestran a quienes iniciaron sesión. <a href="login.html">Ingresar</a></div>';
    }

    h += '<div class="perfil-datos">';
    if (u.ubicacion) h += "<span>" + esc(u.ubicacion) + "</span>";
    if (u.se_unio) h += "<span>Se unió el " + fechaCorta(u.se_unio + "T00:00") + "</span>";
    h += '<span class="etiqueta">identificador: ' + esc(u.alias) + "</span>";
    // Última conexión (opcional, se muestra si el campo existe)
    if (u.ultima_conexion) {
      var dUC = dias(u.ultima_conexion, HOY);
      var textoUC, recienteUC;
      if (dUC === 0) { textoUC = "conectado hoy"; recienteUC = true; }
      else if (dUC === 1) { textoUC = "conectado ayer"; recienteUC = true; }
      else if (dUC <= 7) { textoUC = "conectado hace " + dUC + " días"; recienteUC = true; }
      else { textoUC = "conectado hace más de una semana"; recienteUC = false; }
      h += '<span class="perfil-ult-conexion"><span class="dot-conexion' + (recienteUC ? " reciente" : "") + '"></span>' +
        esc(textoUC) + "</span>";
    }
    h += "</div>";

    var propios = POSTS.filter(function (p) { return p.autor === alias && visible(p); });
    h += '<div class="perfil-nums"><span><b>' + numero(u.seguidores) + "</b> seguidores</span>";
    h += "<span><b>" + numero(u.siguiendo) + "</b> siguiendo</span>";
    h += "<span><b>" + numero(propios.length) + "</b> publicaciones</span></div>";

    // Puerta de entrada a Configuración, sólo en el perfil propio.
    if (HAY_SESION && YO === alias) {
      h += '<div style="margin-top:10px"><a class="etiqueta" style="cursor:pointer" href="configuracion.html">⚙ Configurar mi cuenta</a></div>';
    }

    var gs = arr(u.grupos).filter(function (s) { return HAY_SESION || !grupoCerrado(s); });
    if (gs.length) {
      h += '<div style="margin-top:10px;display:flex;flex-wrap:wrap;gap:5px">';
      for (var k = 0; k < gs.length; k++) {
        var g = grupo(gs[k]);
        var gObj = g || null;
        var color = (gObj && gObj.color) ? gObj.color : "#4f7d9c";
        h += '<a class="etiqueta grupo" href="grupo.html?g=' + esc(gs[k]) + '" style="border-left:3px solid ' + esc(color) + '">' +
          esc(gObj ? gObj.nombre : gs[k]) + "</a>";
      }
      h += "</div>";
    }

    // Mini-resumen de actividad: última publicación visible
    if (propios.length) {
      var ultima = propios.slice().sort(ordenarDesc)[0];
      var resUlt = String(ultima.texto).replace(/\s+/g, " ").slice(0, 100);
      if (ultima.texto.length > 100) resUlt += "…";
      h += '<div class="perfil-ultima-publi"><div>' + esc(resUlt) + '</div>' +
        '<div class="pup-fecha">Última publicación: <a href="post.html?id=' + ultima.id + '">' +
        fechaCorta(ultima.fecha) + "</a></div></div>";
    }

    h += "</div></div>";

    /* Grafo social. Los números grandes del perfil incluyen cuentas que la
       plataforma no modela; acá se listan las que sí existen en el padrón. */
    if (window.SOCIAL) {
      var sigue = SOCIAL.sigue(alias), segs = SOCIAL.seguidores(alias);

      function bloqueCuentas(titulo, lista, nota) {
        if (!lista.length) return "";
        var b = '<div class="panel"><div class="panel-cab">' + titulo + " (" + lista.length + ")</div>";
        if (nota) b += '<div class="panel-cuerpo" style="padding-bottom:0"><p class="portal-sub">' + nota + "</p></div>";
        b += '<ul class="lista">';
        var tope = HAY_SESION ? lista.length : Math.min(lista.length, 5);
        for (var q = 0; q < tope; q++) {
          var v = usuario(lista[q]);
          b += "<li>" + avatarHTML(v, "avatar-ch") + "<div>";
          b += '<div class="lista-nombre"><a href="perfil.html?u=' + esc(v.alias) + '">' + esc(v.nombre) + "</a>" + insignia(v) + puntoEnLinea(v) + "</div>";
          b += '<div class="lista-sub">' + esc(v.ubicacion || v.alias) + "</div></div></li>";
        }
        b += "</ul>";
        if (!HAY_SESION && lista.length > tope) {
          b += '<div class="panel-cuerpo"><p class="portal-sub" style="margin:0">' +
            "Hay " + (lista.length - tope) + " cuentas más. " +
            '<a href="login.html">Ingresá</a> para verlas.</p></div>';
        }
        b += "</div>";
        return b;
      }

      // Con quién comparte seguidores esta cuenta: el dato más útil del grafo
      if (HAY_SESION && YO && YO !== alias) {
        var comunes = SOCIAL.enComun(alias, YO);
        if (comunes.length) {
          h += '<div class="panel"><div class="panel-cuerpo">';
          h += '<div class="panel-tit">Conocidos en común</div>';
          h += '<div style="font-size:13.5px;line-height:1.6">' + comunes.length +
            " cuentas siguen a " + esc(u.nombre) + " y también a vos: ";
          h += comunes.slice(0, 6).map(function (a) {
            return '<a href="perfil.html?u=' + esc(a) + '">' + esc(usuario(a).nombre) + "</a>";
          }).join(", ");
          if (comunes.length > 6) h += " y " + (comunes.length - 6) + " más";
          h += "</div></div></div>";
        }
      }

      h += bloqueCuentas("Seguidores en la plataforma", segs,
        "De sus " + numero(u.seguidores) + " seguidores, estas son las cuentas registradas.");
      h += bloqueCuentas("A quiénes sigue", sigue, null);
    }

    var mios = AVISOS.filter(function (a) { return a.vendedor === alias; });
    if (mios.length) {
      h += '<div class="panel"><div class="panel-cab">Avisos publicados (' + mios.length + ")</div>";
      h += '<div class="panel-cuerpo"><div class="rejilla-avisos">';
      for (var j = 0; j < Math.min(mios.length, 6); j++) h += avisoHTML(mios[j]);
      h += "</div>";
      if (mios.length > 6) h += '<div style="margin-top:10px"><a href="feria.html?v=' + esc(alias) + '">Ver los ' + mios.length + " avisos</a></div>";
      h += "</div></div>";
    }
    cont.innerHTML = h;

    var contPosts = document.createElement("div");
    contPosts.style.display = "flex";
    contPosts.style.flexDirection = "column";
    contPosts.style.gap = "12px";
    contPosts.style.marginTop = "12px";
    cont.appendChild(contPosts);
    paginar(contPosts, propios.sort(ordenarDesc), function (p) { return postHTML(p); }, 15,
      "Esta cuenta no tiene publicaciones visibles.");

    var btn = document.getElementById("btn-bio"), caja = document.getElementById("bio"), abierta = false;
    if (btn) {
      btn.addEventListener("click", function () {
        abierta = !abierta;
        caja.textContent = abierta ? (u.bio_extendida || u.bio) : u.bio;
        btn.textContent = abierta ? "Ocultar biografía" : "Ver biografía completa";
      });
    }
    pintarLateral();
  };

  vistas.post = function (cont) {
    var id = parseInt(param("id"), 10);
    var p = indicePosts[id];
    if (!p) {
      cont.innerHTML = '<div class="panel"><div class="vacio">La publicación <b>' + esc(param("id")) +
        "</b> no existe o fue eliminada.</div></div>";
      pintarLateral();
      return;
    }
    if (!visible(p)) {
      cont.innerHTML = muroHTML("Esta publicación está en un grupo cerrado",
        "Solo pueden verla los miembros del grupo. Ingresá con tu cuenta.");
      pintarLateral();
      return;
    }
    document.title = usuario(p.autor).nombre + " · publicación " + p.id;
    cont.innerHTML = postHTML(p, { todos: true });
    if (HAY_SESION) cont.insertAdjacentHTML("beforeend", listaReacciones(p));

    var rep = REPORTES.filter(function (r) { return r.post_id === p.id; });
    if (rep.length) {
      var h = '<div class="panel"><div class="panel-cab">Esta publicación fue reportada</div><div class="panel-cuerpo">';
      for (var k = 0; k < rep.length; k++) h += reporteHTML(rep[k]);
      h += "</div></div>";
      cont.insertAdjacentHTML("beforeend", h);
    }

    var otros = POSTS.filter(function (x) { return x.autor === p.autor && x.id !== p.id; }).sort(ordenarDesc).slice(0, 3);
    if (otros.length) {
      cont.insertAdjacentHTML("beforeend",
        '<div class="panel"><div class="panel-cab">Más de ' + esc(usuario(p.autor).nombre) + "</div></div>");
      for (var j = 0; j < otros.length; j++) cont.insertAdjacentHTML("beforeend", postHTML(otros[j]));
    }
    pintarLateral();
  };

  vistas.buscar = function (cont) {
    var q = param("q").trim().toLowerCase();
    if (!q) {
      cont.innerHTML = '<div class="panel"><div class="vacio">Escribí algo para buscar en TeroSocial.</div></div>';
      pintarLateral();
      return;
    }
    document.title = 'Buscar "' + param("q") + '" · TeroSocial';

    /* El buscador es el de 2018 y tiene sus límites, que están
       documentados abajo del formulario:
         - no mira dentro de los comentarios
         - no indexa lo publicado hace más de un año
         - devuelve como mucho 20 resultados por tipo
         - distingue tildes y mayúsculas mal escritas
       Es a propósito: obliga a recorrer la red en vez de resolver
       todo con una búsqueda de texto. */
    var TOPE = 20;
    var LIMITE_ANTIGUEDAD = "2025-08-05";

    function tiene(s) { return String(s || "").toLowerCase().indexOf(q) >= 0; }

    var usus = USUARIOS.filter(function (u) {
      return !u.oculto && (tiene(u.alias) || tiene(u.nombre) || tiene(u.bio) || tiene(u.ubicacion));
    });
    var gru = GRUPOS.filter(function (g) {
      if (!HAY_SESION && g.privacidad === "cerrado") return false;
      return tiene(g.nombre) || tiene(g.descripcion) || tiene(g.slug);
    });

    var viejasOmitidas = 0;
    var posts = POSTS.filter(function (p) {
      if (!visible(p)) return false;
      if (!tiene(p.texto)) return false;          // solo el cuerpo, no los comentarios
      if (p.fecha < LIMITE_ANTIGUEDAD) { viejasOmitidas++; return false; }
      return true;
    }).sort(ordenarDesc);

    var avs = AVISOS.filter(function (a) { return tiene(a.titulo) || tiene(a.descripcion) || tiene(a.ubicacion); });
    var evs = EVENTOS.filter(function (e) { return tiene(e.titulo) || tiene(e.descripcion) || tiene(e.lugar); });

    var recortado = posts.length > TOPE;
    var totalPosts = posts.length;
    posts = posts.slice(0, TOPE);

    function plural(n, sing, pl) { return n + " " + (n === 1 ? sing : pl); }

    var h = '<h1 class="titulo-seccion">Resultados para “' + esc(param("q")) + '”</h1>';
    h += '<p class="bajada">' + plural(usus.length, "cuenta", "cuentas") + " · " +
      plural(gru.length, "grupo", "grupos") + " · " +
      plural(totalPosts, "publicación", "publicaciones") + " · " +
      plural(avs.length, "aviso", "avisos") + " · " +
      plural(evs.length, "evento", "eventos") + "</p>";

    var notas = [];
    if (recortado) {
      notas.push("Se muestran las " + TOPE + " publicaciones más recientes de " + totalPosts +
        ". Refiná la búsqueda para ver el resto.");
    }
    if (viejasOmitidas) {
      notas.push("Hay " + viejasOmitidas + " publicaciones anteriores a agosto de 2025 que coinciden, " +
        "pero el buscador no indexa contenido de más de un año.");
    }
    notas.push("El buscador no mira dentro de los comentarios.");
    h += '<div class="aviso-sistema" style="margin-bottom:14px">' + notas.join(" ") + "</div>";

    if (usus.length) {
      h += '<div class="panel"><div class="panel-cab">Cuentas</div><ul class="lista">';
      for (var k = 0; k < usus.length; k++) {
        var u = usus[k];
        h += "<li>" + avatarHTML(u, "avatar-ch") + "<div>";
        h += '<div class="lista-nombre"><a href="perfil.html?u=' + esc(u.alias) + '">' + esc(u.nombre) + "</a>" + insignia(u) + "</div>";
        h += '<div class="lista-sub">' + esc(u.alias) + " · " + esc(u.bio) + "</div></div></li>";
      }
      h += "</ul></div>";
    }
    if (gru.length) {
      h += '<div class="panel"><div class="panel-cab">Grupos</div><ul class="lista">';
      for (var j = 0; j < gru.length; j++) {
        h += '<li><div><div class="lista-nombre"><a href="grupo.html?g=' + esc(gru[j].slug) + '">' + esc(gru[j].nombre) + "</a></div>";
        h += '<div class="lista-sub">' + esc(gru[j].descripcion) + "</div></div></li>";
      }
      h += "</ul></div>";
    }
    if (avs.length) {
      h += '<div class="panel"><div class="panel-cab">Avisos</div><div class="panel-cuerpo"><div class="rejilla-avisos">';
      for (var m = 0; m < Math.min(avs.length, 8); m++) h += avisoHTML(avs[m]);
      h += "</div></div></div>";
    }
    h += '<div class="panel"><div class="panel-cab">Publicaciones (' + posts.length + ")</div></div>";
    cont.innerHTML = h;

    var cp = document.createElement("div");
    cp.style.display = "flex"; cp.style.flexDirection = "column"; cp.style.gap = "12px";
    cp.style.marginTop = "12px";
    cont.appendChild(cp);
    paginar(cp, posts, function (p) { return postHTML(p); }, 15, "Sin publicaciones para esa búsqueda.");
    pintarLateral();
  };

  vistas.grupos = function (cont) {
    var h = '<h1 class="titulo-seccion">Grupos</h1><p class="bajada">' + GRUPOS.length +
      (GRUPOS.length === 1 ? " comunidad" : " comunidades") + ". Cada una con su tema, sus reglas y su gente.</p>";
    h += '<div class="rejilla-grupos">';
    var gs = GRUPOS.filter(function (g) { return HAY_SESION || g.privacidad !== "cerrado"; })
      .sort(function (a, b) { return (b.miembros || 0) - (a.miembros || 0); });
    for (var k = 0; k < gs.length; k++) {
      var g = gs[k];
      var n = POSTS.filter(function (p) { return p.grupo === g.slug; }).length;
      h += '<a class="tarjeta-grupo" href="grupo.html?g=' + esc(g.slug) + '">';
      h += '<span class="grupo-franja" style="background:' + esc(g.color || "#4f7d9c") + '">';
      h += "<span>" + (g.privacidad === "cerrado" ? "Cerrado" : "Público") +
           " · " + numero(g.miembros) + " miembros</span></span>";
      h += '<span class="tarjeta-grupo-cuerpo"><h3>' + esc(g.nombre) + "</h3>";
      h += "<p>" + esc(g.descripcion) + "</p>";
      h += '<span class="grupo-meta"><span>' + numero(g.miembros) + " miembros</span><span>" + n + " publicaciones</span>";
      h += "<span>" + (g.privacidad === "cerrado" ? "cerrado" : "público") + "</span></span></span></a>";
    }
    h += "</div>";
    cont.innerHTML = h;
    pintarLateral();
  };

  vistas.grupo = function (cont) {
    var slug = param("g");
    var g = grupo(slug);
    if (!g) {
      cont.innerHTML = '<div class="panel"><div class="vacio">No existe el grupo <b>' + esc(slug) + "</b>.</div></div>";
      pintarLateral();
      return;
    }
    document.title = g.nombre + " · TeroSocial";

    if (!HAY_SESION && g.privacidad === "cerrado") {
      cont.innerHTML = muroHTML("“" + g.nombre + "” es un grupo cerrado",
        "El contenido de este grupo solo lo ven sus miembros. Ingresá con tu cuenta para verlo.");
      pintarLateral();
      return;
    }

    var h = '<div class="grupo-cab"><div class="grupo-cab-franja" style="background:' + esc(g.color || "#4a7fb5") + '"></div>';
    h += '<div class="grupo-cab-cuerpo"><h1>' + esc(g.nombre) + "</h1>";
    h += '<div class="grupo-meta"><span>' + numero(g.miembros) + " miembros</span>";
    h += "<span>" + (g.privacidad === "cerrado" ? "grupo cerrado" : "grupo público") + "</span>";
    h += "<span>creado el " + fechaCorta(g.creado + "T00:00") + "</span></div>";
    h += '<div class="grupo-desc">' + enlazar(g.descripcion) + "</div>";

    var admins = arr(g.administradores).map(function (a) {
      return '<a href="perfil.html?u=' + esc(a) + '">' + esc(usuario(a).nombre) + "</a>";
    }).join(" · ");
    if (admins) h += '<div style="font-size:13px;color:var(--gris)">Administra: ' + admins + "</div>";

    if (arr(g.reglas).length) {
      h += '<div style="margin-top:11px"><b style="font-size:13px">Reglas del grupo</b><ol class="reglas">';
      for (var k = 0; k < g.reglas.length; k++) h += "<li>" + esc(g.reglas[k]) + "</li>";
      h += "</ol></div>";
    }
    h += "</div></div>";
    cont.innerHTML = h;

    var cp = document.createElement("div");
    cp.style.display = "flex"; cp.style.flexDirection = "column"; cp.style.gap = "12px";
    cp.style.marginTop = "12px";
    cont.appendChild(cp);
    var posts = POSTS.filter(function (p) { return p.grupo === slug; }).sort(ordenarDesc);
    paginar(cp, posts, function (p) { return postHTML(p, { mostrarGrupo: false }); }, 15,
      "Este grupo no tiene publicaciones.");

    var conteo = {};
    for (var m = 0; m < posts.length; m++) conteo[posts[m].autor] = (conteo[posts[m].autor] || 0) + 1;
    var top = Object.keys(conteo).sort(function (a, b) { return conteo[b] - conteo[a]; }).slice(0, 6);
    var extra = "";
    if (top.length) {
      extra = '<div class="panel"><div class="panel-cab">Quiénes escriben acá</div><ul class="lista">';
      for (var n = 0; n < top.length; n++) {
        var u = usuario(top[n]);
        extra += "<li>" + avatarHTML(u, "avatar-ch") + "<div>";
        extra += '<div class="lista-nombre"><a href="perfil.html?u=' + esc(u.alias) + '">' + esc(u.nombre) + "</a></div>";
        extra += '<div class="lista-sub">' + conteo[top[n]] + " publicaciones</div></div></li>";
      }
      extra += "</ul></div>";
    }
    pintarLateral(extra);
  };

  vistas.market = function (cont) {
    var cat = param("cat"), vend = param("v");
    var lista = AVISOS.slice().sort(function (a, b) { return a.publicado < b.publicado ? 1 : -1; });
    if (cat) lista = lista.filter(function (a) { return a.categoria === cat; });
    if (vend) lista = lista.filter(function (a) { return a.vendedor === vend; });

    var cats = {};
    for (var k = 0; k < AVISOS.length; k++) cats[AVISOS[k].categoria] = (cats[AVISOS[k].categoria] || 0) + 1;

    var h = '<h1 class="titulo-seccion">La Feria</h1>';
    h += '<p class="bajada">' + numero(AVISOS.length) + " avisos publicados por vecinos de todo el país.";
    if (vend) h += " Mostrando los de <b>" + esc(usuario(vend).nombre) + "</b>.";
    h += "</p>";

    h += '<div class="filtros"><a class="' + (cat ? "" : "activo") + '" href="feria.html">Todo (' + AVISOS.length + ")</a>";
    var claves = Object.keys(cats).sort();
    for (var j = 0; j < claves.length; j++) {
      h += '<a class="' + (cat === claves[j] ? "activo" : "") + '" href="feria.html?cat=' +
        encodeURIComponent(claves[j]) + '">' + esc(claves[j]) + " (" + cats[claves[j]] + ")</a>";
    }
    h += "</div>";

    if (!lista.length) {
      h += '<div class="panel"><div class="vacio">No hay avisos en esta categoría.</div></div>';
    } else {
      h += '<div class="rejilla-avisos">';
      for (var m = 0; m < lista.length; m++) h += avisoHTML(lista[m]);
      h += "</div>";
    }
    cont.innerHTML = h;
    pintarLateral();
  };

  vistas.aviso = function (cont) {
    var id = parseInt(param("id"), 10), a = null;
    for (var k = 0; k < AVISOS.length; k++) if (AVISOS[k].id === id) a = AVISOS[k];
    if (!a) {
      cont.innerHTML = '<div class="panel"><div class="vacio">El aviso <b>' + esc(param("id")) +
        "</b> no existe o fue dado de baja.</div></div>";
      pintarLateral();
      return;
    }
    document.title = a.titulo + " · La Feria";
    var v = usuario(a.vendedor);

    var h = '<div class="panel"><div style="height:280px;background:#e8ebef;overflow:hidden">';
    h += '<img src="' + esc(imagenAviso(a)) + '" alt="' + esc(a.titulo || "aviso") + '" style="width:100%;height:100%;object-fit:cover;display:block"></div>';
    h += '<div class="panel-cuerpo">';
    if (a.vendido) h += '<div class="etiqueta mal" style="margin-bottom:8px">VENDIDO</div>';
    h += '<div class="ficha-precio">' + (a.moneda === "USD" ? "USD " : "$ ") + numero(a.precio) + "</div>";
    h += '<h1 class="titulo-seccion" style="font-size:17px;margin:4px 0 8px">' + esc(a.titulo) + "</h1>";
    h += '<div style="font-size:14px;line-height:1.65;white-space:pre-wrap">' + enlazar(a.descripcion) + "</div>";
    h += '<ul class="ficha-datos">';
    h += '<li><span class="et">Categoría</span><a href="feria.html?cat=' + encodeURIComponent(a.categoria) + '">' + esc(a.categoria) + "</a></li>";
    h += '<li><span class="et">Estado</span><span>' + esc(a.estado_articulo) + "</span></li>";
    h += '<li><span class="et">Ubicación</span><span>' + esc(a.ubicacion) + "</span></li>";
    h += '<li><span class="et">Publicado</span><span>' + fechaLarga(a.publicado) + "</span></li>";
    h += '<li><span class="et">Contacto</span><span>' +
      (HAY_SESION ? esc(a.contacto)
                  : '<span class="oculto-sesion">visible al iniciar sesión</span>') + "</span></li>";
    h += "</ul></div></div>";

    h += '<div class="panel"><div class="panel-cab">Vendedor</div><div class="panel-cuerpo">';
    h += '<div style="display:flex;gap:10px;align-items:center">' + avatarHTML(v) + "<div>";
    h += '<div class="post-nombre"><a href="perfil.html?u=' + esc(v.alias) + '">' + esc(v.nombre) + "</a>" + insignia(v) + "</div>";
    h += '<div class="post-meta">' + esc(v.ubicacion) + "</div></div></div>";
    var otros = AVISOS.filter(function (x) { return x.vendedor === a.vendedor && x.id !== a.id; });
    if (otros.length) {
      h += '<div style="margin-top:10px"><a href="feria.html?v=' + esc(a.vendedor) + '">Ver los otros ' +
        otros.length + " avisos de esta persona</a></div>";
    }
    h += "</div></div>";

    var cons = arr(a.consultas);
    h += '<div class="panel"><div class="panel-cab">Consultas (' + cons.length + ")</div><div class=\"panel-cuerpo\">";
    if (!cons.length) h += '<div class="vacio" style="padding:12px">Nadie preguntó nada todavía.</div>';
    else {
      h += '<div class="comentarios" style="margin-top:0">';
      for (var m = 0; m < cons.length; m++) h += comentarioHTML(cons[m]);
      h += "</div>";
    }
    h += "</div></div>";
    cont.innerHTML = h;
    pintarLateral();
  };

  vistas.eventos = function (cont) {
    var futuros = EVENTOS.filter(function (e) { return dias(e.fecha, HOY) <= 0; })
      .sort(function (a, b) { return a.fecha < b.fecha ? -1 : 1; });
    var pasados = EVENTOS.filter(function (e) { return dias(e.fecha, HOY) > 0; }).sort(ordenarDesc);

    var h = '<h1 class="titulo-seccion">Eventos</h1><p class="bajada">' + futuros.length +
      " por venir · " + pasados.length + " ya ocurridos</p>";
    h += '<h2 style="font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:var(--gris-claro);margin:0 0 10px">Próximos</h2>';
    cont.innerHTML = h;

    var caja = document.createElement("div");
    caja.style.display = "flex"; caja.style.flexDirection = "column"; caja.style.gap = "12px";
    cont.appendChild(caja);
    var k;
    for (k = 0; k < futuros.length; k++) caja.insertAdjacentHTML("beforeend", eventoHTML(futuros[k]));
    if (!futuros.length) caja.innerHTML = '<div class="panel"><div class="vacio">No hay eventos programados.</div></div>';

    cont.insertAdjacentHTML("beforeend",
      '<h2 style="font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:var(--gris-claro);margin:26px 0 10px">Anteriores</h2>');
    var caja2 = document.createElement("div");
    caja2.style.display = "flex"; caja2.style.flexDirection = "column"; caja2.style.gap = "12px";
    cont.appendChild(caja2);
    for (k = 0; k < pasados.length; k++) caja2.insertAdjacentHTML("beforeend", eventoHTML(pasados[k]));
    pintarLateral();
  };

  vistas.moderacion = function (cont) {
    if (!HAY_SESION) {
      cont.innerHTML = muroHTML("La cola de moderación requiere sesión iniciada",
        "El registro de contenido reportado es público para los usuarios de la plataforma.");
      pintarLateral();
      return;
    }
    var filtro = param("estado");
    var lista = REPORTES.slice().sort(ordenarDesc);
    if (filtro) lista = lista.filter(function (r) { return r.estado === filtro; });

    var conteo = { pendiente: 0, resuelto: 0, desestimado: 0 }, motivos = {};
    for (var k = 0; k < REPORTES.length; k++) {
      conteo[REPORTES[k].estado] = (conteo[REPORTES[k].estado] || 0) + 1;
      motivos[REPORTES[k].motivo] = (motivos[REPORTES[k].motivo] || 0) + 1;
    }

    var h = '<h1 class="titulo-seccion">Cola de moderación</h1>';
    h += '<p class="bajada">Registro público del contenido reportado por la comunidad y de cómo se resolvió. ' +
      numero(REPORTES.length) + " casos.</p>";
    h += '<div class="filtros"><a class="' + (filtro ? "" : "activo") + '" href="moderacion.html">Todos (' + REPORTES.length + ")</a>";
    var est = ["pendiente", "resuelto", "desestimado"];
    for (var j = 0; j < est.length; j++) {
      h += '<a class="' + (filtro === est[j] ? "activo" : "") + '" href="moderacion.html?estado=' + est[j] + '">' +
        est[j] + " (" + (conteo[est[j]] || 0) + ")</a>";
    }
    h += "</div>";
    cont.innerHTML = h;

    var cp = document.createElement("div");
    cp.style.display = "flex"; cp.style.flexDirection = "column"; cp.style.gap = "12px";
    cont.appendChild(cp);
    paginar(cp, lista, reporteHTML, 20, "No hay reportes con ese estado.");

    var extra = '<div class="panel"><div class="panel-cuerpo"><div class="panel-tit">Motivos</div><div class="mis-grupos">';
    var claves = Object.keys(motivos).sort(function (a, b) { return motivos[b] - motivos[a]; });
    for (var m = 0; m < claves.length; m++) {
      extra += "<div>" + esc(claves[m]) + ' <span class="etiqueta">' + motivos[claves[m]] + "</span></div>";
    }
    extra += "</div></div></div>";
    pintarLateral(extra);
  };

  vistas.configuracion = function (cont) {
    if (!HAY_SESION) {
      cont.innerHTML = muroHTML("Configuración requiere sesión iniciada",
        "Acá ajustás tu cuenta y tu privacidad. Entrá con tu cuenta para verla.");
      pintarLateral();
      return;
    }
    var u = usuario(YO);
    document.title = "Configuración · TeroSocial";
    var correo = esc(u.alias) + "@correo.uy";

    var h = '<h1 class="titulo-seccion">Configuración de la cuenta</h1>';
    h += '<p class="bajada">Estás viendo los ajustes de <b>' + esc(u.nombre) + "</b> (" + esc(u.alias) + ").</p>";

    // Datos de la cuenta
    h += '<div class="panel"><div class="panel-cab">Tus datos</div><div class="panel-cuerpo">';
    h += '<ul class="ficha-datos">';
    h += '<li><span class="et">Nombre</span><span>' + esc(u.nombre) + "</span></li>";
    h += '<li><span class="et">Identificador</span><span class="mono">' + esc(u.alias) + "</span></li>";
    h += '<li><span class="et">Correo</span><span class="mono">' + correo + "</span></li>";
    h += '<li><span class="et">Departamento</span><span>' + esc(u.ubicacion || "—") + "</span></li>";
    if (u.se_unio) h += '<li><span class="et">Cuenta creada</span><span>' + fechaCorta(u.se_unio + "T00:00") + "</span></li>";
    h += "</ul></div></div>";

    // Privacidad: interruptores en visible por defecto
    var toggles = [
      { txt: "Mostrar mi correo electrónico a todos los usuarios", on: true, rastro: true },
      { txt: "Mostrar mi departamento a todos los usuarios", on: true, rastro: true },
      { txt: "Mostrar mi última conexión en mi perfil", on: true, rastro: true },
      { txt: "Mostrar mi lista de seguidores", on: true, rastro: false },
      { txt: "Mostrar mi biografía completa sin iniciar sesión", on: false, rastro: false }
    ];
    h += '<div class="panel"><div class="panel-cab">Privacidad y visibilidad</div><div class="panel-cuerpo">';
    h += '<p class="config-intro">Estos son los datos que el resto de la plataforma ve de vos. Vienen activados por defecto.</p>';
    for (var t = 0; t < toggles.length; t++) {
      h += '<label class="config-switch"><input type="checkbox" data-rastro="' + (toggles[t].rastro ? "1" : "") + '"' +
        (toggles[t].on ? " checked" : "") + '><span class="config-slider"></span>' +
        '<span class="config-switch-txt">' + esc(toggles[t].txt) + "</span></label>";
    }
    h += '<div class="config-nota-rastro" hidden></div>';
    h += "</div></div>";

    // Metadatos de fotos (PLT-2288)
    h += '<div class="panel"><div class="panel-cab">Metadatos de tus fotos</div><div class="panel-cuerpo">';
    h += '<div class="aviso-sistema">El sanitizador de metadatos está fuera de servicio desde el 14/03/2026 ' +
      "(incidencia PLT-2288). Las fotos que subís se guardan tal como salen del teléfono: modelo de cámara, " +
      "fecha, hora y, si tu teléfono lo agrega, ubicación GPS.</div>";
    h += '<button class="boton" type="button" disabled style="opacity:.55;cursor:not-allowed">Limpiar metadatos de mis fotos</button>';
    h += '<div class="config-mini">La limpieza automática volverá cuando se resuelva la incidencia. No hay fecha estimada.</div>';
    h += "</div></div>";

    // Lo que el sistema conserva igual (el remate del ejercicio 3)
    h += '<div class="panel"><div class="panel-cab">Datos que el sistema conserva</div><div class="panel-cuerpo">';
    h += '<p class="config-intro">Cambiar lo de arriba afecta lo que el resto ve <b>de ahora en más</b>. ' +
      "No borra lo que el sistema ya registró:</p>";
    h += '<ul class="config-lista">';
    h += "<li>Los inicios de sesión quedan en el registro de accesos (retención 400 días).</li>";
    h += "<li>Las publicaciones que borres se guardan en el respaldo diario, con la hora real y la zona horaria del dispositivo.</li>";
    h += "<li>Las fotos ya subidas conservan sus metadatos aunque cambies este ajuste.</li>";
    h += "<li>Si das de baja la cuenta, el perfil sale del buscador pero sigue accesible por su dirección directa.</li>";
    h += "</ul>";
    h += '<div class="config-mini">Podés solicitar una copia de tus datos. La descarga está deshabilitada temporalmente.</div>';
    h += '<button class="boton" type="button" disabled style="opacity:.55;cursor:not-allowed;margin-top:8px">Descargar mis datos</button>';
    h += "</div></div>";

    cont.innerHTML = h;

    // Los cambios no se guardan; ocultar un dato "con rastro" revela la advertencia.
    var nota = cont.querySelector(".config-nota-rastro");
    var checks = cont.querySelectorAll(".config-switch input");
    for (var c = 0; c < checks.length; c++) {
      checks[c].addEventListener("change", function () {
        if (this.getAttribute("data-rastro") && !this.checked) {
          nota.hidden = false;
          nota.textContent = "Ocultaste un dato que ya estaba visible. Eso cambia lo que verá el resto de ahora en " +
            "más, pero no borra las copias que el sistema ya guardó (respaldos, registro de accesos, telemetría). " +
            "En esta versión, además, los cambios no se guardan.";
        }
      });
    }
    pintarLateral();
  };

  /* =======================================================
     6. Arranque
     ======================================================= */

  document.addEventListener("DOMContentLoaded", function () {
    var vista = document.body.getAttribute("data-vista") || "feed";
    pintarBarra(vista);
    pintarMenu(vista);

    var cont = document.getElementById("vista");
    if (!cont) return;

    if (vistas[vista]) {
      try {
        vistas[vista](cont);
      } catch (err) {
        cont.innerHTML = '<div class="panel"><div class="vacio">Ocurrió un error al construir esta vista.<br>' +
          '<code style="font-size:12px">' + esc(err && err.message) + "</code></div></div>";
        if (window.console) console.error(err);
      }
    } else {
      cont.innerHTML = '<div class="panel"><div class="vacio">Vista desconocida: ' + esc(vista) + "</div></div>";
    }
  });

  window.TERO = {
    usuarios: USUARIOS, posts: POSTS, grupos: GRUPOS,
    avisos: AVISOS, eventos: EVENTOS, reportes: REPORTES, hoy: HOY, yo: YO
  };

})();
