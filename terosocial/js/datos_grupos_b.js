/* TeroSocial - grupos: ruta, aves, radioaficionados, docentes, cocina */

window.GRUPOS_B = [
  {
    slug: "ruta5",
    nombre: "Ruta 5: camioneros y ruteros",
    descripcion: "Grupo de los que vivimos arriba de la 5, de Montevideo a Rivera. Se avisa niebla, control, obra, camion cruzado, animal suelto y donde se come bien. El que avisa salva a otro, asi de simple.",
    reglas: [
      "Kilometro y hora SIEMPRE. Un aviso sin kilometro no sirve para nada.",
      "Si el dato es de oidas, aclaralo. No queremos rumores dando vueltas a 90 por hora.",
      "Nada de compraventa. Para eso esta Compro y Vendo.",
      "Precios de gasoil con estacion y fecha, si no es cualquier cosa.",
      "Si hay accidente: se avisa, no se sube foto del accidentado. Punto."
    ],
    privacidad: "publico",
    miembros: 3120,
    creado: "2021-02-18",
    administradores: ["camionero_ruta5", "guarda_101"],
    color: "#a4763c"
  },
  {
    slug: "aves",
    nombre: "Avistaje de aves del Uruguay",
    descripcion: "Registro serio de avistajes en todo el pais. Ficha con especie, fecha, hora, lugar y coordenadas si las tenes. Aca se corrige y se agradece la correccion: nadie nacio sabiendo separar un carancho de un chimango.",
    reglas: [
      "Ficha completa: especie, fecha, hora, lugar. Coordenadas opcionales pero bienvenidas.",
      "Si no estas seguro de la especie, poné cf. o directamente pedí ayuda. No pasa nada.",
      "Corregir se hace con argumento y con respeto. El que corrige explica por que.",
      "Nada de audios ni playback para atraer aves en epoca reproductiva.",
      "No se publican ubicaciones exactas de nidos activos ni de especies amenazadas.",
      "Prohibido comprar, vender o exhibir aves enjauladas."
    ],
    privacidad: "publico",
    miembros: 1184,
    creado: "2019-09-12",
    administradores: ["el_tero_viajero", "caro.veterinaria"],
    color: "#3f7d54"
  },
  {
    slug: "cx-radio",
    nombre: "Radioaficionados CX",
    descripcion: "Espacio para los colegas de la banda. Reportes de propagacion, antenas caseras, DX, concursos y consultas de los que recien empiezan. Fundado por CX8RE en 2019, con la idea de que el que sabe le pase la posta al que no.",
    reglas: [
      "Identificate con tu indicativo al publicar. Si no tenes, decilo y bienvenido igual.",
      "Frecuencia, hora y reporte RST en los relatos de contacto.",
      "No se publican datos personales de otros colegas sin permiso.",
      "El debate sobre licencias esta permitido; la falta de respeto no.",
      "Compraventa de equipos: solo los sabados, en el hilo mensual."
    ],
    privacidad: "publico",
    miembros: 412,
    creado: "2019-04-03",
    administradores: ["elabuelo_radioCX8"],
    color: "#4a6fa5"
  },
  {
    slug: "docentes",
    nombre: "Docentes en red",
    descripcion: "Grupo cerrado de maestras, profesores y auxiliares de la escuela publica. Planificaciones, aula, gremio, y tambien el desahogo que hace falta. Lo que se dice adentro se queda adentro.",
    reglas: [
      "Grupo cerrado. No se comparten capturas afuera, por respeto a los gurises y a las familias.",
      "Nombres de alumnos: nunca completos. Iniciales o nada.",
      "Se comparten materiales, no se venden. Aca no se cobra por una planificacion.",
      "El debate gremial es bienvenido; la chicana partidaria no.",
      "Si vas a pedir ayuda con un caso dificil, contá el contexto sin exponer a nadie."
    ],
    privacidad: "cerrado",
    miembros: 2860,
    creado: "2020-04-22",
    administradores: ["sec.gremio.docente", "laura.rambla"],
    color: "#b4574a"
  },
  {
    slug: "cocina",
    nombre: "Cocina uruguaya de verdad",
    descripcion: "Recetas, mano y discusion. El chivito, la milanesa, la tortilla, el asado y todo lo que nos separa como pueblo. Se pelea con la receta en la mano: el que afirma, cocina y muestra.",
    reglas: [
      "Receta con cantidades. Un por ojo esta bien, pero decime de que tamaño es el ojo.",
      "Se puede discutir todo menos faltar el respeto a la abuela de otro.",
      "Nada de promocion de negocios sin avisar que es promocion.",
      "Si copiaste la receta de algun lado, decilo. No cuesta nada.",
      "Las fotos, con luz de dia. Nos hacemos ese favor."
    ],
    privacidad: "publico",
    miembros: 5940,
    creado: "2020-07-09",
    administradores: ["sofi.tortasfritas", "pastelera.zuni"],
    color: "#d08a2e"
  }
];

