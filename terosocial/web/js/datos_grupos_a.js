/* TeroSocial - grupos: barrio, compraventa, pesca, murgas, humor, mascotas */

window.GRUPOS_A = [
  {
    slug: "vecinos-cerro",
    nombre: "Vecinos del Cerro y alrededores",
    descripcion: "Grupo de vecinos del Cerro, La Teja, Paso Molino y la vuelta. Para lo que pasa en la cuadra: luces quemadas, contenedores, obras que no terminan, rifas, la copa de leche. Lo armamos en 2020 cuando no había por dónde reclamar nada.",
    reglas: [
      "Se pide vecino, no se insulta vecino.",
      "Antes de compartir una alerta, fijate si es de acá y de esta semana. No reenvíes cosas de hace tres años.",
      "Números de puerta y patentes NO se publican. Si es grave, va a la policía, no acá.",
      "Nada de política partidaria, ya sabemos cómo termina.",
      "Rifas y colectas sí, pero con nombre y apellido de quien la organiza."
    ],
    privacidad: "publico",
    miembros: 8421,
    creado: "2020-05-02",
    administradores: ["vecina.malvin.rosa", "elrusodelquiosco"],
    color: "#5b8c5a"
  },
  {
    slug: "comprovendo",
    nombre: "Compro y Vendo Uruguay",
    descripcion: "Se vende, se compra, se permuta. Todo el país. Poné precio, poné zona y poné foto de verdad, no una bajada de internet. Si no ponés precio te lo van a preguntar cuarenta veces y después te enojás.",
    reglas: [
      "PRECIO EN EL POST. Es la regla uno y la que más se rompe.",
      "Foto del artículo real. Nada de fotos de catálogo.",
      "Cuando se vende, editás o comentás VENDIDO. No dejes el post dando vueltas.",
      "Nada de armas, medicamentos, animales ni documentos.",
      "Si te clavaron, avisá con datos concretos. Si acusás sin pruebas, se borra.",
      "El regateo es en comentarios y con respeto. Ofertar 3000 por algo de 20000 no es regatear, es cargar."
    ],
    privacidad: "publico",
    miembros: 24907,
    creado: "2019-11-18",
    administradores: ["feriante_tristan", "contadora.gimenez"],
    color: "#c98a2e"
  },
  {
    slug: "pesca",
    nombre: "Pesca de costa UY",
    descripcion: "Costa del Plata, Atlántico y algún río. Marea, viento, luna, carnada y aparejo. Acá se comparte información útil: si venís a preguntar dónde pico algo sin haber leído nada, vas a esperar sentado. Los spots se ganan.",
    reglas: [
      "Reporte serio: lugar aproximado, hora, marea, viento y qué se usó. Sin eso no es un reporte, es una foto.",
      "Medidas mínimas y vedas se respetan y punto.",
      "Cero peleas de río contra costa. Los dos son pesca.",
      "Foto de la pieza sí, pero el pescado en el piso y pisado no va.",
      "No se piden spots ajenos en público."
    ],
    privacidad: "publico",
    miembros: 6188,
    creado: "2019-09-07",
    administradores: ["pescador_delaplata", "salvavidas_rocha"],
    color: "#2f6f8f"
  },
  {
    slug: "murgas",
    nombre: "Murgas y Carnaval",
    descripcion: "Murgueros, murgueras, coristas, arregladores y gente que va a los tablados. Ensayos, convocatorias, cuplés nuevos, tablados de barrio y toda la rosca que viene atrás. Acá se habla del carnaval de verdad, el que se hace en un club con dos focos.",
    reglas: [
      "Convocatorias con día, hora y lugar. Ensayo sin dirección no es ensayo.",
      "Se puede criticar una actuación. Al murguista no se lo baja como persona.",
      "El jurado es tema libre pero medite antes de escribir.",
      "Nada de pasarse letras de cuplé ajeno antes de que salgan.",
      "Los audios de 4 minutos cantando a las 3 AM tienen amnistía en febrero."
    ],
    privacidad: "publico",
    miembros: 5342,
    creado: "2020-01-23",
    administradores: ["murga_la_reculada", "dj_candombe"],
    color: "#b83b5e"
  },
  {
    slug: "mateando",
    nombre: "Mateando",
    descripcion: "El grupo del boludeo. Se entra con el mate en la mano y se sale peleado por la salsa golf. Encuestas tontas, nostalgia noventera, memes viejos y discusiones que no llevan a ningún lado. No se arregla el país acá.",
    reglas: [
      "Se puede boludear pero no bardear a nadie de verdad.",
      "Si abrís una encuesta, bancate el resultado.",
      "Política, religión y cuadros: en otro lado.",
      "Nada de vender cosas acá, para eso está Compro y Vendo."
    ],
    privacidad: "publico",
    miembros: 31284,
    creado: "2019-08-15",
    administradores: ["mateamargo_87", "nurse_valentina"],
    color: "#7a9b3c"
  },
  {
    slug: "mascotas",
    nombre: "Perdidos y encontrados",
    descripcion: "Animales perdidos y encontrados en todo el país. Cada aviso con ZONA, HORA y descripción. Este grupo existe porque un perro que se pierde tiene 48 horas buenas y después se complica. Compartan aunque no sea de su barrio.",
    reglas: [
      "Zona, hora aproximada y descripción. Un aviso que dice se perdió mi perrito no sirve para nada.",
      "Foto del animal, siempre que se pueda.",
      "Si aparece, VOLVÉ Y AVISÁ. Se sigue buscando animales que ya están en la casa.",
      "No se regalan ni se venden animales acá.",
      "Si encontraste uno, no publiques todos los detalles: guardate uno para chequear que el dueño es el dueño."
    ],
    privacidad: "publico",
    miembros: 19630,
    creado: "2019-10-30",
    administradores: ["caro.veterinaria", "laura.rambla"],
    color: "#a3568f"
  }
];

