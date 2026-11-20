/* =========================================================
   Mapa conceptual interactivo
   Medios y recursos didácticos en el proceso de enseñanza-aprendizaje
   ========================================================= */
(function () {
  'use strict';

  /* ---------------------------------------------------------
     1. CONTENIDO ACADÉMICO
     --------------------------------------------------------- */
  const Q = (q, o, a, e) => ({ q, o, a, e });
  const T = (id, label, icon, title, def, exp, x) =>
    Object.assign({ id, label, icon, title, def, exp }, x || {});

  /* Cada tipo de recurso genera dos nodos de detalle: ejemplos y Educación Física */
  function tipo(id, label, icon, nombre, def, ej, pe, exp, quiz) {
    return T(id, label, icon, 'Recursos ' + nombre, def, exp, {
      ej: ej,
      pe: pe,
      quiz: quiz,
      children: [
        T(id + '-ej', 'Ejemplos', '📋', 'Ejemplos de recursos ' + nombre,
          'Entre los recursos ' + nombre + ' se encuentran: ' + ej.join(', ').toLowerCase() + '.',
          'Cada uno de estos materiales cumple las características propias de los recursos ' + nombre +
          '. El docente elige entre ellos según el contenido que va a trabajar y las necesidades del grupo.',
          { car: ej }),
        T(id + '-ef', 'En Educación Física', '🏃', 'Recursos ' + nombre + ' en Educación Física',
          pe,
          'Así se aplican los recursos ' + nombre + ' en la clase de Educación Física: se adaptan a la práctica corporal, al juego y al deporte para que el estudiante comprenda y ejecute mejor cada movimiento.',
          {})
      ]
    });
  }

  const MAP = T('tema', 'Medios y recursos didácticos', '🎓',
    'Medios y recursos didácticos en el proceso de enseñanza-aprendizaje',
    'Conjunto de instrumentos, materiales y herramientas que acompañan el proceso de enseñanza-aprendizaje y que el docente selecciona para que los estudiantes comprendan los contenidos, desarrollen competencias y participen de manera activa en las clases.',
    'Este es el tema central del mapa. De él se desprenden seis ramas: el concepto de medios y recursos, su clasificación según la Ordenanza 26-2017, los principios, las funciones, la vinculación con el currículo dominicano y la importancia que tienen en el aula. Selecciona cada rama y cada concepto para ver su definición, sus ejemplos en Educación Física y una pregunta para comprobar lo aprendido.',
    {
      car: ['Apoyan los procesos de enseñanza y aprendizaje.', 'Se seleccionan según los contenidos y las competencias.', 'Deben tener coherencia con el currículo dominicano.'],
      pe: 'En una clase de Educación Física el docente combina balones, conos, silbato, carteles, videos y aplicaciones para que los estudiantes practiquen, observen y evalúen sus movimientos.',
      quiz: Q('¿Cuál es la finalidad principal de los medios y recursos didácticos?',
        ['Sustituir la planificación del docente', 'Facilitar los procesos de enseñanza y aprendizaje', 'Reemplazar la evaluación de los aprendizajes'], 1,
        'Los medios y recursos apoyan la enseñanza y el aprendizaje; no sustituyen al docente, a la planificación ni a la evaluación.'),
      children: [

        /* ================= 1. CONCEPTO ================= */
        T('concepto', 'Concepto', '💡', 'Concepto de medios y recursos para el aprendizaje',
          'Rama que reúne la definición de los medios y recursos para el aprendizaje y las características que los distinguen en el aula.',
          'Un medio o recurso se vuelve didáctico cuando el docente lo elige con una intención pedagógica clara. No basta con tener el material: hace falta usarlo para que el estudiante construya su propio aprendizaje, practique y relacione lo que aprende con situaciones reales.',
          {
            car: ['Definición de los medios y recursos para el aprendizaje.', 'Seis características que los identifican.'],
            pe: 'Un balón, un cono o un video de una técnica deportiva son recursos que el docente usa con un propósito: enseñar un movimiento y lograr que el estudiante lo ejecute correctamente.',
            quiz: Q('¿Qué ideas incluye el concepto de medios y recursos para el aprendizaje?',
              ['Solo sirven para entretener a los estudiantes', 'Promueven el autoaprendizaje y estimulan la imaginación y la creatividad', 'Se usan únicamente al final de la clase'], 1,
              'La definición destaca que facilitan la enseñanza y el aprendizaje, desarrollan competencias, promueven el autoaprendizaje y estimulan la creatividad.'),
            children: [
              T('definicion', 'Definición', '📖', 'Definición de medios y recursos',
                'Son instrumentos, materiales y herramientas que facilitan los procesos de enseñanza y aprendizaje, favorecen el desarrollo de competencias, ayudan a organizar el conocimiento, facilitan la investigación, promueven el autoaprendizaje y estimulan la imaginación y la creatividad.',
                'La definición señala que los medios y recursos son de distinta naturaleza (instrumentos, materiales y herramientas) y que cumplen varios propósitos a la vez: ayudan al docente a enseñar y al estudiante a aprender, a organizar lo que sabe, a investigar y a trabajar de forma autónoma.',
                {
                  car: ['Facilitan los procesos de enseñanza y aprendizaje.', 'Favorecen el desarrollo de competencias.', 'Ayudan a organizar el conocimiento.', 'Facilitan la investigación.', 'Promueven el autoaprendizaje.', 'Estimulan la imaginación y la creatividad.'],
                  pe: 'En Educación Física, un cuadro con las fases de un movimiento ayuda a organizar el conocimiento, y un balón permite practicarlo.',
                  quiz: Q('Según la definición, ¿qué tipo de elementos son los medios y recursos?',
                    ['Instrumentos, materiales y herramientas', 'Únicamente aparatos electrónicos', 'Solamente libros de texto'], 0,
                    'La definición menciona instrumentos, materiales y herramientas; no se limita a la tecnología ni a los libros.')
                }),
              T('caracteristicas', 'Características', '⭐', 'Características de los medios y recursos',
                'Son los rasgos que permiten reconocer cuándo un material cumple una función educativa dentro del proceso de enseñanza-aprendizaje.',
                'Las seis características muestran que un recurso didáctico no es un simple objeto: ayuda a entender, motiva a participar, permite practicar, despierta la creatividad, fortalece las competencias y mejora la comunicación en el aula.',
                {
                  car: ['Facilitan la comprensión de los contenidos.', 'Promueven la participación de los estudiantes.', 'Favorecen el aprendizaje práctico.', 'Estimulan la creatividad.', 'Apoyan el desarrollo de competencias.', 'Facilitan la comunicación entre docentes y estudiantes.'],
                  pe: 'Un circuito con conos y aros comprende varias de ellas a la vez: se entiende la tarea, todos participan, se aprende haciendo y se pueden inventar variantes.',
                  quiz: Q('¿Cuál de estas es una característica de los recursos didácticos?',
                    ['Impiden la participación', 'Evitan el aprendizaje práctico', 'Facilitan la comunicación entre docentes y estudiantes'], 2,
                    'Una de las características es que facilitan la comunicación entre docentes y estudiantes.'),
                  children: [
                    T('car1', 'Comprensión de los contenidos', '🔍', 'Facilitan la comprensión de los contenidos',
                      'Facilitan la comprensión de los contenidos.',
                      'Un recurso bien elegido vuelve concreta una idea abstracta. Cuando el estudiante puede ver, escuchar o manipular, entiende con más rapidez y recuerda mejor.',
                      { pe: 'Un diagrama de la cancha ayuda a entender las posiciones de los jugadores antes de practicar.' }),
                    T('car2', 'Participación', '🙋', 'Promueven la participación de los estudiantes',
                      'Promueven la participación de los estudiantes.',
                      'Los recursos invitan a los estudiantes a intervenir, opinar, probar y colaborar, en lugar de limitarse a escuchar.',
                      { pe: 'Un circuito con conos y aros hace que todos los estudiantes se muevan y trabajen juntos.' }),
                    T('car3', 'Aprendizaje práctico', '🛠️', 'Favorecen el aprendizaje práctico',
                      'Favorecen el aprendizaje práctico.',
                      'Permiten aprender haciendo. La experiencia directa con los materiales ayuda a convertir los conocimientos en habilidades.',
                      { pe: 'Practicar el drible con balones permite aprender la técnica mediante la repetición y la corrección.' }),
                    T('car4', 'Creatividad', '✨', 'Estimulan la creatividad',
                      'Estimulan la creatividad.',
                      'Los materiales abiertos permiten que el estudiante invente, combine y proponga nuevas formas de usarlos.',
                      { pe: 'Con cuerdas, aros y conos los estudiantes pueden inventar juegos y circuitos propios.' }),
                    T('car5', 'Desarrollo de competencias', '🎯', 'Apoyan el desarrollo de competencias',
                      'Apoyan el desarrollo de competencias.',
                      'Al ofrecer situaciones concretas de práctica, los recursos ayudan al estudiante a usar sus conocimientos, habilidades y actitudes.',
                      { pe: 'Un video de la técnica del lanzamiento permite analizarla y mejorarla en la práctica.' }),
                    T('car6', 'Comunicación', '💬', 'Facilitan la comunicación entre docentes y estudiantes',
                      'Facilitan la comunicación entre docentes y estudiantes.',
                      'Sirven como puente entre lo que el docente quiere transmitir y lo que el estudiante necesita comprender.',
                      { pe: 'El silbato y las señales visuales permiten dar indicaciones claras durante la actividad.' })
                  ]
                })
            ]
          }),

        /* ================= 2. CLASIFICACIÓN ================= */
        T('clasificacion', 'Clasificación', '🗂️', 'Clasificación y tipos de recursos didácticos',
          'Según el artículo 6 de la Ordenanza 26-2017, los medios y recursos didácticos se clasifican en seis categorías: impresos, auditivos, visuales, audiovisuales, manipulativos y tecnológicos.',
          'Cada categoría se distingue por el canal o el sentido que utiliza para transmitir la información: la lectura, el oído, la vista, la combinación de imagen y sonido, el contacto directo con objetos y las herramientas tecnológicas. Un mismo recurso puede combinar varias categorías, y el docente decide cuál es la más adecuada según el contenido y el grupo.',
          {
            car: ['Recursos impresos', 'Recursos auditivos', 'Recursos visuales', 'Recursos audiovisuales', 'Recursos manipulativos', 'Recursos tecnológicos'],
            pe: 'Una misma clase de baloncesto puede usar una ficha impresa, un silbato, un cartel de posiciones, un video, balones y una aplicación para registrar la actividad.',
            quiz: Q('¿Cuántas categorías de recursos didácticos establece el artículo 6 de la Ordenanza 26-2017?',
              ['Cuatro', 'Seis', 'Ocho'], 1,
              'El artículo 6 clasifica los recursos en seis categorías: impresos, auditivos, visuales, audiovisuales, manipulativos y tecnológicos.'),
            children: [
              tipo('impresos', 'Recursos impresos', '📚', 'impresos',
                'Materiales educativos presentados mediante la lengua escrita, representaciones gráficas e imágenes.',
                ['Libros de texto', 'Libros de consulta', 'Diccionarios', 'Enciclopedias', 'Guías didácticas', 'Manuales', 'Fichas de actividades'],
                'Guías de ejercicios, fichas de evaluación física, libros de deportes y reglamentos deportivos.',
                'Se apoyan en la lectura y en la observación de gráficos e imágenes. Son útiles porque el estudiante puede consultarlos varias veces, a su propio ritmo, dentro y fuera del aula.',
                Q('¿Cuál de los siguientes es un recurso impreso?',
                  ['Un video de una técnica deportiva', 'Una guía didáctica', 'Un silbato'], 1,
                  'Las guías didácticas presentan la información por escrito, por eso son recursos impresos.')),
              tipo('auditivos', 'Recursos auditivos', '🎧', 'auditivos',
                'Recursos que transmiten información mediante sonidos y permiten recibir instrucciones y contenidos a través del oído.',
                ['Grabaciones de audio', 'Narraciones', 'Instrucciones orales', 'Música', 'Silbatos'],
                'Música para actividades rítmicas, instrucciones de ejercicios y señales sonoras.',
                'Dependen del sentido del oído. Permiten dar indicaciones sin acercarse a cada estudiante y ayudan a marcar ritmos, tiempos e inicios o finales de una actividad.',
                Q('¿Qué recurso auditivo se usa en las actividades rítmicas?',
                  ['Los carteles', 'Las láminas', 'La música'], 2,
                  'La música es un recurso auditivo que marca el ritmo en las actividades rítmicas.')),
              tipo('visuales', 'Recursos visuales', '👁️', 'visuales',
                'Materiales que presentan información mediante imágenes, ilustraciones, símbolos y representaciones gráficas.',
                ['Fotografías', 'Carteles', 'Láminas', 'Diagramas', 'Ilustraciones', 'Señales'],
                'Carteles de posiciones deportivas, imágenes de movimientos técnicos y diagramas de una cancha.',
                'Transmiten la información por medio de la vista. Son muy útiles para mostrar posiciones, trayectorias o secuencias de movimiento que resultan difíciles de explicar solo con palabras.',
                Q('¿Qué recurso visual muestra la posición de los jugadores en la cancha?',
                  ['Un diagrama de la cancha', 'Una grabación de audio', 'Un balón'], 0,
                  'Un diagrama es una representación gráfica, por eso es un recurso visual.')),
              tipo('audiovisuales', 'Recursos audiovisuales', '🎬', 'audiovisuales',
                'Son recursos que utilizan imágenes y sonidos para transmitir información y apoyar el aprendizaje.',
                ['Videos educativos', 'Documentales', 'Tutoriales', 'Presentaciones multimedia', 'Grabaciones de demostraciones'],
                'Videos de técnicas deportivas, demostraciones de ejercicios y análisis de movimientos.',
                'Combinan imagen y sonido, lo que permite observar un movimiento mientras se escucha su explicación. Se pueden pausar y repetir para analizar los detalles de una técnica.',
                Q('¿Qué distingue a los recursos audiovisuales?',
                  ['Usan solo texto escrito', 'Combinan imágenes y sonidos', 'Dependen únicamente del tacto'], 1,
                  'Los recursos audiovisuales utilizan imágenes y sonidos al mismo tiempo.')),
              tipo('manipulativos', 'Recursos manipulativos', '🏀', 'manipulativos',
                'Son materiales concretos que permiten la interacción práctica y ayudan a desarrollar conocimientos conceptuales, procedimentales y actitudinales.',
                ['Pelotas', 'Conos', 'Aros', 'Cuerdas', 'Balones', 'Materiales deportivos', 'Mapas y maquetas'],
                'Balones de baloncesto, conos para circuitos, cuerdas para saltar, aros y vallas.',
                'Son objetos concretos que el estudiante toca, mueve y utiliza. Son la base del aprendizaje práctico, porque permiten aprender haciendo y relacionar la teoría con la acción.',
                Q('¿Cuál de estos materiales es manipulativo?',
                  ['Una enciclopedia', 'Un conjunto de conos y aros', 'Una plataforma educativa'], 1,
                  'Los conos y los aros son materiales concretos que el estudiante manipula.')),
              tipo('tecnologicos', 'Recursos tecnológicos', '💻', 'tecnológicos',
                'Son herramientas, soportes y canales tecnológicos que permiten acceder, utilizar y manipular información.',
                ['Computadoras', 'Tabletas', 'Internet', 'Plataformas educativas', 'Aplicaciones digitales', 'Software educativo', 'Páginas web'],
                'Aplicaciones para registrar actividad física, videos de ejercicios, cuestionarios digitales y videojuegos educativos.',
                'Incluyen equipos y herramientas digitales que permiten buscar, usar y producir información. Amplían las posibilidades del aula al conectar con internet, aplicaciones y plataformas.',
                Q('¿Qué recurso tecnológico puede usarse para registrar la actividad física?',
                  ['Un silbato', 'Un cono', 'Una aplicación digital'], 2,
                  'Las aplicaciones digitales son recursos tecnológicos que permiten registrar la actividad física.'))
            ]
          }),

        /* ================= 3. PRINCIPIOS ================= */
        T('principios', 'Principios', '🧭', 'Principios de los recursos didácticos',
          'Según el artículo 7, los recursos didácticos se fundamentan en dos principios: el desarrollo integral de la persona y la interpretación del currículo y la sociedad.',
          'Los principios orientan la selección y el uso de los recursos. Indican que un material no se elige solo porque sea atractivo, sino porque contribuye a la formación completa del estudiante y refleja los valores y las necesidades de la sociedad.',
          {
            car: ['Desarrollo integral de la persona.', 'Interpretación del currículo y la sociedad.'],
            pe: 'Al elegir los materiales para una clase, el docente se pregunta si ayudan a que cada estudiante se desarrolle y si respetan valores como la inclusión y la sostenibilidad.',
            quiz: Q('¿Cuántos principios de los recursos didácticos se mencionan en el artículo 7?',
              ['Dos', 'Cinco', 'Diez'], 0,
              'El artículo 7 presenta dos principios: el desarrollo integral de la persona y la interpretación del currículo y la sociedad.'),
            children: [
              T('p1', 'Desarrollo integral de la persona', '🌱', 'Desarrollo integral de la persona',
                'Reconocer al estudiante como un ser autónomo y en constante desarrollo.',
                'Los recursos deben atender las dimensiones física, cognitiva, emocional y social del estudiante y respetar su ritmo y sus características. No se trata solo de transmitir información, sino de ayudar a que cada estudiante crezca como persona.',
                {
                  car: ['El estudiante es un ser autónomo.', 'El estudiante está en constante desarrollo.'],
                  pe: 'Un circuito con distintos niveles de dificultad permite que cada estudiante avance a su ritmo y gane autonomía.',
                  quiz: Q('¿Cómo reconoce este principio al estudiante?',
                    ['Como un receptor pasivo de información', 'Como un ser autónomo y en constante desarrollo', 'Como un usuario de tecnología únicamente'], 1,
                    'El principio reconoce al estudiante como un ser autónomo y en constante desarrollo.')
                }),
              T('p2', 'Interpretación del currículo y la sociedad', '🌎', 'Interpretación del currículo y la sociedad',
                'Promover los derechos, valores, inclusión, sostenibilidad y pensamiento crítico.',
                'Los recursos deben ayudar a interpretar lo que el currículo propone y lo que la sociedad necesita. Por eso se eligen materiales que promuevan el respeto, la participación de todos, el cuidado del ambiente y la reflexión.',
                {
                  car: ['Derechos.', 'Valores.', 'Inclusión.', 'Sostenibilidad.', 'Pensamiento crítico.'],
                  pe: 'Usar materiales reciclados para los juegos y organizar actividades donde todos participen, sin discriminación, promueve la sostenibilidad y la inclusión.',
                  quiz: Q('¿Cuáles de estos aspectos promueve este principio?',
                    ['La competencia entre estudiantes', 'La memorización de reglas', 'La inclusión y el pensamiento crítico'], 2,
                    'Este principio promueve derechos, valores, inclusión, sostenibilidad y pensamiento crítico.')
                })
            ]
          }),

        /* ================= 4. FUNCIONES ================= */
        T('funciones', 'Funciones', '⚙️', 'Funciones de los medios y recursos didácticos',
          'Según el artículo 8, los medios y recursos didácticos cumplen diez funciones dentro del proceso de enseñanza y aprendizaje.',
          'Las funciones muestran para qué sirven los recursos: van desde presentar información concreta hasta motivar, fomentar valores, favorecer el trabajo colaborativo y apoyar distintos niveles de abstracción del aprendizaje.',
          {
            car: ['Facilitar el desarrollo de competencias.', 'Presentar hechos e informaciones concretas.', 'Ayudar a construir y movilizar conocimientos.', 'Estimular la imaginación y creatividad.', 'Fomentar valores y actitudes críticas.', 'Orientar la toma de decisiones.', 'Promover la motivación por aprender.', 'Estimular el autoaprendizaje.', 'Favorecer la comunicación y el trabajo colaborativo.', 'Facilitar el aprendizaje concreto, semiconcreto y abstracto.'],
            pe: 'Una misma actividad, como un torneo de mini baloncesto, puede cumplir varias funciones: motivar, trabajar en equipo, fomentar valores y desarrollar habilidades motrices.',
            quiz: Q('¿En qué artículo se establecen las funciones de los medios y recursos didácticos?',
              ['Artículo 6', 'Artículo 7', 'Artículo 8'], 2,
              'Las funciones se establecen en el artículo 8; la clasificación está en el artículo 6 y los principios en el 7.'),
            children: [
              T('f1', 'Desarrollo de competencias', '🎯', 'Facilitar el desarrollo de competencias',
                'Los recursos facilitan que el estudiante desarrolle competencias, es decir, la capacidad de usar conocimientos, habilidades y actitudes en situaciones reales.',
                'Al ofrecer experiencias concretas de práctica, los recursos permiten que el estudiante pase de conocer a saber hacer.',
                {
                  pe: 'Los balones y los conos permiten practicar el pase, el drible y el lanzamiento hasta dominarlos.',
                  quiz: Q('Cuando un recurso facilita el desarrollo de competencias, el estudiante...',
                    ['solo memoriza información', 'aprende a usar conocimientos, habilidades y actitudes', 'deja de practicar'], 1,
                    'Las competencias implican usar conocimientos, habilidades y actitudes en situaciones reales.')
                }),
              T('f2', 'Hechos e informaciones concretas', '📊', 'Presentar hechos e informaciones concretas',
                'Los recursos presentan datos, hechos e informaciones concretas que el estudiante puede observar, consultar y analizar.',
                'En lugar de depender solo de la explicación oral, el docente muestra la información en tablas, láminas, videos o reglamentos, lo que la hace más clara y verificable.',
                {
                  pe: 'Un cartel con las medidas de la cancha o las reglas del juego presenta la información de forma clara.',
                  quiz: Q('¿Qué ofrece un reglamento deportivo impreso en esta función?',
                    ['Información concreta que se puede consultar', 'Un reemplazo de la práctica', 'Una forma de evitar preguntas'], 0,
                    'Los recursos presentan hechos e informaciones concretas que se pueden consultar y analizar.')
                }),
              T('f3', 'Construir y movilizar conocimientos', '🧩', 'Ayudar a construir y movilizar conocimientos',
                'Los recursos ayudan al estudiante a construir nuevos conocimientos y a movilizarlos, es decir, a usarlos en situaciones distintas.',
                'Aprender no consiste en acumular datos. Los recursos permiten relacionar lo que ya se sabe con lo nuevo y aplicarlo en problemas o actividades reales.',
                {
                  pe: 'Después de aprender el pase en una demostración, el estudiante lo usa en un juego de equipo con balones y conos.',
                  quiz: Q('Movilizar un conocimiento significa...',
                    ['repetirlo sin usarlo', 'copiarlo del libro', 'aplicarlo en nuevas situaciones'], 2,
                    'Movilizar un conocimiento es usarlo en situaciones distintas a las que se aprendió.')
                }),
              T('f4', 'Imaginación y creatividad', '✨', 'Estimular la imaginación y creatividad',
                'Los recursos despiertan la imaginación y estimulan la creatividad de los estudiantes.',
                'Cuando los materiales permiten distintos usos, el estudiante propone, inventa y resuelve de maneras propias.',
                {
                  pe: 'Los estudiantes inventan un circuito propio con aros, cuerdas y conos.',
                  quiz: Q('¿Qué actividad estimula la imaginación y creatividad?',
                    ['Inventar un circuito propio con aros y conos', 'Copiar las reglas del cuaderno', 'Observar sin participar'], 0,
                    'Crear un circuito propio pone en juego la imaginación y la creatividad.')
                }),
              T('f5', 'Valores y actitudes críticas', '⚖️', 'Fomentar valores y actitudes críticas',
                'Los recursos contribuyen a fomentar valores y actitudes críticas en los estudiantes.',
                'Mediante juegos, videos o situaciones de equipo, el estudiante reflexiona sobre el respeto, la responsabilidad, la cooperación y el juego limpio.',
                {
                  pe: 'Un juego cooperativo con materiales compartidos enseña respeto, solidaridad y juego limpio.',
                  quiz: Q('Fomentar valores y actitudes críticas implica...',
                    ['obedecer sin cuestionar', 'reflexionar y actuar con respeto y juicio propio', 'competir a cualquier costo'], 1,
                    'Las actitudes críticas llevan al estudiante a reflexionar y a actuar con respeto y juicio propio.')
                }),
              T('f6', 'Toma de decisiones', '🧭', 'Orientar la toma de decisiones',
                'Los recursos aportan información que ayuda a los estudiantes y al docente a decidir con criterio.',
                'Con datos, imágenes o resultados concretos, es más fácil elegir una estrategia, corregir un error o ajustar la actividad.',
                {
                  pe: 'Al ver un video de su desempeño, el estudiante decide qué parte de la técnica necesita mejorar.',
                  quiz: Q('¿Cómo orientan los recursos la toma de decisiones?',
                    ['Deciden por el estudiante', 'Aportan información para elegir con criterio', 'No tienen relación con las decisiones'], 1,
                    'Los recursos ofrecen información que ayuda a decidir con criterio.')
                }),
              T('f7', 'Motivación por aprender', '🔥', 'Promover la motivación por aprender',
                'Los recursos despiertan el interés y promueven la motivación por aprender.',
                'Un material atractivo, variado y cercano a los intereses del grupo mejora la disposición para participar y aprender.',
                {
                  pe: 'Una música animada y materiales de colores aumentan las ganas de participar en la clase.',
                  quiz: Q('¿Qué efecto tienen los recursos atractivos en los estudiantes?',
                    ['Disminuyen el interés', 'No cambian nada', 'Aumentan la motivación por aprender'], 2,
                    'Los recursos atractivos promueven la motivación por aprender.')
                }),
              T('f8', 'Autoaprendizaje', '📖', 'Estimular el autoaprendizaje',
                'Los recursos estimulan que el estudiante aprenda de manera autónoma.',
                'Con guías, videos, aplicaciones o fichas, el estudiante puede explorar, practicar y consultar por su cuenta.',
                {
                  pe: 'Una ficha de ejercicios o una aplicación permite practicar en casa y registrar el progreso personal.',
                  quiz: Q('El autoaprendizaje se estimula cuando el estudiante...',
                    ['depende siempre del docente', 'explora y consulta recursos por su cuenta', 'solo escucha'], 1,
                    'El autoaprendizaje se apoya en recursos que el estudiante puede usar de manera autónoma.')
                }),
              T('f9', 'Comunicación y trabajo colaborativo', '🤝', 'Favorecer la comunicación y el trabajo colaborativo',
                'Los recursos favorecen la comunicación entre los participantes y el trabajo en equipo.',
                'Las actividades con materiales compartidos obligan a dialogar, repartir tareas y tomar acuerdos.',
                {
                  pe: 'Una actividad por equipos con balones y conos exige comunicarse y coordinar acciones.',
                  quiz: Q('¿Qué actividad favorece el trabajo colaborativo?',
                    ['Una actividad por equipos con balones y conos', 'Un examen individual escrito', 'Una lectura silenciosa'], 0,
                    'El trabajo por equipos con materiales compartidos favorece la comunicación y la colaboración.')
                }),
              T('f10', 'Aprendizaje concreto y abstracto', '🔷', 'Facilitar el aprendizaje concreto, semiconcreto y abstracto',
                'Los recursos permiten que el aprendizaje avance desde lo concreto, pasando por lo semiconcreto, hasta lo abstracto.',
                'El aprendizaje concreto se apoya en objetos reales, como un balón. El semiconcreto usa representaciones, como una lámina o un video. El abstracto trabaja con símbolos y conceptos, como reglas, esquemas o fórmulas.',
                {
                  car: ['Concreto: objetos reales.', 'Semiconcreto: imágenes y representaciones.', 'Abstracto: símbolos y conceptos.'],
                  pe: 'Se practica con el balón (concreto), se observa un video de la jugada (semiconcreto) y se explica la regla o la táctica (abstracto).',
                  quiz: Q('Una lámina o un video corresponden a un aprendizaje...',
                    ['concreto', 'semiconcreto', 'abstracto'], 1,
                    'Las representaciones como láminas o videos corresponden al aprendizaje semiconcreto.')
                })
            ]
          }),

        /* ================= 5. VINCULACIÓN CURRICULAR ================= */
        T('vinculacion', 'Vinculación curricular', '🔗', 'Vinculación con el currículo dominicano',
          'Según el artículo 12, los recursos deben tener coherencia con los componentes curriculares: competencias, contenidos, estrategias de enseñanza y aprendizaje, actividades, evaluación y los propios medios y recursos.',
          'Un recurso no se elige al azar. Debe estar alineado con lo que se quiere lograr (competencias), con lo que se enseña (contenidos), con la forma de enseñar (estrategias), con lo que hacen los estudiantes (actividades) y con la manera de comprobar el aprendizaje (evaluación).',
          {
            car: ['Competencias', 'Contenidos', 'Estrategias de enseñanza y aprendizaje', 'Actividades', 'Evaluación', 'Medios y recursos'],
            pe: 'En Educación Física, el docente decide los materiales después de definir qué competencia quiere desarrollar y cómo va a evaluar.',
            flow: {
              items: [
                { k: 'Competencias', v: 'Lo que el estudiante debe lograr.' },
                { k: 'Contenidos', v: 'Lo que se enseña y se aprende.' },
                { k: 'Estrategias', v: 'La forma en que el docente enseña.' },
                { k: 'Actividades', v: 'Lo que los estudiantes hacen.' },
                { k: 'Medios y recursos', v: 'Las herramientas que facilitan todo el proceso.', hl: true },
                { k: 'Evaluación', v: 'La comprobación de los aprendizajes.' }
              ],
              note: 'Los medios y recursos conectan los demás componentes: sin ellos las actividades pierden apoyo y la evaluación pierde evidencias.'
            },
            quiz: Q('¿Qué artículo exige coherencia entre los recursos y los componentes curriculares?',
              ['Artículo 12', 'Artículo 6', 'Artículo 8'], 0,
              'El artículo 12 establece que los recursos deben tener coherencia con los componentes curriculares.'),
            children: [
              T('v1', 'Competencias', '🏅', 'Competencias',
                'Capacidades que desarrollan los estudiantes para utilizar conocimientos, habilidades y actitudes en diferentes situaciones.',
                'Son el punto de partida: el docente primero define qué competencia quiere desarrollar y después elige los recursos que le ayudarán a lograrla.',
                {
                  pe: 'Para la competencia de coordinación y trabajo en equipo se eligen balones, conos y juegos por equipos.',
                  quiz: Q('¿Qué son las competencias?',
                    ['Capacidades para utilizar conocimientos, habilidades y actitudes en distintas situaciones', 'Listas de materiales deportivos', 'Instrumentos para medir el tiempo'], 0,
                    'Las competencias son capacidades para usar conocimientos, habilidades y actitudes en diferentes situaciones.')
                }),
              T('v2', 'Contenidos', '📚', 'Contenidos',
                'Conocimientos, procedimientos y actitudes que se trabajan durante el proceso educativo.',
                'Los contenidos pueden ser conceptuales (saber), procedimentales (saber hacer) y actitudinales (saber ser). Cada uno requiere recursos distintos.',
                {
                  car: ['Conocimientos.', 'Procedimientos.', 'Actitudes.'],
                  pe: 'Un cartel con las reglas (conocimiento), un balón para practicar (procedimiento) y un juego en equipo (actitud).',
                  quiz: Q('Los contenidos comprenden...',
                    ['Solo datos memorizados', 'Conocimientos, procedimientos y actitudes', 'Únicamente la evaluación'], 1,
                    'Los contenidos incluyen conocimientos, procedimientos y actitudes.')
                }),
              T('v3', 'Estrategias de enseñanza', '🧠', 'Estrategias de enseñanza y aprendizaje',
                'Métodos y procedimientos que utiliza el docente para facilitar la construcción de conocimientos.',
                'La estrategia determina cómo se usan los recursos: se pueden emplear para demostrar, explicar, practicar, investigar o trabajar en grupo.',
                {
                  pe: 'La demostración, la explicación y la práctica guiada usan videos, carteles y balones de manera distinta.',
                  quiz: Q('¿Qué son las estrategias de enseñanza y aprendizaje?',
                    ['Resultados de los exámenes', 'Materiales impresos únicamente', 'Métodos y procedimientos que usa el docente para facilitar la construcción de conocimientos'], 2,
                    'Son los métodos y procedimientos que el docente utiliza para facilitar la construcción de conocimientos.')
                }),
              T('v4', 'Actividades', '🏃', 'Actividades',
                'Acciones y experiencias que realizan los estudiantes para desarrollar los aprendizajes.',
                'Son el espacio donde los recursos se usan realmente. Una buena actividad combina un propósito claro con materiales adecuados.',
                {
                  pe: 'Ejercicios de pases en parejas, circuitos de drible con conos y lanzamientos al aro.',
                  quiz: Q('¿Qué son las actividades dentro del currículo?',
                    ['Acciones y experiencias que realizan los estudiantes para desarrollar los aprendizajes', 'Normas administrativas del centro', 'Calificaciones finales'], 0,
                    'Las actividades son las acciones y experiencias de los estudiantes para desarrollar aprendizajes.')
                }),
              T('v5', 'Evaluación', '✅', 'Evaluación',
                'Proceso mediante el cual se comprueba el desarrollo de los aprendizajes y el logro de las competencias.',
                'Los recursos también sirven para evaluar: fichas, listas de cotejo, videos o aplicaciones permiten registrar evidencias del desempeño.',
                {
                  pe: 'Una ficha de observación permite evaluar la ejecución del pase, el drible y el lanzamiento.',
                  quiz: Q('¿Para qué sirve la evaluación?',
                    ['Para decidir qué materiales comprar', 'Para comprobar el desarrollo de los aprendizajes y el logro de las competencias', 'Para sustituir las actividades'], 1,
                    'La evaluación comprueba el desarrollo de los aprendizajes y el logro de las competencias.')
                }),
              T('v6', 'Medios y recursos', '🧰', 'Medios y recursos',
                'Herramientas y materiales seleccionados para facilitar el desarrollo de los contenidos y las competencias.',
                'Son el componente que apoya a todos los demás. Se seleccionan después de definir competencias, contenidos, estrategias y actividades, y deben ser coherentes con ellos.',
                {
                  pe: 'Balones, conos, silbato, cancha y videos educativos para el tema de baloncesto.',
                  quiz: Q('Los medios y recursos son seleccionados para...',
                    ['Decorar el aula', 'Reducir el tiempo de clase', 'Facilitar el desarrollo de los contenidos y las competencias'], 2,
                    'Se seleccionan para facilitar el desarrollo de los contenidos y las competencias.')
                }),

              T('ejemplo', 'Ejemplo: baloncesto', '🏀', 'Ejemplo de vinculación curricular en Educación Física',
                'Tema: Fundamentos básicos del baloncesto. Muestra cómo cada componente del currículo se relaciona con los recursos didácticos.',
                'Los recursos (balones, conos, silbato, cancha y videos educativos) están presentes en todo el proceso: el video explica, los balones y conos permiten practicar, el silbato organiza la actividad y la observación del desempeño permite evaluar. Así, los recursos funcionan como un puente que conecta las competencias con las actividades y la evaluación, hasta alcanzar los objetivos curriculares.',
                {
                  flow: {
                    items: [
                      { k: 'Competencia', v: 'Desarrollar habilidades motrices, coordinación y trabajo en equipo.' },
                      { k: 'Contenidos', v: 'Pase, drible y lanzamiento.' },
                      { k: 'Estrategia', v: 'Demostración, explicación y práctica guiada.' },
                      { k: 'Actividades', v: 'Ejercicios de pases, circuitos de drible y lanzamientos al aro.' },
                      { k: 'Recursos', v: 'Balones, conos, silbato, cancha y videos educativos.', hl: true },
                      { k: 'Evaluación', v: 'Observación del desempeño, participación y ejecución de los fundamentos técnicos.' }
                    ],
                    note: 'Los recursos hacen posible la práctica, dan evidencias para evaluar y permiten alcanzar la competencia planteada.'
                  },
                  pe: 'El video muestra la técnica, los balones permiten practicarla, los conos organizan el circuito y el silbato marca los tiempos.',
                  quiz: Q('En el ejemplo del baloncesto, ¿qué recursos se mencionan?',
                    ['Balones, conos, silbato, cancha y videos educativos', 'Solo libros y cuadernos', 'Computadoras y proyectores únicamente'], 0,
                    'El ejemplo menciona balones, conos, silbato, cancha y videos educativos.'),
                  children: [
                    T('e1', 'Competencia', '🏅', 'Competencia en el ejemplo de baloncesto',
                      'Desarrollar habilidades motrices, coordinación y trabajo en equipo.',
                      'Es la meta de la clase. Los balones, los conos y los juegos por equipos son los medios para alcanzarla.', {}),
                    T('e2', 'Contenidos', '📚', 'Contenidos en el ejemplo de baloncesto',
                      'Pase, drible y lanzamiento.',
                      'Son los fundamentos técnicos que se enseñan. Los videos y los carteles ayudan a entender cómo se ejecutan.', {}),
                    T('e3', 'Estrategia', '🧠', 'Estrategia en el ejemplo de baloncesto',
                      'Demostración, explicación y práctica guiada.',
                      'El docente demuestra, explica con apoyo de carteles o videos y guía la práctica con balones y conos.', {}),
                    T('e4', 'Actividades', '🏃', 'Actividades en el ejemplo de baloncesto',
                      'Ejercicios de pases, circuitos de drible y lanzamientos al aro.',
                      'Son las tareas de los estudiantes. En cada una se usan recursos: balones para pasar, conos para el circuito y aros para lanzar.', {}),
                    T('e5', 'Recursos', '🧰', 'Recursos en el ejemplo de baloncesto',
                      'Balones, conos, silbato, cancha y videos educativos.',
                      'Son el componente que conecta todo el proceso: permiten explicar, practicar, organizar el grupo y obtener evidencias para evaluar.', {}),
                    T('e6', 'Evaluación', '✅', 'Evaluación en el ejemplo de baloncesto',
                      'Observación del desempeño, participación y ejecución de los fundamentos técnicos.',
                      'El docente observa cómo el estudiante usa los recursos y cómo ejecuta el pase, el drible y el lanzamiento para comprobar si alcanzó la competencia.', {})
                  ]
                })
            ]
          }),

        /* ================= 6. IMPORTANCIA ================= */
        T('importancia', 'Importancia', '🚀', 'Importancia de los recursos didácticos',
          'Los recursos didácticos son importantes porque transforman el aula en un espacio activo, comprensible, participativo e inclusivo, donde la teoría se conecta con la práctica y los estudiantes se sienten motivados a aprender.',
          'Su valor no está en el material en sí, sino en lo que hace posible: clases más dinámicas, mejor comprensión, participación, inclusión y desarrollo de competencias.',
          {
            car: ['Hacen las clases más dinámicas.', 'Facilitan la comprensión.', 'Promueven la participación.', 'Relacionan la teoría con la práctica.', 'Favorecen la inclusión.', 'Desarrollan habilidades y competencias.', 'Aumentan la motivación de los estudiantes.'],
            pe: 'Una clase de Educación Física con materiales variados es más activa, más comprensible y más motivadora que una explicación solo con palabras.',
            quiz: Q('¿Por qué son importantes los recursos didácticos en el aula?',
              ['Porque eliminan la necesidad de practicar', 'Porque hacen las clases más dinámicas y facilitan la comprensión', 'Porque reducen la participación'], 1,
              'Los recursos hacen las clases más dinámicas y facilitan la comprensión.'),
            children: [
              T('i1', 'Clases más dinámicas', '⚡', 'Hacen las clases más dinámicas',
                'Hacen las clases más dinámicas.',
                'La variedad de materiales rompe la monotonía y mantiene la atención del grupo.',
                {
                  pe: 'Alternar un video, un circuito y un juego mantiene activa la clase.',
                  quiz: Q('¿Qué ocurre cuando se usan recursos variados?',
                    ['Las clases se vuelven más dinámicas', 'Las clases se hacen más lentas', 'Disminuye la práctica'], 0,
                    'La variedad de recursos hace las clases más dinámicas.')
                }),
              T('i2', 'Facilitan la comprensión', '💭', 'Facilitan la comprensión',
                'Facilitan la comprensión.',
                'Presentan los contenidos de varias maneras (visual, auditiva, práctica), lo que ayuda a distintos estilos de aprendizaje.',
                {
                  pe: 'Un diagrama de la cancha ayuda a comprender las posiciones y las jugadas.',
                  quiz: Q('Un diagrama de la cancha ayuda principalmente a...',
                    ['decorar el aula', 'comprender las posiciones y las jugadas', 'reducir la participación'], 1,
                    'Los recursos visuales facilitan la comprensión de contenidos como las posiciones en la cancha.')
                }),
              T('i3', 'Promueven la participación', '🙋', 'Promueven la participación',
                'Promueven la participación.',
                'Cuando los estudiantes manipulan materiales y realizan tareas concretas, se involucran más.',
                {
                  pe: 'Los juegos por equipos con balones hacen que todos intervengan.',
                  quiz: Q('¿Qué recurso invita a participar a todo el grupo?',
                    ['Un texto leído solo por el docente', 'Una actividad grupal con materiales compartidos', 'Un cartel sin uso'], 1,
                    'Las actividades con materiales compartidos favorecen la participación de todos.')
                }),
              T('i4', 'Teoría y práctica', '🔗', 'Relacionan la teoría con la práctica',
                'Relacionan la teoría con la práctica.',
                'Permiten comprobar en la acción lo que se explicó, de modo que el conocimiento tenga sentido.',
                {
                  pe: 'Se explica una regla con un cartel y luego se practica en un juego.',
                  quiz: Q('¿Qué ejemplo relaciona la teoría con la práctica?',
                    ['Explicar una regla y luego practicarla en un juego', 'Leer sin practicar', 'Practicar sin objetivo'], 0,
                    'Explicar un contenido y luego aplicarlo en la práctica une la teoría con la práctica.')
                }),
              T('i5', 'Favorecen la inclusión', '🤲', 'Favorecen la inclusión',
                'Favorecen la inclusión.',
                'Con recursos adaptados, todos los estudiantes pueden participar, sin importar sus condiciones o ritmos de aprendizaje.',
                {
                  pe: 'Usar balones más ligeros, señales visuales o variantes del juego permite que todos participen.',
                  quiz: Q('¿Cómo favorece la inclusión un recurso?',
                    ['Seleccionando solo a los mejores', 'Evitando adaptaciones', 'Permitiendo adaptar la actividad para que todos participen'], 2,
                    'Los recursos adaptados permiten que todos participen en la actividad.')
                }),
              T('i6', 'Habilidades y competencias', '🛠️', 'Desarrollan habilidades y competencias',
                'Desarrollan habilidades y competencias.',
                'La práctica con recursos concretos fortalece las capacidades que el currículo espera que el estudiante logre.',
                {
                  pe: 'La práctica repetida con balones y conos mejora la coordinación y la técnica.',
                  quiz: Q('¿Qué fortalece la práctica con recursos concretos?',
                    ['Las habilidades y las competencias', 'Solo la memoria', 'Únicamente la disciplina'], 0,
                    'La práctica con recursos concretos desarrolla habilidades y competencias.')
                }),
              T('i7', 'Aumentan la motivación', '🚀', 'Aumentan la motivación de los estudiantes',
                'Aumentan la motivación de los estudiantes.',
                'Un recurso atractivo y cercano a los intereses del grupo despierta el deseo de aprender y de participar.',
                {
                  pe: 'La música, los videos y los juegos con materiales de colores motivan a participar.',
                  quiz: Q('¿Qué efecto tienen los recursos bien elegidos sobre los estudiantes?',
                    ['Disminuyen el interés', 'Aumentan la motivación', 'No cambian nada'], 1,
                    'Los recursos bien elegidos aumentan la motivación de los estudiantes.')
                })
            ]
          })
      ]
    });

  /* ---------------------------------------------------------
     2. PREPARACIÓN DEL ÁRBOL
     --------------------------------------------------------- */
  const BRANCH_COLORS = ['#38bdf8', '#a78bfa', '#34d399', '#fbbf24', '#f472b6', '#fb923c'];
  const ROOT_COLOR = '#7dd3fc';
  const NODES = [];
  const BYID = {};

  function prepare(n, parent, depth, color, ci) {
    n.parent = parent;
    n.depth = depth;
    n.color = color;
    n.ci = ci;
    n.children = n.children || [];
    n.expanded = depth < 2;
    NODES.push(n);
    BYID[n.id] = n;
    n.children.forEach(function (c) { prepare(c, n, depth + 1, color, ci); });
  }
  prepare(MAP, null, 0, ROOT_COLOR, -1);
  MAP.children.forEach(function (b, i) {
    // los hijos de cada rama heredan su color
    (function paint(n) { n.color = BRANCH_COLORS[i]; n.ci = i; n.children.forEach(paint); })(b);
  });

  const TOTAL = NODES.length;

  /* ---------------------------------------------------------
     3. DISTRIBUCIÓN RADIAL (se calcula sobre el árbol completo)
     --------------------------------------------------------- */
  const RADII = [86, 44, 29, 22];
  const R = [0, 215, 405, 690];
  const ZIG = 92;          // desplazamiento alterno para evitar textos encimados
  const SX = 1.4;
  const SY = 0.86;         // el mapa se estira en horizontal para pantallas anchas
  const MAXCH = [14, 16, 16, 15];
  const FS = [16, 15.5, 14, 12.5];

  function leaves(n) {
    return n.children.length ? n.children.reduce(function (s, c) { return s + leaves(c); }, 0) : 1;
  }

  function place(n, a0, a1) {
    n.ang = ((a0 + a1) / 2) * Math.PI / 180;
    n.r = R[n.depth] + (n.zig ? ZIG : 0);
    setXY(n);
    if (!n.children.length) return;
    const tot = n.children.reduce(function (s, c) { return s + leaves(c); }, 0);
    let s = a0;
    const spans = n.children.map(function (c) { return (a1 - a0) * leaves(c) / tot; });
    if (n.depth === 1) {
      const minArc = Math.min.apply(null, spans) * Math.PI / 180 * R[2] * SX;
      n.children.forEach(function (c, i) { c.zig = minArc < 118 && i % 2 === 1; });
    }
    n.children.forEach(function (c, i) {
      place(c, s, s + spans[i]);
      s += spans[i];
    });
  }

  function setXY(n) {
    n.x = n.r * Math.cos(n.ang) * SX;
    n.y = n.r * Math.sin(n.ang) * SY;
  }

  /* Cajas de un nodo (círculo y etiqueta) para detectar encimados */
  function boxesOf(n) {
    const r = RADII[n.depth], fs = FS[n.depth], m = 5;
    const circle = { x0: n.x - r - m, x1: n.x + r + m, y0: n.y - r - m, y1: n.y + r + m };
    if (n.depth === 0) return { circle: circle, label: null };
    const w = Math.max.apply(null, n.lines.map(function (l) { return l.length; })) * fs * 0.58;
    const top = n.y + r + 3;
    const h = n.lines.length * (fs + 2) + 4;
    return { circle: circle, label: { x0: n.x - w / 2 - m, x1: n.x + w / 2 + m, y0: top, y1: top + h } };
  }
  function hit(a, b) { return a.x0 < b.x1 && a.x1 > b.x0 && a.y0 < b.y1 && a.y1 > b.y0; }
  function collides(a, b) {
    return hit(a.circle, b.circle) ||
      (a.label && hit(a.label, b.circle)) ||
      (b.label && hit(b.label, a.circle)) ||
      (a.label && b.label && hit(a.label, b.label));
  }

  /* Aleja radialmente cada nodo hasta que no se encime con los ya colocados */
  function resolve() {
    const done = [];
    NODES.forEach(function (n) {
      if (n.depth >= 2) {
        for (let i = 0; i < 40; i++) {
          const b = boxesOf(n);
          if (!done.some(function (o) { return collides(b, o.box); })) break;
          n.r += 22;
          setXY(n);
        }
      }
      done.push({ n: n, box: boxesOf(n) });
    });
  }

  function layout() {
    MAP.x = 0; MAP.y = 0;
    const weights = MAP.children.map(function (b) { return Math.max(5, leaves(b)); });
    const sum = weights.reduce(function (a, b) { return a + b; }, 0);
    const first = 360 * weights[0] / sum;
    let a = -90 - first / 2;
    MAP.children.forEach(function (b, i) {
      const span = 360 * weights[i] / sum;
      place(b, a, a + span);
      a += span;
    });
  }

  function wrap(text, max) {
    const words = text.split(' ');
    const lines = [];
    let cur = '';
    words.forEach(function (w) {
      if (cur && (cur + ' ' + w).length > max) { lines.push(cur); cur = w; }
      else { cur = cur ? cur + ' ' + w : w; }
    });
    if (cur) lines.push(cur);
    return lines;
  }
  NODES.forEach(function (n) { n.lines = wrap(n.label, MAXCH[n.depth]); });
  layout();
  resolve();

  /* Exportación para pruebas en Node (no afecta al navegador) */
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NODES: NODES, RADII: RADII, FS: FS, MAP: MAP };
  }
  if (typeof document === 'undefined') return;

  /* ---------------------------------------------------------
     4. ESTADO Y PROGRESO
     --------------------------------------------------------- */
  const STORE = 'mapaMediosDidacticos.v1';
  const visited = new Set();
  const correct = new Set();
  try {
    const raw = JSON.parse(localStorage.getItem(STORE) || '{}');
    (raw.visited || []).forEach(function (id) { if (BYID[id]) visited.add(id); });
    (raw.correct || []).forEach(function (id) { if (BYID[id]) correct.add(id); });
  } catch (e) { /* sin almacenamiento */ }

  function save() {
    try {
      localStorage.setItem(STORE, JSON.stringify({ visited: Array.from(visited), correct: Array.from(correct) }));
    } catch (e) { /* sin almacenamiento */ }
  }

  let selected = null;
  const quizAns = {};

  /* ---------------------------------------------------------
     5. DIBUJO DEL MAPA (SVG)
     --------------------------------------------------------- */
  const NS = 'http://www.w3.org/2000/svg';
  const $ = function (id) { return document.getElementById(id); };
  const svg = $('map');

  function S(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    if (attrs) for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }

  const defs = S('defs', null, svg);
  function radial(id, stops, cx, cy) {
    const g = S('radialGradient', { id: id, cx: cx || '35%', cy: cy || '30%', r: '75%' }, defs);
    stops.forEach(function (s) { S('stop', { offset: s[0], 'stop-color': s[1], 'stop-opacity': s[2] === undefined ? 1 : s[2] }, g); });
  }
  radial('gRoot', [['0%', '#5aa2ff'], ['60%', '#2b64e0'], ['100%', '#173a9c']]);
  radial('gMain', [['0%', '#e6fbff'], ['45%', '#6fe3ff'], ['100%', '#1fb4ee']]);
  radial('gSec', [['0%', '#56627a'], ['100%', '#2a3447']]);
  radial('gLeaf', [['0%', '#3b4660'], ['100%', '#222b40']]);
  [ROOT_COLOR].concat(BRANCH_COLORS).forEach(function (c, i) {
    radial('halo' + i, [['0%', c, 0.55], ['45%', c, 0.18], ['100%', c, 0]], '50%', '50%');
  });

  const viewport = S('g', { id: 'viewport' }, svg);
  const linkLayer = S('g', null, viewport);
  const nodeLayer = S('g', null, viewport);

  // ---- enlaces ----
  NODES.forEach(function (n) {
    if (!n.parent) return;
    const len = Math.hypot(n.x - n.parent.x, n.y - n.parent.y);
    n.link = S('line', {
      class: 'link hidden',
      x1: n.parent.x, y1: n.parent.y, x2: n.x, y2: n.y,
      stroke: n.color,
      'stroke-width': n.depth === 1 ? 2 : (n.depth === 2 ? 1.4 : 1.1)
    }, linkLayer);
    n.link.style.strokeDasharray = len;
    n.link.style.strokeDashoffset = len;
    n.len = len;
  });

  // ---- nodos ----
  function buildNode(n) {
    const r = RADII[n.depth];
    const g = S('g', { class: 'node d' + n.depth + ' hidden', 'data-id': n.id }, nodeLayer);
    g.style.transform = 'translate(0px,0px)';
    const inner = S('g', { class: 'inner' }, g);

    S('circle', { class: 'halo', r: r * 2.6, fill: 'url(#halo' + (n.ci + 1) + ')' }, inner);
    S('circle', { class: 'pulse', r: r + 8, fill: 'none', stroke: n.color }, inner);

    const fills = ['url(#gRoot)', 'url(#gMain)', 'url(#gSec)', 'url(#gLeaf)'];
    const strokes = [ '#9fd0ff', n.color, n.color, n.color];
    const widths = [3, 2.5, 1.6, 1.2];
    const body = S('circle', { class: 'body', r: r, fill: fills[n.depth], stroke: strokes[n.depth], 'stroke-width': widths[n.depth] }, inner);
    if (n.depth >= 2) body.setAttribute('stroke-opacity', n.depth === 2 ? '0.85' : '0.6');

    // icono
    if (n.depth === 0) {
      S('text', { class: 'node-icon', y: -34, 'font-size': 34 }, inner).textContent = n.icon;
    } else {
      S('text', { class: 'node-icon', y: 1, 'font-size': [0, 24, 16, 12][n.depth] }, inner).textContent = n.icon;
    }

    // etiqueta
    const lh = FS[n.depth] + 2;
    const label = S('text', { class: 'label', 'font-size': FS[n.depth] }, inner);
    const y0 = n.depth === 0 ? -2 : r + FS[n.depth] + 5;
    n.lines.forEach(function (ln, i) {
      const t = S('tspan', { x: 0, y: y0 + i * lh }, label);
      t.textContent = ln;
    });

    // marca de explorado
    const ck = S('g', { class: 'check', transform: 'translate(' + (r * 0.72) + ',' + (-r * 0.72) + ')' }, inner);
    S('circle', { r: n.depth === 0 ? 11 : 8, fill: '#34d399', stroke: '#03160f', 'stroke-width': 1.5 }, ck);
    const ct = S('text', { 'text-anchor': 'middle', 'dominant-baseline': 'central', 'font-size': n.depth === 0 ? 13 : 10, 'font-weight': 800, fill: '#03281c' }, ck);
    ct.textContent = '✓';

    // botón expandir / contraer
    if (n.children.length && n.depth > 0) {
      const tg = S('g', { class: 'tg', transform: 'translate(' + (r * 0.78) + ',' + (r * 0.78) + ')' }, inner);
      S('circle', { r: 10 }, tg);
      n.tgText = S('text', null, tg);
      tg.addEventListener('click', function (ev) { ev.stopPropagation(); toggle(n); });
      tg.addEventListener('pointerdown', function (ev) { ev.stopPropagation(); });
    }

    g.addEventListener('click', function () {
      if (dragMoved) return;
      select(n);
    });
    n.g = g;
  }
  NODES.forEach(buildNode);

  /* ---------------------------------------------------------
     6. VISIBILIDAD Y ESTADO VISUAL
     --------------------------------------------------------- */
  function isVisible(n) {
    for (let p = n.parent; p; p = p.parent) if (!p.expanded) return false;
    return true;
  }
  function anchorOf(n) {
    let p = n.parent;
    while (p && !isVisible(p)) p = p.parent;
    return p || MAP;
  }

  function render() {
    const path = new Set();
    for (let p = selected; p; p = p.parent) path.add(p);
    const kids = new Set(selected ? selected.children : []);

    NODES.forEach(function (n) {
      const vis = isVisible(n);
      const pos = vis ? n : anchorOf(n);
      n.g.style.transform = 'translate(' + pos.x + 'px,' + pos.y + 'px)';
      n.g.classList.toggle('hidden', !vis);
      n.g.classList.toggle('sel', n === selected);
      n.g.classList.toggle('visited', visited.has(n.id));
      n.g.classList.toggle('rel', !selected || path.has(n) || kids.has(n));
      if (n.link) {
        n.link.classList.toggle('hidden', !vis);
        n.link.style.strokeDashoffset = vis ? 0 : n.len;
        n.link.classList.toggle('on', vis && selected && (path.has(n) || (selected === n.parent)));
      }
      if (n.tgText) n.tgText.textContent = n.expanded ? '−' : '+';
    });
    svg.classList.toggle('has-sel', !!selected);
    renderSidebarState();
  }

  function toggle(n) {
    n.expanded = !n.expanded;
    render();
  }

  function setAll(open) {
    NODES.forEach(function (n) {
      if (n.depth === 0) { n.expanded = true; return; }
      n.expanded = open;
    });
    render();
    if (selected && !isVisible(selected)) {
      selected = null;
      closePanel();
      render();
    }
    autoFit = true;
    animateTo(fitTarget(), 700);
  }

  function reveal(n) {
    for (let p = n.parent; p; p = p.parent) p.expanded = true;
  }

  /* ---------------------------------------------------------
     7. DESPLAZAMIENTO Y ZOOM
     --------------------------------------------------------- */
  const view = { x: 0, y: 0, k: 1 };
  let autoFit = true;
  let dragMoved = false;
  let tween = null;

  function applyView() {
    viewport.setAttribute('transform', 'translate(' + view.x + ' ' + view.y + ') scale(' + view.k + ')');
  }
  function size() {
    const r = svg.getBoundingClientRect();
    return { w: r.width, h: r.height };
  }
  const clampK = function (k) { return Math.max(0.18, Math.min(2.6, k)); };

  function animateTo(t, ms) {
    cancelAnimationFrame(tween);
    const s = { x: view.x, y: view.y, k: view.k };
    const t0 = performance.now();
    function step(now) {
      const p = Math.min(1, (now - t0) / (ms || 600));
      const e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      view.x = s.x + (t.x - s.x) * e;
      view.y = s.y + (t.y - s.y) * e;
      view.k = s.k + (t.k - s.k) * e;
      applyView();
      if (p < 1) tween = requestAnimationFrame(step);
    }
    tween = requestAnimationFrame(step);
  }

  function fitTarget() {
    const sz = size();
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    NODES.forEach(function (n) {
      if (!isVisible(n)) return;
      const r = RADII[n.depth];
      const lw = Math.max.apply(null, n.lines.map(function (l) { return l.length; })) * FS[n.depth] * 0.3;
      const bottom = n.depth === 0 ? r : r + 8 + n.lines.length * (FS[n.depth] + 2);
      x0 = Math.min(x0, n.x - Math.max(r, lw));
      x1 = Math.max(x1, n.x + Math.max(r, lw));
      y0 = Math.min(y0, n.y - r);
      y1 = Math.max(y1, n.y + bottom);
    });
    const pad = 36;
    const bw = x1 - x0 + pad * 2, bh = y1 - y0 + pad * 2;
    const k = clampK(Math.min(sz.w / bw, sz.h / bh, 1.15));
    return { k: k, x: sz.w / 2 - ((x0 + x1) / 2) * k, y: sz.h / 2 - ((y0 + y1) / 2) * k };
  }

  function fitNow() {
    const t = fitTarget();
    view.x = t.x; view.y = t.y; view.k = t.k;
    applyView();
  }

  function centerOn(n) {
    const sz = size();
    const k = Math.min(1.3, Math.max(view.k, 0.85));
    const mobile = window.matchMedia('(max-width: 900px)').matches;
    let cy = sz.h / 2;
    if (mobile && panelEl.classList.contains('open')) {
      const top = svg.getBoundingClientRect().top;
      cy = Math.max(90, (window.innerHeight * 0.4 - top) / 2);
    }
    animateTo({ k: k, x: sz.w / 2 - n.x * k, y: cy - n.y * k }, 650);
  }

  function zoomAt(cx, cy, f) {
    const k2 = clampK(view.k * f);
    view.x = cx - (cx - view.x) * (k2 / view.k);
    view.y = cy - (cy - view.y) * (k2 / view.k);
    view.k = k2;
    applyView();
  }
  function zoomBy(f) {
    autoFit = false;
    const sz = size();
    const k2 = clampK(view.k * f);
    animateTo({
      k: k2,
      x: sz.w / 2 - (sz.w / 2 - view.x) * (k2 / view.k),
      y: sz.h / 2 - (sz.h / 2 - view.y) * (k2 / view.k)
    }, 260);
  }

  // arrastre y pellizco
  const pointers = new Map();
  let start = { x: 0, y: 0 };
  let pinchDist = 0;

  svg.addEventListener('pointerdown', function (e) {
    cancelAnimationFrame(tween);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 1) { dragMoved = false; start = { x: e.clientX, y: e.clientY }; }
    if (pointers.size === 2) {
      const p = Array.from(pointers.values());
      pinchDist = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
      dragMoved = true;
    }
  });

  svg.addEventListener('pointermove', function (e) {
    const p = pointers.get(e.pointerId);
    if (!p) return;
    if (pointers.size === 1) {
      if (!dragMoved && Math.hypot(e.clientX - start.x, e.clientY - start.y) < 5) return;
      if (!dragMoved) {
        dragMoved = true;
        svg.classList.add('dragging');
        try { svg.setPointerCapture(e.pointerId); } catch (err) { /* nada */ }
      }
      autoFit = false;
      view.x += e.clientX - p.x;
      view.y += e.clientY - p.y;
      p.x = e.clientX; p.y = e.clientY;
      applyView();
    } else if (pointers.size === 2) {
      p.x = e.clientX; p.y = e.clientY;
      const a = Array.from(pointers.values());
      const d = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y);
      if (pinchDist > 0) {
        const r = svg.getBoundingClientRect();
        autoFit = false;
        zoomAt((a[0].x + a[1].x) / 2 - r.left, (a[0].y + a[1].y) / 2 - r.top, d / pinchDist);
      }
      pinchDist = d;
    }
  });

  function endPointer(e) {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinchDist = 0;
    if (pointers.size === 0) svg.classList.remove('dragging');
  }
  svg.addEventListener('pointerup', endPointer);
  svg.addEventListener('pointercancel', endPointer);

  svg.addEventListener('wheel', function (e) {
    e.preventDefault();
    cancelAnimationFrame(tween);
    autoFit = false;
    const r = svg.getBoundingClientRect();
    zoomAt(e.clientX - r.left, e.clientY - r.top, Math.exp(-e.deltaY * 0.0016));
  }, { passive: false });

  /* ---------------------------------------------------------
     8. PANEL DE INFORMACIÓN
     --------------------------------------------------------- */
  const panelEl = $('panel');
  const panelBody = $('panelBody');
  const KICKERS = ['TEMA CENTRAL', 'RAMA PRINCIPAL', 'CONCEPTO SECUNDARIO', 'DETALLE'];

  function ul(items) { return '<ul>' + items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>'; }
  function sec(title, body) { return body ? '<section class="p-sec"><h4>' + title + '</h4>' + body + '</section>' : ''; }

  function flowHTML(f) {
    return '<div class="flow">' + f.items.map(function (it) {
      return '<div class="flow-step' + (it.hl ? ' hl' : '') + '"><span class="flow-dot"></span><div class="flow-box"><span class="flow-k">' + it.k + '</span><span class="flow-v">' + it.v + '</span></div></div>';
    }).join('') + '</div>' + (f.note ? '<p class="flow-note">' + f.note + '</p>' : '');
  }

  function quizHTML(n) {
    const q = n.quiz;
    if (!q) return '';
    const ans = quizAns[n.id];
    const opts = q.o.map(function (t, i) {
      let cls = 'opt';
      if (ans !== undefined) { if (i === q.a) cls += ' right'; else if (i === ans) cls += ' wrong'; }
      return '<button type="button" class="' + cls + '" data-opt="' + i + '"' + (ans !== undefined ? ' disabled' : '') + '><span class="ltr">' + 'ABC'[i] + '</span><span>' + t + '</span></button>';
    }).join('');
    let fb = '';
    if (ans !== undefined) {
      fb = '<div class="fb ' + (ans === q.a ? 'ok' : 'bad') + '"><strong>' + (ans === q.a ? '¡Correcto!' : 'Respuesta incorrecta.') + '</strong> ' + q.e + '</div>' +
        '<button type="button" class="link-btn" data-retry="1">Intentar de nuevo</button>';
    }
    return '<section class="p-sec quiz" id="quizBox"><h4>Comprueba lo aprendido</h4><p class="q">' + q.q + '</p><div class="opts">' + opts + '</div>' + fb + '</section>';
  }

  function markBtnHTML(n) {
    const done = visited.has(n.id);
    return '<button type="button" class="mark-btn' + (done ? ' done' : '') + '" data-mark="1">' + (done ? '✓ Concepto explorado (clic para desmarcar)' : 'Marcar como explorado') + '</button>';
  }

  function openPanel(n) {
    const crumbs = [];
    for (let p = n; p; p = p.parent) crumbs.unshift(p.depth === 0 ? 'Tema central' : p.label);
    const related = n.children.length ? '<div class="chips">' + n.children.map(function (c) {
      return '<button type="button" class="chip" data-go="' + c.id + '">' + c.icon + ' ' + c.label + '</button>';
    }).join('') + '</div>' : '';
    const back = n.parent ? '<div class="chips"><button type="button" class="chip" data-go="' + n.parent.id + '">↑ ' + (n.parent.depth === 0 ? 'Tema central' : n.parent.label) + '</button></div>' : '';

    panelBody.style.setProperty('--c', n.color);
    panelBody.innerHTML =
      '<div class="p-head"><div class="p-icon" style="--c:' + n.color + '">' + n.icon + '</div><h2 class="p-title">' + n.title + '</h2></div>' +
      '<div class="p-crumb">' + crumbs.join(' › ') + '</div>' +
      '<span class="p-tag" style="--c:' + n.color + '">' + KICKERS[n.depth] + '</span>' +
      sec('Definición', '<p>' + n.def + '</p>') +
      sec('Explicación', '<p>' + n.exp + '</p>') +
      sec('Características', n.car ? ul(n.car) : '') +
      sec('Ejemplos', n.ej ? ul(n.ej) : '') +
      sec('En Educación Física', n.pe ? '<div class="callout" style="--c:' + n.color + '">' + n.pe + '</div>' : '') +
      sec('Cómo se relacionan los componentes', n.flow ? flowHTML(n.flow) : '') +
      sec('Conceptos relacionados', related + (related ? '' : '') ) +
      sec('Navegación', back) +
      quizHTML(n) +
      markBtnHTML(n);

    $('panelKicker').textContent = KICKERS[n.depth];
    panelEl.classList.remove('open');
    void panelEl.offsetWidth;
    panelEl.classList.add('open');
    panelBody.scrollTop = 0;
  }

  function closePanel() {
    panelEl.classList.remove('open');
    selected = null;
    render();
  }

  panelBody.addEventListener('click', function (e) {
    const t = e.target.closest('button');
    if (!t || !selected) return;
    if (t.dataset.go) { select(BYID[t.dataset.go]); return; }
    if (t.dataset.opt !== undefined) {
      const i = Number(t.dataset.opt);
      quizAns[selected.id] = i;
      if (i === selected.quiz.a) correct.add(selected.id);
      save();
      $('quizBox').outerHTML = quizHTML(selected);
      updateProgress();
      return;
    }
    if (t.dataset.retry) {
      delete quizAns[selected.id];
      $('quizBox').outerHTML = quizHTML(selected);
      return;
    }
    if (t.dataset.mark) {
      if (visited.has(selected.id)) visited.delete(selected.id); else visited.add(selected.id);
      save();
      t.outerHTML = markBtnHTML(selected);
      render();
      updateProgress();
    }
  });
  $('panelClose').addEventListener('click', closePanel);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && panelEl.classList.contains('open')) closePanel(); });

  /* ---------------------------------------------------------
     9. SELECCIÓN
     --------------------------------------------------------- */
  function select(n, noCenter) {
    reveal(n);
    selected = n;
    visited.add(n.id);
    save();
    autoFit = false;
    openPanel(n);
    render();
    updateProgress();
    if (!noCenter) centerOn(n);
    $('app').classList.remove('side-open', 'cat-open');
  }

  /* ---------------------------------------------------------
     10. BARRA LATERAL Y PROGRESO
     --------------------------------------------------------- */
  const branchList = $('branchList');
  MAP.children.forEach(function (b, i) {
    const li = document.createElement('li');
    li.className = 'branch-item';
    li.innerHTML =
      '<button type="button" class="branch-main"><span class="branch-dot" style="background:' + BRANCH_COLORS[i] + ';color:' + BRANCH_COLORS[i] + '"></span>' +
      '<span class="branch-text"><span class="branch-name">' + b.icon + ' ' + b.label + '</span><span class="branch-mini"><i style="background:' + BRANCH_COLORS[i] + '"></i></span></span>' +
      '<span class="branch-num">0/0</span></button>' +
      '<button type="button" class="branch-toggle" aria-label="Expandir o contraer">−</button>';
    li.querySelector('.branch-main').addEventListener('click', function () { select(b); });
    li.querySelector('.branch-toggle').addEventListener('click', function () { toggle(b); });
    b.li = li;
    branchList.appendChild(li);
  });

  function descendants(b) {
    const out = [b];
    b.children.forEach(function (c) { descendants(c).forEach(function (x) { out.push(x); }); });
    return out;
  }

  function renderSidebarState() {
    MAP.children.forEach(function (b) {
      let active = false;
      for (let p = selected; p; p = p.parent) if (p === b) active = true;
      b.li.classList.toggle('active', active);
      b.li.querySelector('.branch-toggle').textContent = b.expanded ? '−' : '+';
    });
    updateCatalog();
  }

  function updateProgress() {
    const count = visited.size;
    const pct = Math.round(count / TOTAL * 100);
    $('sideFill').style.width = pct + '%';
    $('bFill').style.width = pct + '%';
    $('sideCount').textContent = count + ' de ' + TOTAL;
    $('sidePct').textContent = pct + '%';
    $('bCount').textContent = count;
    $('bTotal').textContent = TOTAL;
    $('bPct').textContent = pct + '%';
    $('bQuiz').textContent = correct.size;
    MAP.children.forEach(function (b) {
      const all = descendants(b);
      const done = all.filter(function (n) { return visited.has(n.id); }).length;
      b.li.querySelector('.branch-num').textContent = done + '/' + all.length;
      b.li.querySelector('.branch-mini i').style.width = (done / all.length * 100) + '%';
    });
  }

  /* ---------------------------------------------------------
     10b. CATÁLOGO: lista de todos los conceptos con búsqueda
     --------------------------------------------------------- */
  const catalogEl = $('catalog');
  const catList = $('catList');
  const catGroups = [];
  const isMobile = function () { return window.matchMedia('(max-width: 900px)').matches; };
  const norm = function (s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); };

  function catButton(n, name) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'cat-item d' + n.depth;
    b.style.setProperty('--c', n.color);
    b.innerHTML = '<span class="cat-ic">' + n.icon + '</span><span class="cat-lb">' + name + '</span><span class="cat-ck">✓</span>';
    b.addEventListener('click', function () { select(n); });
    n.catEl = b;
    return b;
  }

  const catRoot = catButton(MAP, 'Tema central');
  catList.appendChild(catRoot);

  MAP.children.forEach(function (b) {
    const grp = document.createElement('div');
    grp.className = 'cat-group';
    const head = document.createElement('div');
    head.className = 'cat-head';
    head.appendChild(catButton(b, b.label));
    const num = document.createElement('span');
    num.className = 'cat-num';
    head.appendChild(num);
    const caret = document.createElement('button');
    caret.type = 'button';
    caret.className = 'cat-caret';
    caret.setAttribute('aria-label', 'Mostrar u ocultar ' + b.label);
    caret.textContent = '−';
    head.appendChild(caret);
    grp.appendChild(head);

    const body = document.createElement('div');
    body.className = 'cat-body';
    const items = [];
    descendants(b).slice(1).forEach(function (n) {
      const el = catButton(n, n.label);
      body.appendChild(el);
      items.push({ n: n, el: el });
    });
    grp.appendChild(body);
    catList.appendChild(grp);

    caret.addEventListener('click', function () {
      grp.classList.toggle('closed');
      caret.textContent = grp.classList.contains('closed') ? '+' : '−';
    });
    catGroups.push({ b: b, el: grp, items: items, num: num, caret: caret });
  });

  const empty = document.createElement('p');
  empty.className = 'cat-empty';
  empty.textContent = 'No se encontraron conceptos.';
  empty.hidden = true;
  catList.appendChild(empty);
  $('catCount').textContent = TOTAL + ' conceptos';

  function filterCatalog() {
    const q = norm($('catSearch').value.trim());
    let shown = 0;
    const rootMatch = !q || norm('tema central ' + MAP.title).indexOf(q) !== -1;
    catRoot.hidden = !rootMatch;
    if (rootMatch) shown++;
    catGroups.forEach(function (g) {
      let any = false;
      const headMatch = !q || norm(g.b.label + ' ' + g.b.title).indexOf(q) !== -1;
      g.b.catEl.hidden = !(headMatch || !q);
      g.items.forEach(function (it) {
        const m = !q || headMatch || norm(it.n.label + ' ' + it.n.title).indexOf(q) !== -1;
        it.el.hidden = !m;
        if (m) any = true;
      });
      const visible = headMatch || any;
      g.el.hidden = !visible;
      g.el.classList.toggle('force-open', !!q);
      if (visible) shown++;
    });
    empty.hidden = shown > 0;
  }
  $('catSearch').addEventListener('input', filterCatalog);
  $('catSearch').addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;
    const first = catList.querySelector('.cat-item:not([hidden])');
    if (first) first.click();
  });

  function updateCatalog() {
    NODES.forEach(function (n) {
      if (!n.catEl) return;
      n.catEl.classList.toggle('visited', visited.has(n.id));
      n.catEl.classList.toggle('active', n === selected);
    });
    catGroups.forEach(function (g) {
      const all = descendants(g.b);
      const done = all.filter(function (n) { return visited.has(n.id); }).length;
      g.num.textContent = done + '/' + all.length;
    });
    if (selected && selected.depth > 0) {
      let b = selected;
      while (b.depth > 1) b = b.parent;
      catGroups.forEach(function (g) {
        if (g.b === b && g.el.classList.contains('closed')) {
          g.el.classList.remove('closed');
          g.caret.textContent = '−';
        }
      });
    }
    if (selected && selected.catEl && selected.catEl.offsetParent !== null) {
      const top = selected.catEl.offsetTop - catList.offsetTop;
      if (top < catList.scrollTop || top > catList.scrollTop + catList.clientHeight - 60) {
        catList.scrollTop = Math.max(0, top - 80);
      }
    }
  }

  function toggleCatalog() {
    if (isMobile()) {
      $('app').classList.remove('side-open');
      $('app').classList.toggle('cat-open');
    } else {
      catalogEl.classList.toggle('open');
      $('btnCatalog').classList.toggle('on', catalogEl.classList.contains('open'));
    }
  }
  function closeCatalog() {
    $('app').classList.remove('cat-open');
    catalogEl.classList.remove('open');
    $('btnCatalog').classList.remove('on');
  }
  $('btnCatalog').addEventListener('click', toggleCatalog);
  $('catClose').addEventListener('click', closeCatalog);
  if (window.innerWidth >= 1500) {
    catalogEl.classList.add('open');
    $('btnCatalog').classList.add('on');
  }

  /* ---------------------------------------------------------
     11. CONTROLES
     --------------------------------------------------------- */
  $('zoomIn').addEventListener('click', function () { zoomBy(1.25); });
  $('zoomOut').addEventListener('click', function () { zoomBy(0.8); });
  function resetView() { autoFit = true; animateTo(fitTarget(), 650); }
  $('zoomFit').addEventListener('click', resetView);
  $('btnFit').addEventListener('click', resetView);
  $('btnExpand').addEventListener('click', function () { setAll(true); });
  $('btnCollapse').addEventListener('click', function () { setAll(false); });
  $('btnFull').addEventListener('click', function () {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(function () {});
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  });
  $('tgLabels').addEventListener('change', function (e) { svg.classList.toggle('no-labels', !e.target.checked); });
  $('menuBtn').addEventListener('click', function () {
    $('app').classList.remove('cat-open');
    $('app').classList.toggle('side-open');
  });
  $('backdrop').addEventListener('click', function () { $('app').classList.remove('side-open', 'cat-open'); });
  $('btnResetProgress').addEventListener('click', function () {
    if (!window.confirm('¿Deseas reiniciar el progreso de exploración?')) return;
    visited.clear(); correct.clear();
    Object.keys(quizAns).forEach(function (k) { delete quizAns[k]; });
    save();
    render();
    updateProgress();
    if (selected) openPanel(selected);
  });

  window.addEventListener('resize', function () { if (autoFit) fitNow(); });
  if (window.ResizeObserver) {
    new ResizeObserver(function () { if (autoFit) fitNow(); }).observe(svg);
  }

  /* ---------------------------------------------------------
     12. INICIO CON ANIMACIÓN DE ENTRADA
     --------------------------------------------------------- */
  // En celulares el mapa inicia con las seis ramas visibles para que se lea bien;
  // los conceptos se abren con el botón + de cada rama o desde el catálogo.
  if (window.matchMedia('(max-width: 700px)').matches) {
    MAP.children.forEach(function (b) { b.expanded = false; });
  }
  fitNow();
  updateProgress();
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { render(); });
  });
})();