window.POSTS_GRUPOS_B = [
  {
    id: 2500,
    autor: "camionero_ruta5",
    fecha: "2021-02-18T21:40:00-03:00",
    texto: "FIJADO. Bienvenidos al grupo. Arranco con lo unico que pido: KILOMETRO Y HORA. Un aviso que dice hay niebla en la 5 no sirve, la 5 tiene 500 kilometros. Si decis niebla cerrada km 182 sentido norte 06:20, eso salva a alguien. El resto lo hablamos tomando mate.",
    imagen: null,
    grupo: "ruta5",
    likes: 214,
    comentarios: [
      { autor: "productor_durazno", texto: "Bien ahi Walter. Yo estoy en el 182 justamente, cualquier cosa aviso desde aca", fecha: "2021-02-18T22:05:00-03:00" },
      { autor: "taxi_cx_1420", texto: "Yo no ando por la 5 mas alla del peaje pero me sirve igual, che. Adentro.", fecha: "2021-02-19T08:12:00-03:00",
        respuestas: [
          { autor: "camionero_ruta5", texto: "Todo suma Wilson. Vos avisa lo de Montevideo que es donde nos comemos los quilombos", fecha: "2021-02-19T09:30:00-03:00" }
        ]
      },
      { autor: "guarda_101", texto: "Me sumo como admin, laburo linea urbana pero la 5 hasta Las Piedras me la se de memoria.", fecha: "2021-02-19T10:44:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2501,
    autor: "camionero_ruta5",
    fecha: "2022-06-14T06:18:00-03:00",
    texto: "NIEBLA CERRADA KM 176 AL 190, SENTIDO NORTE, 06:15. VISIBILIDAD 30 METROS, NO EXAGERO. VENGO A 40 CON LAS BALIZAS. NO ADELANTEN",
    imagen: null,
    grupo: "ruta5",
    likes: 88,
    comentarios: [
      { autor: "productor_durazno", texto: "Confirmo, aca en el campo no se ve el alambrado. Es del rio, se levanta como a las 9.", fecha: "2022-06-14T06:31:00-03:00" },
      { autor: "tambero_sanjose", texto: "Aca en San Jose lo mismo desde las 5. Sali con el tanque y no veia la tranquera", fecha: "2022-06-14T06:40:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2502,
    autor: "taxi_cx_1420",
    fecha: "2022-09-03T13:20:00-03:00",
    texto: "Pregunta seria: alguien me explica por que en el acceso de la 5 con Camino Melilla ponen un semaforo nuevo y no arreglan el bache que esta 20 metros antes. Es una obra de arte del absurdo. Me rompi un amortiguador ahi en marzo.",
    imagen: null,
    grupo: "ruta5",
    likes: 61,
    comentarios: [
      { autor: "laspiedras_mecanico", texto: "Traelo que lo veo. Amortiguador delantero derecho seguro, todos vienen con ese.", fecha: "2022-09-03T14:02:00-03:00",
        respuestas: [
          { autor: "taxi_cx_1420", texto: "Delantero derecho, exacto. Sos brujo o ya lo arreglaste a medio Montevideo.", fecha: "2022-09-03T14:15:00-03:00" },
          { autor: "laspiedras_mecanico", texto: "Las dos cosas Wilson jaja. Veni un martes que estoy mas tranquilo.", fecha: "2022-09-03T14:40:00-03:00" }
        ]
      },
      { autor: "ing.rossi", texto: "El semaforo responde a un estudio de siniestralidad en la interseccion, no a la carpeta asfaltica. Son partidas distintas. Que sea absurdo no lo discuto.", fecha: "2022-09-03T18:55:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2503,
    autor: "tambero_sanjose",
    fecha: "2023-03-21T05:12:00-03:00",
    texto: "5 y 10 de la mañana, camion de la leche saliendo. Aviso que en el empalme viejo hay una vaca suelta del lado del alambrado caido, kilometro 61 aproximado. Ya avise al vecino pero por las dudas vayan despacio que es negra y a esta hora no la ven",
    imagen: null,
    grupo: "ruta5",
    likes: 97,
    comentarios: [
      { autor: "camionero_ruta5", texto: "GRACIAS ERNESTO. Paso por ahi en 40 minutos", fecha: "2023-03-21T05:20:00-03:00" },
      { autor: "remis_nocturno_mvd", texto: "Yo la vi a las 3 y pico y pense que era una sombra. Menos mal que venia despacio.", fecha: "2023-03-21T05:48:00-03:00" },
      { autor: "el_tero_viajero", texto: "Ojo que si hay una hay tres. Nunca vi una vaca sola en la ruta.", fecha: "2023-03-21T07:10:00-03:00",
        respuestas: [
          { autor: "tambero_sanjose", texto: "Y si. A las 8 el hombre habia juntado cuatro.", fecha: "2023-03-21T09:02:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2504,
    autor: "guarda_101",
    fecha: "2023-07-08T19:35:00-03:00",
    texto: "Consulta a los que bajan de Tacuarembo: a que hora les conviene entrar a Montevideo para no comerse el tapon de Sayago. Yo digo antes de las 6 de la mañana o despues de las 10. Todo lo del medio es sufrimiento puro.",
    imagen: null,
    grupo: "ruta5",
    likes: 44,
    comentarios: [
      { autor: "camionero_ruta5", texto: "Yo entro 4:30 o me quedo en el 24 tomando mate hasta las 10. No hay tercera opcion.", fecha: "2023-07-08T20:01:00-03:00" },
      { autor: "melo_ferretero", texto: "Yo vengo por la 8 asi que ni opino, pero el tapon de ustedes es una fiesta comparado con la entrada por Pando.", fecha: "2023-07-08T20:44:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2505,
    autor: "el_tero_viajero",
    fecha: "2023-11-12T18:50:00-03:00",
    texto: "Parada obligada en el km 137, Sarandi Grande. Baje a estirar las piernas y me agarro esta luz. f/8, 1/250, ISO 200, sin filtro. La 5 al atardecer entre el 130 y el 150 es de las cosas mas lindas que tiene este pais y nadie habla de eso.",
    imagen: "media/fotos/campo_3.jpg",
    grupo: "ruta5",
    likes: 176,
    comentarios: [
      { autor: "productor_durazno", texto: "Linda foto. Ese cielo asi anaranjado despues de una seca larga es puro polvo en suspension, ojo", fecha: "2023-11-12T19:22:00-03:00",
        respuestas: [
          { autor: "el_tero_viajero", texto: "Tal cual Anibal, por eso el naranja. Lo lindo y lo feo son la misma cosa a veces.", fecha: "2023-11-12T19:40:00-03:00" }
        ]
      },
      { autor: "taxi_cx_1420", texto: "Yo veo el mismo cielo desde Avenida Italia y no me sale asi, sera la camara", fecha: "2023-11-12T21:05:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2506,
    autor: "remis_nocturno_mvd",
    fecha: "2024-02-09T03:24:00-03:00",
    texto: "3 y 20 de la mañana, vengo del aeropuerto para Canelones y agarre la 5 desde el 24. Aviso: hay control de transito en el km 31, dos motos y un patrullero. Piden libreta y cedula del vehiculo, nada raro, pero si andas apurado sumale diez minutos.",
    imagen: null,
    grupo: "ruta5",
    likes: 72,
    comentarios: [
      { autor: "taxi_cx_1420", texto: "Julio vos sos el unico que da datos de madrugada. El resto dormimos como gente.", fecha: "2024-02-09T07:30:00-03:00" },
      { autor: "guarda_101", texto: "Ese control lo ponen los fines de semana largos. Aviso a los compañeros del turno.", fecha: "2024-02-09T08:15:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2507,
    autor: "melo_ferretero",
    fecha: "2024-04-17T10:05:00-03:00",
    texto: "Buenas. Tengo cadenas para camion y fajas de amarre en stock, precio de mayo. Si alguno anda necesitando avise que le hago precio de compañero.",
    imagen: null,
    grupo: "ruta5",
    likes: 12,
    comentarios: [
      { autor: "camionero_ruta5", texto: "Carlos, con todo respeto: regla 3. Esto no es un grupo de compraventa. Pasalo a Compro y Vendo y ahi te lo comparto yo mismo.", fecha: "2024-04-17T10:31:00-03:00",
        respuestas: [
          { autor: "melo_ferretero", texto: "Tenes razon, me colgue. Lo bajo. Perdon muchachos", fecha: "2024-04-17T10:44:00-03:00" },
          { autor: "camionero_ruta5", texto: "Nada que perdonar. Lo dejo arriba media hora mas asi lo ven y despues lo borramos.", fecha: "2024-04-17T10:50:00-03:00" }
        ]
      },
      { autor: "laspiedras_mecanico", texto: "Igual anoto, che. Las fajas se me terminan siempre en el peor momento.", fecha: "2024-04-17T12:20:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2508,
    autor: "ing.rossi",
    fecha: "2024-08-30T09:12:00-03:00",
    texto: "Sobre la obra del km 98 al 104. Adjunto razonamiento: el paso alternado con semaforo movil tiene ciclo de 4 minutos por sentido. Con un flujo estimado de 900 vehiculos hora en la punta de la mañana, la cola teorica supera los 600 metros. Es decir, la demora de 8 minutos que anuncian es optimista. Lo digo sin animo de polemizar.",
    imagen: null,
    grupo: "ruta5",
    likes: 39,
    comentarios: [
      { autor: "camionero_ruta5", texto: "Fabian, yo pase ayer 07:40 y espere 22 minutos. Asi que su cuenta le queda corta incluso", fecha: "2024-08-30T09:40:00-03:00",
        respuestas: [
          { autor: "ing.rossi", texto: "Interesante. Eso indicaria que el ciclo real es mayor al informado, o que hay un solo banderillero manejando los dos extremos. Gracias por el dato empirico.", fecha: "2024-08-30T10:05:00-03:00" },
          { autor: "camionero_ruta5", texto: "Es un solo banderillero y ademas se va a almorzar. Dato empirico completo.", fecha: "2024-08-30T10:18:00-03:00" }
        ]
      },
      { autor: "productor_durazno", texto: "Ustedes hablan de minutos, yo tengo que sacar hacienda por ahi. Un camion jaula parado 20 minutos al sol es otro tema", fecha: "2024-08-30T11:30:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2509,
    autor: "treintaytres_jinete",
    fecha: "2025-03-06T16:40:00-03:00",
    texto: "Muchachos, aviso pa el que baje con caballos: en la balanza del km 96 estan pidiendo la guia de propiedad y transito. A mi me la pidieron ayer y por suerte la llevaba. Vayan prevenidos que si no te hacen volver.",
    imagen: null,
    grupo: "ruta5",
    likes: 58,
    comentarios: [
      { autor: "productor_durazno", texto: "Siempre la pidieron. Lo que pasa es que ahora la miran de verdad.", fecha: "2025-03-06T17:12:00-03:00" },
      { autor: "camionero_ruta5", texto: "Confirmo, y a los que llevamos carga general nos estan mirando el precinto. Todo bien igual, la gente de la balanza es correcta.", fecha: "2025-03-06T18:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2510,
    autor: "laspiedras_mecanico",
    fecha: "2025-06-19T11:25:00-03:00",
    texto: "Consejo gratis de invierno: revisen las trabas de las cubiertas gemelas antes de subir. Esta semana me entraron tres camionetas y un chasis con piedra trabada entre gemelas. Se calienta, revienta la camara y te quedas en el km 300 con un frio de morirte.",
    imagen: null,
    grupo: "ruta5",
    likes: 103,
    comentarios: [
      { autor: "camionero_ruta5", texto: "ESTO. Yo lo reviso en cada parada, me lleva dos minutos. El que no lo hace se acuerda una sola vez.", fecha: "2025-06-19T12:02:00-03:00" },
      { autor: "tambero_sanjose", texto: "Con el tanque me paso en la 11. Aprendes rapido", fecha: "2025-06-19T13:15:00-03:00" },
      { autor: "melo_ferretero", texto: "El saca piedras de gancho vale dos mangos y te salva el viaje. No digo mas nada por la regla 3", fecha: "2025-06-19T14:40:00-03:00",
        respuestas: [
          { autor: "camionero_ruta5", texto: "Jajaja aprendiste Carlos. Esa pasa", fecha: "2025-06-19T15:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2511,
    autor: "camionero_ruta5",
    fecha: "2026-01-14T22:10:00-03:00",
    texto: "ATENCION. CAMION CRUZADO KM 268, PASO DE LOS TOROS, SENTIDO SUR, 22:05. ESTA CORTADO LOS DOS SENTIDOS. HAY GENTE TRABAJANDO. NO SE SABE CUANTO. EL QUE VIENE DEL NORTE QUE PARE EN CURTINA Y TOME MATE, NO SE MANDEN",
    imagen: null,
    grupo: "ruta5",
    likes: 241,
    comentarios: [
      { autor: "productor_durazno", texto: "Confirmado por un vecino que vive ahi. Dice que hay grua en camino desde Durazno, o sea hora y media", fecha: "2026-01-14T22:22:00-03:00",
        respuestas: [
          { autor: "camionero_ruta5", texto: "GRACIAS ANIBAL. LO PONGO ARRIBA.", fecha: "2026-01-14T22:25:00-03:00" },
          { autor: "remis_nocturno_mvd", texto: "Yo salgo para el norte a las 12, aviso cuando llegue a ver como esta.", fecha: "2026-01-14T22:51:00-03:00" }
        ]
      },
      { autor: "el_tero_viajero", texto: "Alguien sabe si hay heridos? Pregunto sin morbo, tengo un compañero haciendo ese tramo hoy.", fecha: "2026-01-14T22:40:00-03:00",
        respuestas: [
          { autor: "camionero_ruta5", texto: "El chofer salio caminando. Eso es todo lo que voy a decir y no subimos fotos, ya saben la regla.", fecha: "2026-01-14T22:47:00-03:00" }
        ]
      },
      { autor: "taxi_cx_1420", texto: "Que barbaridad. Cuidense muchachos.", fecha: "2026-01-14T23:30:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2512,
    autor: "camionero_ruta5",
    fecha: "2026-01-15T06:02:00-03:00",
    texto: "ACTUALIZO LO DE ANOCHE: KM 268 HABILITADO DESDE LAS 04:40 CON PASO ALTERNADO. QUEDA VIDRIO Y GASOIL EN LA CALZADA ENTRE EL 267 Y EL 269, VAYAN DESPACIO. EL CHOFER ESTA BIEN, GOLPEADO NADA MAS. GRACIAS A TODOS LOS QUE PASARON DATO ANOCHE.",
    imagen: null,
    grupo: "ruta5",
    likes: 188,
    comentarios: [
      { autor: "tambero_sanjose", texto: "Gracias Walter. Esto es lo que hace que el grupo valga", fecha: "2026-01-15T06:15:00-03:00" },
      { autor: "guarda_101", texto: "Aviso a la gente de la empresa que sube a las 7. Gracias.", fecha: "2026-01-15T06:30:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2513,
    autor: "camionero_ruta5",
    fecha: "2026-01-19T20:15:00-03:00",
    texto: "Muchachos, aparte del grupo: el compañero del camion del 268 es de Achar, tiene dos gurises y quedo sin trabajar hasta que le resuelvan el seguro. Con unos cuantos estamos juntando una mano. El que quiera dar algo me escribe por privado, no pongo numeros aca para que nadie se aproveche. Despues rindo cuentas publicas, como corresponde.",
    imagen: null,
    grupo: "ruta5",
    likes: 312,
    comentarios: [
      { autor: "productor_durazno", texto: "Anotame. Y si necesita changa para el verano en el campo tambien, que avise.", fecha: "2026-01-19T20:40:00-03:00" },
      { autor: "melo_ferretero", texto: "Va lo mio. Aparte si necesita algo de la ferreteria para arreglar la casilla, se lo mando sin cargo.", fecha: "2026-01-19T21:02:00-03:00" },
      { autor: "taxi_cx_1420", texto: "Yo no lo conozco al hombre pero pongo IGUAL. Uno nunca sabe cuando le toca", fecha: "2026-01-19T21:35:00-03:00",
        respuestas: [
          { autor: "camionero_ruta5", texto: "Eso Wilson. Esa es la idea", fecha: "2026-01-19T21:50:00-03:00" }
        ]
      },
      { autor: "el_tero_viajero", texto: "Sumado. Aviso tambien en el grupo de aves que hay gente de ruta ahi.", fecha: "2026-01-19T22:10:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2514,
    autor: "camionero_ruta5",
    fecha: "2026-02-11T19:30:00-03:00",
    texto: "RINDO CUENTAS DE LA COLECTA. Juntamos entre 47 personas. Se le compro la garrafa, mercaderia para el mes y se le pago la cuota de la moto que era lo que mas lo tenia mal. El resto se lo dimos en mano delante de dos testigos. El hombre manda un saludo y dice que cuando se recupere sube a agradecer el mismo. Gracias muchachos, en serio.",
    imagen: null,
    grupo: "ruta5",
    likes: 407,
    comentarios: [
      { autor: "guarda_101", texto: "Asi se hace. Transparente y sin vueltas.", fecha: "2026-02-11T19:45:00-03:00" },
      { autor: "tambero_sanjose", texto: "Se me pianta un lagrimon a las 7 de la tarde, mira vos.", fecha: "2026-02-11T20:12:00-03:00" },
      { autor: "productor_durazno", texto: "Bien. La proxima que sea por algo alegre.", fecha: "2026-02-11T20:50:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2515,
    autor: "productor_durazno",
    fecha: "2026-02-24T07:20:00-03:00",
    texto: "Gasoil 50S en la estacion del km 180, Durazno: 54,30 el litro al 23 de febrero. En Sarandi Grande km 137 esta 54,90. En Florida km 98 lo vi 55,10. Cargue en Durazno si podes que son 80 pesos de diferencia en el tanque chico y bastante mas en el grande.",
    imagen: null,
    grupo: "ruta5",
    likes: 134,
    comentarios: [
      { autor: "camionero_ruta5", texto: "Confirmo Durazno. Y en Tacuarembo km 390 esta 54,60, mas barato que Florida.", fecha: "2026-02-24T08:05:00-03:00" },
      { autor: "remis_nocturno_mvd", texto: "En Montevideo ni te cuento. Yo cargo saliendo, siempre.", fecha: "2026-02-24T09:30:00-03:00" },
      { autor: "ing.rossi", texto: "Aclaro por si sirve: la diferencia entre estaciones no es de precio de venta sino de flete y margen del concesionario. No hay ningun misterio.", fecha: "2026-02-24T10:15:00-03:00",
        respuestas: [
          { autor: "productor_durazno", texto: "Nadie dijo que hubiera misterio Fabian. Dije donde esta mas barato nomas.", fecha: "2026-02-24T10:40:00-03:00" },
          { autor: "ing.rossi", texto: "Correcto, mi comentario era complementario. Buen aporte el suyo.", fecha: "2026-02-24T11:02:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2516,
    autor: "guarda_101",
    fecha: "2026-03-03T14:50:00-03:00",
    texto: "Che, un tema que no es de ruta pero es de laburo: hoy me subio una señora con el boleto vencido de ayer y me lo discutio ocho cuadras. Ocho. Yo entiendo todo, pero el sueldo lo pierdo yo cuando no cierra la caja. En fin. Sigo.",
    imagen: null,
    grupo: "ruta5",
    likes: 86,
    comentarios: [
      { autor: "taxi_cx_1420", texto: "Nestor a mi me pasa lo mismo con los que se bajan y dicen te pago la vuelta. La vuelta nunca llega", fecha: "2026-03-03T15:20:00-03:00" },
      { autor: "remis_nocturno_mvd", texto: "De madrugada es peor porque no hay a quien llamar. Yo ya cobro antes de arrancar y listo.", fecha: "2026-03-03T16:00:00-03:00",
        respuestas: [
          { autor: "guarda_101", texto: "Yo no puedo cobrar antes de arrancar, el omnibus ya arranco jaja.", fecha: "2026-03-03T16:22:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2517,
    autor: "el_tero_viajero",
    fecha: "2026-03-15T12:40:00-03:00",
    texto: "Donde se come bien en la 5, mi lista honesta despues de veinte años de laburo en ruta: 1) parador del km 141, milanesa con papas fritas de verdad, atienden hasta las 3. 2) el boliche del 213, guiso los dias de frio, sirven en plato hondo de loza. 3) km 349, cafe malisimo pero baño impecable, que a veces importa mas. Lo q NO: el lugar nuevo del 108, me cobraron 690 pesos un chivito q era pan con jamon.",
    imagen: null,
    grupo: "ruta5",
    likes: 219,
    comentarios: [
      { autor: "camionero_ruta5", texto: "El del 141 es EL parador. La señora que atiende se acuerda de como toma el cafe cada uno", fecha: "2026-03-15T13:05:00-03:00" },
      { autor: "treintaytres_jinete", texto: "El del 213 lo conozco. Guiso de arroz con carne de verdad, no de esa que se deshace", fecha: "2026-03-15T13:30:00-03:00" },
      { autor: "taxi_cx_1420", texto: "690 por un chivito es un robo a mano armada. Eso en la Union no te lo cobran ni con lomo.", fecha: "2026-03-15T14:10:00-03:00",
        respuestas: [
          { autor: "el_tero_viajero", texto: "Y sin lechuga, Wilson. Sin lechuga.", fecha: "2026-03-15T14:25:00-03:00" },
          { autor: "taxi_cx_1420", texto: "Ah bueno, eso ya es delito", fecha: "2026-03-15T14:33:00-03:00" }
        ]
      },
      { autor: "melo_ferretero", texto: "Anoten el del km 60, la parrilla chica. No tiene cartel, es el galpon verde. Gracias por venir.", fecha: "2026-03-15T18:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2518,
    autor: "taxi_cx_1420",
    fecha: "2026-03-28T11:15:00-03:00",
    texto: "Encuesta seria porque siempre discutimos lo mismo en el parador",
    imagen: null,
    grupo: "ruta5",
    likes: 97,
    comentarios: [
      { autor: "camionero_ruta5", texto: "Vote el 141 obviamente. Aca no hay debate.", fecha: "2026-03-28T11:40:00-03:00" },
      { autor: "productor_durazno", texto: "Vote el 213. Ustedes los de Montevideo comen con los ojos", fecha: "2026-03-28T12:05:00-03:00",
        respuestas: [
          { autor: "taxi_cx_1420", texto: "Anibal yo soy de la Union no de Carrasco, tratame bien", fecha: "2026-03-28T12:20:00-03:00" }
        ]
      }
    ],
    encuesta: {
      pregunta: "Mejor parada para comer en la Ruta 5",
      opciones: [
        { texto: "Parador km 141 (Sarandi Grande)", votos: 142 },
        { texto: "Boliche del km 213", votos: 98 },
        { texto: "Parrilla chica del km 60", votos: 61 },
        { texto: "Yo llevo tuper de casa y no gasto", votos: 187 }
      ],
      cierra: "2026-04-10T23:59:00-03:00"
    }
  },
  {
    id: 2519,
    autor: "remis_nocturno_mvd",
    fecha: "2026-04-05T03:48:00-03:00",
    texto: "3:45. Vengo de dejar un pasajero en Canelones y en el km 44 hay una camioneta blanca parada en la banquina con las balizas puestas desde hace por lo menos dos horas, porque cuando subi ya estaba. Nadie adentro. No estoy diciendo nada raro, aviso porque si alguien se quedo capaz que precisa una mano.",
    imagen: null,
    grupo: "ruta5",
    likes: 65,
    comentarios: [
      { autor: "camionero_ruta5", texto: "Paso a las 6 y aviso", fecha: "2026-04-05T04:02:00-03:00",
        respuestas: [
          { autor: "camionero_ruta5", texto: "06:10, sigue ahi, se quedo sin combustible. El hombre estaba durmiendo adentro. Le deje cinco litros y sigue viaje. Todo bien", fecha: "2026-04-05T06:18:00-03:00" },
          { autor: "remis_nocturno_mvd", texto: "Grande. Yo me quede pensando toda la noche.", fecha: "2026-04-05T09:40:00-03:00" }
        ]
      },
      { autor: "guarda_101", texto: "Ojo con el dato de la camioneta blanca que despues en otros grupos lo agarran y arman cualquier cosa.", fecha: "2026-04-05T08:30:00-03:00",
        respuestas: [
          { autor: "remis_nocturno_mvd", texto: "Por eso aclare q no estoy diciendo nada raro. Aca somos ruteros, no novelistas.", fecha: "2026-04-05T09:45:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2520,
    autor: "camionero_ruta5",
    fecha: "2026-04-22T05:55:00-03:00",
    texto: "OBRA NUEVA: KM 355 AL 362, ZONA CURTINA. PASO ALTERNADO CON BANDERILLERO DE 07:00 A 18:00, DE LUNES A VIERNES. FUERA DE ESE HORARIO PASA SOLO. DEMORA REAL HOY 07:20: 14 MINUTOS. VA A DURAR HASTA OCTUBRE SEGUN EL CAPATAZ.",
    imagen: null,
    grupo: "ruta5",
    likes: 129,
    comentarios: [
      { autor: "ing.rossi", texto: "Anoto. Siete kilometros de reconstruccion de base es plazo de seis meses como minimo. Octubre me parece optimista, apuesto a diciembre.", fecha: "2026-04-22T08:40:00-03:00" },
      { autor: "productor_durazno", texto: "Yo apuesto a marzo del año que viene y no me tomen de exagerado", fecha: "2026-04-22T09:15:00-03:00",
        respuestas: [
          { autor: "camionero_ruta5", texto: "Guardo los dos pronosticos y los saco cuando corresponda jaja.", fecha: "2026-04-22T10:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2521,
    autor: "tambero_sanjose",
    fecha: "2026-05-06T05:08:00-03:00",
    texto: "Hoy la leche sale a las 5 y media porque el camion viene atrasado por la helada. Aviso a los de la zona que la ruta esta blanca de escarcha desde el 55 al 70, sobre todo en el puente. Vayan como si fuera hielo porque es hielo.",
    imagen: null,
    grupo: "ruta5",
    likes: 111,
    comentarios: [
      { autor: "camionero_ruta5", texto: "EL PUENTE DEL 60 ES EL PEOR PUNTO DE TODA LA RUTA CON HELADA. Lo digo hace años.", fecha: "2026-05-06T05:20:00-03:00" },
      { autor: "laspiedras_mecanico", texto: "Y con la escarcha los frenos ABS te hacen cualquier cosa si venis con la cubierta gastada. Reviselas", fecha: "2026-05-06T07:45:00-03:00" },
      { autor: "el_tero_viajero", texto: "Ernesto, si pasas por ahi a esa hora fijate si siguen los teros en el bajo del puente. Estoy siguiendo una pareja.", fecha: "2026-05-06T08:10:00-03:00",
        respuestas: [
          { autor: "tambero_sanjose", texto: "Siguen. Y gritan igual que siempre a las cinco de la mañana, como si trabajaran ellos", fecha: "2026-05-06T09:00:00-03:00" },
          { autor: "el_tero_viajero", texto: "Jajaja gracias Ernesto. Eso me sirve mas de lo que te imaginas.", fecha: "2026-05-06T09:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2522,
    autor: "treintaytres_jinete",
    fecha: "2026-05-18T17:30:00-03:00",
    texto: "Aviso a los que bajan el fin de semana: hay criolla en el km 190 sobre la ruta, entrada por el camino vecinal. Va a haber movimiento de gente y de gurises cruzando de un lado al otro toda la tarde del domingo. Anden atentos, por favor. Vale mas un susto evitado que un domingo lindo.",
    imagen: null,
    grupo: "ruta5",
    likes: 94,
    comentarios: [
      { autor: "camionero_ruta5", texto: "Gracias Ramiro. Lo fijo el sabado asi lo ve todo el mundo.", fecha: "2026-05-18T18:00:00-03:00" },
      { autor: "productor_durazno", texto: "Los gurises cruzando la ruta en la criolla es la cosa que mas miedo me da del año", fecha: "2026-05-18T19:20:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2523,
    autor: "el_tero_viajero",
    fecha: "2026-06-02T16:20:00-03:00",
    texto: "Foto del km 300 a las cuatro de la tarde, con esa neblina baja que se levanta del campo cuando la tierra esta mas caliente que el aire. Tecnicamente es niebla de radiacion y se forma con cielo despejado y viento casi nulo. O sea: si venis manejando y ves el cielo limpio y la ruta quieta, empeza a desconfiar.",
    imagen: "media/fotos/campo_1.jpg",
    grupo: "ruta5",
    likes: 158,
    comentarios: [
      { autor: "camionero_ruta5", texto: "NICOLAS ESTO ES EXACTAMENTE LO QUE NADIE ENTIENDE. La niebla mas traicionera aparece con lindo dia.", fecha: "2026-06-02T16:50:00-03:00" },
      { autor: "ing.rossi", texto: "Correcta la explicacion. Agrego que sobre los puentes y los bajos se forma primero, por la humedad del cauce.", fecha: "2026-06-02T18:15:00-03:00",
        respuestas: [
          { autor: "el_tero_viajero", texto: "Tal cual Fabian. Los bajos del 176 al 190 son de manual.", fecha: "2026-06-02T18:40:00-03:00" }
        ]
      },
      { autor: "tambero_sanjose", texto: "Yo eso lo se de mirar el campo, nunca supe que tenia nombre", fecha: "2026-06-02T20:05:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2524,
    autor: "guarda_101",
    fecha: "2026-06-20T08:40:00-03:00",
    texto: "Aviso institucional del grupo: nos llegaron tres reportes de gente publicando avisos de venta y uno de un tipo ofreciendo llevar encomiendas sin habilitacion. Los bajamos. No es por malos, es porque si pasa algo con esa encomienda el que queda pegado es el que la llevo. Ruta 5 es para avisos de ruta. Gracias.",
    imagen: null,
    grupo: "ruta5",
    likes: 121,
    comentarios: [
      { autor: "camionero_ruta5", texto: "Firmo abajo. Y el que insiste va afuera, sin drama.", fecha: "2026-06-20T09:05:00-03:00" },
      { autor: "taxi_cx_1420", texto: "El de las encomiendas me escribio por privado a mi tambien. Le dije que no", fecha: "2026-06-20T10:30:00-03:00",
        respuestas: [
          { autor: "guarda_101", texto: "Pasame el alias por privado Wilson asi lo miramos.", fecha: "2026-06-20T10:45:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2525,
    autor: "productor_durazno",
    fecha: "2026-06-29T07:05:00-03:00",
    texto: "Llovieron 68 milimetros en 14 horas aca. Los caminos vecinales al este de la 5 estan intransitables, el que tenga que sacar algo que espere dos dias. La ruta esta bien pero con agua en las banquinas del 175 al 195. Si te vas a la banquina a esa velocidad no volves.",
    imagen: null,
    grupo: "ruta5",
    likes: 142,
    comentarios: [
      { autor: "clima_uy_alertas", texto: "Se mantiene aviso amarillo por lluvias y tormentas para Durazno, Florida y Flores hasta las 18:00 de hoy. Acumulados puntuales de hasta 90 mm.", fecha: "2026-06-29T08:00:00-03:00" },
      { autor: "camionero_ruta5", texto: "Confirmo agua en banquina en el 188. Baje a 60 y no me arrepiento.", fecha: "2026-06-29T09:12:00-03:00" },
      { autor: "tambero_sanjose", texto: "Aca 41 milimetros. El tambo hecho un barrial pero la vaca no entiende de milimetros.", fecha: "2026-06-29T09:40:00-03:00",
        respuestas: [
          { autor: "productor_durazno", texto: "Nunca entendio y no va a entender, Ernesto.", fecha: "2026-06-29T10:15:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2526,
    autor: "camionero_ruta5",
    fecha: "2026-07-08T04:30:00-03:00",
    texto: "SALIENDO DE TACUAREMBO 04:30 CON CARGA PARA MONTEVIDEO. VOY REPORTANDO. SI ALGUIEN VIENE SUBIENDO Y ME CRUZA, LUCES.",
    imagen: null,
    grupo: "ruta5",
    likes: 76,
    comentarios: [
      { autor: "camionero_ruta5", texto: "05:50 KM 300. RUTA SECA, SIN NIEBLA. FRIO PERO LIMPIO.", fecha: "2026-07-08T05:52:00-03:00" },
      { autor: "camionero_ruta5", texto: "07:15 KM 182 DURAZNO. PARO A DESAYUNAR. NIEBLA LEVE DEL 176 AL 184, SE VE BIEN IGUAL", fecha: "2026-07-08T07:18:00-03:00" },
      { autor: "camionero_ruta5", texto: "09:40 KM 98 FLORIDA. TODO NORMAL. LA OBRA DEL 98 AL 104 ESTA CERRADA HOY, PASA DE CORRIDO.", fecha: "2026-07-08T09:42:00-03:00",
        respuestas: [
          { autor: "guarda_101", texto: "Seis horas de Tacuarembo a Florida con parada. Vas bien Walter.", fecha: "2026-07-08T09:55:00-03:00" },
          { autor: "camionero_ruta5", texto: "CARGADO Y CON FRIO, NESTOR. NO ES CARRERA.", fecha: "2026-07-08T10:05:00-03:00" }
        ]
      },
      { autor: "remis_nocturno_mvd", texto: "Esto es mejor que la radio. En serio.", fecha: "2026-07-08T10:20:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2527,
    autor: "laspiedras_mecanico",
    fecha: "2026-07-16T11:10:00-03:00",
    texto: "Muchachos, ojo con el que anda ofreciendo reprogramar la computadora del camion para bajar consumo por 12 mil pesos. Me entraron dos esta semana con la unidad hecha un desastre y sin garantia. Si te bajan el consumo un 15 por ciento sin tocar nada mas, algo te sacaron. Traelo que lo veo antes de que pongas plata.",
    imagen: null,
    grupo: "ruta5",
    likes: 167,
    comentarios: [
      { autor: "camionero_ruta5", texto: "A mi me lo ofrecieron en el parador del 141. Le dije que no. Ahora entiendo por que", fecha: "2026-07-16T11:40:00-03:00" },
      { autor: "ing.rossi", texto: "Termodinamicamente no existe la reduccion de consumo gratis. Si baja el consumo, baja la potencia o sube el desgaste. No hay tercera opcion.", fecha: "2026-07-16T13:00:00-03:00",
        respuestas: [
          { autor: "laspiedras_mecanico", texto: "Fabian esta vez estamos de acuerdo y me da cosa jaja.", fecha: "2026-07-16T13:22:00-03:00" },
          { autor: "ing.rossi", texto: "Pasa en las mejores familias, Gustavo.", fecha: "2026-07-16T14:00:00-03:00" }
        ]
      },
      { autor: "melo_ferretero", texto: "El tipo anduvo por Melo tambien. Camioneta gris, se presenta como tecnico de una empresa que nadie conoce", fecha: "2026-07-16T15:30:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2528,
    autor: "taxi_cx_1420",
    fecha: "2026-07-27T18:25:00-03:00",
    texto: "Vengo de hacer un viaje largo, Montevideo a Florida ida y vuelta con una señora que iba al medico. 196 kilometros redondos. Le cobre lo que marco el reloj y la mujer me quiso dar propina. Le dije que no. Despues me arrepenti como cuatro veces pero bueno, uno es asi",
    imagen: null,
    grupo: "ruta5",
    likes: 203,
    comentarios: [
      { autor: "guarda_101", texto: "Wilson vos sos un buen tipo aunque te hagas el bravo en los comentarios", fecha: "2026-07-27T19:00:00-03:00",
        respuestas: [
          { autor: "taxi_cx_1420", texto: "No arruines mi reputacion Nestor que me costo años", fecha: "2026-07-27T19:12:00-03:00" }
        ]
      },
      { autor: "tambero_sanjose", texto: "Bien ahi. Esa señora se lo va a acordar mas que vos", fecha: "2026-07-27T20:30:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2529,
    autor: "camionero_ruta5",
    fecha: "2026-08-04T06:12:00-03:00",
    texto: "NIEBLA KM 46 AL 62 SENTIDO NORTE, 06:10. VISIBILIDAD 80 METROS, VA MEJORANDO. CONTROL EN EL KM 45, BALANZA ABIERTA DESDE LAS 6. HAY CAMION CON ACOPLADO DETENIDO EN LA BANQUINA DEL 51, ESTA SEÑALIZADO PERO OJO AL PASAR.",
    imagen: null,
    grupo: "ruta5",
    likes: 118,
    comentarios: [
      { autor: "tambero_sanjose", texto: "Confirmo la niebla, aca desde las 4 y media. Levanta a las 9 seguro", fecha: "2026-08-04T06:25:00-03:00" },
      { autor: "guarda_101", texto: "Balanza abierta a las 6 es raro un martes. Aviso a los compañeros.", fecha: "2026-08-04T06:50:00-03:00" },
      { autor: "remis_nocturno_mvd", texto: "El camion del 51 esta desde anoche, lo vi a las 2. El chofer estaba durmiendo, todo bien.", fecha: "2026-08-04T07:15:00-03:00",
        respuestas: [
          { autor: "camionero_ruta5", texto: "PERFECTO JULIO. ENTONCES NO ES AVERIA, ES DESCANSO. LO SACO DEL AVISO", fecha: "2026-08-04T07:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2530,
    autor: "el_tero_viajero",
    fecha: "2019-09-12T10:00:00-03:00",
    texto: "FIJADO. Abrimos el grupo con una idea simple: en Uruguay se ven aves increibles y casi nadie las anota. Aca anotamos. Ficha con especie, fecha, hora y lugar. Si no sabes que viste, subi la foto y preguntá, que para eso estamos. Y la regla que mas me importa: al que se equivoca se le explica, no se le pega. Yo me equivoque mil veces y aprendi por gente que se tomo el trabajo de corregirme bien.",
    imagen: null,
    grupo: "aves",
    likes: 168,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Me sumo como administradora. Aporto desde lo veterinario: si encuentran un ave herida, no la alimenten antes de consultar. Se mata mas ave con buena intencion que con mala.", fecha: "2019-09-12T11:20:00-03:00" },
      { autor: "colonia_guia_turismo", texto: "Que bueno esto. En Colonia tenemos gente que pregunta todo el tiempo que pajaro es tal y nunca se donde mandarlos.", fecha: "2019-09-12T14:05:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2531,
    autor: "el_tero_viajero",
    fecha: "2022-04-08T08:15:00-03:00",
    texto: "FICHA DE AVISTAJE\nEspecie: cisne de cuello negro (Cygnus melancoryphus)\nCantidad: 34 individuos, incluidos 6 juveniles\nFecha: 07/04/2022\nHora: 17:40\nLugar: Laguna de Rocha, margen oeste\nCoordenadas aprox: -34.633, -54.287\nObservaciones: grupo alimentandose en aguas someras. Conteo hecho con monocular desde el mismo punto, tres pasadas, promedio de las tres.",
    imagen: null,
    grupo: "aves",
    likes: 94,
    comentarios: [
      { autor: "salvavidas_rocha", texto: "Yo los veo casi todos los dias desde la torre. Esta semana habia bastantes mas, calculo 50 y pico.", fecha: "2022-04-08T09:30:00-03:00",
        respuestas: [
          { autor: "el_tero_viajero", texto: "Matias, calculo a ojo desde lejos siempre da de mas, es un sesgo conocido. Si podes contá en foto y despues nos comparamos, es lo mas honesto.", fecha: "2022-04-08T10:02:00-03:00" },
          { autor: "salvavidas_rocha", texto: "Tenes razon, lo dije de memoria. Saco foto mañana y conto tranquilo.", fecha: "2022-04-08T10:20:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2532,
    autor: "apicultor_florida",
    fecha: "2022-10-19T16:45:00-03:00",
    texto: "FICHA DE AVISTAJE\nEspecie: picaflor verde (Chlorostilbon lucidus)\nFecha: 19/10/2022\nHora: 09:20\nLugar: monte de eucaliptus lindero al apiario, ruta 56 km 12, Florida\nObservaciones: hembra visitando flores de lantana. Se quedo cerca de 4 minutos. Es el primero que veo esta primavera, otros años los tenia en setiembre. La floracion viene atrasada como tres semanas.",
    imagen: null,
    grupo: "aves",
    likes: 71,
    comentarios: [
      { autor: "agronomo_paysandu", texto: "El atraso de floracion coincide con lo que registramos en Paysandu. Fue un invierno con menos horas de frio efectivas y despues arranco tarde. No es percepcion tuya, esta medido.", fecha: "2022-10-19T18:10:00-03:00" },
      { autor: "el_tero_viajero", texto: "Buena ficha Selva. Anota tambien la especie de flor cuando puedas, eso despues sirve muchisimo.", fecha: "2022-10-19T19:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2533,
    autor: "caro.veterinaria",
    fecha: "2023-01-14T13:20:00-03:00",
    texto: "Recordatorio de verano. Me llegaron cuatro pichones de hornero esta semana, todos traidos por gente que los levanto del piso. Si el pichon tiene plumas y salta, es volanton: NO lo levantes, los padres lo estan alimentando desde arriba. Solo interviene si esta pelado, herido o hay un gato dando vueltas. Y nunca, nunca, agua con jeringa en el pico: se les va al pulmon y se mueren ahogados.",
    imagen: null,
    grupo: "aves",
    likes: 289,
    comentarios: [
      { autor: "colonia_guia_turismo", texto: "Esto deberia estar fijado todo el verano.", fecha: "2023-01-14T14:00:00-03:00",
        respuestas: [
          { autor: "el_tero_viajero", texto: "Fijado hasta marzo. Buena Caro.", fecha: "2023-01-14T14:30:00-03:00" }
        ]
      },
      { autor: "apicultor_florida", texto: "Yo levante uno hace años sin saber nada y se murio a los dos dias. Todavia me acuerdo. Ojala hubiera existido este grupo.", fecha: "2023-01-14T17:45:00-03:00",
        respuestas: [
          { autor: "caro.veterinaria", texto: "Nos paso a todos Selva. Por eso lo repito cada verano sin cansarme.", fecha: "2023-01-14T18:10:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2534,
    autor: "astro.mvd",
    fecha: "2023-05-27T21:10:00-03:00",
    texto: "Pregunta medio rara para el grupo: alguien registro vuelo nocturno de chajá? Estaba haciendo observacion en el bañado de Santa Lucia con el telescopio y a las 20:50 pasaron tres bichos grandes gritando arriba mio. No los vi, los oi. El grito era ese chillido de dos tonos. Anoto como probable pero me gustaria confirmacion de alguien que sepa.",
    imagen: null,
    grupo: "aves",
    likes: 63,
    comentarios: [
      { autor: "el_tero_viajero", texto: "Chajá (Chauna torquata) vuela de noche, sobre todo con luna. Y ese grito de dos silabas es inconfundible. Yo lo daria por bueno, y ademas el bañado de Santa Lucia es habitat tipico.", fecha: "2023-05-27T21:40:00-03:00",
        respuestas: [
          { autor: "astro.mvd", texto: "Gracias. Igual lo dejo como auditivo, no como visual. Prefiero ser conservadora con mis propios datos.", fecha: "2023-05-27T22:00:00-03:00" },
          { autor: "el_tero_viajero", texto: "Y esa es exactamente la actitud que queremos en este grupo. Un registro auditivo bien anotado vale mas que un visual dudoso.", fecha: "2023-05-27T22:15:00-03:00" }
        ]
      },
      { autor: "caro.veterinaria", texto: "Lucia si alguna vez queres, el chajá tiene una particularidad linda: tiene aire bajo la piel, cruje cuando lo tocas. Por eso vuela tan pesado y tan alto a la vez.", fecha: "2023-05-27T23:05:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2535,
    autor: "salvavidas_rocha",
    fecha: "2023-09-03T07:50:00-03:00",
    texto: "FICHA\nEspecie: martin pescador grande (Megaceryle torquata)\nFecha: 03/09/2023\nHora: 07:15\nLugar: desembocadura del arroyo, La Paloma\nObservaciones: macho posado en poste de la pasarela, se tiro al agua tres veces en diez minutos y saco una sola vez. Ruido de matraca cuando levanta vuelo, se escucha de lejos.",
    imagen: null,
    grupo: "aves",
    likes: 88,
    comentarios: [
      { autor: "el_tero_viajero", texto: "Buena Matias. Como sabes que era macho?", fecha: "2023-09-03T08:20:00-03:00",
        respuestas: [
          { autor: "salvavidas_rocha", texto: "Por la faja del pecho. El macho tiene una sola banda castaña y la hembra tiene una banda gris arriba y despues la castaña. Este tenia una sola.", fecha: "2023-09-03T08:45:00-03:00" },
          { autor: "el_tero_viajero", texto: "Impecable. Te pregunte sabiendo la respuesta, perdon, pero queria que quedara escrito en el hilo para el que lee despues.", fecha: "2023-09-03T09:10:00-03:00" },
          { autor: "salvavidas_rocha", texto: "Jaja me hiciste rendir examen. Todo bien.", fecha: "2023-09-03T09:22:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2536,
    autor: "colonia_guia_turismo",
    fecha: "2024-02-17T11:30:00-03:00",
    texto: "Consulta de la guia ignorante. Ayer en el Real de San Carlos habia un pajaro negro brillante, tipo tordo, pero mas grande y con el ojo claro. Los turistas me preguntaron y dije tordo porque no supe que decir. Alguien me ilumina? Foto no tengo, iba caminando con el grupo.",
    imagen: null,
    grupo: "aves",
    likes: 45,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Ojo claro y negro brillante, mas grande que el tordo comun: puede ser tordo renegrido macho adulto igual, que se ven grandes cuando estan al sol. Pero con ojo bien claro tambien podria ser otro. Sin foto no me juego.", fecha: "2024-02-17T12:15:00-03:00" },
      { autor: "el_tero_viajero", texto: "Mariana, para la proxima: mira el pico. El tordo renegrido tiene pico conico corto, tipo semillero. Si el pico era largo y fino, no era tordo. Es el dato que mas rapido descarta.", fecha: "2024-02-17T13:00:00-03:00",
        respuestas: [
          { autor: "colonia_guia_turismo", texto: "Era conico corto, ahora que me lo decis. Entonces tordo. Gracias, aprendi algo que puedo contarle al proximo grupo.", fecha: "2024-02-17T13:40:00-03:00" },
          { autor: "el_tero_viajero", texto: "Contales tambien que la hembra es marron y parece otra especie. Es el error mas comun del mundo.", fecha: "2024-02-17T14:05:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2537,
    autor: "agronomo_paysandu",
    fecha: "2024-06-11T09:40:00-03:00",
    texto: "Comparto un dato que me pidieron por privado. Sobre mortandad de aves y fumigaciones: la relacion existe pero no es la que circula. Lo que mas mata en campo abierto no es la deriva del producto, es el tratamiento de semilla mal manejado y la semilla derramada en la cabecera del lote. El ave come el grano tratado directamente. La solucion es barata: barrer la cabecera y tapar el derrame. Lo digo porque a veces peleamos la batalla equivocada.",
    imagen: null,
    grupo: "aves",
    likes: 156,
    comentarios: [
      { autor: "apicultor_florida", texto: "Federico, coincido en parte, pero con las abejas la deriva si es determinante. No querria que se lea como que la deriva no importa.", fecha: "2024-06-11T10:30:00-03:00",
        respuestas: [
          { autor: "agronomo_paysandu", texto: "Aclaracion justa y la acepto. Hable de aves, no de polinizadores. Con abejas el mecanismo es otro y la deriva pesa muchisimo. Gracias por marcarlo.", fecha: "2024-06-11T11:00:00-03:00" },
          { autor: "apicultor_florida", texto: "Listo, asi se entiende. Igual gracias por el dato de la cabecera, no lo sabia y lo voy a comentar con los vecinos.", fecha: "2024-06-11T11:25:00-03:00" }
        ]
      },
      { autor: "el_tero_viajero", texto: "Esto es el grupo funcionando. Dos que saben, discrepan en un punto, y los dos quedan mejor parados que antes.", fecha: "2024-06-11T12:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2538,
    autor: "el_tero_viajero",
    fecha: "2024-09-22T18:30:00-03:00",
    texto: "FICHA\nEspecie: garza mora (Ardea cocoi)\nCantidad: 1\nFecha: 21/09/2024\nHora: 18:05\nLugar: bañado sobre ruta 9, km 205, Rocha\nCoordenadas aprox: -34.416, -54.319\nObservaciones: adulto en postura de caza, inmovil 11 minutos cronometrados. Capturo un pez de unos 15 cm. Foto con 400mm a 30 metros, sin acercarme mas para no espantarla.",
    imagen: null,
    grupo: "aves",
    likes: 132,
    comentarios: [
      { autor: "salvavidas_rocha", texto: "Once minutos quieta. Yo no aguanto once minutos quieto ni durmiendo.", fecha: "2024-09-22T19:00:00-03:00" },
      { autor: "caro.veterinaria", texto: "Buen criterio lo de no acercarte. La distancia de fuga de la garza mora ronda los 20 metros, si cruzas eso levanta vuelo y perdes el registro igual.", fecha: "2024-09-22T19:45:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2539,
    autor: "caro.veterinaria",
    fecha: "2025-01-08T15:10:00-03:00",
    texto: "Aviso de moderacion. Bajamos un post donde se ofrecian cardenales en jaula. En este grupo no se compra, no se vende y no se exhibe fauna nativa en cautiverio, esta en la regla 6 desde el dia uno. Ademas es ilegal. Al usuario le explicamos por privado, no lo expusimos. Si ven algo asi, reporten y no discutan en el hilo, que es lo que ellos buscan.",
    imagen: null,
    grupo: "aves",
    likes: 244,
    comentarios: [
      { autor: "el_tero_viajero", texto: "Confirmo. Y agrego: el cardenal (Paroaria coronata) es una de las especies mas capturadas del pais justamente por lo lindo que canta. Cada jaula es un pajaro menos en el monte.", fecha: "2025-01-08T15:40:00-03:00" },
      { autor: "colonia_guia_turismo", texto: "Mi abuelo tenia uno. En esa epoca nadie lo veia mal. Menos mal que algunas cosas cambian.", fecha: "2025-01-08T17:20:00-03:00" },
      { autor: "apicultor_florida", texto: "En el interior todavia hay gente que los tiene y no lo esconde. Es cultural y cuesta.", fecha: "2025-01-08T18:00:00-03:00",
        respuestas: [
          { autor: "caro.veterinaria", texto: "Por eso preferimos explicar antes que escrachar. El escrache no libero nunca a ningun pajaro.", fecha: "2025-01-08T18:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2540,
    autor: "astro.mvd",
    fecha: "2025-04-30T20:05:00-03:00",
    texto: "Me reenviaron desde otro grupo un video de unas luces en fila sobre el este del pais diciendo que espantaron a las aves. Dos cosas. Una: las luces son un tren de satelites, se ven asi despues del lanzamiento y se separan en dias. Dos: si alguien registro cambio de comportamiento en aves esa noche, me interesa de verdad, pero necesitamos el dato del ave, no el del cielo. Yo pongo el cielo, ustedes ponen las aves.",
    imagen: null,
    grupo: "aves",
    likes: 178,
    comentarios: [
      { autor: "el_tero_viajero", texto: "Yo estaba esa noche en Rocha con grabadora puesta. No hubo nada anormal en la actividad nocturna. Tengo el audio si a alguien le sirve.", fecha: "2025-04-30T20:40:00-03:00",
        respuestas: [
          { autor: "astro.mvd", texto: "Eso vale oro Nicolas. Un registro que dice no paso nada es un dato igual de bueno que uno que dice paso algo.", fecha: "2025-04-30T21:00:00-03:00" }
        ]
      },
      { autor: "agronomo_paysandu", texto: "Lo que mas me gusta de este grupo es que no hay que pelear tres dias para llegar a esto.", fecha: "2025-04-30T21:30:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2541,
    autor: "apicultor_florida",
    fecha: "2025-08-14T10:20:00-03:00",
    texto: "FICHA\nEspecie: calandria (Mimus saturninus)\nFecha: 13/08/2025\nHora: 08:00\nLugar: Florida, camino al apiario\nObservaciones: dos individuos cantando alternado desde postes distintos, como a 40 metros uno del otro. Duro casi media hora. Imita perfecto al benteveo, tanto que la primera vez me di vuelta buscando el benteveo.",
    imagen: null,
    grupo: "aves",
    likes: 97,
    comentarios: [
      { autor: "colonia_guia_turismo", texto: "La calandria imitando al benteveo es de las cosas que mas me sorprendieron cuando empece a prestar atencion.", fecha: "2025-08-14T11:00:00-03:00" },
      { autor: "el_tero_viajero", texto: "Ojo con un detalle Selva: eso que describis, dos cantando alternado desde puestos fijos, es disputa territorial. Anotalo asi, es informacion de conducta y vale mucho mas que solo la especie.", fecha: "2025-08-14T12:15:00-03:00",
        respuestas: [
          { autor: "apicultor_florida", texto: "No se me habia ocurrido. Lo corrijo en mi cuaderno. Gracias.", fecha: "2025-08-14T13:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2542,
    autor: "el_tero_viajero",
    fecha: "2026-01-11T19:40:00-03:00",
    texto: "Abro el año con una discusion vieja: carancho (Caracara plancus) y chimango no son lo mismo y sin embargo el 90 por ciento de las fotos que me mandan diciendo carancho son chimango. Diferencias rapidas: el carancho es notoriamente mas grande, tiene copete negro, cara desnuda rojiza y el pico es alto y fuerte. El chimango es marroncito, mas chico, cara sin ese contraste, y anda en grupo detras del tractor. Si esta en bandada, casi seguro chimango.",
    imagen: null,
    grupo: "aves",
    likes: 203,
    comentarios: [
      { autor: "colonia_guia_turismo", texto: "Culpable. Toda la vida les dije carancho a todos.", fecha: "2026-01-11T20:10:00-03:00" },
      { autor: "salvavidas_rocha", texto: "En la playa hay uno grande que anda solo comiendo lo que queda. Ese es carancho entonces.", fecha: "2026-01-11T20:35:00-03:00",
        respuestas: [
          { autor: "el_tero_viajero", texto: "Muy probable. Sumale que el carancho camina mucho, lo vas a ver caminando en la arena como si fuera un gallina grande. El chimango casi no camina.", fecha: "2026-01-11T21:00:00-03:00" },
          { autor: "salvavidas_rocha", texto: "Camina camina. Ahora ya se que decirle al que me pregunta desde la torre.", fecha: "2026-01-11T21:15:00-03:00" }
        ]
      },
      { autor: "caro.veterinaria", texto: "Agrego dato veterinario: al carancho lo recibimos herido bastante mas seguido, porque come carroña en la ruta y lo agarra un auto. El chimango es mas vivo para eso.", fecha: "2026-01-11T22:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2543,
    autor: "salvavidas_rocha",
    fecha: "2026-01-26T08:05:00-03:00",
    texto: "FICHA\nEspecie: gaviotin (identificacion pendiente, pongo cf.)\nFecha: 25/01/2026\nHora: 19:30\nLugar: playa La Aguada, La Paloma\nObservaciones: bandada de unos 60, pescando en la rompiente. Saque foto pero salio movida. No me juego a decir la especie porque hay varios parecidos y prefiero preguntar que meter la pata en la ficha.",
    imagen: null,
    grupo: "aves",
    likes: 82,
    comentarios: [
      { autor: "el_tero_viajero", texto: "Matias esto es un ejemplo perfecto de como se hace. Pone cf. y listo, no pasa nada. Si conseguis foto del pico y de la punta del ala te lo saco en dos minutos.", fecha: "2026-01-26T09:00:00-03:00",
        respuestas: [
          { autor: "salvavidas_rocha", texto: "Mañana voy a la misma hora, la bandada viene siempre al atardecer.", fecha: "2026-01-26T09:20:00-03:00" }
        ]
      },
      { autor: "astro.mvd", texto: "Que lindo eso de anotar lo que no sabes. Nosotros en astronomia le decimos objeto no identificado y no se nos cae ningun anillo.", fecha: "2026-01-26T11:40:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2544,
    autor: "caro.veterinaria",
    fecha: "2026-02-19T17:30:00-03:00",
    texto: "Caso de esta semana en la clinica. Entro un benteveo (Pitangus sulphuratus) adulto con el ala caida, chocado contra un vidrio. Fractura de humero, la enfrentamos y quedo internado 18 dias. Ayer lo soltamos en el mismo barrio donde lo encontraron, que es lo que corresponde. Se fue derecho para arriba y grito eso que gritan. No lloro nadie pero faltó poco.",
    imagen: null,
    grupo: "aves",
    likes: 341,
    comentarios: [
      { autor: "colonia_guia_turismo", texto: "Ay. Que buena noticia para un jueves.", fecha: "2026-02-19T18:00:00-03:00" },
      { autor: "el_tero_viajero", texto: "Bien lo de soltarlo en el mismo lugar. Mucha gente lo suelta lejos pensando que lo salva y en realidad lo tira en territorio ajeno.", fecha: "2026-02-19T18:45:00-03:00",
        respuestas: [
          { autor: "caro.veterinaria", texto: "Exacto. Un ave territorial soltada lejos tiene que pelear desde cero, herida y sin conocer los recursos. Es condenarla despacio.", fecha: "2026-02-19T19:10:00-03:00" }
        ]
      },
      { autor: "apicultor_florida", texto: "Los vidrios. Cuantos habra que no llegan a la clinica.", fecha: "2026-02-19T20:00:00-03:00",
        respuestas: [
          { autor: "caro.veterinaria", texto: "Muchisimos. Si tenes ventanal grande, poner algo que rompa el reflejo por fuera baja el choque un monton. Cortina adentro no sirve, tiene que ser afuera.", fecha: "2026-02-19T20:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2545,
    autor: "colonia_guia_turismo",
    fecha: "2026-03-09T12:00:00-03:00",
    texto: "Armé un recorrido de aves para turistas en Colonia, media mañana, y lo probé el sabado con seis personas. Vimos hornero, benteveo, calandria, tero, cotorra y un carancho a lo lejos (chequeado con lo que aprendi aca, era carancho de verdad). La gente salio fascinada con el hornero, que para nosotros es el pajaro mas comun del mundo. Moraleja: lo comun deja de ser comun cuando alguien te lo explica bien.",
    imagen: null,
    grupo: "aves",
    likes: 187,
    comentarios: [
      { autor: "el_tero_viajero", texto: "Me hiciste el dia con lo del carancho chequeado jaja. Y coincido: el hornero es un animal extraordinario y lo tenemos naturalizado.", fecha: "2026-03-09T12:40:00-03:00" },
      { autor: "caro.veterinaria", texto: "Dato para el recorrido: el hornero hace nido nuevo cada temporada, no reusa el viejo. Los viejos los ocupan despues otras especies. A la gente le encanta ese dato.", fecha: "2026-03-09T13:15:00-03:00",
        respuestas: [
          { autor: "colonia_guia_turismo", texto: "Anotadisimo. Eso lo cuento el sabado que viene.", fecha: "2026-03-09T13:30:00-03:00" }
        ]
      },
      { autor: "astro.mvd", texto: "Si alguna vez armas uno al atardecer avisame y me sumo, que combina bien con la salida de las primeras estrellas.", fecha: "2026-03-09T15:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2546,
    autor: "el_tero_viajero",
    fecha: "2026-03-24T07:20:00-03:00",
    texto: "FICHA\nEspecie: tero (Vanellus chilensis)\nCantidad: pareja con 2 pichones\nFecha: 23/03/2026\nHora: 06:50\nLugar: bajo del puente sobre el rio Santa Lucia, ruta 5 km 60\nObservaciones: misma pareja que sigo desde 2024, la reconozco por una mancha en el ala del macho. Tercera nidada exitosa en el mismo bajo. Los pichones ya corren. Gracias a Ernesto que me viene avisando cuando pasa a las 5 de la mañana.",
    imagen: null,
    grupo: "aves",
    likes: 214,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Tres nidadas en el mismo sitio y con exito. Ese bajo debe tener poca presion de perros y gatos.", fecha: "2026-03-24T08:30:00-03:00",
        respuestas: [
          { autor: "el_tero_viajero", texto: "Y esta al lado de una ruta con transito pesado, que es lo raro. Sospecho que justamente el ruido mantiene lejos a los depredadores.", fecha: "2026-03-24T09:00:00-03:00" },
          { autor: "caro.veterinaria", texto: "Es una hipotesis razonable pero ojo, hay que medirla. No la escribas como conclusion todavia.", fecha: "2026-03-24T09:25:00-03:00" },
          { autor: "el_tero_viajero", texto: "Tenes razon. Corrijo: sospecho, no concluyo. Gracias por el tiron de orejas, era necesario.", fecha: "2026-03-24T09:40:00-03:00" }
        ]
      },
      { autor: "apicultor_florida", texto: "Que lindo seguir a los mismos bichos por años. Yo hago lo mismo con dos colmenas y la gente me mira raro.", fecha: "2026-03-24T11:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2547,
    autor: "agronomo_paysandu",
    fecha: "2026-04-07T09:15:00-03:00",
    texto: "FICHA\nEspecie: chajá (Chauna torquata)\nCantidad: 7\nFecha: 06/04/2026\nHora: 17:20\nLugar: bañado sobre camino a Guichon, Paysandu\nCoordenadas aprox: -32.181, -57.402\nObservaciones: grupo caminando en pastura corta, sin agua cerca. Tolerancia a la aproximacion sorprendente: llegue a 25 metros con la camioneta y no se movieron. A pie hubieran volado a los 60.",
    imagen: null,
    grupo: "aves",
    likes: 108,
    comentarios: [
      { autor: "el_tero_viajero", texto: "Eso del vehiculo es un clasico y sirve un monton para fotografiar. La camioneta no la leen como amenaza, la silueta humana si.", fecha: "2026-04-07T10:00:00-03:00" },
      { autor: "astro.mvd", texto: "Chajá caminando en seco no lo sabia. Yo los tenia como bicho de bañado exclusivo.", fecha: "2026-04-07T10:45:00-03:00",
        respuestas: [
          { autor: "agronomo_paysandu", texto: "Comen pasto tierno y salen bastante del agua. Nidifican si en bañado, ahi si son estrictos.", fecha: "2026-04-07T11:10:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2548,
    autor: "astro.mvd",
    fecha: "2026-04-19T06:40:00-03:00",
    texto: "Dato cruzado para los que salen temprano. Ayer, 18 de abril, la salida del sol en Montevideo fue 07:03. El coro del amanecer arranco a las 06:24 segun mi grabadora en el fondo de casa, o sea 39 minutos antes. El primero en cantar fue un benteveo, despues hornero, despues calandria. Lo vengo midiendo desde febrero y el desfasaje se mantiene bastante estable entre 35 y 42 minutos.",
    imagen: null,
    grupo: "aves",
    likes: 149,
    comentarios: [
      { autor: "el_tero_viajero", texto: "Esto es un aporte de verdad. El orden del coro es bastante constante y tiene que ver con el tamaño del ojo, las especies de ojo mas grande arrancan antes.", fecha: "2026-04-19T07:30:00-03:00",
        respuestas: [
          { autor: "astro.mvd", texto: "No sabia lo del ojo. Voy a anotar tamaño relativo de ojo por especie y ver si me da la correlacion.", fecha: "2026-04-19T08:00:00-03:00" },
          { autor: "el_tero_viajero", texto: "Si te da, publicalo. En serio, eso no lo tiene nadie medido aca.", fecha: "2026-04-19T08:20:00-03:00" }
        ]
      },
      { autor: "caro.veterinaria", texto: "Lucia sos una maquina. Medir el amanecer con reloj de astronoma y grabadora, aplausos.", fecha: "2026-04-19T09:15:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2549,
    autor: "apicultor_florida",
    fecha: "2026-05-02T16:00:00-03:00",
    texto: "Pregunta seria y me da un poco de verguenza. Vi un pajaro chico, panza amarilla, cabeza gris, medio parecido al benteveo pero mucho mas chico y sin la ceja blanca tan marcada. Estaba solo, en un alambrado. Es benteveo joven o es otra cosa? Prometo que la proxima saco foto.",
    imagen: null,
    grupo: "aves",
    likes: 59,
    comentarios: [
      { autor: "el_tero_viajero", texto: "No tengas verguenza, esa es la pregunta correcta. Panza amarilla, cabeza gris, tamaño chico y sin ceja: por descripcion podria ser una viudita o algun tiranido chico. Benteveo joven ya tiene la ceja marcada, asi que por ahi no va.", fecha: "2026-05-02T16:40:00-03:00",
        respuestas: [
          { autor: "apicultor_florida", texto: "Entonces no era benteveo. Lo dejo sin identificar y la proxima le saco foto si o si.", fecha: "2026-05-02T17:00:00-03:00" },
          { autor: "caro.veterinaria", texto: "Selva, si esta en alambrado y sale a cazar bichos y vuelve al mismo poste, fijate en eso. Ese comportamiento de percha fija te acota muchisimo el grupo.", fecha: "2026-05-02T17:30:00-03:00" },
          { autor: "apicultor_florida", texto: "Hacia exactamente eso. Salia, daba una vuelta y volvia al mismo alambre. Anotado.", fecha: "2026-05-02T18:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2550,
    autor: "el_tero_viajero",
    fecha: "2026-05-15T20:10:00-03:00",
    texto: "Aviso de administracion. Nos reportaron un post que decia que las aves se estan yendo del pais por las antenas nuevas. Lo dejamos abajo pero con una aclaracion, porque prefiero explicar antes que borrar: no hay evidencia de eso, y lo que si esta medido y documentado es la perdida de habitat por drenaje de bañados. Si alguien tiene un estudio serio que diga otra cosa, lo leo con gusto. Pero traigan el estudio, no la captura de pantalla.",
    imagen: null,
    grupo: "aves",
    likes: 226,
    comentarios: [
      { autor: "astro.mvd", texto: "Traigan el estudio, no la captura de pantalla. Me lo tatuo.", fecha: "2026-05-15T20:40:00-03:00" },
      { autor: "agronomo_paysandu", texto: "El drenaje de bañados es el tema del que nadie habla porque no se ve en una foto. Un bañado que desaparece no hace ruido.", fecha: "2026-05-15T21:20:00-03:00",
        respuestas: [
          { autor: "el_tero_viajero", texto: "Exacto. Y cuando te das cuenta ya no hay chajá ni cisne ni nada.", fecha: "2026-05-15T21:45:00-03:00" }
        ]
      },
      { autor: "caro.veterinaria", texto: "Bien manejado. Borrar sin explicar es lo que hace que la gente crea mas todavia en lo que le borraron.", fecha: "2026-05-15T22:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2551,
    autor: "salvavidas_rocha",
    fecha: "2026-05-28T09:30:00-03:00",
    texto: "Actualizo lo del gaviotin de enero. Consegui las fotos, se las mande a Nicolas por privado y quedamos en que no se puede cerrar la especie con lo que hay. Asi que va como gaviotin sp. y listo. Prefiero eso a poner cualquier cosa. Igual aprendi a mirar la punta del ala, que antes ni sabia que existia como criterio.",
    imagen: null,
    grupo: "aves",
    likes: 116,
    comentarios: [
      { autor: "el_tero_viajero", texto: "Confirmo. Las fotos son buenas pero el angulo no permite ver el patron del ala primaria. Sin eso, no se cierra. Matias hizo todo bien.", fecha: "2026-05-28T10:00:00-03:00" },
      { autor: "colonia_guia_turismo", texto: "Me gusta que en este grupo quede constancia de lo que NO se pudo determinar. En otros lados eso no existe.", fecha: "2026-05-28T11:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2552,
    autor: "caro.veterinaria",
    fecha: "2026-06-08T14:20:00-03:00",
    texto: "Invierno: recordatorio de bebederos. Si vas a poner agua para las aves, ponela en lugar alto y despejado, cambiala TODOS los dias y lavala con agua caliente una vez por semana. Un bebedero sucio es un foco de transmision, hace mas mal que bien. Y no le pongas pan mojado, por favor. El pan no alimenta a nadie, ni a los patos ni a nada.",
    imagen: null,
    grupo: "aves",
    likes: 198,
    comentarios: [
      { autor: "colonia_guia_turismo", texto: "Lo del pan me lo tengo que aprender de memoria porque los turistas siempre quieren darle pan a los patos.", fecha: "2026-06-08T15:00:00-03:00" },
      { autor: "apicultor_florida", texto: "Yo tengo bebedero para las abejas y me olvido de cambiarlo. Me lo aplico tambien.", fecha: "2026-06-08T16:30:00-03:00",
        respuestas: [
          { autor: "caro.veterinaria", texto: "Mismo principio Selva. Agua parada mucho tiempo, problemas.", fecha: "2026-06-08T17:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2553,
    autor: "el_tero_viajero",
    fecha: "2026-06-21T17:50:00-03:00",
    texto: "Salida de campo del grupo: sabado 11 de julio, bañado de Santa Lucia, punto de encuentro a las 07:30. Traigan binoculares si tienen, si no tienen igual vengan que compartimos. Se camina despacio y en silencio. No es paseo, es salida de registro: cada uno anota lo suyo y despues cruzamos las planillas. Somos maximo 12 para no espantar todo.",
    imagen: null,
    grupo: "aves",
    likes: 154,
    comentarios: [
      { autor: "astro.mvd", texto: "Anotada. Llevo la grabadora tambien, asi tenemos registro sonoro.", fecha: "2026-06-21T18:20:00-03:00" },
      { autor: "caro.veterinaria", texto: "Voy. Llevo botiquin basico por las dudas, que en el bañado uno se resbala facil.", fecha: "2026-06-21T18:45:00-03:00" },
      { autor: "colonia_guia_turismo", texto: "Me queda lejos pero voy igual, salgo de Colonia a las 5. Alguien de Montevideo que me pueda llevar desde algun punto?", fecha: "2026-06-21T19:30:00-03:00",
        respuestas: [
          { autor: "astro.mvd", texto: "Yo salgo de Buceo a las 6:45, te paso a buscar por donde te sirva.", fecha: "2026-06-21T20:00:00-03:00" },
          { autor: "colonia_guia_turismo", texto: "Sos un sol. Coordinamos por privado.", fecha: "2026-06-21T20:15:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2554,
    autor: "astro.mvd",
    fecha: "2026-07-11T13:40:00-03:00",
    texto: "Cronica de la salida de hoy, desde el punto de vista sonoro. Grabe 3 horas 20 minutos. Identificados con seguridad por canto: benteveo, hornero, calandria, tero, chajá (a lo lejos, dos veces), cardenal y un pico de plata. Sin identificar: cuatro cantos que no reconozco y subo aparte. El bañado a las ocho de la mañana con niebla es una de las cosas mas lindas que escuche en mi vida y eso que yo me dedico a mirar el cielo.",
    imagen: null,
    grupo: "aves",
    likes: 231,
    comentarios: [
      { autor: "el_tero_viajero", texto: "Mi planilla visual coincide casi entera. Yo sume garza mora, biguá y cuervillo, que vos no ibas a oir porque casi no vocalizan.", fecha: "2026-07-11T14:20:00-03:00",
        respuestas: [
          { autor: "astro.mvd", texto: "Justo eso: el metodo sonoro tiene un sesgo enorme contra las aves silenciosas. Si cruzamos las dos planillas la lista queda mucho mejor.", fecha: "2026-07-11T14:45:00-03:00" },
          { autor: "el_tero_viajero", texto: "Por eso te pedi que vinieras. Dos metodos con sesgos distintos se corrigen entre si.", fecha: "2026-07-11T15:00:00-03:00" }
        ]
      },
      { autor: "caro.veterinaria", texto: "Fuimos 11. Nadie hablo fuerte, nadie corrio, nadie tiro nada. Estoy orgullosa de este grupo, en serio.", fecha: "2026-07-11T16:00:00-03:00" },
      { autor: "colonia_guia_turismo", texto: "Vuelvo a Colonia con la libreta llena. Gracias Lucia por el viaje y la charla.", fecha: "2026-07-11T18:30:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2555,
    autor: "el_tero_viajero",
    fecha: "2026-07-13T11:00:00-03:00",
    texto: "PLANILLA CONSOLIDADA salida 11/07/2026, bañado de Santa Lucia, 07:30 a 11:00, 11 observadores.\nEspecies confirmadas: 27\nDestacadas: cisne de cuello negro (4), garza mora (2), chajá (6 auditivos, 2 visuales), martin pescador grande (1), carancho (1), cardenal (3), calandria (5), tero (incontables, como corresponde).\nNo determinadas: 4 registros sonoros y 1 rapaz a contraluz.\nSubo la planilla completa a quien la pida. Gracias a todos.",
    imagen: null,
    grupo: "aves",
    likes: 189,
    comentarios: [
      { autor: "agronomo_paysandu", texto: "Veintisiete especies en tres horas y media. La gente no tiene idea de lo que tiene a media hora de su casa.", fecha: "2026-07-13T12:00:00-03:00" },
      { autor: "salvavidas_rocha", texto: "Me perdi la salida por trabajo. La proxima voy si o si.", fecha: "2026-07-13T13:30:00-03:00" },
      { autor: "apicultor_florida", texto: "Pedime la planilla, la quiero para comparar con lo que anoto en Florida.", fecha: "2026-07-13T14:00:00-03:00",
        respuestas: [
          { autor: "el_tero_viajero", texto: "Te la mando hoy Selva. Y si armamos una de Florida, cuenten conmigo.", fecha: "2026-07-13T14:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2556,
    autor: "colonia_guia_turismo",
    fecha: "2026-07-21T10:30:00-03:00",
    texto: "FICHA (mi primera ficha completa, sean buenos)\nEspecie: cardenal (Paroaria coronata)\nCantidad: 3\nFecha: 20/07/2026\nHora: 09:10\nLugar: arboleda del Real de San Carlos, Colonia\nCoordenadas aprox: -34.454, -57.860\nObservaciones: dos adultos con la cabeza roja bien marcada y uno mas apagado, que supongo juvenil. Se alimentaban en el suelo. Los mire diez minutos con binoculares prestados.",
    imagen: null,
    grupo: "aves",
    likes: 143,
    comentarios: [
      { autor: "el_tero_viajero", texto: "Mariana, ficha impecable. Un detalle nada mas: en julio ese apagado es mas probable que sea inmaduro del año pasado que juvenil del año. Poner inmaduro es mas seguro. Nada grave, la ficha esta muy bien.", fecha: "2026-07-21T11:15:00-03:00",
        respuestas: [
          { autor: "colonia_guia_turismo", texto: "Corregido, gracias. Ahora entiendo la diferencia entre juvenil e inmaduro, que la usaba como sinonimo.", fecha: "2026-07-21T11:40:00-03:00" },
          { autor: "caro.veterinaria", texto: "Mirá que hace un año y medio no sabias distinguir un tordo. Sos la mejor alumna del grupo.", fecha: "2026-07-21T12:00:00-03:00" },
          { autor: "colonia_guia_turismo", texto: "Es que ustedes enseñan sin hacerte sentir tonta. Eso no abunda.", fecha: "2026-07-21T12:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2557,
    autor: "caro.veterinaria",
    fecha: "2026-07-29T18:00:00-03:00",
    texto: "Consulta para el grupo, hablo como veterinaria y no tengo la respuesta. Estamos recibiendo mas horneros con problemas respiratorios que otros inviernos. Puede ser casualidad, puede ser que la gente consulte mas, puede ser algo del ambiente. Antes de decir cualquier cosa quiero saber si alguien nota algo raro en los horneros de su zona: menos actividad, nidos abandonados, lo que sea. Y aclaro: esto NO es una alarma, es una pregunta.",
    imagen: null,
    grupo: "aves",
    likes: 167,
    comentarios: [
      { autor: "apicultor_florida", texto: "Aca en Florida los veo normales. Nidos nuevos ya empezados incluso.", fecha: "2026-07-29T18:40:00-03:00" },
      { autor: "el_tero_viajero", texto: "En Rocha sin novedad. Ojo con el sesgo del que pregunta: si preguntas si vieron algo raro, siempre alguien vio algo raro. Yo pondria una pregunta mas neutra.", fecha: "2026-07-29T19:20:00-03:00",
        respuestas: [
          { autor: "caro.veterinaria", texto: "Tenes toda la razon y es un error mio. Reformulo: cuenten como estan los horneros de su zona, sin adjetivos.", fecha: "2026-07-29T19:45:00-03:00" },
          { autor: "astro.mvd", texto: "Este intercambio deberia ser material de estudio. Alguien pregunta, alguien le señala el sesgo, la persona corrige. Tres mensajes. En otros grupos serian trescientos.", fecha: "2026-07-29T20:30:00-03:00" }
        ]
      },
      { autor: "agronomo_paysandu", texto: "Caro, si queres armamos una planilla simple con fecha, zona y estado del nido. Con 30 respuestas ordenadas ya tenes algo.", fecha: "2026-07-29T21:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2558,
    autor: "astro.mvd",
    fecha: "2026-08-02T21:15:00-03:00",
    texto: "Aviso lindo y medio fuera de tema pero cruzado con lo nuestro: el 5 de agosto antes del amanecer se ven bien tres planetas alineados sobre el horizonte este. Si salen a grabar el coro del amanecer, levanten la vista antes. Sale gratis y no se repite tan seguido.",
    imagen: null,
    grupo: "aves",
    likes: 121,
    comentarios: [
      { autor: "el_tero_viajero", texto: "Yo voy a estar en el km 60 a esa hora. Combino tero y planetas, no se puede pedir mas.", fecha: "2026-08-02T21:40:00-03:00" },
      { autor: "salvavidas_rocha", texto: "Desde la playa se debe ver hermoso. Aviso en la torre asi lo miran los del turno.", fecha: "2026-08-02T22:10:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2559,
    autor: "el_tero_viajero",
    fecha: "2026-08-05T07:05:00-03:00",
    texto: "FICHA\nEspecie: tero (Vanellus chilensis)\nCantidad: 2 adultos\nFecha: 05/08/2026\nHora: 06:35\nLugar: bajo del puente ruta 5 km 60\nObservaciones: la pareja de siempre, sin pichones esta vez (fuera de temporada). Cielo despejado, planetas visibles al este como aviso Lucia. Hacia 2 grados y valia la pena. Buen dia grupo.",
    imagen: null,
    grupo: "aves",
    likes: 176,
    comentarios: [
      { autor: "astro.mvd", texto: "Los viste! Que bueno. Yo los mire desde la azotea, con menos frio y menos teros.", fecha: "2026-08-05T07:30:00-03:00" },
      { autor: "caro.veterinaria", texto: "Dos grados. Vos estas loco Nicolas y por eso te queremos.", fecha: "2026-08-05T08:00:00-03:00" },
      { autor: "colonia_guia_turismo", texto: "Que forma de arrancar el dia. Voy a mirar mas los teros de aca.", fecha: "2026-08-05T08:45:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2560,
    autor: "elabuelo_radioCX8",
    fecha: "2019-04-03T18:00:00-03:00",
    texto: "FIJADO. Estimados colegas: soy Ramon, CX8RE, licenciado desde 1971. Abro este espacio con un objetivo modesto: que el que sabe le pase la posta al que empieza. En mis tiempos uno aprendia porque un señor mayor se sentaba al lado y te mostraba. Eso se esta perdiendo y me parece una lastima. Aca se identifica, se respeta y se ayuda. Cambio y fuera.",
    imagen: null,
    grupo: "cx-radio",
    likes: 97,
    comentarios: [
      { autor: "coleccionista_cx", texto: "CX4HQ presente. Hector, de Belvedere. Yo mas que operar colecciono, pero tengo equipos que funcionan y los presto.", fecha: "2019-04-03T19:20:00-03:00" },
      { autor: "elabuelo_radioCX8", texto: "Bienvenido colega CX4HQ. Un equipo que funciona y se presta vale mas que diez en vitrina, con todo respeto por su coleccion.", fecha: "2019-04-03T20:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2561,
    autor: "elabuelo_radioCX8",
    fecha: "2022-05-21T22:30:00-03:00",
    texto: "Contacto de anoche que quiero compartir. 20:47 hora local, 14.205 MHz banda de 20 metros, USB. Estacion de Nueva Zelanda, me dio 57 y yo le di 55 porque tenia QSB fuerte, se me iba y volvia cada quince segundos. Cuatro minutos de contacto. Doce mil kilometros con 100 watts y una dipolo que arme yo con alambre de fardo. A mis 75 años sigo emocionandome como el primer dia. Cambio y fuera.",
    imagen: null,
    grupo: "cx-radio",
    likes: 143,
    comentarios: [
      { autor: "coleccionista_cx", texto: "Con alambre de fardo. Eso es lo lindo de esto: no es el equipo, es la antena y la paciencia.", fecha: "2022-05-21T23:00:00-03:00" },
      { autor: "cielo_raro_uy", texto: "Perdon la ignorancia, que quiere decir QSB?", fecha: "2022-05-22T08:15:00-03:00",
        respuestas: [
          { autor: "elabuelo_radioCX8", texto: "Nada de perdon, joven. QSB es desvanecimiento: la señal sube y baja sola porque el camino que hace la onda por la ionosfera cambia. No es falla del equipo. Pregunte todo lo que quiera.", fecha: "2022-05-22T09:00:00-03:00" },
          { autor: "cielo_raro_uy", texto: "Gracias, quedo clarisimo. Yo escucho radio de noche y no entendia por que se iba.", fecha: "2022-05-22T09:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2562,
    autor: "coleccionista_cx",
    fecha: "2022-08-13T15:40:00-03:00",
    texto: "CX4HQ. Restauracion terminada: receptor a valvulas de los años 50, cinco valvulas, onda corta y larga. Le cambie los capacitores de papel que estaban todos podridos, el cable de alimentacion completo y limpie el dial con alcohol isopropilico y paciencia de santo. Funciona. Anoche escuche una emisora del norte de Brasil clarita. Foto del interior antes de cerrarlo, que es lo que mas me gusta mostrar.",
    imagen: null,
    grupo: "cx-radio",
    likes: 118,
    comentarios: [
      { autor: "elabuelo_radioCX8", texto: "Los capacitores de papel son el cancer de esos equipos. Hizo bien en cambiarlos todos y no de a uno. Felicitaciones colega.", fecha: "2022-08-13T16:30:00-03:00" },
      { autor: "dj.pirata.fm", texto: "Que hermosura. Yo tengo uno parecido que me dejo mi viejo y no me animo a abrirlo.", fecha: "2022-08-13T18:00:00-03:00",
        respuestas: [
          { autor: "coleccionista_cx", texto: "Traelo o mandame fotos. Pero no lo enchufes asi como esta, que si tiene los capacitores originales le podes quemar el transformador y ahi si perdiste el equipo.", fecha: "2022-08-13T18:45:00-03:00" },
          { autor: "dj.pirata.fm", texto: "Uf, casi lo enchufo el domingo. Gracias Hector, en serio.", fecha: "2022-08-13T19:10:00-03:00" }
        ]
      },
      { autor: "elabuelo_radioCX8", texto: "Lo del norte de Brasil clarito de noche es propagacion pura. En onda corta, de noche la capa F de la ionosfera te rebota la señal a miles de km; de dia se la come la capa D y no pasa nada. Por eso de madrugada aparece el mundo entero en el dial. CX8, Ramon. Cambio.", fecha: "2022-08-13T20:00:00-03:00",
        respuestas: [
          { autor: "coleccionista_cx", texto: "Ahi esta el misterio que me tiene enganchado hace 40 años. La misma radio, la misma antena, y de noche es otro planeta.", fecha: "2022-08-13T20:30:00-03:00" }
        ]
      },
      { autor: "dj_candombe", texto: "che yo no entiendo un pomo de esto pero me quedo leyendo igual. hay algo lindo en la gente que sabe de lo suyo y lo explica sin joder", fecha: "2022-08-14T02:10:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2563,
    autor: "dj.pirata.fm",
    fecha: "2023-02-27T23:50:00-03:00",
    texto: "Pregunta honesta para los licenciados del grupo, sin ganas de pelear. Nosotros en el barrio tenemos una radio comunitaria que transmite cuatro horas por dia en FM, con un transmisor de 30 watts y una antena en la azotea. Damos avisos del barrio, musica y a veces una charla. Por que eso esta mal visto aca? Pregunto en serio.",
    imagen: null,
    grupo: "cx-radio",
    likes: 74,
    comentarios: [
      { autor: "elabuelo_radioCX8", texto: "Le contesto en serio porque pregunta en serio. No esta mal visto lo que hacen, esta mal visto hacerlo sin autorizacion. El espectro es un bien de todos y esta ordenado. Si usted pisa una frecuencia asignada, el que se queda sin comunicar puede ser un servicio de emergencia. Ese es todo mi punto, y no es una opinion politica.", fecha: "2023-02-28T09:00:00-03:00",
        respuestas: [
          { autor: "dj.pirata.fm", texto: "Ahi le entiendo el punto tecnico y lo comparto. Lo que no comparto es que para el permiso te piden cosas que un barrio no puede pagar nunca. Entonces el orden termina siendo orden para algunos.", fecha: "2023-02-28T10:30:00-03:00" },
          { autor: "elabuelo_radioCX8", texto: "Ese es un problema real y no se lo voy a discutir. Pero la solucion es pelear por un tramite accesible, no transmitir arriba de otro. Se lo digo con aprecio.", fecha: "2023-02-28T11:15:00-03:00" },
          { autor: "dj.pirata.fm", texto: "Anotado don Ramon. Igual gracias por contestar de frente y no bloquearme como hacen en otros lados.", fecha: "2023-02-28T12:00:00-03:00" }
        ]
      },
      { autor: "coleccionista_cx", texto: "Yo tengo 68 años y les digo una cosa: prefiero mil veces esta discusion que la indiferencia.", fecha: "2023-02-28T14:20:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2564,
    autor: "cielo_raro_uy",
    fecha: "2023-06-09T02:40:00-03:00",
    texto: "Buenas, soy el sereno de obra que pregunta cosas raras. Estoy de guardia y con el receptor que me presto Hector escucho en 7 mega y pico un ruido que sube y baja, como un motor. No es voz, no es codigo. Dura como veinte minutos y para. Que es esto? Pregunto sin conspirar, lo aclaro antes de que me digan.",
    imagen: null,
    grupo: "cx-radio",
    likes: 88,
    comentarios: [
      { autor: "elabuelo_radioCX8", texto: "Jajaja me hizo reir la aclaracion. Lo que describe suena a radar de onda corta o a una portadora con modulacion de barrido. Se escuchan seguido en 40 metros de madrugada, cuando la banda se abre para larga distancia. No es nada del otro mundo ni nada oculto.", fecha: "2023-06-09T08:30:00-03:00",
        respuestas: [
          { autor: "cielo_raro_uy", texto: "Ah mira. Yo tenia una teoria mucho mas divertida pero me quedo con la suya que es la que sirve.", fecha: "2023-06-09T09:00:00-03:00" },
          { autor: "elabuelo_radioCX8", texto: "Las teorias divertidas estan bien para el asado. Para la radio, el manual. Cambio y fuera.", fecha: "2023-06-09T09:40:00-03:00" }
        ]
      },
      { autor: "dj.pirata.fm", texto: "Damian anota la frecuencia exacta y la hora la proxima. Sin eso no se puede identificar nada.", fecha: "2023-06-09T11:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2565,
    autor: "elabuelo_radioCX8",
    fecha: "2023-10-15T11:20:00-03:00",
    texto: "Aviso de administracion. Se publicaron esta semana tres avisos de venta de equipos fuera del hilo de los sabados. Los movi, no los borre. La regla del hilo mensual no es capricho: si dejamos vender todos los dias, el grupo se convierte en una feria y las consultas tecnicas se pierden abajo. El que quiera vender que espere al sabado, que no se le va a morir nadie.",
    imagen: null,
    grupo: "cx-radio",
    likes: 66,
    comentarios: [
      { autor: "coleccionista_cx", texto: "Uno de esos era mio y tiene razon. Me apure. Espero al sabado como corresponde.", fecha: "2023-10-15T12:00:00-03:00",
        respuestas: [
          { autor: "elabuelo_radioCX8", texto: "Lo se, colega, y por eso no lo nombre. Que el administrador señale sin escrachar tambien es parte del oficio.", fecha: "2023-10-15T12:40:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2566,
    autor: "coleccionista_cx",
    fecha: "2024-03-08T17:00:00-03:00",
    texto: "CX4HQ. Hilo del sabado, mi aporte del mes. Tengo para dar (no vender, DAR) a quien recien empieza: una fuente de 12 volts 20 amperes reparada, un rollo de coaxial de unos 15 metros con conectores nuevos y un manual de antenas de 1978 fotocopiado. Condicion unica: que sea para alguien que arranca de verdad y que despues cuente aca como le fue.",
    imagen: null,
    grupo: "cx-radio",
    likes: 152,
    comentarios: [
      { autor: "cielo_raro_uy", texto: "Yo arranco de verdad pero no quiero sacarle el lugar a otro que este mas encaminado.", fecha: "2024-03-08T17:40:00-03:00",
        respuestas: [
          { autor: "coleccionista_cx", texto: "Damian, es tuyo. Hace un año que preguntas cosas y anotas las respuestas. Eso es estar encaminado.", fecha: "2024-03-08T18:10:00-03:00" },
          { autor: "elabuelo_radioCX8", texto: "Apoyo la mocion. Y agrego: joven, con eso ya tiene medio equipo. Le falta la licencia. Empiece a estudiar.", fecha: "2024-03-08T18:45:00-03:00" },
          { autor: "cielo_raro_uy", texto: "Me estan haciendo emocionar a las seis de la tarde. Gracias muchachos.", fecha: "2024-03-08T19:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2567,
    autor: "dj.pirata.fm",
    fecha: "2024-07-19T01:15:00-03:00",
    texto: "Tema tecnico y no politico, lo aclaro de entrada. Se nos quemo la etapa final del transmisor. El tipo que nos vendio el equipo desaparecio. Antes de tirar plata: como se mide si el problema es la final o es la fuente? Tengo tester y ganas, no tengo osciloscopio.",
    imagen: null,
    grupo: "cx-radio",
    likes: 59,
    comentarios: [
      { autor: "elabuelo_radioCX8", texto: "Con tester se puede bastante. Primero: mida tension de la fuente en vacio y con carga. Si cae mucho con carga, el problema es la fuente. Segundo: mida los transistores de salida en diodo, fuera del circuito si puede. Un transistor final quemado da corto entre colector y emisor y se ve enseguida. Y desconecte todo antes de meter mano, que la alta tension no perdona.", fecha: "2024-07-19T08:00:00-03:00",
        respuestas: [
          { autor: "dj.pirata.fm", texto: "Don Ramon usted podria no contestarme y sin embargo me contesta con un manual. Gracias.", fecha: "2024-07-19T10:30:00-03:00" },
          { autor: "elabuelo_radioCX8", texto: "Una cosa es lo que opino de su permiso y otra es dejar que se electrocute un muchacho. No confunda las dos cosas.", fecha: "2024-07-19T11:00:00-03:00" }
        ]
      },
      { autor: "coleccionista_cx", texto: "Si necesitas transistores de salida fijate lo que tengo, capaz que en la caja de sobras aparece el tuyo.", fecha: "2024-07-19T13:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2568,
    autor: "elabuelo_radioCX8",
    fecha: "2024-11-30T20:00:00-03:00",
    texto: "Concurso de fin de semana. Operé 14 horas repartidas en dos dias, banda de 20 y 15 metros. 212 contactos, 34 paises. Mi mejor DX: una estacion de Japon el domingo a las 09:20 local, 21.290 MHz, 55 de los dos lados. Larga vida a la linea gris, que es cuando pasan estas cosas. Estoy molido pero contento. Cambio y fuera.",
    imagen: null,
    grupo: "cx-radio",
    likes: 134,
    comentarios: [
      { autor: "coleccionista_cx", texto: "Japon en 15 metros desde Reducto con dipolo. Sos un fenomeno Ramon.", fecha: "2024-11-30T20:40:00-03:00" },
      { autor: "cielo_raro_uy", texto: "Que es la linea gris?", fecha: "2024-11-30T21:00:00-03:00",
        respuestas: [
          { autor: "elabuelo_radioCX8", texto: "Es la franja del planeta donde esta amaneciendo o anocheciendo. Ahi la ionosfera se comporta distinto y las señales viajan muchisimo mas lejos con la misma potencia. Por eso los que sabemos nos levantamos temprano.", fecha: "2024-11-30T21:30:00-03:00" },
          { autor: "cielo_raro_uy", texto: "Entonces el mejor momento es cuando yo termino la guardia. Perfecto.", fecha: "2024-11-30T21:50:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2569,
    autor: "cielo_raro_uy",
    fecha: "2025-02-14T03:30:00-03:00",
    texto: "Guardia de madrugada. Arme una antena de hilo largo con lo que tenia: 20 metros de cable de instalacion, un aislador hecho con un pedazo de manguera y el otro extremo atado al parante del cartel de la obra. Escuche Argentina, Brasil, Chile y algo en ingles que no llegue a sacar. No es gran cosa pero la hice yo y funciona.",
    imagen: null,
    grupo: "cx-radio",
    likes: 126,
    comentarios: [
      { autor: "elabuelo_radioCX8", texto: "Como que no es gran cosa. Eso ES la radio, joven. Un cable, un aislador y ganas. Un consejo: haga una tierra decente, aunque sea una varilla de hierro clavada un metro. Le va a bajar el ruido a la mitad.", fecha: "2025-02-14T08:00:00-03:00",
        respuestas: [
          { autor: "cielo_raro_uy", texto: "Hierro clavado tengo de sobra aca. Lo hago esta noche y cuento.", fecha: "2025-02-14T09:00:00-03:00" },
          { autor: "cielo_raro_uy", texto: "Hecho. Bajo el ruido muchisimo, ahora escucho cosas que antes estaban tapadas. Increible que un fierro clavado haga eso.", fecha: "2025-02-15T04:10:00-03:00" }
        ]
      },
      { autor: "coleccionista_cx", texto: "El aislador de manguera es un clasico. Yo usaba cuello de botella cuando era gurí.", fecha: "2025-02-14T11:20:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2570,
    autor: "coleccionista_cx",
    fecha: "2025-05-24T16:20:00-03:00",
    texto: "CX4HQ. Consulta a los que saben de propagacion. Estoy notando las bandas altas mucho mas flojas que hace dos años. 10 metros practicamente muerta a la tarde, 15 abre y cierra rapido. Es cosa mia, del ciclo solar, o de mi antena que se esta poniendo vieja como yo?",
    imagen: null,
    grupo: "cx-radio",
    likes: 81,
    comentarios: [
      { autor: "elabuelo_radioCX8", texto: "No es su antena, colega. Es el ciclo. Venimos bajando desde el pico y las bandas altas son las primeras en sentirlo. En 10 metros vamos a tener años flojos. La buena noticia es que 40 y 80 se ponen buenisimas de noche. Uno se muda de banda y sigue.", fecha: "2025-05-24T17:00:00-03:00",
        respuestas: [
          { autor: "coleccionista_cx", texto: "Uno se muda de banda y sigue. Eso deberia ir en la pared del grupo.", fecha: "2025-05-24T17:30:00-03:00" }
        ]
      },
      { autor: "cielo_raro_uy", texto: "Igual reviselo el SWR Hector, por las dudas. Aprendi eso hace poco y ahora se lo digo a todo el mundo jaja.", fecha: "2025-05-24T19:00:00-03:00",
        respuestas: [
          { autor: "coleccionista_cx", texto: "Ya lo medi: 1.4 a 1 en el centro de banda. La antena esta mejor que yo.", fecha: "2025-05-24T19:40:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2571,
    autor: "elabuelo_radioCX8",
    fecha: "2025-09-06T10:00:00-03:00",
    texto: "Para los que empiezan, publico esto y despues lo fijo. Que se necesita para operar legal en Uruguay: estudiar el material de reglamentacion y tecnica basica, rendir el examen, y con eso le asignan indicativo. El indicativo nuestro empieza con CX, despues un numero segun la categoria y la zona, y despues dos letras. El mio es CX8RE. No es un tramite del otro mundo, es cuestion de sentarse a estudiar dos meses. El que quiera, yo le tomo examen de prueba por telefono sin cobrar un peso.",
    imagen: null,
    grupo: "cx-radio",
    likes: 171,
    comentarios: [
      { autor: "cielo_raro_uy", texto: "Yo. Yo quiero. Me anoto formalmente.", fecha: "2025-09-06T10:30:00-03:00",
        respuestas: [
          { autor: "elabuelo_radioCX8", texto: "Lo esperaba, joven. Le mando el material por privado hoy mismo. Nos vemos los martes a las 18 por telefono.", fecha: "2025-09-06T11:00:00-03:00" }
        ]
      },
      { autor: "dj.pirata.fm", texto: "Yo tambien lo estuve mirando. No para dejar la comunitaria, para tener las dos cosas. Se puede?", fecha: "2025-09-06T13:00:00-03:00",
        respuestas: [
          { autor: "elabuelo_radioCX8", texto: "Se puede tener licencia de radioaficionado, claro. Son mundos distintos y no se excluyen. Y le voy a decir algo: si usted se licencia, tiene mucha mas autoridad para reclamar lo otro. Piense en eso.", fecha: "2025-09-06T14:00:00-03:00" },
          { autor: "dj.pirata.fm", texto: "Uh. Eso no lo habia pensado asi. Mandeme el material a mi tambien.", fecha: "2025-09-06T14:30:00-03:00" }
        ]
      },
      { autor: "coleccionista_cx", texto: "Miren lo que logro este grupo. Casi me emociono.", fecha: "2025-09-06T16:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2572,
    autor: "elabuelo_radioCX8",
    fecha: "2026-01-08T19:30:00-03:00",
    texto: "Reporte de la noche del 6 de enero. 03:40 hora local, 3.750 MHz, banda de 80 metros, LSB. Rueda con cuatro colegas del interior: uno de Tacuarembo, uno de Salto, uno de Treinta y Tres y quien les habla. Señales de 59 entre todos, banda planchada, sin ruido. Hablamos hora y media de nada en particular. A veces la radio no es distancia, es compañia.",
    imagen: null,
    grupo: "cx-radio",
    likes: 158,
    comentarios: [
      { autor: "coleccionista_cx", texto: "80 metros a las 4 de la mañana en verano es un lujo. Yo esa noche dormia como la gente.", fecha: "2026-01-08T20:00:00-03:00" },
      { autor: "cielo_raro_uy", texto: "Yo escuchaba desde la obra y no me anime a llamar porque todavia no tengo el indicativo. Faltan dos semanas para el examen.", fecha: "2026-01-08T21:00:00-03:00",
        respuestas: [
          { autor: "elabuelo_radioCX8", texto: "Hizo bien en no llamar. Y en dos semanas llama. Estudie tranquilo que va bien.", fecha: "2026-01-08T21:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2573,
    autor: "cielo_raro_uy",
    fecha: "2026-01-27T18:45:00-03:00",
    texto: "APROBE. Soy CX2DS. Damian Sosa, sereno de obra, 35 años, y desde hoy tengo indicativo propio. Rendi el sabado y me avisaron hoy. No lo puedo creer. Gracias a don Ramon que me tomo examen 14 martes seguidos por telefono y a Hector que me dio la fuente y el coaxial cuando yo no tenia nada.",
    imagen: null,
    grupo: "cx-radio",
    likes: 287,
    comentarios: [
      { autor: "elabuelo_radioCX8", texto: "CX2DS, bienvenido a la banda, colega. Le hablo de igual a igual desde ahora. Esta noche a las 22:00 lo espero en 7.110 para su primer contacto oficial. No falte. Cambio y fuera.", fecha: "2026-01-27T19:00:00-03:00",
        respuestas: [
          { autor: "cielo_raro_uy", texto: "No falto ni loco. Voy a estar media hora antes con el equipo prendido, seguro.", fecha: "2026-01-27T19:15:00-03:00" },
          { autor: "coleccionista_cx", texto: "Yo escucho desde Belvedere y despues cuento como se oyo.", fecha: "2026-01-27T19:40:00-03:00" }
        ]
      },
      { autor: "dj.pirata.fm", texto: "Grande Damian! El sereno que preguntaba que era ese ruido, mirenlo ahora.", fecha: "2026-01-27T20:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2574,
    autor: "cielo_raro_uy",
    fecha: "2026-01-27T23:10:00-03:00",
    texto: "CX2DS. Primer contacto oficial hecho. 22:04 hora local, 7.110 MHz, banda de 40 metros, LSB. CX8RE me dio 59 y yo le di 59. Duro 6 minutos. Me temblaba la voz y se me olvido el reporte, tuve que preguntarlo dos veces. Me da igual. Escribi todo en el cuaderno con birome, como me enseñaron.",
    imagen: null,
    grupo: "cx-radio",
    likes: 264,
    comentarios: [
      { autor: "elabuelo_radioCX8", texto: "Confirmo el contacto y le mando QSL. Le tembló la voz como a todos nos temblo la primera vez. Anotelo en el cuaderno y guardelo, porque dentro de cuarenta años lo va a leer y se le va a hacer un nudo en la garganta. Le hablo con conocimiento de causa.", fecha: "2026-01-27T23:30:00-03:00" },
      { autor: "coleccionista_cx", texto: "Se te escucho perfecto desde aca. Modulacion limpia, un poquito bajo el volumen nada mas. Bienvenido colega.", fecha: "2026-01-27T23:45:00-03:00" },
      { autor: "dj.pirata.fm", texto: "Yo lo grabe desde el receptor de la radio. Si queres te paso el audio de tu primer contacto.", fecha: "2026-01-28T00:20:00-03:00",
        respuestas: [
          { autor: "cielo_raro_uy", texto: "Emiliano si me pasas eso te debo una de por vida.", fecha: "2026-01-28T00:35:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2575,
    autor: "coleccionista_cx",
    fecha: "2026-02-14T17:30:00-03:00",
    texto: "CX4HQ. Hilo del sabado. Vendo (esta vez si, y en el dia que corresponde): transceptor HF de los 90, funciona todo menos el medidor de potencia que quedo trabado. Lo tengo hace 11 años. Precio de amigo y prioridad para el que no tiene equipo. No pongo precio aca, escriban por privado.",
    imagen: null,
    grupo: "cx-radio",
    likes: 63,
    comentarios: [
      { autor: "elabuelo_radioCX8", texto: "Reglamentario y en el dia correcto. Asi se hace.", fecha: "2026-02-14T18:00:00-03:00" },
      { autor: "cielo_raro_uy", texto: "Hector vos ya me diste medio equipo, no me vendas nada mas que me da verguenza.", fecha: "2026-02-14T19:00:00-03:00",
        respuestas: [
          { autor: "coleccionista_cx", texto: "Este no era para vos, tranquilo. Este es para el proximo Damian que aparezca.", fecha: "2026-02-14T19:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2576,
    autor: "dj.pirata.fm",
    fecha: "2026-03-02T22:00:00-03:00",
    texto: "Cuento algo que me paso y que tiene que ver con este grupo. Vino gente a decirnos que apaguemos el transmisor. No voy a dar detalles. Lo apagamos por unos dias. Y en esos dias me di cuenta de que lo que mas extrañaba no era transmitir, era que la vecina de enfrente mandara el aviso de que se le perdio el perro y que a la hora se lo trajeran. Eso es lo que hay que defender, y lo voy a defender con el papel en la mano, no sin el.",
    imagen: null,
    grupo: "cx-radio",
    likes: 149,
    comentarios: [
      { autor: "elabuelo_radioCX8", texto: "Emiliano, no le voy a decir que tenia razon porque no es momento de eso. Le voy a decir que si necesita ayuda con el tramite, yo se lo armo. Tengo tiempo de sobra y algo de experiencia en papeleo.", fecha: "2026-03-02T22:40:00-03:00",
        respuestas: [
          { autor: "dj.pirata.fm", texto: "Acepto. En serio. Y gracias por no decirme te lo dije, que se lo merecia.", fecha: "2026-03-02T23:00:00-03:00" },
          { autor: "elabuelo_radioCX8", texto: "Uno aprende a los 79 que decir te lo dije no arregla ninguna antena.", fecha: "2026-03-02T23:20:00-03:00" }
        ]
      },
      { autor: "coleccionista_cx", texto: "Che, sin querer este grupo se convirtio en algo lindo.", fecha: "2026-03-03T09:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2577,
    autor: "cielo_raro_uy",
    fecha: "2026-03-21T04:20:00-03:00",
    texto: "CX2DS reportando propagacion desde la obra, 04:15. 40 metros abierta y tranquila, escuche Peru y Bolivia con 57. 80 metros con ruido de tormenta lejana, se escucha el crepitar cada dos segundos. 20 metros cerrada todavia, capaz que a las 6 abre. Si alguien esta despierto y quiere probar, avise.",
    imagen: null,
    grupo: "cx-radio",
    likes: 92,
    comentarios: [
      { autor: "elabuelo_radioCX8", texto: "Excelente reporte, colega. Anote tambien si el ruido de tormenta viene con direccion, girando la antena si es direccional. Sirve para saber de donde viene el frente.", fecha: "2026-03-21T08:00:00-03:00" },
      { autor: "dj.pirata.fm", texto: "Damian a vos ya te sale el reporte de memoria. Hace un año preguntabas que era el QSB.", fecha: "2026-03-21T10:00:00-03:00",
        respuestas: [
          { autor: "cielo_raro_uy", texto: "Y hace un año vos me decias que anotara la frecuencia exacta. Aprendi de los dos.", fecha: "2026-03-21T10:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2578,
    autor: "elabuelo_radioCX8",
    fecha: "2026-04-05T15:00:00-03:00",
    texto: "Encuesta para tener idea de como esta el grupo. Contesten con honestidad, no hay respuesta que de verguenza.",
    imagen: null,
    grupo: "cx-radio",
    likes: 71,
    comentarios: [
      { autor: "coleccionista_cx", texto: "Vote 40 metros. Es la banda de la gente grande y no me da verguenza.", fecha: "2026-04-05T15:40:00-03:00" },
      { autor: "cielo_raro_uy", texto: "40 tambien, es lo unico que agarro bien con el hilo largo.", fecha: "2026-04-05T16:20:00-03:00" }
    ],
    encuesta: {
      pregunta: "Que banda usas mas en el dia a dia?",
      opciones: [
        { texto: "40 metros (7 MHz)", votos: 118 },
        { texto: "80 metros (3.5 MHz)", votos: 54 },
        { texto: "20 metros (14 MHz)", votos: 87 },
        { texto: "VHF, repetidoras locales", votos: 63 },
        { texto: "Solo escucho, todavia no transmito", votos: 96 }
      ],
      cierra: "2026-04-30T23:59:00-03:00"
    }
  },
  {
    id: 2579,
    autor: "coleccionista_cx",
    fecha: "2026-04-18T11:40:00-03:00",
    texto: "CX4HQ. Me trajeron una radio a valvulas de mesa para tasar y me hicieron una pregunta que no supe contestar del todo: cuanto vale? Y la respuesta honesta es que depende de si funciona, de si tiene el gabinete original y de si tiene la historia. Un equipo con la etiqueta del taller que lo reparo en 1962 vale mas que uno impecable sin papeles, para mi. Capaz que soy un romantico.",
    imagen: null,
    grupo: "cx-radio",
    likes: 88,
    comentarios: [
      { autor: "elabuelo_radioCX8", texto: "No es romanticismo, es criterio. En cualquier coleccion la procedencia documentada vale mas que el brillo.", fecha: "2026-04-18T12:30:00-03:00" },
      { autor: "dj.pirata.fm", texto: "La etiqueta del taller de 1962. Que cosa hermosa.", fecha: "2026-04-18T14:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2580,
    autor: "dj.pirata.fm",
    fecha: "2026-05-09T21:30:00-03:00",
    texto: "Actualizo mi tema. Con don Ramon armamos la carpeta. Falta un plano de la instalacion y una medicion que no sabemos hacer nosotros. Si hay algun colega que sepa medir y quiera dar una mano, avise. Pagamos lo que se pueda o lo cambiamos por lo que sea, tenemos gente para pintar, arreglar, lo que precise.",
    imagen: null,
    grupo: "cx-radio",
    likes: 104,
    comentarios: [
      { autor: "coleccionista_cx", texto: "Yo no se medir eso pero conozco a quien. Le pregunto y te aviso el lunes.", fecha: "2026-05-09T22:00:00-03:00" },
      { autor: "cielo_raro_uy", texto: "Yo voy y hago lo que haya que hacer, aunque sea sostener la escalera.", fecha: "2026-05-09T22:30:00-03:00",
        respuestas: [
          { autor: "dj.pirata.fm", texto: "Sostener la escalera es la mitad del trabajo de una antena, Damian. Anotado.", fecha: "2026-05-09T23:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2581,
    autor: "elabuelo_radioCX8",
    fecha: "2026-05-27T09:00:00-03:00",
    texto: "Tema serio: emergencias. En un corte grande de energia y de telefonia, la radio sigue funcionando si tenes bateria. Propongo que armemos una lista de colegas dispuestos a operar en emergencia, con zona y bandas disponibles. No es para asustar a nadie ni para andar de heroes, es para que si pasa algo no perdamos dos horas averiguando quien esta donde. Yo arranco: CX8RE, Reducto, Montevideo, 40 y 80 metros, bateria para 10 horas.",
    imagen: null,
    grupo: "cx-radio",
    likes: 176,
    comentarios: [
      { autor: "cielo_raro_uy", texto: "CX2DS, Canelones (obra en zona sur), 40 metros, tengo generador de la obra. Anotenme.", fecha: "2026-05-27T09:30:00-03:00" },
      { autor: "coleccionista_cx", texto: "CX4HQ, Belvedere, Montevideo. 80 metros y equipos viejos que andan sin electronica moderna, que en un corte es una ventaja.", fecha: "2026-05-27T10:00:00-03:00",
        respuestas: [
          { autor: "elabuelo_radioCX8", texto: "Ahi tiene, colega: su coleccion dejo de ser vitrina y paso a ser reserva estrategica.", fecha: "2026-05-27T10:30:00-03:00" },
          { autor: "coleccionista_cx", texto: "Me hiciste el año con ese comentario, Ramon.", fecha: "2026-05-27T11:00:00-03:00" }
        ]
      },
      { autor: "dj.pirata.fm", texto: "La radio del barrio tiene bateria de auto y transmisor chico. En una emergencia servimos para avisar a la gente, aunque sea.", fecha: "2026-05-27T12:00:00-03:00",
        respuestas: [
          { autor: "elabuelo_radioCX8", texto: "En una emergencia, Emiliano, no me importa el papel de nadie. Lo anoto en la lista.", fecha: "2026-05-27T12:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2582,
    autor: "cielo_raro_uy",
    fecha: "2026-06-14T05:00:00-03:00",
    texto: "CX2DS. Anoche pasaron cosas. 02:40, 7.140 MHz, contacto con una estacion de las islas del Atlantico sur. Me dio 55, yo le di 44 porque tenia mucho QRM de una portadora al lado. Tres minutos. Es mi DX mas lejano hasta ahora y lo hice con el hilo largo atado al cartel de obra. Don Ramon, esto es culpa suya.",
    imagen: null,
    grupo: "cx-radio",
    likes: 197,
    comentarios: [
      { autor: "elabuelo_radioCX8", texto: "Culpable y orgulloso. Fijese que el reporte que dio fue honesto: 44 porque habia QRM. Mucha gente regala 59 a todo el mundo y eso arruina el sentido del reporte. Usted opera bien, colega.", fecha: "2026-06-14T08:00:00-03:00",
        respuestas: [
          { autor: "cielo_raro_uy", texto: "Me enseño usted que el reporte no es un cumplido.", fecha: "2026-06-14T09:00:00-03:00" }
        ]
      },
      { autor: "coleccionista_cx", texto: "El hilo largo del cartel de obra ya es una leyenda de este grupo.", fecha: "2026-06-14T10:30:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2583,
    autor: "coleccionista_cx",
    fecha: "2026-06-28T16:00:00-03:00",
    texto: "CX4HQ. Pregunta de coleccionista molesto: alguien tiene un manual de servicio de un transceptor HF de los 80, de los que tenian el dial mecanico grande? No el de usuario, el de servicio con los esquemas. Pago fotocopias, envio, lo que sea. Hace tres años que lo busco.",
    imagen: null,
    grupo: "cx-radio",
    likes: 47,
    comentarios: [
      { autor: "elabuelo_radioCX8", texto: "Tengo cajas en el altillo que no abro desde que se murio mi señora. Esta semana subo a mirar. Si esta, es suyo.", fecha: "2026-06-28T17:00:00-03:00",
        respuestas: [
          { autor: "coleccionista_cx", texto: "Ramon, no subas al altillo solo. Aviso y voy yo a subir, vos me decis donde mirar.", fecha: "2026-06-28T17:30:00-03:00" },
          { autor: "elabuelo_radioCX8", texto: "Tengo 79 años, no 105. Pero acepto la compañia, que hace tiempo que no viene nadie a casa.", fecha: "2026-06-28T18:00:00-03:00" },
          { autor: "coleccionista_cx", texto: "Sabado a las 15 estoy ahi con bizcochos. No se discute.", fecha: "2026-06-28T18:20:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2584,
    autor: "elabuelo_radioCX8",
    fecha: "2026-07-06T19:00:00-03:00",
    texto: "Informo: encontramos el manual. Estaba en una caja con papeles de 1985, junto con mi primer cuaderno de contactos. Hector se llevo el manual y yo me quede leyendo el cuaderno hasta las dos de la mañana. Primer contacto anotado: 14 de marzo de 1971, 7 MHz, una estacion de Melo, 59. Tenia 24 años y la misma letra que tengo ahora.",
    imagen: null,
    grupo: "cx-radio",
    likes: 243,
    comentarios: [
      { autor: "cielo_raro_uy", texto: "Cincuenta y cinco años de cuaderno. Yo llevo seis meses y ya me parece un tesoro el mio.", fecha: "2026-07-06T19:30:00-03:00",
        respuestas: [
          { autor: "elabuelo_radioCX8", texto: "Es un tesoro, colega. No lo pase a la computadora. La birome tiene algo que la pantalla no.", fecha: "2026-07-06T20:00:00-03:00" }
        ]
      },
      { autor: "coleccionista_cx", texto: "Yo me lleve el manual y me traje algo mejor: la tarde. Gracias Ramon.", fecha: "2026-07-06T20:30:00-03:00" },
      { autor: "dj.pirata.fm", texto: "Che, este grupo tiene mas corazon que la mitad de la plataforma.", fecha: "2026-07-06T22:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2585,
    autor: "dj.pirata.fm",
    fecha: "2026-07-18T20:15:00-03:00",
    texto: "Novedad: presentamos la carpeta. Nos falta esperar. No canto victoria porque ya me hice ilusiones otras veces. Pero les cuento porque este grupo banco cuando no tenia por que bancar. Sobre todo un señor de 79 años con el que no coincido en casi nada y que me armo el 60 por ciento del tramite.",
    imagen: null,
    grupo: "cx-radio",
    likes: 188,
    comentarios: [
      { autor: "elabuelo_radioCX8", texto: "Coincidimos en lo unico que importa, Emiliano: en que la radio sirve para juntar gente. El resto son detalles de reglamento. Suerte con el tramite. Cambio y fuera.", fecha: "2026-07-18T21:00:00-03:00" },
      { autor: "coleccionista_cx", texto: "Avisa cuando salga que hacemos algo. Aunque sea un asado con antena.", fecha: "2026-07-18T21:40:00-03:00" },
      { autor: "cielo_raro_uy", texto: "Asado con antena es el mejor nombre para un evento que escuche en mi vida.", fecha: "2026-07-18T22:15:00-03:00",
        respuestas: [
          { autor: "dj.pirata.fm", texto: "Queda. Asado con Antena, primera edicion, cuando salga el permiso.", fecha: "2026-07-18T22:40:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2586,
    autor: "cielo_raro_uy",
    fecha: "2026-07-30T03:50:00-03:00",
    texto: "CX2DS. Reporte y una reflexion de madrugada, disculpen. 03:45, 7.125 MHz, banda tranquila. Hace un año y medio yo estaba en esta misma obra escuchando ruidos raros y pensando cualquier cosa. Hoy se lo que escucho, se como se llama, se en que frecuencia esta y se quien me puede contestar. La diferencia entre esas dos noches no es el equipo. Es que alguien se tomo el trabajo de explicarme.",
    imagen: null,
    grupo: "cx-radio",
    likes: 259,
    comentarios: [
      { autor: "elabuelo_radioCX8", texto: "Y ahora le toca a usted explicarle al proximo. Asi funciona esto desde hace cien años. Cambio y fuera.", fecha: "2026-07-30T08:00:00-03:00" },
      { autor: "coleccionista_cx", texto: "Guarda ese texto Damian. Es de los mejores que se escribieron en este grupo.", fecha: "2026-07-30T09:30:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2587,
    autor: "elabuelo_radioCX8",
    fecha: "2026-08-03T18:30:00-03:00",
    texto: "Aviso a los colegas: el sabado 15 de agosto hacemos activacion desde el parque, de 10 a 17. Llevamos dos equipos, antena vertical y una dipolo. La idea es que la gente que pasa se acerque, escuche y si quiere hable. A los que estan aprendiendo: vengan, que van a operar ustedes con supervision. A los que no tienen licencia: vengan igual, escuchar es gratis y no infringe nada. CX8RE, cambio y fuera.",
    imagen: null,
    grupo: "cx-radio",
    likes: 132,
    comentarios: [
      { autor: "cielo_raro_uy", texto: "Voy y llevo la fuente que me dio Hector, asi cierra el circulo.", fecha: "2026-08-03T19:00:00-03:00" },
      { autor: "coleccionista_cx", texto: "Llevo dos receptores viejos andando para que la gente vea de donde venimos.", fecha: "2026-08-03T19:30:00-03:00" },
      { autor: "dj.pirata.fm", texto: "Me anoto para armar el sonido y las mesas. De radio no se tanto pero de armar cosas en la calle si.", fecha: "2026-08-03T20:00:00-03:00",
        respuestas: [
          { autor: "elabuelo_radioCX8", texto: "Aceptado y agradecido, colega. Traiga a la gente del barrio tambien.", fecha: "2026-08-03T20:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2588,
    autor: "laura.rambla",
    fecha: "2020-04-22T17:00:00-03:00",
    texto: "FIJADO. Abrimos este grupo cerrado con Gabriela porque nos hacia falta un lugar donde hablar entre nosotros sin que cada cosa que decimos termine en una captura de pantalla. Reglas cortas: nombres de alumnos nunca completos, lo de adentro se queda adentro, y los materiales se comparten, no se venden. Sean bienvenidas y bienvenidos. Vamos a necesitarnos.",
    imagen: null,
    grupo: "docentes",
    likes: 312,
    comentarios: [
      { autor: "sec.gremio.docente", texto: "Confirmo lo dicho por Laura. Agrego que el grupo no es un canal oficial del gremio: acá opino como compañera, no como secretaria. Cuando algo sea comunicado, lo voy a decir expresamente.", fecha: "2020-04-22T18:30:00-03:00" },
      { autor: "profe_hernandez_hist", texto: "Excelente iniciativa. Un espacio de pares es una necesidad, no un lujo.", fecha: "2020-04-22T20:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2589,
    autor: "sec.gremio.docente",
    fecha: "2022-03-15T09:00:00-03:00",
    texto: "COMUNICADO. Se convoca a asamblea de afiliados para el jueves 24 de marzo, 18:30, local del sindicato. Orden del dia: 1) informe salarial, 2) situacion edilicia de escuelas de la zona oeste, 3) varios. Se recuerda que la asamblea es soberana y que las decisiones se toman ahi, no en los grupos de mensajeria. Asistan.",
    imagen: null,
    grupo: "docentes",
    likes: 87,
    comentarios: [
      { autor: "laura.rambla", texto: "Voy. Y aprovecho para pedir que el punto 2 no quede último como la vez pasada, que se trato a las 21:30 con quince personas en la sala.", fecha: "2022-03-15T14:20:00-03:00",
        respuestas: [
          { autor: "sec.gremio.docente", texto: "Tomo el reclamo y lo llevo a la mesa. Tenes razon, paso eso y no estuvo bien.", fecha: "2022-03-15T15:00:00-03:00" }
        ]
      },
      { autor: "costa_dorada_vecina", texto: "Yo estoy jubilada pero sigo yendo. Los jubilados tambien somos parte y a veces se nos olvida.", fecha: "2022-03-15T16:40:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2590,
    autor: "profe_hernandez_hist",
    fecha: "2022-07-11T21:30:00-03:00",
    texto: "Comparto una experiencia de aula por si a alguien le sirve. Con tercero trabajamos un tema dificil a partir de una sola pregunta: como sabemos lo que sabemos. Les di cuatro versiones distintas del mismo hecho, sin decirles cual era cual, y les pedi que decidieran cual les parecia mas confiable y por que. La discusion duro dos clases. Lo mejor: dos alumnos cambiaron de opinion en voz alta. Eso, para mi, es la clase entera.",
    imagen: null,
    grupo: "docentes",
    likes: 198,
    comentarios: [
      { autor: "laura.rambla", texto: "Alvaro, me robo la actividad y la adapto a sexto de escuela. Con la debida cita, por supuesto.", fecha: "2022-07-11T22:00:00-03:00",
        respuestas: [
          { autor: "profe_hernandez_hist", texto: "Robela sin cita, Laura, que para eso la cuento. Si te sirve, la comparto en documento.", fecha: "2022-07-11T22:20:00-03:00" }
        ]
      },
      { autor: "estudiante_utec", texto: "Ojala hubiera tenido un profesor asi. Digo, sin ofender a los mios.", fecha: "2022-07-12T08:00:00-03:00" },
      { autor: "escepticouy", texto: "Desde la biblioteca aplaudo esto de pie. Cuatro versiones del mismo hecho es exactamente lo que le falta a media internet. La gente no necesita que le digan qué pensar, necesita que le enseñen a preguntar de dónde salió el dato.", fecha: "2022-07-12T10:00:00-03:00",
        respuestas: [
          { autor: "profe_hernandez_hist", texto: "Nicolás, vos y yo discutimos en La posta hasta las tres de la mañana, pero en esto estamos del mismo lado.", fecha: "2022-07-12T10:40:00-03:00" }
        ]
      },
      { autor: "sec.gremio.docente", texto: "Esto tendría que estar en la formación docente, no dependiendo de que un profesor lo invente solo. Lo llevo como propuesta a la mesa.", fecha: "2022-07-12T12:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2591,
    autor: "nurse_valentina",
    fecha: "2022-11-08T02:15:00-03:00",
    texto: "No soy docente pero me dejaron entrar porque doy charlas de primeros auxilios en escuelas y liceos. Aviso: tengo dos fechas libres en noviembre para ir gratis a donde haga falta. Llevo el material yo. Solo pido que sea de tarde o de noche porque de mañana estoy durmiendo despues del turno. Escriban por privado.",
    imagen: null,
    grupo: "docentes",
    likes: 154,
    comentarios: [
      { autor: "laura.rambla", texto: "Valentina sos un lujo. Te escribo mañana para coordinar en mi escuela.", fecha: "2022-11-08T07:30:00-03:00" },
      { autor: "costa_dorada_vecina", texto: "Deberian pagarle por eso, dicho sea de paso.", fecha: "2022-11-08T09:00:00-03:00",
        respuestas: [
          { autor: "nurse_valentina", texto: "Y si. Pero mientras tanto los gurises tienen que saber que hacer si alguien se atraganta, asi que voy igual.", fecha: "2022-11-08T14:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2592,
    autor: "laura.rambla",
    fecha: "2023-04-19T18:40:00-03:00",
    texto: "Hoy tuve que dar clase con un balde en el medio del salon. Llueve adentro, literalmente, desde hace tres inviernos. Presente la nota en abril del año pasado, la volvi a presentar en marzo de este. Tengo copia sellada de las dos. No lo cuento para quejarme: lo cuento porque quiero que quede escrito en algun lado con fecha.",
    imagen: null,
    grupo: "docentes",
    likes: 276,
    comentarios: [
      { autor: "sec.gremio.docente", texto: "Pasame los numeros de expediente por privado y lo llevo a la reunion del miercoles. Con expediente en la mano es otra cosa.", fecha: "2023-04-19T19:10:00-03:00",
        respuestas: [
          { autor: "laura.rambla", texto: "Te los mando ahora. Gracias.", fecha: "2023-04-19T19:25:00-03:00" }
        ]
      },
      { autor: "costa_dorada_vecina", texto: "Laura, escribi una carta al portal local. Yo lo hice por el liceo de acá y a los dos meses aparecieron los operarios. No es magia, es incomodidad publica.", fecha: "2023-04-19T20:00:00-03:00" },
      { autor: "profe_hernandez_hist", texto: "El balde en el medio del salon es la mejor sintesis de la epoca y ojala fuera una metafora.", fecha: "2023-04-19T21:30:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2593,
    autor: "libreria_elsurco",
    fecha: "2023-08-24T11:00:00-03:00",
    texto: "Aviso y aclaro que es promocion, para no violar ninguna regla: tenemos descuento de 25 por ciento para docentes durante todo setiembre, presentando constancia. Y aparte, sin descuento y sin condiciones: si un docente necesita un libro para trabajar en clase y no lo puede pagar, venga igual y lo arreglamos. Eso no es promocion, es como trabajamos.",
    imagen: null,
    grupo: "docentes",
    likes: 221,
    comentarios: [
      { autor: "sec.gremio.docente", texto: "Aclaro como administradora: la promocion esta permitida porque el comercio avisa que lo es, tal como pide la regla. Todo en orden.", fecha: "2023-08-24T12:00:00-03:00" },
      { autor: "profe_hernandez_hist", texto: "Yo les compro hace quince años y doy fe de la segunda parte del mensaje.", fecha: "2023-08-24T14:30:00-03:00" },
      { autor: "estudiante_utec", texto: "Vale para estudiantes de formacion tambien o solo docentes en ejercicio?", fecha: "2023-08-24T16:00:00-03:00",
        respuestas: [
          { autor: "libreria_elsurco", texto: "Vale para estudiantes tambien. Perdon la demora en contestar, siempre nos pasa.", fecha: "2023-08-26T10:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2594,
    autor: "estudiante_utec",
    fecha: "2024-03-06T22:10:00-03:00",
    texto: "Pregunta incomoda y perdon de antemano. Estoy haciendo practicas y veo que muchas de las cosas que nos enseñan en formacion no se usan en el aula real. No lo digo con soberbia, lo digo porque no se si el problema es la formacion, las condiciones, o que yo todavia no entiendo nada. Ustedes que llevan años, que opinan?",
    imagen: null,
    grupo: "docentes",
    likes: 143,
    comentarios: [
      { autor: "laura.rambla", texto: "No es incomoda, es la pregunta. Mi respuesta despues de 28 años: la formacion te da el mapa y el aula te da el terreno. El mapa no esta mal, pero el terreno tiene barro que el mapa no dibuja. Con 30 gurises y sin materiales, la mitad de lo que te enseñaron no entra. Eso no significa que este mal enseñado.", fecha: "2024-03-06T22:40:00-03:00",
        respuestas: [
          { autor: "estudiante_utec", texto: "Eso me deja mas tranquila y mas preocupada a la vez, que creo que es lo correcto.", fecha: "2024-03-06T23:00:00-03:00" }
        ]
      },
      { autor: "profe_hernandez_hist", texto: "Agrego algo: cuando yo empece pensaba que el problema era mi formacion. A los diez años pensaba que era el sistema. Ahora pienso que es las dos cosas y que igual hay que entrar al salon el lunes a las 8. Esa es la parte que no te enseñan.", fecha: "2024-03-07T08:00:00-03:00" },
      { autor: "escepticouy", texto: "Agustina, una recomendacion de bibliotecario: no leas solo lo que te dan. Buscá investigaciones sobre practica docente. Hay bastante y esta escrito por gente que estuvo en el aula.", fecha: "2024-03-07T10:20:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2595,
    autor: "costa_dorada_vecina",
    fecha: "2024-06-14T16:00:00-03:00",
    texto: "Estimados colegas: me jubile hace nueve años y sigo en este grupo porque no se hacer otra cosa. Escribi una carta al portal del zonal sobre el estado del comedor escolar de mi barrio. La adjunto abajo en texto. Si alguien la quiere usar como modelo, adelante, cambien nombres y datos. Aprendi que una carta bien escrita, con fechas y sin insultos, es dificil de ignorar.",
    imagen: null,
    grupo: "docentes",
    likes: 189,
    comentarios: [
      { autor: "laura.rambla", texto: "Beatriz, tu redaccion es una clase en si misma. Se la muestro a los practicantes.", fecha: "2024-06-14T17:00:00-03:00" },
      { autor: "sec.gremio.docente", texto: "La guardo como modelo para el gremio. En serio, sirve.", fecha: "2024-06-14T18:30:00-03:00",
        respuestas: [
          { autor: "costa_dorada_vecina", texto: "Usenla. Para eso la escribi. A los 66 años lo unico que me queda es la sintaxis.", fecha: "2024-06-14T19:00:00-03:00" },
          { autor: "profe_hernandez_hist", texto: "La sintaxis y el filo, Beatriz. No se venda barato.", fecha: "2024-06-14T20:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2596,
    autor: "sec.gremio.docente",
    fecha: "2024-09-05T08:30:00-03:00",
    texto: "COMUNICADO. Aviso a las compañeras y compañeros que se estan difundiendo por mensajeria audios atribuidos al gremio que NO son del gremio. No los reenvien. Todo lo que sea oficial sale con membrete y firma, y lo publico aca yo misma. Si tienen duda, pregunten antes de compartir. Reenviar algo falso nos debilita a todos.",
    imagen: null,
    grupo: "docentes",
    likes: 167,
    comentarios: [
      { autor: "escepticouy", texto: "A mi me llego uno de esos. La pista era que no decia ninguna fecha ni ningun numero concreto, solo indignacion. Ese es el patron.", fecha: "2024-09-05T09:15:00-03:00",
        respuestas: [
          { autor: "sec.gremio.docente", texto: "Exacto Nicolas. Un comunicado real siempre tiene fecha, lugar y responsable. Si no los tiene, desconfien.", fecha: "2024-09-05T09:40:00-03:00" }
        ]
      },
      { autor: "laura.rambla", texto: "Lo comparti en la sala de maestras impreso, porque hay compañeras que no estan en la plataforma.", fecha: "2024-09-05T13:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2597,
    autor: "laura.rambla",
    fecha: "2024-12-20T19:00:00-03:00",
    texto: "Ultimo dia de clases. 28 años y todavia lloro el ultimo dia. Se van los de sexto, que los tengo desde cuarto. Uno me trajo una carta escrita a mano, con faltas y con el corazon entero. Dice que gracias por no rendirse con el. Guarden las cartas, colegas. En febrero, cuando todo parece imposible, esas cartas son lo unico que funciona.",
    imagen: null,
    grupo: "docentes",
    likes: 398,
    comentarios: [
      { autor: "nurse_valentina", texto: "Me hiciste llorar en el pasillo del hospital a las 7 de la tarde. Gracias, supongo.", fecha: "2024-12-20T19:30:00-03:00" },
      { autor: "costa_dorada_vecina", texto: "Yo tengo una caja de zapatos entera. La abro una vez por año y me hace bien y mal en la misma proporcion.", fecha: "2024-12-20T20:00:00-03:00" },
      { autor: "profe_hernandez_hist", texto: "Las faltas de ortografia en esa carta valen mas que cualquier evaluacion estandarizada. Y lo digo yo, que corrijo todo.", fecha: "2024-12-20T21:00:00-03:00",
        respuestas: [
          { autor: "laura.rambla", texto: "Alvaro, viniendo de vos eso es casi una declaracion de amor a la docencia.", fecha: "2024-12-20T21:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2598,
    autor: "escepticouy",
    fecha: "2025-04-02T15:30:00-03:00",
    texto: "Circula en varios grupos de docentes un metodo que promete mejorar la lectura en seis semanas usando unos ejercicios oculares. Antes de que alguien lo compre: pedi la fuente al que lo difunde y me mando un video. Un video no es una fuente. Busque estudios y lo que encontre apunta a que no hay evidencia de que esos ejercicios mejoren la comprension lectora. Si alguien tiene algo mejor que un video, lo leo con gusto. Y si el metodo lo venden, mas motivo para desconfiar.",
    imagen: null,
    grupo: "docentes",
    likes: 176,
    comentarios: [
      { autor: "profe_hernandez_hist", texto: "Nicolas tiene razon y agrego el criterio historico: cada quince años aparece un metodo milagroso para la lectura. Ninguno sobrevivio. La lectura mejora leyendo, que es la respuesta aburrida y la unica que funciona.", fecha: "2025-04-02T16:20:00-03:00" },
      { autor: "estudiante_utec", texto: "A mi me lo presentaron en un curso pago. Ahora entiendo por que me sonaba raro que no citaran nada.", fecha: "2025-04-02T17:00:00-03:00",
        respuestas: [
          { autor: "escepticouy", texto: "Pediles la bibliografia. Si te la dan, la leemos juntos. Si te la esquivan, ya tenes la respuesta.", fecha: "2025-04-02T17:30:00-03:00" },
          { autor: "estudiante_utec", texto: "Se la pedi. Me contestaron que la bibliografia esta en el modulo 4, que se paga aparte. Sin palabras.", fecha: "2025-04-03T09:00:00-03:00" }
        ]
      },
      { autor: "laura.rambla", texto: "Gracias por tomarte el trabajo, Nicolas. En este grupo hace falta alguien que pida fuentes.", fecha: "2025-04-02T19:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2599,
    autor: "sec.gremio.docente",
    fecha: "2025-08-11T08:00:00-03:00",
    texto: "COMUNICADO. Convocatoria a paro parcial con concentracion el jueves 21 de agosto, 10:00. Reclamos: presupuesto para infraestructura, cobertura de suplencias y partida de materiales. Se adjunta el pliego completo. Aclaro dos cosas que siempre se preguntan: 1) el paro es parcial, de 10 a 14; 2) la asistencia se descuenta, si, y esa es la parte que nadie quiere decir. Cada uno decide con la informacion completa.",
    imagen: null,
    grupo: "docentes",
    likes: 134,
    comentarios: [
      { autor: "costa_dorada_vecina", texto: "Gracias por decir lo del descuento. La honestidad convoca mas que el entusiasmo.", fecha: "2025-08-11T09:00:00-03:00" },
      { autor: "estudiante_utec", texto: "Los practicantes podemos ir? No queremos molestar ni figurar donde no corresponde.", fecha: "2025-08-11T10:30:00-03:00",
        respuestas: [
          { autor: "sec.gremio.docente", texto: "Pueden ir y son bienvenidos. No firman nada ni se les descuenta nada porque no cobran nada, tristemente.", fecha: "2025-08-11T11:00:00-03:00" },
          { autor: "estudiante_utec", texto: "Jaja tocada y hundida. Vamos con tres compañeras.", fecha: "2025-08-11T11:20:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2600,
    autor: "laura.rambla",
    fecha: "2026-03-04T18:20:00-03:00",
    texto: "Arranca el año. 31 alumnos en quinto, dos con acompañamiento, uno que no habla desde marzo del año pasado y llega hoy conmigo. Tengo la planificacion hecha desde enero y ya se que la voy a tirar a la basura en abril, como todos los años. Igual la hago. Hacerla es la forma de pensar el año, aunque despues la realidad te la corrija entera.",
    imagen: null,
    grupo: "docentes",
    likes: 245,
    comentarios: [
      { autor: "profe_hernandez_hist", texto: "La planificacion es como el mapa antes del viaje: no te dice donde vas a terminar, te obliga a mirar el territorio antes de salir.", fecha: "2026-03-04T19:00:00-03:00" },
      { autor: "nurse_valentina", texto: "31 alumnos. Nosotros tenemos protocolos por cantidad de pacientes por enfermera y ustedes no tienen nada. Es de locos.", fecha: "2026-03-04T21:40:00-03:00",
        respuestas: [
          { autor: "laura.rambla", texto: "Tenemos, en el papel. Despues llega marzo y llegan 31.", fecha: "2026-03-04T22:00:00-03:00" }
        ]
      },
      { autor: "sec.gremio.docente", texto: "Laura pasame el numero exacto y la escuela por privado, estamos armando el relevamiento de grupos superpoblados.", fecha: "2026-03-05T08:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2601,
    autor: "laura.rambla",
    fecha: "2026-03-27T19:30:00-03:00",
    texto: "Les cuento del alumno que no habla, con las iniciales nada mas, como corresponde. J. llego en marzo del año pasado. No habla en clase. No habla en el recreo. Habla en la casa, segun la madre. La psicologa dice mutismo selectivo. Yo de eso no se, pero se que si le pido que lea en voz alta se le llenan los ojos de lagrimas y no lo voy a hacer nunca. Alguien paso por algo asi? Acepto cualquier cosa que me sirva.",
    imagen: null,
    grupo: "docentes",
    likes: 208,
    comentarios: [
      { autor: "nurse_valentina", texto: "Laura, hablalo con la psicologa y armen algo juntas. No lo cargues sola, en serio. Y lo primero que hiciste, que es no exponerlo, ya es media solucion.", fecha: "2026-03-27T20:15:00-03:00" },
      { autor: "profe_hernandez_hist", texto: "Tuve una alumna asi en el liceo, hace unos doce años. Lo que funciono fue darle canales que no fueran la voz: escribir, dibujar, elegir, señalar. En segundo año empezo a hablar sola, sin que nadie se lo pidiera. Paciencia y cero presion.", fecha: "2026-03-27T21:00:00-03:00",
        respuestas: [
          { autor: "laura.rambla", texto: "Gracias Alvaro. Voy por ahi. Le doy la tarea de repartir las carpetas, que exige que se mueva pero no que hable.", fecha: "2026-03-27T21:30:00-03:00" }
        ]
      },
      { autor: "costa_dorada_vecina", texto: "Y avisale a la maestra del año que viene con tiempo. Lo peor que le puede pasar a J. es empezar de cero cada marzo.", fecha: "2026-03-27T22:00:00-03:00"
      }
    ],
    encuesta: null
  },
  {
    id: 2602,
    autor: "profe_hernandez_hist",
    fecha: "2026-04-08T20:00:00-03:00",
    texto: "Larga, avisados quedan. Estoy trabajando con quinto el tema de las fuentes historicas y aparecio en clase algo que circula en otros grupos de esta misma plataforma: la idea de que ciertos documentos estan escondidos. Les propuse un ejercicio: buscar el documento original de una cosa concreta y ver cuanto tardaban. Tardaron 20 minutos en encontrarlo publicado. La conclusion la sacaron ellos: no estaba escondido, estaba aburrido. Nadie lo lee porque leerlo cuesta.",
    imagen: null,
    grupo: "docentes",
    likes: 231,
    comentarios: [
      { autor: "escepticouy", texto: "No estaba escondido, estaba aburrido. Me lo llevo para la biblioteca y lo pongo en un cartel.", fecha: "2026-04-08T20:40:00-03:00" },
      { autor: "laura.rambla", texto: "Alvaro esto es oro. Se puede adaptar a sexto con documentos mas cortos.", fecha: "2026-04-08T21:15:00-03:00",
        respuestas: [
          { autor: "profe_hernandez_hist", texto: "Se puede y te ayudo a armarlo. Elegi tres documentos cortos y nos juntamos un viernes.", fecha: "2026-04-08T21:40:00-03:00" }
        ]
      },
      { autor: "estudiante_utec", texto: "Puedo ir a observar esa clase si la repiten? Prometo sentarme atras y no molestar.", fecha: "2026-04-08T22:00:00-03:00",
        respuestas: [
          { autor: "profe_hernandez_hist", texto: "Puede venir y no se siente atras. Sientese adelante y participe, que los gurises aprenden mas viendo a alguien joven discutir en serio.", fecha: "2026-04-09T07:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2603,
    autor: "sec.gremio.docente",
    fecha: "2026-04-21T09:00:00-03:00",
    texto: "Encuesta interna del grupo, no del gremio. Es anonima y me sirve para tener numeros reales cuando voy a reunion. Contesten con lo que gastan de verdad, no con lo que les gustaria gastar.",
    imagen: null,
    grupo: "docentes",
    likes: 118,
    comentarios: [
      { autor: "laura.rambla", texto: "Vote la franja mas alta y me da bronca escribirlo. Fotocopias, cartulinas, marcadores, y este año compre dos resmas.", fecha: "2026-04-21T10:00:00-03:00" },
      { autor: "costa_dorada_vecina", texto: "Cuando yo trabajaba tambien ponia de mi bolsillo. Que treinta años despues siga igual es lo que me indigna.", fecha: "2026-04-21T11:30:00-03:00",
        respuestas: [
          { autor: "sec.gremio.docente", texto: "Exactamente por eso hago la encuesta, Beatriz. Necesito poder decir un numero, no una sensacion.", fecha: "2026-04-21T12:00:00-03:00" }
        ]
      }
    ],
    encuesta: {
      pregunta: "Cuanto gastas de tu bolsillo por mes en materiales para tus clases?",
      opciones: [
        { texto: "Nada, la escuela me da todo", votos: 19 },
        { texto: "Menos de 1000 pesos", votos: 143 },
        { texto: "Entre 1000 y 3000 pesos", votos: 411 },
        { texto: "Mas de 3000 pesos", votos: 267 }
      ],
      cierra: "2026-05-15T23:59:00-03:00"
    }
  },
  {
    id: 2604,
    autor: "colonia_guia_turismo",
    fecha: "2026-05-06T13:00:00-03:00",
    texto: "Ofrezco algo por si sirve. Doy visitas guiadas en Colonia y puedo recibir grupos escolares sin cobrar, dos veces al mes, si vienen de escuela publica. Armo un recorrido de una hora y media adaptado a la edad. Ya lo hice con dos grupos el año pasado y salio lindo. La unica condicion es coordinar con tiempo porque en temporada no doy abasto.",
    imagen: null,
    grupo: "docentes",
    likes: 187,
    comentarios: [
      { autor: "profe_hernandez_hist", texto: "Mariana, la tomo. Con cuarto de liceo, para setiembre. Te escribo esta semana.", fecha: "2026-05-06T14:00:00-03:00" },
      { autor: "laura.rambla", texto: "Yo tengo el problema del transporte, que es lo que siempre nos frena. Pero anoto igual.", fecha: "2026-05-06T15:30:00-03:00",
        respuestas: [
          { autor: "colonia_guia_turismo", texto: "El transporte es SIEMPRE el problema. Si consiguen omnibus, el resto lo pongo yo.", fecha: "2026-05-06T16:00:00-03:00" },
          { autor: "sec.gremio.docente", texto: "Hay una partida para salidas didacticas que casi nadie pide porque el formulario es horrible. Yo les explico como se llena, es mas facil de lo que parece.", fecha: "2026-05-06T17:00:00-03:00" },
          { autor: "laura.rambla", texto: "Gabriela, hace una publicacion con eso. En serio. Debe haber cientos de compañeras que no lo saben.", fecha: "2026-05-06T17:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2605,
    autor: "sec.gremio.docente",
    fecha: "2026-05-08T08:30:00-03:00",
    texto: "Como me pidio Laura: paso a paso para pedir la partida de salidas didacticas. 1) Nota de la direccion con destino, fecha y cantidad de alumnos. 2) Presupuesto de transporte, uno solo alcanza. 3) Autorizaciones de las familias, modelo simple. 4) Se presenta con 30 dias de anticipacion, no 15 como dice el instructivo viejo. El error mas comun es presentar tarde y el segundo es olvidarse la firma de direccion en la hoja 2. Guarden esto.",
    imagen: null,
    grupo: "docentes",
    likes: 264,
    comentarios: [
      { autor: "laura.rambla", texto: "Gracias. Lo imprimo y lo pego en la sala.", fecha: "2026-05-08T09:00:00-03:00" },
      { autor: "estudiante_utec", texto: "Esto no me lo enseño nadie en formacion y es lo que mas me va a servir el primer año. Increible.", fecha: "2026-05-08T10:30:00-03:00" },
      { autor: "costa_dorada_vecina", texto: "En mis tiempos el instructivo decia 45 dias. Todo cambia y nadie avisa.", fecha: "2026-05-08T11:00:00-03:00",
        respuestas: [
          { autor: "sec.gremio.docente", texto: "Por eso lo publico. La mitad de los derechos se pierden por desconocer el tramite.", fecha: "2026-05-08T11:40:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2606,
    autor: "laura.rambla",
    fecha: "2026-05-19T18:00:00-03:00",
    texto: "Novedad de J. Hoy reparti la tarea de leer en voz alta por turnos y, como siempre, a el lo salteo sin que se note. Cuando termino la ronda levanto la mano. Levanto la mano. Leyo cuatro renglones, bajito, con la voz temblando, y despues siguio como si nada. No dije nada, no aplaudi, no lo mire fijo. Segui la clase. Pero les juro que tuve que darme vuelta a escribir en el pizarron porque se me caian las lagrimas.",
    imagen: null,
    grupo: "docentes",
    likes: 512,
    comentarios: [
      { autor: "profe_hernandez_hist", texto: "Y no aplaudir fue lo mas dificil y lo mas correcto. Aplaudir hubiera sido decirle esto es un evento. Vos le dijiste esto es normal. Impecable, Laura.", fecha: "2026-05-19T18:40:00-03:00",
        respuestas: [
          { autor: "laura.rambla", texto: "Fue instinto, no calculo. Pero si, exactamente eso pense despues.", fecha: "2026-05-19T19:00:00-03:00" }
        ]
      },
      { autor: "nurse_valentina", texto: "Estoy en el turno noche llorando entre dos camas. Gracias por contarlo.", fecha: "2026-05-19T23:30:00-03:00" },
      { autor: "costa_dorada_vecina", texto: "Cuarenta años de aula y todavia me emociona leer esto. Es lo unico que compensa todo lo demas.", fecha: "2026-05-20T08:00:00-03:00" },
      { autor: "estudiante_utec", texto: "Guardo este post. El dia que quiera largar todo lo voy a releer.", fecha: "2026-05-20T09:15:00-03:00",
        respuestas: [
          { autor: "laura.rambla", texto: "Ese dia va a llegar, Agustina, y va a llegar mas de una vez. Releelo y despues entra al salon igual.", fecha: "2026-05-20T10:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2607,
    autor: "nurse_valentina",
    fecha: "2026-06-02T03:40:00-03:00",
    texto: "Turno noche, tres y media. Vino una madre con un gurí de 9 años con fiebre alta y me dijo que no lo habia llevado antes porque no queria que faltara a la escuela. No la reté. Le dije que la escuela lo entiende y que la salud primero. Pero me quede pensando en la presion que sienten algunas familias. Ustedes lo ven del otro lado, cuentenme como lo manejan.",
    imagen: null,
    grupo: "docentes",
    likes: 176,
    comentarios: [
      { autor: "laura.rambla", texto: "Lo vemos todo el tiempo. Yo se los digo en la primera reunion: si esta enfermo no me lo manden, la falta la justificamos y punto. Igual algunas familias sienten que faltar es fallar.", fecha: "2026-06-02T07:30:00-03:00" },
      { autor: "sec.gremio.docente", texto: "Y hay un tema real: en algunas casas la escuela es donde el gurí come. Eso tambien pesa en la decision de mandarlo enfermo.", fecha: "2026-06-02T08:00:00-03:00",
        respuestas: [
          { autor: "nurse_valentina", texto: "Uf. No lo habia pensado por ese lado y ahora me cierra todo.", fecha: "2026-06-02T14:00:00-03:00" },
          { autor: "laura.rambla", texto: "Es asi, Valentina. Y es de las cosas mas duras de este laburo.", fecha: "2026-06-02T17:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2608,
    autor: "escepticouy",
    fecha: "2026-06-15T12:00:00-03:00",
    texto: "Ofrezco desde la biblioteca: armo listas de lectura por tema y por edad, gratis, para quien las pida. Lo hago igual todos los dias, asi que no me cuesta nada. Solo diganme tema, edad y si prefieren ficcion o no. Y una peticion personal: si arman una lista, incluyan al menos un libro que contradiga a los otros. Los gurises tienen que ver que los libros discuten entre si.",
    imagen: null,
    grupo: "docentes",
    likes: 203,
    comentarios: [
      { autor: "profe_hernandez_hist", texto: "Los libros discuten entre si. Esa es la mejor definicion de biblioteca que escuche.", fecha: "2026-06-15T13:00:00-03:00" },
      { autor: "libreria_elsurco", texto: "Si alguno de esos libros no esta en biblioteca, avisennos que lo conseguimos. Y si es para escuela, ya saben.", fecha: "2026-06-15T16:30:00-03:00" },
      { autor: "colonia_guia_turismo", texto: "Te pido una de historia local para 10 y 11 años. Tema: como se cuenta una ciudad.", fecha: "2026-06-15T18:00:00-03:00",
        respuestas: [
          { autor: "escepticouy", texto: "Anotado. Te la mando el viernes con cinco titulos y dos que se contradicen entre si, como corresponde.", fecha: "2026-06-15T18:40:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2609,
    autor: "sec.gremio.docente",
    fecha: "2026-06-25T09:30:00-03:00",
    texto: "Aviso de moderacion. Bajamos dos publicaciones donde se ofrecian planificaciones anuales a la venta, una a 4500 pesos. Regla 3: aca se comparte, no se vende. Y digo algo mas duro: vender una planificacion a una compañera que gana lo que ganamos nosotras me parece feo. Si alguien tiene material y quiere compartirlo, hay una carpeta comun. Si alguien necesita material y no se anima a pedir, escribame por privado.",
    imagen: null,
    grupo: "docentes",
    likes: 289,
    comentarios: [
      { autor: "laura.rambla", texto: "Firmo cada palabra. Yo tengo 28 años de planificaciones y estan todas en la carpeta comun desde el dia uno.", fecha: "2026-06-25T10:00:00-03:00" },
      { autor: "estudiante_utec", texto: "Pregunta honesta: no es entendible que alguien cobre por un trabajo que le llevo horas?", fecha: "2026-06-25T11:00:00-03:00",
        respuestas: [
          { autor: "sec.gremio.docente", texto: "Es una pregunta legitima y no te la voy a esquivar. Mi respuesta: si alguien vende su trabajo afuera, alla el. Pero adentro de un grupo de compañeras, donde entraste por ser docente, no. Es el acuerdo que hicimos al crear el grupo.", fecha: "2026-06-25T11:30:00-03:00" },
          { autor: "profe_hernandez_hist", texto: "Agrego: la planificacion ajena sirve poco. La tenes que pensar para tu grupo. Lo que se comparte es el punto de partida, no el producto.", fecha: "2026-06-25T12:00:00-03:00" },
          { autor: "estudiante_utec", texto: "Entendido. Me convence mas el argumento de Alvaro que el de la regla, pero los dos son razonables.", fecha: "2026-06-25T12:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2610,
    autor: "laura.rambla",
    fecha: "2026-07-03T18:45:00-03:00",
    texto: "El techo. Cuarto invierno. Hoy llovio fuerte y tuve que mover el grupo entero al salon de al lado, que ya tiene 29 alumnos propios. Sesenta gurises en un salon. Presente la cuarta nota. Tengo las cuatro con sello. La numero uno es de abril de 2022. Lo dejo escrito de nuevo, con fecha de hoy.",
    imagen: null,
    grupo: "docentes",
    likes: 341,
    comentarios: [
      { autor: "sec.gremio.docente", texto: "Con cuatro notas selladas y cuatro años esto va a instancia formal. Te acompaño yo. Escribime hoy.", fecha: "2026-07-03T19:00:00-03:00",
        respuestas: [
          { autor: "laura.rambla", texto: "Gracias. Ya te mande todo escaneado.", fecha: "2026-07-03T19:20:00-03:00" }
        ]
      },
      { autor: "costa_dorada_vecina", texto: "Laura, con tu permiso escribo una carta al portal. Sin nombre de escuela si preferis, pero con las cuatro fechas. Las fechas son lo que duele.", fecha: "2026-07-03T20:00:00-03:00",
        respuestas: [
          { autor: "laura.rambla", texto: "Escribila. Y poné el nombre de la escuela. Ya no me importa.", fecha: "2026-07-03T20:30:00-03:00" },
          { autor: "sec.gremio.docente", texto: "Laura, hablalo conmigo antes de que salga con nombre, no por miedo sino por estrategia. Hay un orden que conviene respetar.", fecha: "2026-07-03T21:00:00-03:00" }
        ]
      },
      { autor: "nurse_valentina", texto: "Sesenta gurises en un salon en invierno es un problema sanitario, no solo edilicio. Que quede dicho por alguien de salud.", fecha: "2026-07-03T22:30:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2611,
    autor: "profe_hernandez_hist",
    fecha: "2026-07-14T21:00:00-03:00",
    texto: "Vacaciones de julio. Aprovecho para decir algo que no digo nunca. Tengo 57 años, 33 de aula, y este año por primera vez pense en irme. No por los gurises: por el cansancio administrativo, por las planillas, por explicar cinco veces lo mismo a cinco oficinas distintas. Lo escribo aca porque este es el unico lugar donde no me lo van a tomar como una queja de vago. Y porque en marzo voy a entrar al salon igual.",
    imagen: null,
    grupo: "docentes",
    likes: 297,
    comentarios: [
      { autor: "laura.rambla", texto: "Alvaro, a todos nos pasa y casi nadie lo dice. Gracias por decirlo.", fecha: "2026-07-14T21:30:00-03:00" },
      { autor: "costa_dorada_vecina", texto: "Yo me fui a los 62 y me arrepenti un año y despues no. Lo que quiero decirte es que sea cual sea la decision, va a estar bien.", fecha: "2026-07-14T22:00:00-03:00" },
      { autor: "escepticouy", texto: "Lo administrativo es lo que mas quema en todos los oficios publicos. En la biblioteca igual. Es una forma de desgaste que nadie mide porque no se ve.", fecha: "2026-07-15T09:00:00-03:00",
        respuestas: [
          { autor: "profe_hernandez_hist", texto: "Exacto Nicolas. Nadie renuncia por un alumno dificil. Se renuncia por la planilla numero doce.", fecha: "2026-07-15T10:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2612,
    autor: "estudiante_utec",
    fecha: "2026-07-22T16:30:00-03:00",
    texto: "Termine las practicas. Balance honesto: me equivoque muchisimo, llore dos veces en el baño, y el ultimo dia un gurí de segundo me dijo profe cuando volves. Ahi entendi todo lo que ustedes me venian diciendo hace dos años y que yo escuchaba sin entender. Gracias por contestarme siempre, incluso cuando pregunte cosas incomodas. Sobre todo cuando pregunte cosas incomodas.",
    imagen: null,
    grupo: "docentes",
    likes: 276,
    comentarios: [
      { autor: "laura.rambla", texto: "Bienvenida al oficio, Agustina. Segui preguntando cosas incomodas, es lo mejor que traes.", fecha: "2026-07-22T17:00:00-03:00" },
      { autor: "profe_hernandez_hist", texto: "Lo del baño nos paso a todos y no se lo contamos a nadie hasta veinte años despues. Usted lo dice a los 21. Va a estar bien.", fecha: "2026-07-22T18:00:00-03:00",
        respuestas: [
          { autor: "estudiante_utec", texto: "Alvaro, algun dia me vas a tutear.", fecha: "2026-07-22T18:30:00-03:00" },
          { autor: "profe_hernandez_hist", texto: "Cuando tenga el titulo en la mano, Agustina. Ese dia si.", fecha: "2026-07-22T19:00:00-03:00" }
        ]
      },
      { autor: "sec.gremio.docente", texto: "Y afiliate, que ahora te toca.", fecha: "2026-07-22T20:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2613,
    autor: "costa_dorada_vecina",
    fecha: "2026-07-28T11:00:00-03:00",
    texto: "Salio la carta sobre el techo, con las cuatro fechas y sin nombre de escuela, como acordamos con Laura y Gabriela. La escribi tres veces hasta sacarle todo el enojo, porque el enojo se lee y le da al lector una excusa para no leer. Quedo seca, con datos, y termina con una sola pregunta. Las cartas que preguntan son mas dificiles de tirar a la basura que las que gritan.",
    imagen: null,
    grupo: "docentes",
    likes: 234,
    comentarios: [
      { autor: "laura.rambla", texto: "La lei tres veces. Es exactamente lo que habia que escribir. Gracias Beatriz.", fecha: "2026-07-28T12:00:00-03:00" },
      { autor: "profe_hernandez_hist", texto: "El enojo se lee y le da al lector una excusa para no leer. Anoto la frase para usarla con mis alumnos cuando escriban argumentacion.", fecha: "2026-07-28T13:00:00-03:00" },
      { autor: "sec.gremio.docente", texto: "Y ademas salio el mismo dia que entro el expediente formal. Eso no es casualidad, es coordinacion. Bien hecho.", fecha: "2026-07-28T14:30:00-03:00",
        respuestas: [
          { autor: "costa_dorada_vecina", texto: "A los 66 una ya no improvisa, querida.", fecha: "2026-07-28T15:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2614,
    autor: "libreria_elsurco",
    fecha: "2026-07-31T10:30:00-03:00",
    texto: "Aviso, y es promocion, lo declaro como siempre: el sabado 8 de agosto hacemos una jornada de intercambio de libros escolares usados en la vereda del local, de 10 a 14. Traes uno, te llevas uno. No cobramos nada, no vendemos nada ese dia. Si sobran libros los donamos a la biblioteca de la escuela que nos avise primero.",
    imagen: null,
    grupo: "docentes",
    likes: 198,
    comentarios: [
      { autor: "escepticouy", texto: "Voy y llevo cajas de descarte de la biblioteca, que son libros buenos que no tienen lugar en el estante.", fecha: "2026-07-31T11:00:00-03:00" },
      { autor: "laura.rambla", texto: "Aviso a las familias de mi escuela. Muchos tienen libros de hermanos mayores guardados.", fecha: "2026-07-31T13:00:00-03:00" },
      { autor: "colonia_guia_turismo", texto: "Que lindo. Ojala hubiera algo asi en Colonia.", fecha: "2026-07-31T15:00:00-03:00",
        respuestas: [
          { autor: "libreria_elsurco", texto: "Armalo vos, Mariana. Necesitas una vereda, dos mesas y avisar con dos semanas. Te contamos como lo hacemos si queres.", fecha: "2026-08-02T09:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2615,
    autor: "sec.gremio.docente",
    fecha: "2026-08-03T08:00:00-03:00",
    texto: "COMUNICADO. Se informa que el expediente por la situacion edilicia de la escuela del Buceo tuvo movimiento: hay inspeccion tecnica fijada para el 12 de agosto. No es una solucion, es un paso. Lo comunico porque muchas compañeras preguntaron. Recordatorio: si en tu escuela hay una situacion parecida, junta las notas selladas. Sin papel no hay expediente y sin expediente no hay nada.",
    imagen: null,
    grupo: "docentes",
    likes: 256,
    comentarios: [
      { autor: "laura.rambla", texto: "Cuatro años y tres meses. Pero hay fecha. Gracias Gabriela, y gracias a todas las que empujaron.", fecha: "2026-08-03T08:30:00-03:00",
        respuestas: [
          { autor: "costa_dorada_vecina", texto: "Ahi lo tenes: la carta, el expediente y la insistencia. Ninguna de las tres sola alcanza.", fecha: "2026-08-03T09:00:00-03:00" },
          { autor: "laura.rambla", texto: "Aprendi mas de gestion en este grupo que en toda mi carrera, Beatriz.", fecha: "2026-08-03T09:30:00-03:00" }
        ]
      },
      { autor: "nurse_valentina", texto: "Que buena noticia para empezar la semana.", fecha: "2026-08-03T10:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2616,
    autor: "laura.rambla",
    fecha: "2026-08-04T18:30:00-03:00",
    texto: "Cierro la semana con algo chiquito. Hoy J. se ofrecio para leer sin que nadie se lo pidiera. Segundo de la fila, voz baja, sin temblor. Y cuando termino, un compañero le dijo bien ahi y siguieron. Nadie hizo un evento de eso. Ya es normal. Colegas: la mayoria de las cosas importantes que hacemos no se ven, no se miden y no salen en ningun informe. Buen fin de semana.",
    imagen: null,
    grupo: "docentes",
    likes: 447,
    comentarios: [
      { autor: "profe_hernandez_hist", texto: "Ya es normal. Esa es la victoria completa, Laura. Felicitaciones de verdad.", fecha: "2026-08-04T19:00:00-03:00" },
      { autor: "estudiante_utec", texto: "Segui contando estas cosas. En serio. Son las que nos sostienen a los que recien empezamos.", fecha: "2026-08-04T19:30:00-03:00" },
      { autor: "costa_dorada_vecina", texto: "Lo que no se mide es casi todo lo que importa. Buen fin de semana, querida.", fecha: "2026-08-04T20:00:00-03:00" },
      { autor: "nurse_valentina", texto: "Entro al turno con esto leido. Gracias.", fecha: "2026-08-04T21:45:00-03:00",
        respuestas: [
          { autor: "laura.rambla", texto: "Cuidate Valentina. Y gracias por las charlas de primeros auxilios, que nunca te lo dije bien.", fecha: "2026-08-04T22:10:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2617,
    autor: "sofi.tortasfritas",
    fecha: "2020-07-09T16:00:00-03:00",
    texto: "FIJADO. Bienvenidos a Cocina uruguaya de verdad. Reglas simples: receta con cantidades, foto con luz de dia, y si copiaste la receta decilo. Se puede discutir todo. De hecho vamos a discutir bastante, ya lo se. Lo unico que no se toca es la abuela de nadie. Arranquen.",
    imagen: null,
    grupo: "cocina",
    likes: 421,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Querida Sofia: acepto la invitacion a administrar con mucho gusto. Vengo con 63 años y un cuaderno de mi madre que tiene manchas de grasa de 1958. Espero poder aportar algo. Un abrazo grande.", fecha: "2020-07-09T18:30:00-03:00" },
      { autor: "panaderia_dosorillas", texto: "Nos sumamos. Publicamos horarios y de vez en cuando alguna receta de bizcocheria si nos dejan", fecha: "2020-07-10T09:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2618,
    autor: "chef_carmelo",
    fecha: "2022-05-18T21:00:00-03:00",
    texto: "Voy a decir algo impopular. El chivito, tal como se sirve hoy, es un exceso sin criterio. Cuatro proteinas apiladas, salsa golf industrial y una hoja de lechuga de coartada. Yo lo hago con lomo madurado siete dias, panceta ahumada en casa, un huevo de campo y mayonesa hecha con aceite de oliva del departamento. Sin jamon. El jamon sobra y no me van a convencer.",
    imagen: null,
    grupo: "cocina",
    likes: 156,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Estimado Ignacio: leo su mensaje con atencion y le respondo con cariño. El chivito no nacio como plato de autor, nacio como algo para llenar la panza de alguien que tenia hambre a las once de la noche. Sacarle el jamon esta en su derecho. Llamarlo chivito despues, ya no tanto. Un saludo cordial.", fecha: "2022-05-18T22:15:00-03:00",
        respuestas: [
          { autor: "chef_carmelo", texto: "Zunilda, la respeto muchisimo, pero la tradicion tambien evoluciona. Nadie cocina hoy como en 1960.", fecha: "2022-05-18T22:40:00-03:00" },
          { autor: "pastelera.zuni", texto: "Yo si, querido. Yo cocino exactamente como en 1960 y la gente hace cola. Pienselo.", fecha: "2022-05-18T23:00:00-03:00" },
          { autor: "sofi.tortasfritas", texto: "Muchachos me estan haciendo el grupo en la primera semana jajaja. Sigan, sigan.", fecha: "2022-05-19T08:00:00-03:00" }
        ]
      },
      { autor: "panaderia_dosorillas", texto: "Nosotros el pan lo hacemos igual desde el 78 y no nos vamos a mover de ahi.", fecha: "2022-05-19T10:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2619,
    autor: "sofi.tortasfritas",
    fecha: "2023-06-24T15:30:00-03:00",
    texto: "Llueve. Ya saben lo que hay que hacer. Anoten:\n500 g de harina comun\n1 cucharadita de sal\n1 cucharadita de polvo de hornear (mi abuela no le ponia, yo si)\n250 ml de agua tibia\n60 g de grasa vacuna derretida y tibia\nMezclá la harina con la sal, hacé un hueco, echá el agua y la grasa. Amasá 5 minutos, no mas. Deja descansar 20 minutos tapada con un repasador. Estirá a medio centimetro, cortá, hacé el agujerito en el medio y frití en grasa a 175 grados. Escurrí sobre papel. Azucar arriba solo si sos de los que le ponen azucar, que ese es otro debate.",
    imagen: null,
    grupo: "cocina",
    likes: 892,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Querida Sofia: la receta es correcta y me alegra ver la grasa vacuna en el lugar que corresponde. Solo una observacion: el agujerito no es adorno, es para que se cocine parejo el centro. Que la gente sepa por que hace las cosas.", fecha: "2023-06-24T16:00:00-03:00",
        respuestas: [
          { autor: "sofi.tortasfritas", texto: "Zuni tenes toda la razon y me olvide de explicarlo. Lo agrego en el video. Gracias!", fecha: "2023-06-24T16:20:00-03:00" }
        ]
      },
      { autor: "chef_carmelo", texto: "Con aceite de girasol de alto oleico quedan mas livianas y sin gusto residual. Lo dejo picando.", fecha: "2023-06-24T17:00:00-03:00",
        respuestas: [
          { autor: "pastelera.zuni", texto: "Quedan mas livianas y sin gusto a nada, que es lo que usted llama residual y yo llamo torta frita.", fecha: "2023-06-24T17:30:00-03:00" },
          { autor: "chef_carmelo", texto: "Zunilda, un dia de estos me voy a Piedras Blancas a que me haga unas y me callo la boca para siempre.", fecha: "2023-06-24T18:00:00-03:00" },
          { autor: "pastelera.zuni", texto: "Lo espero con el mate listo, querido. En serio.", fecha: "2023-06-24T18:20:00-03:00" }
        ]
      },
      { autor: "panaderia_dosorillas", texto: "Hoy vendimos el triple de grasa que un dia normal. La lluvia manda.", fecha: "2023-06-24T19:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2620,
    autor: "pastelera.zuni",
    fecha: "2024-04-13T11:00:00-03:00",
    texto: "Estimados: hoy quiero compartirles la receta del dulce de leche repostero de mi madre, tal como esta escrita en el cuaderno de 1958. Copio textual y despues aclaro.\n2 litros de leche\n600 g de azucar\n1 cucharadita de bicarbonato\n1 chaucha de vainilla\nSe pone todo menos el bicarbonato, se lleva a hervor y ahi se agrega el bicarbonato de a poco porque sube. Fuego bajo, tres horas, revolviendo cada tanto con cuchara de madera. Punto: se pasa el dedo por la cuchara y el surco no se cierra.\nAclaracion mia: tres horas son tres horas. No hay atajo. El que quiere dulce de leche en cuarenta minutos que compre un pote y sea feliz, que no lo juzgo.",
    imagen: null,
    grupo: "cocina",
    likes: 634,
    comentarios: [
      { autor: "sofi.tortasfritas", texto: "El surco que no se cierra. Asi me enseño mi abuela tambien y nunca lo vi escrito. Gracias Zuni.", fecha: "2024-04-13T12:00:00-03:00" },
      { autor: "chef_carmelo", texto: "El bicarbonato es lo que sube el pH y acelera la reaccion de Maillard, por eso el color. Zunilda lo sabe hace 60 años sin llamarlo asi, que es lo mas lindo del asunto.", fecha: "2024-04-13T13:30:00-03:00",
        respuestas: [
          { autor: "pastelera.zuni", texto: "Mi madre le decia el polvito que le da color. Su nombre es mas elegante, el de ella era mas util a las seis de la mañana.", fecha: "2024-04-13T14:00:00-03:00" },
          { autor: "chef_carmelo", texto: "Me gano de nuevo. Voy a dejar de discutir con usted, no me conviene.", fecha: "2024-04-13T14:30:00-03:00" }
        ]
      },
      { autor: "agua_pura_uy", texto: "El bicarbonato en exceso es malo para el estomago, ojo.", fecha: "2024-04-13T16:00:00-03:00",
        respuestas: [
          { autor: "pastelera.zuni", texto: "Querida, es una cucharadita para dos litros y se descompone en la coccion. Comase el dulce tranquila.", fecha: "2024-04-13T16:40:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2621,
    autor: "sofi.tortasfritas",
    fecha: "2025-09-02T19:00:00-03:00",
    texto: "Salsa golf. Tres partes de mayonesa por una de ketchup, unas gotas de limon y una pizca de pimienta. Punto. No lleva mostaza, no lleva whisky, no lleva salsa inglesa. Si le ponés todo eso esta bien, pero es otra cosa y tiene otro nombre.",
    imagen: null,
    grupo: "cocina",
    likes: 512,
    comentarios: [
      { autor: "chef_carmelo", texto: "Tres a uno es demasiado ketchup, queda dulce. Yo voy cuatro a uno y unas gotas de tabasco.", fecha: "2025-09-02T19:40:00-03:00",
        respuestas: [
          { autor: "sofi.tortasfritas", texto: "Ignacio, el tabasco es exactamente lo que dije que no va jajaja. Pero te banco el cuatro a uno, eso es cuestion de gusto.", fecha: "2025-09-02T20:00:00-03:00" }
        ]
      },
      { autor: "pastelera.zuni", texto: "En casa siempre fue dos a uno y con la mayonesa hecha a mano. Pero reconozco que soy antigua.", fecha: "2025-09-02T20:30:00-03:00" },
      { autor: "panaderia_dosorillas", texto: "Nosotros la compramos hecha y no nos da verguenza.", fecha: "2025-09-03T09:00:00-03:00",
        respuestas: [
          { autor: "sofi.tortasfritas", texto: "Y esta perfecto. Un comercio no puede estar batiendo mayonesa a mano, seamos serios", fecha: "2025-09-03T10:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2622,
    autor: "sofi.tortasfritas",
    fecha: "2026-01-09T20:00:00-03:00",
    texto: "Arrancamos el año con la unica pregunta que importa. Voten y despues discutimos en los comentarios, que es donde nos divertimos.",
    imagen: null,
    grupo: "cocina",
    likes: 378,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Con cebolla, obviamente. Y bien pochada, no cruda tirada adentro como hacen algunos.", fecha: "2026-01-09T20:30:00-03:00" },
      { autor: "chef_carmelo", texto: "Con cebolla, pero confitada 40 minutos a fuego minimo. Ahi la tortilla cambia de categoria.", fecha: "2026-01-09T21:00:00-03:00",
        respuestas: [
          { autor: "pastelera.zuni", texto: "Miren, coincidimos. Anoten la fecha que no se repite.", fecha: "2026-01-09T21:20:00-03:00" },
          { autor: "chef_carmelo", texto: "Zunilda, coincidimos mas seguido de lo que usted admite en publico.", fecha: "2026-01-09T21:45:00-03:00" }
        ]
      },
      { autor: "panaderia_dosorillas", texto: "Sin cebolla. Ya se que quedamos solos pero alguien tiene que defenderlo.", fecha: "2026-01-10T09:30:00-03:00" }
    ],
    encuesta: {
      pregunta: "La tortilla de papa: con cebolla o sin cebolla?",
      opciones: [
        { texto: "Con cebolla, y bien pochada", votos: 1244 },
        { texto: "Sin cebolla, papa y huevo nada mas", votos: 687 },
        { texto: "Depende del dia", votos: 213 },
        { texto: "Yo la compro hecha, no me peguen", votos: 158 }
      ],
      cierra: "2026-01-31T23:59:00-03:00"
    }
  },
  {
    id: 2623,
    autor: "chef_carmelo",
    fecha: "2026-01-22T18:30:00-03:00",
    texto: "Estuve en la costa de Colonia comprando producto y quiero decir algo. Tenemos aceite de oliva de altisima calidad a media hora de casa, quesos de tambo chico que no tienen nada que envidiarle a nada, y seguimos cocinando con lo que sale mas barato en la gondola. No es un reproche de snob, es un pedido: prueben una vez con producto local y despues me cuentan.",
    imagen: null,
    grupo: "cocina",
    likes: 267,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Ignacio, le voy a dar la razon en esto y le pido que no se acostumbre. El queso de tambo chico no tiene comparacion. Ahora: en mi barrio no se consigue y cuando se consigue cuesta el triple. Ese es el problema, no la falta de ganas.", fecha: "2026-01-22T19:15:00-03:00",
        respuestas: [
          { autor: "chef_carmelo", texto: "Ese es un punto justo y no tengo respuesta buena. Lo unico que se me ocurre es comprar entre varios y repartir.", fecha: "2026-01-22T19:45:00-03:00" },
          { autor: "sofi.tortasfritas", texto: "Eso es una idea concreta y me gusta. Si alguien la arma en Salto me sumo.", fecha: "2026-01-22T20:30:00-03:00" }
        ]
      },
      { autor: "agua_pura_uy", texto: "Coincido con lo local. Yo ademas evito todo lo industrial, que esta lleno de cosas que no deberiamos comer.", fecha: "2026-01-22T21:00:00-03:00",
        respuestas: [
          { autor: "chef_carmelo", texto: "Rosana, local e industrial no son opuestos. Hay industria local buenisima y hay artesanal mal hecho. La linea no pasa por ahi.", fecha: "2026-01-22T21:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2624,
    autor: "pastelera.zuni",
    fecha: "2026-02-05T10:00:00-03:00",
    texto: "Queridos: hoy les escribo sobre la milanesa, que es donde se ve si alguien aprendio en una cocina o en un video.\nLa carne: nalga o peceto, cortada fina y golpeada, no aplastada.\nEl huevo: dos huevos, sal, un diente de ajo picado chiquito y perejil. Se deja la carne en el huevo media hora como minimo. Si tenes tiempo, dos horas en la heladera.\nEl pan: rallado fino, y se aprieta con la palma para que agarre.\nAceite: no muy caliente. Si humea, la panceta del pan se quema antes de que la carne se cocine.\nY una sola vez. El que apana dos veces esta haciendo otra cosa que no juzgo pero que no es milanesa de casa.",
    imagen: null,
    grupo: "cocina",
    likes: 741,
    comentarios: [
      { autor: "sofi.tortasfritas", texto: "El ajo en el huevo y no en el pan. ESO. La gente pone ajo en el pan rallado y despues se le quema y amarga todo.", fecha: "2026-02-05T10:40:00-03:00" },
      { autor: "chef_carmelo", texto: "Zunilda, con todo respeto, el doble apanado no es una aberracion: da una costra mas crocante y protege mejor la carne. No es peor, es distinto.", fecha: "2026-02-05T11:30:00-03:00",
        respuestas: [
          { autor: "pastelera.zuni", texto: "Es distinto, si. Y es mas pan y menos carne, que en una casa donde la carne cuesta es una decision importante. Mi madre apanaba una vez porque el pan no alimenta.", fecha: "2026-02-05T12:00:00-03:00" },
          { autor: "chef_carmelo", texto: "Ese argumento no lo puedo discutir y no lo voy a intentar. Tiene razon.", fecha: "2026-02-05T12:30:00-03:00" },
          { autor: "sofi.tortasfritas", texto: "Me encanta cuando estas dos escuelas se cruzan. Aprendo yo mas que nadie.", fecha: "2026-02-05T13:00:00-03:00" }
        ]
      },
      { autor: "panaderia_dosorillas", texto: "Consejo de panadero: el pan rallado casero de pan viejo del dia anterior, rallado grueso y despues pasado por tamiz. Es otra cosa.", fecha: "2026-02-05T15:00:00-03:00"
      }
    ],
    encuesta: null
  },
  {
    id: 2625,
    autor: "panaderia_dosorillas",
    fecha: "2026-02-18T08:30:00-03:00",
    texto: "Buenas. Aviso que desde marzo abrimos a las 6 y media en lugar de las 7, por pedido de la gente que trabaja temprano. Bizcochos calientes desde las 7. Los sabados igual. Aclaramos que esto es aviso de comercio, no receta, por si molesta a alguien.",
    imagen: null,
    grupo: "cocina",
    likes: 143,
    comentarios: [
      { autor: "sofi.tortasfritas", texto: "No molesta a nadie porque lo declaran, que es lo que pide la regla. Todo bien.", fecha: "2026-02-18T09:00:00-03:00" },
      { autor: "pastelera.zuni", texto: "A mi lo unico que me molesta es que quedan lejos. Un abrazo grande a los dos", fecha: "2026-02-18T10:30:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2626,
    autor: "chef_carmelo",
    fecha: "2026-03-01T13:00:00-03:00",
    texto: "Asado. Leña o carbon. Voy a ser honesto y contra mi propio personaje: en casa uso carbon casi siempre. La leña es superior en aroma y en el manejo largo de la brasa, no lo discuto. Pero requiere dos horas de anticipacion y un espacio que en un apartamento no existe. El purismo esta bien cuando uno tiene el patio. El que asa en una parrilla de balcon un martes tambien esta asando.",
    imagen: null,
    grupo: "cocina",
    likes: 389,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Ignacio, esta es la primera vez que lo leo hablar como una persona normal y me gusto mucho.", fecha: "2026-03-01T13:40:00-03:00",
        respuestas: [
          { autor: "chef_carmelo", texto: "Zunilda, yo tambien tengo un balcon y un martes.", fecha: "2026-03-01T14:00:00-03:00" },
          { autor: "pastelera.zuni", texto: "Ahora si somos amigos, querido.", fecha: "2026-03-01T14:30:00-03:00" }
        ]
      },
      { autor: "sofi.tortasfritas", texto: "Yo uso leña porque en Salto tengo patio y porque me gusta el humo. Pero coincido: el que asa, asa.", fecha: "2026-03-01T15:00:00-03:00" },
      { autor: "panaderia_dosorillas", texto: "Nosotros el horno lo tenemos a leña desde siempre y les digo una cosa: es hermoso y es un trabajo enorme.", fecha: "2026-03-01T17:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2627,
    autor: "sofi.tortasfritas",
    fecha: "2026-03-14T17:30:00-03:00",
    texto: "Aviso de administracion. Bajamos cuatro publicaciones esta semana de cuentas que entraron solo a vender viandas y tuppers. No es que este mal vender, es que hay un grupo para eso y este no es. Si sos emprendedor y ademas cocinas y participas, sos bienvenido y podes avisar de lo tuyo una vez por mes declarandolo. Si entraste solo a pegar el mismo texto en veinte grupos, te vamos a sacar y no lo vamos a discutir.",
    imagen: null,
    grupo: "cocina",
    likes: 456,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Bien hecho, Sofia. Con firmeza y sin maltratar a nadie, que es como se hace.", fecha: "2026-03-14T18:00:00-03:00" },
      { autor: "panaderia_dosorillas", texto: "Nosotros avisamos una vez cada tanto y siempre declarando. Si en algun momento nos pasamos, diganos.", fecha: "2026-03-14T19:00:00-03:00",
        respuestas: [
          { autor: "sofi.tortasfritas", texto: "Ustedes participan, contestan consultas y comparten tecnica. Estan del lado correcto de la linea, tranquilos.", fecha: "2026-03-14T19:30:00-03:00" }
        ]
      },
      { autor: "chef_carmelo", texto: "Coincido. Y aclaro que yo tengo restaurante y nunca publique el nombre aca, justamente por esto.", fecha: "2026-03-14T20:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2628,
    autor: "agua_pura_uy",
    fecha: "2026-03-25T11:00:00-03:00",
    texto: "Consulta y aporte. Estoy reemplazando la harina blanca por harina integral en todo y me quedan las cosas duras como piedra. Alguien tiene el truco? Y aprovecho para decir que la harina blanca refinada no tiene nada bueno para el cuerpo, es puro almidon vacio.",
    imagen: null,
    grupo: "cocina",
    likes: 87,
    comentarios: [
      { autor: "panaderia_dosorillas", texto: "El truco es agua. La harina integral absorbe muchisimo mas: si la receta dice 250 de agua, con integral necesitas 300 o 320. Y dejala reposar 30 minutos antes de amasar, que el salvado se hidrate. Eso solo te cambia todo.", fecha: "2026-03-25T12:00:00-03:00",
        respuestas: [
          { autor: "agua_pura_uy", texto: "Ah, era eso. Gracias, lo pruebo el finde.", fecha: "2026-03-25T13:00:00-03:00" }
        ]
      },
      { autor: "chef_carmelo", texto: "Sobre lo otro, sin animo de pelear: la harina blanca no es veneno, es un ingrediente con menos fibra. Un pan blanco bien fermentado de masa madre es un producto excelente. La cuestion es la fermentacion y la cantidad, no el color de la harina.", fecha: "2026-03-25T14:00:00-03:00",
        respuestas: [
          { autor: "agua_pura_uy", texto: "No coincido pero respeto. Yo veo resultados en mis pacientes.", fecha: "2026-03-25T15:00:00-03:00" },
          { autor: "sofi.tortasfritas", texto: "Rosana, en este grupo hablamos de cocina. De pacientes y de salud, mejor no, q ninguno de nosotros es medico. Con cariño te lo digo.", fecha: "2026-03-25T16:00:00-03:00" },
          { autor: "agua_pura_uy", texto: "Ta, entendido. Sigo con lo del agua en la harina integral que era lo que me servia.", fecha: "2026-03-25T16:40:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2629,
    autor: "pastelera.zuni",
    fecha: "2026-04-02T09:30:00-03:00",
    texto: "Semana Santa, o Semana de Turismo, o como cada uno le diga. Toca la rosca de pascua con crema pastelera. Les paso la del cuaderno.\nMasa: 500 g harina, 100 g azucar, 100 g manteca, 2 huevos, 25 g levadura fresca, 200 ml leche tibia, ralladura de un limon, una pizca de sal.\nSe hace esponja con la levadura, un poco de leche y una cucharada de harina. Se espera 15 minutos hasta que burbujee. Despues se une todo y se amasa 10 minutos.\nDos levados: uno de una hora y despues formada, otro de 40 minutos.\nHorno 180 grados, 25 a 30 minutos.\nLa crema pastelera y el detalle del pincelado con almibar los escribo mañana que se me hace largo. Un abrazo a todos.",
    imagen: null,
    grupo: "cocina",
    likes: 587,
    comentarios: [
      { autor: "panaderia_dosorillas", texto: "Zunilda, un aporte de oficio: si en vez de 25 g de levadura fresca usas 12 y le das un levado largo en la heladera toda la noche, la rosca dura tres dias tierna en vez de uno. Es el mismo truco de siempre, menos levadura y mas tiempo.", fecha: "2026-04-02T11:00:00-03:00",
        respuestas: [
          { autor: "pastelera.zuni", texto: "Eso no lo sabia y tengo 63 años. Miren si una no aprende. Lo pruebo esta semana y les cuento.", fecha: "2026-04-02T12:00:00-03:00" },
          { autor: "sofi.tortasfritas", texto: "Este es el mejor comentario del año y son las once de la mañana de un jueves.", fecha: "2026-04-02T12:30:00-03:00" }
        ]
      },
      { autor: "chef_carmelo", texto: "Confirmo lo del levado largo en frio. Ademas desarrolla mucho mas sabor. La panaderia tiene razon.", fecha: "2026-04-02T14:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2630,
    autor: "pastelera.zuni",
    fecha: "2026-04-09T10:00:00-03:00",
    texto: "Informo como corresponde: hice la rosca con la mitad de levadura y levado toda la noche en la heladera, como me indicaron los muchachos de la panaderia. Salio mejor. Mas aireada, mas gustosa y al tercer dia seguia tierna. Sesenta y tres años haciendo la misma receta y me la mejoraron en un comentario. Gracias de verdad. Corrijo el cuaderno con lapiz al costado, que es como se corrige un cuaderno.",
    imagen: null,
    grupo: "cocina",
    likes: 812,
    comentarios: [
      { autor: "panaderia_dosorillas", texto: "Nos hizo el año, Zunilda. En serio.", fecha: "2026-04-09T11:00:00-03:00" },
      { autor: "chef_carmelo", texto: "Que una persona con esa trayectoria escriba corrijo el cuaderno con lapiz es una leccion para todos los que cocinamos. Me la guardo.", fecha: "2026-04-09T13:00:00-03:00",
        respuestas: [
          { autor: "pastelera.zuni", texto: "Ignacio, el dia que deje de corregir el cuaderno me retiro. Y usted haga lo mismo, que es joven y tiene mucho por tachar.", fecha: "2026-04-09T14:00:00-03:00" },
          { autor: "chef_carmelo", texto: "Tomo nota, señora. Y voy a Piedras Blancas antes de fin de año, es una promesa.", fecha: "2026-04-09T14:30:00-03:00" }
        ]
      },
      { autor: "sofi.tortasfritas", texto: "Fijo este post. Es lo que quiero que sea este grupo.", fecha: "2026-04-09T15:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2631,
    autor: "sofi.tortasfritas",
    fecha: "2026-04-20T18:00:00-03:00",
    texto: "El pastel de carne de mi abuela, que hoy hubiera cumplido 91.\n1 kg de carne picada\n2 cebollas grandes\n1 morron\n3 huevos duros\naceitunas verdes sin carozo, un puñado\npasas de uva, otro puñado (SI, van pasas, no me escriban)\ncomino, poquito\nmasa de tapas para pascualina, dos discos\nRehogá la cebolla y el morron hasta que estén transparentes. Sumá la carne, cociná hasta que pierda el rojo, salpimentá, comino. Dejá enfriar del todo, esto es importante. Armá con los huevos duros en rodajas, aceitunas y pasas. Tapá, repulgá, pincelá con huevo. Horno 190 grados, 35 minutos.",
    imagen: null,
    grupo: "cocina",
    likes: 623,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Con pasas. Como corresponde. El q le saca las pasas le esta sacando el contraste dulce q hace q funcione todo el relleno.", fecha: "2026-04-20T18:40:00-03:00" },
      { autor: "chef_carmelo", texto: "Voy a decir algo que me va a costar caro: a mi las pasas en el pastel de carne no me gustan. Reconozco el fundamento tecnico de Zunilda y aun asi las saco.", fecha: "2026-04-20T19:30:00-03:00",
        respuestas: [
          { autor: "sofi.tortasfritas", texto: "Ignacio en mi casa eso se resuelve haciendo la mitad con y la mitad sin. La diplomacia existe.", fecha: "2026-04-20T20:00:00-03:00" },
          { autor: "pastelera.zuni", texto: "En mi casa se resuelve comiendo lo que hay, pero la propuesta de Sofia es mas moderna.", fecha: "2026-04-20T20:30:00-03:00" },
          { autor: "chef_carmelo", texto: "Jajaja me rindo. Las dos tienen razon y yo tengo hambre.", fecha: "2026-04-20T21:00:00-03:00" }
        ]
      },
      { autor: "agua_pura_uy", texto: "Se puede hacer con carne de soja? Pregunto en serio, sin querer arruinarle el post a nadie.", fecha: "2026-04-20T21:30:00-03:00",
        respuestas: [
          { autor: "sofi.tortasfritas", texto: "Se puede y no arruinas nada. Rehogá bien y sumale una cucharada de salsa de soja para que gane profundidad, que es lo que le falta.", fecha: "2026-04-20T22:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2632,
    autor: "chef_carmelo",
    fecha: "2026-05-03T20:00:00-03:00",
    texto: "Nota sobre vinos, y prometo no ser insoportable. Con el asado no hace falta un tinto pesado. Un tannat joven, fresco, servido 16 grados y no a temperatura ambiente de comedor con estufa, funciona mucho mejor que un vino de guarda que se te aplasta con el humo. Y si es un asado de verano al mediodia, un rosado bien frio es la respuesta correcta aunque a algunos les de pudor.",
    imagen: null,
    grupo: "cocina",
    likes: 234,
    comentarios: [
      { autor: "panaderia_dosorillas", texto: "Lo del rosado con asado nos lo dijo un cliente el verano pasado y no le creimos. Probamos. Tenia razon.", fecha: "2026-05-03T21:00:00-03:00" },
      { autor: "pastelera.zuni", texto: "Yo tomo agua con el asado y vino con el postre, que se yo, siempre fue asi en casa.", fecha: "2026-05-03T21:30:00-03:00",
        respuestas: [
          { autor: "chef_carmelo", texto: "Zunilda eso es una herejia y le juro que la voy a probar el domingo.", fecha: "2026-05-03T22:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2633,
    autor: "panaderia_dosorillas",
    fecha: "2026-05-14T07:00:00-03:00",
    texto: "Bizcochos. Nos preguntan todos los dias asi que contamos lo que se puede contar. El secreto no es la receta, es el frio. La masa tiene que estar fria, la manteca tiene que estar fria y las manos tienen que ser rapidas. Si la manteca se te derrite en el amasado, perdiste el hojaldrado y te queda una galleta. Nosotros trabajamos a las 4 de la mañana en parte por eso: a esa hora la cuadra esta fresca.",
    imagen: null,
    grupo: "cocina",
    likes: 498,
    comentarios: [
      { autor: "sofi.tortasfritas", texto: "El detalle de que trabajan a las 4 en parte por la temperatura es de esas cosas que solo sabe el que esta adentro del oficio. Gracias por compartirlo.", fecha: "2026-05-14T08:00:00-03:00" },
      { autor: "chef_carmelo", texto: "Confirmo. En cocina profesional el laminado se hace en la zona mas fria y con marmol. En casa se puede meter la masa 15 minutos al freezer entre vuelta y vuelta.", fecha: "2026-05-14T09:30:00-03:00",
        respuestas: [
          { autor: "panaderia_dosorillas", texto: "Ese truco del freezer es buenisimo para casa. Nosotros no podemos, no entra un carro entero jaja.", fecha: "2026-05-14T11:00:00-03:00" }
        ]
      },
      { autor: "pastelera.zuni", texto: "Mi madre amasaba en invierno con la ventana abierta y en verano no hacia hojaldre. Sabia lo mismo que ustedes sin haber pisado una escuela.", fecha: "2026-05-14T10:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2634,
    autor: "sofi.tortasfritas",
    fecha: "2026-05-27T16:00:00-03:00",
    texto: "Llueve en Salto. Ustedes ya saben. Pero hoy quiero pedirles algo distinto: cuentenme como es la torta frita en su casa. Con azucar o sin. Con agujero o sin. Chica o del tamaño de un plato. Grasa o aceite. Sin pelear, solo contando. Me interesa ver el mapa del pais en una masa frita.",
    imagen: null,
    grupo: "cocina",
    likes: 734,
    comentarios: [
      { autor: "pastelera.zuni", texto: "En casa: grasa, con agujero, tamaño de la palma de la mano, sin azucar. Y se comen paradas al lado de la sarten, que es como se comen de verdad.", fecha: "2026-05-27T16:30:00-03:00" },
      { autor: "panaderia_dosorillas", texto: "Ciudad Vieja: grandes, sin agujero, con azucar arriba. Y se venden con dulce de leche para el que quiere, aunque a mucha gente le parece un atentado.", fecha: "2026-05-27T17:00:00-03:00",
        respuestas: [
          { autor: "pastelera.zuni", texto: "Con dulce de leche es un atentado, si. Pero uno delicioso, no voy a mentir.", fecha: "2026-05-27T17:30:00-03:00" }
        ]
      },
      { autor: "chef_carmelo", texto: "En Carmelo mi abuela las hacia chicas y las servia con queso fresco arriba. Nunca vi que nadie mas hiciera eso.", fecha: "2026-05-27T18:00:00-03:00",
        respuestas: [
          { autor: "sofi.tortasfritas", texto: "Ignacio eso es un hallazgo. Torta frita con queso fresco. Lo pruebo hoy mismo.", fecha: "2026-05-27T18:30:00-03:00" },
          { autor: "chef_carmelo", texto: "Sofia si lo publicas decí que es de mi abuela, no mio. Ella lo inventó por necesidad, no por creatividad.", fecha: "2026-05-27T19:00:00-03:00" },
          { autor: "sofi.tortasfritas", texto: "Se dice y se aclara. Asi funciona esto.", fecha: "2026-05-27T19:20:00-03:00" }
        ]
      },
      { autor: "agua_pura_uy", texto: "En mi casa las hacemos al horno. Ya se lo que van a decir.", fecha: "2026-05-27T20:00:00-03:00",
        respuestas: [
          { autor: "sofi.tortasfritas", texto: "No vamos a decir nada porque pedi que no pelearamos. Pero eso es un pan chato, Rosana. Con todo el amor del mundo.", fecha: "2026-05-27T20:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2635,
    autor: "pastelera.zuni",
    fecha: "2026-06-05T09:00:00-03:00",
    texto: "Queridos: alguien me pregunto por privado por que mis merengues se lloran en invierno. Le contesto aca porque le pasa a mucha gente. El merengue se llora por humedad, y en Montevideo en junio la humedad esta al 85 por ciento. Soluciones: hornear a temperatura muy baja y por mucho tiempo, apagar el horno y dejarlos adentro hasta que se enfrie, y guardarlos en frasco hermetico con una galletita seca adentro que chupe la humedad. Ese truco de la galletita es de mi madre y no falla.",
    imagen: null,
    grupo: "cocina",
    likes: 456,
    comentarios: [
      { autor: "chef_carmelo", texto: "El truco de la galletita es lo mismo que hacemos nosotros con silica alimentaria, solo que la galletita se puede comer despues. Gana la galletita.", fecha: "2026-06-05T10:00:00-03:00" },
      { autor: "sofi.tortasfritas", texto: "Zuni cada vez que contas algo del cuaderno de tu madre siento que estamos salvando algo importante.", fecha: "2026-06-05T11:00:00-03:00",
        respuestas: [
          { autor: "pastelera.zuni", texto: "Por eso lo escribo, querida. Cuando yo no este el cuaderno se va a perder, pero esto queda.", fecha: "2026-06-05T11:40:00-03:00" },
          { autor: "sofi.tortasfritas", texto: "No se va a perder nada. Y no hables asi que me pones mal.", fecha: "2026-06-05T12:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2636,
    autor: "chef_carmelo",
    fecha: "2026-06-17T21:00:00-03:00",
    texto: "Guiso de lentejas de invierno, version honesta y barata, que me acusan siempre de cocinar caro.\n500 g de lentejas remojadas 8 horas\n200 g de panceta o falda, lo que consigas\n1 cebolla, 1 zanahoria, 1 morron, 2 dientes de ajo\n2 papas\n1 chorizo colorado si hay\npimenton dulce, laurel, sal\nSofreí las verduras 15 minutos a fuego bajo, sin apuro. Sumá la carne, dorá. Pimenton fuera del fuego para que no amargue. Lentejas, agua que cubra dos dedos, laurel. Hora y cuarto a fuego minimo. Papas a los 45 minutos. Descansá 20 minutos antes de servir, eso es la mitad del plato.",
    imagen: null,
    grupo: "cocina",
    likes: 567,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Pimenton fuera del fuego. Bien. Es el error mas comun de todos y arruina la olla entera.", fecha: "2026-06-17T21:40:00-03:00" },
      { autor: "panaderia_dosorillas", texto: "Y descansar 20 minutos. Nadie tiene paciencia para eso y se nota.", fecha: "2026-06-17T22:00:00-03:00" },
      { autor: "sofi.tortasfritas", texto: "Ignacio esto es exactamente lo que la gente quiere leer. Mas de esto y menos de maridajes jajaja.", fecha: "2026-06-17T22:30:00-03:00",
        respuestas: [
          { autor: "chef_carmelo", texto: "Sofia, un dia me vas a extrañar hablando de vinos.", fecha: "2026-06-17T23:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2637,
    autor: "sofi.tortasfritas",
    fecha: "2026-06-28T15:00:00-03:00",
    texto: "Recopile todo lo que contaron en el post de las tortas fritas y arme el mapa. Resumen: el agujero es mas del sur, en el norte muchas las hacen enteras. El azucar arriba gana en la costa y pierde en el interior profundo. La grasa gana en todos lados por goleada. Y aparecieron tres versiones que nunca habia escuchado: con queso fresco (Carmelo), con anis en la masa (Tacuarembo) y con un poco de caña en el agua (nadie quiso decir de donde).",
    imagen: null,
    grupo: "cocina",
    likes: 689,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Lo de la caña lo conozco. Es para que absorban menos grasa al freir. Y funciona, aunque suene a excusa de borracho", fecha: "2026-06-28T15:40:00-03:00",
        respuestas: [
          { autor: "chef_carmelo", texto: "Funciona por el alcohol, que se evapora rapido y forma una barrera. Es exactamente el mismo principio que usamos en tempura con vodka. Zunilda otra vez tenia razon antes que la ciencia.", fecha: "2026-06-28T16:00:00-03:00" },
          { autor: "pastelera.zuni", texto: "Yo no tenia razon antes que nadie, querido. Yo solo miraba lo que hacia mi madre.", fecha: "2026-06-28T16:30:00-03:00" }
        ]
      },
      { autor: "panaderia_dosorillas", texto: "Anis en la masa lo probamos hoy en la cuadra. Buenisimo. Gracias al que lo conto.", fecha: "2026-06-28T18:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2638,
    autor: "panaderia_dosorillas",
    fecha: "2026-07-05T08:00:00-03:00",
    texto: "Contamos algo que nos paso. Vino una señora a pedirnos si le haciamos una torta para el cumpleaños de la nieta y nos dijo que podia pagar la mitad ahora y la mitad en dos semanas. Le dijimos que si. Volvio a la semana con la plata entera y con un tuper de ravioles caseros de regalo. Contamos esto porque a veces uno cree que el barrio se perdio y no, esta ahi.",
    imagen: null,
    grupo: "cocina",
    likes: 812,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Que hermoso. Y los ravioles caseros son la moneda mas noble que existe.", fecha: "2026-07-05T09:00:00-03:00" },
      { autor: "sofi.tortasfritas", texto: "Esto no es una receta y sin embargo es lo mas cocina uruguaya de verdad que se publico este mes.", fecha: "2026-07-05T10:00:00-03:00" },
      { autor: "chef_carmelo", texto: "En el restaurante nunca pasa esto y les confieso que a veces lo extraño.", fecha: "2026-07-05T12:00:00-03:00",
        respuestas: [
          { autor: "panaderia_dosorillas", texto: "Veni a la cuadra un sabado a las 5 de la mañana y te lo prestamos un rato.", fecha: "2026-07-05T14:00:00-03:00" },
          { autor: "chef_carmelo", texto: "Voy. Anotenme para el sabado 15 de agosto que tengo el dia libre.", fecha: "2026-07-05T15:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2639,
    autor: "agua_pura_uy",
    fecha: "2026-07-11T13:00:00-03:00",
    texto: "Aporte concreto y sin polemica, que aprendi la leccion. Sopa de calabaza y jengibre para el invierno: 1 calabaza mediana asada, 1 cebolla, un trozo de jengibre fresco del tamaño de un pulgar, caldo de verdura, sal. Todo a la licuadora despues de rehogar. Un chorrito de aceite de oliva arriba. Barata, rinde para cuatro y calienta de verdad.",
    imagen: null,
    grupo: "cocina",
    likes: 267,
    comentarios: [
      { autor: "chef_carmelo", texto: "Rosana, buenisima. Un consejo tecnico: asá la calabaza con la piel y bien caramelizada antes de licuar. Cambia completamente la sopa. Y si le sumas una papa chica queda con mejor textura.", fecha: "2026-07-11T14:00:00-03:00",
        respuestas: [
          { autor: "agua_pura_uy", texto: "Gracias Ignacio, en serio. Lo pruebo. Y perdon por las discusiones de otras veces.", fecha: "2026-07-11T15:00:00-03:00" },
          { autor: "chef_carmelo", texto: "No hay nada que perdonar. Discutir de comida es un deporte nacional.", fecha: "2026-07-11T15:30:00-03:00" }
        ]
      },
      { autor: "pastelera.zuni", texto: "El jengibre yo no lo uso porque no me gusta, pero la receta esta bien escrita y con cantidades. Bienvenida.", fecha: "2026-07-11T16:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2640,
    autor: "sofi.tortasfritas",
    fecha: "2026-07-19T19:00:00-03:00",
    texto: "El chivito. De nuevo. Porque me lo piden todas las semanas y porque quiero cerrar la discusion de 2022 con Ignacio de una vez.\nLo q yo considero un chivito canonico:\npan con semillas, tostado con manteca\nlomo fino, dos fetas, a la plancha bien caliente y poco\nmozzarella derretida arriba de la carne, no abajo\npanceta\njamon (SI, Ignacio, jamon)\nhuevo frito\nlechuga, tomate, morron asado\nmayonesa o salsa golf\nEl orden importa: la mozzarella sella el lomo y le guarda el jugo. Ese es todo el secreto y no es mio, me lo enseño un parrillero de Salto hace quince años.",
    imagen: null,
    grupo: "cocina",
    likes: 1043,
    comentarios: [
      { autor: "chef_carmelo", texto: "Voy a hacer algo que no hago nunca: ceder. Probé la version con jamon armada en ese orden, con la mozzarella sellando el lomo, y funciona. El jamon aporta sal y grasa donde el lomo no llega. Sigo prefiriendo el mio sin jamon, pero ya no puedo decir que el jamon sobra. Retiro lo dicho en 2022.", fecha: "2026-07-19T20:00:00-03:00",
        respuestas: [
          { autor: "sofi.tortasfritas", texto: "IGNACIO. Cuatro años. Cuatro años esperando este comentario jajaja.", fecha: "2026-07-19T20:20:00-03:00" },
          { autor: "pastelera.zuni", texto: "Yo lo tengo anotado en el cuaderno con fecha: 18 de mayo de 2022, dijo que el jamon sobraba. Hoy se retracta. Que gane el registro escrito.", fecha: "2026-07-19T20:45:00-03:00" },
          { autor: "chef_carmelo", texto: "Zunilda usted me tiene fichado y me da miedo.", fecha: "2026-07-19T21:00:00-03:00" },
          { autor: "sofi.tortasfritas", texto: "Este grupo es lo mejor que hice en mi vida, se los juro.", fecha: "2026-07-19T21:30:00-03:00" }
        ]
      },
      { autor: "panaderia_dosorillas", texto: "El pan tostado con manteca y no con aceite. Eso tambien es media discusion.", fecha: "2026-07-19T22:00:00-03:00",
        respuestas: [
          { autor: "sofi.tortasfritas", texto: "No abras otro frente que no doy abasto.", fecha: "2026-07-19T22:30:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2641,
    autor: "pastelera.zuni",
    fecha: "2026-07-24T10:30:00-03:00",
    texto: "Estimados: pasteles de membrillo, que es lo que corresponde en julio.\nMasa: 300 g harina, 150 g manteca fria en cubos, 100 g azucar, 1 huevo, ralladura de limon, una pizca de sal.\nSe hace arenando con los dedos, rapido, sin calentar la manteca. Se une, se envuelve y va a la heladera una hora como minimo.\nRelleno: dulce de membrillo cortado en tiras, nada mas.\nSe estira, se corta, se rellena, se cierra con el tenedor, se pincela con huevo y se espolvorea azucar.\nHorno 180 grados, 20 minutos.\nDetalle que nadie dice: el membrillo tiene que estar frio y firme. Si esta blando se te escapa por los costados y se quema en la placa.",
    imagen: null,
    grupo: "cocina",
    likes: 578,
    comentarios: [
      { autor: "sofi.tortasfritas", texto: "Arenar con los dedos y rapido. La gente amasa de mas y despues se pregunta por que le quedo duro.", fecha: "2026-07-24T11:00:00-03:00" },
      { autor: "panaderia_dosorillas", texto: "Y el frio otra vez. Es siempre el frio, en todo.", fecha: "2026-07-24T12:00:00-03:00",
        respuestas: [
          { autor: "pastelera.zuni", texto: "En la pasteleria el frio es la mitad del oficio y la paciencia es la otra mitad. Lo demas son detalles.", fecha: "2026-07-24T13:00:00-03:00" }
        ]
      },
      { autor: "chef_carmelo", texto: "Voy a hacerlos el domingo tal cual esta escrito, sin cambiarle nada. Como ejercicio de humildad.", fecha: "2026-07-24T14:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2642,
    autor: "chef_carmelo",
    fecha: "2026-07-27T13:00:00-03:00",
    texto: "Reporte: hice los pasteles de membrillo de Zunilda sin cambiar una coma. Salieron mejor que los que hago yo con mi version mejorada. La diferencia estaba en el reposo de la masa, que yo acortaba a 20 minutos por apuro de servicio. Una hora es una hora. Me humillo publicamente y con gusto.",
    imagen: null,
    grupo: "cocina",
    likes: 734,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Ignacio, usted no se humilla, usted aprende. Que es distinto y es lo que hacemos todos aca, yo la primera. Un abrazo grande y venga cuando quiera.", fecha: "2026-07-27T14:00:00-03:00" },
      { autor: "sofi.tortasfritas", texto: "El arco de estos dos en cuatro años deberia estudiarse en algun lado.", fecha: "2026-07-27T15:00:00-03:00" },
      { autor: "panaderia_dosorillas", texto: "Cuando venga a la cuadra el 15 le enseñamos a laminar y ahi si se humilla de verdad jaja.", fecha: "2026-07-27T16:00:00-03:00",
        respuestas: [
          { autor: "chef_carmelo", texto: "Voy con delantal propio y sin decir una palabra en tres horas. Prometido.", fecha: "2026-07-27T17:00:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },
  {
    id: 2643,
    autor: "sofi.tortasfritas",
    fecha: "2026-07-31T17:00:00-03:00",
    texto: "Aviso de administracion, y este es lindo. Con Zuni decidimos armar una carpeta comun del grupo con todas las recetas que se publicaron, ordenadas por tema y con el nombre de quien la aporto. Se accede desde la ficha del grupo. La idea es que dentro de diez años alguien pueda entrar y encontrar el pastel de carne de mi abuela y los pasteles de membrillo de la madre de Zunilda. Eso, para mi, es lo que hace una red social cuando funciona.",
    imagen: null,
    grupo: "cocina",
    likes: 921,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Querida Sofia, cuando me lo propusiste me puse a llorar y no te lo dije. Ahora si", fecha: "2026-07-31T18:00:00-03:00",
        respuestas: [
          { autor: "sofi.tortasfritas", texto: "Zuni para que estoy en vivo grabando y no puedo llorar yo tambien.", fecha: "2026-07-31T18:20:00-03:00" }
        ]
      },
      { autor: "chef_carmelo", texto: "Me ofrezco a ordenar la parte de tecnicas y a escribir las fichas de conservacion, si les sirve. Gratis y sin poner mi nombre en ningun lado.", fecha: "2026-07-31T19:00:00-03:00" },
      { autor: "panaderia_dosorillas", texto: "Nosotros aportamos las de panificacion, incluida la de los bizcochos que nunca dimos a nadie.", fecha: "2026-07-31T20:00:00-03:00",
        respuestas: [
          { autor: "sofi.tortasfritas", texto: "LA DE LOS BIZCOCHOS. Ahora si que no duermo.", fecha: "2026-07-31T20:30:00-03:00" }
        ]
      },
      { autor: "agua_pura_uy", texto: "Yo aporto tres de sopas y verduras. Que quede claro que aporto, no que discuto jaja.", fecha: "2026-07-31T21:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2644,
    autor: "pastelera.zuni",
    fecha: "2026-08-03T09:00:00-03:00",
    texto: "Queridos: empecé a pasar el cuaderno de mi madre a la carpeta del grupo. Voy por la pagina 14 de 96 y me estoy tomando mi tiempo porque hay anotaciones al margen que no son recetas. En la pagina 9 dice, al costado de un budin: hoy no habia huevos, salio igual. Fecha: agosto de 1962. Eso no lo voy a transcribir como receta pero lo voy a transcribir igual, porque tambien es cocina uruguaya de verdad.",
    imagen: null,
    grupo: "cocina",
    likes: 1128,
    comentarios: [
      { autor: "sofi.tortasfritas", texto: "Transcribi todo, Zuni. Las manchas tambien, si se pudiera.", fecha: "2026-08-03T10:00:00-03:00" },
      { autor: "chef_carmelo", texto: "Hoy no habia huevos, salio igual. Es la mejor definicion de la cocina de este pais que lei en mi vida y la escribio una señora en 1962 al costado de una pagina.", fecha: "2026-08-03T11:00:00-03:00",
        respuestas: [
          { autor: "pastelera.zuni", texto: "Mi madre no sabia que estaba escribiendo nada importante. Escribia para acordarse.", fecha: "2026-08-03T11:40:00-03:00" },
          { autor: "chef_carmelo", texto: "Todo lo importante se escribio asi, Zunilda.", fecha: "2026-08-03T12:00:00-03:00" }
        ]
      },
      { autor: "panaderia_dosorillas", texto: "Nosotros tenemos un cuaderno igual del abuelo, del 78. Capaz q lo empezamos a pasar tambien", fecha: "2026-08-03T13:00:00-03:00" },
      { autor: "agua_pura_uy", texto: "Que lindo todo esto. De verdad.", fecha: "2026-08-03T14:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2645,
    autor: "sofi.tortasfritas",
    fecha: "2026-08-05T12:00:00-03:00",
    texto: "Miercoles, frio y anuncian lluvia para la tarde. Ya saben lo que hay que hacer. La receta esta fijada desde 2023 y no cambio ni va a cambiar. Lo unico que agrego hoy: haganlas con alguien. Llamen a la vecina, al hermano, al que sea. La torta frita sola no rinde igual, es un dato tecnico.",
    imagen: null,
    grupo: "cocina",
    likes: 867,
    comentarios: [
      { autor: "pastelera.zuni", texto: "Es un dato tecnico y esta comprobado. Yo hoy las hago con la nieta, que tiene 9 años y ya sabe hacer el agujerito.", fecha: "2026-08-05T12:30:00-03:00" },
      { autor: "panaderia_dosorillas", texto: "Nosotros ya duplicamos la masa para hoy. Nos guiamos por el pronostico igual que ustedes.", fecha: "2026-08-05T13:00:00-03:00" },
      { autor: "chef_carmelo", texto: "En Carmelo tambien anuncian lluvia. Voy a hacer las de mi abuela con queso fresco y despues cuento.", fecha: "2026-08-05T13:30:00-03:00",
        respuestas: [
          { autor: "sofi.tortasfritas", texto: "Sacale foto con luz de dia, que despues me la mandas a las diez de la noche y no se ve nada.", fecha: "2026-08-05T14:00:00-03:00" },
          { autor: "chef_carmelo", texto: "Me tenes fichado vos tambien. Este grupo es implacable y por eso lo quiero.", fecha: "2026-08-05T14:20:00-03:00" }
        ]
      }
    ],
    encuesta: null
  },

  /* Nelson en su rubro de toda la vida. Acá se gana la autoridad técnica
     que después usa para sostener disparates en otro grupo. */

  {
    id: 2646,
    autor: "n.curbelo.1954",
    fecha: "2026-04-03T03:50:00-03:00",
    texto: "Una consulta a los que saben, que yo de esto nuevo no entiendo nada.\n\nTengo el receptor viejo de mi padre, uno de válvulas, y de noche agarra unas emisoras que de día no aparecen. Anoche a las tres y pico escuché una que hablaba en portugués clarita como si estuviera en la cuadra.\n\nMi hija dice que es la ionosfera y que es normal. Yo sé lo que es la propagación nocturna, empalmé cable cuarenta años, pero cuarenta años de línea no me enseñaron nada de radio. Alguno me explica bien cómo es la cosa?\n\nN.",
    imagen: null,
    grupo: "cx-radio",
    likes: 38,
    comentarios: [
      { autor: "elabuelo_radioCX8", texto: "Su hija tiene razón, Curbelo. De noche la capa D se disipa y las de onda media viajan mucho más lejos rebotando arriba. Por eso de madrugada le entra Brasil como si nada. No es magia ni es nadie transmitiendo cerca: es física y pasa todas las noches. Cambio.", fecha: "2026-04-03T09:20:00-03:00",
        respuestas: [
          { autor: "n.curbelo.1954", texto: "Le agradezco Ramón. Uno se cría pensando que si se escucha lejos es porque el aparato es bueno, y resulta que es el aire. N.", fecha: "2026-04-03T10:05:00-03:00" }
        ] },
      { autor: "dj.pirata.fm", texto: "che y ese receptor no lo vendes? los de valvulas suenan distinto, no es cuento", fecha: "2026-04-03T13:00:00-03:00",
        respuestas: [
          { autor: "n.curbelo.1954", texto: "Era de mi padre. Ese no se vende ni se presta. N.", fecha: "2026-04-03T13:45:00-03:00" }
        ] }
    ],
    encuesta: null
  },

  /* ---- Avistajes de 2026 ----
     Todos posteriores a marzo, así sus fotos conservan metadatos sin
     contradecir el aviso del sanitizador. Son el ruido de fondo: quien
     barra la carpeta con exiftool va a encontrar un montón de imágenes
     con datos de cámara y fichas de especie, todas legítimas. */

  {
    id: 2647,
    autor: "el_tero_viajero",
    fecha: "2026-04-17T08:30:00-03:00",
    texto: "Halconcito colorado (Falco sparverius) posado en el tendido, camino vecinal a la altura del km 180.\n\nMacho, se le ve el dorso rufo y la cabeza gris. Estuvo doce minutos en el mismo lugar mirando el pastizal y no bajó ni una vez. Con esta luz de las 8 se los ve mejor que a media mañana.\n\nEs el falcónido más chico que tenemos y el que más se ve desde la ruta. Si van manejando y ven uno quieto en el cable, casi seguro es este.",
    imagen: "media/fotos/ave_7.jpg",
    grupo: "aves",
    likes: 143,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Excelente registro. Se ve sano y en peso. Aclaro para los que preguntan siempre: no, no se tienen de mascota, y además es ilegal.", fecha: "2026-04-17T10:15:00-03:00" },
      { autor: "agronomo_paysandu", texto: "Estos son los mejores aliados que tenemos y todavía hay gente que los corre a tiros. Se comen los roedores que se comen el grano.", fecha: "2026-04-17T11:40:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 2648,
    autor: "salvavidas_rocha",
    fecha: "2026-05-02T17:20:00-03:00",
    texto: "Dos patos barcinos en el charco de atrás del médano. Los conté a ojo y esta vez saqué la foto antes de decir un número, como me enseñaron acá.\n\nSon dos. Nada más que dos.",
    imagen: "media/fotos/ave_10.jpg",
    grupo: "aves",
    likes: 96,
    comentarios: [
      { autor: "el_tero_viajero", texto: "Jaja, aprendiste. Anas flavirostris, pico amarillo bien marcado. Buen registro Matías.", fecha: "2026-05-02T18:00:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 2649,
    autor: "agronomo_paysandu",
    fecha: "2026-05-14T12:05:00-03:00",
    texto: "Gavilán planteador sobre el poste del alambrado, potrero de rastrojo.\n\nLo vi cazar dos veces en la hora que estuve. Se tira desde el poste, camina un tramo y vuelve. No es el vuelo espectacular que la gente espera de un ave de rapiña: es un bicho que trabaja caminando.",
    imagen: "media/fotos/ave_9.jpg",
    grupo: "aves",
    likes: 108,
    comentarios: [
      { autor: "apicultor_florida", texto: "Acá en Florida hay dos parejas fijas desde hace años. Nunca me tocaron una colmena.", fecha: "2026-05-14T14:30:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 2650,
    autor: "astro.mvd",
    fecha: "2026-06-08T19:45:00-03:00",
    texto: "Tres teros arriba de la pared del galpón, en fila y todos mirando al mismo lado.\n\nLo aclaro porque me lo preguntaron por privado después de una discusión que hubo en otro grupo: no están vigilando nada. Se paran en alto porque desde ahí ven venir a los perros, y miran todos al mismo lado porque el viento venía de ahí. Es lo mismo que hacen las gallinas y a nadie le parece raro.\n\nLa foto es de las seis de la tarde, con el sol de frente. Si alguien quiere el dato exacto del lugar se lo paso por privado, que es campo de un conocido.",
    imagen: "media/fotos/ave_11.jpg",
    grupo: "aves",
    likes: 187,
    comentarios: [
      { autor: "escepticouy", texto: "Gracias por tomarte el trabajo de explicarlo. En el otro grupo hay gente convencida de cosas bastante más raras que esta y no siempre aparece alguien con paciencia.", fecha: "2026-06-08T20:30:00-03:00",
        respuestas: [
          { autor: "astro.mvd", texto: "Paciencia me queda poca, pero prefiero explicar una vez más que dejar correr la bola. Si alguien pregunta de buena fe, se le contesta.", fecha: "2026-06-08T21:00:00-03:00" }
        ] },
      { autor: "caro.veterinaria", texto: "Vanellus chilensis, para el que quiera buscarlo. Y sí: son territoriales y ruidosos, nada más que eso.", fecha: "2026-06-08T22:10:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 2651,
    autor: "colonia_guia_turismo",
    fecha: "2026-06-25T10:00:00-03:00",
    texto: "Miren la belleza de esta madre con su pichón 😍 Los teros son unos padres bárbaros, defienden el nido contra cualquier cosa.\n\nQue tengan lindo día todos!",
    imagen: "media/fotos/ave_12.jpg",
    grupo: "aves",
    likes: 64,
    comentarios: [
      { autor: "el_tero_viajero", texto: "Preciosa foto, pero no es tuya. Esa imagen anda dando vueltas por internet hace años, la vi en dos blogs y hasta en un calendario. Si la compartís está bien, pero aclaralo: acá el acuerdo es publicar lo que uno saca y decir dónde y cuándo.", fecha: "2026-06-25T11:15:00-03:00",
        respuestas: [
          { autor: "colonia_guia_turismo", texto: "Tenés razón, me la pasaron por whatsapp y la subí sin fijarme. Disculpen. La dejo igual porque ya está comentada, pero aclaro que no es mía.", fecha: "2026-06-25T12:00:00-03:00" },
          { autor: "el_tero_viajero", texto: "Todo bien, es para mantener la regla. El día que acá se discuta un dato importante, vamos a necesitar poder confiar en que las fotos son de quien dice que son.", fecha: "2026-06-25T12:40:00-03:00" }
        ] }
    ],
    encuesta: null
  },

  {
    id: 2652,
    autor: "apicultor_florida",
    fecha: "2026-07-11T16:30:00-03:00",
    texto: "Este andaba en el camino de entrada, muy manso, me dejó acercarme bastante. No me animo a decir la especie porque los chicos grises me cuestan todos.\n\nAlguien lo tiene claro? Lo saqué a contraluz y capaz no ayuda.",
    imagen: "media/fotos/ave_6.jpg",
    grupo: "aves",
    likes: 52,
    comentarios: [
      { autor: "el_tero_viajero", texto: "Con esa foto no me juego, Selva. Necesitaría verle el pico de costado y la cola. Si vuelve, sacale una de perfil aunque salga lejos.", fecha: "2026-07-11T17:20:00-03:00" },
      { autor: "caro.veterinaria", texto: "Coincido en no arriesgar. Es preferible quedar sin nombre que anotar mal la especie: después esos datos los usa alguien.", fecha: "2026-07-11T18:00:00-03:00" }
    ],
    encuesta: null
  },

  {
    id: 2653,
    autor: "el_tero_viajero",
    fecha: "2026-07-29T09:15:00-03:00",
    texto: "Taguató común arriba del monte, esperando que se moviera algo abajo.\n\nSe quedó ahí casi veinte minutos. Después bajó y no vi qué agarró, pero algo agarró.",
    imagen: "media/fotos/ave_8.jpg",
    grupo: "aves",
    likes: 121,
    comentarios: [
      { autor: "salvavidas_rocha", texto: "Que buena. Yo desde la torre veo pasar pero nunca los tengo tan quietos.", fecha: "2026-07-29T10:40:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2700,
    autor: "chef_carmelo",
    fecha: "2026-07-18T13:00:00-03:00",
    texto: "Me van a matar pero lo tengo que decir. Despues de cuatro anos discutiendo con Zunilda: el chivito NO lleva huevo frito arriba obligatorio. Y la salsa golf en el chivito es una herejia. Ahi lo dije. Zuni, tenias razon en una cosa: el pan importa mas que el relleno.",
    imagen: null,
    grupo: "cocina",
    likes: 156,
    comentarios: [
      { autor: "pastelera.zuni", texto: "CUATRO ANOS me llevo. Lo tengo que imprimir y colgar en la cocina. Igual del huevo no me convenciste, Ignacio. Pero acepto la rendicion en el pan.", fecha: "2026-07-18T13:40:00-03:00",
        respuestas: [
          { autor: "chef_carmelo", texto: "Del huevo seguimos discutiendo entonces. Nos vemos en el proximo round jaja.", fecha: "2026-07-18T14:10:00-03:00" }
        ] },
      { autor: "sofi.tortasfritas", texto: "Me encanta ver esto. Dos que saben discutiendo con respeto. Aprendo de los dos.", fecha: "2026-07-18T15:00:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2701,
    autor: "el_tero_viajero",
    fecha: "2026-07-27T09:15:00-03:00",
    texto: "Ficha del dia. Tero (Vanellus chilensis). Lo ves en cualquier campo o cancha del pais. Territorial, escandaloso, hace nido en el suelo y arma nidos falsos para despistar al que se acerca. Cuando grita, algo se mueve cerca. La foto es de esta manana en la ruta, con la helada todavia.",
    imagen: null,
    grupo: "aves",
    likes: 92,
    comentarios: [
      { autor: "caro.veterinaria", texto: "Lo de los nidos falsos es real y es fascinante. Distraen al depredador lejos de los huevos de verdad.", fecha: "2026-07-27T10:00:00-03:00" },
      { autor: "salvavidas_rocha", texto: "En la playa fuera de temporada tengo tres o cuatro que ya son parte del paisaje. Me avisan cuando viene alguien antes que yo lo vea.", fecha: "2026-07-27T10:40:00-03:00" },
      { autor: "astro.mvd", texto: "Buena ficha Nicolas. Datos, no misterio. Asi da gusto.", fecha: "2026-07-27T11:20:00-03:00" }
    ],
    encuesta: null
  },
  {
    id: 2710,
    autor: "chef_carmelo",
    fecha: "2026-07-25T13:30:00-03:00",
    texto: "Ya que estamos con las verdades incomodas del grupo Cocina, otra encuesta. Sin insultos en los comentarios, por favor.",
    imagen: null,
    grupo: "cocina",
    likes: 134,
    comentarios: [
      { autor: "pastelera.zuni", texto: "El que vota salsa golf que se haga ver.", fecha: "2026-07-25T14:00:00-03:00" }
    ],
    encuesta: {
      pregunta: "El chivito canonico lleva:",
      opciones: [
        { texto: "Huevo frito arriba", votos: 1520 },
        { texto: "Sin huevo, va sobrecargado", votos: 610 },
        { texto: "Con salsa golf (el grupo lo repudia)", votos: 240 }
      ],
      cierra: "2026-08-08"
    }
  }
];
