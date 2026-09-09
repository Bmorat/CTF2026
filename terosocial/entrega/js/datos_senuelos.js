/* TeroSocial - actividad de las cuentas señuelo */

/*
   Diez cuentas con alias casi idéntico al de alguien relevante, pero que son
   otra persona. Vida cotidiana y aburrida, coincidencias tentadoras y datos
   verificables que no cuadran (ciudad, oficio, edad, rutina).

   Acá no hay nada escondido. No hay pistas, claves ni recompensa.
   El costo de descartarlas ES la función.

   IDs 3000-3199.
*/

window.POSTS_SENUELOS = [

  /* =====================================================================
     mateamargo87 — Aldo Pereyra, 44, reparto en Melo, Cerro Largo.
     Se confunde con mateamargo_87 (Rodrigo Píriz, técnico en redes, Pocitos).
     ===================================================================== */

  {
    id: 3000,
    autor: "mateamargo87",
    fecha: "2022-06-12T09:10:00-03:00",
    texto: "Domingo de mate amargo y de no hacer nada. Como tiene q ser.",
    imagen: null,
    grupo: "mateando",
    likes: 9,
    comentarios: [
      { autor: "feriante_tristan", texto: "Ese es el plan bo. Yo recien ahora me siento, vengo de la feria", fecha: "2022-06-12T11:45:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3001,
    autor: "mateamargo87",
    fecha: "2023-01-18T13:40:00-03:00",
    texto: "Sali a las 6 con la camioneta y a las 11 ya no se aguantaba adentro. Melo hoy es un horno. El aire hace 3 años que no anda y no lo voy a arreglar nunca.",
    imagen: null,
    grupo: "ruta5",
    likes: 22,
    comentarios: [
      { autor: "camionero_ruta5", texto: "ACA EN TACUAREMBO IGUAL. Tomen agua muchachos, en serio.", fecha: "2023-01-18T14:20:00-03:00" },
      { autor: "melo_ferretero", texto: "Aldo pasa por el local que tengo ventiladores de 12 volt. Baratos no son pero andan.", fecha: "2023-01-18T16:05:00-03:00",
        respuestas: [
          { autor: "mateamargo87", texto: "Paso el sabado Carlos, gracias.", fecha: "2023-01-18T18:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },

  {
    id: 3002,
    autor: "mateamargo87",
    fecha: "2023-09-03T09:00:00-03:00",
    texto: "Mate amargo, el diario y a la tarde el partido. Aguante el aurinegro 🖤💛",
    imagen: null,
    grupo: null,
    likes: 14,
    comentarios: [
      { autor: "basquet_aguada_fan", texto: "El domingo perfecto no exis-", fecha: "2023-09-03T10:12:00-03:00" },
      { autor: "treintaytres_jinete", texto: "Igual aca, con la diferencia de que yo ya ensille", fecha: "2023-09-03T10:40:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3003,
    autor: "mateamargo87",
    fecha: "2024-03-14T18:20:00-03:00",
    texto: "Muchachos, esta semana me escribieron cuatro personas para que les arregle el wifi y una para que le configure un router. Yo no se nada de eso, yo reparto mercaderia en Melo. El de las redes es el otro, el que tiene el guion bajo en el medio. Sin ofender pero fijense bien antes de escribir.",
    imagen: null,
    grupo: null,
    likes: 41,
    comentarios: [
      { autor: "taxi_cx_1420", texto: "jajaja te pasa por elegir ese nombre. A mi me piden viajes en Salto y yo laburo en la Union", fecha: "2024-03-14T18:55:00-03:00" },
      { autor: "estudiante_utec", texto: "Perdon, creo que fui una de las que te escribio 🙈 una pregunta igual, vos sabés si el otro cobra?", fecha: "2024-03-14T19:30:00-03:00",
        respuestas: [
          { autor: "mateamargo87", texto: "Ni idea, ni lo conozco. Nunca hable con el en mi vida", fecha: "2024-03-14T20:10:00-03:00" }
        ]
      },
      { autor: "guarda_101", texto: "El nombre casi igual y los dos toman amargo. Un desastre.", fecha: "2024-03-14T21:02:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3004,
    autor: "mateamargo87",
    fecha: "2024-11-09T20:15:00-03:00",
    texto: "Camino a Fraile Muerto esta roto pasando el arroyo, banquina hundida. Fui a 40 y aun asi me sono todo. Avisen a los que bajan con carga.",
    imagen: null,
    grupo: "ruta5",
    likes: 37,
    comentarios: [
      { autor: "camionero_ruta5", texto: "GRACIAS POR EL DATO. Paso el martes de madrugada, voy a ir despacio", fecha: "2024-11-09T20:44:00-03:00" },
      { autor: "melo_ferretero", texto: "Hace dos meses que esta asi y nadie viene", fecha: "2024-11-09T22:10:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3005,
    autor: "mateamargo87",
    fecha: "2025-06-22T09:30:00-03:00",
    texto: "Discusion de domingo con mi cuñado. Voten y despues le muestro.",
    imagen: null,
    grupo: "mateando",
    likes: 58,
    comentarios: [
      { autor: "elrusodelquiosco", texto: "El que mueve la yerba en casa ajena no vuelve a ser invitado. Es asi", fecha: "2025-06-22T10:15:00-03:00" },
      { autor: "rivera_frontera", texto: "acá se mueve nomas y nadie dice nada jaja", fecha: "2025-06-22T11:50:00-03:00" }
    ],
    encuesta: {
      pregunta: "La yerba se mueve o no se toca?",
      opciones: [
        { texto: "No se toca, se arruina", votos: 214 },
        { texto: "Se mueve cuando se lava", votos: 138 },
        { texto: "Yo tomo con azúcar (me voy)", votos: 19 }
      ],
      cierra: "2025-06-29T09:30:00-03:00"
    }
  },

  {
    id: 3006,
    autor: "mateamargo87",
    fecha: "2026-07-19T09:05:00-03:00",
    texto: "Tres grados en Melo y yo con el termo afuera igual. El que espera adentro pierde el sol.",
    imagen: null,
    grupo: null,
    likes: 18,
    comentarios: [
      { autor: "mateamargo_87", texto: "Bo, recién caigo que tenemos casi el mismo nombre. Yo soy el del guion bajo. Acá en Pocitos hay 7 grados y viento, así que no me quejo.", fecha: "2026-07-19T10:20:00-03:00",
        respuestas: [
          { autor: "mateamargo87", texto: "Jaja sos vos el que me manda toda la gente del wifi entonces. Un abrazo igual", fecha: "2026-07-19T11:05:00-03:00" }
        ]
      },
      { autor: "productor_durazno", texto: "Aca helo fuerte. Se viene una semana brava.", fecha: "2026-07-19T12:30:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3007,
    autor: "mateamargo87",
    fecha: "2026-08-03T07:40:00-03:00",
    texto: "Arranca la semana. 11 paradas antes del mediodia y el camion con la puerta trabada. Buen lunes para todos igual",
    imagen: null,
    grupo: "ruta5",
    likes: 12,
    comentarios: [
      { autor: "tambero_sanjose", texto: "Yo hace tres horas que estoy levantado. Suerte con la puerta.", fecha: "2026-08-03T07:55:00-03:00" }
    ],
    encuesta: null
  },

  /* =====================================================================
     charrua.libre — Charrúa Libre Marroquinería, taller en Tacuarembó.
     Se confunde con charrua_libre (la cuenta anónima).
     ===================================================================== */

  {
    id: 3010,
    autor: "charrua.libre",
    fecha: "2021-10-14T11:00:00-03:00",
    texto: "Nos abrimos cuenta acá para mostrar el laburo. Taller familiar desde el 98. Cintos, riendas, materas y lo que nos pidan, todo cosido a mano. Consultas por acá.",
    imagen: null,
    grupo: "comprovendo",
    likes: 64,
    comentarios: [
      { autor: "coleccionista_cx", texto: "Bienvenidos. Hacen fundas para radios antiguas? Tengo una del 36 sin funda.", fecha: "2021-10-14T15:20:00-03:00",
        respuestas: [
          { autor: "charrua.libre", texto: "Nunca hicimos pero se puede. Mandanos medidas y te cotizamos.", fecha: "2021-10-15T09:10:00-03:00" }
        ]
      },
      { autor: "artesano_piriapolis", texto: "Buen trabajo el del cuero. Nosotros acá en la feria de Piriápolis andamos con lo mismo pero con plata y piedra.", fecha: "2021-10-14T18:40:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3011,
    autor: "charrua.libre",
    fecha: "2022-04-06T16:30:00-03:00",
    texto: "Terminadas las riendas trenzadas de ocho tientos para un cliente de Treinta y Tres. Nos llevo tres semanas. Sale mañana el encomienda.",
    imagen: null,
    grupo: null,
    likes: 121,
    comentarios: [
      { autor: "treintaytres_jinete", texto: "Son mias esas. Ya las vi y estan barbaras. El que trenza asi no se consigue mas.", fecha: "2022-04-06T19:15:00-03:00" },
      { autor: "productor_durazno", texto: "Precio de las riendas?", fecha: "2022-04-07T06:50:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3012,
    autor: "charrua.libre",
    fecha: "2023-05-11T10:20:00-03:00",
    texto: "Materas con inicial grabada a fuego. Tres modelos: simple, con manija y la grande de dos termos. Precios por privado porque cambian según el cuero que consigamos. Envíos a todo el país.",
    imagen: null,
    grupo: "comprovendo",
    likes: 88,
    comentarios: [
      { autor: "la_verdad_del_norte", texto: "Yo tengo local aca en Tacuarembo tambien, los conozco de vista. Trabajan bien.", fecha: "2023-05-11T13:00:00-03:00" },
      { autor: "marce.peluquera", texto: "Quiero una con la M!! te escribo 💇", fecha: "2023-05-11T17:30:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3013,
    autor: "charrua.libre",
    fecha: "2024-08-19T15:45:00-03:00",
    texto: "Aclaración porque ya se nos hizo costumbre. NO somos la cuenta esa de las conspiraciones. Somos un taller de cuero en Tacuarembó, tenemos direccion, teléfono y facturamos. Por favor dejen de mandarnos mensajes preguntando por lo del sabado y por quién nos manda. Nadie nos manda, nos manda el pedido del cliente.",
    imagen: null,
    grupo: null,
    likes: 203,
    comentarios: [
      { autor: "dona_elsa_47", texto: "AL FIN DA LA CARA. YO SABIA QUE ERA UNA PERSONA DE TRABAJO. DIOS LO BENDIGA 🙏", fecha: "2024-08-19T16:10:00-03:00",
        respuestas: [
          { autor: "charrua.libre", texto: "Señora, con todo respeto, no somos esa cuenta. Somos otra gente distinta.", fecha: "2024-08-19T16:40:00-03:00" },
          { autor: "dona_elsa_47", texto: "SI SI ENTIENDO. NO DIGO NADA. AMEN 🙏", fecha: "2024-08-19T17:05:00-03:00" }
        ]
      },
      { autor: "hacker_del_prado", texto: "Para el que llegue despues: una es con punto y la otra con guion bajo. Son dos cuentas distintas, con fechas de creacion distintas y de departamentos distintos. No hay misterio.", fecha: "2024-08-19T20:25:00-03:00" },
      { autor: "escepticouy", texto: "Gracias por aclarar. Igual lo van a seguir preguntando, es lo que hay.", fecha: "2024-08-19T21:00:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3014,
    autor: "charrua.libre",
    fecha: "2025-11-08T09:50:00-03:00",
    texto: "Cerramos pedidos para fin de año el 5 de diciembre. Lo que entre después sale en febrero, no hay vuelta. El cuero se demora y nosotros somos dos.",
    imagen: null,
    grupo: "comprovendo",
    likes: 47,
    comentarios: [
      { autor: "maldonado_inmobiliaria", texto: "Necesito 6 llaveros con logo para regalar a clientes. Llego para el 5?", fecha: "2025-11-08T11:20:00-03:00" },
      { autor: "young_bicicleteria", texto: "Hacen fundas de asiento de bici? Nos preguntan seguido.", fecha: "2025-11-08T12:45:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3015,
    autor: "charrua.libre",
    fecha: "2026-07-28T17:10:00-03:00",
    texto: "Cinto ancho de dos capas, hebilla de bronce, entregado hoy. El cuero era del año pasado y se nota en el color. Estamos con la agenda liviana, buen momento para encargar.",
    imagen: null,
    grupo: "comprovendo",
    likes: 72,
    comentarios: [
      { autor: "melo_ferretero", texto: "Ese trabajo hoy no se paga lo que vale. Bien ahi.", fecha: "2026-07-28T18:30:00-03:00" },
      { autor: "feriante_tristan", texto: "Cuanto sale el ancho? Y me lo mandan a Montevideo?", fecha: "2026-07-28T19:15:00-03:00",
        respuestas: [
          { autor: "charrua.libre", texto: "Te paso por privado. Envio a Montevideo sale aparte, es poco.", fecha: "2026-07-29T08:20:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },

  /* =====================================================================
     tero_anon_2018 — Marcos Suárez, 29, barraca en Paysandú.
     Se confunde con tero_anon_2019 (cuenta archivada).
     ===================================================================== */

  {
    id: 3020,
    autor: "tero_anon_2018",
    fecha: "2019-03-09T19:00:00-03:00",
    texto: "Me hicieron la cuenta el año pasado y le puse el año porque no se me ocurria nada. Marcos, de Paysandu. Trabajo en una barraca, juego al futbol los miercoles y pesco cuando el rio deja.",
    imagen: null,
    grupo: null,
    likes: 6,
    comentarios: [
      { autor: "agronomo_paysandu", texto: "Bienvenido vecino.", fecha: "2019-03-09T21:30:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3021,
    autor: "tero_anon_2018",
    fecha: "2021-02-13T07:30:00-03:00",
    texto: "Sali antes que aclarara. Tres bagres y nada mas. El agua esta caliente y no pica nada, pero prefiero eso a quedarme en casa.",
    imagen: null,
    grupo: "pesca",
    likes: 29,
    comentarios: [
      { autor: "pescador_tacuarembo", texto: "Con esta agua no vas a sacar dorado ni de casualidad. Esperá que refresque.", fecha: "2021-02-13T09:10:00-03:00" },
      { autor: "pescador_delaplata", texto: "Aca igual. Viento norte, cero.", fecha: "2021-02-13T10:05:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3022,
    autor: "tero_anon_2018",
    fecha: "2023-10-21T12:15:00-03:00",
    texto: "Cliente de hoy: quiero una madera de esas. Yo: de cuales. El: de esas que se usan. Llevamos 20 minutos y no salimos de ahi.",
    imagen: null,
    grupo: "mateando",
    likes: 156,
    comentarios: [
      { autor: "laspiedras_mecanico", texto: "En el taller es igual. Hace un ruido, un ruido así. Y me lo imitan con la boca.", fecha: "2023-10-21T13:40:00-03:00" },
      { autor: "elrusodelquiosco", texto: "Deme de esos cigarros que fumaba mi señora. Todos los dias.", fecha: "2023-10-21T14:20:00-03:00" },
      { autor: "young_bicicleteria", texto: "La camara de la bici, la redonda. Nos morimos de risa siempre.", fecha: "2023-10-21T16:00:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3023,
    autor: "tero_anon_2018",
    fecha: "2025-04-05T18:40:00-03:00",
    texto: "Me llegaron como diez mensajes esta semana preguntandome por que borre todo y que paso en 2019. Yo no borre nada. Mi cuenta dice 2018 porque entre en 2018, estan todas mis publicaciones desde el primer dia. No soy la otra cuenta, no la conozco y no tengo ninguna historia atras. Soy Marcos, trabajo en una barraca.",
    imagen: null,
    grupo: null,
    likes: 88,
    comentarios: [
      { autor: "investigador_montevideo", texto: "1) Nadie afirmó que usted sea la misma persona. 2) La coincidencia de nomenclatura amerita ser señalada. 3) Tomo nota de su aclaración y la archivo.", fecha: "2025-04-05T19:30:00-03:00",
        respuestas: [
          { autor: "tero_anon_2018", texto: "Archiva lo q quieras pero dejame de mandar gente por favor.", fecha: "2025-04-05T20:15:00-03:00" }
        ]
      },
      { autor: "escepticouy", texto: "Dos cuentas con un año distinto en el nombre son dos cuentas con un año distinto en el nombre. No hace falta más.", fecha: "2025-04-05T21:00:00-03:00" },
      { autor: "hacker_del_prado", texto: "Además la otra está oculta hace años y esta publica todos los meses. Es lo primero que se mira.", fecha: "2025-04-05T22:40:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3024,
    autor: "tero_anon_2018",
    fecha: "2026-03-14T08:20:00-03:00",
    texto: "Rio creciendo y turbio. No salgo. Me quedo con el mate mirando desde el camion.",
    imagen: null,
    grupo: "pesca",
    likes: 33,
    comentarios: [
      { autor: "pescador_tacuarembo", texto: "Bien hecho. Con el río así se pierde el día y a veces algo más.", fecha: "2026-03-14T09:05:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3025,
    autor: "tero_anon_2018",
    fecha: "2026-07-11T13:00:00-03:00",
    texto: "En la barraca hace mas frio adentro que afuera. Es un misterio del rubro que nadie me supo explicar en once años",
    imagen: null,
    grupo: "mateando",
    likes: 61,
    comentarios: [
      { autor: "nurse_valentina", texto: "En el hospital pasa lo mismo pero al reves en verano. Nadie sabe por qué.", fecha: "2026-07-11T14:20:00-03:00" },
      { autor: "ing.rossi", texto: "No es misterio: inercia térmica, techo de chapa sin aislación y ventilación cruzada permanente. Es de manual.", fecha: "2026-07-11T15:10:00-03:00",
        respuestas: [
          { autor: "tero_anon_2018", texto: "Gracias igual, pero sigo con frio.", fecha: "2026-07-11T15:45:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },

  /* =====================================================================
     el.tero.viajero — Tero Viajero Turismo, agencia en La Paloma, Rocha.
     Se confunde con el_tero_viajero (Nicolás Cabrera, fotógrafo de ruta).
     Sin grupos: siempre grupo null.
     ===================================================================== */

  {
    id: 3030,
    autor: "el.tero.viajero",
    fecha: "2023-02-20T10:00:00-03:00",
    texto: "Buen día. Somos una agencia chica de La Paloma. Excursiones y traslados por Rocha, grupos de hasta 12 personas, salidas sábado y domingo. Habilitados y con seguro. Consultas por acá.",
    imagen: null,
    grupo: null,
    likes: 51,
    comentarios: [
      { autor: "salvavidas_rocha", texto: "Bienvenidos. Si llevan gente a la playa avísenles lo de las banderas, que después nos toca a nosotros.", fecha: "2023-02-20T12:30:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3031,
    autor: "el.tero.viajero",
    fecha: "2023-12-15T09:30:00-03:00",
    texto: "Salidas confirmadas para enero: Cabo Polonio, Laguna de Rocha y una nocturna corta para ver el faro. Reserva con seña. La de Polonio sale 8:30 y vuelve tipo 18, llevá agua y gorro que no hay sombra.",
    imagen: null,
    grupo: null,
    likes: 96,
    comentarios: [
      { autor: "colonia_guia_turismo", texto: "Colegas, éxitos con la temporada. Ojo con los grupos grandes en Polonio, no rinde.", fecha: "2023-12-15T11:00:00-03:00" },
      { autor: "maldonado_inmobiliaria", texto: "Les paso gente que alquila en la zona. Hablamos por privado.", fecha: "2023-12-15T14:20:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3032,
    autor: "el.tero.viajero",
    fecha: "2024-09-07T11:20:00-03:00",
    texto: "Por décima vez y sin enojo: NO somos el fotógrafo. Nos siguen escribiendo para pedir permiso de usar fotos que no son nuestras y para preguntar con qué lente están sacadas. Nosotros manejamos una van. El de las fotos es la otra cuenta, la que va con guiones bajos. Nosotros vamos con puntos.",
    imagen: null,
    grupo: null,
    likes: 174,
    comentarios: [
      { autor: "portal_elmirador", texto: "Disculpen, fuimos nosotros la semana pasada. Ya corregimos el crédito al pie de la nota.", fecha: "2024-09-07T12:05:00-03:00" },
      { autor: "el_tero_viajero", texto: "Jaja perdón, muchachos. A mí me llegan consultas de precios de excursion y yo lo único que llevo es el tripode. Estamos a mano.", fecha: "2024-09-07T13:40:00-03:00",
        respuestas: [
          { autor: "el.tero.viajero", texto: "Todo bien Nicolás. Cuando quieras te llevamos a la laguna, invita la casa.", fecha: "2024-09-07T14:15:00-03:00" }
        ]
      },
      { autor: "colonia_guia_turismo", texto: "A mí me pasa con otra guía que tiene el nombre parecido. Es de nunca acabar.", fecha: "2024-09-07T16:50:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3033,
    autor: "el.tero.viajero",
    fecha: "2025-01-11T08:15:00-03:00",
    texto: "Salida al amanecer de mañana: quedan 3 lugares. Punto de encuentro en la terminal 6:15 en punto. El que llega 6:20 ve la van doblando la esquina, lo decimos con cariño",
    imagen: null,
    grupo: null,
    likes: 63,
    comentarios: [
      { autor: "salvavidas_rocha", texto: "Mar picado hoy, viento del este. Para caminar esta barbaro igual.", fecha: "2025-01-11T09:00:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3034,
    autor: "el.tero.viajero",
    fecha: "2025-10-25T16:40:00-03:00",
    texto: "Traslados desde la terminal a las casas de la zona: precio único hasta 4 pasajeros, después cambia. No hacemos traslados a Montevideo, nos preguntan mucho y la respuesta es siempre la misma.",
    imagen: null,
    grupo: null,
    likes: 38,
    comentarios: [
      { autor: "taxi_cx_1420", texto: "Bien hecho. Cada uno en lo suyo. Yo tampoco salgo de Montevideo.", fecha: "2025-10-25T18:20:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3035,
    autor: "el.tero.viajero",
    fecha: "2026-06-30T10:05:00-03:00",
    texto: "Temporada baja. La van está en el taller con la caja y el chofer de vacaciones. Volvemos con salidas en octubre. Igual contestamos consultas, no desaparecimos.",
    imagen: null,
    grupo: null,
    likes: 27,
    comentarios: [
      { autor: "salvavidas_rocha", texto: "Acá La Paloma en invierno somos cuatro gatos locos. Se disfruta igual.", fecha: "2026-06-30T11:30:00-03:00" },
      { autor: "laspiedras_mecanico", texto: "Caja de van, ojo con los sincronizados de segunda. Es lo primero que se va.", fecha: "2026-06-30T13:15:00-03:00" }
    ],
    encuesta: null
  },

  /* =====================================================================
     laura_rambla — Laura Cabrera, 31, corredora, Malvín.
     Se confunde con laura.rambla (Laura Antúnez, 52, maestra, Buceo).
     ===================================================================== */

  {
    id: 3040,
    autor: "laura_rambla",
    fecha: "2023-07-02T09:40:00-03:00",
    texto: "Primeros 10K completos sin parar a caminar. 58:40. Frío, viento en contra desde el Buceo y las piernas de goma, pero salió. 🏃‍♀️",
    imagen: null,
    grupo: null,
    likes: 44,
    comentarios: [
      { autor: "nurse_valentina", texto: "Yo a esa hora recién me acuesto. Felicitaciones igual, en serio.", fecha: "2023-07-02T10:30:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3041,
    autor: "laura_rambla",
    fecha: "2024-01-21T07:10:00-03:00",
    texto: "Sali 6:40 para escaparle al calor y ya estaba pegajoso. Enero es un enemigo personal.",
    imagen: null,
    grupo: null,
    likes: 31,
    comentarios: [
      { autor: "astro.mvd", texto: "A esa hora todavía se ve Venus bien alto sobre el este. Si mirás una mañana despejada la ves.", fecha: "2024-01-21T08:15:00-03:00" },
      { autor: "caro.veterinaria", texto: "Te crucé en la vuelta de Malvín creo. O era otra corredora de rosa.", fecha: "2024-01-21T09:40:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3042,
    autor: "laura_rambla",
    fecha: "2024-05-19T09:20:00-03:00",
    texto: "Tercera vez este mes que me escriben para preguntarme por el boletín de un nene y por una reunión de padres. No soy maestra 😅 Tengo 31 años, trabajo en una mutualista y lo único que enseño es a nadie. La maestra es la otra Laura, la que va con punto en el medio.",
    imagen: null,
    grupo: null,
    likes: 129,
    comentarios: [
      { autor: "laura.rambla", texto: "Ja! Y a mí me preguntan por zapatillas y por planes de entrenamiento. Le contesto a todo el mundo que corro solo hasta la parada del ómnibus. Un gusto, tocaya.", fecha: "2024-05-19T11:00:00-03:00",
        respuestas: [
          { autor: "laura_rambla", texto: "Encantada! Alguna vez nos vamos a cruzar en la rambla y no nos vamos a dar cuenta jaja", fecha: "2024-05-19T11:45:00-03:00" }
        ]
      },
      { autor: "mama_de_tres_mvd", texto: "Perdón Laura, creo que fui yo la del boletín 🙈 me confundí de cuenta.", fecha: "2024-05-19T13:20:00-03:00" },
      { autor: "sec.gremio.docente", texto: "Nos pasa seguido con cuentas parecidas. Compañeras, chequeen el perfil antes de escribir.", fecha: "2024-05-19T15:10:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3043,
    autor: "laura_rambla",
    fecha: "2025-03-09T09:00:00-03:00",
    texto: "Debate eterno del domingo. Yo salgo sin nada y me miran raro.",
    imagen: null,
    grupo: "mateando",
    likes: 77,
    comentarios: [
      { autor: "basquet_aguada_fan", texto: "Sin musica no se puede vivir. Ni correr. Ni nada!!!", fecha: "2025-03-09T09:50:00-03:00" },
      { autor: "elpibe.delcerro", texto: "yo con auriculares hasta pa ir al almacen ta", fecha: "2025-03-09T12:30:00-03:00" }
    ],
    encuesta: {
      pregunta: "Correr con música o sin música?",
      opciones: [
        { texto: "Con música, si no me muero", votos: 302 },
        { texto: "Sin nada, escucho el mar", votos: 91 },
        { texto: "Podcast (los raros)", votos: 44 }
      ],
      cierra: "2025-03-16T09:00:00-03:00"
    }
  },

  {
    id: 3044,
    autor: "laura_rambla",
    fecha: "2025-09-14T09:15:00-03:00",
    texto: "Media maratón terminada. 1:58:20. Me prometí no volver a hacerlo y ya estoy mirando la del año que viene. 🏅",
    imagen: null,
    grupo: null,
    likes: 152,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Grande vecina! Te vi pasar por Malvín con cara de sufrimiento y de felicidad al mismo tiempo.", fecha: "2025-09-14T10:40:00-03:00" },
      { autor: "nurse_valentina", texto: "Hidratate y comé sal, en serio. Después no vengas a la guardia.", fecha: "2025-09-14T14:00:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3045,
    autor: "laura_rambla",
    fecha: "2026-04-26T09:05:00-03:00",
    texto: "Viento del sur y la rambla llena de espuma. Corrí 8 y volví empapada de agua salada. Domingo perfecto igual.",
    imagen: null,
    grupo: null,
    likes: 58,
    comentarios: [
      { autor: "mateamargo_87", texto: "Yo salí hoy también y a los 3 km me di por vencido, iba de costado. Vos sos de otra raza.", fecha: "2026-04-26T10:20:00-03:00" },
      { autor: "vecina.malvin.rosa", texto: "Ojo con la vereda a la altura de la bajada, hay dos baldosas sueltas. Está reclamado, expediente 4417.", fecha: "2026-04-26T12:15:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3046,
    autor: "laura_rambla",
    fecha: "2026-08-02T09:30:00-03:00",
    texto: "Agosto arranca con 6 grados y yo con dos remeras y guantes. 10K en 52:10, no bajé pero tampoco me morí.",
    imagen: null,
    grupo: null,
    likes: 41,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Vi que ibas con el perro de alguien atrás. No era tuyo, no?", fecha: "2026-08-02T11:10:00-03:00",
        respuestas: [
          { autor: "laura_rambla", texto: "No jaja, se me pegó dos cuadras y después se aburrió.", fecha: "2026-08-02T11:40:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },

  /* =====================================================================
     ojos_cerrados_uy — dúo acústico de guitarra y voz, Montevideo.
     Se confunde con ojoscerrados_uy (admin de La posta).
     ===================================================================== */

  {
    id: 3050,
    autor: "ojos_cerrados_uy",
    fecha: "2022-09-02T22:10:00-03:00",
    texto: "Primer toque como duo, viernes en un bar del Centro. Cinco personas y el mozo. Empezamos igual y nos fue bien. Gracias a los cinco. 🎸",
    imagen: null,
    grupo: null,
    likes: 34,
    comentarios: [
      { autor: "dj_candombe", texto: "De ahi se arranca siempre. En dos años son cincuenta.", fecha: "2022-09-02T23:40:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3051,
    autor: "ojos_cerrados_uy",
    fecha: "2023-06-16T21:30:00-03:00",
    texto: "Armamos el repertorio nuevo. Canción uruguaya, algo de tango, dos milongas y una de murga arreglada para guitarra sola. Sale rara y nos gusta.",
    imagen: null,
    grupo: "murgas",
    likes: 67,
    comentarios: [
      { autor: "murga_la_reculada", texto: "Ojo con arreglar murga para dos voces, es más difícil de lo que parece. Si necesitan mano nos avisan, ensayamos los jueves.", fecha: "2023-06-16T23:00:00-03:00" },
      { autor: "dj.pirata.fm", texto: "Vengan al programa cuando quieran, martes y jueves de 21 a 23. No pagamos nada pero suena bien", fecha: "2023-06-17T09:20:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3052,
    autor: "ojos_cerrados_uy",
    fecha: "2024-02-24T19:00:00-03:00",
    texto: "Aclaración necesaria: nos llegan mensajes casi todas las semanas pidiendo que los aceptemos en un grupo y preguntando cuándo publicamos lo próximo. No administramos ningún grupo. Somos dos personas con una guitarra que tocan en bares. El nombre es por una canción, nada más.",
    imagen: null,
    grupo: null,
    likes: 118,
    comentarios: [
      { autor: "dona_elsa_47", texto: "PERO USTEDES NO ERAN LOS QUE AVISAN LAS COSAS? YO LES MANDE UN MENSAJE LA SEMANA PASADA CON UNA FOTO IMPORTANTE 🙏", fecha: "2024-02-24T19:35:00-03:00",
        respuestas: [
          { autor: "ojos_cerrados_uy", texto: "No señora, somos musicos. La foto no la abrimos, disculpe.", fecha: "2024-02-24T20:10:00-03:00" }
        ]
      },
      { autor: "ojoscerrados_uy", texto: "No tengo relacion con esta cuenta. Que quede dicho una sola vez.", fecha: "2024-02-24T22:45:00-03:00" },
      { autor: "elpibe.delcerro", texto: "jajajaja pobres. igual el nombre es re bueno para una banda", fecha: "2024-02-25T01:20:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3053,
    autor: "ojos_cerrados_uy",
    fecha: "2024-11-30T23:15:00-03:00",
    texto: "Cumpleaños de 15 en un salon de Sayago. Nos pidieron tres canciones y terminamos tocando dos horas. La abuela canto todas. Noche redonda.",
    imagen: null,
    grupo: null,
    likes: 92,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Qué lindo lo que cuentan. La torta de ese salón la hice yo, si es el de la calle grande.", fecha: "2024-12-01T09:30:00-03:00" },
      { autor: "marce.peluquera", texto: "Cuanto cobran para un cumple? Tengo uno en marzo ✨", fecha: "2024-12-01T11:00:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3054,
    autor: "ojos_cerrados_uy",
    fecha: "2025-08-09T21:45:00-03:00",
    texto: "Tocamos antes de un ensayo abierto en el Cerro. Nos escucharon de arriba de las gradas y aplaudieron poco, pero uno de los bataraces nos dijo que estaba bien. Nos alcanza.",
    imagen: null,
    grupo: "murgas",
    likes: 73,
    comentarios: [
      { autor: "murga_la_reculada", texto: "Nosotros aplaudimos poco pero decimos la verdad. Estuvo bien de verdad. Vuelvan cuando quieran.", fecha: "2025-08-09T23:30:00-03:00" },
      { autor: "elpibe.delcerro", texto: "estuve ahi! sonaba bn la guitarra ta 🔥", fecha: "2025-08-10T02:10:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3055,
    autor: "ojos_cerrados_uy",
    fecha: "2026-07-24T20:30:00-03:00",
    texto: "Hoy viernes tocamos de 22 a 00 en un bar de Palermo. Entrada libre, gorra al final. Si hace mucho frio igual vamos, ya nos comprometimos",
    imagen: null,
    grupo: null,
    likes: 49,
    comentarios: [
      { autor: "dj_candombe", texto: "Si termino temprano me doy una vuelta. Zbrenn, muchachos.", fecha: "2026-07-24T21:15:00-03:00" },
      { autor: "tatu.ink.mvd", texto: "queda a dos cuadras del estudio, capaz caigo 🖤", fecha: "2026-07-24T22:00:00-03:00" }
    ],
    encuesta: null
  },

  /* =====================================================================
     esceptico_uy — Fernando Rivas, 38, Sayago. Escéptico del VAR.
     Se confunde con escepticouy (Nicolás Bentancur, bibliotecario, La posta).
     Sin emojis: escribe con planilla.
     ===================================================================== */

  {
    id: 3060,
    autor: "esceptico_uy",
    fecha: "2021-12-05T18:00:00-03:00",
    texto: "Arranco esta cuenta para dejar de discutir en el trabajo. Llevo planilla de la liga desde 2016: tiros al arco, córners, minutos efectivos. Si venís a decirme que el equipo jugó bien, traeme el número.",
    imagen: null,
    grupo: null,
    likes: 17,
    comentarios: [
      { autor: "contadora.gimenez", texto: "Bienvenido al club de los que arruinan las sobremesas con datos.", fecha: "2021-12-05T20:30:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3061,
    autor: "esceptico_uy",
    fecha: "2022-08-14T17:30:00-03:00",
    texto: "Promedio de la fecha: 51 minutos de pelota en juego sobre 94 jugados. El resto es cortar, discutir y acomodar la barrera. Después nos quejamos del espectáculo.",
    imagen: null,
    grupo: "mateando",
    likes: 84,
    comentarios: [
      { autor: "guarda_101", texto: "Eso yo lo digo hace años arriba del coche y nadie me da bola.", fecha: "2022-08-14T18:40:00-03:00" },
      { autor: "basquet_aguada_fan", texto: "En basquet no pasa esto. En basquet no para nunca. HISTORICO el deporte.", fecha: "2022-08-14T19:20:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3062,
    autor: "esceptico_uy",
    fecha: "2023-04-23T16:50:00-03:00",
    texto: "El VAR agrego 4 minutos y 20 segundos promedio por partido en la temporada y corrigió 6 jugadas en 45 partidos. Podés estar a favor o en contra, pero discutamos con esos dos numeros arriba de la mesa y no con lo que sentiste el domingo.",
    imagen: null,
    grupo: null,
    likes: 112,
    comentarios: [
      { autor: "taxi_cx_1420", texto: "El VAR lo inventaron para que perdamos SIEMPRE nosotros. Es asi y lo sabe todo el mundo.", fecha: "2023-04-23T17:30:00-03:00",
        respuestas: [
          { autor: "esceptico_uy", texto: "Te acabo de dar la cantidad de correcciones. Fijate cuantas fueron a favor de tu equipo antes de decir eso.", fecha: "2023-04-23T18:10:00-03:00" }
        ]
      },
      { autor: "ing.rossi", texto: "Correcto el planteo. Aunque el promedio sin desvío estándar dice poco. Adjuntá la dispersión.", fecha: "2023-04-23T19:00:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3063,
    autor: "esceptico_uy",
    fecha: "2024-06-09T19:20:00-03:00",
    texto: "Un señor me mandó tres párrafos pidiéndome que le exija la fuente a alguien de un grupo del que no soy parte. No pertenezco a ese grupo, no soy bibliotecario, no discuto de esos temas y no tengo idea de quién es la persona. Yo llevo estadísticas de fútbol y vivo en Sayago. El otro escéptico tiene el nombre pegado, sin guion bajo.",
    imagen: null,
    grupo: null,
    likes: 143,
    comentarios: [
      { autor: "escepticouy", texto: "Confirmo que no somos la misma persona. Y agrego, con envidia, que su trabajo es mucho más entretenido que el mío.", fecha: "2024-06-09T20:05:00-03:00",
        respuestas: [
          { autor: "esceptico_uy", texto: "Cada uno pide fuentes de lo que puede.", fecha: "2024-06-09T20:40:00-03:00" }
        ]
      },
      { autor: "profe_hernandez_hist", texto: "Es un fenómeno interesante y viejísimo. Cuando dos nombres se parecen, la gente completa el resto con lo que ya cree saber, y después defiende esa versión con más fuerza que el dato original. Pasa con los apellidos en los archivos parroquiales desde hace siglos. La única solución es la aburrida: cotejar dos datos duros. Acá alcanza con la fecha de alta y el departamento.", fecha: "2024-06-09T21:30:00-03:00" },
      { autor: "estudiante_utec", texto: "Una pregunta, y no sos el mismo con dos cuentas? Perdon pero tenia que preguntar.", fecha: "2024-06-09T22:15:00-03:00",
        respuestas: [
          { autor: "esceptico_uy", texto: "No. Publicamos superpuesto varias veces el mismo día, está a la vista.", fecha: "2024-06-09T22:50:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },

  {
    id: 3064,
    autor: "esceptico_uy",
    fecha: "2025-05-17T18:10:00-03:00",
    texto: "Fecha 12 cargada. Dato de la jornada: 39 corners y 2 goles de corner. Si tu equipo tira 11 córners y no convierte, el problema no es la suerte, es el primer palo.",
    imagen: null,
    grupo: null,
    likes: 69,
    comentarios: [
      { autor: "guarda_101", texto: "Los corners al primer palo son un invento del demonio.", fecha: "2025-05-17T19:00:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3065,
    autor: "esceptico_uy",
    fecha: "2026-02-08T20:00:00-03:00",
    texto: "Encuesta seria para el grupo. Sin insultar, que despues vienen los reportes.",
    imagen: null,
    grupo: "mateando",
    likes: 96,
    comentarios: [
      { autor: "taxi_cx_1420", texto: "Yo vote sacarlo y lo vuelvo a votar", fecha: "2026-02-08T20:45:00-03:00" },
      { autor: "rivera_frontera", texto: "aca del otro lado tambien se quejan igualito. es universal", fecha: "2026-02-08T22:10:00-03:00" }
    ],
    encuesta: {
      pregunta: "El VAR: se queda, se saca o se arregla?",
      opciones: [
        { texto: "Se queda como está", votos: 87 },
        { texto: "Se saca y listo", votos: 241 },
        { texto: "Se queda pero con tiempo límite", votos: 196 }
      ],
      cierra: "2026-02-15T20:00:00-03:00"
    }
  },

  {
    id: 3066,
    autor: "esceptico_uy",
    fecha: "2026-07-30T21:15:00-03:00",
    texto: "Planilla actualizada hasta la fecha de este fin de semana. Ocho temporadas cargadas a mano, celda por celda. Si alguien la quiere para mirar números, la comparto y listo, no tiene ningun misterio.",
    imagen: null,
    grupo: null,
    likes: 58,
    comentarios: [
      { autor: "contadora.gimenez", texto: "Ocho temporadas a mano. Respeto absoluto y también preocupación.", fecha: "2026-07-30T22:00:00-03:00" },
      { autor: "hacker_del_prado", texto: "Si querés te muestro como automatizar la carga. Te ahorras horas.", fecha: "2026-07-31T00:30:00-03:00",
        respuestas: [
          { autor: "esceptico_uy", texto: "Gracias, pero cargarla a mano es la parte que me gusta.", fecha: "2026-07-31T08:15:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },

  /* =====================================================================
     dona_elsa_74 — Elsa Barrios, 68, jardinera, Paysandú. Perro: Duque.
     Se confunde con dona_elsa_47 (Elsa Perdomo, 74, La Teja, perra Negrita).
     ===================================================================== */

  {
    id: 3070,
    autor: "dona_elsa_74",
    fecha: "2022-03-02T15:20:00-03:00",
    texto: "Hice dulce de membrillo con los del fondo de casa. Me salieron catorce frascos. Si alguna vecina quiere la receta se la paso, no tiene ningun secreto: fruta, azucar y paciencia 🍯",
    imagen: null,
    grupo: "cocina",
    likes: 46,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Estimada Elsa, así lo hacía mi madre. Con cáscara y todo, que es donde está el sabor. Muchas gracias por compartir.", fecha: "2022-03-02T17:40:00-03:00" },
      { autor: "sofi.tortasfritas", texto: "Catorce frascos! Sos una maquina. Mandame foto que lo comparto.", fecha: "2022-03-02T19:00:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3071,
    autor: "dona_elsa_74",
    fecha: "2022-10-08T10:30:00-03:00",
    texto: "Se abrieron los rosales de la entrada. El rojo lo planto mi marido hace veintidos años y sigue dando mas q todos los otros juntos 🌹 Gracias Dios por las cosas simples 🙏",
    imagen: null,
    grupo: null,
    likes: 88,
    comentarios: [
      { autor: "apicultor_florida", texto: "Qué lindo. Si tiene rosales así, tiene abejas cerca. No las espante 🐝", fecha: "2022-10-08T12:15:00-03:00" },
      { autor: "costa_dorada_vecina", texto: "Preciosos. Una sola observación con todo cariño: es Dios, sin tilde. Perdón, no lo puedo evitar.", fecha: "2022-10-08T14:00:00-03:00",
        respuestas: [
          { autor: "dona_elsa_74", texto: "Gracias querida, ya lo se pero el telefono me pone lo q quiere 😅", fecha: "2022-10-08T15:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },

  {
    id: 3072,
    autor: "dona_elsa_74",
    fecha: "2023-08-27T16:00:00-03:00",
    texto: "Susto grande. Duque se escapo por el porton a la mañana y aparecio recien ahora, mojado y con cara de nada. Es marron, grandote y viejo, si alguna vez lo ven suelto por el barrio avisen 🐕🙏",
    imagen: null,
    grupo: "mascotas",
    likes: 104,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Menos mal que apareció. Fijate de ponerle chapita con teléfono, es lo más barato y lo que más sirve.", fecha: "2023-08-27T17:20:00-03:00" },
      { autor: "agronomo_paysandu", texto: "Yo ando por esa zona. Si lo veo la aviso, señora.", fecha: "2023-08-27T18:40:00-03:00" },
      { autor: "vecina.malvin.rosa", texto: "Que alivio. Los portones que no cierran son un tema, aca tengo tres reclamos por lo mismo.", fecha: "2023-08-27T20:00:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3073,
    autor: "dona_elsa_74",
    fecha: "2024-09-21T11:15:00-03:00",
    texto: "Buenos dias. Ayer me llegaron muchisimos saludos de gente de La Teja y varios me preguntaron por una perrita q se llama Negrita. Yo soy de Paysandu, tengo 68 años y mi perro se llama Duque 🐕 Debe haber otra señora Elsa en Montevideo. q Dios la bendiga a ella tambien 🙏 Pero no me manden mas las cadenas a mi q no entiendo nada.",
    imagen: null,
    grupo: null,
    likes: 167,
    comentarios: [
      { autor: "dona_elsa_47", texto: "SEÑORA DISCULPE USTED. LA NEGRITA ES MIA, TIENE 11 AÑOS. YO SOY LA DE LA TEJA. NOS PUSIERON EL MISMO NOMBRE Y NO FUE A PROPOSITO. QUE DIOS LA BENDIGA Y A SU PERRO TAMBIEN. AMEN 🙏", fecha: "2024-09-21T12:00:00-03:00",
        respuestas: [
          { autor: "dona_elsa_74", texto: "No se preocupe señora, un gusto conocerla. Cuideme a la Negrita 🙏", fecha: "2024-09-21T13:10:00-03:00" }
        ]
      },
      { autor: "mama_de_tres_mvd", texto: "Ayy perdón, yo le mandé una cadena a la que no era 🙈", fecha: "2024-09-21T14:20:00-03:00" },
      { autor: "hacker_del_prado", texto: "Para los que vengan a mirar: una tiene 47 en el nombre y la otra 74. Son los mismos dos números dados vuelta. Nada mas que eso.", fecha: "2024-09-21T16:45:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3074,
    autor: "dona_elsa_74",
    fecha: "2025-05-04T09:40:00-03:00",
    texto: "Anoche helo feo. Tape los helechos y los gajos nuevos con bolsas y unas sabanas viejas. Los rosales aguantan solos, ya son grandes 🌷",
    imagen: null,
    grupo: null,
    likes: 52,
    comentarios: [
      { autor: "apicultor_florida", texto: "Aca también heló. Buena mano lo de las sabanas, la bolsa sola quema la hoja si toca.", fecha: "2025-05-04T11:00:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3075,
    autor: "dona_elsa_74",
    fecha: "2025-12-14T18:30:00-03:00",
    texto: "Pascualina como la hacia mi madre: acelga bien escurrida, huevo entero adentro y masa comprada, no voy a mentir. El secreto es escurrir la acelga con las manos hasta que duela 🥧",
    imagen: null,
    grupo: "cocina",
    likes: 121,
    comentarios: [
      { autor: "sofi.tortasfritas", texto: "ESO. Escurrir hasta q duela. La gente no lo hace y despues se le hace un charco.", fecha: "2025-12-14T19:40:00-03:00" },
      { autor: "chef_carmelo", texto: "Masa comprada. Bueno. No voy a decir nada.", fecha: "2025-12-14T21:00:00-03:00",
        respuestas: [
          { autor: "dona_elsa_74", texto: "Cuando tengas 68 años y las manos como las mias vas a comprar la masa vos tambien, querido 😄", fecha: "2025-12-14T21:45:00-03:00" }
        ]
      },
      { autor: "pastelera.zuni", texto: "Impecable la respuesta. Un saludo cordial, Elsa.", fecha: "2025-12-15T08:20:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3076,
    autor: "dona_elsa_74",
    fecha: "2026-07-26T15:10:00-03:00",
    texto: "El jardin en invierno da lastima pero da trabajo igual. Pode los rosales cortito y Duque durmio al sol tres horas sin moverse. Ojala fuera perro 🐕☀️",
    imagen: null,
    grupo: "mascotas",
    likes: 78,
    comentarios: [
      { autor: "caro.veterinaria", texto: "A esa edad el sol de invierno les hace bárbaro a las articulaciones. Dejalo nomás.", fecha: "2026-07-26T16:30:00-03:00" },
      { autor: "costa_dorada_vecina", texto: "Todas queremos ser Duque, Elsa.", fecha: "2026-07-26T18:00:00-03:00" }
    ],
    encuesta: null
  },

  /* =====================================================================
     mama_alerta_mvd — Silvana Rey, 45, Piedras Blancas.
     Se confunde con mama_alerta_uy (Verónica Cuello, Las Piedras).
     ===================================================================== */

  {
    id: 3080,
    autor: "mama_alerta_mvd",
    fecha: "2023-04-18T20:10:00-03:00",
    texto: "Vecinos, la luz de la esquina de casa hace tres semanas que esta quemada y los gurises salen del liceo a las siete con oscuridad total. Ya llame dos veces. Si alguien mas reclama capaz que nos escuchan.",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 43,
    comentarios: [
      { autor: "vecina.malvin.rosa", texto: "Reclamá por escrito y pedi número de expediente. Por telefono no queda constancia de nada, te lo digo por experiencia.", fecha: "2023-04-18T21:00:00-03:00" },
      { autor: "pastelera.zuni", texto: "Estimada, yo también soy de Piedras Blancas. Aca pasa lo mismo hace meses.", fecha: "2023-04-18T21:40:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3081,
    autor: "mama_alerta_mvd",
    fecha: "2023-11-05T13:00:00-03:00",
    texto: "Aparecio un gato naranja grandote en el fondo de casa, muy manso y con collar rojo. No parece de la calle. Lo tengo aca con agua y comida hasta que aparezca el dueño",
    imagen: null,
    grupo: "mascotas",
    likes: 61,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Si tiene collar, casi seguro es de la cuadra. Fijate si tiene chip, en cualquier veterinaria te lo leen gratis.", fecha: "2023-11-05T14:20:00-03:00",
        respuestas: [
          { autor: "mama_alerta_mvd", texto: "Lo lleve y tenia! Ya aparecio la dueña, vive a dos cuadras. Gracias 🙏", fecha: "2023-11-06T10:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },

  {
    id: 3082,
    autor: "mama_alerta_mvd",
    fecha: "2024-07-12T19:30:00-03:00",
    texto: "Me estan escribiendo enojados por un audio de una camioneta blanca cerca de una escuela que YO NO PUBLIQUE. No fui yo. Fijense bien el nombre de la cuenta antes de reclamar. La otra termina en uy y es de Las Piedras, yo soy de Piedras Blancas y termino en mvd. Ya se que suena parecido, no lo elegi para confundir a nadie.",
    imagen: null,
    grupo: null,
    likes: 97,
    comentarios: [
      { autor: "bomberito_ruiz", texto: "Aprovecho: ese audio circula desde 2021 y es de otro país. Chequeen la fecha antes de reenviar, sea quien sea que lo publique.", fecha: "2024-07-12T20:15:00-03:00" },
      { autor: "mama_alerta_uy", texto: "Yo tampoco lo publique, a mi me llego reenviado de un grupo de madres. Igual prefiero avisar de mas y no de menos.", fecha: "2024-07-12T21:00:00-03:00",
        respuestas: [
          { autor: "mama_alerta_mvd", texto: "Todo bien, pero si te llegan los reclamos a vos no me los mandes a mi. Ya me escribieron nueve personas.", fecha: "2024-07-12T21:40:00-03:00" }
        ]
      },
      { autor: "vecina.malvin.rosa", texto: "Dos cuentas con el mismo nombre y distinta terminación. Un desorden. Habría que poder reservar el nombre.", fecha: "2024-07-12T22:30:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3083,
    autor: "mama_alerta_mvd",
    fecha: "2025-02-26T21:00:00-03:00",
    texto: "Paso la poda y dejaron todas las ramas en la vereda hace ocho dias. Con la lluvia se esta pudriendo y hay bichos. Alguien sabe a quien hay que llamar por esto?",
    imagen: null,
    grupo: "vecinos-cerro",
    likes: 38,
    comentarios: [
      { autor: "elrusodelquiosco", texto: "Aca en Goes las dejaron un mes. Un mes", fecha: "2025-02-26T21:45:00-03:00" },
      { autor: "vecina.malvin.rosa", texto: "Va por levante de residuos voluminosos, no por poda. Es otro trámite y por eso nunca te contestan.", fecha: "2025-02-26T22:30:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3084,
    autor: "mama_alerta_mvd",
    fecha: "2025-09-30T18:20:00-03:00",
    texto: "Comparti a la mañana una alerta que me pasaron y me avisaron que era de hace cuatro años y de otro lado. Ya la borre. Perdon, no quiero asustar a nadie. Voy a chequear mejor antes de subir cosas",
    imagen: null,
    grupo: null,
    likes: 112,
    comentarios: [
      { autor: "bomberito_ruiz", texto: "Esto es lo correcto y casi nadie lo hace. Gracias en serio.", fecha: "2025-09-30T19:00:00-03:00" },
      { autor: "hacker_del_prado", texto: "Si te llega algo y tenés dudas mandámelo antes de reenviar. Te contesto rápido y con capturas.", fecha: "2025-09-30T20:15:00-03:00" },
      { autor: "escepticouy", texto: "Rectificar públicamente es más difícil que publicar. Bien ahí.", fecha: "2025-09-30T21:30:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3085,
    autor: "mama_alerta_mvd",
    fecha: "2026-07-06T20:40:00-03:00",
    texto: "Se perdio un perro chico blanco y marron en Piedras Blancas, cerca de la plaza, hoy tipo cuatro de la tarde. Es de una vecina de aca enfrente que no tiene esta red. Cualquier cosa me avisan a mi.",
    imagen: null,
    grupo: "mascotas",
    likes: 84,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Estimada, lo voy a preguntar en el barrio. Suelen aparecer cerca de las panaderías, es un clasico.", fecha: "2026-07-06T21:20:00-03:00" },
      { autor: "caro.veterinaria", texto: "Poné hora y esquina exacta si podés, ayuda mucho más que la foto.", fecha: "2026-07-06T22:00:00-03:00" },
      { autor: "dona_elsa_47", texto: "REZANDO PARA QUE APAREZCA EL PERRITO 🙏🙏", fecha: "2026-07-07T08:30:00-03:00" }
    ],
    encuesta: null
  },

  /* =====================================================================
     hacker.del.prado — Franco Núñez, 17, gamer, Prado.
     Se confunde con hacker_del_prado (Mauro Lema, informático, 24).
     ===================================================================== */

  {
    id: 3090,
    autor: "hacker.del.prado",
    fecha: "2024-04-20T23:50:00-03:00",
    texto: "hola. me abrí cuenta pq mis amigos estan todos aca. el nick me lo puse a los 12 y ya fue, no lo cambio mas. juego casi todas las noches, si me quieren sumar a la party avisen 🎮",
    imagen: null,
    grupo: null,
    likes: 22,
    comentarios: [
      { autor: "elpibe.delcerro", texto: "bo ese nombre te va a traer problemas jajajaj", fecha: "2024-04-21T00:30:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3091,
    autor: "hacker.del.prado",
    fecha: "2024-08-11T22:30:00-03:00",
    texto: "me quede sin datos en la mitad de la partida y estabamos ganando. mi vieja no me quiere recargar hasta el viernes. estoy destruido 😭",
    imagen: null,
    grupo: null,
    likes: 47,
    comentarios: [
      { autor: "elpibe.delcerro", texto: "clasico. yo juego con el wifi del vecino y anda mejor q el mio", fecha: "2024-08-11T23:10:00-03:00" },
      { autor: "elrusodelquiosco", texto: "Recargas hago yo pibe, pero no fio a los que no conozco.", fecha: "2024-08-12T09:00:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3092,
    autor: "hacker.del.prado",
    fecha: "2025-01-15T02:10:00-03:00",
    texto: "gente por favor NO SE que hacer con las cuentas de nadie 😭 esta semana me escribieron 6 personas para que les recupere el instagram y una señora para que le entre al telefono del marido. yo tengo 17 años y juego, nada mas. el que sabe de eso es el otro, el del guion bajo. yo ni se prender la compu de mi hermana",
    imagen: null,
    grupo: null,
    likes: 231,
    comentarios: [
      { autor: "hacker_del_prado", texto: "Confirmo que no somos la misma persona. Y aclaro de paso que yo tampoco lo hago, ni gratis ni pago. Aguante el pibe.", fecha: "2025-01-15T02:40:00-03:00",
        respuestas: [
          { autor: "hacker.del.prado", texto: "gracias capo. te mando toda la gente para alla 🙏", fecha: "2025-01-15T02:55:00-03:00" },
          { autor: "hacker_del_prado", texto: "No hagas eso.", fecha: "2025-01-15T03:05:00-03:00" }
        ]
      },
      { autor: "marce.peluquera", texto: "perdón pero igual te consulto, se me cerró el perfil y tengo todas las clientas ahi 🙈🙈", fecha: "2025-01-15T09:20:00-03:00" },
      { autor: "elpibe.delcerro", texto: "te lo dije en abril bo 💀", fecha: "2025-01-15T11:00:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3093,
    autor: "hacker.del.prado",
    fecha: "2025-07-03T21:15:00-03:00",
    texto: "prueba de matematica mañana y yo con la party armada a las 10. alguien me explica los logaritmos en 20 minutos porfa",
    imagen: null,
    grupo: "mateando",
    likes: 88,
    comentarios: [
      { autor: "laura.rambla", texto: "Primero la prueba. Después la partida. Te lo dice alguien que corrigió miles de pruebas hechas a las apuradas.", fecha: "2025-07-03T21:50:00-03:00" },
      { autor: "estudiante_utec", texto: "Te paso un resumen que hice yo, sirve. Igual estudiá, no es magia.", fecha: "2025-07-03T22:30:00-03:00" },
      { autor: "nurse_valentina", texto: "Yo di esa prueba tres veces. Andá a dormir.", fecha: "2025-07-04T04:10:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 3094,
    autor: "hacker.del.prado",
    fecha: "2026-03-20T23:40:00-03:00",
    texto: "se me rompio el auricular justo del lado del micrófono. alguien sabe de alguno barato q ande? no tengo plata, aviso de antemano",
    imagen: null,
    grupo: null,
    likes: 35,
    comentarios: [
      { autor: "elpibe.delcerro", texto: "los de 400 pesos duran 2 meses pero por 400 pesos q queres", fecha: "2026-03-21T00:20:00-03:00" },
      { autor: "coleccionista_cx", texto: "Si el cable se cortó cerca de la ficha se suelda y queda como nuevo. Un soldador de 30 watts y tres minutos.", fecha: "2026-03-21T10:15:00-03:00",
        respuestas: [
          { autor: "hacker.del.prado", texto: "no tengo soldador ni idea de nada pero gracias igual señor", fecha: "2026-03-21T14:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },

  {
    id: 3095,
    autor: "hacker.del.prado",
    fecha: "2026-08-01T01:30:00-03:00",
    texto: "torneo interno con los del liceo, quedamos terceros de ocho. no esta mal. ahora a dormir q mañana mi vieja me levanta a las 10 igual 💀",
    imagen: null,
    grupo: "mateando",
    likes: 52,
    comentarios: [
      { autor: "basquet_aguada_fan", texto: "TERCEROS ES PODIO. Eso es HISTORICO guri.", fecha: "2026-08-01T02:00:00-03:00" },
      { autor: "elpibe.delcerro", texto: "el año q viene ganamos ta 🔥", fecha: "2026-08-01T02:15:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 3096,
    autor: "mateamargo87",
    fecha: "2024-11-03T20:15:00-03:00",
    texto: "Termine el reparto por Melo y me quedaron dos cajones sin entregar porque no habia nadie. Manana de vuelta. 44 anos y sigo cargando solo la camioneta, ni un ayudante me dan.",
    imagen: null,
    grupo: null,
    likes: 7,
    comentarios: [
      { autor: "camionero_ruta5", texto: "Aldo si pasas por la 7 avisame que te doy una mano con la descarga.", fecha: "2024-11-03T21:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 3097,
    autor: "charrua.libre",
    fecha: "2023-08-22T16:40:00-03:00",
    texto: "Termine una cartera de cuero de vaqueta que me encargaron para un casamiento en Tacuarembo. Tres semanas de laburo. El cuero cuando es bueno se nota a la legua. Aca en el taller no se hace nada apurado.",
    imagen: "media/herramienta.svg",
    grupo: "comprovendo",
    likes: 31,
    comentarios: [
      { autor: "young_bicicleteria", texto: "Un lujo. En el interior todavia quedamos algunos que hacemos las cosas a mano.", fecha: "2023-08-22T18:10:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 3098,
    autor: "tero_anon_2018",
    fecha: "2025-03-14T08:30:00-03:00",
    texto: "Llego carga de arena y portland a la barraca. Precios de marzo, antes de que suba todo de vuelta. El que esta por arrancar la obra que se apure. Estamos sobre la ruta en Paysandu, al lado de la estacion.",
    imagen: null,
    grupo: "comprovendo",
    likes: 12,
    comentarios: [
      { autor: "pintor_rodri", texto: "Marcos tenes bolsas de cal tambien? necesito para una fachada", fecha: "2025-03-14T10:00:00-03:00",
        respuestas: [
          { autor: "tero_anon_2018", texto: "Si, tengo. Pasa cuando quieras que te la cargo.", fecha: "2025-03-14T10:30:00-03:00" }
        ] }
    ],
    encuesta: null
  },
  {
    id: 3099,
    autor: "hacker.del.prado",
    fecha: "2025-12-28T23:50:00-03:00",
    texto: "17 horas seguidas en el ranked y BAJE de division. 17 HORAS. Me quiero ir del pais. Manana arranco de nuevo, esta vez con la de soporte.",
    imagen: null,
    grupo: null,
    likes: 18,
    comentarios: [
      { autor: "elpibe.delcerro", texto: "franco andate a dormir loco jajaja", fecha: "2025-12-29T00:20:00-03:00" },
      { autor: "basquet_aguada_fan", texto: "17 horas es un laburo full time gurisa. Descansa.", fecha: "2025-12-29T01:10:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 3100,
    autor: "esceptico_uy",
    fecha: "2026-06-15T22:30:00-03:00",
    texto: "Otra vez el VAR cobrando lo que quiere. Yo no digo que este arreglado, digo que si una maquina tarda 4 minutos en decidir un offside, la maquina no sirve o el que la maneja no sabe. Fernando dixit.",
    imagen: null,
    grupo: null,
    likes: 44,
    comentarios: [
      { autor: "taxi_cx_1420", texto: "Y el fin de semana pasado lo mismo. Un desastre.", fecha: "2026-06-15T22:55:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 3101,
    autor: "mama_alerta_mvd",
    fecha: "2026-05-20T12:10:00-03:00",
    texto: "Vecinos de Piedras Blancas: perdi un juego de llaves ayer entre la feria y la parada del 405. Llavero rojo con un tero de goma. Si alguien lo encontro por favor avise. Gracias!",
    imagen: null,
    grupo: null,
    likes: 15,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Silvana fijate en el puesto de verdura, la otra vez alguien dejo unas llaves ahi.", fecha: "2026-05-20T13:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 3102,
    autor: "mateamargo87",
    fecha: "2026-07-11T19:00:00-03:00",
    texto: "Alguien de Melo que sepa de camionetas viejas? La Kangoo me esta tirando un ruido raro adelante cuando freno. No quiero ir al mecanico si es una pavada. 44 anos y sigo aprendiendo mecanica a la fuerza.",
    imagen: null,
    grupo: null,
    likes: 6,
    comentarios: [
      { autor: "camionero_ruta5", texto: "Aldo si chilla al frenar son las pastillas, casi seguro. No manejes mucho asi.", fecha: "2026-07-11T20:15:00-03:00" }
    ],
    encuesta: null
  }
];