window.POSTS_GRUPOS_A = [

  /* ============ vecinos-cerro (2000-2029) ============ */

  {
    id: 2000,
    autor: "vecina.malvin.rosa",
    fecha: "2020-05-02T10:15:00-03:00",
    texto: "FIJADO - Bienvenidos al grupo de Vecinos del Cerro y alrededores.\n\nLo abro porque hace dos años que mando notas a la intendencia y me contestan con un numero de expediente. Si somos muchos capaz que nos escuchan.\n\nLean las reglas antes de publicar. En especial la de las patentes y numeros de puerta: no se publican, ni aunque estes seguro. Ya nos paso.\n\nSaludos cordiales a todos.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 214,
    comentarios: [
      { autor: "elrusodelquiosco", texto: "Buenisimo Rosario. Yo desde el quiosco veo pasar todo, cualquier cosa avisen", fecha: "2020-05-02T11:02:00-03:00" },
      { autor: "dona_elsa_47", texto: "BUENOS DIAS VECINOS QUE DIOS LOS BENDIGA A TODOS. AMEN", fecha: "2020-05-02T11:40:00-03:00",
        respuestas: [
          { autor: "vecina.malvin.rosa", texto: "Bienvenida Elsa. Se puede escribir en minuscula tambien eh", fecha: "2020-05-02T12:10:00-03:00" },
          { autor: "dona_elsa_47", texto: "ES QUE NO VEO BIEN LA PANTALLA HIJA", fecha: "2020-05-02T13:22:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2001,
    autor: "elrusodelquiosco",
    fecha: "2020-08-19T18:44:00-03:00",
    texto: "Aviso a los del pasaje: el camion de la basura no entro esta semana porque hay un auto abandonado atravesado en la esquina. Esta hace como 4 meses, sin ruedas. Ya lo sabe todo el mundo menos el que tiene q sacarlo.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 87,
    comentarios: [
      { autor: "pintor_rodri", texto: "ese auto es del sobrino de la señora de la esquina, lo dejo cuando se fue a españa", fecha: "2020-08-19T19:30:00-03:00" },
      { autor: "elrusodelquiosco", texto: "no se fue a españa, se fue a maldonado a laburar en la construccion. Yo se todo bo", fecha: "2020-08-19T19:52:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2002,
    autor: "dona_elsa_47",
    fecha: "2021-03-11T08:05:00-03:00",
    texto: "VECINOS ME LLEGO ESTO DE UNA SOBRINA QUE VIVE EN LA TEJA. DICE QUE ANDAN TOCANDO TIMBRE Y PREGUNTANDO POR LA MEDIDA DE LA LUZ PARA DESPUES ENTRAR. CUIDENSE MUCHO. QUE DIOS NOS PROTEJA. AMEN",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 156,
    comentarios: [
      { autor: "bomberito_ruiz", texto: "Elsa, ese mensaje da vueltas desde 2017 y cada tanto le cambian el barrio. Fijate que ni dice la calle.", fecha: "2021-03-11T09:15:00-03:00",
        respuestas: [
          { autor: "dona_elsa_47", texto: "PERO POR LAS DUDAS HIJO", fecha: "2021-03-11T09:44:00-03:00" },
          { autor: "bomberito_ruiz", texto: "Por las dudas esta bien, pero cuando compartimos cualquier cosa despues nadie cree las alertas de verdad.", fecha: "2021-03-11T10:01:00-03:00" }
        ]
      },
      { autor: "mama_de_tres_mvd", texto: "yo lo recibi tambien!! entonces es mentira?", fecha: "2021-03-11T10:30:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2003,
    autor: "bomberito_ruiz",
    fecha: "2026-01-14T22:38:00-03:00",
    texto: "Aclaracion porque me escribieron como quince personas: NO hubo incendio en el depósito de Carlos María Ramírez. Lo que se vio fue humo de una quema de pastizal en un terreno, a dos cuadras. Salió una dotación, se apagó en veinte minutos, no hubo heridos ni evacuados.\n\nLa foto que están compartiendo es de otro lado, se nota porque se ve una torre q acá no existe.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 342,
    comentarios: [
      { autor: "vecina.malvin.rosa", texto: "Gracias Diego. Ya borré tres posts que lo daban por cierto.", fecha: "2026-01-14T22:55:00-03:00" },
      { autor: "mama_alerta_uy", texto: "pero algo se prendio igual, yo senti el olor desde las piedras", fecha: "2026-01-14T23:12:00-03:00",
        respuestas: [
          { autor: "hacker_del_prado", texto: "Las Piedras está a 25 km. Salvo que tengas la nariz más potente del hemisferio sur, no.", fecha: "2026-01-14T23:40:00-03:00" },
          { autor: "mama_alerta_uy", texto: "no se, olia a quemado", fecha: "2026-01-15T07:20:00-03:00" }
        ]
      },
      { autor: "elrusodelquiosco", texto: "el terreno ese lo quema el mismo tipo todos los eneros, ya es tradicion", fecha: "2026-01-15T08:03:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2004,
    autor: "costa_dorada_vecina",
    fecha: "2022-06-30T16:20:00-03:00",
    texto: "Estimados vecinos:\n\nMe permito escribir desde Ciudad de la Costa aunque no sea del Cerro, porque el problema del alumbrado es el mismo en todo el país y quizás sirva lo que aprendí.\n\nPrimero: el reclamo telefónico no queda registrado. Sirve el formulario web, que da número de expediente. Anótenlo.\nSegundo: hay que reclamar POR COLUMNA. No sirve decir la calle está oscura. Hay que decir columna frente al número tal, no enciende, o enciende y se apaga.\nTercero: a los treinta días, si no pasó nada, se reitera citando el expediente anterior. Esa reiteración es la que mueve el amperímetro.\n\nEn mi cuadra tardamos siete meses pero se arregló. No es rápido, pero es el único camino que funciona.\n\nQuedo a las órdenes.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 411,
    comentarios: [
      { autor: "vecina.malvin.rosa", texto: "Beatriz, esto lo voy a fijar. Es exactamente lo que vengo diciendo hace dos años pero explicado mejor", fecha: "2022-06-30T17:05:00-03:00",
        respuestas: [
          { autor: "costa_dorada_vecina", texto: "Gracias Rosario. Lo aprendí a los golpes, como todo.", fecha: "2022-06-30T17:40:00-03:00" }
        ]
      },
      { autor: "taxi_cx_1420", texto: "yo laburo de noche y te digo, el problema no es la columna, es que sacan las lamparas. las sacan.", fecha: "2022-06-30T21:15:00-03:00" },
      { autor: "elpibe.delcerro", texto: "nadie saca lamparas bo, se queman", fecha: "2022-06-30T23:50:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2005,
    autor: "pintor_rodri",
    fecha: "2026-01-19T07:50:00-03:00",
    texto: "Buenas vecinos. Quedé con semana libre a fin de mes. Pinto fachadas, interiores, techos con membrana liquida. Presupuesto sin cargo, voy y miro. Trabajo en el Cerro, La Teja, Paso Molino y Belvedere. Tengo escalera propia y andamio si el trabajo lo pide.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 64,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Rodrigo querido, me pintaste el fondo hace dos años y quedo divino. Lo recomiendo con los ojos cerrados.", fecha: "2026-01-19T09:30:00-03:00" },
      { autor: "feriante_tristan", texto: "cuanto sale el metro?", fecha: "2026-01-19T10:12:00-03:00",
        respuestas: [
          { autor: "pintor_rodri", texto: "depende del estado de la pared, por eso voy y miro. te paso por privado", fecha: "2026-01-19T10:44:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2006,
    autor: "mama_alerta_uy",
    fecha: "2026-05-17T20:11:00-03:00",
    texto: "VECINOS ATENCION!!! auto gris dando vueltas por la zona de la escuela hace media hora. paso tres veces. tiene los vidrios polarizados. CUIDEN A LOS GURISES",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 98,
    comentarios: [
      { autor: "elrusodelquiosco", texto: "es el de la panaderia q reparte, tiene el auto lleno de cajas atras. Pasa tres veces porque hace tres cuadras", fecha: "2026-05-17T20:35:00-03:00",
        respuestas: [
          { autor: "mama_alerta_uy", texto: "ah", fecha: "2026-05-17T20:51:00-03:00" },
          { autor: "vecina.malvin.rosa", texto: "Veronica, por favor, la próxima pregunta antes de poner mayúsculas. Anoche hubo gente que no dejó salir a los chicos.", fecha: "2026-05-17T21:10:00-03:00" },
          { autor: "mama_alerta_uy", texto: "perdon, es que una se asusta", fecha: "2026-05-17T21:22:00-03:00" }
        ]
      },
      { autor: "bomberito_ruiz", texto: "Un auto que pasa despacio no es una amenaza. Un auto que pasa despacio es alguien buscando un numero de puerta", fecha: "2026-05-17T21:40:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2007,
    autor: "pastelera.zuni",
    fecha: "2024-04-22T15:30:00-03:00",
    texto: "Queridos vecinos, escribo por la copa de leche de los sabados.\n\nEstamos dando entre cuarenta y cincuenta meriendas y este mes se nos complico con la leche. Si alguien puede acercar leche en polvo, cacao o azúcar, se recibe en la casa de Bertha, la de la reja verde, o me avisan y paso yo que tengo el carrito.\n\nNo hace falta que sea mucho. Un paquete es un paquete.\n\nUn beso grande a todos y gracias siempre.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 528,
    comentarios: [
      { autor: "dona_elsa_47", texto: "ZUNI YO LLEVO DOS DE LECHE EL SABADO. QUE DIOS TE BENDIGA POR LO QUE HACES. AMEN", fecha: "2024-04-22T16:02:00-03:00" },
      { autor: "murga_la_reculada", texto: "Nosotros ponemos la olla el sabado 4 si quieren. Tenemos el fondo del club y somos veinte que cortamos cebolla mal pero cortamos.", fecha: "2024-04-22T18:15:00-03:00",
        respuestas: [
          { autor: "pastelera.zuni", texto: "Ay muchachos qué alegría. Sí, sí, sí.", fecha: "2024-04-22T18:40:00-03:00" }
        ]
      },
      { autor: "marce.peluquera", texto: "yo llevo bizcochos que sobran de la peluqueria los sabados a la tarde, aviso antes", fecha: "2024-04-22T19:20:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2008,
    autor: "murga_la_reculada",
    fecha: "2024-09-05T21:00:00-03:00",
    texto: "Vecinos, salió la rifa de la murga para juntar para el vestuario del año que viene. Número a 150 pesos, se juega con la última de la nocturna del 30 de octubre.\n\nPrimer premio: canasta grande con carne, bebida y una torta de la Zuni.\nSegundo premio: dos entradas para el primer tablado nuestro.\nTercero: una camiseta de la murga firmada por todos, incluso por el Beto que firma como si fuera doctor.\n\nLos números los tenemos nosotros, el ruso en el quiosco y la peluqueria de la Marce",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 276,
    comentarios: [
      { autor: "elrusodelquiosco", texto: "confirmo, tengo del 1 al 200 aca. No fio eh, ya se los digo", fecha: "2024-09-05T21:30:00-03:00" },
      { autor: "elpibe.delcerro", texto: "tia yo vendo 20 en la utu", fecha: "2024-09-05T22:14:00-03:00" },
      { autor: "vecina.malvin.rosa", texto: "Compro cinco. Aclaro que la rifa está autorizada según la regla 5, la organiza la murga con nombre y todo.", fecha: "2024-09-06T08:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2009,
    autor: "mama_de_tres_mvd",
    fecha: "2026-03-18T13:47:00-03:00",
    texto: "chicas me pasaron esto de una camioneta blanca sin matricula q anda por la zona levantando gurises. una amiga de mi hermana lo vio. compartan por favor",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 71,
    comentarios: [
      { autor: "vecina.malvin.rosa", texto: "Andrea, la camioneta blanca sin matrícula lleva apareciendo en este grupo desde 2020 y nunca hubo una sola denuncia. Ninguna. Lo borro en un rato.", fecha: "2026-03-18T14:05:00-03:00",
        respuestas: [
          { autor: "mama_de_tres_mvd", texto: "pero y si es verdad?", fecha: "2026-03-18T14:20:00-03:00" },
          { autor: "bomberito_ruiz", texto: "Si es verdad hay una denuncia. Si no hay denuncia, es un mensaje que alguien escribió. No es lo mismo.", fecha: "2026-03-18T14:38:00-03:00" },
          { autor: "mama_alerta_uy", texto: "a mi tambien me llego, o sea que son dos", fecha: "2026-03-18T15:02:00-03:00" },
          { autor: "hacker_del_prado", texto: "Dos personas que recibieron el mismo reenvio no son dos testigos. Son un reenvio.", fecha: "2026-03-18T15:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2010,
    autor: "vecina.malvin.rosa",
    fecha: "2026-01-08T09:12:00-03:00",
    texto: "Buen día vecinos. Empieza el año y arranco con el balance del alumbrado, como todos los eneros.\n\nColumnas relevadas en la zona del grupo: 63.\nApagadas: 21.\nIntermitentes: 9.\nCon la lámpara directamente ausente: 4.\n\nDe las 21 apagadas, 12 tienen expediente mio de 2025 sin respuesta. Voy a reiterar una por una esta semana. Si alguien quiere que agregue su columna, me pasa el número de puerta de enfrente por privado (por privado, no acá, regla 3).",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 189,
    comentarios: [
      { autor: "costa_dorada_vecina", texto: "Rosario, impecable el relevamiento. Sugiero que agregue la fecha en que la constató, porque a veces contestan que ya está arreglada y una no puede probar cuándo miró.", fecha: "2026-01-08T10:30:00-03:00",
        respuestas: [
          { autor: "vecina.malvin.rosa", texto: "Anotado. Tengo las fechas en el cuaderno, las paso a la planilla.", fecha: "2026-01-08T10:52:00-03:00" }
        ]
      },
      { autor: "taxi_cx_1420", texto: "la de Grecia y Bogota hace 3 años que esta apagada. tres. yo paso todas las noches", fecha: "2026-01-08T11:15:00-03:00" },
      { autor: "elrusodelquiosco", texto: "esa la arreglaron en marzo y duro dos semanas", fecha: "2026-01-08T11:40:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2011,
    autor: "elrusodelquiosco",
    fecha: "2026-02-03T17:22:00-03:00",
    texto: "Muchachos alguien me explica la obra de la calle. Levantaron todo en noviembre, pusieron los caños, taparon a medias y se fueron. Hoy vino un camion, descargo mas caños arriba de la vereda y se fue. NO HAY NADIE TRABAJANDO. Solo caños.\n\nYo no puedo abrir el quiosco con el camion ahi, perdi la mañana entera",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 234,
    comentarios: [
      { autor: "vecina.malvin.rosa", texto: "Estoy averiguando. Lo que sé: es obra de saneamiento, la empresa cambio en diciembre y el expediente quedo en el medio.", fecha: "2026-02-03T18:00:00-03:00" },
      { autor: "pintor_rodri", texto: "yo trabajo en obra y te digo que eso queda asi hasta que alguien de arriba se acuerde. lo vi mil veces", fecha: "2026-02-03T18:45:00-03:00" },
      { autor: "dona_elsa_47", texto: "YO ME CAI AHI EL VIERNES. NO ME PASO NADA GRACIAS A DIOS PERO ME RASPE LA RODILLA", fecha: "2026-02-03T19:30:00-03:00",
        respuestas: [
          { autor: "vecina.malvin.rosa", texto: "Elsa!! Eso es importantísimo. ¿Fue a una policlinica? Necesito la constancia, con una lesión el reclamo cambia de categoria.", fecha: "2026-02-03T19:50:00-03:00" },
          { autor: "dona_elsa_47", texto: "NO HIJA, ME PUSE AGUA OXIGENADA", fecha: "2026-02-03T20:15:00-03:00" },
          { autor: "nurse_valentina", texto: "Elsa, a los 74 una caída no es una raspadura. Anda igual, aunque no te duela. Te lo pide una enfermera cansada.", fecha: "2026-02-03T21:40:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2012,
    autor: "pastelera.zuni",
    fecha: "2026-02-19T11:05:00-03:00",
    texto: "Vecinos, con toda la paciencia del mundo lo digo: en el terreno baldío del pasaje están tirando escombros de noche. Ayer había media camionada. Ese terreno era donde jugaban los gurises.\n\nNo acuso a nadie porque no vi quién fue. Pero es de noche y con camioneta, así que no es un vecino con una carretilla.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 167,
    comentarios: [
      { autor: "elrusodelquiosco", texto: "yo se quien es pero si lo digo me hacen juicio", fecha: "2026-02-19T11:30:00-03:00",
        respuestas: [
          { autor: "vecina.malvin.rosa", texto: "Sergio, o lo decís o no lo decis, pero no hagas esto que después el grupo se llena de sospechas sobre gente inocente.", fecha: "2026-02-19T11:52:00-03:00" },
          { autor: "elrusodelquiosco", texto: "es el del porton verde. Ya esta, lo dije", fecha: "2026-02-19T12:10:00-03:00" },
          { autor: "pintor_rodri", texto: "el del porton verde hace pozos ciegos, o sea que tiene tierra de sobra. cierra", fecha: "2026-02-19T12:40:00-03:00" }
        ]
      },
      { autor: "mama_de_tres_mvd", texto: "ahi tiran de todo, la semana pasada habia un colchon", fecha: "2026-02-19T13:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2013,
    autor: "bomberito_ruiz",
    fecha: "2026-03-02T08:40:00-03:00",
    texto: "Se viene el calor fuerte esta semana. Tres cosas, cortitas:\n\n1. No quemen pastizal. Ni chiquito. Con esta seca el fuego camina más rápido de lo que ustedes corren.\n2. Si tienen garrafa, que no esté al sol ni tapada con un nylon negro.\n3. El humo de un pastizal a 500 metros parece que está en la esquina. Antes de publicar, mirá para dónde va el humo.\n\nCualquier duda me escriben. Estoy de guardia jueves y viernes.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 298,
    comentarios: [
      { autor: "clima_uy_alertas", texto: "Se mantiene aviso amarillo por temperaturas extremas para el sur y suroeste del país hasta el jueves inclusive. Máximas previstas 37 a 39 grados.", fecha: "2026-03-02T09:15:00-03:00" },
      { autor: "dona_elsa_47", texto: "GRACIAS HIJO. YO TENGO LA GARRAFA ADENTRO DE LA COCINA ESTA BIEN?", fecha: "2026-03-02T10:00:00-03:00",
        respuestas: [
          { autor: "bomberito_ruiz", texto: "Sí Elsa, adentro está bien mientras haya ventilación. Lo que no va es al sol.", fecha: "2026-03-02T10:22:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2014,
    autor: "murga_la_reculada",
    fecha: "2026-03-14T22:30:00-03:00",
    texto: "Vecinos: gracias. Cerramos la rifa y la temporada y queremos decir algo acá, que es donde nos conocen.\n\nEste año no salimos en el concurso. Salimos en once tablados de barrio, doce si contamos el del club que se suspendió por lluvia y lo hicimos igual adentro con la gente parada.\n\nNo ganamos nada. No perdimos nada. Volvimos todas las noches a la misma cuadra.\n\nGracias por bancar la rifa, por prestar la camioneta y por aguantar los ensayos de los martes.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 612,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Muchachos me hicieron llorar arriba de la masa. Los quiero.", fecha: "2026-03-14T23:00:00-03:00" },
      { autor: "elpibe.delcerro", texto: "vamo la reculadaaa 🥁🥁", fecha: "2026-03-14T23:20:00-03:00" },
      { autor: "dj_candombe", texto: "Los vi en el del Club Social. El cuplé del ómnibus es de lo mejor que escuche este año y no lo digo por compromiso", fecha: "2026-03-15T02:40:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2015,
    autor: "costa_dorada_vecina",
    fecha: "2026-03-27T17:10:00-03:00",
    texto: "Estimados:\n\nHe leído con atención la discusión de los últimos días entre quienes piden más presencia policial y quienes sostienen que lo que falta es alumbrado y trabajo. Me permito una observación de alguien que fue docente cuarenta años.\n\nLas dos cosas se piden al mismo lugar y en la misma nota. No son opuestas. El problema es que discutiendo entre nosotros sobre cuál pedir primero, no pedimos ninguna de las dos.\n\nSugiero concretamente: una nota única, firmada por el grupo, con tres puntos numerados y sin adjetivos. Los adjetivos no se contestan, los puntos numerados sí.\n\nQuedo a las órdenes para redactarla si les parece.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 387,
    comentarios: [
      { autor: "vecina.malvin.rosa", texto: "Beatriz, escribila. Yo la firmo y la llevo en mano.", fecha: "2026-03-27T17:45:00-03:00" },
      { autor: "taxi_cx_1420", texto: "yo firmo pero que diga policia. sin policia no hay nada", fecha: "2026-03-27T18:20:00-03:00",
        respuestas: [
          { autor: "elpibe.delcerro", texto: "y con policia tampoco hay nada, o vos crees q el problema del barrio es q falta un patrullero", fecha: "2026-03-27T18:44:00-03:00" },
          { autor: "taxi_cx_1420", texto: "vos tenes 19 años pibe, andate a estudiar", fecha: "2026-03-27T19:00:00-03:00" },
          { autor: "costa_dorada_vecina", texto: "Wilson, el muchacho vive en la cuadra que usted atraviesa en auto. Su opinión vale exactamente lo mismo que la suya.", fecha: "2026-03-27T19:30:00-03:00" },
          { autor: "taxi_cx_1420", texto: "ta ta, tiene razon. Perdon pibe", fecha: "2026-03-27T20:05:00-03:00" },
          { autor: "elpibe.delcerro", texto: "todo bn capo", fecha: "2026-03-27T20:12:00-03:00" }
        ]
      },
      { autor: "murga_la_reculada", texto: "La murga firma. Somos veintidos.", fecha: "2026-03-27T21:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2016,
    autor: "vecina.malvin.rosa",
    fecha: "2026-04-06T09:00:00-03:00",
    texto: "AVISO DE ADMINISTRACIÓN sobre el tema del terreno baldío.\n\nEn los últimos diez dias recibí once reportes de posts sobre esto. Se están nombrando vecinos por su casa, por su portón y por el auto que tienen. Eso es exactamente lo que la regla 3 prohíbe.\n\nDesde hoy: cualquier post que identifique a un vecino sin que haya una denuncia hecha, se borra sin aviso.\n\nQuien tenga fotos con fecha del camion descargando, me las manda por privado. Con eso se puede hacer algo. Con la sospecha del pasaje no se puede hacer nada más que pelearnos.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 203,
    comentarios: [
      { autor: "elrusodelquiosco", texto: "yo lo dije y me arrepiento. Perdon", fecha: "2026-04-06T09:40:00-03:00" },
      { autor: "pintor_rodri", texto: "esta bien pero entonces nunca se va a arreglar nada. asi es como se sale con la de siempre", fecha: "2026-04-06T10:15:00-03:00",
        respuestas: [
          { autor: "vecina.malvin.rosa", texto: "Rodrigo, en 2021 acusamos a un señor de robar cables y era el que arreglaba la antena del edificio. Estuvo un año sin salir a la calle. Por eso.", fecha: "2026-04-06T10:44:00-03:00" },
          { autor: "pintor_rodri", texto: "ah. no sabia eso", fecha: "2026-04-06T11:02:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2017,
    autor: "marce.peluquera",
    fecha: "2026-04-15T12:30:00-03:00",
    texto: "hola vecinas!! aviso que el sabado hago cortes a la gorra en la vereda de la peluqueria, de 10 a 14, y lo que junte va a la copa de leche de la zuni. traigan silla propia si tienen jaja. corto varon, mujer y gurises. tinturas no que se me va la mañana en uno solo 💇",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 344,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Marcela, sos un sol. Yo llevo pastafrola para los que esperan.", fecha: "2026-04-15T13:10:00-03:00" },
      { autor: "elpibe.delcerro", texto: "voy, necesito corte urgente ando como un yuyo", fecha: "2026-04-15T14:22:00-03:00" },
      { autor: "dona_elsa_47", texto: "YO NECESITO PERO NO PUEDO ESPERAR PARADA HIJA", fecha: "2026-04-15T15:00:00-03:00",
        respuestas: [
          { autor: "marce.peluquera", texto: "elsa vos venis a la hora que quieras y te siento primera, ni se te ocurra hacer cola ❤️", fecha: "2026-04-15T15:20:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2018,
    autor: "elrusodelquiosco",
    fecha: "2026-04-28T16:50:00-03:00",
    texto: "ACTUALIZACION DE LA OBRA (dia 178 sin obreros)\n\nHoy vinieron 2 tipos, miraron el pozo, sacaron una foto y se fueron. Estuvieron 11 minutos. Los cronometre.\n\nLos caños siguen en la vereda desde febrero. Ya les crecio pasto adentro",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 456,
    comentarios: [
      { autor: "vecina.malvin.rosa", texto: "Esa foto la voy a adjuntar. Sergio, ¿tenes más? Necesito una donde se vea la fecha o algo que la ubique en el tiempo.", fecha: "2026-04-28T17:20:00-03:00" },
      { autor: "ing.rossi", texto: "Permítanme aclarar algo técnico. Lo que ustedes ven como abandono suele ser espera de ensayo de compactación. No se puede cerrar la zanja hasta que el terreno asiente. Adjunto criterio: 90% Proctor minimo.", fecha: "2026-04-28T18:00:00-03:00",
        respuestas: [
          { autor: "elrusodelquiosco", texto: "178 dias de asiento ingeniero?", fecha: "2026-04-28T18:15:00-03:00" },
          { autor: "ing.rossi", texto: "No, 178 dias es abandono. Yo hablaba del caso general.", fecha: "2026-04-28T18:40:00-03:00" },
          { autor: "taxi_cx_1420", texto: "jajajaja lo dejo pagando el ruso", fecha: "2026-04-28T19:02:00-03:00" }
        ]
      },
      { autor: "municipio_costanorte", texto: "Se informa que la obra corresponde a otra jurisdicción. Sugerimos derivar el reclamo al organismo competente.", fecha: "2026-04-29T09:00:00-03:00",
        respuestas: [
          { autor: "costa_dorada_vecina", texto: "Nadie les preguntó, pero gracias por confirmar que nadie es competente.", fecha: "2026-04-29T09:45:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2019,
    autor: "mama_de_tres_mvd",
    fecha: "2026-05-04T19:20:00-03:00",
    texto: "alguien sabe que paso en la esquina? habia dos patrulleros y una ambulancia como a las 6",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 43,
    comentarios: [
      { autor: "elrusodelquiosco", texto: "un señor se descompuso en la parada. Ya esta bien, lo llevaron caminando a la ambulancia", fecha: "2026-05-04T19:35:00-03:00" },
      { autor: "mama_alerta_uy", texto: "a mi me dijeron que fue un tiroteo", fecha: "2026-05-04T19:50:00-03:00",
        respuestas: [
          { autor: "elrusodelquiosco", texto: "yo estaba a 15 metros veronica. Fue un señor con la presion", fecha: "2026-05-04T20:00:00-03:00" },
          { autor: "mama_alerta_uy", texto: "bueno, yo repito lo que me dicen", fecha: "2026-05-04T20:12:00-03:00" },
          { autor: "nurse_valentina", texto: "Y ahí está el problema del grupo en una frase.", fecha: "2026-05-04T23:50:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2020,
    autor: "vecina.malvin.rosa",
    fecha: "2026-05-12T10:00:00-03:00",
    texto: "NOTA VECINAL - texto final para firmar\n\nLa redactó Beatriz Cabrera y la revisamos entre cuatro. Tres puntos, sin adjetivos, como corresponde:\n\n1. Reposición de luminarias en las 21 columnas relevadas, con nómina adjunta por número de puerta.\n2. Finalizacion o cierre provisorio seguro de la zanja de saneamiento, con fecha comprometida por escrito.\n3. Retiro del material acopiado en vereda, que obstruye el tránsito peatonal y afecta a un comercio.\n\nSe firma en el quiosco de Sergio, en la peluqueria de Marcela y en la panadería. Hasta el 30 de mayo.\n\nQuien quiera agregar un punto, lo propone acá. No se agregan puntos por privado.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 521,
    comentarios: [
      { autor: "costa_dorada_vecina", texto: "Correcto. Una sola observación: en el punto 2 conviene decir plazo cierto en lugar de fecha comprometida. Es lenguaje que ellos usan.", fecha: "2026-05-12T10:30:00-03:00",
        respuestas: [
          { autor: "vecina.malvin.rosa", texto: "Cambiado. Gracias", fecha: "2026-05-12T10:41:00-03:00" }
        ]
      },
      { autor: "pintor_rodri", texto: "agrego punto 4: la vereda de la escuela esta rota hace años y ahi pasan gurises todos los dias", fecha: "2026-05-12T11:15:00-03:00",
        respuestas: [
          { autor: "vecina.malvin.rosa", texto: "Rodrigo, es valido pero si le ponemos cuatro puntos nos contestan el mas barato y dan por cerrado todo. Lo dejamos para la siguiente.", fecha: "2026-05-12T11:50:00-03:00" },
          { autor: "pintor_rodri", texto: "ta, entendido", fecha: "2026-05-12T12:00:00-03:00" }
        ]
      },
      { autor: "dona_elsa_47", texto: "YO YA FIRME EN EL QUIOSCO. DIOS LOS BENDIGA. AMEN", fecha: "2026-05-12T16:20:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2021,
    autor: "pastelera.zuni",
    fecha: "2026-05-21T08:15:00-03:00",
    texto: "Vecinos, el terreno otra vez. Anoche a las once y media pasó el camión. Esta vez saqué la foto desde la ventana de arriba, se ve la caja cargada y se ve la hora en el reloj de la cocina que salió en el reflejo.\n\nNo la publico acá porque Rosario tiene razón con la regla. Se la mandé a ella.\n\nSolo aviso para que sepan que sigue pasando y que no nos volvimos locas.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 298,
    comentarios: [
      { autor: "vecina.malvin.rosa", texto: "Recibida. Zunilda hizo exactamente lo que hay que hacer. Con esto si se puede presentar algo.", fecha: "2026-05-21T08:50:00-03:00" },
      { autor: "elrusodelquiosco", texto: "yo tengo la camara del quiosco q agarra la esquina, si sirve", fecha: "2026-05-21T09:10:00-03:00",
        respuestas: [
          { autor: "vecina.malvin.rosa", texto: "Sirve muchisimo. ¿Cuántos días guarda?", fecha: "2026-05-21T09:22:00-03:00" },
          { autor: "elrusodelquiosco", texto: "como 10 creo, despues se pisa solo", fecha: "2026-05-21T09:30:00-03:00" },
          { autor: "hacker_del_prado", texto: "Bajate el archivo hoy mismo entonces, no esperes. Esas cosas se pisan siempre antes de lo que uno cree.", fecha: "2026-05-21T10:05:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2022,
    autor: "bomberito_ruiz",
    fecha: "2026-06-02T21:10:00-03:00",
    texto: "Está circulando un audio de 3:20 donde una voz dice que hubo una explosión de garrafas en un depósito del barrio y que están evacuando.\n\nEs falso. No hubo ninguna intervención hoy en la zona. Cero. Lo verifiqué en el parte.\n\nEl audio además menciona una calle que no existe acá. Si lo recibieron, no lo pasen.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 512,
    comentarios: [
      { autor: "dona_elsa_47", texto: "YO YA LO MANDE A MIS HERMANAS. QUE HAGO", fecha: "2026-06-02T21:30:00-03:00",
        respuestas: [
          { autor: "bomberito_ruiz", texto: "Mándeles este post. Se arregla igual, Elsa, no pasa nada.", fecha: "2026-06-02T21:44:00-03:00" },
          { autor: "dona_elsa_47", texto: "YA ESTA HIJO. GRACIAS. AMEN", fecha: "2026-06-02T22:00:00-03:00" }
        ]
      },
      { autor: "elpibe.delcerro", texto: "el audio ese es re viejo, lo escuche en 2023 con otro barrio jajajaj le cambian el nombre nomas", fecha: "2026-06-02T22:15:00-03:00" },
      { autor: "vecina.malvin.rosa", texto: "Tres posts borrados con ese audio. Último aviso con esto: el que lo vuelva a subir queda afuera.", fecha: "2026-06-02T22:40:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2023,
    autor: "taxi_cx_1420",
    fecha: "2026-06-11T03:40:00-03:00",
    texto: "gente. son las 3 y 40 de la mañana y les escribo desde el auto parado en la esquina de SIEMPRE. la calle esta NEGRA. no se ve un pozo, no se ve un perro, no se ve una persona. yo levanto pasajeros aca y no veo a quien subo hasta que abre la puerta.\n\nno es un problema de seguridad ni de politica. es que no hay luz. eso es todo lo que hay que arreglar y llevamos 6 meses hablando",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 402,
    comentarios: [
      { autor: "remis_nocturno_mvd", texto: "Igual acá en Aguada. Uno se acostumbra a manejar de memoria, que es lo peor que te puede pasar.", fecha: "2026-06-11T04:20:00-03:00" },
      { autor: "vecina.malvin.rosa", texto: "Wilson, esto que escribiste vale más que veinte notas mías. ¿Lo puedo transcribir en el reclamo? Con tu nombre o sin él, como prefieras.", fecha: "2026-06-11T07:30:00-03:00",
        respuestas: [
          { autor: "taxi_cx_1420", texto: "poneme con nombre. Wilson Techera, taxista, 30 años dando vueltas por aca. que se hagan cargo", fecha: "2026-06-11T08:00:00-03:00" }
        ]
      },
      { autor: "elpibe.delcerro", texto: "mira vos, resulta q coincidimos", fecha: "2026-06-11T09:15:00-03:00",
        respuestas: [
          { autor: "taxi_cx_1420", texto: "no te agrandes pibe jaja", fecha: "2026-06-11T09:40:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2024,
    autor: "vecina.malvin.rosa",
    fecha: "2026-06-24T15:00:00-03:00",
    texto: "RESPUESTA A LA NOTA VECINAL. Se las leo entera para que vean cómo funciona esto.\n\nPunto 1 (luminarias): responden que se derivó al servicio correspondiente y que se programará según disponibilidad de cuadrillas. Traducción: no.\nPunto 2 (zanja): responden que la obra está bajo responsabilidad del contratista y que se instó a su regularización. Traducción: no.\nPunto 3 (material en vereda): retirado el martes.\n\nO sea que de tres puntos, contestaron el que costaba una camioneta y media hora.\n\nBeatriz lo dijo antes de que pasara. Vamos por la reiteración citando este expediente, que es lo único que mueve algo. Firmas siguen abiertas.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 367,
    comentarios: [
      { autor: "costa_dorada_vecina", texto: "Contestan el punto más barato y dan por cerrado el expediente. Es un clásico, no es mala fe necesariamente, es cómo está armado el sistema. La reiteración es obligatoria y hay que hacerla antes de los treinta días.", fecha: "2026-06-24T15:40:00-03:00" },
      { autor: "elrusodelquiosco", texto: "por lo menos me sacaron los caños de la puerta jaja. 4 meses", fecha: "2026-06-24T16:10:00-03:00" },
      { autor: "taxi_cx_1420", texto: "y la luz? sigo manejando a oscuras", fecha: "2026-06-24T18:30:00-03:00" },
      { autor: "dona_elsa_47", texto: "PACIENCIA VECINOS. DIOS APRIETA PERO NO AHOGA. AMEN", fecha: "2026-06-24T19:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2025,
    autor: "murga_la_reculada",
    fecha: "2026-07-01T20:00:00-03:00",
    texto: "Vecinos: el sábado 11 hacemos peña en el club para juntar para el techo del salón, que se llueve arriba del escenario y no es chiste.\n\nEntrada 250, gurises hasta 12 no pagan. Hay chorizo, hay tortas fritas de la Zuni y hay tambores después de las 12.\n\nEl que quiera dar una mano el viernes armando, caiga a las 18. Se necesita gente con taladro más que gente con ganas.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 289,
    comentarios: [
      { autor: "pintor_rodri", texto: "taladro tengo, voy el viernes", fecha: "2026-07-01T20:30:00-03:00" },
      { autor: "dj_candombe", texto: "Si necesitan equipo llevo la consola chica y dos parlantes. No cobro, pero pongan una mesa cerca del enchufe.", fecha: "2026-07-02T01:15:00-03:00" },
      { autor: "marce.peluquera", texto: "voy con toda la barra de la peluqueria!!! 🎉", fecha: "2026-07-02T09:40:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2026,
    autor: "vecina.malvin.rosa",
    fecha: "2026-07-09T11:30:00-03:00",
    texto: "AVISO DE ADMINISTRACIÓN.\n\nSe removió del grupo a un usuario que publicó tres veces el domicilio y el lugar de trabajo de un vecino en relación al tema del terreno. Se lo advirtió dos veces por privado.\n\nNo es una discusión sobre si tenía razón o no. Publicar dónde trabaja alguien para que le vayan a golpear la puerta no es reclamar, es otra cosa.\n\nSé que va a escribir por otro lado diciendo que lo censuraron. Que escriba.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 445,
    comentarios: [
      { autor: "elrusodelquiosco", texto: "hiciste bien. Estaba pesado el asunto", fecha: "2026-07-09T11:50:00-03:00" },
      { autor: "mama_de_tres_mvd", texto: "pero entonces el del porton verde queda como si nada", fecha: "2026-07-09T12:20:00-03:00",
        respuestas: [
          { autor: "vecina.malvin.rosa", texto: "Andrea, con la foto de Zunilda y el video del quiosco se presentó una denuncia el lunes. Está el expediente. Eso es que quede algo, lo otro es que le rompan un vidrio.", fecha: "2026-07-09T12:45:00-03:00" },
          { autor: "mama_de_tres_mvd", texto: "ah, no sabia. ta perfecto entonces", fecha: "2026-07-09T13:00:00-03:00" },
          { autor: "costa_dorada_vecina", texto: "Y conviene aclararlo, Rosario. La gente no se enoja porque modere, se enoja porque no sabe qué pasó.", fecha: "2026-07-09T13:30:00-03:00" }
        ]
      },
      { autor: "bomberito_ruiz", texto: "Se agradece la mano dura con esto. En serio.", fecha: "2026-07-09T14:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2027,
    autor: "pastelera.zuni",
    fecha: "2026-07-18T14:20:00-03:00",
    texto: "Vecinos queridos: la copa de leche pasó de 50 a 78 meriendas este invierno. Setenta y ocho.\n\nNo lo digo para asustar a nadie, lo digo porque necesitamos dos personas mas los sábados de mañana. Nada mas que servir y lavar. De 9 a 12.\n\nSi pueden, avisen. Si no pueden, no se sientan mal, ya bastante hace cada uno.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 634,
    comentarios: [
      { autor: "marce.peluquera", texto: "yo el sabado que no trabajo voy, o sea uno cada dos. cuenta?", fecha: "2026-07-18T15:00:00-03:00",
        respuestas: [
          { autor: "pastelera.zuni", texto: "Claro que cuenta mi amor. Cuenta muchísimo.", fecha: "2026-07-18T15:20:00-03:00" }
        ]
      },
      { autor: "elpibe.delcerro", texto: "yo voy tia, tengo libre los sabados hasta q empiece la practica", fecha: "2026-07-18T16:10:00-03:00" },
      { autor: "nurse_valentina", texto: "Yo salgo de guardia 7am los sabados. Si aguanto despierta voy, pero no prometo nada porque despues no voy y quedo como una caradura.", fecha: "2026-07-18T17:30:00-03:00",
        respuestas: [
          { autor: "pastelera.zuni", texto: "Valentina, vos venís cuando puedas y te sentás a tomar un té si querés. Con lo que hacen ustedes ya está.", fecha: "2026-07-18T18:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2028,
    autor: "elrusodelquiosco",
    fecha: "2026-07-30T18:00:00-03:00",
    texto: "ATENCION. Cuadrilla. En la calle. Con escalera. CAMBIANDO LAMPARAS.\n\nNo es un simulacro. Van 6 columnas. Estan trabajando ahora.\n\nRosario donde estas q esto es tuyo",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 728,
    comentarios: [
      { autor: "vecina.malvin.rosa", texto: "Estoy en el mostrador de la oficina llorando como una tonta. Seis años.", fecha: "2026-07-30T18:20:00-03:00",
        respuestas: [
          { autor: "costa_dorada_vecina", texto: "Se lo dije, Rosario: la reiteración. Felicitaciones sinceras.", fecha: "2026-07-30T18:40:00-03:00" },
          { autor: "taxi_cx_1420", texto: "che gracias en serio. de verdad. esta noche paso y aviso como se ve", fecha: "2026-07-30T19:00:00-03:00" }
        ]
      },
      { autor: "dona_elsa_47", texto: "GLORIA A DIOS!!! GRACIAS ROSARIO POR TANTO. AMEN AMEN", fecha: "2026-07-30T19:30:00-03:00" },
      { autor: "murga_la_reculada", texto: "Le vamos a escribir un cuplé a la señora esta. En serio.", fecha: "2026-07-30T20:15:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2029,
    autor: "taxi_cx_1420",
    fecha: "2026-08-03T02:55:00-03:00",
    texto: "reporte desde el auto: 4 de las 6 andan. dos parpadean pero andan.\n\nse ve la calle bo. se ve la calle.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 596,
    comentarios: [
      { autor: "vecina.malvin.rosa", texto: "Las dos que parpadean las anoto para la proxima. Pero hoy no, hoy dejemos que se vea la calle.", fecha: "2026-08-03T08:00:00-03:00" },
      { autor: "elpibe.delcerro", texto: "q loco q lo primero q hagas cuando anda la luz sea contarnos jajaj", fecha: "2026-08-03T09:30:00-03:00" },
      { autor: "remis_nocturno_mvd", texto: "Los que manejamos de noche entendemos.", fecha: "2026-08-03T10:00:00-03:00" }
    ],
    encuesta: null
  },

  /* ============ comprovendo (2030-2058) ============ */

  {
    id: 2030,
    autor: "feriante_tristan",
    fecha: "2019-11-18T09:00:00-03:00",
    texto: "FIJADO. Abro el grupo porque en la feria me preguntan todo el tiempo donde conseguir tal cosa y yo no soy guia telefonica.\n\nAca se vende, se compra y se permuta. Con precio. CON PRECIO.\n\nEl que publica sin precio ya sabe lo que le va a pasar en los comentarios y despues no venga a llorar",
    imagen: null,
    grupo: "comprovendo",
    likes: 302,
    comentarios: [
      { autor: "melo_ferretero", texto: "Bien. Yo pongo precio hasta cuando saludo", fecha: "2019-11-18T10:30:00-03:00" },
      { autor: "contadora.gimenez", texto: "Aclaro algo desde ya: acá nadie factura nada y está todo bien, pero si venden en volumen no me vengan después a preguntarme cómo lo declaran.", fecha: "2019-11-18T14:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2031,
    autor: "coleccionista_cx",
    fecha: "2021-07-04T16:40:00-03:00",
    texto: "Vendo radio a válvulas, gabinete de madera, año 1948 aproximadamente. Funciona: enciende, calienta y toma emisoras de onda media. El dial está completo y la aguja es la original.\n\nTiene un rayón en la tapa superior de unos 4 cm que se ve en la tercera foto.\n\nPrecio: 8500 pesos. Belvedere, se ve en mi casa. No envío, esto no se manda por encomienda.",
    imagen: null,
    grupo: "comprovendo",
    likes: 78,
    comentarios: [
      { autor: "elabuelo_radioCX8", texto: "Héctor, hermoso aparato. ¿Le cambió los capacitores de papel? Si no, no la deje enchufada mucho rato. Cambio.", fecha: "2021-07-04T17:20:00-03:00",
        respuestas: [
          { autor: "coleccionista_cx", texto: "Todos cambiados en 2019, Ramon. Lo aclaro en el post que si no me matan.", fecha: "2021-07-04T17:45:00-03:00" }
        ]
      },
      { autor: "feriante_tristan", texto: "te doy 4000", fecha: "2021-07-04T18:00:00-03:00",
        respuestas: [
          { autor: "coleccionista_cx", texto: "No.", fecha: "2021-07-04T18:02:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2032,
    autor: "young_bicicleteria",
    fecha: "2026-03-12T11:15:00-03:00",
    texto: "Llegaron cámaras rodado 26, 27.5 y 29. Valvula fina y gruesa.\nCámara 26: 320\nCámara 27.5: 380\nCámara 29: 420\nParche autoadhesivo caja x6: 190\n\nYoung, Río Negro. Mandamos al interior con la agencia, el flete lo paga el comprador.",
    imagen: null,
    grupo: "comprovendo",
    likes: 45,
    comentarios: [
      { autor: "mateamargo_87", texto: "hacen envio a montevideo?", fecha: "2026-03-12T12:00:00-03:00",
        respuestas: [
          { autor: "young_bicicleteria", texto: "Sí, agencia. Llega en 2 días hábiles.", fecha: "2026-03-12T14:30:00-03:00" }
        ]
      },
      { autor: "laspiedras_mecanico", texto: "las de 29 sirven para 28 tambien? tengo un cliente con una rueda rara", fecha: "2026-03-12T15:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2033,
    autor: "maldonado_inmobiliaria",
    fecha: "2022-11-08T10:00:00-03:00",
    texto: "TEMPORADA 2023 - se abre agenda.\n\nApartamento 2 dormitorios, Peninsula, a 2 cuadras de la playa. Enero completo USD 2800. Quincenas USD 1600.\nCasa 3 dormitorios con parrillero, Pinares. Enero USD 4200.\nMonoambiente, centro de Maldonado. Mensual todo el año USD 380.\n\nGarantia o depósito según el caso. Consultas por privado que acá se me llena.",
    imagen: null,
    grupo: "comprovendo",
    likes: 61,
    comentarios: [
      { autor: "feriante_tristan", texto: "2800 dolares por enero. bo. yo con eso vivo 4 meses", fecha: "2022-11-08T11:20:00-03:00" },
      { autor: "rivera_frontera", texto: "en rivera con eso alquilas un año jaja", fecha: "2022-11-08T13:00:00-03:00" },
      { autor: "maldonado_inmobiliaria", texto: "Es el precio de mercado de la zona, no lo pongo yo. En febrero baja a la mitad.", fecha: "2022-11-08T15:40:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2034,
    autor: "melo_ferretero",
    fecha: "2023-04-19T08:30:00-03:00",
    texto: "Lista de precios actualizada, Melo:\nBolsa de portland 25kg: 340\nHierro del 8, barra 12m: 690\nAlambre de pua 500m: 3900\nTornillo autoperforante x100: 210\n\nEl que pregunte por privado cuanto sale la bolsa de portland despues de este post, le contesto con este post.",
    imagen: null,
    grupo: "comprovendo",
    likes: 134,
    comentarios: [
      { autor: "productor_durazno", texto: "el alambre subio 400 pesos en dos meses. asi no hay campo que aguante", fecha: "2023-04-19T09:15:00-03:00" },
      { autor: "pintor_rodri", texto: "cuanto sale la bolsa de portland?", fecha: "2023-04-19T10:00:00-03:00",
        respuestas: [
          { autor: "melo_ferretero", texto: "340.", fecha: "2023-04-19T10:05:00-03:00" },
          { autor: "pintor_rodri", texto: "jajaja perdon no lei", fecha: "2023-04-19T10:12:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2035,
    autor: "tatu.ink.mvd",
    fecha: "2023-08-27T19:50:00-03:00",
    texto: "vendo camilla de tatuaje, la vieja, porque me llegó la nueva. altura regulable, tapizado negro, tiene un par de marcas de uso pero esta sana.\n\n9000. Palermo. la retiras vos que pesa un montón y yo mido 1.58.",
    imagen: null,
    grupo: "comprovendo",
    likes: 52,
    comentarios: [
      { autor: "marce.peluquera", texto: "sirve para depilacion?? me interesa!!", fecha: "2023-08-27T20:30:00-03:00",
        respuestas: [
          { autor: "tatu.ink.mvd", texto: "sí total, es una camilla común pero reforzada. te paso fotos por privado", fecha: "2023-08-27T20:45:00-03:00" },
          { autor: "marce.peluquera", texto: "dale!! 💅", fecha: "2023-08-27T20:50:00-03:00" }
        ]
      },
      { autor: "feriante_tristan", texto: "ultimo precio?", fecha: "2023-08-27T21:00:00-03:00",
        respuestas: [
          { autor: "tatu.ink.mvd", texto: "9000 es el último precio, es el primero también, es el único precio", fecha: "2023-08-27T21:10:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2036,
    autor: "artigas_citrus",
    fecha: "2026-05-30T18:00:00-03:00",
    texto: "Termina la zafra y quedan cajones de madera de fruta, buen estado, sirven para estantería o para leña si estan rotos.\n\nCajón entero: 90 pesos. Roto: 25. Lote de 50 enteros: 3500.\n\nArtigas. Si alguien baja a Montevideo y quiere llevar, arreglamos flete",
    imagen: null,
    grupo: "comprovendo",
    likes: 88,
    comentarios: [
      { autor: "artesano_piriapolis", texto: "compañera, esos cajones tienen buena energia, la madera de fruta guarda el sol adentro. Me quedo con 20 si conseguís como mandarlos.", fecha: "2026-05-30T19:20:00-03:00",
        respuestas: [
          { autor: "artigas_citrus", texto: "jajaja Ruben sos unico. Veo si el camión de la semana que viene baja hasta Piriápolis.", fecha: "2026-05-30T19:50:00-03:00" }
        ]
      },
      { autor: "panaderia_dosorillas", texto: "nos interesan 10 para exhibir. cómo hacemos?", fecha: "2026-06-04T09:00:00-03:00",
        respuestas: [
          { autor: "artigas_citrus", texto: "5 días después jajaja. Quedan igual, te escribo.", fecha: "2026-06-04T10:15:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2037,
    autor: "laspiedras_mecanico",
    fecha: "2026-04-11T16:20:00-03:00",
    texto: "Aviso que NO compro autos para desarmar. Me escriben 5 por dia. No compro. Arreglo.\n\nY de paso: si tu auto hace un ruido, no me lo describas por escrito. Nadie sabe escribir un ruido. Traelo q lo escucho.",
    imagen: null,
    grupo: "comprovendo",
    likes: 267,
    comentarios: [
      { autor: "taxi_cx_1420", texto: "hace como un tuc tuc tuc, pero solo cuando dobla a la izquierda", fecha: "2026-04-11T17:00:00-03:00",
        respuestas: [
          { autor: "laspiedras_mecanico", texto: "homocinetica. Igual traelo.", fecha: "2026-04-11T17:10:00-03:00" },
          { autor: "taxi_cx_1420", texto: "jajaja sabia que ibas a contestar IGUAL", fecha: "2026-04-11T17:22:00-03:00" }
        ]
      },
      { autor: "guarda_101", texto: "y si hace como un chiiiii pero bajito", fecha: "2026-04-11T18:00:00-03:00",
        respuestas: [
          { autor: "laspiedras_mecanico", texto: "pastillas. Traelo.", fecha: "2026-04-11T18:05:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2038,
    autor: "rivera_frontera",
    fecha: "2026-02-14T12:00:00-03:00",
    texto: "gente, aviso de precios de frontera para el que baje a Rivera este mes. no vendo nada, es informacion nomas.\n\nel cambio esta jodido, no conviene tanto como el año pasado. perfumeria si, electronica mas o menos, whisky ni ahi que subio.\n\nsi venis, veni con la lista hecha y no compres en la primera cuadra.",
    imagen: null,
    grupo: "comprovendo",
    likes: 412,
    comentarios: [
      { autor: "contadora.gimenez", texto: "Recuerden que hay franquicia y que pasar de eso trae problemas que no valen la pena por un ahorro de dos mil pesos.", fecha: "2026-02-14T13:30:00-03:00" },
      { autor: "la_verdad_del_norte", texto: "a mi me dijo una amiga que trabaja adentro que van a cerrar los free shop en marzo", fecha: "2026-02-14T15:00:00-03:00",
        respuestas: [
          { autor: "rivera_frontera", texto: "Mirta yo trabajo en uno. No van a cerrar nada. Todos los años alguien dice lo mismo.", fecha: "2026-02-14T15:20:00-03:00" },
          { autor: "la_verdad_del_norte", texto: "bueno yo lo comparto porque me lo mandaron", fecha: "2026-02-14T15:45:00-03:00" },
          { autor: "contadora.gimenez", texto: "Ese es literalmente el problema, Mirta.", fecha: "2026-02-14T16:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2039,
    autor: "mateamargo_87",
    fecha: "2026-06-21T20:15:00-03:00",
    texto: "Vendo router y switch de 8 bocas, los cambié por unos nuevos en casa. Andan perfecto, los usé yo, o sea que están bien configurados y bien tratados.\n\nRouter: 1800. Switch: 900. Los dos juntos: 2400.\n\nPocitos, o los llevo si te queda de paso de mi laburo.",
    imagen: null,
    grupo: "comprovendo",
    likes: 39,
    comentarios: [
      { autor: "hacker_del_prado", texto: "modelo? porque si es el que estoy pensando tiene una vulnerabilidad linda en el firmware", fecha: "2026-06-21T21:00:00-03:00",
        respuestas: [
          { autor: "mateamargo_87", texto: "jajaja no me arruines la venta bo. Te paso el modelo por privado", fecha: "2026-06-21T21:15:00-03:00" },
          { autor: "hacker_del_prado", texto: "lo digo en serio eh, actualizale el firmware antes de venderlo y listo", fecha: "2026-06-21T21:30:00-03:00" }
        ]
      },
      { autor: "feriante_tristan", texto: "te doy 1500 por los dos", fecha: "2026-06-22T08:00:00-03:00",
        respuestas: [
          { autor: "mateamargo_87", texto: "Tristan vos ofrecés la mitad en todos los posts del grupo", fecha: "2026-06-22T08:30:00-03:00" },
          { autor: "feriante_tristan", texto: "y alguna vez pega", fecha: "2026-06-22T08:35:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2040,
    autor: "contadora.gimenez",
    fecha: "2026-01-15T09:30:00-03:00",
    texto: "FIJADO - Sobre los mensajes de gente que dice que le clavaron.\n\nRecibimos ocho reportes en diciembre. Los revisé uno por uno. De los ocho:\n- Cuatro eran malentendidos por WhatsApp (uno decía mañana y el otro entendió otro día).\n- Tres eran demoras de encomienda.\n- Uno era real: la persona cobró, no envió y borró la cuenta.\n\nConclusión práctica: antes de mandar plata, pedí una foto del artículo con un papel al lado con la fecha escrita. Si se niega, ahí tenés tu respuesta.\n\nY no manden el total por adelantado. Nunca.",
    imagen: null,
    grupo: "comprovendo",
    likes: 891,
    comentarios: [
      { autor: "feriante_tristan", texto: "Patricia esto lo tendriamos que tener arriba de todo. En la feria es igual, el que no te deja ver la mercaderia es porque algo hay", fecha: "2026-01-15T10:00:00-03:00" },
      { autor: "melo_ferretero", texto: "Yo hace 30 años que vendo. La gente honesta muestra. Es asi de simple", fecha: "2026-01-15T11:20:00-03:00" },
      { autor: "mama_de_tres_mvd", texto: "a mi me paso con una campera, mande 2500 y nunca mas contesto", fecha: "2026-01-15T12:40:00-03:00",
        respuestas: [
          { autor: "contadora.gimenez", texto: "Andrea, ¿me pasás el alias por privado? Si es el mismo que tengo yo, es el caso real de los ocho.", fecha: "2026-01-15T13:00:00-03:00" },
          { autor: "mama_de_tres_mvd", texto: "ya te mando", fecha: "2026-01-15T13:15:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2041,
    autor: "panaderia_dosorillas",
    fecha: "2026-01-28T07:45:00-03:00",
    texto: "Vendemos horno rotativo chico, funciona, lo sacamos porque compramos uno mas grande. Se lo lleva quien lo desarme.\n\nCiudad Vieja. Precio a convenir.",
    imagen: null,
    grupo: "comprovendo",
    likes: 56,
    comentarios: [
      { autor: "feriante_tristan", texto: "PRECIO. Regla 1. Lo digo con cariño pero lo digo", fecha: "2026-01-28T08:00:00-03:00" },
      { autor: "chef_carmelo", texto: "A convenir significa que quieren ver cuánto está dispuesto a pagar cada uno. Es válido pero acá no se usa.", fecha: "2026-01-28T09:30:00-03:00" },
      { autor: "pastelera.zuni", texto: "¿Cuántas bandejas tiene, hijo? Eso importa más que el precio.", fecha: "2026-01-28T10:15:00-03:00",
        respuestas: [
          { autor: "panaderia_dosorillas", texto: "10 bandejas. Perdón la demora, andamos con el horno nuevo a full. Ponemos 45000 y se charla.", fecha: "2026-02-02T16:00:00-03:00" },
          { autor: "feriante_tristan", texto: "5 dias despues jajaja. Pero puso precio, se le perdona todo", fecha: "2026-02-02T16:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2042,
    autor: "elrusodelquiosco",
    fecha: "2026-02-09T13:00:00-03:00",
    texto: "Vendo heladera exhibidora de quiosco, la chica, la de los helados. Anda bien pero hace ruido. 12000.\n\nGoes. Retiro en el local, obvio",
    imagen: null,
    grupo: "comprovendo",
    likes: 71,
    comentarios: [
      { autor: "laspiedras_mecanico", texto: "que ruido hace?", fecha: "2026-02-09T13:30:00-03:00",
        respuestas: [
          { autor: "elrusodelquiosco", texto: "como un ronquido pero cada tanto", fecha: "2026-02-09T13:40:00-03:00" },
          { autor: "laspiedras_mecanico", texto: "eso es el compresor arrancando, es normal en las viejas. No es falla", fecha: "2026-02-09T13:55:00-03:00" },
          { autor: "elrusodelquiosco", texto: "gustavo vos sos de autos, q sabes de heladeras", fecha: "2026-02-09T14:10:00-03:00" },
          { autor: "laspiedras_mecanico", texto: "un compresor es un compresor bo", fecha: "2026-02-09T14:15:00-03:00" }
        ]
      },
      { autor: "feriante_tristan", texto: "te doy 7000 y la retiro mañana", fecha: "2026-02-09T15:00:00-03:00",
        respuestas: [
          { autor: "elrusodelquiosco", texto: "10 y es tuya", fecha: "2026-02-09T15:10:00-03:00" },
          { autor: "feriante_tristan", texto: "8500", fecha: "2026-02-09T15:12:00-03:00" },
          { autor: "elrusodelquiosco", texto: "9500 y te la ayudo a cargar", fecha: "2026-02-09T15:15:00-03:00" },
          { autor: "feriante_tristan", texto: "hecho", fecha: "2026-02-09T15:16:00-03:00" },
          { autor: "melo_ferretero", texto: "Esto es lo mas hermoso que vi en este grupo. Cuatro mensajes y cerraron. Aprendan", fecha: "2026-02-09T16:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2043,
    autor: "young_bicicleteria",
    fecha: "2026-02-22T10:00:00-03:00",
    texto: "Bicicleta playera rodado 26, restaurada. Cuadro sano, sin abolladuras, pintura nueva color verde. Cubiertas nuevas. Frenos revisados. Canasto incluido.\n\n7800 pesos. Young, Rio Negro.\n\nLa dejamos linda, miren la foto.",
    imagen: "media/fotos/bici_5.jpg",
    grupo: "comprovendo",
    likes: 203,
    comentarios: [
      { autor: "marce.peluquera", texto: "ay que linda!!! hacen envio a sayago?", fecha: "2026-02-22T11:00:00-03:00",
        respuestas: [
          { autor: "young_bicicleteria", texto: "Bici entera no manda la agencia. Habria que desarmarla y sale casi lo mismo que la bici.", fecha: "2026-02-22T12:30:00-03:00" },
          { autor: "marce.peluquera", texto: "uf que lastima 😢", fecha: "2026-02-22T12:45:00-03:00" }
        ]
      },
      { autor: "feriante_tristan", texto: "ultimo precio?", fecha: "2026-02-22T13:00:00-03:00" },
      { autor: "young_bicicleteria", texto: "7800. Es el precio.", fecha: "2026-02-22T14:00:00-03:00" },
      { autor: "estudiante_utec", texto: "una pregunta media rara: por que las playeras cuestan mas restauradas que nuevas de las baratas?", fecha: "2026-02-22T18:00:00-03:00",
        respuestas: [
          { autor: "young_bicicleteria", texto: "Porque el cuadro viejo es de acero y dura cuarenta años. El nuevo barato dura dos veranos. No es lo mismo.", fecha: "2026-02-22T19:15:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2044,
    autor: "melo_ferretero",
    fecha: "2026-03-05T08:00:00-03:00",
    texto: "PERMUTO. Tengo una amoladora grande que casi no uso y me falta una soldadora inverter. Cerro Largo o alrededores.\n\nLa amoladora la compre hace 3 años, la use para cortar hierro dos veces. Esta como nueva y tengo la caja.\n\nSi nadie permuta, la vendo en 6500.",
    imagen: null,
    grupo: "comprovendo",
    likes: 44,
    comentarios: [
      { autor: "pintor_rodri", texto: "yo tengo soldadora pero la uso. Si consigo otra te aviso", fecha: "2026-03-05T09:00:00-03:00" },
      { autor: "productor_durazno", texto: "yo tengo una inverter que no uso desde que se me fue el peon. Melo me queda lejos", fecha: "2026-03-05T10:30:00-03:00",
        respuestas: [
          { autor: "melo_ferretero", texto: "Anibal, Durazno-Melo son 300 km. Pero si baja alguien de aca para alla lo arreglamos. Hablemos", fecha: "2026-03-05T11:00:00-03:00" },
          { autor: "camionero_ruta5", texto: "YO HAGO ESE TRAMO MARTES Y VIERNES. LES LLEVO LAS COSAS SIN PROBLEMA, SOLO NO ME MANDEN NADA QUE NO SEPA QUE ES", fecha: "2026-03-05T12:00:00-03:00" },
          { autor: "melo_ferretero", texto: "Walter sos un fenomeno. Y tenes razon en la aclaracion", fecha: "2026-03-05T12:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2045,
    autor: "mama_de_tres_mvd",
    fecha: "2026-03-17T14:30:00-03:00",
    texto: "vendo ropa de nene de 4 a 6 años, lote de 20 prendas, todo en buen estado porque son de mi hijo del medio que crece que da miedo. camperas, pantalones, buzos.\n\n2500 el lote entero. no vendo por separado porque me vuelvo loca.\n\nmaroñas.",
    imagen: null,
    grupo: "comprovendo",
    likes: 96,
    comentarios: [
      { autor: "marce.peluquera", texto: "me interesa!! una clienta tiene un nene de esa edad, le paso", fecha: "2026-03-17T15:00:00-03:00" },
      { autor: "mama_alerta_uy", texto: "ay camperas de invierno? mi sobrino necesita", fecha: "2026-03-17T16:00:00-03:00",
        respuestas: [
          { autor: "mama_de_tres_mvd", texto: "si, 3 camperas, una de polar y dos de abrigo", fecha: "2026-03-17T16:20:00-03:00" },
          { autor: "mama_alerta_uy", texto: "me vendes solo las camperas?", fecha: "2026-03-17T16:30:00-03:00" },
          { autor: "mama_de_tres_mvd", texto: "verónica leiste el post entero? jajaja", fecha: "2026-03-17T16:45:00-03:00" },
          { autor: "mama_alerta_uy", texto: "ay perdon", fecha: "2026-03-17T16:50:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2046,
    autor: "artesano_piriapolis",
    fecha: "2026-03-29T17:00:00-03:00",
    texto: "Hermanos, traje piedras del cerro. Cuarzo blanco, cuarzo rosa y unas ágatas q las corté yo mismo.\n\nColgante chico 450, grande 700. Piedra suelta desde 150 segun tamaño.\n\nFeria de Piriápolis todos los domingos, y si venís de lejos avisame q te guardo lo que quieras.",
    imagen: null,
    grupo: "comprovendo",
    likes: 128,
    comentarios: [
      { autor: "agua_pura_uy", texto: "Ruben yo te compré el año pasado y las piedras tuyas tienen otra vibración, se nota que las trabajás con intención", fecha: "2026-03-29T18:00:00-03:00" },
      { autor: "hacker_del_prado", texto: "son bonitas igual, sin la parte de la vibracion", fecha: "2026-03-29T19:30:00-03:00",
        respuestas: [
          { autor: "artesano_piriapolis", texto: "Mauro, vos comprate una y la pones en el escritorio. Con eso me alcanza, no hace falta que creas en nada.", fecha: "2026-03-29T20:00:00-03:00" },
          { autor: "hacker_del_prado", texto: "esa respuesta me gusto mas que la piedra. Mandame una ágata", fecha: "2026-03-29T20:20:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2047,
    autor: "feriante_tristan",
    fecha: "2026-04-08T07:00:00-03:00",
    texto: "AVISO DE ADMIN.\n\nEsta semana borre 14 posts sin precio. CATORCE.\n\nNo es capricho. Un post sin precio genera treinta comentarios preguntando el precio y despues la gente no encuentra las cosas que si se venden.\n\nSi no sabes cuanto vale, pone lo que te gustaria y que te regateen. Para eso esta el grupo",
    imagen: null,
    grupo: "comprovendo",
    likes: 674,
    comentarios: [
      { autor: "contadora.gimenez", texto: "Apoyo. Y agrego: el que pone consultar por privado está haciendo lo mismo con otro nombre.", fecha: "2026-04-08T08:30:00-03:00" },
      { autor: "maldonado_inmobiliaria", texto: "En inmuebles a veces no se puede publicar precio hasta tener la autorización del propietario. No todo es mala fe.", fecha: "2026-04-08T10:00:00-03:00",
        respuestas: [
          { autor: "feriante_tristan", texto: "Sandra, en tu rubro lo entiendo. Pero el 90% de los que borre vendian un sillon.", fecha: "2026-04-08T10:30:00-03:00" },
          { autor: "maldonado_inmobiliaria", texto: "Con eso estoy de acuerdo.", fecha: "2026-04-08T10:45:00-03:00" }
        ]
      },
      { autor: "elpibe.delcerro", texto: "y si vendo algo q no se cuanto vale?", fecha: "2026-04-08T12:00:00-03:00",
        respuestas: [
          { autor: "feriante_tristan", texto: "Preguntas aca cuanto vale, sin vender. Eso si se puede.", fecha: "2026-04-08T12:20:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2048,
    autor: "coleccionista_cx",
    fecha: "2026-04-20T15:40:00-03:00",
    texto: "Consulta antes de vender, siguiendo lo que dijo Tristan.\n\nTengo una coleccion de monedas de 1 peso de los años 60 y 70, unas 140 piezas, varias repetidas. Estado regular a bueno, ninguna sin circular.\n\n¿Alguien tiene idea de cuánto se paga un lote así hoy? No quiero pedir de más ni regalarlo.",
    imagen: null,
    grupo: "comprovendo",
    likes: 67,
    comentarios: [
      { autor: "elabuelo_radioCX8", texto: "Héctor, esos lotes se venden por peso o por pieza según quién compre. Al coleccionista le importan tres piezas, el resto le sobra. Cambio.", fecha: "2026-04-20T16:20:00-03:00",
        respuestas: [
          { autor: "coleccionista_cx", texto: "Es exactamente el problema. Vender el lote es regalar las tres buenas.", fecha: "2026-04-20T16:45:00-03:00" },
          { autor: "elabuelo_radioCX8", texto: "Entonces vendé las tres buenas por separado y el resto como lote. Es lo que hice yo con las válvulas. Cambio y fuera.", fecha: "2026-04-20T17:00:00-03:00" }
        ]
      },
      { autor: "contadora.gimenez", texto: "Consejo aburrido pero útil: fotografiá el lote completo antes de separar nada. Después no te acordás qué tenías.", fecha: "2026-04-20T18:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2049,
    autor: "laspiedras_mecanico",
    fecha: "2026-05-06T11:00:00-03:00",
    texto: "Vendo juego de llaves de tubo completo, 8 a 32, con crique y extensiones. Le falta la de 19 porque la de 19 se pierde siempre, es una ley de la fisica.\n\n4200. Las Piedras.",
    imagen: null,
    grupo: "comprovendo",
    likes: 187,
    comentarios: [
      { autor: "melo_ferretero", texto: "La de 19 y la de 13. Es cientifico", fecha: "2026-05-06T11:30:00-03:00" },
      { autor: "pintor_rodri", texto: "jajaja yo tengo 4 juegos y ninguno tiene la 19", fecha: "2026-05-06T12:00:00-03:00" },
      { autor: "taxi_cx_1420", texto: "me lo llevo. te paso a buscar el sabado", fecha: "2026-05-06T13:00:00-03:00",
        respuestas: [
          { autor: "laspiedras_mecanico", texto: "Dale Wilson. Y de paso te miro ese tuc tuc que nunca me trajiste.", fecha: "2026-05-06T13:15:00-03:00" },
          { autor: "taxi_cx_1420", texto: "se fue solo el ruido", fecha: "2026-05-06T13:20:00-03:00" },
          { autor: "laspiedras_mecanico", texto: "Ningún ruido se va solo. Se va el que lo escuchaba.", fecha: "2026-05-06T13:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2050,
    autor: "estudiante_utec",
    fecha: "2026-05-19T21:00:00-03:00",
    texto: "Busco calculadora científica usada, la que sea, para la facultad. Presupuesto 1500 máximo. Durazno o mandan a Durazno.\n\nSi alguien tiene una guardada en un cajón desde el liceo, me hace un favor a mí y le hace un favor al cajón.",
    imagen: null,
    grupo: "comprovendo",
    likes: 154,
    comentarios: [
      { autor: "laura.rambla", texto: "Agustina, tengo dos de alumnos que las dejaron y nunca las reclamaron. Te mando una y no me pagues nada.", fecha: "2026-05-19T22:00:00-03:00",
        respuestas: [
          { autor: "estudiante_utec", texto: "Ay no, te pago el flete al menos. Gracias de verdad 🙏", fecha: "2026-05-19T22:20:00-03:00" },
          { autor: "laura.rambla", texto: "El flete sí. Pasame la dirección por privado.", fecha: "2026-05-19T22:30:00-03:00" }
        ]
      },
      { autor: "profe_hernandez_hist", texto: "Es notable la cantidad de material escolar que queda huérfano cada año. Yo tengo una caja con quince reglas y ninguna es mía.", fecha: "2026-05-20T08:00:00-03:00" },
      { autor: "feriante_tristan", texto: "esto es lo que me gusta del grupo, no todo es plata", fecha: "2026-05-20T09:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2051,
    autor: "mateamargo_87",
    fecha: "2026-06-03T19:30:00-03:00",
    texto: "Aviso público: el que compró la impresora que vendí en abril, escribime. Quedó el cargador de la bandeja en casa y no encuentro el chat.\n\nEra alguien de Sayago o Colón, se la llevó un sábado de tarde. Si sos vos o conocés, avisá.",
    imagen: null,
    grupo: "comprovendo",
    likes: 112,
    comentarios: [
      { autor: "marce.peluquera", texto: "yo soy de sayago pero no fui yo jaja", fecha: "2026-06-03T20:00:00-03:00" },
      { autor: "guarda_101", texto: "Colón acá. Tampoco fui yo pero comparto en el grupo del barrio.", fecha: "2026-06-03T20:30:00-03:00" },
      { autor: "feriante_tristan", texto: "esto pasa por no anotar. Yo tengo un cuaderno con todo lo que vendo desde el 2004", fecha: "2026-06-03T21:00:00-03:00",
        respuestas: [
          { autor: "mateamargo_87", texto: "Tristán yo trabajo en informática y vos me estás dando clase de bases de datos con un cuaderno. Y tenés razón.", fecha: "2026-06-03T21:20:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2052,
    autor: "contadora.gimenez",
    fecha: "2026-06-15T10:00:00-03:00",
    texto: "Reporte de estafa CONFIRMADO. Lo publico porque es el segundo caso con el mismo patrón y ya no es casualidad.\n\nPatrón: cuenta creada hace pocas semanas, publica tres o cuatro cosas caras y muy baratas, pide seña por adelantado, la seña es siempre alrededor de un tercio, y después dice que hubo un problema con el envío y pide el resto.\n\nDos personas del grupo perdieron plata. Los montos son chicos, entre 2000 y 4500, que es justo lo que uno no denuncia por vergüenza.\n\nDENUNCIEN IGUAL. Aunque sean 2000. El patrón se ve cuando hay varias.",
    imagen: null,
    grupo: "comprovendo",
    likes: 1043,
    comentarios: [
      { autor: "feriante_tristan", texto: "Cuenta nueva + precio regalado + seña adelantada. Los tres juntos es siempre lo mismo. SIEMPRE", fecha: "2026-06-15T10:30:00-03:00" },
      { autor: "hacker_del_prado", texto: "Agrego un detalle: fijate la foto. Si la misma foto aparece en otro lado con otro texto, ya está. Se busca en dos minutos.", fecha: "2026-06-15T11:00:00-03:00",
        respuestas: [
          { autor: "mama_de_tres_mvd", texto: "como se busca una foto? yo no se hacer eso", fecha: "2026-06-15T11:30:00-03:00" },
          { autor: "hacker_del_prado", texto: "Te explico por privado sin joda, es facil y te ahorra disgustos.", fecha: "2026-06-15T11:40:00-03:00" },
          { autor: "laura.rambla", texto: "Mauro, ¿por qué no hacés un post explicándolo para todos? Sería utilísimo.", fecha: "2026-06-15T12:00:00-03:00" },
          { autor: "hacker_del_prado", texto: "Ta, lo hago el fin de semana.", fecha: "2026-06-15T12:15:00-03:00" }
        ]
      },
      { autor: "melo_ferretero", texto: "En 30 años nunca cobre por adelantado a nadie que no conociera. Nunca. Y nunca me clavaron", fecha: "2026-06-15T14:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2053,
    autor: "marce.peluquera",
    fecha: "2026-06-27T16:00:00-03:00",
    texto: "vendo secador profesional, el grande, porque compre uno nuevo. anda perfecto, tiene 3 años de uso pero de uso mio o sea que lo cuide.\n\n3200. sayago. 💇✨",
    imagen: null,
    grupo: "comprovendo",
    likes: 58,
    comentarios: [
      { autor: "tatu.ink.mvd", texto: "para qué querés dos secadores? me perdí", fecha: "2026-06-27T17:00:00-03:00",
        respuestas: [
          { autor: "marce.peluquera", texto: "no, vendo el viejo!! compre uno nuevo por eso vendo este jajaja", fecha: "2026-06-27T17:15:00-03:00" },
          { autor: "tatu.ink.mvd", texto: "ahh ya entendi, perdón estaba leyendo con un ojo", fecha: "2026-06-27T17:20:00-03:00" }
        ]
      },
      { autor: "feriante_tristan", texto: "2000", fecha: "2026-06-27T18:00:00-03:00",
        respuestas: [
          { autor: "marce.peluquera", texto: "3000 y te regalo un corte 😂", fecha: "2026-06-27T18:10:00-03:00" },
          { autor: "feriante_tristan", texto: "soy pelado", fecha: "2026-06-27T18:12:00-03:00" },
          { autor: "marce.peluquera", texto: "entonces 3200 jajajaja", fecha: "2026-06-27T18:15:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2054,
    autor: "productor_durazno",
    fecha: "2026-07-06T06:30:00-03:00",
    texto: "Vendo 30 rollos de campo natural, buena calidad, cortados en enero, guardados bajo techo. 1400 el rollo. Retiro en el campo, cargue por cuenta del comprador.\n\nDurazno, sobre camino vecinal a 12 km de la ruta.\n\nCon esta seca el que tiene reserva la cuida, asi que el que precise que no espere a agosto",
    imagen: null,
    grupo: "comprovendo",
    likes: 143,
    comentarios: [
      { autor: "tambero_sanjose", texto: "1400 esta bien de precio. Aca andan pidiendo 1600 y de peor calidad", fecha: "2026-07-06T07:00:00-03:00" },
      { autor: "treintaytres_jinete", texto: "anibal, alfalfa no tenes? para los caballos el natural no me rinde", fecha: "2026-07-06T09:00:00-03:00",
        respuestas: [
          { autor: "productor_durazno", texto: "No hice alfalfa este año. Se me seco la chacra en diciembre", fecha: "2026-07-06T09:30:00-03:00" }
        ]
      },
      { autor: "feriante_tristan", texto: "che una duda de ignorante, cuanto pesa un rollo?", fecha: "2026-07-06T11:00:00-03:00",
        respuestas: [
          { autor: "productor_durazno", texto: "Entre 400 y 600 kilos segun como salio. Por eso el cargue es problema del que compra", fecha: "2026-07-06T11:20:00-03:00" },
          { autor: "feriante_tristan", texto: "ah bueno. yo pensaba en algo que entrara en el carro de la feria jajaja", fecha: "2026-07-06T11:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2055,
    autor: "libreria_elsurco",
    fecha: "2026-07-14T12:00:00-03:00",
    texto: "Liquidamos saldos de librería escolar: cuadernos, carpetas, blocks. Todo a mitad del precio de lista porque necesitamos el espacio para las novedades.\n\nCuaderno 98 hojas: 95\nCarpeta con ganchos: 140\nBlock A4 x100: 210\n\nCordón. También hacemos lotes para escuelas, consulten.",
    imagen: null,
    grupo: "comprovendo",
    likes: 176,
    comentarios: [
      { autor: "laura.rambla", texto: "¿Hacen precio especial para copa de leche y merenderos? Pregunto por un grupo del Cerro.", fecha: "2026-07-14T13:00:00-03:00",
        respuestas: [
          { autor: "libreria_elsurco", texto: "Sí. Para merenderos y copas de leche va sin cargo hasta agotar el saldo. Que nos escriban.", fecha: "2026-07-14T13:30:00-03:00" },
          { autor: "pastelera.zuni", texto: "Ay muchachos. Les mando un mensaje ahora mismo. Gracias.", fecha: "2026-07-14T14:00:00-03:00" },
          { autor: "laura.rambla", texto: "Zunilda, decíles que vas de mi parte.", fecha: "2026-07-14T14:15:00-03:00" }
        ]
      },
      { autor: "sec.gremio.docente", texto: "Comparto en el grupo de docentes. Esto le sirve a mucha gente que está poniendo de su bolsillo.", fecha: "2026-07-14T15:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2056,
    autor: "feriante_tristan",
    fecha: "2026-07-23T07:30:00-03:00",
    texto: "VENDIDO el lote de herramientas que puse el lunes. Aviso aca para no dejar el post dando vueltas, como manda la regla 3.\n\nY aprovecho: hay como cuarenta posts de 2024 en el grupo que dicen se vende y ya no se vende nada. Si son suyos, avisen. Si en una semana no avisan, los archivo yo",
    imagen: null,
    grupo: "comprovendo",
    likes: 234,
    comentarios: [
      { autor: "contadora.gimenez", texto: "Yo te ayudo a barrer. Tengo la lista filtrada por fecha.", fecha: "2026-07-23T08:00:00-03:00" },
      { autor: "coleccionista_cx", texto: "Uno mio de 2023 sigue arriba y ya vendí la radio. Lo cierro ahora, disculpen", fecha: "2026-07-23T09:00:00-03:00" },
      { autor: "tatu.ink.mvd", texto: "la camilla la vendi en 2023 y creo que nunca avise jajaja perdón", fecha: "2026-07-23T10:00:00-03:00",
        respuestas: [
          { autor: "marce.peluquera", texto: "la compre yo!! y sigue impecable", fecha: "2026-07-23T10:30:00-03:00" },
          { autor: "tatu.ink.mvd", texto: "cierto!!! me había olvidado que fuiste vos 😅", fecha: "2026-07-23T10:40:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2057,
    autor: "rivera_frontera",
    fecha: "2026-07-31T13:00:00-03:00",
    texto: "compro cochecito de bebe usado pero sano, que plegue chico porque vivo en apartamento. hasta 3000. rivera o me lo mandan por agencia y pago flete.\n\nnada de cochecito que hay que armar como un rompecabezas, ya sufri con el de mi hermana.",
    imagen: null,
    grupo: "comprovendo",
    likes: 89,
    comentarios: [
      { autor: "mama_de_tres_mvd", texto: "yo tengo uno pero es de los grandes, no plega. sorry", fecha: "2026-07-31T14:00:00-03:00" },
      { autor: "nurse_valentina", texto: "Consejo de enfermera aburrida: si es usado, fijate que los frenos traben de verdad y que no tenga las ruedas gastadas de un solo lado. Lo demas se limpia.", fecha: "2026-07-31T15:30:00-03:00",
        respuestas: [
          { autor: "rivera_frontera", texto: "buenísimo el dato, no se me hubiera ocurrido mirar eso. gracias!!", fecha: "2026-07-31T16:00:00-03:00" }
        ]
      },
      { autor: "artigas_citrus", texto: "yo tengo uno guardado, te mando fotos. si te sirve te lo dejo en 1800 porque me sacas un problema del placard", fecha: "2026-07-31T17:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2058,
    autor: "melo_ferretero",
    fecha: "2026-08-04T08:00:00-03:00",
    texto: "Actualizo precios porque me lo piden todas las semanas:\nPortland 25kg: 495\nHierro del 8, barra 12m: 1180\nAlambre de pua 500m: 6800\nTornillo autoperforante x100: 340\n\nComparen con la lista que publique en 2023 y hagan sus propias cuentas. Yo no opino, yo vendo tornillos",
    imagen: null,
    grupo: "comprovendo",
    likes: 398,
    comentarios: [
      { autor: "productor_durazno", texto: "el alambre casi al doble en tres años. Y dicen que no pasa nada", fecha: "2026-08-04T08:30:00-03:00" },
      { autor: "contadora.gimenez", texto: "Carlos, eso es un 74% en tres años. Ordenado y con fecha, sirve más que cualquier discusión.", fecha: "2026-08-04T09:00:00-03:00" },
      { autor: "pintor_rodri", texto: "y despues el cliente te dice que el presupuesto del año pasado por que no vale", fecha: "2026-08-04T10:00:00-03:00",
        respuestas: [
          { autor: "melo_ferretero", texto: "Rodrigo, mandale este post. Es lo mas cerca que vas a estar de que te entiendan", fecha: "2026-08-04T10:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },

  /* ============ pesca (2060-2086) ============ */

  {
    id: 2060,
    autor: "pescador_delaplata",
    fecha: "2019-09-07T05:40:00-03:00",
    texto: "FIJADO. Grupo abierto.\n\nAca se comparte informacion. Marea, viento, hora, carnada, plomada. El que aporta recibe.\n\nEl que viene a pedir spot sin haber puesto nunca un reporte, que no se ofenda si no le contestan. No es maldad, es que un spot lo arruinan cuatro personas.",
    imagen: null,
    grupo: "pesca",
    likes: 187,
    comentarios: [
      { autor: "salvavidas_rocha", texto: "Sumo desde La Paloma. Yo aporto estado de mar y banderas, que sirve tanto como saber si pica.", fecha: "2019-09-07T09:00:00-03:00" },
      { autor: "pescador_tacuarembo", texto: "Julio, ojalá entre gente de rio también. Acá arriba nadie habla de dorado.", fecha: "2019-09-07T14:20:00-03:00",
        respuestas: [
          { autor: "pescador_delaplata", texto: "Entra nomas Elbio. Pescado es pescado", fecha: "2019-09-07T18:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2061,
    autor: "pescador_delaplata",
    fecha: "2021-04-18T06:15:00-03:00",
    texto: "Reporte Kiyu, sabado.\nSalida 04:40. Marea creciente, pleamar 07:20.\nViento SO 12 nudos, fue rotando a S y refresco.\nAgua turbia, color chocolate.\nCarnada: cornalito y magru. Pico todo con magru, el cornalito ni lo tocaron.\nPlomada 120 g, se sostuvo bien.\n\nResultado: 4 corvinas rubias entre 800 g y 1.4 kg, 2 bagres que devolvi.\n\nLo bueno fue la primera hora de creciente. Despues se murio.",
    imagen: null,
    grupo: "pesca",
    likes: 96,
    comentarios: [
      { autor: "mateamargo_87", texto: "esto es un reporte y lo demás son cuentos. Gracias Julio", fecha: "2021-04-18T09:00:00-03:00" },
      { autor: "pescador_tacuarembo", texto: "El agua chocolate en el rio es muerte y en el Plata es fiesta. Nunca lo entendi.", fecha: "2021-04-18T11:30:00-03:00",
        respuestas: [
          { autor: "pescador_delaplata", texto: "Es turbidez por barro suspendido. La corvina caza por linea lateral y por sonido, no por vista. Al dorado sacale la vista y no come", fecha: "2021-04-18T12:00:00-03:00" },
          { autor: "pescador_tacuarembo", texto: "Ahí está. Cuarenta años pescando y me lo vino a explicar un tipo de la costa.", fecha: "2021-04-18T12:40:00-03:00" }
        ]
      },
      { autor: "camionero_ruta5", texto: "PASO POR KIYU EL FINDE CON LA CARGA. SI EL VIENTO SIGUE SO ME CONVIENE PARAR A LA IDA O A LA VUELTA?", fecha: "2021-04-18T16:20:00-03:00",
        respuestas: [
          { autor: "pescador_delaplata", texto: "A la vuelta Walter, en la creciente de la tarde. Y bajá el volumen que asustás los peces desde la ruta", fecha: "2021-04-18T17:00:00-03:00" },
          { autor: "camionero_ruta5", texto: "jajaja anotado. Llevo magru entonces", fecha: "2021-04-18T17:30:00-03:00" }
        ]
      },
      { autor: "coleccionista_cx", texto: "Julio una consulta de otro palo: la plomada de 120 g la fundís vos o la comprás? Ando juntando plomos viejos y no sé si conviene el molde.", fecha: "2021-04-18T19:00:00-03:00",
        respuestas: [
          { autor: "pescador_delaplata", texto: "La fundo. Plomo de cañería vieja y un molde de yeso. Sale a nada y las hacés del gramaje que quieras. Pero hacelo afuera, el humo del plomo es feo.", fecha: "2021-04-18T19:40:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2062,
    autor: "salvavidas_rocha",
    fecha: "2022-01-09T07:00:00-03:00",
    texto: "Aviso para los q vienen a pescar de piedra este fin de semana en La Paloma.\n\nHay mar de fondo entrando desde anoche. Las olas grandes vienen cada 6 o 7, no cada una. La piedra de la punta se moja entera con esas.\n\nSi ven la piedra seca no significa nada. Miren cinco minutos antes de subir. Cinco minutos, no treinta segundos.\n\nBandera roja en las dos playas del este.",
    imagen: null,
    grupo: "pesca",
    likes: 421,
    comentarios: [
      { autor: "pescador_delaplata", texto: "Esto que dice el muchacho salva vidas literalmente. La serie grande te agarra de espaldas siempre", fecha: "2022-01-09T08:00:00-03:00" },
      { autor: "el_tero_viajero", texto: "Yo fotografio desde la punta y lo aprendi a los golpes: nunca dar la espalda al mar para acomodar el equipo. Nunca.", fecha: "2022-01-09T10:15:00-03:00",
        respuestas: [
          { autor: "salvavidas_rocha", texto: "Exacto. El 80% de los sustos que atendí fueron gente de espaldas.", fecha: "2022-01-09T10:40:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2063,
    autor: "pescador_tacuarembo",
    fecha: "2022-10-23T18:30:00-03:00",
    texto: "Río Negro, brazo del arroyo. Tarde entera.\nAgua baja y clara. Temperatura 19.\nCuchara plateada girando lento, nada. Cambie a cuchara cobre y a la tercera tirada salió.\n\nDorado de 4 kilos y algo. Foto y devuelto al agua.\n\nAl que me va a preguntar por que lo devolví: porque el año que viene quiero volver a pescarlo.",
    imagen: "media/fotos/ruta_2.jpg",
    grupo: "pesca",
    likes: 312,
    comentarios: [
      { autor: "treintaytres_jinete", texto: "bien hecho compañero. el que saca todo despues llora que no hay", fecha: "2022-10-23T19:00:00-03:00" },
      { autor: "chef_carmelo", texto: "Con todo respeto: un dorado de 4 kilos bien hecho a la parrilla con limón es una de las cosas más ricas de este país. No es pecado comerlo.", fecha: "2022-10-23T20:30:00-03:00",
        respuestas: [
          { autor: "pescador_tacuarembo", texto: "No dije que fuera pecado. Dije por que lo devolví yo. Cada uno sabra.", fecha: "2022-10-23T21:00:00-03:00" },
          { autor: "chef_carmelo", texto: "Justo. Me pasé de rosca. Buena pieza igual.", fecha: "2022-10-23T21:20:00-03:00" },
          { autor: "pescador_delaplata", texto: "Discusion eterna. Lo unico no discutible: sacar y tirar podrido en la orilla. Eso no lo defiende nadie", fecha: "2022-10-24T06:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2064,
    autor: "mateamargo_87",
    fecha: "2023-03-05T20:00:00-03:00",
    texto: "Pregunta de novato, ya sé que me van a bardear.\n\nCompré una caña de 3.90 y un reel. ¿Con qué nylon la armo? Vi que hay monofilamento y multifilamento y no entendí la diferencia práctica.\n\nVoy a pescar de costa, Plata, nada del otro mundo.",
    imagen: null,
    grupo: "pesca",
    likes: 74,
    comentarios: [
      { autor: "pescador_delaplata", texto: "Nadie te va a bardear por preguntar bien. Empeza con mono 0.35. Perdona errores, no te corta con la roca y es barato. El multi lo dejas para cuando sepas que queres.", fecha: "2023-03-05T20:30:00-03:00",
        respuestas: [
          { autor: "mateamargo_87", texto: "Buenísimo. Y el reel lo cargo entero o dejo espacio?", fecha: "2023-03-05T20:45:00-03:00" },
          { autor: "pescador_delaplata", texto: "Hasta 2 mm del borde de la bobina. Mas lleno se te enreda todo en el primer lance.", fecha: "2023-03-05T21:00:00-03:00" },
          { autor: "mateamargo_87", texto: "gracias maestro", fecha: "2023-03-05T21:10:00-03:00" }
        ]
      },
      { autor: "salvavidas_rocha", texto: "Y comprate una linterna frontal antes que cualquier otra cosa. Se pesca de noche mas de lo que uno cree", fecha: "2023-03-05T22:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2065,
    autor: "pescador_delaplata",
    fecha: "2026-07-14T05:50:00-03:00",
    texto: "Julio bravo. Reporte corto porque no hay mucho que contar.\n\nDos salidas esta semana, cero brotola. El agua esta en 11 grados y con el viento del este de tres dias quedo revuelta y fria.\n\nCuando pasa esto no es que no hay pescado, es que esta mas hondo de lo que llega el lance de costa. Guarden combustible para la semana que viene que rota al norte.",
    imagen: null,
    grupo: "pesca",
    likes: 145,
    comentarios: [
      { autor: "clima_uy_alertas", texto: "Rotación a componente norte prevista para el jueves, con ascenso térmico. Vientos de 15 a 25 km/h.", fecha: "2026-07-14T08:00:00-03:00" },
      { autor: "pescador_tacuarembo", texto: "Acá arriba el frío te hace lo mismo con la tararira. Se planta en el fondo y no come ni por hambre.", fecha: "2026-07-14T09:30:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2066,
    autor: "salvavidas_rocha",
    fecha: "2026-02-11T16:00:00-03:00",
    texto: "Che, tema que no es de pesca pero les toca.\n\nEncontré tres tramos de línea con anzuelos enredados en la piedra esta mañana. Un perro se enganchó uno la semana pasada y hubo que operarlo.\n\nSi se les corta, junten lo que puedan. Ya sé que no siempre se puede. Pero lo que queda en la mano y se tira al piso, eso si se puede",
    imagen: null,
    grupo: "pesca",
    likes: 508,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Confirmo el caso del perro. Anzuelo en el paladar. Media hora de cirugía y un susto enorme para la familia. Junten la línea, por favor.", fecha: "2026-02-11T17:00:00-03:00" },
      { autor: "pescador_delaplata", texto: "Yo llevo una lata vieja con tapa en el bolso desde hace años. Ahi va todo: nylon cortado, anzuelos doblados, el cigarro. Nada cuesta", fecha: "2026-02-11T18:00:00-03:00",
        respuestas: [
          { autor: "mateamargo_87", texto: "copie la idea, gracias", fecha: "2026-02-11T19:00:00-03:00" }
        ]
      },
      { autor: "el_tero_viajero", texto: "Y las aves. Fotografie dos gaviotas con nylon en la pata este verano. No se salvan.", fecha: "2026-02-11T20:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2067,
    autor: "pescador_tacuarembo",
    fecha: "2026-06-08T19:00:00-03:00",
    texto: "Me cansé de leer que la pesca de río es más fácil.\n\nEn la costa vos tirás 100 metros y esperás. Acá hay que leer la corriente, saber dónde está el pozo, tirar donde no se ve nada y recuperar a la velocidad justa. Y el dorado te corta el acero si no lo trabajás bien.\n\nNo digo que sea mejor. Digo que no es más fácil.",
    imagen: null,
    grupo: "pesca",
    likes: 167,
    comentarios: [
      { autor: "pescador_delaplata", texto: "Elbio, quien te dijo eso? Aca nadie lo dijo. Estas peleando con alguien que no esta", fecha: "2026-06-08T19:30:00-03:00",
        respuestas: [
          { autor: "pescador_tacuarembo", texto: "Me lo dijeron en la rambla en enero. Vine a descargarme aca, es cierto.", fecha: "2026-06-08T20:00:00-03:00" },
          { autor: "pescador_delaplata", texto: "Bueno. Descarga tranquilo pero despues conta como se lee un pozo, que eso si nos sirve", fecha: "2026-06-08T20:20:00-03:00" },
          { autor: "pescador_tacuarembo", texto: "Jajaja. Ta. La semana que viene lo escribo con dibujo y todo", fecha: "2026-06-08T20:40:00-03:00" }
        ]
      },
      { autor: "salvavidas_rocha", texto: "Regla 3 del grupo, muchachos. Pero esta terminó bien así que la dejo.", fecha: "2026-06-08T21:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2068,
    autor: "pescador_tacuarembo",
    fecha: "2026-06-16T18:20:00-03:00",
    texto: "Como prometí: cómo leer un pozo, para el que nunca pescó en río.\n\n1. Mirá la superficie. Donde el agua se aplana y se pone lisa en medio de la corriente, ahí abajo hay profundidad.\n2. Donde hay remolinos chicos que giran siempre en el mismo lugar, hay una piedra o un tronco. El pescado se para atrás de eso, no adelante.\n3. La línea entre agua rápida y agua quieta es donde come el dorado. Esa línea se ve, se llama costura.\n4. Tirá arriba de la costura y dejá que la corriente baje el señuelo. No recuperes contra la corriente que no es natural.\n\nEsto no lo inventé yo, me lo enseñó mi padre y él lo aprendió mirando.",
    imagen: null,
    grupo: "pesca",
    likes: 489,
    comentarios: [
      { autor: "pescador_delaplata", texto: "Esto vale mas que veinte fotos de pescados. Lo fijo", fecha: "2026-06-16T19:00:00-03:00" },
      { autor: "mateamargo_87", texto: "guardé el post. la parte de la costura no la sabía y explica un montón", fecha: "2026-06-16T20:00:00-03:00" },
      { autor: "estudiante_utec", texto: "Pregunta incómoda: ¿esto también sirve en el Plata o es solo de río?", fecha: "2026-06-16T21:00:00-03:00",
        respuestas: [
          { autor: "pescador_delaplata", texto: "Sirve el concepto, no el dibujo. En la costa la costura la hace la correntada de la marea contra un banco de arena. Se ve igual: agua lisa al lado de agua picada.", fecha: "2026-06-16T21:30:00-03:00" },
          { autor: "pescador_tacuarembo", texto: "Ahí está. Es lo mismo con otro tamaño.", fecha: "2026-06-16T22:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2069,
    autor: "salvavidas_rocha",
    fecha: "2025-01-05T06:30:00-03:00",
    texto: "Enero, temporada, y ya empezó lo de siempre.\n\nGente pescando adentro de la zona de baño a las 3 de la tarde con la playa llena. No se puede. No es que no se debe, es que no se puede: un plomo de 150 gramos a 60 metros por hora en la cabeza de un gurí es un problema serio.\n\nDe 20 a 10 la playa es de ustedes. De 10 a 20 es de las familias. Es todo lo que pido.",
    imagen: null,
    grupo: "pesca",
    likes: 623,
    comentarios: [
      { autor: "pescador_delaplata", texto: "Y de noche se pesca mejor igual. No entiendo cual es el drama.", fecha: "2025-01-05T07:00:00-03:00" },
      { autor: "mama_de_tres_mvd", texto: "gracias por esto, el año pasado casi le pega a mi hija", fecha: "2025-01-05T10:00:00-03:00",
        respuestas: [
          { autor: "salvavidas_rocha", texto: "Lamento eso. ¿Donde fue? Si es una playa que tengo a cargo lo hablo con los compañeros.", fecha: "2025-01-05T10:30:00-03:00" },
          { autor: "mama_de_tres_mvd", texto: "fue en la costa de canelones, no me acuerdo cual", fecha: "2025-01-05T11:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2070,
    autor: "pescador_delaplata",
    fecha: "2026-05-22T05:30:00-03:00",
    texto: "Reporte Kiyu, jueves de madrugada.\nBajante, bajamar 05:10.\nViento SO flojo, 8 nudos, entro calma despues.\nLuna nueva.\nCarnada: almeja y magru. Salio todo con almeja.\nPlomada 100 g.\n\n3 corvinas negras chicas devueltas, 1 rubia de 2.1 kg que me llevo veinte minutos.\n\nLa de 2.1 salio justo en el cambio de marea. Es siempre igual y siempre me olvido.",
    imagen: null,
    grupo: "pesca",
    likes: 234,
    comentarios: [
      { autor: "astro.mvd", texto: "Dato para los que miran la luna: con luna nueva y luna llena la amplitud de marea es mayor porque el sol y la luna tiran juntos. Por eso el cambio de marea es más marcado esos días.", fecha: "2026-05-22T09:00:00-03:00",
        respuestas: [
          { autor: "pescador_delaplata", texto: "Lucia, eso lo sabemos de practica pero nunca supe el porque. Gracias", fecha: "2026-05-22T09:30:00-03:00" },
          { autor: "astro.mvd", texto: "La práctica les llegó antes. Yo solo pongo el nombre.", fecha: "2026-05-22T09:45:00-03:00" }
        ]
      },
      { autor: "elpibe.delcerro", texto: "che donde queda kiyu?", fecha: "2026-05-22T14:00:00-03:00",
        respuestas: [
          { autor: "pescador_delaplata", texto: "San Jose, sobre el Plata. Eso te lo digo. Donde tiro yo, no.", fecha: "2026-05-22T14:20:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2071,
    autor: "el_tero_viajero",
    fecha: "2026-03-14T18:00:00-03:00",
    texto: "No pesco, fotografío. Pero esta la subo acá porque ustedes van a entender lo que costo.\n\nAtardecer sobre la rambla con la línea de un pescador en el aire, congelada en el momento del lance. 1/1000, f/5.6, ISO 400. Tuve que esperar cuarenta minutos a que alguien lanzara con el sol en el angulo correcto.\n\nEl pescador ni se enteró y se fue sin saludar.",
    imagen: "media/fotos/pesca_1.jpg",
    grupo: "pesca",
    likes: 567,
    comentarios: [
      { autor: "pescador_delaplata", texto: "Hermosa. Y le pifiaste el lance, se le fue corto", fecha: "2026-03-14T18:30:00-03:00",
        respuestas: [
          { autor: "el_tero_viajero", texto: "Jajaja. Cuarenta minutos esperando y me criticas el lance del modelo.", fecha: "2026-03-14T18:45:00-03:00" },
          { autor: "pescador_tacuarembo", texto: "Bienvenido al grupo.", fecha: "2026-03-14T19:00:00-03:00" }
        ]
      },
      { autor: "salvavidas_rocha", texto: "Buenísima. Y se ve el color del agua, que es lo que uno mira primero.", fecha: "2026-03-14T20:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2072,
    autor: "salvavidas_rocha",
    fecha: "2026-01-11T07:15:00-03:00",
    texto: "Estado de mar, domingo, costa de Rocha.\n\nOlas 1.2 a 1.6 m del sudeste.\nCorriente de retorno marcada frente al canal, la de siempre, la que se ve como una franja de agua más oscura y sin espuma.\nAgua 21 grados.\nBandera amarilla, si sopla más va a roja al mediodía.\n\nPescadores: la piedra del este está pescable a la mañana, después no.",
    imagen: null,
    grupo: "pesca",
    likes: 198,
    comentarios: [
      { autor: "pescador_delaplata", texto: "Matias, esto de la franja oscura sin espuma explicalo cada tanto que se olvida. Es lo que salva", fecha: "2026-01-11T08:00:00-03:00" },
      { autor: "mateamargo_87", texto: "yo pensé toda mi vida que esa parte era la más tranquila para nadar", fecha: "2026-01-11T09:00:00-03:00",
        respuestas: [
          { autor: "salvavidas_rocha", texto: "Y ahí está el problema. Parece tranquila porque el agua esta saliendo. Es exactamente donde no hay q meterse.", fecha: "2026-01-11T09:30:00-03:00" },
          { autor: "mateamargo_87", texto: "salado. lo comparto con mi familia", fecha: "2026-01-11T09:45:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2073,
    autor: "pescador_tacuarembo",
    fecha: "2026-01-26T20:00:00-03:00",
    texto: "Se secó el arroyo donde pesco desde gurí. No bajo, seco. Se camina de una orilla a la otra sin mojarse los tobillos.\n\nNo voy a discutir de qué es culpa porque termina mal. Solo dejo constancia de que en 57 años no lo vi asi.",
    imagen: null,
    grupo: "pesca",
    likes: 445,
    comentarios: [
      { autor: "productor_durazno", texto: "Aca igual. Yo tengo 62 y tampoco lo vi. Y no es solo esta seca, es que llueve distinto", fecha: "2026-01-26T21:00:00-03:00" },
      { autor: "agronomo_paysandu", texto: "Elbio, si podés sacale fotos con referencia fija, un árbol, un puente, algo. Una foto de arroyo seco sin referencia no dice nada, con referencia es un dato.", fecha: "2026-01-27T08:00:00-03:00",
        respuestas: [
          { autor: "pescador_tacuarembo", texto: "Tengo el puente viejo. Lo hago mañana temprano.", fecha: "2026-01-27T08:30:00-03:00" },
          { autor: "apicultor_florida", texto: "Y guardá la fecha. Despues uno quiere comparar y no se acuerda de cuando era.", fecha: "2026-01-27T10:00:00-03:00" }
        ]
      },
      { autor: "pescador_delaplata", texto: "Abrazo Elbio. Eso duele distinto que un dia sin pique", fecha: "2026-01-27T06:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2074,
    autor: "pescador_delaplata",
    fecha: "2026-02-14T06:00:00-03:00",
    texto: "Al que me escribio cuatro veces esta semana pidiendo el punto exacto donde saco corvina: no.\n\nNo es por egoista. Te explico. Ese lugar lo encontre en 2011 caminando la costa tres meses. Si te lo paso, se lo pasas a dos amigos, esos suben una foto con la ubicacion puesta y en un verano hay quince personas ahi un sabado.\n\nTe paso todo lo demas: marea, carnada, plomada, hora. Con eso encontras el tuyo. Y el tuyo va a ser mejor porque va a ser tuyo",
    imagen: null,
    grupo: "pesca",
    likes: 512,
    comentarios: [
      { autor: "pescador_tacuarembo", texto: "Firmo abajo. Y agrego: los spots que te regalan no te enseñan nada.", fecha: "2026-02-14T07:00:00-03:00" },
      { autor: "hacker_del_prado", texto: "Detalle técnico gratis: si suben una foto sacada con el celular tal cual salió, la ubicación puede ir adentro del archivo aunque ustedes no la escriban. Fíjense antes de publicar.", fecha: "2026-02-14T11:00:00-03:00",
        respuestas: [
          { autor: "pescador_delaplata", texto: "Explicame eso bien que no entiendo de esas cosas", fecha: "2026-02-14T11:30:00-03:00" },
          { autor: "hacker_del_prado", texto: "El celular guarda las coordenadas dentro de la foto. Muchas apps las borran al subir, otras no. Si es un spot que te importa, sacá la foto con el GPS apagado y listo.", fecha: "2026-02-14T11:45:00-03:00" },
          { autor: "pescador_delaplata", texto: "Bo. Cuarenta años cuidando el lugar y lo podia regalar sacando una foto", fecha: "2026-02-14T12:00:00-03:00" },
          { autor: "salvavidas_rocha", texto: "Esto lo fijamos tambien.", fecha: "2026-02-14T12:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2075,
    autor: "mateamargo_87",
    fecha: "2026-03-01T21:00:00-03:00",
    texto: "Primera corvina propia. 900 gramos. Kiyú no, no me pasaron el spot jajaja, fui a la costa de Canelones y caminé como un boludo hasta encontrar un lugar que me gustó.\n\nMarea creciente, magrú, plomada 100. Tal cual el manual de Julio.\n\nSalió sola después de tres años de no sacar nada. Estoy insoportable.",
    imagen: null,
    grupo: "pesca",
    likes: 389,
    comentarios: [
      { autor: "pescador_delaplata", texto: "Ahi esta. Caminaste y encontraste. Ese es el punto de todo lo que digo", fecha: "2026-03-01T21:30:00-03:00" },
      { autor: "salvavidas_rocha", texto: "Felicitaciones Rodrigo. La primera propia no se olvida más.", fecha: "2026-03-01T22:00:00-03:00" },
      { autor: "pescador_tacuarembo", texto: "Y ahora no le digas a nadie dónde fue. Aprendiste dos cosas hoy.", fecha: "2026-03-02T07:00:00-03:00",
        respuestas: [
          { autor: "mateamargo_87", texto: "jajaja ya lo puse en el post que fue costa de Canelones", fecha: "2026-03-02T08:00:00-03:00" },
          { autor: "pescador_tacuarembo", texto: "Costa de Canelones son 60 km. Estás bien.", fecha: "2026-03-02T08:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2076,
    autor: "salvavidas_rocha",
    fecha: "2026-03-20T17:00:00-03:00",
    texto: "Cierra la temporada. Balance del puesto, por si a alguien le sirve.\n\n11 rescates, ninguno grave.\n9 de esos 11 fueron en la corriente de retorno del canal. NUEVE DE ONCE.\n0 con bandera roja izada, todos con amarilla.\n\nEso ultimo es lo que más me llama la atencion: con roja la gente respeta. Con amarilla la gente lee lo que quiere leer.",
    imagen: null,
    grupo: "pesca",
    likes: 634,
    comentarios: [
      { autor: "nurse_valentina", texto: "Amarilla significa precaucion y todo el mundo la lee como esta todo bien. Pasa igual en la salud.", fecha: "2026-03-20T18:00:00-03:00" },
      { autor: "el_tero_viajero", texto: "Nueve de once en el mismo punto. Eso no es azar, eso es un cartel que falta.", fecha: "2026-03-20T19:00:00-03:00",
        respuestas: [
          { autor: "salvavidas_rocha", texto: "Hay cartel. Está a 200 metros de donde entra la gente. Lo pedí corrido tres veces.", fecha: "2026-03-20T19:30:00-03:00" },
          { autor: "costa_dorada_vecina", texto: "Matías, si me pasa el número de expediente de esos pedidos, le armo la reiteración. Es lo único que hago bien.", fecha: "2026-03-20T20:00:00-03:00" },
          { autor: "salvavidas_rocha", texto: "Beatriz me acaba de solucionar el verano. Le escribo.", fecha: "2026-03-20T20:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2077,
    autor: "pescador_delaplata",
    fecha: "2026-04-09T06:20:00-03:00",
    texto: "Empieza la brotola. Reporte del martes.\nBajante. Viento N flojo.\nAgua 16 grados, limpia.\nCarnada: calamar. Solo calamar, no gasten en otra cosa.\nPlomada 150 g porque hay correntada.\n\n5 brotolas, la mayor 1.8 kg. Todas de noche, entre las 22 y las 2.\n\nEl que va de dia en abril pierde el tiempo. Es asi, no es opinion",
    imagen: null,
    grupo: "pesca",
    likes: 276,
    comentarios: [
      { autor: "mateamargo_87", texto: "anotado. calamar y de noche", fecha: "2026-04-09T08:00:00-03:00" },
      { autor: "melo_ferretero", texto: "Yo pesque toda la vida de dia en abril y saque. Poco, pero saque", fecha: "2026-04-09T10:00:00-03:00",
        respuestas: [
          { autor: "pescador_delaplata", texto: "Poco es la palabra. De noche sacas cinco veces mas con la misma carnada. Yo no digo que de dia no haya, digo que no rinde", fecha: "2026-04-09T10:30:00-03:00" },
          { autor: "melo_ferretero", texto: "Ahi estamos de acuerdo. Es que yo de noche me duermo", fecha: "2026-04-09T11:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2078,
    autor: "pescador_tacuarembo",
    fecha: "2026-04-25T19:00:00-03:00",
    texto: "Volvió a correr el arroyo. Llovió tres días seguidos por primera vez desde octubre.\n\nFui ayer, no saqué nada, no me importó. Me sente en la piedra de siempre a escuchar el agua.\n\nEso también es pescar.",
    imagen: null,
    grupo: "pesca",
    likes: 712,
    comentarios: [
      { autor: "pescador_delaplata", texto: "Es todo pescar, Elbio. Lo del pescado es un detalle", fecha: "2026-04-25T20:00:00-03:00" },
      { autor: "productor_durazno", texto: "Aca tambien llovio. 68 milimetros. Se salvo el año", fecha: "2026-04-25T20:30:00-03:00" },
      { autor: "treintaytres_jinete", texto: "que lindo post compañero", fecha: "2026-04-25T21:00:00-03:00" },
      { autor: "apicultor_florida", texto: "Las abejas tambien lo festejaron. Salieron todas juntas el sabado.", fecha: "2026-04-26T09:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2079,
    autor: "salvavidas_rocha",
    fecha: "2026-05-10T11:00:00-03:00",
    texto: "Consulta al grupo, en serio, no es retórica.\n\nEstoy armando un cartel para la playa con lo que un pescador de costa tiene que saber de seguridad. Tengo que decirlo en seis líneas o nadie lo lee.\n\n¿Cuáles son las seis? Yo tengo cuatro y me falta ordenarlas. Ayuden.",
    imagen: null,
    grupo: "pesca",
    likes: 187,
    comentarios: [
      { autor: "pescador_delaplata", texto: "1. Mira el mar cinco minutos antes de subir a la piedra.\n2. Nunca de espaldas al agua.\n3. Nunca solo de noche, o avisa donde vas.\n4. Piedra mojada es piedra que se moja otra vez", fecha: "2026-05-10T11:30:00-03:00" },
      { autor: "pescador_tacuarembo", texto: "5. No te ates nada al cuerpo. Ni el bolso, ni la caña, nada.", fecha: "2026-05-10T12:00:00-03:00" },
      { autor: "nurse_valentina", texto: "6. Si te caés al agua con ropa, no nades contra la corriente. Nadas para el costado. Esa la sabe poca gente y es la que mata.", fecha: "2026-05-10T13:00:00-03:00",
        respuestas: [
          { autor: "salvavidas_rocha", texto: "Ahí están las seis. En veinte minutos. Gracias, en serio.", fecha: "2026-05-10T13:30:00-03:00" },
          { autor: "el_tero_viajero", texto: "Ponelas en ese orden y en letra grande. Y sin logos ni adornos.", fecha: "2026-05-10T14:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2080,
    autor: "mateamargo_87",
    fecha: "2026-05-28T20:30:00-03:00",
    texto: "Consulta media boluda: se puede pescar con lluvia? Digo, sirve o es al pedo mojarse.",
    imagen: null,
    grupo: "pesca",
    likes: 92,
    comentarios: [
      { autor: "pescador_delaplata", texto: "Con lluvia se pesca bien. Con tormenta electrica se pesca en la casa. La caña es una antena de tres metros, no lo olvides nunca.", fecha: "2026-05-28T21:00:00-03:00",
        respuestas: [
          { autor: "mateamargo_87", texto: "uh. no lo habia pensado nunca asi", fecha: "2026-05-28T21:15:00-03:00" },
          { autor: "elabuelo_radioCX8", texto: "Confirmo desde la radioafición: una caña de carbono con el reel mojado es un pararrayos con mango. Cambio.", fecha: "2026-05-28T22:00:00-03:00" }
        ]
      },
      { autor: "pescador_tacuarembo", texto: "En río después de la lluvia es el mejor momento. Baja comida del monte y se vuelven locos.", fecha: "2026-05-29T07:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2081,
    autor: "pescador_delaplata",
    fecha: "2026-06-14T06:00:00-03:00",
    texto: "Aviso de admin, cortito.\n\nSe borraron dos posts que publicaban la ubicacion exacta de un lugar de pesca con foto y mapa. No fue castigo, se los avise por privado antes.\n\nRegla 5. No se piden spots ajenos en publico y tampoco se regalan los propios con el mapa puesto, porque atras tuyo van cuarenta.\n\nEl que quiera compartir con alguien, que comparta. Por privado, como siempre se hizo.",
    imagen: null,
    grupo: "pesca",
    likes: 298,
    comentarios: [
      { autor: "salvavidas_rocha", texto: "De acuerdo. Y agrego una razón que no es de pesca: si publicás que vas a estar solo en tal piedra a tal hora, estás publicando otra cosa ademas del spot", fecha: "2026-06-14T07:00:00-03:00",
        respuestas: [
          { autor: "pescador_delaplata", texto: "Esa no la habia pensado. Es buenisima.", fecha: "2026-06-14T07:30:00-03:00" },
          { autor: "hacker_del_prado", texto: "Es exactamente lo mismo que digo yo siempre y nadie me da bola. Vos lo decís y todo el mundo asiente jajaja", fecha: "2026-06-14T11:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2082,
    autor: "pescador_tacuarembo",
    fecha: "2026-06-30T18:00:00-03:00",
    texto: "Tararira en invierno. Reporte para el que dice que no se puede.\n\nLaguna, 14 grados de agua. Fui al mediodía porque en invierno la tararira busca el sol, no la sombra.\nSeñuelo de superficie, nada. Cambie a uno que trabaja a media agua, lento, muy lento.\nDos piqués, una sacada, 1.9 kg.\n\nLa clave es lento. En invierno el pescado no persigue nada, hay que ponérselo en la boca.",
    imagen: null,
    grupo: "pesca",
    likes: 223,
    comentarios: [
      { autor: "pescador_delaplata", texto: "Es igual en la costa con la corvina en julio. Todo el mundo recupera rapido y no sacan nada.", fecha: "2026-06-30T19:00:00-03:00" },
      { autor: "mateamargo_87", texto: "cuánto es lento? o sea, cuanto tarda en llegar el señuelo?", fecha: "2026-06-30T20:00:00-03:00",
        respuestas: [
          { autor: "pescador_tacuarembo", texto: "Tan lento que vos pensas que está mal. Si te aburrís, está bien. Contá tres antes de cada vuelta de manija.", fecha: "2026-06-30T20:30:00-03:00" },
          { autor: "mateamargo_87", texto: "jajaja si me aburro está bien. Buenísimo", fecha: "2026-06-30T20:45:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2083,
    autor: "salvavidas_rocha",
    fecha: "2026-07-08T09:00:00-03:00",
    texto: "Mar de fondo fuerte para el fin de semana largo. Olas de 3 metros previstas para el sábado de tarde.\n\nNo suban a las piedras. Ni a mirar. Ni un ratito. Ni con el mar que parece tranquilo a la mañana.\n\nTodos los accidentes de invierno que me tocaron fueron con este mismo pronostico y con gente que dijo voy y vengo.",
    imagen: null,
    grupo: "pesca",
    likes: 741,
    comentarios: [
      { autor: "clima_uy_alertas", texto: "Advertencia por oleaje: se prevén olas de 2.5 a 3.5 metros del sudeste entre el sábado 11 y la madrugada del domingo 12 en toda la costa oceánica.", fecha: "2026-07-08T09:30:00-03:00" },
      { autor: "pescador_delaplata", texto: "Nadie pesca este finde. Se toma mate y se arreglan aparejos", fecha: "2026-07-08T10:00:00-03:00" },
      { autor: "el_tero_viajero", texto: "Yo voy a fotografiar pero desde arriba del médano, a cien metros. Aviso para que nadie me vea allá y crea que se puede.", fecha: "2026-07-08T11:00:00-03:00",
        respuestas: [
          { autor: "salvavidas_rocha", texto: "Gracias por aclararlo. Es en serio, la gente copia lo q ve.", fecha: "2026-07-08T11:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2084,
    autor: "mateamargo_87",
    fecha: "2026-07-19T15:00:00-03:00",
    texto: "Encuesta seria para el grupo, no es joda: cuando sacás una pieza que está en medida pero no la vas a comer, ¿qué hacés?",
    imagen: null,
    grupo: "pesca",
    likes: 156,
    comentarios: [
      { autor: "pescador_delaplata", texto: "La devuelvo. Yo saco lo que como. Nunca entendi llenar la conservadora para regalar pescado que despues nadie limpia", fecha: "2026-07-19T15:30:00-03:00" },
      { autor: "chef_carmelo", texto: "Yo la llevo y la uso entera, hasta la cabeza para el caldo. Devolver está bien, pero llevarse y aprovechar todo también.", fecha: "2026-07-19T16:00:00-03:00" },
      { autor: "pescador_tacuarembo", texto: "Depende de la especie y de como salio. Si tragó el anzuelo hondo y sangra, devolverla es matarla igual pero con la conciencia limpia. Esa te la llevás.", fecha: "2026-07-19T17:00:00-03:00",
        respuestas: [
          { autor: "salvavidas_rocha", texto: "Esta es la respuesta honesta y es la que menos gusta.", fecha: "2026-07-19T17:30:00-03:00" },
          { autor: "mateamargo_87", texto: "no lo había pensado. o sea que devolver no siempre es lo bueno", fecha: "2026-07-19T18:00:00-03:00" },
          { autor: "pescador_tacuarembo", texto: "Devolver bien es una técnica, no un gesto. Manos mojadas, sin sacarla del agua si se puede, y sostenerla contra la corriente hasta que se vaya sola.", fecha: "2026-07-19T18:30:00-03:00" }
        ]
      }
    ],
    encuesta: {
      pregunta: "Pieza en medida que no vas a comer",
      opciones: [
        { texto: "La devuelvo siempre", votos: 743 },
        { texto: "Depende de cómo salió", votos: 512 },
        { texto: "Me la llevo, para eso fui", votos: 188 },
        { texto: "La regalo ahí mismo", votos: 97 }
      ],
      cierra: "2026-07-26T23:59:00-03:00"
    }
  },
  {
    id: 2085,
    autor: "pescador_delaplata",
    fecha: "2026-07-28T05:45:00-03:00",
    texto: "Reporte Kiyu, lunes.\nCreciente, pleamar 06:50.\nViento SE 18 nudos, incomodo pero pescable con plomada de uña.\nAgua 12 grados, medio turbia.\nCalamar y almeja. Todo con calamar.\n\n2 brotolas de kilo y pico y una corvina negra que devolvi por chica.\n\nFrio del carajo. Lleve el termo lleno y volvi con el termo lleno porque no me quise sacar los guantes",
    imagen: null,
    grupo: "pesca",
    likes: 267,
    comentarios: [
      { autor: "mateamargo_87", texto: "jajaja el termo lleno es el mejor detalle de todos los reportes que lei", fecha: "2026-07-28T08:00:00-03:00" },
      { autor: "salvavidas_rocha", texto: "Plomada de uña con 18 nudos de SE es la unica forma. El que va con plomada redonda vuelve con la linea en la playa.", fecha: "2026-07-28T09:00:00-03:00" },
      { autor: "pescador_tacuarembo", texto: "61 años y sale a las 5 con 12 grados. Sos un animal Julio.", fecha: "2026-07-28T10:00:00-03:00",
        respuestas: [
          { autor: "pescador_delaplata", texto: "Es lo unico que se hacer, Elbio", fecha: "2026-07-28T10:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2086,
    autor: "salvavidas_rocha",
    fecha: "2026-08-02T10:00:00-03:00",
    texto: "El cartel está. Seis líneas, letra grande, sin logos.\n\nLo pagó entre cuatro personas del grupo que no quieren que ponga los nombres. Lo puso el compañero del puesto con dos tornillos y una hora de trabajo.\n\nEstá a la entrada de la bajada, donde entra la gente de verdad y no a 200 metros.\n\nGracias. Esto salió de un post de mayo y aca esta.",
    imagen: null,
    grupo: "pesca",
    likes: 892,
    comentarios: [
      { autor: "pescador_delaplata", texto: "Ahi esta. Esto es lo que sirve un grupo.", fecha: "2026-08-02T10:30:00-03:00" },
      { autor: "nurse_valentina", texto: "Que la número 6 haya quedado es lo que más me alegra. Ojalá nunca la use nadie.", fecha: "2026-08-02T11:00:00-03:00" },
      { autor: "costa_dorada_vecina", texto: "Y el expediente sigue abierto igual, Matías. Que lo paguen ellos la próxima vez.", fecha: "2026-08-02T12:00:00-03:00",
        respuestas: [
          { autor: "salvavidas_rocha", texto: "Si señora. Ya aprendi que con usted no se cierra nada.", fecha: "2026-08-02T12:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },

  /* ============ murgas (2090-2116) ============ */

  {
    id: 2090,
    autor: "murga_la_reculada",
    fecha: "2020-01-23T22:00:00-03:00",
    texto: "FIJADO. Abrimos el grupo entre nosotros y el Martín del candombe porque no había un lugar donde estuviera todo: los ensayos, los tablados chicos, las convocatorias.\n\nEsto no es para hablar del concurso. Es para el carnaval que se hace en un club con dos focos y una mesa de sonido prestada.\n\nEl que quiera bardear al jurado tiene once meses al año en otro lado.",
    imagen: null,
    grupo: "murgas",
    likes: 276,
    comentarios: [
      { autor: "dj_candombe", texto: "Y el que quiera pasar un audio de 4 minutos cantando a las 3 de la mañana, en febrero se perdona. En julio no.", fecha: "2020-01-23T23:30:00-03:00" },
      { autor: "dj.pirata.fm", texto: "Yo transmito los tablados de barrio por la radio. Si alguien tiene fecha, mandenmela y sale al aire.", fecha: "2020-01-24T01:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2091,
    autor: "dj_candombe",
    fecha: "2026-02-08T02:40:00-03:00",
    texto: "Salgo de tocar. Tres de la mañana, Barrio Sur, la calle todavia con gente.\n\nHay una cosa que pasa cuando la cuerda se acomoda sola, sin que nadie diga nada, y de golpe suena una cosa sola. No lo podés ensayar. Pasa o no pasa.\n\nHoy paso.",
    imagen: null,
    grupo: "murgas",
    likes: 534,
    comentarios: [
      { autor: "murga_la_reculada", texto: "Nosotros lo llamamos cuando engancha. Y tenés razón, no se ensaya.", fecha: "2026-02-08T09:00:00-03:00" },
      { autor: "elpibe.delcerro", texto: "yo tenia 14 y me acuerdo de una noche asi, se me puso la piel de gallina y no sabia xq", fecha: "2026-02-08T14:00:00-03:00",
        respuestas: [
          { autor: "dj_candombe", texto: "Es eso pibe. Es exactamente eso.", fecha: "2026-02-08T15:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2092,
    autor: "murga_la_reculada",
    fecha: "2021-11-14T20:00:00-03:00",
    texto: "CONVOCATORIA. Buscamos segundos.\n\nDos segundos, con o sin experiencia. Se enseña. Lo que no se enseña es venir todos los martes.\n\nEnsayo: martes 20:30, Club Social Cerro, Grecia 3120.\nEmpezamos en marzo, asi que hay tiempo de aprender.\n\nNo se cobra ni se paga. Se pone plata para el vestuario y se cobra si sale algun tablado, se reparte igual entre todos.",
    imagen: null,
    grupo: "murgas",
    likes: 143,
    comentarios: [
      { autor: "elpibe.delcerro", texto: "yo canto en la ducha nomas jajaj pero me tienta", fecha: "2021-11-14T21:00:00-03:00",
        respuestas: [
          { autor: "murga_la_reculada", texto: "Todos cantábamos en la ducha, Brian. Caé el martes y probá.", fecha: "2021-11-14T21:30:00-03:00" },
          { autor: "elpibe.delcerro", texto: "ta voy", fecha: "2021-11-14T21:40:00-03:00" }
        ]
      },
      { autor: "marce.peluquera", texto: "chicos si necesitan alguien que les arregle el pelo para la salida, cuenten conmigo. gratis, por el barrio", fecha: "2021-11-15T10:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2093,
    autor: "dj.pirata.fm",
    fecha: "2026-01-30T01:30:00-03:00",
    texto: "Transmitimos el tablado del club desde las 21. Frecuencia de siempre y tambien por internet para los que estan lejos.\n\nAviso que el año pasado nos bajaron la transmision dos veces. No voy a decir quien porque despues me dicen que soy un paranoico. Este año tenemos plan B",
    imagen: null,
    grupo: "murgas",
    likes: 187,
    comentarios: [
      { autor: "hacker_del_prado", texto: "Emiliano, la vez pasada se te cayó el stream porque se te llenó el ancho de banda de subida. Lo miramos juntos. No te bajó nadie.", fecha: "2026-01-30T09:00:00-03:00",
        respuestas: [
          { autor: "dj.pirata.fm", texto: "Y la otra vez?", fecha: "2026-01-30T10:00:00-03:00" },
          { autor: "hacker_del_prado", texto: "La otra vez se corto la luz en media manzana. Salió hasta en el diario del barrio.", fecha: "2026-01-30T10:15:00-03:00" },
          { autor: "dj_candombe", texto: "Jajajaja. Emiliano, transmití tranquilo que nadie te persigue.", fecha: "2026-01-30T11:00:00-03:00" },
          { autor: "dj.pirata.fm", texto: "Ta bien, ta bien. Pero el plan B lo dejo igual", fecha: "2026-01-30T11:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2094,
    autor: "murga_la_reculada",
    fecha: "2022-07-30T19:00:00-03:00",
    texto: "Se nos fue el bajo.\n\nLo decimos nosotros antes de que lo cuente otro. Se fue a una murga más grande, con contrato y con plata. Está bien que se haya ido, tiene dos gurises y acá no le pagábamos nada.\n\nLo que no está bien es como se entero la mitad de la cuerda: por un video que subió alguien de la otra murga con él cantando.\n\nNada más. Suerte de verdad, Beto.",
    imagen: null,
    grupo: "murgas",
    likes: 398,
    comentarios: [
      { autor: "dj_candombe", texto: "Esto pasa todos los años en todos lados y siempre duele igual. Abrazo muchachos", fecha: "2022-07-30T20:00:00-03:00" },
      { autor: "elrusodelquiosco", texto: "yo lo sabia hace 3 semanas", fecha: "2022-07-30T20:30:00-03:00",
        respuestas: [
          { autor: "murga_la_reculada", texto: "Y no dijiste nada, Sergio. Gracias por eso, en serio.", fecha: "2022-07-30T21:00:00-03:00" },
          { autor: "elrusodelquiosco", texto: "no era mio para contarlo", fecha: "2022-07-30T21:10:00-03:00" }
        ]
      },
      { autor: "pastelera.zuni", texto: "Muchachos, el Beto vino a comprar tortas fritas el domingo y estaba con una cara. Él tampoco está contento con cómo se dio.", fecha: "2022-07-31T09:00:00-03:00",
        respuestas: [
          { autor: "murga_la_reculada", texto: "Que venga al ensayo cuando quiera. La puerta esta.", fecha: "2022-07-31T10:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2095,
    autor: "profe_hernandez_hist",
    fecha: "2026-02-12T17:00:00-03:00",
    texto: "Permítanme una intervención de historiador aficionado al carnaval.\n\nSe repite mucho que la murga uruguaya viene de una compañía española de zarzuela que quedó varada acá a principios del siglo XX. La historia es más enredada: hubo esa influencia, sí, pero se cruzó con el coro de los pueblos, con el candombe de las llamadas y con la comparsa de máscaras que ya existía.\n\nNo es un origen, son tres cosas que se pisaron.\n\nLo aclaro porque cada febrero alguien lo cuenta como si fuera un dato cerrado y no lo es.",
    imagen: null,
    grupo: "murgas",
    likes: 312,
    comentarios: [
      { autor: "dj_candombe", texto: "Álvaro, gracias. Lo del candombe siempre queda afuera del cuento y es la parte que más se escucha.", fecha: "2026-02-12T18:00:00-03:00" },
      { autor: "murga_la_reculada", texto: "En el barrio se dice más simple: la murga es lo que quedó cuando se junto todo el que no tenia dónde cantar.", fecha: "2026-02-12T19:00:00-03:00",
        respuestas: [
          { autor: "profe_hernandez_hist", texto: "Esa definición es mejor que la mía y tiene treinta palabras menos. Me la robo para clase.", fecha: "2026-02-12T19:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2096,
    autor: "elpibe.delcerro",
    fecha: "2023-03-04T23:50:00-03:00",
    texto: "primera salida. sali de segundo. me temblaban las piernas mal.\n\nen la primera estrofa no me salio nada, movia la boca nomas. dsp arranque.\n\nmi vieja lloraba en la segunda fila y yo la veia y era peor jajajaj",
    imagen: null,
    grupo: "murgas",
    likes: 621,
    comentarios: [
      { autor: "murga_la_reculada", texto: "Todos movimos la boca la primera vez. TODOS. Bien pibe.", fecha: "2023-03-05T00:15:00-03:00" },
      { autor: "dj_candombe", texto: "La segunda fila no perdona. Felicitaciones Brian.", fecha: "2023-03-05T01:00:00-03:00" },
      { autor: "marce.peluquera", texto: "AY BRIAN QUE ORGULLO 😭❤️", fecha: "2023-03-05T09:00:00-03:00" },
      { autor: "elrusodelquiosco", texto: "el pibe que le fiaba figuritas ahora canta en la murga. me hice viejo", fecha: "2023-03-05T10:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2097,
    autor: "dj_candombe",
    fecha: "2026-04-21T03:00:00-03:00",
    texto: "Zbedgb: yb zrwbe ab rf yb dhr fbaton, rf ry fvyrapvb nagrf.\n\n(Para el que se enoja porque escribo así: es ROT13, se descifra en dos segundos en cualquier página. Lo hago porque me divierte, no porque esconda nada.)",
    imagen: null,
    grupo: "murgas",
    likes: 143,
    comentarios: [
      { autor: "hacker_del_prado", texto: "Dice: Murga: lo mejor de no es lo que sonaba, es el silencio antes. Y tiene razón.", fecha: "2026-04-21T09:00:00-03:00",
        respuestas: [
          { autor: "dj_candombe", texto: "Me arruinaste el chiste en nueve minutos, Mauro.", fecha: "2026-04-21T09:15:00-03:00" },
          { autor: "hacker_del_prado", texto: "Nueve minutos porque estaba desayunando.", fecha: "2026-04-21T09:20:00-03:00" }
        ]
      },
      { autor: "elpibe.delcerro", texto: "yo pense que se le habia trabado el teclado jajajaja", fecha: "2026-04-21T11:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2098,
    autor: "murga_la_reculada",
    fecha: "2026-01-18T21:00:00-03:00",
    texto: "Cuplé nuevo terminado. No lo pasamos acá, regla 4, pero les contamos de qué va.\n\nEs sobre un ómnibus que nunca llega. Empieza con la parada vacía y termina con el ómnibus lleno de gente que se conoció esperando.\n\nLo escribimos entre cuatro en la cocina del club, con dos cervezas y una discusión de hora y media sobre si el chofer aparecía o no.\n\nNo aparece. Ganó el que decía que no aparece.",
    imagen: null,
    grupo: "murgas",
    likes: 421,
    comentarios: [
      { autor: "guarda_101", texto: "Como guarda de omnibus les digo: si el chofer aparecía se arruinaba todo. Hicieron bien.", fecha: "2026-01-18T22:00:00-03:00",
        respuestas: [
          { autor: "murga_la_reculada", texto: "Néstor, ¿venís al ensayo del martes? Necesitamos que nos digas si hay algo que suena falso.", fecha: "2026-01-18T22:30:00-03:00" },
          { autor: "guarda_101", texto: "Voy. Y les llevo tres anecdotas que no se creen.", fecha: "2026-01-18T23:00:00-03:00" }
        ]
      },
      { autor: "taxi_cx_1420", texto: "un cuple sobre el transporte y no me consultaron a mi. 30 años arriba de un auto", fecha: "2026-01-19T08:00:00-03:00",
        respuestas: [
          { autor: "murga_la_reculada", texto: "Wilson, el taxi es para el año que viene. Anotado en serio.", fecha: "2026-01-19T09:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2099,
    autor: "dj.pirata.fm",
    fecha: "2026-02-27T02:00:00-03:00",
    texto: "Transmitimos 14 tablados de barrio esta temporada. CATORCE. Con dos microfonos, una consola q se recalienta y un cable que hay que mover para que ande.\n\nNo lo digo por lastima. Lo digo porque el q dice que el carnaval de barrio se murio no salio de su casa.",
    imagen: null,
    grupo: "murgas",
    likes: 512,
    comentarios: [
      { autor: "dj_candombe", texto: "El cable que hay que mover para que ande es el verdadero patrimonio cultural de este pais.", fecha: "2026-02-27T09:00:00-03:00" },
      { autor: "murga_la_reculada", texto: "Gracias Emiliano. Nuestra abuela nos escuchó desde Paso de los Toros gracias a vos.", fecha: "2026-02-27T10:00:00-03:00" },
      { autor: "basquet_aguada_fan", texto: "14 tablados es HISTORICO bo. Nadie hizo eso nunca", fecha: "2026-02-27T11:00:00-03:00",
        respuestas: [
          { autor: "dj.pirata.fm", texto: "En 2018 hicimos 17 jajaja. Pero gracias.", fecha: "2026-02-27T12:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2100,
    autor: "murga_la_reculada",
    fecha: "2024-08-11T18:00:00-03:00",
    texto: "Alguien tiro en un comentario que el jurado de este año fue el peor de la historia y que estaba arreglado.\n\nNo vamos a borrar el comentario porque no insultó a nadie. Pero pedimos una cosa: si vas a decir que algo está arreglado, decí qué te hace pensar eso. Si no podés, es un enojo, no una denuncia, y está bien tener un enojo.\n\nNosotros no salimos en el concurso hace tres años y no tenemos nada que defender.",
    imagen: null,
    grupo: "murgas",
    likes: 289,
    comentarios: [
      { autor: "patriota_oriental_1811", texto: "SIEMPRE GANAN LOS MISMOS Y TODOS LO SABEMOS. NO HACE FALTA PRUEBA PARA LO QUE SE VE A SIMPLE VISTA", fecha: "2024-08-11T19:00:00-03:00",
        respuestas: [
          { autor: "dj_candombe", texto: "Ponele que sí. ¿Los mismos quiénes? Nombrá tres.", fecha: "2024-08-11T19:30:00-03:00" },
          { autor: "patriota_oriental_1811", texto: "NO VOY A NOMBRAR PARA NO PERJUDICAR A NADIE", fecha: "2024-08-11T20:00:00-03:00" },
          { autor: "profe_hernandez_hist", texto: "Es decir que no perjudica a nadie decir que todo está arreglado, pero sí perjudicaría decir quién. Es un razonamiento interesante.", fecha: "2024-08-11T20:30:00-03:00" },
          { autor: "elpibe.delcerro", texto: "jajajaja lo cocinaron", fecha: "2024-08-11T21:00:00-03:00" }
        ]
      },
      { autor: "dj.pirata.fm", texto: "Yo creo q hay cosas raras eh. Pero raras no es arreglado. Son dos palabras distintas", fecha: "2024-08-11T22:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2101,
    autor: "dj_candombe",
    fecha: "2026-02-05T02:30:00-03:00",
    texto: "Llamadas. La cuerda de tambores empieza a armarse a las nueve y no toca hasta las once.\n\nEsas dos horas son las mejores del año y no las ve nadie. Se afina el cuero al fuego, se prueba, se vuelve a acercar al fuego. Los pibes miran. Los viejos no dicen nada.\n\nDespués sale el tambor y todo el mundo aplaude las dos horas que no vio.",
    imagen: null,
    grupo: "murgas",
    likes: 823,
    comentarios: [
      { autor: "murga_la_reculada", texto: "Martín, escribís mejor de madrugada que nosotros con un cuplé entero.", fecha: "2026-02-05T09:00:00-03:00" },
      { autor: "tatu.ink.mvd", texto: "esto es literalmente lo mismo que pasa en el estudio antes de tatuar. nadie ve las dos horas de preparar", fecha: "2026-02-05T11:00:00-03:00" },
      { autor: "elpibe.delcerro", texto: "yo miraba de guri y no entendia xq tardaban tanto jajaj", fecha: "2026-02-05T14:00:00-03:00",
        respuestas: [
          { autor: "dj_candombe", texto: "Y ahora ya sabés. El cuero frío no suena, suena la madera. Hay que llevarlo al punto y el punto dura poco.", fecha: "2026-02-05T15:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2102,
    autor: "murga_la_reculada",
    fecha: "2025-06-14T20:00:00-03:00",
    texto: "CONVOCATORIA URGENTE. Bajo.\n\nSe nos va el bajo de nuevo, esta vez porque se muda a Maldonado por laburo. Todo bien, sin drama, avisó con tiempo.\n\nNecesitamos bajo para arrancar en agosto con los ensayos. Con experiencia o con oido. Zona Cerro, La Teja, Paso Molino.\n\nMartes 20:30, Club Social Cerro, Grecia 3120. Pregunta por cualquiera, todos sabemos.",
    imagen: null,
    grupo: "murgas",
    likes: 176,
    comentarios: [
      { autor: "dj.pirata.fm", texto: "Comparto al aire el sabado. Y en la radio hay un muchacho q canta bajo, le digo.", fecha: "2025-06-14T21:00:00-03:00" },
      { autor: "elrusodelquiosco", texto: "el hijo de la vecina de enfrente canta en el coro de la iglesia y tiene una voz de cañon", fecha: "2025-06-14T22:00:00-03:00",
        respuestas: [
          { autor: "murga_la_reculada", texto: "Sergio, decile que caiga. Que no le pedimos que se cambie de religión, le pedimos que cante los martes.", fecha: "2025-06-14T22:30:00-03:00" },
          { autor: "elrusodelquiosco", texto: "jajaja le digo", fecha: "2025-06-14T23:00:00-03:00" },
          { autor: "elrusodelquiosco", texto: "fue el martes y quedo. Se llama Maxi", fecha: "2025-06-25T09:00:00-03:00" },
          { autor: "murga_la_reculada", texto: "Confirmamos. Tenemos bajo. Y qué bajo.", fecha: "2025-06-25T10:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2103,
    autor: "dj.pirata.fm",
    fecha: "2025-10-05T23:00:00-03:00",
    texto: "Estoy armando un archivo de audio de tablados de barrio. Tengo cosas desde 2016.\n\nLo que busco: grabaciones de tablados q ya no existen. Cualquier calidad. Un celular en el bolsillo sirve.\n\nNo es para vender ni para subir a ningun lado. Es para que quede.",
    imagen: null,
    grupo: "murgas",
    likes: 445,
    comentarios: [
      { autor: "profe_hernandez_hist", texto: "Emiliano, esto es trabajo de archivo serio y nadie te lo va a reconocer. Yo te ayudo a catalogarlo si querés, con fecha, lugar y quién cantó.", fecha: "2025-10-05T23:45:00-03:00",
        respuestas: [
          { autor: "dj.pirata.fm", texto: "Alvaro, no sabes lo que me acabas de decir. Tengo 400 archivos con nombres tipo audio_final_2.mp3", fecha: "2025-10-06T00:30:00-03:00" },
          { autor: "profe_hernandez_hist", texto: "Empecemos por ahí entonces. Un archivo sin catálogo es una caja de zapatos.", fecha: "2025-10-06T08:00:00-03:00" },
          { autor: "libreria_elsurco", texto: "Si necesitan un lugar para juntarse a hacer eso, tenemos la trastienda los sábados de mañana.", fecha: "2025-10-06T10:00:00-03:00" }
        ]
      },
      { autor: "dj_candombe", texto: "Yo tengo del 2014 en un disco viejo. Voy a ver si arranca.", fecha: "2025-10-06T02:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2104,
    autor: "elpibe.delcerro",
    fecha: "2026-01-12T01:00:00-03:00",
    texto: "audio de 3:20 del ensayo de hoy 🎤🥁\n\n(no se puede escuchar, ya se, siempre pasa lo mismo, pero les juro q sono terrible)",
    imagen: null,
    grupo: "murgas",
    likes: 234,
    comentarios: [
      { autor: "murga_la_reculada", texto: "Brian, subiste el audio y no se escucha nada. Es la tercera vez.", fecha: "2026-01-12T09:00:00-03:00",
        respuestas: [
          { autor: "elpibe.delcerro", texto: "a mi se me escucha", fecha: "2026-01-12T10:00:00-03:00" },
          { autor: "hacker_del_prado", texto: "Se te escucha a vos porque lo tenés en el teléfono. Lo que subiste es otra cosa.", fecha: "2026-01-12T10:30:00-03:00" },
          { autor: "elpibe.delcerro", texto: "ah re", fecha: "2026-01-12T10:35:00-03:00" },
          { autor: "marce.peluquera", texto: "brian sos un desastre te adoro igual", fecha: "2026-01-12T11:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2105,
    autor: "dj_candombe",
    fecha: "2026-02-06T03:15:00-03:00",
    texto: "Alguien me preguntó por que toco siempre en el mismo lugar de la cuerda si podría ir adelante.\n\nPorque adelante te ven y atras escuchás. Y yo prefiero escuchar.\n\nLo mismo con el DJ: la mejor cabina es la que está donde suena de verdad, no donde se ve lindo.",
    imagen: null,
    grupo: "murgas",
    likes: 367,
    comentarios: [
      { autor: "dj.pirata.fm", texto: "Y por eso los que operamos sonido tenemos siempre la peor vista del show. Es un oficio de espaldas.", fecha: "2026-02-06T09:00:00-03:00" },
      { autor: "murga_la_reculada", texto: "En la murga es igual: el que dirige esta de espaldas al publico toda la actuación.", fecha: "2026-02-06T10:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2106,
    autor: "murga_la_reculada",
    fecha: "2026-02-21T23:30:00-03:00",
    texto: "Tablado del club, sabado. Se llovió a las 21:40, justo antes de salir.\n\nMovimos todo adentro en veinte minutos. Entraron 180 personas en un salón para 120. La gente parada contra la pared, los gurises sentados en el piso adelante.\n\nCantamos sin micrófono porque no daba el espacio para el equipo.\n\nFue la mejor actuación del año y ni siquiera está grabada",
    imagen: null,
    grupo: "murgas",
    likes: 892,
    comentarios: [
      { autor: "dj.pirata.fm", texto: "Esta grabada. Yo tenia el celular en el bolsillo de la campera. Se escucha horrible y se escucha todo", fecha: "2026-02-21T23:55:00-03:00",
        respuestas: [
          { autor: "murga_la_reculada", texto: "Emiliano. Mandanoslo ya", fecha: "2026-02-22T00:00:00-03:00" },
          { autor: "dj.pirata.fm", texto: "Va. Y va al archivo, con fecha y todo, como me enseño el profe.", fecha: "2026-02-22T00:15:00-03:00" },
          { autor: "profe_hernandez_hist", texto: "Ahí está. Para eso servía el catálogo.", fecha: "2026-02-22T09:00:00-03:00" }
        ]
      },
      { autor: "pastelera.zuni", texto: "Yo estaba contra la pared del fondo. No vi nada y no me olvido más.", fecha: "2026-02-22T08:00:00-03:00" },
      { autor: "elpibe.delcerro", texto: "sin microfono y se escuchaba en la vereda. eso es murga", fecha: "2026-02-22T10:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2107,
    autor: "dj.pirata.fm",
    fecha: "2026-03-08T21:00:00-03:00",
    texto: "Cerro un tablado historico del barrio. El del terreno de la esquina, ese donde se ponian tablones sobre cajones.\n\nEl dueño del terreno lo vendio. Es su derecho, no lo estoy acusando de nada.\n\nSolo digo que ahi cantaron treinta años de murgas y que ahora va a haber un galpon",
    imagen: null,
    grupo: "murgas",
    likes: 634,
    comentarios: [
      { autor: "murga_la_reculada", texto: "Nosotros debutamos ahi en 2009. Con seis personas y un bombo prestado.", fecha: "2026-03-08T22:00:00-03:00" },
      { autor: "profe_hernandez_hist", texto: "¿Alguien tiene fotos de ese tablado? Aunque sean malas. Es el tipo de cosa que desaparece sin que nadie la haya registrado nunca.", fecha: "2026-03-08T23:00:00-03:00",
        respuestas: [
          { autor: "elrusodelquiosco", texto: "yo tengo de los 90, en papel. Mi señora las guardo", fecha: "2026-03-09T08:00:00-03:00" },
          { autor: "profe_hernandez_hist", texto: "Sergio, esas fotos valen oro. ¿Las podemos escanear? Yo pongo el escáner y el tiempo.", fecha: "2026-03-09T08:30:00-03:00" },
          { autor: "elrusodelquiosco", texto: "veni cuando quieras al quiosco. Pero no me las lleves eh, las escaneamos ahi", fecha: "2026-03-09T09:00:00-03:00" },
          { autor: "dj.pirata.fm", texto: "Me sumo. Llevo la notebook.", fecha: "2026-03-09T10:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2108,
    autor: "elpibe.delcerro",
    fecha: "2026-03-25T22:00:00-03:00",
    texto: "pregunta seria pq no se a quien preguntarle.\n\nme llamaron de otra murga, mas grande, y me ofrecieron. no plata pero casi. y yo estoy en la reculada desde los 16.\n\nno se q hacer. no quiero quedar como el beto",
    imagen: null,
    grupo: "murgas",
    likes: 289,
    comentarios: [
      { autor: "dj_candombe", texto: "Brian, una sola cosa: hablalo con ellos antes de decidir, no después. Lo del Beto no fue irse, fue cómo se enteraron.", fecha: "2026-03-25T22:30:00-03:00",
        respuestas: [
          { autor: "elpibe.delcerro", texto: "eso es lo q me da cosa", fecha: "2026-03-25T22:45:00-03:00" },
          { autor: "dj_candombe", texto: "Entonces ya sabés que hacer primero. Lo otro lo decidís despues.", fecha: "2026-03-25T23:00:00-03:00" }
        ]
      },
      { autor: "murga_la_reculada", texto: "Brian, leímos esto. Vení el martes y lo charlamos con mate. Y ojo: si te vas, te vamos a ir a ver y te vamos a aplaudir. En serio.", fecha: "2026-03-26T09:00:00-03:00",
        respuestas: [
          { autor: "elpibe.delcerro", texto: "voy el martes ❤️", fecha: "2026-03-26T09:30:00-03:00" },
          { autor: "pastelera.zuni", texto: "Ay estos chiquilines me hacen llorar.", fecha: "2026-03-26T10:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2109,
    autor: "murga_la_reculada",
    fecha: "2026-04-02T20:00:00-03:00",
    texto: "Brian se queda.\n\nY no se queda por lealtad ni por culpa, que era lo que nos preocupaba. Se queda porque en la otra murga le dijeron que iba a cantar en el fondo el primer año y acá canta adelante.\n\nEso es una decisión de murguista, no de amigo. Bien ahí.",
    imagen: null,
    grupo: "murgas",
    likes: 512,
    comentarios: [
      { autor: "dj_candombe", texto: "La mejor razón posible. Felicitaciones a los dos lados.", fecha: "2026-04-02T21:00:00-03:00" },
      { autor: "elpibe.delcerro", texto: "igual me dio cosa decirles q no. son gente re buena", fecha: "2026-04-02T21:30:00-03:00" },
      { autor: "elrusodelquiosco", texto: "el pibe de las figuritas negociando su lugar en la cuerda. Que orgullo bo", fecha: "2026-04-03T09:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2110,
    autor: "dj_candombe",
    fecha: "2026-04-19T02:00:00-03:00",
    texto: "Nostalgia de madrugada, aguántenme.\n\nEn los tablados de los 90 no había pantalla. No había nada. Vos llegabas y no sabías quién cantaba hasta que salían.\n\nAhora está todo anunciado, todo en un cartel, todo con horario.\n\nNo digo que fuera mejor. Digo que sorprenderse era parte.",
    imagen: null,
    grupo: "murgas",
    likes: 456,
    comentarios: [
      { autor: "profe_hernandez_hist", texto: "Y la gente iba igual. Esa es la parte que hoy cuesta explicar.", fecha: "2026-04-19T09:00:00-03:00" },
      { autor: "elpibe.delcerro", texto: "o sea q ibas sin saber q ibas a ver? y si era malo?", fecha: "2026-04-19T11:00:00-03:00",
        respuestas: [
          { autor: "dj_candombe", texto: "Y si era malo era malo, Brian. Y lo comentábamos un año entero.", fecha: "2026-04-19T11:30:00-03:00" },
          { autor: "elpibe.delcerro", texto: "jajajaj q bravo", fecha: "2026-04-19T11:45:00-03:00" },
          { autor: "murga_la_reculada", texto: "Todavía se comenta una de 1997. Todavía.", fecha: "2026-04-19T12:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2111,
    autor: "murga_la_reculada",
    fecha: "2026-05-09T19:00:00-03:00",
    texto: "AVISO DE ADMIN.\n\nSe borraron cuatro comentarios de una discusión que empezó por el jurado y terminó con dos personas hablando de la familia del otro.\n\nNo importa quién empezó. Los dos se pasaron.\n\nÚltimo aviso con esto: se puede decir que una actuación fue floja. No se puede hablar de la vida privada de nadie. Regla 2, está escrita desde 2020.",
    imagen: null,
    grupo: "murgas",
    likes: 234,
    comentarios: [
      { autor: "dj_candombe", texto: "Confirmo como el otro admin. Y los dos son gente que quiero, por eso duele mas.", fecha: "2026-05-09T19:30:00-03:00" },
      { autor: "dj.pirata.fm", texto: "Cada año pasa lo mismo entre mayo y julio, cuando no hay carnaval y sobra tiempo.", fecha: "2026-05-09T20:00:00-03:00",
        respuestas: [
          { autor: "murga_la_reculada", texto: "Emiliano tiene razón. En febrero nadie pelea porque están todos cantando.", fecha: "2026-05-09T20:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2112,
    autor: "dj.pirata.fm",
    fecha: "2026-05-24T22:00:00-03:00",
    texto: "El archivo va en 1.100 grabaciones catalogadas. Con fecha, lugar, murga y calidad.\n\nEl profe Hernandez viene los sabados desde octubre. Sin faltar uno. No cobra nada y me corrige la ortografia de las fichas.\n\nEsto no lo empece yo solo y quiero que quede escrito",
    imagen: null,
    grupo: "murgas",
    likes: 578,
    comentarios: [
      { autor: "profe_hernandez_hist", texto: "Lo empezaste vos. Yo puse fichas, que es lo único que sé hacer. Y de paso escuché cosas que no había escuchado nunca.", fecha: "2026-05-24T23:00:00-03:00" },
      { autor: "libreria_elsurco", texto: "La trastienda es de ustedes los sábados el tiempo que haga falta.", fecha: "2026-05-25T09:00:00-03:00" },
      { autor: "murga_la_reculada", texto: "Cuando esto esté, hay que hacer una noche de escucha en el club. Poner los audios y ya está, sin nada más.", fecha: "2026-05-25T10:00:00-03:00",
        respuestas: [
          { autor: "dj.pirata.fm", texto: "Eso lo hacemos. En agosto, q no hay nada", fecha: "2026-05-25T11:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2113,
    autor: "elpibe.delcerro",
    fecha: "2026-06-11T23:00:00-03:00",
    texto: "arranco la temporada de ensayos. martes y jueves.\n\nhoy vinimos 9 de 22. hacia 4 grados.\n\nel director dijo q los 9 q vinieron hoy son la murga y el resto veremos. dsp se rio pero lo dijo en serio",
    imagen: null,
    grupo: "murgas",
    likes: 312,
    comentarios: [
      { autor: "murga_la_reculada", texto: "Lo dijo en serio, sí. En junio se ve quien está.", fecha: "2026-06-11T23:30:00-03:00" },
      { autor: "dj_candombe", texto: "Junio y julio son los meses que arman la murga. Febrero solo la muestra.", fecha: "2026-06-12T02:00:00-03:00" },
      { autor: "nurse_valentina", texto: "Salgo de guardia a las 7 y ustedes ensayando a las 11 de la noche con 4 grados. Somos los mismos locos con distinto uniforme.", fecha: "2026-06-12T07:30:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2114,
    autor: "murga_la_reculada",
    fecha: "2026-06-28T20:00:00-03:00",
    texto: "CONVOCATORIA. Buscamos alguien que sepa de vestuario.\n\nNo hace falta que sea modista profesional. Alguien que sepa cortar, coser a máquina y que aguante que 22 personas le digan que el traje les aprieta.\n\nSe paga lo que se pueda, que es poco y honesto decirlo.\n\nMartes y jueves 20:30, Grecia 3120.",
    imagen: null,
    grupo: "murgas",
    likes: 198,
    comentarios: [
      { autor: "marce.peluquera", texto: "mi tía cose y está aburrida desde que se jubiló. le pregunto!!", fecha: "2026-06-28T21:00:00-03:00",
        respuestas: [
          { autor: "murga_la_reculada", texto: "Marcela sos una maquina. Avisanos.", fecha: "2026-06-28T21:30:00-03:00" },
          { autor: "marce.peluquera", texto: "dijo que sí pero que no quiere que le griten 😂", fecha: "2026-06-29T10:00:00-03:00" },
          { autor: "murga_la_reculada", texto: "Nadie le va a gritar. Van a llorar bajito, que es distinto.", fecha: "2026-06-29T10:30:00-03:00" }
        ]
      },
      { autor: "tatu.ink.mvd", texto: "si necesitan diseño del vestuario yo dibujo. gratis, me divierte", fecha: "2026-06-29T12:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2115,
    autor: "dj_candombe",
    fecha: "2026-07-17T02:00:00-03:00",
    texto: "Una cosa que nadie dice del carnaval: lo que mas se extraña en julio no es cantar.\n\nEs el viaje de vuelta. Doce personas apretadas en una camioneta a las cuatro de la mañana, sin hablar, con el maquillaje corrido, y alguien que empieza a tararear bajito y en dos cuadras estan todos.\n\nEso no se puede explicar y por eso lo escribo a las dos de la mañana.",
    imagen: null,
    grupo: "murgas",
    likes: 934,
    comentarios: [
      { autor: "murga_la_reculada", texto: "La camioneta. Siempre la camioneta.", fecha: "2026-07-17T09:00:00-03:00" },
      { autor: "elpibe.delcerro", texto: "yo me duermo en la camioneta y me despiertan cantando. es lo mejor del año", fecha: "2026-07-17T10:00:00-03:00" },
      { autor: "dj.pirata.fm", texto: "Grabe una de esas vueltas sin querer en 2019. Esta en el archivo. Se escucha el motor y doce voces.", fecha: "2026-07-17T11:00:00-03:00",
        respuestas: [
          { autor: "dj_candombe", texto: "Emiliano no me hagas esto un viernes.", fecha: "2026-07-17T11:30:00-03:00" },
          { autor: "profe_hernandez_hist", texto: "Ficha 0442. La catalogué yo. Puse traslado nocturno, canto espontáneo. No supe cómo más llamarlo.", fecha: "2026-07-17T12:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2116,
    autor: "dj.pirata.fm",
    fecha: "2026-08-01T21:00:00-03:00",
    texto: "NOCHE DE ESCUCHA. Sabado 15 de agosto, 20 horas, Club Social Cerro, Grecia 3120.\n\nPonemos grabaciones del archivo en un equipo prestado y nos sentamos a escuchar. Nada mas. No hay show, no hay nadie cantando en vivo.\n\nEntrada libre. Hay tortas fritas si la Zunilda se prende.\n\nDesde 1994 hasta el año pasado. Van a escuchar gente q ya no esta.",
    imagen: null,
    grupo: "murgas",
    likes: 723,
    comentarios: [
      { autor: "pastelera.zuni", texto: "La Zunilda se prende. Y lleva pastafrola también.", fecha: "2026-08-01T21:30:00-03:00" },
      { autor: "murga_la_reculada", texto: "El club está. Abrimos a las 19 para acomodar sillas. Vengan a dar una mano.", fecha: "2026-08-01T22:00:00-03:00" },
      { autor: "profe_hernandez_hist", texto: "Vamos a proyectar la ficha de cada grabación en la pared: fecha, lugar y quiénes cantan. Que se sepa qué se está escuchando.", fecha: "2026-08-02T09:00:00-03:00",
        respuestas: [
          { autor: "dj.pirata.fm", texto: "Eso lo penso el y es lo mejor de toda la idea.", fecha: "2026-08-02T10:00:00-03:00" },
          { autor: "elpibe.delcerro", texto: "voy con mi vieja. va a llorar seguro", fecha: "2026-08-02T11:00:00-03:00" },
          { autor: "dj_candombe", texto: "Vamos a llorar todos, Brian. Es el plan.", fecha: "2026-08-02T12:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },

  /* ============ mateando (2120-2149) ============ */

  {
    id: 2120,
    autor: "mateamargo_87",
    fecha: "2019-08-15T19:00:00-03:00",
    texto: "FIJADO. Abro este grupo porque en los otros no se puede boludear en paz.\n\nAcá se habla de nada. Del mate, de la infancia, de por qué el chivito de la esquina es mejor que el de la otra esquina.\n\nNo se arregla el país. Hay grupos para eso y ninguno lo arregló todavía.",
    imagen: null,
    grupo: "mateando",
    likes: 892,
    comentarios: [
      { autor: "nurse_valentina", texto: "Yo entro a las 4 de la mañana en la guardia y necesito exactamente esto. Anotada.", fecha: "2019-08-15T20:00:00-03:00" },
      { autor: "taxi_cx_1420", texto: "yo opino de todo IGUAL eh, avisando", fecha: "2019-08-15T21:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2121,
    autor: "nurse_valentina",
    fecha: "2020-09-03T04:20:00-03:00",
    texto: "Son las 4:20 de la mañana, estoy en el office de la guardia y les hago la pregunta más importante del universo.",
    imagen: null,
    grupo: "mateando",
    likes: 1204,
    comentarios: [
      { autor: "sofi.tortasfritas", texto: "Con azúcar. Y el que dice amargo miente o no probó uno bien dulce.", fecha: "2020-09-03T08:00:00-03:00" },
      { autor: "mateamargo_87", texto: "mi alias es literalmente mate amargo", fecha: "2020-09-03T08:30:00-03:00",
        respuestas: [
          { autor: "nurse_valentina", texto: "Rodrigo eso no es un argumento, es un nombre de usuario.", fecha: "2020-09-03T09:00:00-03:00" },
          { autor: "mateamargo_87", texto: "es un compromiso de vida bo", fecha: "2020-09-03T09:15:00-03:00" }
        ]
      },
      { autor: "dona_elsa_47", texto: "YO LO TOMO AMARGO DESDE 1968. AMEN", fecha: "2020-09-03T10:00:00-03:00" }
    ],
    encuesta: {
      pregunta: "Mate: amargo o dulce",
      opciones: [
        { texto: "Amargo, como corresponde", votos: 3241 },
        { texto: "Dulce y sin vergüenza", votos: 1876 },
        { texto: "Depende de la hora", votos: 622 },
        { texto: "No tomo mate (y lo pago caro en este grupo)", votos: 189 }
      ],
      cierra: "2020-09-10T23:59:00-03:00"
    }
  },
  {
    id: 2122,
    autor: "basquet_aguada_fan",
    fecha: "2026-06-12T23:00:00-03:00",
    texto: "ACABO DE VER EL PARTIDO MAS HISTORICO DE LA HISTORIA. HISTORICO. no puedo dormir. HISTORICO",
    imagen: null,
    grupo: "mateando",
    likes: 267,
    comentarios: [
      { autor: "taxi_cx_1420", texto: "leandro vos decis eso todas las semanas", fecha: "2026-06-12T23:30:00-03:00",
        respuestas: [
          { autor: "basquet_aguada_fan", texto: "PORQUE TODAS LAS SEMANAS PASA ALGO HISTORICO", fecha: "2026-06-12T23:40:00-03:00" },
          { autor: "guarda_101", texto: "Tiene su logica.", fecha: "2026-06-13T06:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2123,
    autor: "elpibe.delcerro",
    fecha: "2021-10-22T18:00:00-03:00",
    texto: "gente de mas de 40: como hacian para quedar en un lugar sin celular? es en serio la pregunta, no entiendo la logistica 🤔",
    imagen: null,
    grupo: "mateando",
    likes: 1543,
    comentarios: [
      { autor: "taxi_cx_1420", texto: "quedabas y punto. Si el otro no venia, no venia. Esperabas 20 minutos y te ibas", fecha: "2021-10-22T18:30:00-03:00" },
      { autor: "laura.rambla", texto: "Se decía la hora y el lugar exacto: reloj del centro, 15 horas. Y una llegaba. No había plan B porque no existía la idea de plan B.", fecha: "2021-10-22T19:00:00-03:00",
        respuestas: [
          { autor: "elpibe.delcerro", texto: "pero y si te pasaba algo en el camino?", fecha: "2021-10-22T19:15:00-03:00" },
          { autor: "laura.rambla", texto: "Y el otro se enteraba al otro día, Brian.", fecha: "2021-10-22T19:30:00-03:00" },
          { autor: "elpibe.delcerro", texto: "eso me pone re ansioso jajajaj", fecha: "2021-10-22T19:35:00-03:00" },
          { autor: "nurse_valentina", texto: "Éramos más ansiosos, lo que pasa es que no teníamos dónde escribirlo.", fecha: "2021-10-22T20:00:00-03:00" }
        ]
      },
      { autor: "marce.peluquera", texto: "y llamabas al telefono de la casa y te atendia la madre 😱", fecha: "2021-10-22T21:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2124,
    autor: "mateamargo_87",
    fecha: "2026-03-22T13:00:00-03:00",
    texto: "Domingo. Hora del debate nacional. Que hable el pueblo.",
    imagen: null,
    grupo: "mateando",
    likes: 2103,
    comentarios: [
      { autor: "chef_carmelo", texto: "La salsa golf es kétchup con mayonesa. Es un invento de emergencia. Que la gente la ame no la convierte en otra cosa.", fecha: "2026-03-22T14:00:00-03:00",
        respuestas: [
          { autor: "sofi.tortasfritas", texto: "Ignacio, con todo cariño: bajá. Es rica y punto.", fecha: "2026-03-22T14:30:00-03:00" },
          { autor: "chef_carmelo", texto: "No dije que no fuera rica. Dije lo que es.", fecha: "2026-03-22T14:45:00-03:00" },
          { autor: "taxi_cx_1420", texto: "el que le pone salsa golf a la pizza esta enfermo igual", fecha: "2026-03-22T15:00:00-03:00" },
          { autor: "marce.peluquera", texto: "YO LE PONGO A LA PIZZA 😭", fecha: "2026-03-22T15:15:00-03:00" },
          { autor: "taxi_cx_1420", texto: "lo dicho", fecha: "2026-03-22T15:20:00-03:00" }
        ]
      }
    ],
    encuesta: {
      pregunta: "Salsa golf: veredicto final",
      opciones: [
        { texto: "Va en todo", votos: 2891 },
        { texto: "Solo en el palmito y el chivito", votos: 1744 },
        { texto: "En nada, es una aberración", votos: 903 },
        { texto: "Depende de quién la haga", votos: 411 }
      ],
      cierra: "2026-03-29T23:59:00-03:00"
    }
  },
  {
    id: 2125,
    autor: "guarda_101",
    fecha: "2026-07-07T06:30:00-03:00",
    texto: "Cosas que veo en el ómnibus a las 6 de la mañana:\n- Gente durmiendo parada. Parada.\n- Uno que se pasa la parada todos los días y todos los días se sorprende.\n- Una señora que me saluda por el nombre y yo no sé cómo se llama hace 4 años.\n- Alguien comiendo un pancho. A las 6 AM.",
    imagen: null,
    grupo: "mateando",
    likes: 1876,
    comentarios: [
      { autor: "nurse_valentina", texto: "El del pancho a las 6 AM probablemente salió de una guardia. No lo juzgues, es de los míos.", fecha: "2026-07-07T07:00:00-03:00" },
      { autor: "remis_nocturno_mvd", texto: "A las 6 AM no hay desayuno ni cena, hay comida. Se llama comida y se come.", fecha: "2026-07-07T07:30:00-03:00" },
      { autor: "laura.rambla", texto: "Néstor, preguntale el nombre. Después de cuatro años ya no da vergüenza, da ternura.", fecha: "2026-07-07T08:00:00-03:00",
        respuestas: [
          { autor: "guarda_101", texto: "Le pregunté. Se llama Nélida. Me dijo que hacía cuatro años que esperaba que le preguntara.", fecha: "2026-07-08T07:00:00-03:00" },
          { autor: "laura.rambla", texto: "Ay.", fecha: "2026-07-08T08:00:00-03:00" },
          { autor: "nurse_valentina", texto: "Me arruinaste el dia de la mejor manera posible.", fecha: "2026-07-08T09:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2126,
    autor: "hacker_del_prado",
    fecha: "2026-01-14T16:00:00-03:00",
    texto: "Encuesta cientifica rigurosa.",
    imagen: null,
    grupo: "mateando",
    likes: 743,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Con cebolla. Sin cebolla es pure aplastado con huevo", fecha: "2026-01-14T17:00:00-03:00" },
      { autor: "sofi.tortasfritas", texto: "Con cebolla, y la cebolla se pocha primero. Cruda no, que despues repite y culpan a la tortilla.", fecha: "2026-01-14T18:00:00-03:00" },
      { autor: "mateamargo_87", texto: "sin cebolla. y me banco las consecuencias", fecha: "2026-01-14T19:00:00-03:00",
        respuestas: [
          { autor: "pastelera.zuni", texto: "Hijo, no.", fecha: "2026-01-14T19:30:00-03:00" },
          { autor: "mateamargo_87", texto: "doña zuni no me haga esto", fecha: "2026-01-14T19:40:00-03:00" }
        ]
      }
    ],
    encuesta: {
      pregunta: "Tortilla de papa: cebolla sí o cebolla no",
      opciones: [
        { texto: "Con cebolla", votos: 3102 },
        { texto: "Sin cebolla", votos: 1455 },
        { texto: "Con cebolla pero pochada", votos: 1988 },
        { texto: "Yo le pongo morrón y no me importa nada", votos: 234 }
      ],
      cierra: "2026-01-21T23:59:00-03:00"
    }
  },
  {
    id: 2127,
    autor: "marce.peluquera",
    fecha: "2026-05-08T11:00:00-03:00",
    texto: "chicas necesito q me digan la verdad. ayer una clienta me dijo q el flequillo cortina ya fue y yo le corte igual porque ella lo pidio.\n\nel flequillo cortina ya fue?? 💇✨",
    imagen: null,
    grupo: "mateando",
    likes: 456,
    comentarios: [
      { autor: "tatu.ink.mvd", texto: "todo vuelve cada 15 años, ya fue significa nada", fecha: "2026-05-08T12:00:00-03:00" },
      { autor: "nurse_valentina", texto: "Yo me lo corté sola en 2021 a las 3 de la mañana despues de un turno. Eso si ya fue.", fecha: "2026-05-08T13:00:00-03:00",
        respuestas: [
          { autor: "marce.peluquera", texto: "VALEN NO ME DIGAS ESO 😭 veni que te lo arreglo gratis", fecha: "2026-05-08T13:30:00-03:00" },
          { autor: "nurse_valentina", texto: "Ya crecio. Pero gracias, quedo con el credito.", fecha: "2026-05-08T14:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2128,
    autor: "taxi_cx_1420",
    fecha: "2023-11-30T22:00:00-03:00",
    texto: "PREGUNTA QUE DIVIDE FAMILIAS.\n\ny no me vengan con depende. Es una hora, la hora que ustedes cenan. La que sea.",
    imagen: null,
    grupo: "mateando",
    likes: 1102,
    comentarios: [
      { autor: "tambero_sanjose", texto: "19:30. Y me acuesto a las 21 porque me levanto 4:30.", fecha: "2023-11-30T22:30:00-03:00",
        respuestas: [
          { autor: "elpibe.delcerro", texto: "19:30 ES LA MERIENDA SEÑOR", fecha: "2023-11-30T23:00:00-03:00" },
          { autor: "tambero_sanjose", texto: "Vos cenas a la hora que yo me levanto, asi que estamos a mano", fecha: "2023-12-01T04:40:00-03:00" },
          { autor: "elpibe.delcerro", texto: "jajajaja touche", fecha: "2023-12-01T10:00:00-03:00" }
        ]
      },
      { autor: "nurse_valentina", texto: "Yo ceno a las 2 AM o a las 11 AM. La pregunta no me representa.", fecha: "2023-12-01T02:00:00-03:00" }
    ],
    encuesta: {
      pregunta: "A qué hora se cena",
      opciones: [
        { texto: "19:30 y no se discute", votos: 812 },
        { texto: "21:00, hora civilizada", votos: 2341 },
        { texto: "22:30 o más tarde", votos: 1677 },
        { texto: "Cuando tengo hambre", votos: 1203 }
      ],
      cierra: "2023-12-07T23:59:00-03:00"
    }
  },
  {
    id: 2129,
    autor: "elpibe.delcerro",
    fecha: "2026-02-14T15:00:00-03:00",
    texto: "cosas de los 90 que me contaron y no puedo creer:\n\n- q rebobinabas el video con un lapiz\n- q habia q esperar a q terminara la cancion en la radio pa grabarla\n- q si querias saber algo tenias q ir a una biblioteca\n\ndecime cual es mentira pq una tiene q ser mentira",
    imagen: null,
    grupo: "mateando",
    likes: 2341,
    comentarios: [
      { autor: "libreria_elsurco", texto: "Ninguna es mentira. Y lo de la biblioteca lo seguimos ofreciendo.", fecha: "2026-02-14T16:00:00-03:00" },
      { autor: "dj_candombe", texto: "Y grababas y justo cuando terminaba la canción el locutor hablaba encima. Todas las veces. TODAS.", fecha: "2026-02-14T17:00:00-03:00",
        respuestas: [
          { autor: "laura.rambla", texto: "Y quedaba grabado así para siempre. Yo todavía escucho esa canción y espero al locutor.", fecha: "2026-02-14T18:00:00-03:00" },
          { autor: "dj_candombe", texto: "Laura, eso es hermoso y triste al mismo tiempo", fecha: "2026-02-14T18:30:00-03:00" },
          { autor: "elpibe.delcerro", texto: "esperan a un tipo q hablaba hace 30 años. son terribles", fecha: "2026-02-14T19:00:00-03:00" }
        ]
      },
      { autor: "coleccionista_cx", texto: "Yo tengo tres grabadores de cassette funcionando. El lápiz sigue siendo la mejor herramienta.", fecha: "2026-02-14T20:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2130,
    autor: "nurse_valentina",
    fecha: "2026-06-21T05:00:00-03:00",
    texto: "Humor de guardia, no se ofendan.\n\nHoy entró un señor a las 3 AM con un dolor que tenía hace nueve meses. Nueve. Le pregunté por qué justo hoy y me dijo: porque hoy no podía dormir igual.\n\nEs la lógica más humana que escuché en mi vida.",
    imagen: null,
    grupo: "mateando",
    likes: 1789,
    comentarios: [
      { autor: "taxi_cx_1420", texto: "yo, lo lleve a un tipo asi una vez. Me dijo lo mismo. Si voy a estar despierto, que sea haciendo algo", fecha: "2026-06-21T06:00:00-03:00" },
      { autor: "remis_nocturno_mvd", texto: "A las 3 AM la gente decide cosas que a las 3 PM ni se le cruzan. Lo veo todas las noches.", fecha: "2026-06-21T06:30:00-03:00",
        respuestas: [
          { autor: "nurse_valentina", texto: "Julio, deberíamos escribir un libro entre los dos. Se llamaría Gente a las 3.", fecha: "2026-06-21T07:00:00-03:00" },
          { autor: "remis_nocturno_mvd", texto: "Yo pongo las anécdotas, vos ponés la ortografía.", fecha: "2026-06-21T07:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2131,
    autor: "mateamargo_87",
    fecha: "2024-10-05T12:00:00-03:00",
    texto: "Discusion que tuve con mi cuñado y necesito jurado imparcial.",
    imagen: null,
    grupo: "mateando",
    likes: 1654,
    comentarios: [
      { autor: "chef_carmelo", texto: "El chivito canónico lleva lomo, jamón, muzzarella, morrón, aceituna, huevo y lechuga y tomate. La panceta es un agregado moderno.", fecha: "2024-10-05T13:00:00-03:00",
        respuestas: [
          { autor: "elpibe.delcerro", texto: "moderno tipo hace 40 años jajajaj", fecha: "2024-10-05T13:30:00-03:00" },
          { autor: "chef_carmelo", texto: "En términos de cocina 40 años es anteayer.", fecha: "2024-10-05T14:00:00-03:00" },
          { autor: "sofi.tortasfritas", texto: "Ignacio querido, el chivito canónico es el que te gusta a vos. Fin.", fecha: "2024-10-05T15:00:00-03:00" }
        ]
      },
      { autor: "basquet_aguada_fan", texto: "SIN PANCETA NO ES CHIVITO ES UN SANDWICH CARO", fecha: "2024-10-05T16:00:00-03:00" }
    ],
    encuesta: {
      pregunta: "El chivito lleva panceta",
      opciones: [
        { texto: "Sí, obligatoria", votos: 2988 },
        { texto: "No, es un agregado", votos: 1122 },
        { texto: "Opcional, y ahí está la belleza", votos: 1876 },
        { texto: "Yo pido sin lechuga y me odian igual", votos: 344 }
      ],
      cierra: "2024-10-12T23:59:00-03:00"
    }
  },
  {
    id: 2132,
    autor: "rivera_frontera",
    fecha: "2025-01-20T14:00:00-03:00",
    texto: "gente de montevideo: en la frontera decimos cosas q ustedes no entienden y viceversa. hagamos el intercambio cultural.\n\nyo empiezo: acá decimos capaz que sí de una forma que alla suena a que estoy dudando y no, es q sí.",
    imagen: null,
    grupo: "mateando",
    likes: 987,
    comentarios: [
      { autor: "elpibe.delcerro", texto: "explicame el portuñol pq yo escucho y entiendo el 80% y ese 20 me vuelve loco", fecha: "2025-01-20T15:00:00-03:00" },
      { autor: "melo_ferretero", texto: "En Cerro Largo decimos vamo ver que significa no.", fecha: "2025-01-20T16:00:00-03:00",
        respuestas: [
          { autor: "rivera_frontera", texto: "jajaja igual acá!! vamo ver = olvidate", fecha: "2025-01-20T16:30:00-03:00" },
          { autor: "taxi_cx_1420", texto: "en montevideo eso es despues te aviso", fecha: "2025-01-20T17:00:00-03:00" },
          { autor: "treintaytres_jinete", texto: "en el campo es cuando pinte. Mismo significado", fecha: "2025-01-20T18:00:00-03:00" },
          { autor: "laura.rambla", texto: "Este hilo es un estudio dialectal completo y ustedes ni se dieron cuenta.", fecha: "2025-01-20T19:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2133,
    autor: "nurse_valentina",
    fecha: "2026-04-11T03:30:00-03:00",
    texto: "Encuesta de madrugada. Contesten los que están despiertos, que son los que importan.",
    imagen: null,
    grupo: "mateando",
    likes: 1234,
    comentarios: [
      { autor: "remis_nocturno_mvd", texto: "Trabajando. Siempre trabajando.", fecha: "2026-04-11T03:45:00-03:00" },
      { autor: "tambero_sanjose", texto: "Yo a las 3:30 ya estoy por levantarme. No se en que categoria entro.", fecha: "2026-04-11T04:20:00-03:00" },
      { autor: "dj_candombe", texto: "Yo a las 3:30 recién estoy empezando a pensar.", fecha: "2026-04-11T04:00:00-03:00",
        respuestas: [
          { autor: "nurse_valentina", texto: "Martín tenés el horario más raro de toda la plataforma y no lo reconocés.", fecha: "2026-04-11T04:30:00-03:00" },
          { autor: "dj_candombe", texto: "El raro es el resto.", fecha: "2026-04-11T04:35:00-03:00" }
        ]
      }
    ],
    encuesta: {
      pregunta: "Por qué estás despierto a esta hora",
      opciones: [
        { texto: "Trabajo de noche", votos: 891 },
        { texto: "No puedo dormir", votos: 1544 },
        { texto: "Estoy con un bebé", votos: 402 },
        { texto: "Estoy en cualquiera y ya", votos: 1188 }
      ],
      cierra: "2026-04-18T23:59:00-03:00"
    }
  },
  {
    id: 2134,
    autor: "guarda_101",
    fecha: "2025-07-19T18:00:00-03:00",
    texto: "Encuesta de transporte, con toda la autoridad de 20 años arriba de un ómnibus.",
    imagen: null,
    grupo: "mateando",
    likes: 876,
    comentarios: [
      { autor: "taxi_cx_1420", texto: "el que se sienta al lado del pasillo y no se corre cuando entra alguien es lo peor de la sociedad", fecha: "2025-07-19T19:00:00-03:00" },
      { autor: "basquet_aguada_fan", texto: "el que pone la mochila en el asiento de al lado", fecha: "2025-07-19T20:00:00-03:00" },
      { autor: "marce.peluquera", texto: "el que habla por teléfono con el altavoz 😤", fecha: "2025-07-19T21:00:00-03:00",
        respuestas: [
          { autor: "guarda_101", texto: "Marcela, ganaste antes de que cerrara la encuesta. Es ese.", fecha: "2025-07-19T21:30:00-03:00" }
        ]
      }
    ],
    encuesta: {
      pregunta: "El peor pasajero del ómnibus es",
      opciones: [
        { texto: "El del altavoz", votos: 3401 },
        { texto: "El que no se corre del pasillo", votos: 1877 },
        { texto: "El de la mochila gigante", votos: 1233 },
        { texto: "El que toca el timbre 40 veces", votos: 655 }
      ],
      cierra: "2025-07-26T23:59:00-03:00"
    }
  },
  {
    id: 2135,
    autor: "tatu.ink.mvd",
    fecha: "2026-03-08T20:00:00-03:00",
    texto: "gente que se tatúa: cual es la frase más rara que te pidieron?\n\nyo hoy tatué la palabra provisorio. en la muñeca. la persona dijo que le parecia gracioso y honestamente tiene razón",
    imagen: null,
    grupo: "mateando",
    likes: 1543,
    comentarios: [
      { autor: "nurse_valentina", texto: "Un tatuaje que dice provisorio es lo más honesto que escuché en años.", fecha: "2026-03-08T21:00:00-03:00" },
      { autor: "hacker_del_prado", texto: "Yo me quiero tatuar un codigo QR que lleve a un video de un gato. Nadie me lo quiere hacer.", fecha: "2026-03-08T22:00:00-03:00",
        respuestas: [
          { autor: "tatu.ink.mvd", texto: "no te lo hacen porque el QR tatuado no escanea bien, la piel se mueve. no es capricho, es fisica", fecha: "2026-03-08T22:30:00-03:00" },
          { autor: "hacker_del_prado", texto: "Bueno. Ahora sí me quedo tranquilo. Gracias por explicarlo en vez de reírte.", fecha: "2026-03-08T22:45:00-03:00" },
          { autor: "tatu.ink.mvd", texto: "me reí igual, pero después expliqué", fecha: "2026-03-08T23:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2136,
    autor: "mateamargo_87",
    fecha: "2026-01-06T11:00:00-03:00",
    texto: "AVISO DE ADMIN, cortito.\n\nEste grupo tiene 31 mil personas y en enero se pone raro. Recuerden:\n- No se vende nada aca. Hay un grupo entero para eso.\n- Las encuestas son para boludear. Si perdés una encuesta sobre la tortilla, no es una derrota moral.\n- El que se pelea de verdad se va.\n\nSigan boludeando. Es lo unico que pido.",
    imagen: null,
    grupo: "mateando",
    likes: 2103,
    comentarios: [
      { autor: "nurse_valentina", texto: "Confirmo como la otra admin. Borré 40 posts de gente vendiendo cosas en diciembre. Cuarenta.", fecha: "2026-01-06T12:00:00-03:00" },
      { autor: "feriante_tristan", texto: "y a mi me llegan los que quieren boludear. Estamos cruzados", fecha: "2026-01-06T13:00:00-03:00",
        respuestas: [
          { autor: "mateamargo_87", texto: "Tristán, hagamos un canje: yo te mando los vendedores y vos me mandás los graciosos.", fecha: "2026-01-06T13:30:00-03:00" },
          { autor: "feriante_tristan", texto: "hecho", fecha: "2026-01-06T13:35:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2137,
    autor: "elpibe.delcerro",
    fecha: "2026-01-25T17:00:00-03:00",
    texto: "encuesta importante para mi salud mental",
    imagen: null,
    grupo: "mateando",
    likes: 1876,
    comentarios: [
      { autor: "laura.rambla", texto: "Se dice bizcochos. Todos son bizcochos. Después hay tipos de bizcocho.", fecha: "2026-01-25T18:00:00-03:00" },
      { autor: "panaderia_dosorillas", texto: "Confirmamos desde el mostrador: el que pide facturas es de afuera o vio mucha tele.", fecha: "2026-01-25T19:00:00-03:00",
        respuestas: [
          { autor: "elpibe.delcerro", texto: "mi tia dice facturas y es de aca de toda la vida", fecha: "2026-01-25T19:30:00-03:00" },
          { autor: "panaderia_dosorillas", texto: "Entonces su tía vio mucha tele. Con cariño.", fecha: "2026-01-25T20:00:00-03:00" },
          { autor: "pastelera.zuni", texto: "Yo digo masitas y tengo 63 años, asi que hay una tercera opcion que ustedes no contemplaron.", fecha: "2026-01-25T21:00:00-03:00" }
        ]
      }
    ],
    encuesta: {
      pregunta: "Cómo les decís",
      opciones: [
        { texto: "Bizcochos", votos: 4211 },
        { texto: "Facturas", votos: 388 },
        { texto: "Masitas", votos: 522 },
        { texto: "Depende de cuál sea", votos: 1104 }
      ],
      cierra: "2026-02-01T23:59:00-03:00"
    }
  },
  {
    id: 2138,
    autor: "taxi_cx_1420",
    fecha: "2026-02-11T23:30:00-03:00",
    texto: "conversaciones del taxi de hoy:\n\n- una señora me explico 20 minutos por que su yerno no le gusta. bajo y me dijo gracias por escuchar. no dije una palabra en 20 minutos\n- un pibe me pidio que le pusiera una radio de los 80 porque nacio en 2003 y quiere ver de que se trata\n- alguien se olvido los anteojos. son de marco rojo. si sos vos, escribime",
    imagen: null,
    grupo: "mateando",
    likes: 1432,
    comentarios: [
      { autor: "nurse_valentina", texto: "Lo de la señora es literalmente mi trabajo también.", fecha: "2026-02-11T23:50:00-03:00" },
      { autor: "dj_candombe", texto: "¿Qué le pusiste al pibe? Es importante.", fecha: "2026-02-12T01:00:00-03:00",
        respuestas: [
          { autor: "taxi_cx_1420", texto: "una que pasan SIEMPRE. Me dijo que le gusto pero que era muy larga jajaja", fecha: "2026-02-12T07:00:00-03:00" },
          { autor: "elpibe.delcerro", texto: "las canciones de antes duran como 6 minutos, es verdad", fecha: "2026-02-12T10:00:00-03:00" },
          { autor: "dj_candombe", texto: "Porque antes no había que enganchar a nadie en los primeros 8 segundos. Ahí tenés toda la historia de la música en una frase.", fecha: "2026-02-12T11:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2139,
    autor: "basquet_aguada_fan",
    fecha: "2026-03-03T21:00:00-03:00",
    texto: "encuesta HISTORICA",
    imagen: null,
    grupo: "mateando",
    likes: 1123,
    comentarios: [
      { autor: "mateamargo_87", texto: "Leandro no podés poner histórico en una encuesta sobre el asado", fecha: "2026-03-03T21:30:00-03:00",
        respuestas: [
          { autor: "basquet_aguada_fan", texto: "EL ASADO ES HISTORICO POR DEFINICION", fecha: "2026-03-03T21:40:00-03:00" }
        ]
      },
      { autor: "treintaytres_jinete", texto: "el que da vuelta la carne 15 veces no sabe hacer asado y encima molesta", fecha: "2026-03-03T22:00:00-03:00" },
      { autor: "chef_carmelo", texto: "Técnicamente dar vuelta la carne varias veces cocina más parejo. La tradición dice una vez. Las dos cosas son ciertas y por eso se pelean.", fecha: "2026-03-03T23:00:00-03:00",
        respuestas: [
          { autor: "treintaytres_jinete", texto: "vos sos cocinero de restaurante, yo hago asado desde los 12", fecha: "2026-03-04T07:00:00-03:00" },
          { autor: "chef_carmelo", texto: "Y yo hago asado desde los 9 y además soy cocinero. No son cosas opuestas, Ramiro.", fecha: "2026-03-04T09:00:00-03:00" },
          { autor: "treintaytres_jinete", texto: "ta bien, ta bien. Igual una vez sola", fecha: "2026-03-04T10:00:00-03:00" }
        ]
      }
    ],
    encuesta: {
      pregunta: "Cuántas veces se da vuelta la carne",
      opciones: [
        { texto: "Una sola vez, y punto", votos: 2988 },
        { texto: "Las que haga falta", votos: 1877 },
        { texto: "Yo no toco nada, el asador es otro", votos: 1344 },
        { texto: "Depende del corte", votos: 902 }
      ],
      cierra: "2026-03-10T23:59:00-03:00"
    }
  },
  {
    id: 2140,
    autor: "laura.rambla",
    fecha: "2026-03-21T16:00:00-03:00",
    texto: "Confesión de maestra: cuando leo este grupo corrijo mentalmente todo y a veces me duele físicamente.\n\nPero también aprendí algo en estos años: se entiende igual. La ortografía es una cortesía, no una condición para que alguien tenga razón.\n\nDicho esto: ahí va con hache y ay es de dolor. Es lo único que pido. Una cosa sola.",
    imagen: null,
    grupo: "mateando",
    likes: 2341,
    comentarios: [
      { autor: "elpibe.delcerro", texto: "ay laura perdon", fecha: "2026-03-21T17:00:00-03:00",
        respuestas: [
          { autor: "laura.rambla", texto: "Ese está bien usado, Brian. Ese es de dolor.", fecha: "2026-03-21T17:30:00-03:00" },
          { autor: "elpibe.delcerro", texto: "jajajaja fue sin querer", fecha: "2026-03-21T17:35:00-03:00" }
        ]
      },
      { autor: "dona_elsa_47", texto: "YO ESCRIBO EN MAYUSCULA PORQUE NO VEO. NO ES QUE ESTOY GRITANDO HIJA", fecha: "2026-03-21T18:00:00-03:00",
        respuestas: [
          { autor: "laura.rambla", texto: "Elsa, ya lo sé y nunca le dije nada por eso. Se puede agrandar la letra del teléfono, ¿quiere que le explique?", fecha: "2026-03-21T18:30:00-03:00" },
          { autor: "dona_elsa_47", texto: "SI POR FAVOR", fecha: "2026-03-21T19:00:00-03:00" },
          { autor: "hacker_del_prado", texto: "Yo le mando un mensaje con los pasos, Elsa. Con fotos de cada pantalla.", fecha: "2026-03-21T19:30:00-03:00" },
          { autor: "dona_elsa_47", texto: "que buenos son todos. amen", fecha: "2026-03-22T10:00:00-03:00" },
          { autor: "laura.rambla", texto: "Elsa está escribiendo en minúscula. Mauro, sos un héroe.", fecha: "2026-03-22T11:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2141,
    autor: "nurse_valentina",
    fecha: "2026-04-08T04:00:00-03:00",
    texto: "Cosas que solo entiende el que trabajó de noche:\n\n- El almuerzo a las 3 AM no es raro, es el almuerzo.\n- Los domingos no existen.\n- Cuando la gente dice mañana, vos no sabés a qué mañana se refiere.\n- Dormir de día es dormir peor, siempre, aunque cierres todo.\n- El sol de las 7 AM cuando salís es enemigo directo.",
    imagen: null,
    grupo: "mateando",
    likes: 1987,
    comentarios: [
      { autor: "remis_nocturno_mvd", texto: "Lo del sol de las 7 lo firmo con sangre. Manejo con anteojos oscuros al amanecer y la gente me mira raro.", fecha: "2026-04-08T04:30:00-03:00" },
      { autor: "tambero_sanjose", texto: "Yo soy al reves: me levanto 4:30 y el sol de las 7 es lo mejor del dia.", fecha: "2026-04-08T05:00:00-03:00",
        respuestas: [
          { autor: "nurse_valentina", texto: "Ernesto vos y yo nos cruzamos en la vereda y ninguno entiende al otro.", fecha: "2026-04-08T05:30:00-03:00" },
          { autor: "tambero_sanjose", texto: "Nos cruzamos y los dos estamos cansados, eso si", fecha: "2026-04-08T05:45:00-03:00" }
        ]
      },
      { autor: "guarda_101", texto: "Lo de que los domingos no existen es lo que más cuesta explicarle a la familia.", fecha: "2026-04-08T06:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2142,
    autor: "marce.peluquera",
    fecha: "2026-04-26T13:00:00-03:00",
    texto: "encuesta de peluquería que en realidad es una encuesta sobre la vida 💇",
    imagen: null,
    grupo: "mateando",
    likes: 1345,
    comentarios: [
      { autor: "tatu.ink.mvd", texto: "el que dice hacé lo que quieras y despues se enoja es un clasico de mi rubro también", fecha: "2026-04-26T14:00:00-03:00" },
      { autor: "nurse_valentina", texto: "Yo digo cortame poco y me refiero a poco de verdad. Nadie me cree nunca.", fecha: "2026-04-26T15:00:00-03:00",
        respuestas: [
          { autor: "marce.peluquera", texto: "es que todo el mundo dice poco y quiere decir 5 centímetros jajaja aprendimos a desconfiar", fecha: "2026-04-26T15:30:00-03:00" }
        ]
      }
    ],
    encuesta: {
      pregunta: "Cuando vas a cortarte el pelo",
      opciones: [
        { texto: "Llevo foto", votos: 1877 },
        { texto: "Digo hacé lo que quieras y después lloro", votos: 2344 },
        { texto: "Siempre el mismo corte hace 20 años", votos: 1988 },
        { texto: "Me corto solo en casa", votos: 611 }
      ],
      cierra: "2026-05-03T23:59:00-03:00"
    }
  },
  {
    id: 2143,
    autor: "mateamargo_87",
    fecha: "2026-05-15T19:00:00-03:00",
    texto: "Encuesta que va a terminar mal y lo se.",
    imagen: null,
    grupo: "mateando",
    likes: 2456,
    comentarios: [
      { autor: "sofi.tortasfritas", texto: "Con dulce de leche. Y no es negociable. La torta frita con azucar es para los q tienen miedo.", fecha: "2026-05-15T20:00:00-03:00" },
      { autor: "pastelera.zuni", texto: "Sola. Recien hecha, quemando, sola. Todo lo demás es decoracion.", fecha: "2026-05-15T21:00:00-03:00",
        respuestas: [
          { autor: "sofi.tortasfritas", texto: "Zunilda, con todo el respeto que le tengo, y le tengo mucho: no.", fecha: "2026-05-15T21:30:00-03:00" },
          { autor: "pastelera.zuni", texto: "Sofia, hijita, hago tortas fritas desde antes de que existiera tu canal.", fecha: "2026-05-15T22:00:00-03:00" },
          { autor: "sofi.tortasfritas", texto: "Y por eso la respeto. Pero igual no.", fecha: "2026-05-15T22:15:00-03:00" },
          { autor: "elpibe.delcerro", texto: "esto es lo mas tenso que vi en este grupo y es sobre tortas fritas jajajaj", fecha: "2026-05-15T23:00:00-03:00" },
          { autor: "pastelera.zuni", texto: "Nos queremos igual. Pero yo tengo razon.", fecha: "2026-05-16T09:00:00-03:00" }
        ]
      }
    ],
    encuesta: {
      pregunta: "La torta frita se come",
      opciones: [
        { texto: "Sola y caliente", votos: 3122 },
        { texto: "Con dulce de leche", votos: 2877 },
        { texto: "Con azúcar arriba", votos: 1455 },
        { texto: "Con queso y me miran mal", votos: 388 }
      ],
      cierra: "2026-05-22T23:59:00-03:00"
    }
  },
  {
    id: 2144,
    autor: "dj_candombe",
    fecha: "2026-06-02T02:00:00-03:00",
    texto: "Pregunta de madrugada para la gente que anda por acá a esta hora.\n\n¿Cuál es la canción que si empieza a sonar en cualquier lado, te tenés que parar a escucharla? No la favorita. La que te secuestra.\n\nYo tengo una y no la voy a decir porque me da vergüenza.",
    imagen: null,
    grupo: "mateando",
    likes: 1654,
    comentarios: [
      { autor: "nurse_valentina", texto: "La mía es una que ponían en un boliche al que iba a los 19. No es buena. No importa.", fecha: "2026-06-02T02:30:00-03:00" },
      { autor: "taxi_cx_1420", texto: "una que cantaba mi viejo lavando el auto. Ni se como se llama, la reconozco por el silbido", fecha: "2026-06-02T03:00:00-03:00",
        respuestas: [
          { autor: "dj_candombe", texto: "Wilson, esa es la mejor respuesta posible y no dijiste ni el nombre.", fecha: "2026-06-02T03:30:00-03:00" },
          { autor: "laura.rambla", texto: "Todos tenemos una del padre lavando algo. Es un fenómeno nacional.", fecha: "2026-06-02T08:00:00-03:00" }
        ]
      },
      { autor: "elpibe.delcerro", texto: "martin deci la tuya, nadie se va a reir", fecha: "2026-06-02T10:00:00-03:00",
        respuestas: [
          { autor: "dj_candombe", texto: "Ni loco.", fecha: "2026-06-02T11:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2145,
    autor: "elpibe.delcerro",
    fecha: "2026-06-19T22:00:00-03:00",
    texto: "gente de 40 y pico: cuando eran chicos habia un ruido q hacia la compu pa conectarse a internet? mi jefe en la utu lo imito hoy y todos nos reimos pero no se si existio de verdad o me esta cargando",
    imagen: null,
    grupo: "mateando",
    likes: 2103,
    comentarios: [
      { autor: "hacker_del_prado", texto: "Existió y era horrible y lo extrañamos. Era el módem negociando con la central.", fecha: "2026-06-19T22:30:00-03:00" },
      { autor: "mateamargo_87", texto: "Y si alguien levantaba el teléfono en la casa, se cortaba todo. TODO.", fecha: "2026-06-19T23:00:00-03:00",
        respuestas: [
          { autor: "elpibe.delcerro", texto: "PERDON q", fecha: "2026-06-19T23:15:00-03:00" },
          { autor: "nurse_valentina", texto: "Y no podías usar el teléfono mientras estabas conectado. Era uno o lo otro.", fecha: "2026-06-19T23:30:00-03:00" },
          { autor: "elpibe.delcerro", texto: "o sea q vivian peleando en la casa por eso", fecha: "2026-06-19T23:45:00-03:00" },
          { autor: "mateamargo_87", texto: "Brian acabás de entender los años 90 mejor que ningún documental.", fecha: "2026-06-20T08:00:00-03:00" }
        ]
      },
      { autor: "elabuelo_radioCX8", texto: "Antes de eso nos comunicábamos por radio y no se cortaba nunca. Cambio y fuera.", fecha: "2026-06-20T09:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2146,
    autor: "nurse_valentina",
    fecha: "2026-07-04T05:00:00-03:00",
    texto: "Encuesta para saber quienes somos realmente.",
    imagen: null,
    grupo: "mateando",
    likes: 1543,
    comentarios: [
      { autor: "guarda_101", texto: "Yo soy de los que llegan 20 minutos antes y espero afuera. Es una enfermedad.", fecha: "2026-07-04T06:00:00-03:00" },
      { autor: "marce.peluquera", texto: "yo llego tarde SIEMPRE y ya avisé a todo el mundo que soy así, entonces técnicamente no llego tarde", fecha: "2026-07-04T09:00:00-03:00",
        respuestas: [
          { autor: "laura.rambla", texto: "Marcela, eso no es cómo funciona.", fecha: "2026-07-04T10:00:00-03:00" },
          { autor: "marce.peluquera", texto: "en mi cabeza si 😇", fecha: "2026-07-04T10:30:00-03:00" }
        ]
      }
    ],
    encuesta: {
      pregunta: "Vos sos de los que",
      opciones: [
        { texto: "Llega 20 minutos antes", votos: 1877 },
        { texto: "Llega justo", votos: 2011 },
        { texto: "Llega tarde y avisa", votos: 1655 },
        { texto: "Llega tarde y no avisa", votos: 733 }
      ],
      cierra: "2026-07-11T23:59:00-03:00"
    }
  },
  {
    id: 2147,
    autor: "taxi_cx_1420",
    fecha: "2026-07-21T21:00:00-03:00",
    texto: "hoy me subio una pareja discutiendo si el pan de la milanesa lleva pan o no.\n\ntarde 4 cuadras en entender que hablaban del sandwich de milanesa y no de la milanesa.\n\nseguian discutiendo cuando bajaron. les deseo lo mejor.",
    imagen: null,
    grupo: "mateando",
    likes: 1876,
    comentarios: [
      { autor: "chef_carmelo", texto: "¿Y qué decían? Necesito saber los argumentos.", fecha: "2026-07-21T22:00:00-03:00",
        respuestas: [
          { autor: "taxi_cx_1420", texto: "el decia que el pan de la milanesa tiene que ser flauta y ella que un sandwich de milanesa en flauta es un crimen", fecha: "2026-07-21T22:30:00-03:00" },
          { autor: "chef_carmelo", texto: "Ella tiene razón y no está ni cerca. Es pan francés y se acabó.", fecha: "2026-07-21T23:00:00-03:00" },
          { autor: "sofi.tortasfritas", texto: "Ignacio hoy estás particularmente irritable.", fecha: "2026-07-22T08:00:00-03:00" },
          { autor: "chef_carmelo", texto: "Es julio, Sofía. En julio soy peor.", fecha: "2026-07-22T09:00:00-03:00" }
        ]
      },
      { autor: "basquet_aguada_fan", texto: "esta discusion es HISTORICA", fecha: "2026-07-22T10:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2148,
    autor: "mateamargo_87",
    fecha: "2026-07-29T18:00:00-03:00",
    texto: "Encuesta de invierno. Sean sinceros que nadie los ve.",
    imagen: null,
    grupo: "mateando",
    likes: 1988,
    comentarios: [
      { autor: "nurse_valentina", texto: "Estufa hasta que me quedo dormida y me despierto a las 4 con la garganta seca, todos los inviernos, sin aprender nunca.", fecha: "2026-07-29T19:00:00-03:00" },
      { autor: "dona_elsa_47", texto: "yo tengo bolsa de agua caliente. la de goma. la tengo hace 30 años", fecha: "2026-07-29T20:00:00-03:00",
        respuestas: [
          { autor: "caro.veterinaria", texto: "Elsa, una bolsa de goma de 30 años se puede romper con el agua hirviendo. Fíjese si está agrietada, en serio. Es de las cosas que veo mal terminadas.", fecha: "2026-07-29T21:00:00-03:00" },
          { autor: "dona_elsa_47", texto: "ay hija tenes razón, está media dura", fecha: "2026-07-29T21:30:00-03:00" },
          { autor: "marce.peluquera", texto: "elsa yo te compro una nueva y te la llevo el sabado, ni discutas", fecha: "2026-07-29T22:00:00-03:00" },
          { autor: "dona_elsa_47", texto: "que gente buena hay en este grupo. amen", fecha: "2026-07-30T09:00:00-03:00" }
        ]
      }
    ],
    encuesta: {
      pregunta: "Para el frío de la noche vos usás",
      opciones: [
        { texto: "Estufa toda la noche", votos: 1233 },
        { texto: "Cuatro frazadas y a aguantar", votos: 2988 },
        { texto: "Bolsa de agua caliente", votos: 1544 },
        { texto: "El perro o el gato arriba", votos: 2311 }
      ],
      cierra: "2026-08-05T23:59:00-03:00"
    }
  },
  {
    id: 2149,
    autor: "nurse_valentina",
    fecha: "2026-08-04T03:00:00-03:00",
    texto: "Tres de la mañana. Guardia tranquila por primera vez en tres semanas.\n\nMe puse a leer el grupo desde el principio y encontré un post mío de 2020 preguntando si el mate va dulce o amargo.\n\nSeis años boludeando con gente que en su mayoría no conozco en persona. Y sin embargo sé a qué hora se levanta el tambero, sé que Wilson maneja de noche, sé que Elsa escribe en mayúscula porque no ve.\n\nNo sé qué es esto pero está bueno.",
    imagen: null,
    grupo: "mateando",
    likes: 2891,
    comentarios: [
      { autor: "tambero_sanjose", texto: "4:30. Y usted a las 3 leyendo. Estamos todos mal.", fecha: "2026-08-04T04:35:00-03:00" },
      { autor: "taxi_cx_1420", texto: "yo, estoy parado en la esquina leyendo esto. La calle tiene luz ahora, larga historia", fecha: "2026-08-04T03:30:00-03:00" },
      { autor: "dona_elsa_47", texto: "yo ya escribo en minuscula gracias a mauro. buenas noches a todos, que descansen. amen", fecha: "2026-08-04T05:00:00-03:00",
        respuestas: [
          { autor: "nurse_valentina", texto: "Elsa, ¿qué hace despierta a las 5?", fecha: "2026-08-04T05:10:00-03:00" },
          { autor: "dona_elsa_47", texto: "a mi edad se duerme poco hija. y este grupo es lo que miro cuando me despierto", fecha: "2026-08-04T05:30:00-03:00" },
          { autor: "mateamargo_87", texto: "Y ahí esta para que sirve un grupo donde no se habla de nada.", fecha: "2026-08-04T08:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },

  /* ============ mascotas (2160-2187) ============ */

  {
    id: 2160,
    autor: "caro.veterinaria",
    fecha: "2019-10-30T10:00:00-03:00",
    texto: "FIJADO. Cómo se publica un animal perdido para que sirva de algo.\n\nZONA: calle y barrio, o el cruce más cercano. No alcanza con Montevideo.\nHORA: aproximada, pero decila. Cambia todo el radio de búsqueda.\nDESCRIPCIÓN: tamaño, color, pelo largo o corto, collar, si está castrado, si tiene chip.\nFOTO: de cuerpo entero y de la cara. Una sola foto de perfil no alcanza.\nSEÑAL PARTICULAR: guardate una para vos y no la publiques. Una mancha, una cicatriz, algo. Sirve para confirmar que quien te llama es el dueño.\n\nLas primeras 48 horas son las que importan. Después el animal se aleja del radio y todo se complica.",
    imagen: null,
    grupo: "mascotas",
    likes: 1876,
    comentarios: [
      { autor: "laura.rambla", texto: "Lo de guardarse una seña particular es lo que menos se hace y lo que más problemas evita. Lo repetimos cada tanto.", fecha: "2019-10-30T11:00:00-03:00" },
      { autor: "mama_de_tres_mvd", texto: "gracias!! yo perdi una gata en 2018 y no puse ni la zona, ahora entiendo por qué nadie me ayudó", fecha: "2019-10-30T14:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2161,
    autor: "vecina.malvin.rosa",
    fecha: "2020-07-19T18:00:00-03:00",
    texto: "PERDIDO. Perro mestizo, macho, tamaño mediano, pelo corto marrón con el pecho blanco.\n\nZONA: Malvín Norte, alrededores de la placita, sobre Camino Carrasco.\nHORA: se escapó hoy alrededor de las 15:30, cuando llegó el gas y quedó el portón abierto.\nSEÑAS: collar rojo sin chapa. Es viejo, camina despacio, no muerde pero se asusta.\n\nSe llama Tito y responde. Si lo ven, no corran atrás porque se asusta más. Llamen y agáchense.",
    imagen: null,
    grupo: "mascotas",
    likes: 512,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Rosario, el consejo de agacharse es correcto y poca gente lo sabe. Un perro asustado lee la persona parada y corriendo como amenaza.", fecha: "2020-07-19T18:30:00-03:00" },
      { autor: "mama_de_tres_mvd", texto: "comparto en todos lados!!", fecha: "2020-07-19T19:00:00-03:00" },
      { autor: "dona_elsa_47", texto: "QUE DIOS LO TRAIGA DE VUELTA. AMEN", fecha: "2020-07-19T20:00:00-03:00",
        respuestas: [
          { autor: "vecina.malvin.rosa", texto: "APARECIÓ. Estaba a tres cuadras, sentado en la puerta de una panadería. Una señora le había dado agua y esperaba. Gracias a todos.", fecha: "2020-07-20T09:00:00-03:00" },
          { autor: "dona_elsa_47", texto: "GLORIA A DIOS!!! AMEN", fecha: "2020-07-20T09:30:00-03:00" },
          { autor: "caro.veterinaria", texto: "Perfecto. Y avisaste, que es lo que casi nadie hace. Gracias.", fecha: "2020-07-20T10:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2162,
    autor: "mama_alerta_uy",
    fecha: "2026-01-22T21:00:00-03:00",
    texto: "CHICAS ATENCION!!! me dijeron que andan robando perros para peleas en la zona de Las Piedras. TENGAN CUIDADO, NO DEJEN LOS PERROS EN EL FONDO!!!",
    imagen: null,
    grupo: "mascotas",
    likes: 234,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Verónica, ¿quién te lo dijo y cuándo? Pregunto en serio, no para bardearte. Este mensaje aparece cada seis meses desde hace años y nunca hubo un caso concreto en el grupo.", fecha: "2026-01-22T21:30:00-03:00",
        respuestas: [
          { autor: "mama_alerta_uy", texto: "me lo mandaron por whatsapp", fecha: "2026-01-22T21:45:00-03:00" },
          { autor: "caro.veterinaria", texto: "Ta. Mirá: los perros se pierden porque se escapan, porque quedó el portón abierto, porque hubo fuegos artificiales. Eso pasa todas las semanas. Lo otro no lo vi nunca en 12 años de consultorio.\n\nY el problema es que la gente se asusta con esto y no se asusta con los fuegos artificiales, que es lo que sí les hace perder el perro.", fecha: "2026-01-22T22:00:00-03:00" },
          { autor: "laura.rambla", texto: "Esta respuesta debería estar fijada.", fecha: "2026-01-22T22:30:00-03:00" },
          { autor: "mama_alerta_uy", texto: "perdon, borro el post?", fecha: "2026-01-22T23:00:00-03:00" },
          { autor: "caro.veterinaria", texto: "No lo borres, dejá la conversación. Sirve más así.", fecha: "2026-01-22T23:15:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2163,
    autor: "laura.rambla",
    fecha: "2021-12-31T23:00:00-03:00",
    texto: "AVISO DE FIN DE AÑO. Lo publico todos los 31 y lo voy a seguir publicando.\n\nEsta noche se pierden más animales que en todo el resto del año junto. Los fuegos artificiales los aterran, saltan paredes que nunca saltaron y corren hasta que se cansan, a veces treinta cuadras.\n\nQué hacer:\n- Adentro, en la habitación más interna, con la persiana baja.\n- Radio o televisión encendida, con volumen normal.\n- NO los saques a ver los fuegos. Nunca.\n- Chapa con teléfono puesta HOY, aunque nunca la use.\n- Si tenés un animal muy ansioso, hablalo con tu veterinario ANTES, no a las 23:30.\n\nMañana este grupo se va a llenar de posts. Ojalá me equivoque.",
    imagen: null,
    grupo: "mascotas",
    likes: 3421,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Todo correcto. Agrego una: si se escapa, buscá en dirección contraria al ruido, no alrededor de tu casa. Corren huyendo, no dando vueltas.", fecha: "2021-12-31T23:20:00-03:00" },
      { autor: "nurse_valentina", texto: "Yo estoy de guardia esta noche y tambien nos llenamos. Es la misma noche para todos.", fecha: "2021-12-31T23:40:00-03:00" },
      { autor: "vecina.malvin.rosa", texto: "Compartido en el grupo del barrio. Gracias Laura.", fecha: "2022-01-01T00:30:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2164,
    autor: "mama_de_tres_mvd",
    fecha: "2026-05-14T16:00:00-03:00",
    texto: "ENCONTRADO. gato naranja, joven, muy manso, apareció en el fondo de casa hace dos dias y no se va.\n\nZONA: Maroñas, cerca de la cancha.\nHORA: lo vi por primera vez el jueves de mañana.\nSEÑAS: naranja con rayas, tiene una oreja con un corte chiquito. esta flaco pero come bien.\n\nlo tengo adentro para que no se pierda de nuevo. si es de alguien, avise.",
    imagen: null,
    grupo: "mascotas",
    likes: 289,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Andrea, el corte en la oreja puede ser marca de castración de una campaña. Si es así, es un gato de colonia y probablemente tenga quien lo alimenta en la calle. Fijate si alguien de tu cuadra le pone comida.", fecha: "2026-05-14T17:00:00-03:00",
        respuestas: [
          { autor: "mama_de_tres_mvd", texto: "uh no sabia eso. le pregunto a la vecina de la esquina que tiene como 6 gatos", fecha: "2026-05-14T17:30:00-03:00" },
          { autor: "mama_de_tres_mvd", texto: "era de ella!! bueno, no de ella, ella lo alimenta. Se llama Naranja, muy original jajaja. Lo dejo salir de nuevo entonces", fecha: "2026-05-15T10:00:00-03:00" },
          { autor: "caro.veterinaria", texto: "Perfecto. Ese gato tiene su vida armada, mejor no cambiársela.", fecha: "2026-05-15T11:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2165,
    autor: "elrusodelquiosco",
    fecha: "2026-05-27T09:00:00-03:00",
    texto: "Hay un perro grande blanco y negro durmiendo en la puerta del quiosco hace 4 dias. No se va. Le doy agua y algo de comer.\n\nZONA: Goes, sobre la avenida.\nSEÑAS: grande, pelo corto, blanco con manchas negras, tiene collar de cuero marron sin chapa. Muy tranquilo, no ladra.\n\nAlguien lo perdio seguro, un perro asi no anda solo.",
    imagen: null,
    grupo: "mascotas",
    likes: 445,
    comentarios: [
      { autor: "mama_de_tres_mvd", texto: "es mi perro!!! se llama Rocky!!", fecha: "2026-05-27T09:30:00-03:00" },
      { autor: "mama_alerta_uy", texto: "ese es igual al de mi cuñada que se perdio en agosto", fecha: "2026-05-27T09:45:00-03:00" },
      { autor: "marce.peluquera", texto: "ay yo tengo una clienta que perdió uno así!! le mando la foto", fecha: "2026-05-27T10:00:00-03:00" },
      { autor: "pintor_rodri", texto: "ese perro lo vi en la teja el mes pasado, era de un tipo que vive en el pasaje", fecha: "2026-05-27T10:15:00-03:00",
        respuestas: [
          { autor: "caro.veterinaria", texto: "Paren todos un segundo, por favor. Esto es exactamente lo que pasa con los perros blancos y negros de tamaño grande: son el 30% de los perros del país.\n\nSergio: no se lo entregues a nadie que solo diga es mío. Pedile que te diga algo que no está en la foto. El sexo del animal, si está castrado, alguna marca que no se vea.\n\nAndrea: si es tuyo, decime de qué sexo es sin mirar la foto.", fecha: "2026-05-27T10:30:00-03:00" },
          { autor: "mama_de_tres_mvd", texto: "eh... macho?", fecha: "2026-05-27T10:45:00-03:00" },
          { autor: "elrusodelquiosco", texto: "es hembra", fecha: "2026-05-27T10:50:00-03:00" },
          { autor: "mama_de_tres_mvd", texto: "ay perdon, me confundí, es que se parece un monton al mío", fecha: "2026-05-27T11:00:00-03:00" },
          { autor: "caro.veterinaria", texto: "No pasa nada. Todos queremos que sea el nuestro. Por eso existe el filtro.", fecha: "2026-05-27T11:15:00-03:00" }
        ]
      },
      { autor: "laura.rambla", texto: "Cuatro personas distintas dijeron que era suyo en cuarenta minutos. Esto es el ejemplo perfecto de por qué la regla 5 existe.", fecha: "2026-05-27T12:00:00-03:00",
        respuestas: [
          { autor: "elrusodelquiosco", texto: "aparecio la dueña. Vive a 11 cuadras, se llama la perra Nieve, es hembra, esta castrada y tiene una cicatriz en la pata de atras que no se ve en la foto. Me dijo las tres cosas sin que le preguntara", fecha: "2026-05-28T18:00:00-03:00" },
          { autor: "caro.veterinaria", texto: "Ahí está. Perfecto, Sergio.", fecha: "2026-05-28T18:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2166,
    autor: "caro.veterinaria",
    fecha: "2023-03-08T12:00:00-03:00",
    texto: "Consulta que me hacen mucho acá, la contesto de una vez.\n\nEL CHIP NO ES UN GPS. No dice dónde está el animal. Es un número que se lee con un lector, en una veterinaria o en un refugio, y ese número está asociado a tus datos en un registro.\n\nSirve muchísimo, pero solo si el animal llega a un lugar con lector Y si vos mantenés tus datos actualizados. Si te mudaste y cambiaste de teléfono, el chip tiene el número viejo y no sirve para nada.\n\nActualicen los datos. Es gratis y lleva cinco minutos.",
    imagen: null,
    grupo: "mascotas",
    likes: 2103,
    comentarios: [
      { autor: "laura.rambla", texto: "Yo pensé toda la vida que era un GPS. En serio. Y soy maestra.", fecha: "2023-03-08T13:00:00-03:00",
        respuestas: [
          { autor: "caro.veterinaria", texto: "Laura, lo piensa la mitad de la gente que entra al consultorio. Por eso lo escribo.", fecha: "2023-03-08T13:30:00-03:00" }
        ]
      },
      { autor: "hacker_del_prado", texto: "Además un GPS necesita batería. Un chip del tamaño de un grano de arroz no tiene dónde meterla. Es física, no es maldad de nadie.", fecha: "2023-03-08T14:00:00-03:00" },
      { autor: "vecina.malvin.rosa", texto: "Acabo de llamar para actualizar mis datos. Tenía un teléfono de 2017.", fecha: "2023-03-08T15:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2167,
    autor: "marce.peluquera",
    fecha: "2026-06-15T19:00:00-03:00",
    texto: "PERDIDA. gata siamesa, hembra, 3 años.\n\nZONA: Sayago, entre la peluqueria y mi casa, sobre la calle principal.\nHORA: entre las 14 y las 17 de hoy. dejé la ventana abierta por el olor de la tintura 😭\nSEÑAS: siamesa clasica, ojos azules, tiene el collar celeste con cascabel.\n\nse llama Wanda. es re miedosa, no se va a acercar a nadie. si la ven avisen y no la persigan porfa.",
    imagen: null,
    grupo: "mascotas",
    likes: 678,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Marcela: los gatos que se escapan por primera vez casi nunca se van lejos. En el 80% de los casos están a menos de 5 casas, escondidos y quietos, muchas veces en el mismo terreno.\n\nBuscá de noche, con linterna, en silencio, mirando debajo de autos y en el fondo de los vecinos. Y llevá su comida seca en el pote, el ruido del pote la va a hacer salir antes que tu voz.", fecha: "2026-06-15T19:30:00-03:00",
        respuestas: [
          { autor: "marce.peluquera", texto: "voy a hacer eso ahora mismo", fecha: "2026-06-15T19:45:00-03:00" },
          { autor: "marce.peluquera", texto: "ESTABA ARRIBA DEL TECHO DEL GALPÓN DEL VECINO. dos casas. sonó el pote y maulló. GRACIAS CARO 😭😭", fecha: "2026-06-15T22:30:00-03:00" },
          { autor: "caro.veterinaria", texto: "Siempre es el pote. Nunca falla.", fecha: "2026-06-15T22:45:00-03:00" },
          { autor: "laura.rambla", texto: "Este hilo es un manual. Lo voy a fijar una semana.", fecha: "2026-06-16T08:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2168,
    autor: "dona_elsa_47",
    fecha: "2024-01-02T10:00:00-03:00",
    texto: "VECINOS MI PERRITA SE FUE ANOCHE CON LOS FUEGOS. SE LLAMA LUNA.\n\nZONA: LA TEJA, POR LA CALLE DE LA IGLESIA.\nHORA: A LAS 12 DE LA NOCHE JUSTO.\nES CHIQUITA, MARRON CLARITO, VIEJITA COMO YO, TIENE 13 AÑOS Y NO OYE BIEN.\n\nPOR FAVOR AYUDENME. ES LO UNICO QUE TENGO.",
    imagen: null,
    grupo: "mascotas",
    likes: 1876,
    comentarios: [
      { autor: "laura.rambla", texto: "Elsa, tranquila. Vamos a buscarla. ¿Alguien de La Teja puede dar una vuelta esta mañana?", fecha: "2024-01-02T10:15:00-03:00" },
      { autor: "murga_la_reculada", texto: "Salimos cuatro de la murga ahora mismo. Damos vuelta el barrio entero.", fecha: "2024-01-02T10:30:00-03:00" },
      { autor: "bomberito_ruiz", texto: "Estoy franco. Salgo en la moto y recorro las bocacalles hacia el arroyo, que es para donde corren huyendo del ruido.", fecha: "2024-01-02T10:45:00-03:00" },
      { autor: "caro.veterinaria", texto: "Elsa, un dato importante: como no oye bien, no va a responder al llamado. Hay que buscarla con los ojos, no con la voz. Y es vieja, así que no llegó lejos. Busquen en fondos, debajo de autos y en cualquier lugar cerrado y oscuro.", fecha: "2024-01-02T11:00:00-03:00",
        respuestas: [
          { autor: "elpibe.delcerro", texto: "LA ENCONTRAMOS. estaba abajo de un auto en la esquina de la panaderia, temblando. la tengo alzada", fecha: "2024-01-02T12:40:00-03:00" },
          { autor: "dona_elsa_47", texto: "GRACIAS DIOS MIO. GRACIAS BRIAN. GRACIAS A TODOS. NO SE COMO AGRADECERLES. AMEN AMEN AMEN", fecha: "2024-01-02T12:50:00-03:00" },
          { autor: "caro.veterinaria", texto: "Traémela igual esta semana, Elsa, sin cargo. Una perra de 13 años con ese susto conviene revisarla.", fecha: "2024-01-02T13:00:00-03:00" },
          { autor: "murga_la_reculada", texto: "Dos horas y media. Este grupo es una cosa seria.", fecha: "2024-01-02T13:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2169,
    autor: "caro.veterinaria",
    fecha: "2026-06-11T11:00:00-03:00",
    texto: "Sobre los avisos de perro encontrado y las recompensas.\n\nNo publiquen el monto de la recompensa en el post. Lo digo por experiencia, no por teoría.\n\nCuando aparece un número, empiezan a aparecer personas que dicen tenerlo y piden que les mandes algo por adelantado para el traslado, o que te encuentres en un lugar raro. Nunca tienen el animal.\n\nPoné se recompensa, sin monto. El que de verdad lo encontró te va a llamar igual, y en general no quiere plata.",
    imagen: null,
    grupo: "mascotas",
    likes: 1544,
    comentarios: [
      { autor: "contadora.gimenez", texto: "Es el mismo patrón que vemos en Compro y Vendo: alguien que pide plata por adelantado sobre algo que no puede mostrar. Cambia el objeto, no cambia el método.", fecha: "2026-06-11T12:00:00-03:00" },
      { autor: "mama_de_tres_mvd", texto: "a una amiga le pasó, le pidieron para el taxi y nunca aparecio nadie", fecha: "2026-06-11T13:00:00-03:00",
        respuestas: [
          { autor: "caro.veterinaria", texto: "Exactamente eso. Y la persona ya está desesperada, entonces paga.", fecha: "2026-06-11T13:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2170,
    autor: "vecina.malvin.rosa",
    fecha: "2024-11-05T20:00:00-03:00",
    texto: "PERDIDO hace 9 días. No voy a dejar de publicar.\n\nPerro mestizo, macho, mediano, pelo corto marrón con pecho blanco. Es el mismo Tito de 2020, ahora tiene 12 años.\n\nZONA: Malvin Norte. Se fue el 27 de octubre a las 19 aproximadamente.\nSEÑAS: camina despacio de la pata trasera derecha. Collar rojo, esta vez con chapa.\n\nRecorrí 40 cuadras. Puse 200 carteles. Fui a dos refugios. Nada.\n\nSé que a los 12 años y con esa pata no fue lejos. Y eso es lo que más miedo me da.",
    imagen: null,
    grupo: "mascotas",
    likes: 892,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Rosario, avisé a las cinco veterinarias de la zona con la descripción. Si entra, sabemos.", fecha: "2024-11-05T20:30:00-03:00" },
      { autor: "laura.rambla", texto: "Rosario, estoy con vos. Mañana recorro Buceo y Malvín de mañana.", fecha: "2024-11-05T21:00:00-03:00" },
      { autor: "dona_elsa_47", texto: "REZO TODAS LAS NOCHES POR TITO. AMEN", fecha: "2024-11-05T22:00:00-03:00" },
      { autor: "mama_de_tres_mvd", texto: "sigo compartiendo todos los dias", fecha: "2024-11-06T09:00:00-03:00",
        respuestas: [
          { autor: "vecina.malvin.rosa", texto: "Gracias. En serio, gracias a todos.", fecha: "2024-11-06T10:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2171,
    autor: "vecina.malvin.rosa",
    fecha: "2025-01-10T18:00:00-03:00",
    texto: "Dos meses y medio de Tito.\n\nNo apareció. No va a aparecer, creo. Lo escribo para dejar de escribirlo.\n\nLo que sí quiero decir: hubo gente de este grupo q recorrió calles por un perro q no era suyo, en enero, con 35 grados. Una señora de Buceo me llamó tres veces con falsas alarmas y cada vez fui corriendo y cada vez me dio pena por ella más que por mí.\n\nNo todos los casos terminan bien. Este no termino. Pero no estuve sola y eso también cuenta.\n\nGracias. Y no publiquen nada abajo de este post, por favor. No sé si lo voy a poder leer.",
    imagen: null,
    grupo: "mascotas",
    likes: 2891,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Te abrazo, Rosario. Hiciste todo lo que se podía hacer y un poco más.", fecha: "2025-01-10T19:00:00-03:00" },
      { autor: "laura.rambla", texto: "Perdón que escriba igual. Un abrazo enorme.", fecha: "2025-01-10T19:30:00-03:00" },
      { autor: "elrusodelquiosco", texto: "Rosario, un abrazo grande de aca del quiosco", fecha: "2025-01-10T20:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2172,
    autor: "caro.veterinaria",
    fecha: "2026-03-22T10:00:00-03:00",
    texto: "Consulta profesional que aparece mucho: mi perro come pasto, está enfermo?\n\nNo necesariamente. Los perros comen pasto por muchas razones y la mayoría son normales. Aburrimiento, textura, hábito. A veces sí es porque tienen malestar y buscan vomitar.\n\nCuándo preocuparse:\n- Si además vomita repetidamente.\n- Si está decaído o no come su comida.\n- Si es un cambio brusco de conducta en un perro que nunca lo hacía.\n\nSi come pasto y después corre atrás de una pelota, no pasa nada.\n\nY sí: el pasto de la vereda puede tener veneno para ratas o agroquímicos. Esa es la parte que sí me preocupa.",
    imagen: null,
    grupo: "mascotas",
    likes: 1233,
    comentarios: [
      { autor: "mama_de_tres_mvd", texto: "el mio come pasto y flores. flores!!", fecha: "2026-03-22T11:00:00-03:00",
        respuestas: [
          { autor: "caro.veterinaria", texto: "Ahí sí fijate cuáles. Hay plantas de jardín comunes que son tóxicas para perros y gatos. Si me pasás foto de las que tenés te digo.", fecha: "2026-03-22T11:30:00-03:00" },
          { autor: "mama_de_tres_mvd", texto: "te mando ahora", fecha: "2026-03-22T11:45:00-03:00" }
        ]
      },
      { autor: "agua_pura_uy", texto: "Yo le doy infusiones naturales a mi perra y esta mejor que nunca", fecha: "2026-03-22T14:00:00-03:00",
        respuestas: [
          { autor: "caro.veterinaria", texto: "Rosana, decime cuáles, en serio, sin ironía. Hay infusiones inofensivas y hay otras que son hepatotóxicas en perros. La diferencia importa.", fecha: "2026-03-22T14:30:00-03:00" },
          { autor: "agua_pura_uy", texto: "manzanilla, nada raro", fecha: "2026-03-22T15:00:00-03:00" },
          { autor: "caro.veterinaria", texto: "Manzanilla floja y fría no le va a hacer nada. Está bien. Pero preguntá siempre antes, porque hay gente que da cosas mucho peores con la misma buena intención.", fecha: "2026-03-22T15:15:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2173,
    autor: "salvavidas_rocha",
    fecha: "2026-07-14T09:00:00-03:00",
    texto: "ENCONTRADO en la playa. Perro mediano, marron oscuro, mojado y con mucho frío.\n\nZONA: La Paloma, bajada del puesto 2.\nHORA: hoy 7:30, estaba solo caminando por la orilla.\nSEÑAS: sin collar. Macho. Tiene una cicatriz vieja en el hocico. Muy manso, se dejo levantar de una.\n\nEstá en el puesto, seco y comiendo. No lo voy a mover de acá hasta el fin de semana por si alguien lo busca.",
    imagen: null,
    grupo: "mascotas",
    likes: 734,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Matías, en invierno un perro solo en la playa suele ser de alguien de una casa cerrada de temporada. Preguntá en las inmobiliarias de la zona, a veces saben qué casa tiene alguien cuidando.", fecha: "2026-07-14T10:00:00-03:00",
        respuestas: [
          { autor: "maldonado_inmobiliaria", texto: "Confirmo que sirve. En Maldonado nos pasa igual, casas cerradas con un cuidador que trae su perro.", fecha: "2026-07-14T11:00:00-03:00" },
          { autor: "salvavidas_rocha", texto: "Fui a dos. La segunda lo reconoció. Es del que cuida la casa grande de la punta, se le escapó ayer de noche y estaba dando vueltas buscándolo.", fecha: "2026-07-14T16:00:00-03:00" },
          { autor: "caro.veterinaria", texto: "Buenísimo. Y no lo entregaste hasta confirmar. Perfecto.", fecha: "2026-07-14T16:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2174,
    autor: "laura.rambla",
    fecha: "2025-12-31T22:00:00-03:00",
    texto: "Aviso anual de fin de año. Cuarta vez que lo publico.\n\nEsta noche se pierden más animales que en todo el resto del año junto.\n\n- Adentro, habitación interna, persiana baja.\n- Radio o tele con volumen normal.\n- No los saques a ver los fuegos.\n- Chapa con teléfono HOY.\n- Animal muy ansioso: hablalo con tu veterinaria ANTES.\n\nY una cosa más que aprendí en estos años: si el tuyo se escapa, publicá esa misma noche, aunque sean las 3 AM. Hay gente despierta. Este grupo tiene enfermeras, remiseros, taxistas y panaderos. Alguien te va a leer.",
    imagen: null,
    grupo: "mascotas",
    likes: 4102,
    comentarios: [
      { autor: "nurse_valentina", texto: "Confirmo: a las 3 AM estoy y leo.", fecha: "2025-12-31T22:30:00-03:00" },
      { autor: "remis_nocturno_mvd", texto: "Yo ando por toda la ciudad esa noche. Mándenme descripción y voy mirando.", fecha: "2025-12-31T23:00:00-03:00" },
      { autor: "panaderia_dosorillas", texto: "Nosotros abrimos a las 5. Cualquier cosa que veamos en la vereda, avisamos acá.", fecha: "2026-01-01T00:15:00-03:00" },
      { autor: "caro.veterinaria", texto: "Yo dejo el teléfono con sonido esta noche. Como todos los años.", fecha: "2026-01-01T00:30:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2175,
    autor: "mama_de_tres_mvd",
    fecha: "2026-01-01T02:40:00-03:00",
    texto: "se me fue el perro con los fuegos. perdón por escribir así, estoy temblando.\n\nZONA: Maroñas, atrás de la cancha.\nHORA: 00:05.\nes mediano, negro con las patas marrones, pelo corto. tiene collar azul con chapa pero la chapa tiene el teléfono viejo, me mudé.\nse llama Kiro. NO responde cuando está asustado.",
    imagen: null,
    grupo: "mascotas",
    likes: 1234,
    comentarios: [
      { autor: "remis_nocturno_mvd", texto: "Estoy en Aguada. Voy para alla y doy vueltas por la zona una hora. Mandame una foto por privado.", fecha: "2026-01-01T02:50:00-03:00" },
      { autor: "nurse_valentina", texto: "Andrea, respira. Vas a buscar mejor si respiras.", fecha: "2026-01-01T02:55:00-03:00" },
      { autor: "caro.veterinaria", texto: "Andrea: hacia dónde había menos ruido esa noche? Buscá para ese lado. Y llevate su manta o algo con su olor y dejalo en la puerta de tu casa, sirve más de lo que parece.", fecha: "2026-01-01T03:10:00-03:00",
        respuestas: [
          { autor: "mama_de_tres_mvd", texto: "para el lado del arroyo había menos ruido creo", fecha: "2026-01-01T03:20:00-03:00" },
          { autor: "remis_nocturno_mvd", texto: "Voy para el arroyo entonces.", fecha: "2026-01-01T03:25:00-03:00" },
          { autor: "remis_nocturno_mvd", texto: "Lo tengo. Estaba metido en un caño de desagüe, a seis cuadras. No queria salir. Le hablé como veinte minutos hasta que salió solo. Voy para tu casa", fecha: "2026-01-01T05:40:00-03:00" },
          { autor: "mama_de_tres_mvd", texto: "JULIO NO SÉ COMO AGRADECERTE. está aca, durmiendo, no se me despega", fecha: "2026-01-01T06:20:00-03:00" },
          { autor: "remis_nocturno_mvd", texto: "No hay nada que agradecer. Y actualizá la chapa hoy mismo.", fecha: "2026-01-01T06:30:00-03:00" },
          { autor: "laura.rambla", texto: "Un remisero de Aguada buscando un perro en Maroñas a las 5 de la mañana del 1 de enero. Feliz año, gente.", fecha: "2026-01-01T09:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2176,
    autor: "caro.veterinaria",
    fecha: "2026-01-15T11:00:00-03:00",
    texto: "Balance de la noche del 31 en el grupo, que sirve para el año que viene.\n\n17 animales publicados como perdidos entre las 00:00 y las 06:00.\n14 aparecieron en las primeras 72 horas.\n2 aparecieron después de una semana.\n1 no apareció.\n\nDe los 14 que aparecieron rápido: 11 estaban a menos de 10 cuadras.\n\nLa lección de siempre: no van lejos, van rápido. Busquen cerca, busquen callados y busquen de noche.",
    imagen: null,
    grupo: "mascotas",
    likes: 1655,
    comentarios: [
      { autor: "laura.rambla", texto: "Carolina, este balance es lo mejor que tiene este grupo y no lo hace nadie más. Gracias.", fecha: "2026-01-15T12:00:00-03:00" },
      { autor: "hacker_del_prado", texto: "11 de 14 a menos de 10 cuadras. Con dos años más de estos numeros tenes un dato de verdad, no una impresión.", fecha: "2026-01-15T13:00:00-03:00",
        respuestas: [
          { autor: "caro.veterinaria", texto: "Los tengo desde 2021 en una planilla. Da lo mismo todos los años.", fecha: "2026-01-15T13:30:00-03:00" },
          { autor: "hacker_del_prado", texto: "Entonces ya tenés el dato y no lo estas diciendo. Publica los cinco años juntos.", fecha: "2026-01-15T14:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2177,
    autor: "pastelera.zuni",
    fecha: "2026-02-08T16:00:00-03:00",
    texto: "Queridos, hay una gata parida en el fondo del club, atrás del escenario. Cuatro gatitos, chiquitos, todavia con los ojos cerrados.\n\nZONA: Villa del Cerro, Club Social, Grecia 3120.\nLa madre está bien, come, la estoy alimentando yo.\n\nNo pregunto si alguien los quiere porque están muy chicos. Pregunto qué hago, que nunca me pasó.",
    imagen: null,
    grupo: "mascotas",
    likes: 987,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Zunilda, hacé exactamente esto y nada más:\n\n1. NO los toques ni los muevas. La madre los puede rechazar o mudarlos a un lugar peor.\n2. Comida y agua para la madre, cerca pero no encima. Comida de gato, no leche de vaca.\n3. Que nadie los saque de ahí hasta las 4 semanas.\n4. A las 8 semanas hablamos de castrar a la madre, que es lo único que corta el problema de raíz.\n\nEstás haciendo todo bien.", fecha: "2026-02-08T16:30:00-03:00",
        respuestas: [
          { autor: "pastelera.zuni", texto: "Anotado todo en el cuaderno. Gracias hija.", fecha: "2026-02-08T17:00:00-03:00" },
          { autor: "murga_la_reculada", texto: "Avisamos en el ensayo que nadie toque nada atrás del escenario. Va a costar, hay veintidós personas y todos quieren mirar.", fecha: "2026-02-08T18:00:00-03:00" },
          { autor: "caro.veterinaria", texto: "Mirar de lejos está bien. Tocar no.", fecha: "2026-02-08T18:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2178,
    autor: "elpibe.delcerro",
    fecha: "2026-03-04T15:00:00-03:00",
    texto: "ENCONTRADO. perro chico blanco, tipo caniche pero sucio, no se si es caniche.\n\nZONA: Cerro, cerca de la UTU, sobre la calle de atras.\nHORA: recien, como las 14:30.\nSEÑAS: chico, blanco (o gris de sucio), pelo largo enrulado, sin collar. re manso, me siguio solo.\n\nlo tengo en casa. mi vieja dijo q hasta mañana nomas jajajaj",
    imagen: null,
    grupo: "mascotas",
    likes: 567,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Brian, un caniche o similar sin collar y sucio suele ser un perro perdido hace días, no recién. Pasalo por una veterinaria a leer el chip, es gratis. Si querés te lo leo yo, decime cuándo podés venir a Malvín.", fecha: "2026-03-04T15:30:00-03:00",
        respuestas: [
          { autor: "elpibe.delcerro", texto: "malvin me queda re lejos bo, no tengo como", fecha: "2026-03-04T15:45:00-03:00" },
          { autor: "caro.veterinaria", texto: "Hay tres veterinarias en el Cerro con lector. Te paso las direcciones por privado, andá a la que te quede.", fecha: "2026-03-04T16:00:00-03:00" },
          { autor: "elpibe.delcerro", texto: "TENIA CHIP. es de una señora de belvedere, se perdio hace 11 dias. ya la llamaron de la veterinaria", fecha: "2026-03-04T18:30:00-03:00" },
          { autor: "caro.veterinaria", texto: "ONCE DÍAS y estaba a kilómetros de su casa. Por esto insisto tanto con el chip. Muy bien Brian.", fecha: "2026-03-04T19:00:00-03:00" },
          { autor: "laura.rambla", texto: "Y la chapa no la tenía. El chip fue lo único que lo salvó.", fecha: "2026-03-04T19:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2179,
    autor: "caro.veterinaria",
    fecha: "2026-03-30T10:00:00-03:00",
    texto: "Vino gente a preguntarme por un mensaje que circula diciendo que una marca de alimento está envenenando perros y que ya murieron veinte.\n\nNo hay ningún caso reportado. Ninguno. Pedí que me pasaran el nombre de una sola veterinaria que hubiera atendido uno de esos veinte perros y nadie pudo darlo.\n\nEl mensaje además no dice ni la ciudad ni la fecha, que es la marca registrada de esta clase de cosas.\n\nSi tu perro está mal, andá al veterinario. Si el mensaje te llegó reenviado tres veces, no es información.",
    imagen: null,
    grupo: "mascotas",
    likes: 2341,
    comentarios: [
      { autor: "mama_alerta_uy", texto: "a mi me llego y lo mande a 4 grupos 😔", fecha: "2026-03-30T11:00:00-03:00",
        respuestas: [
          { autor: "caro.veterinaria", texto: "Verónica, mandá este post a los mismos 4 grupos. Se arregla igual. Y gracias por decirlo en vez de esconderlo.", fecha: "2026-03-30T11:30:00-03:00" },
          { autor: "mama_alerta_uy", texto: "ya esta hecho", fecha: "2026-03-30T12:00:00-03:00" },
          { autor: "laura.rambla", texto: "Esto de reconocerlo públicamente no lo hace casi nadie. Bien ahí.", fecha: "2026-03-30T12:30:00-03:00" }
        ]
      },
      { autor: "hacker_del_prado", texto: "Lo de que no diga ciudad ni fecha es el detalle clave. Un mensaje sin lugar ni fecha sirve para siempre y para todos lados. Está diseñado así.", fecha: "2026-03-30T13:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2180,
    autor: "vecina.malvin.rosa",
    fecha: "2026-04-14T17:00:00-03:00",
    texto: "Después de un año y medio vuelvo a escribir acá.\n\nAdopté. Es una perra grande, negra, de unos 5 años, que estaba en un refugio desde hacía dos. Nadie la quería porque es grande y porque tiene miedo de los hombres.\n\nSe llama Bruna. Le puse chapa el primer dia y le pusieron el chip en el refugio, ya actualicé los datos.\n\nNo reemplaza a nadie. No es eso. Es otra cosa y también está bien.",
    imagen: null,
    grupo: "mascotas",
    likes: 3102,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Rosario. Qué alegría enorme. Traémela cuando quieras que la conozco.", fecha: "2026-04-14T17:30:00-03:00" },
      { autor: "laura.rambla", texto: "Lloré en el aula. Los chiquilines me preguntaron qué pasaba y les conté.", fecha: "2026-04-14T18:00:00-03:00" },
      { autor: "dona_elsa_47", texto: "que dios bendiga a bruna y a vos. amen", fecha: "2026-04-14T19:00:00-03:00" },
      { autor: "elrusodelquiosco", texto: "traela al quiosco que le tengo un hueso guardado desde hace rato", fecha: "2026-04-14T20:00:00-03:00",
        respuestas: [
          { autor: "vecina.malvin.rosa", texto: "Sergio, vos guardás huesos desde hace un año y medio sin saber para quién.", fecha: "2026-04-14T20:30:00-03:00" },
          { autor: "elrusodelquiosco", texto: "y bueno. Uno sabe", fecha: "2026-04-14T20:45:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2181,
    autor: "nurse_valentina",
    fecha: "2026-05-02T04:00:00-03:00",
    texto: "PERDIDO, 4 AM, publico ahora como enseñó Laura.\n\nGato gris atigrado, macho, castrado, 6 años.\nZONA: Cordón, entre Colonia y la avenida.\nHORA: 22:30 de ayer, se escapó por la escalera cuando entró el delivery.\nSEÑAS: gris atigrado común, sin collar (tengo chip). Es gordo, muy gordo, eso lo hace reconocible.\n\nSe llama Gordo. Sí, ya sé.",
    imagen: null,
    grupo: "mascotas",
    likes: 823,
    comentarios: [
      { autor: "remis_nocturno_mvd", texto: "Estoy a diez cuadras. Doy una vuelta despacio por las bocacalles.", fecha: "2026-05-02T04:10:00-03:00" },
      { autor: "caro.veterinaria", texto: "Valentina: gato de apartamento que se escapa por la escalera NO sale del edificio en el 90% de los casos. Está en el palier de otro piso, en la azotea o en el sótano. Golpeá puerta por puerta hoy, aunque sean las 7 de la mañana.", fecha: "2026-05-02T04:30:00-03:00",
        respuestas: [
          { autor: "nurse_valentina", texto: "No se me habia ocurrido buscar hacia ARRIBA. Voy", fecha: "2026-05-02T04:40:00-03:00" },
          { autor: "nurse_valentina", texto: "AZOTEA. Atrás del tanque de agua. Estaba durmiendo. DURMIENDO. Yo llorando y él durmiendo.", fecha: "2026-05-02T05:20:00-03:00" },
          { autor: "caro.veterinaria", texto: "Siempre la azotea. Siempre.", fecha: "2026-05-02T05:30:00-03:00" },
          { autor: "remis_nocturno_mvd", texto: "Doy la vuelta y me voy entonces jajaja. Me alegro Valentina.", fecha: "2026-05-02T05:35:00-03:00" },
          { autor: "laura.rambla", texto: "Cincuenta minutos desde el post hasta el gato. Publicar a las 4 AM funciona.", fecha: "2026-05-02T08:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2182,
    autor: "caro.veterinaria",
    fecha: "2026-05-20T11:00:00-03:00",
    texto: "Entra el frío. Recordatorio corto.\n\n- Los perros de patio necesitan una casilla SECA y levantada del piso, no solo techada. El frío entra por abajo.\n- Los cachorros y los viejos no regulan bien la temperatura. Esos van adentro, sin discusión.\n- El anticongelante de los autos es dulce, los animales lo lamen y es letal. Si ves una mancha en el garaje, limpiala.\n- Los gatos se meten en los motores de los autos por calor. Golpeá el capó antes de arrancar. Suena a mito y no lo es, lo veo todos los inviernos.",
    imagen: null,
    grupo: "mascotas",
    likes: 2988,
    comentarios: [
      { autor: "laspiedras_mecanico", texto: "Lo del motor lo confirmo desde el taller. Me trajeron dos gatos en 20 años y ninguno terminó bien. Golpeen el capó, en serio.", fecha: "2026-05-20T12:00:00-03:00" },
      { autor: "taxi_cx_1420", texto: "yo, golpeo el capo desde que un compañero tuvo esa desgracia. Todas las mañanas. Todas.", fecha: "2026-05-20T13:00:00-03:00" },
      { autor: "pastelera.zuni", texto: "La gata del club duerme arriba del motor de la camioneta de la murga. Voy a avisarles ahora mismo.", fecha: "2026-05-20T14:00:00-03:00",
        respuestas: [
          { autor: "murga_la_reculada", texto: "Leido. A partir de hoy se golpea el capo antes de arrancar. Lo pusimos en el grupo de la murga.", fecha: "2026-05-20T15:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2183,
    autor: "mama_de_tres_mvd",
    fecha: "2026-06-08T13:00:00-03:00",
    texto: "ENCONTRADA. perra grande, marrón, con collar rosado sin chapa.\n\nZONA: Maroñas, en la avenida cerca del supermercado.\nHORA: hoy 11:00.\nSEÑAS: grande, marron claro, pelo corto, hembra, tiene las tetas caídas o sea que tuvo cria.\n\nla tengo atada en el fondo con agua. tengo tres gurises y no la puedo tener mucho tiempo. avisen.",
    imagen: null,
    grupo: "mascotas",
    likes: 445,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Andrea, si tuvo cría reciente puede haber cachorros cerca de donde la encontraste, y una madre lactando busca volver. Fijate si tiene las mamas llenas o vacías. Si están llenas, hay cachorros vivos en algún lado.", fecha: "2026-06-08T13:30:00-03:00",
        respuestas: [
          { autor: "mama_de_tres_mvd", texto: "están llenas 😢", fecha: "2026-06-08T14:00:00-03:00" },
          { autor: "caro.veterinaria", texto: "Entonces soltala donde la encontraste y seguila de lejos. Te va a llevar hasta los cachorros. No la ates, no la retengas, seguila.", fecha: "2026-06-08T14:15:00-03:00" },
          { autor: "mama_de_tres_mvd", texto: "hice eso. me llevó a un terreno baldío atrás del supermercado, había cinco cachorros en un pozo con una chapa arriba. cinco", fecha: "2026-06-08T16:30:00-03:00" },
          { autor: "caro.veterinaria", texto: "Muy bien. Ahora: comida y agua para la madre AHÍ, no te los lleves. Voy mañana con una colega y vemos. Pasame la ubicación exacta por privado.", fecha: "2026-06-08T16:45:00-03:00" },
          { autor: "vecina.malvin.rosa", texto: "Yo puedo ir mañana con Carolina y llevar mantas.", fecha: "2026-06-08T17:00:00-03:00" },
          { autor: "pastelera.zuni", texto: "Yo pongo comida para la madre todos los días si me dicen dónde.", fecha: "2026-06-08T18:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2184,
    autor: "caro.veterinaria",
    fecha: "2026-06-21T18:00:00-03:00",
    texto: "Los cinco cachorros del terreno de Maroñas están bien.\n\nSe quedaron con la madre, que es lo correcto. Se armó una casilla seca en el mismo lugar con material que trajeron cuatro personas de este grupo. Zunilda lleva comida cada dos días.\n\nA las 8 semanas se castra la madre y se busca casa para los cachorros. No antes.\n\nQuiero que quede escrito quiénes fueron, porque casi siempre son los mismos y nunca lo dicen: Andrea, Rosario, Zunilda y un muchacho de la murga que llevó las chapas y no me quiso decir el nombre.",
    imagen: null,
    grupo: "mascotas",
    likes: 3421,
    comentarios: [
      { autor: "murga_la_reculada", texto: "Es el Maxi, el bajo. Y no quiere que se sepa, así que ya está, no dijimos nada.", fecha: "2026-06-21T19:00:00-03:00",
        respuestas: [
          { autor: "caro.veterinaria", texto: "Perfecto, nadie dijo nada.", fecha: "2026-06-21T19:15:00-03:00" },
          { autor: "elpibe.delcerro", texto: "jajajaja lo quemaron igual", fecha: "2026-06-21T20:00:00-03:00" }
        ]
      },
      { autor: "laura.rambla", texto: "Esto empezó con una perra atada en un fondo y terminó con una casilla y cinco cachorros vivos. Es todo lo que el grupo tiene que ser.", fecha: "2026-06-21T20:30:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2185,
    autor: "laura.rambla",
    fecha: "2026-07-10T16:00:00-03:00",
    texto: "AVISO DE ADMINISTRACIÓN.\n\nSe removió del grupo a una persona que publicó tres veces ofreciendo cachorros a cambio de una colaboración. Regla 4: acá no se venden ni se regalan animales, se buscan los perdidos.\n\nSé que va a decir que era para ayudar. Puede ser. Pero si abrimos esa puerta, en un mes esto es un grupo de venta de animales con dos posts de perros perdidos abajo de todo, y no vamos a poder volver atrás.\n\nHay lugares para adopciones responsables. Este grupo no es uno.",
    imagen: null,
    grupo: "mascotas",
    likes: 1877,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Confirmo como la otra administradora. Y agrego, porque esto sí es de mi área: cobrar una colaboración por un cachorro es venderlo con otro nombre. La adopción responsable no tiene precio ni colaboración sugerida.", fecha: "2026-07-10T16:30:00-03:00" },
      { autor: "mama_de_tres_mvd", texto: "pero y los cachorros de maroñas? esos van a necesitar casa", fecha: "2026-07-10T17:00:00-03:00",
        respuestas: [
          { autor: "laura.rambla", texto: "Andrea, esos los coordina Carolina como veterinaria, con seguimiento, sin plata de por medio y fuera del grupo. Es distinto y por eso está bien.", fecha: "2026-07-10T17:30:00-03:00" },
          { autor: "mama_de_tres_mvd", texto: "ah ta, entendí la diferencia", fecha: "2026-07-10T18:00:00-03:00" }
        ]
      },
      { autor: "dona_elsa_47", texto: "hicieron bien hijas. amen", fecha: "2026-07-10T19:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2186,
    autor: "elrusodelquiosco",
    fecha: "2026-07-26T08:00:00-03:00",
    texto: "PERDIDO. Gato negro, macho, joven.\n\nZONA: Goes, sobre la avenida, a la vuelta del quiosco.\nHORA: anoche entre las 22 y las 23, se fue por el techo.\nSEÑAS: negro entero, sin ninguna mancha, ojos amarillos. Tiene el bigote de un lado mas corto porque se quemo con la garrafa hace un año.\n\nEs el gato del quiosco. Lo conoce medio barrio. Se llama Fideo",
    imagen: null,
    grupo: "mascotas",
    likes: 1102,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Sergio, el bigote quemado es la seña particular perfecta. No la publiques la próxima, guardátela. Pero en tu caso lo conoce todo el barrio, así que da igual.", fecha: "2026-07-26T08:30:00-03:00" },
      { autor: "vecina.malvin.rosa", texto: "El gato del quiosco. Después de todo lo que este hombre hizo por el barrio, ahora buscamos todos.", fecha: "2026-07-26T09:00:00-03:00" },
      { autor: "elpibe.delcerro", texto: "yo lo veo siempre arriba de la heladera. hoy salgo a buscarlo dsp del laburo", fecha: "2026-07-26T10:00:00-03:00",
        respuestas: [
          { autor: "elrusodelquiosco", texto: "Volvio. 6 de la mañana, arañando la puerta, con una oreja rasguñada y cara de nada. Dos dias de gira", fecha: "2026-07-28T07:00:00-03:00" },
          { autor: "caro.veterinaria", texto: "Gato entero joven en julio: se fue de gira, sí. Sergio, esto se arregla castrándolo y de paso dejás de perderlo cada seis meses.", fecha: "2026-07-28T08:00:00-03:00" },
          { autor: "elrusodelquiosco", texto: "ta bien ta bien. Cuando pueda lo llevo", fecha: "2026-07-28T08:30:00-03:00" },
          { autor: "caro.veterinaria", texto: "Te espero el martes. No es una pregunta.", fecha: "2026-07-28T09:00:00-03:00" },
          { autor: "elrusodelquiosco", texto: "jajaja el martes voy", fecha: "2026-07-28T09:15:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2187,
    autor: "caro.veterinaria",
    fecha: "2026-08-04T10:00:00-03:00",
    texto: "Cinco años de números, como me pidió Mauro.\n\nAnimales publicados como perdidos en el grupo entre 2021 y 2026: 1.184.\nAparecieron: 921. Es el 78%.\nNo aparecieron: 263.\n\nDe los 921 que aparecieron:\n- 604 estaban a menos de 10 cuadras.\n- 712 aparecieron en las primeras 72 horas.\n- 189 aparecieron porque alguien leyó el aviso y avisó. El resto volvieron solos o los encontró la familia.\n\nY un dato que me duele: de los 263 que no aparecieron, 171 se publicaron SIN zona o SIN hora.\n\nLean la regla 1 del grupo. No la escribimos por burocracia.",
    imagen: null,
    grupo: "mascotas",
    likes: 4211,
    comentarios: [
      { autor: "hacker_del_prado", texto: "171 de 263. Eso no es una correlación floja, eso es la diferencia entre un aviso y un papel.", fecha: "2026-08-04T10:30:00-03:00" },
      { autor: "laura.rambla", texto: "Carolina, esto lo fijamos arriba de todo y lo dejamos ahí para siempre.", fecha: "2026-08-04T11:00:00-03:00" },
      { autor: "vecina.malvin.rosa", texto: "Tito está entre los 263. Y lo publiqué con zona, hora y seña. A veces no alcanza. Pero mucho más seguido alcanza, y eso es lo que hay que decirle a la gente.", fecha: "2026-08-04T12:00:00-03:00",
        respuestas: [
          { autor: "caro.veterinaria", texto: "Rosario, tenés razón y me faltó decir eso. El 78% no es un consuelo para el 22%. Las dos cosas son verdad.", fecha: "2026-08-04T12:30:00-03:00" },
          { autor: "dona_elsa_47", texto: "yo tengo a luna durmiendo al lado mio gracias a este grupo. gracias a todos. amen", fecha: "2026-08-04T14:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },

  /* ---- Tapadera de las dos cuentas del canal ----
     Nelson deja dicho en público que anda despierto de madrugada;
     Maxi, que entra a trabajar a las siete. Los dos datos que después
     los delatan están acá, dichos por ellos mismos y sin malicia. */

  {
    id: 2188,
    autor: "n.curbelo.1954",
    fecha: "2026-05-12T04:20:00-03:00",
    texto: "Vecinos... la luz de la esquina de Aparicio Saravia y Pernas está quemada hace tres semanas.\n\nYo salgo al patio de madrugada porque a esta edad uno duerme cuando puede, y esa esquina está negra. Ayer una señora venía del ómnibus de las once y se vino al piso en el pozo que hay al lado del contenedor.\n\nHice el reclamo por teléfono dos veces. Me dan un número y me cortan. Si alguno tiene contacto en el municipal que lo diga, que yo ya me cansé.\n\nN.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 47,
    comentarios: [
      { autor: "dona_elsa_47", texto: "TIENE RAZON DON NELSON. ESA ESQUINA ES UNA BOCA DE LOBO. YO NO SALGO DE NOCHE NI LOCA. DIOS LO BENDIGA", fecha: "2026-05-12T09:15:00-03:00" },
      { autor: "bomberito_ruiz", texto: "Nelson, el número que te dan es el de reclamo. Pedile el número de gestión y anotalo, sin eso no queda registrado. Si querés te paso por privado cómo se reclama para que no te lo caminen.", fecha: "2026-05-12T11:40:00-03:00",
        respuestas: [
          { autor: "n.curbelo.1954", texto: "Gracias Diego. Cuarenta años trabajé yo en la línea y le puedo decir que antes uno iba, subía y lo arreglaba. Ahora hay que pedir número para que le den otro número. N.", fecha: "2026-05-12T12:30:00-03:00" }
        ] },
      { autor: "vecina.malvin.rosa", texto: "Acá en Malvín igual. Tres focos apagados en la misma cuadra desde marzo.", fecha: "2026-05-12T15:00:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 2189,
    autor: "maxi.zeballos",
    fecha: "2026-06-20T21:05:00-03:00",
    texto: "alguien tiene una termo que ande en serio y no salga una fortuna\n\nla mia se le fue el vacio, le pongo agua caliente 7 de la mañana y a las 10 ya esta tibia. la uso en el deposito que es un galpon y en invierno adentro hace mas frio que afuera\n\nno me manden las de 3000 pesos porfa",
    imagen: null,
    grupo: "mateando",
    likes: 31,
    comentarios: [
      { autor: "mateamargo_87", texto: "Las de acero de un litro andan bien y las conseguís por la mitad de eso. Fijate que diga acero inoxidable en el interior, no plástico con capa.", fecha: "2026-06-20T21:40:00-03:00" },
      { autor: "elpibe.delcerro", texto: "yo tengo una q me regalaron y anda 12 hs tranqui, si queres t paso la marca x privado", fecha: "2026-06-20T22:15:00-03:00" },
      { autor: "maxi.zeballos", texto: "dale pasame. pero mandame ahora que a las 11 me duermo, entro 7", fecha: "2026-06-20T22:20:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 2190,
    autor: "maxi.zeballos",
    fecha: "2026-03-08T19:30:00-03:00",
    texto: "vendo bici rodado 26 que me quedo chica, anda todo, hay que cambiarle las pastillas de freno de atras nomas\n\n$4500 y la entrego en el cerrito o donde arreglemos, no hago envios",
    imagen: null,
    grupo: "comprovendo",
    likes: 12,
    comentarios: [
      { autor: "guarda_101", texto: "Te doy 3500 y la retiro hoy.", fecha: "2026-03-08T20:10:00-03:00",
        respuestas: [
          { autor: "maxi.zeballos", texto: "4200 y es tuya", fecha: "2026-03-08T20:25:00-03:00" }
        ] }
    ],
    encuesta: null
  },
  {
    id: 2200,
    autor: "murga_la_reculada",
    fecha: "2026-07-31T19:30:00-03:00",
    texto: "VECINOS: se arreglo la luz. Ayer 30 de julio vinieron y cambiaron las columnas de la subida. Dos anos de reclamos, la nota que juntamos entre todos, las 63 columnas que relevamos una por una. Al final se hizo. Gracias a cada uno que firmo y a los que no aflojaron. El Cerro tambien es esto.",
    imagen: "media/casa.svg",
    grupo: "vecinos-cerro",
    likes: 388,
    comentarios: [
      { autor: "costa_dorada_vecina", texto: "Dos anos. Lo digo para que quede escrito: dos anos para cambiar unas lamparas. Pero se logro y eso es lo que vale. Bien por el barrio organizado.", fecha: "2026-07-31T20:00:00-03:00" },
      { autor: "elrusodelquiosco", texto: "Anoche volvi del quiosco caminando y por primera vez en dos anos vi la vereda. Increible lo que es tener luz.", fecha: "2026-07-31T20:30:00-03:00" },
      { autor: "dona_elsa_47", texto: "GRACIAS A DIOS Y A LOS VECINOS. YO FIRME LA NOTA. AMEN", fecha: "2026-07-31T21:10:00-03:00" },
      { autor: "pintor_rodri", texto: "Si precisan pintar las columnas nuevas para que no se oxiden, me ofrezco. Aviso y voy con la escalera.", fecha: "2026-07-31T21:45:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2201,
    autor: "mama_de_tres_mvd",
    fecha: "2026-07-22T14:20:00-03:00",
    texto: "Alguien supo algo mas de Tito, el perrito marron que se perdio hace un tiempo por la zona? Lo pregunto porque paso una perra parecida el otro dia y me hizo acordar. Ojala aparezca algun dia.",
    imagen: null,
    grupo: "mascotas",
    likes: 74,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Nada nuevo lamentablemente. La dueña ya lo dio por perdido el ano pasado. Igual este ano adopto una perrita del refugio, se llama Kiara. No reemplaza a Tito pero le devolvio la alegria a la casa.", fecha: "2026-07-22T15:00:00-03:00" },
      { autor: "vecina.malvin.rosa", texto: "Ay Tito. Todavia tengo el cartel guardado. Que bueno lo de la perrita nueva igual.", fecha: "2026-07-22T15:40:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2202,
    autor: "verduleria_la_yapa",
    fecha: "2026-08-02T08:30:00-03:00",
    texto: "Vecinos del grupo: armamos cajon mixto de verdura para la semana a precio fijo. Papa, cebolla, zanahoria, zapallo, morron y lo verde. Ideal para los pucheros de invierno. Encargan por privado y lo dejamos en la puerta.",
    imagen: null,
    grupo: "comprovendo",
    likes: 45,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Aparta uno para mi. El zapallo para el buseca del domingo.", fecha: "2026-08-02T09:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2210,
    autor: "mateamargo_87",
    fecha: "2026-07-30T15:00:00-03:00",
    texto: "Encuesta cientifica del grupo Mateando. Necesito zanjar esto con mi hermano.",
    imagen: "media/mate.svg",
    grupo: "mateando",
    likes: 156,
    comentarios: [
      { autor: "tambero_sanjose", texto: "Amargo siempre. El dulce es para los que no saben tomar mate.", fecha: "2026-07-30T15:30:00-03:00" },
      { autor: "dona_elsa_47", texto: "YO LE PONGO CASCARA DE NARANJA Y NO ME ARREPIENTO", fecha: "2026-07-30T16:10:00-03:00" }
    ],
    encuesta: {
      pregunta: "Mate: amargo o dulce?",
      opciones: [
        { texto: "Amargo, sin discusion", votos: 2100 },
        { texto: "Dulce", votos: 480 },
        { texto: "Depende del dia", votos: 390 }
      ],
      cierra: "2026-08-10"
    }
  }
];
