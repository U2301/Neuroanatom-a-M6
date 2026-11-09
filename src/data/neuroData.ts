import {
  NeuroNode,
  NeuroEdge,
  Flashcard,
  SpinalNucleus,
  SpinalTract,
  SpinalCircuitStep
} from '../types';

export const neuroNodesData: NeuroNode[] = [
  // 1. Morfología & Segmentos
  {
    id: 1,
    label: 'Médula Espinal',
    category: 'Morfología & Segmentos',
    group: 'segmentos',
    desc: 'Zona de recepción (input) y salida (output) de información según la Ley de Bell-Magendie. Conduce la información entre la periferia corporal y el encéfalo.',
    exam: 'Ley de Bell-Magendie: Raíz dorsal aferente (sensorial) y raíz ventral eferente (motora).',
    analogia: 'La autopista central con 31 casetas de entrada y salida',
    colorGroup: '#2b553c'
  },
  {
    id: 2,
    label: '31 Segmentos & Pares',
    category: 'Morfología & Segmentos',
    group: 'segmentos',
    desc: 'Se divide en 31 segmentos que corresponden a 31 pares de nervios espinales: 8 Cervicales, 12 Torácicos, 5 Lumbares, 5 Sacros y 1 Coxígeo.',
    exam: '¿Cuántos? 31 pares: 8C, 12T, 5L, 5S, 1Co. La médula se parte en función de los pares de nervios que entran y salen.',
    analogia: '31 puertos bilaterales organizados de arriba hacia abajo',
    colorGroup: '#2b553c'
  },
  {
    id: 3,
    label: 'Vértebra L1 & Cauda Equina',
    category: 'Morfología & Segmentos',
    group: 'segmentos',
    desc: 'En el adulto promedio la médula llega hasta la vértebra L1. De ahí para abajo ya no hay médula espinal, solo raíces nerviosas llamadas Cauda Equina o Cola de Caballo.',
    exam: 'Límite inferior medular: vértebra L1. Inferior a L1 no hay médula sino cauda equina.',
    analogia: 'Cola de caballo de raíces flotantes',
    colorGroup: '#2b553c'
  },
  {
    id: 4,
    label: 'Discos & Hernia de Disco',
    category: 'Morfología & Segmentos',
    group: 'segmentos',
    desc: 'Los discos están en medio de las vértebras y actúan como amortiguador. La hernia de disco ocurre al desplazarse, comprimiendo raíces e imposibilitando pasar la información con fluidez.',
    exam: 'Hernia de disco: desplazamiento del disco amortiguador que bloquea la fluidez de transmisión nerviosa.',
    colorGroup: '#2b553c'
  },
  {
    id: 5,
    label: 'Meninges & Acueducto Central',
    category: 'Morfología & Segmentos',
    group: 'segmentos',
    desc: 'Protegida por 3 capas: piamadre, aracnoides y duramadre, que se prolongan cubriendo las raíces espinales. Al centro tiene un acueducto con líquido cefalorraquídeo, vestigio del tubo neural.',
    exam: 'El conducto central es el vestigio embrionario del tubo neural que se cerraba como taquito.',
    colorGroup: '#2b553c'
  },
  {
    id: 6,
    label: 'Sustancia Gris (H) vs Blanca',
    category: 'Morfología & Segmentos',
    group: 'segmentos',
    desc: 'A diferencia de la corteza cerebral, en la médula la sustancia gris está al centro en forma de H y la sustancia blanca por fuera en la periferia como cables.',
    exam: 'Organización inversa a la corteza: gris por dentro (H), blanca por fuera (cables).',
    colorGroup: '#2b553c'
  },

  // 2. Tipos de Neuronas Medulares
  {
    id: 10,
    label: 'Neuronas Motoras (Alfa / Gamma)',
    category: 'Tipos de Neuronas Medulares',
    group: 'neuronas',
    desc: 'Ubicadas en las astas ventrales (anteriores). Sacan su axón por la raíz ventral para inervar efectores ("hasta el dedito gordo del pie"). Se clasifican en Alfa o Gamma.',
    exam: 'Ubicadas en astas ventrales. Se dividen en neuronas motoras alfa o gamma.',
    analogia: 'Los motores que ejecutan la orden muscular',
    colorGroup: '#1d5e68'
  },
  {
    id: 11,
    label: 'Neuronas de Fascículo',
    category: 'Tipos de Neuronas Medulares',
    group: 'neuronas',
    desc: 'Reciben la información sensorial de las raíces dorsales, hacen sinapsis y envían sus axones ascendentes formando los cables (fascículos) que suben al encéfalo y regiones subcorticales.',
    exam: 'Hacen sinapsis con raíces dorsales y originan los fascículos ascendentes hacia el encéfalo.',
    analogia: 'Los relevistas que mandan los cables hacia arriba',
    colorGroup: '#1d5e68'
  },
  {
    id: 12,
    label: 'Interneuronas ("Las Chismosas")',
    category: 'Tipos de Neuronas Medulares',
    group: 'neuronas',
    desc: 'Ubicadas en la sustancia gris comunicando a las neuronas de fascículo con las neuronas motoras. Reciben vías descendentes y modulan circuitos locales como el reflejo rotuliano.',
    exam: 'Intercomunican neuronas dentro de la sustancia gris; median reflejos como el reflejo rotuliano.',
    analogia: 'Las chismosas del medio que pasan la voz entre neuronas',
    colorGroup: '#1d5e68'
  },

  // 3. Sustancia Gris (Núcleos Clásicos)
  {
    id: 20,
    label: 'Astas Dorsales (5 Núcleos)',
    category: 'Sustancia Gris (Núcleos)',
    group: 'nucleos',
    desc: 'Picos posteriores de la sustancia gris sensorial. Albergan 5 núcleos: Zona de Waldeyer, Sustancia Gelatinosa, Núcleo Propio, Núcleo de Clarke y Núcleo Propioceptivo Basal.',
    exam: 'En el examen vendrá identificarlos: Waldeyer, Rolando (gelatinosa), Propio, Clarke, Propioceptivo basal.',
    colorGroup: '#704812'
  },
  {
    id: 21,
    label: 'Astas Intermedias / Laterales',
    category: 'Sustancia Gris (Núcleos)',
    group: 'nucleos',
    desc: 'El Núcleo Intermedio Medial está siempre. El Núcleo Intermedio Lateral solo aparece a nivel Torácico y Lumbar formando las Astas Laterales para el sistema simpático.',
    exam: 'Intermedio lateral solo existe en región torácica y lumbar (astas laterales del simpático). Intermedio medial está todo el tiempo.',
    colorGroup: '#704812'
  },
  {
    id: 22,
    label: 'Astas Ventrales (6 Núcleos Motores)',
    category: 'Sustancia Gris (Núcleos)',
    group: 'nucleos',
    desc: 'Astas anteriores motoras: Dorsolateral, Ventrolateral, Central, Anterior, Dorsomedial y Ventromedial.',
    exam: 'Dos laterales (dorso/ventro), dos mediales (dorso/ventro), uno central y uno anterior.',
    colorGroup: '#704812'
  },
  {
    id: 23,
    label: 'Somatotopía Motora (Medial vs Lateral)',
    category: 'Sustancia Gris (Núcleos)',
    group: 'nucleos',
    desc: 'La región medial controla las zonas proximales del cuerpo (cuello, tronco). La región lateral controla las regiones distales (hombros, brazos, manos, piernas).',
    exam: 'Medial = control proximal (tronco); Lateral = control distal (extremidades como brazos y piernas).',
    analogia: 'Mapa corporal reflejado de proximal a distal',
    colorGroup: '#704812'
  },

  // 4. Láminas de Rexed
  {
    id: 30,
    label: 'Láminas de Rexed (I a X)',
    category: 'Láminas de Rexed',
    group: 'rexed',
    desc: 'Bror Rexed dividió la sustancia gris medular en 10 láminas secuenciadas del 1 al 10, desde las astas dorsales (I) hacia las astas ventrales y medial (X rodeando el acueducto).',
    exam: '10 láminas numeradas del I al X. Clasificación muy útil para neurocirujanos.',
    colorGroup: '#8a4b18'
  },

  // 5. Sustancia Blanca (Columnas & Fascículos)
  {
    id: 40,
    label: 'Columna Dorsal (Gracilis & Cuneatus)',
    category: 'Sustancia Blanca (Fascículos)',
    group: 'fasciculos',
    desc: 'Columna posterior de la médula. Contiene los fascículos ascendentes Gracilis (medial, extremidades inferiores) y Cuneatus (lateral, extremidades superiores).',
    exam: 'Gracilis y Cuneatus en columna dorsal. Fascículo dorsolateral (Lissauer) marca el límite con la columna lateral.',
    colorGroup: '#2a5078'
  },
  {
    id: 41,
    label: 'Fascículo Dorsolateral (Lissauer)',
    category: 'Sustancia Blanca (Fascículos)',
    group: 'fasciculos',
    desc: 'Fibras que entran por la raíz dorsal a la médula y se disponen en el límite entre la columna lateral y dorsal formando el fascículo dorsolateral o de Lissauer.',
    exam: 'Zona de entrada y separación anatómica entre la parte dorsal y lateral.',
    colorGroup: '#2a5078'
  },
  {
    id: 42,
    label: 'Columnas Lateral y Ventral (Vías Mixtas)',
    category: 'Sustancia Blanca (Fascículos)',
    group: 'fasciculos',
    desc: 'Sin demarcación anatómica neta. Contienen cables ascendentes sensoriales y descendentes motores. "El nombre lo dice todo: de dónde comienza y hacia dónde va".',
    exam: 'Regla de oro de la clase: De dónde comienza y hacia dónde va determina origen, destino y sentido.',
    analogia: 'Cables con etiqueta de origen y destino directo',
    colorGroup: '#2a5078'
  },
  {
    id: 43,
    label: 'Fascículos Ascendentes (Sensoriales)',
    category: 'Sustancia Blanca (Fascículos)',
    group: 'fasciculos',
    desc: 'Comienzan en la médula (Espino-) y van hacia estructuras superiores: Espinotalámico lateral, Espinotalámico anterior, Espinocerebeloso posterior, Espinocerebeloso anterior, Espinoreticular, Espinoolivar, Espinotectal.',
    exam: 'Prefijo "Espino-": suben desde la médula hacia tálamo, cerebelo, tectum, etc.',
    colorGroup: '#2a5078'
  },
  {
    id: 44,
    label: 'Fascículos Descendentes (Motores)',
    category: 'Sustancia Blanca (Fascículos)',
    group: 'fasciculos',
    desc: 'Comienzan en centros encefálicos y terminan en la médula (-espinal): Corticoespinal lateral, Rubroespinal, Reticuloespinal, Olivoespinal, Vestibuloespinal, Longitudinal medial, Tectoespinal.',
    exam: 'Sufijo "-espinal": bajan de corteza (corticoespinal), núcleo rojo (rubroespinal), etc. a la médula.',
    colorGroup: '#2a5078'
  },

  // 6. Vías & Sistema Autónomo
  {
    id: 50,
    label: 'Relevo en Tálamo & Homúnculo',
    category: 'Sistema Autónomo & Vías',
    group: 'autonomo',
    desc: 'La información sensorial ascendente hace relevo en el tálamo (excepto el sistema olfatorio) y llega de manera directa al área de Brodmann correspondiente en la corteza parietal primaria (homúnculo sensorial).',
    exam: 'Toda información sensorial hace relevo en el tálamo (excepto el olfato) antes de la corteza parietal 1ª.',
    analogia: 'La central de conmutación telefónica cerebral',
    colorGroup: '#5c3d28'
  },
  {
    id: 51,
    label: 'Simpático vs Parasimpático',
    category: 'Sistema Autónomo & Vías',
    group: 'autonomo',
    desc: 'Las astas laterales (a nivel toracolumbar) originan el sistema simpático. El sistema parasimpático sale por 3 pares craneales (Vago X, Facial VII y otro) y la división sacra.',
    exam: 'Astas laterales torácicas y lumbares = Simpático. Parasimpático = Pares craneales (X, VII) y sacro.',
    colorGroup: '#5c3d28'
  }
];

export const neuroEdgesData: NeuroEdge[] = [
  // Ley de Bell-Magendie y estructura
  { from: 1, to: 2, label: '31 pares' },
  { from: 1, to: 3, label: 'termina en L1' },
  { from: 1, to: 4, label: 'amortiguación' },
  { from: 1, to: 5, label: 'envoltura & canal' },
  { from: 1, to: 6, label: 'gris dentro / blanca fuera' },

  // Tipos de neuronas
  { from: 6, to: 10, label: 'astas ventrales (alfa/gamma)' },
  { from: 6, to: 11, label: 'astas dorsales' },
  { from: 6, to: 12, label: 'sustancia gris medial' },
  { from: 11, to: 12, label: 'sinapsis local' },
  { from: 12, to: 10, label: 'activa / modula' },

  // Sustancia gris & núcleos
  { from: 6, to: 20, label: '5 núcleos sensoriales' },
  { from: 6, to: 21, label: 'nivel toracolumbar' },
  { from: 6, to: 22, label: '6 núcleos motores' },
  { from: 22, to: 23, label: 'distal vs proximal' },
  { from: 6, to: 30, label: '10 láminas' },

  // Columnas & Fascículos
  { from: 6, to: 40, label: 'columna posterior' },
  { from: 40, to: 41, label: 'límite dorsal/lateral' },
  { from: 6, to: 42, label: 'vías mixtas' },
  { from: 42, to: 43, label: 'origen en médula' },
  { from: 42, to: 44, label: 'destino en médula' },

  // Conexión tálamo-cortical y autónomo
  { from: 11, to: 43, label: 'axones forman cables' },
  { from: 43, to: 50, label: 'relevo sensorial' },
  { from: 21, to: 51, label: 'simpático toracolumbar' }
];

export const spinalNucleiData: SpinalNucleus[] = [
  // Astas dorsales (Sensoriales)
  {
    id: 'waldeyer',
    name: 'Zona de Waldeyer',
    region: 'dorsal',
    location: 'Ápice del asta dorsal (Lámina I de Rexed)',
    description: 'Capa más superficial del asta dorsal. Recibe fibras aferentes primarias del dolor y la temperatura de las raíces dorsales.',
    rexedEquivalent: 'Lámina I',
    examImportance: 'Viene en el examen: Identificar como la capa más posterior/dorsal de las astas dorsales.'
  },
  {
    id: 'sustancia_gelatinosa',
    name: 'Sustancia Gelatinosa de Rolando',
    region: 'dorsal',
    location: 'Inmediatamente anterior a la zona de Waldeyer (Lámina II de Rexed)',
    description: 'Estructura translúcida con neuronas de axón corto encargadas de modular y filtrar la transmisión nociceptiva (dolor) y táctil térmica.',
    rexedEquivalent: 'Lámina II',
    examImportance: 'Pregunta de examen: Identificar en el asta dorsal contigua a Waldeyer.'
  },
  {
    id: 'nucleo_propio',
    name: 'Núcleo Propio (del asta dorsal)',
    region: 'dorsal',
    location: 'Cabeza y cuello del asta posterior (Láminas III y IV de Rexed)',
    description: 'Masa neuronal voluminosa que recibe información sensorial mecánica, tacto discriminativo y presión desde las raíces dorsales.',
    rexedEquivalent: 'Láminas III y IV',
    examImportance: 'Identificar en el centro de la cabeza del asta posterior.'
  },
  {
    id: 'clarke',
    name: 'Núcleo de Clarke (Columna de Clarke)',
    region: 'dorsal',
    location: 'Base del asta dorsal en segmentos C8/T1 a L2/L3',
    description: 'Recibe información propioceptiva inconsciente de los husos musculares y órganos tendinosos de Golgi del tronco y extremidades inferiores. Da origen al fascículo espinocerebeloso posterior.',
    rexedEquivalent: 'Lámina VII (porción medial/dorsal)',
    examImportance: 'Mencionado específicamente por el profesor: propiocepción inconsciente hacia cerebelo.'
  },
  {
    id: 'propioceptivo_basal',
    name: 'Núcleo Propioceptivo Basal',
    region: 'dorsal',
    location: 'Base más profunda del asta dorsal',
    description: 'Receptores de posición articular, tono muscular y propiocepción profunda basal antes de la transición intermedia.',
    rexedEquivalent: 'Láminas V y VI',
    examImportance: 'Quinto núcleo del asta dorsal a identificar en la clasificación clásica del examen.'
  },

  // Zona Intermedia
  {
    id: 'intermedio_medial',
    name: 'Núcleo Intermedio Medial',
    region: 'intermedia',
    location: 'Zona central adyacente al conducto central (acueducto)',
    description: 'Presente a todo lo largo de la médula espinal. Recibe aferencias viscerales y propioceptivas para la integración refleja segmental.',
    rexedEquivalent: 'Lámina X / VII medial',
    examImportance: 'El profesor destaca: "Está todo el tiempo, a lo largo de toda la médula espinal".'
  },
  {
    id: 'intermedio_lateral',
    name: 'Núcleo Intermedio Lateral',
    region: 'intermedia',
    location: 'Asta lateral en los segmentos Torácicos (T1-T12) y Lumbares (L1-L2/L3)',
    description: 'Origina las fibras simpáticas preganglionares del sistema nervioso autónomo. Forma el pico prominente del asta lateral.',
    rexedEquivalent: 'Lámina VII lateral',
    examImportance: 'Clave para examen: "Solo está cuando están las astas laterales a nivel torácico y lumbar, y se encarga del sistema simpático".'
  },

  // Astas Ventrales (Motoras)
  {
    id: 'dorsolateral',
    name: 'Núcleo Dorsolateral',
    region: 'ventral',
    location: 'Porción dorsolateral del asta ventral (intumescencias cervical y lumbosacra)',
    description: 'Contiene motoneuronas alfa y gamma destinadas a la musculatura más distal de las extremidades: dedos, manos, antebrazos y pies.',
    rexedEquivalent: 'Lámina IX lateral',
    somaticRole: 'Control distal (manos / pies)',
    examImportance: 'Somatotopía: Posición lateral = control de zonas distales del cuerpo.'
  },
  {
    id: 'ventrolateral',
    name: 'Núcleo Ventrolateral',
    region: 'ventral',
    location: 'Porción ventrolateral del asta ventral',
    description: 'Motoneuronas que inervan la musculatura distal y media de las extremidades (brazo, antebrazo, muslo, pierna).',
    rexedEquivalent: 'Lámina IX',
    somaticRole: 'Control distal / intermedio (brazo, pierna)',
    examImportance: 'Uno de los 2 núcleos laterales de las astas ventrales.'
  },
  {
    id: 'central',
    name: 'Núcleo Central',
    region: 'ventral',
    location: 'Centro de la base del asta ventral (muy desarrollado en C3-C5 y lumbosacro)',
    description: 'Incluye agrupaciones motoras especializadas como el núcleo frénico (diafragma, C3-C5) y el núcleo espinal accesorio.',
    rexedEquivalent: 'Lámina IX central',
    somaticRole: 'Musculatura intermedia / respiratoria',
    examImportance: 'Identificar en la zona centro del asta anterior.'
  },
  {
    id: 'anterior',
    name: 'Núcleo Anterior',
    region: 'ventral',
    location: 'Punta más ventral del asta anterior',
    description: 'Motoneuronas para la flexión y extensión de grupos musculares axiales y de soporte postural.',
    rexedEquivalent: 'Lámina IX anterior',
    somaticRole: 'Músculos posturales / anteriores',
    examImportance: 'Identificar en el ápice anterior de la H.'
  },
  {
    id: 'dorsomedial',
    name: 'Núcleo Dorsomedial',
    region: 'ventral',
    location: 'Borde dorsomedial del asta ventral',
    description: 'Inerva músculos axiales del tronco y cuello (zonas proximales). Presente en casi todos los niveles medulares.',
    rexedEquivalent: 'Lámina IX medial',
    somaticRole: 'Control proximal (cuello, dorso)',
    examImportance: 'Somatotopía: Medial = control de zonas proximales o axiales de nuestro cuerpo.'
  },
  {
    id: 'ventromedial',
    name: 'Núcleo Ventromedial',
    region: 'ventral',
    location: 'Borde ventromedial del asta ventral',
    description: 'Inerva los músculos de la pared corporal anterior y columna vertebral (zonas proximales más anteriores).',
    rexedEquivalent: 'Lámina IX medial',
    somaticRole: 'Control proximal (tronco anterior, abdomen)',
    examImportance: 'Junto con el dorsomedial forma el par medial encargado del tronco proximal.'
  }
];

export const rexedLaminaeData = [
  { lamina: 'Lámina I', name: 'Zona marginal de Waldeyer', detail: 'Recibe fibras térmicas y de dolor nociceptivo primario.' },
  { lamina: 'Lámina II', name: 'Sustancia gelatinosa de Rolando', detail: 'Interneuronas que regulan la entrada del dolor (filtro modulador).' },
  { lamina: 'Lámina III y IV', name: 'Núcleo propio', detail: 'Sensibilidad táctil no dolorosa, presión y vibración.' },
  { lamina: 'Lámina V y VI', name: 'Base del asta posterior', detail: 'Procesa impulsos propioceptivos basales y aferencias mecánicas profundas.' },
  { lamina: 'Lámina VII', name: 'Zona intermedia (Clarke e Intermediolateral)', detail: 'Intermediolateral en T1-L2 (simpático) y columna de Clarke (propiocepción al cerebelo).' },
  { lamina: 'Lámina VIII', name: 'Zona medial del asta anterior', detail: 'Interneuronas de relevo motor y vías reticuloespinales.' },
  { lamina: 'Lámina IX', name: 'Columnas de motoneuronas (Alfa y Gamma)', detail: 'Islas de motoneuronas que proyectan por la raíz ventral a los músculos esqueléticos.' },
  { lamina: 'Lámina X', name: 'Sustancia gris central periependimaria', detail: 'Rodea el acueducto/canal central con LCR (vestigio del tubo neural).' }
];

export const spinalTractsData: SpinalTract[] = [
  // Columna Dorsal
  {
    id: 'gracilis',
    name: 'Fascículo Gracilis (de Goll)',
    type: 'eferente_dorsal',
    column: 'dorsal',
    origin: 'Ganglios de la raíz dorsal por debajo de T6 (miembros inferiores y pelvis)',
    destination: 'Núcleo Gracilis del bulbo raquídeo',
    function: 'Tacto discriminativo, vibración y propiocepción consciente de la mitad inferior del cuerpo.',
    examTip: 'Columna dorsal medial: Gracilis lleva información de abajo (piernas/pies).'
  },
  {
    id: 'cuneatus',
    name: 'Fascículo Cuneatus (de Burdach)',
    type: 'eferente_dorsal',
    column: 'dorsal',
    origin: 'Ganglios de la raíz dorsal por encima de T6 (miembros superiores, cuello, tórax)',
    destination: 'Núcleo Cuneatus del bulbo raquídeo',
    function: 'Tacto fino y propiocepción consciente de la mitad superior del cuerpo.',
    examTip: 'Columna dorsal lateral: Cuneatus lleva información de arriba (brazos/manos).'
  },
  {
    id: 'lissauer',
    name: 'Fascículo Dorsolateral (de Lissauer)',
    type: 'eferente_dorsal',
    column: 'dorsal',
    origin: 'Raíces dorsales que entran a la médula espinal',
    destination: 'Astas dorsales (suben y bajan 1 a 2 segmentos)',
    function: 'Límite y separación anatómica entre la columna dorsal y la columna lateral.',
    examTip: 'Definido en la clase como la separación entre la parte lateral y dorsal, formado por fibras que entran a la médula.'
  },

  // Ascendentes (Sensoriales)
  {
    id: 'espinotalamico_lateral',
    name: 'Fascículo Espinotalámico Lateral',
    type: 'ascendente',
    column: 'lateral',
    origin: 'Astas dorsales (médula espinal)',
    destination: 'Tálamo (núcleo VPL)',
    function: 'Dolor y temperatura.',
    examTip: 'Espino-talámico: de la médula al tálamo. Lateral = dolor y temperatura.'
  },
  {
    id: 'espinotalamico_anterior',
    name: 'Fascículo Espinotalámico Anterior',
    type: 'ascendente',
    column: 'ventral',
    origin: 'Astas dorsales (médula espinal)',
    destination: 'Tálamo',
    function: 'Tacto grueso (protopático) y presión leve.',
    examTip: 'Espino-talámico anterior: vía sensorial ascendente de la columna ventral.'
  },
  {
    id: 'espinocerebeloso_posterior',
    name: 'Fascículo Espinocerebeloso Posterior',
    type: 'ascendente',
    column: 'lateral',
    origin: 'Núcleo de Clarke (base del asta dorsal)',
    destination: 'Cerebelo',
    function: 'Propiocepción inconsciente del tronco y miembro inferior.',
    examTip: 'Espino-cerebeloso posterior: conecta Clarke con el cerebelo.'
  },
  {
    id: 'espinocerebeloso_anterior',
    name: 'Fascículo Espinocerebeloso',
    type: 'ascendente',
    column: 'lateral',
    origin: 'Médula espinal',
    destination: 'Cerebelo',
    function: 'Información propioceptiva y de arcos reflejos motores al cerebelo.',
    examTip: 'Mencionado en la lista de ascendentes de la clase.'
  },
  {
    id: 'espinoreticular',
    name: 'Fascículo Espinoreticular',
    type: 'ascendente',
    column: 'lateral',
    origin: 'Médula espinal',
    destination: 'Formación reticular del tronco encefálico',
    function: 'Componente afectivo y de alerta frente a estímulos dolorosos.',
    examTip: 'Espino-reticular: médula a formación reticular.'
  },
  {
    id: 'espinoolivar',
    name: 'Fascículo Espinoolivar',
    type: 'ascendente',
    column: 'lateral',
    origin: 'Médula espinal',
    destination: 'Núcleos olivares inferiores',
    function: 'Modulación refleja del movimiento y coordinación.',
    examTip: 'Espino-olivar: hacia las olivas bulbares.'
  },
  {
    id: 'espinotectal',
    name: 'Fascículo Espinotectal',
    type: 'ascendente',
    column: 'lateral',
    origin: 'Médula espinal',
    destination: 'Téctum mesencefálico (colículos superiores)',
    function: 'Reflejos espinovisuales (orientar la cabeza y ojos hacia un estímulo táctil o doloroso).',
    examTip: 'Espino-tectal: hacia el téctum mesencefálico.'
  },

  // Descendentes (Motores)
  {
    id: 'corticoespinal_lateral',
    name: 'Fascículo Corticoespinal Lateral',
    type: 'descendente',
    column: 'lateral',
    origin: 'Corteza motora cerebral (área 4 de Brodmann)',
    destination: 'Astas ventrales de la médula espinal',
    function: 'Vía motora voluntaria principal para el control fino y fraccionado de las extremidades distales.',
    examTip: 'Cortico-espinal: de la corteza a la médula. Lateral = 85-90% de fibras decusadas.'
  },
  {
    id: 'rubroespinal_lateral',
    name: 'Fascículo Rubroespinal Lateral',
    type: 'descendente',
    column: 'lateral',
    origin: 'Núcleo Rojo del mesencéfalo',
    destination: 'Astas ventrales de la médula',
    function: 'Control del tono de músculos flexores de extremidades superiores.',
    examTip: 'Rubro = núcleo rojo mesencefálico.'
  },
  {
    id: 'reticuloespinal_lateral',
    name: 'Fascículo Reticuloespinal Lateral',
    type: 'descendente',
    column: 'lateral',
    origin: 'Formación reticular bulbar',
    destination: 'Médula espinal',
    function: 'Modulación del tono muscular e inhibición refleja de extensores.',
    examTip: 'Reticulo-espinal lateral.'
  },
  {
    id: 'vestibuloespinal_lateral',
    name: 'Fascículo Vestibuloespinal Lateral',
    type: 'descendente',
    column: 'lateral',
    origin: 'Núcleos vestibulares (núcleo de Deiters)',
    destination: 'Médula espinal',
    function: 'Facilitación de músculos extensores antigravitatorios para mantener la postura erguida y el equilibrio.',
    examTip: 'Vestíbulo-espinal: equilibrio y tono postural.'
  },
  {
    id: 'olivoespinal',
    name: 'Fascículo Olivoespinal',
    type: 'descendente',
    column: 'lateral',
    origin: 'Núcleo olivar inferior',
    destination: 'Médula espinal cervical',
    function: 'Modulación del tono cervical y reflejos posturales.',
    examTip: 'De la oliva a la médula.'
  },
  {
    id: 'corticoespinal_ventral',
    name: 'Fascículo Corticoespinal Ventral / Anterior',
    type: 'descendente',
    column: 'ventral',
    origin: 'Corteza motora',
    destination: 'Astas ventrales medulares',
    function: 'Control motor de músculos axiales y proximales del tronco y cuello.',
    examTip: 'Corticoespinal anterior en columna ventral.'
  },
  {
    id: 'longitudinal_medial',
    name: 'Fascículo Longitudinal Medial',
    type: 'descendente',
    column: 'ventral',
    origin: 'Núcleos vestibulares y oculomotores',
    destination: 'Segmentos cervicales de la médula',
    function: 'Coordinación entre los movimientos de los ojos, la cabeza y el cuello.',
    examTip: 'En columna ventral, coordina cabeza y cuello.'
  },
  {
    id: 'tectoespinal',
    name: 'Fascículo Tecto-espinal',
    type: 'descendente',
    column: 'ventral',
    origin: 'Téctum (colículo superior mesencefálico)',
    destination: 'Médula espinal cervical',
    function: 'Reflejos posturales de la cabeza en respuesta a estímulos visuales y auditivos repentinos.',
    examTip: 'Tecto-espinal: del téctum a la médula cervical.'
  }
];

export const spinalCircuitSteps: SpinalCircuitStep[] = [
  {
    step: 1,
    name: '1. Captación Periférica por el Territorio Sensorial',
    location: 'Piel, husos musculares o articulaciones de la periferia',
    description: 'Cada nervio sensorial tiene un territorio corporal específico del cual recoge información (dermatoma/miotoma). La información viaja como impulso bioeléctrico hacia la columna vertebral.',
    actors: 'Terminaciones nerviosas periféricas y nervio espinal mixto.',
    bellMagendieRole: 'aferente',
    analogia: 'El mensajero que recoge la carta en la casa del cliente'
  },
  {
    step: 2,
    name: '2. Entrada por la Raíz Dorsal (Ley de Bell-Magendie)',
    location: 'Raíz dorsal aferente de la médula espinal',
    description: 'La información entra por la parte posterior de la médula a través de múltiples raicillas dorsales. El soma de la neurona pseudounipolar reside en el ganglio de la raíz dorsal.',
    actors: 'Fibras aferentes primarias y fascículo dorsolateral de Lissauer.',
    bellMagendieRole: 'aferente',
    analogia: 'La puerta de entrada trasera (dorsal) exclusiva para el input'
  },
  {
    step: 3,
    name: '3. Sinapsis en Sustancia Gris: Neuronas de Fascículo o Interneuronas',
    location: 'Astas dorsales y zona intermedia de la médula',
    description: 'Las fibras entrantes hacen sinapsis con dos tipos de neuronas: las Neuronas de Fascículo (que mandarán su axón hacia arriba) y las Interneuronas ("las chismosas del medio" que conectan directamente con la neurona motora para el reflejo rápido).',
    actors: 'Neuronas de fascículo, Interneuronas ("chismosas") y sinapsis químicas de glutamate/GABA.',
    bellMagendieRole: 'integracion',
    analogia: 'La central de clasificación postal que decide si sube la carta a la sede central o si responde de inmediato'
  },
  {
    step: 4,
    name: '4. Ascenso por Fascículos de la Sustancia Blanca hacia el Tálamo',
    location: 'Columnas dorsal, lateral o ventral de la médula',
    description: 'Los axones de las neuronas de fascículo suben por los cables de sustancia blanca (como los espinotalámicos o Gracilis/Cuneatus). Hacen relevo obligatorio en el Tálamo (excepto el sistema olfatorio).',
    actors: 'Fascículos ascendentes, bulbo raquídeo, y núcleos del Tálamo.',
    bellMagendieRole: 'relevo_cortical',
    analogia: 'El cable troncal de fibra óptica que sube a la central telefónica'
  },
  {
    step: 5,
    name: '5. Proyección al Área de Brodmann & Homúnculo Sensorial',
    location: 'Corteza parietal primaria (giro poscentral, áreas 3, 1, 2 de Brodmann)',
    description: 'La información impacta en el famoso Homúnculo Sensorial de la corteza parietal. Así como el cuerpo está trazado en los segmentos medulares, en la corteza existe un mapa idéntico de representación somatotópica consciente.',
    actors: 'Neuronas piramidales de la corteza parietal primaria.',
    bellMagendieRole: 'relevo_cortical',
    analogia: 'La pantalla de control donde el operador ve iluminado exactamente qué dedo fue tocado'
  },
  {
    step: 6,
    name: '6. Salida por Astas Ventrales & Raíz Ventral (Eferente)',
    location: 'Astas anteriores de la médula -> Raíz ventral -> Músculo efector',
    description: 'Para la respuesta motora (ya sea voluntaria desde la corteza vía corticoespinal o refleja inmediata como el reflejo rotuliano), las Neuronas Motoras Alfa o Gamma de las astas ventrales emiten su axón que sale por la raíz ventral eferente hasta el músculo.',
    actors: 'Motoneuronas Alfa y Gamma, raíz ventral eferente, placa motora muscular.',
    bellMagendieRole: 'eferente',
    analogia: 'La puerta de salida delantera (ventral) con los motores que mueven el músculo'
  }
];

export const flashcardsData: Flashcard[] = [
  {
    id: 'fc-1',
    category: 'Morfología & Segmentos',
    subcategory: '31 Segmentos',
    question: '¿En cuántos segmentos y pares de nervios se divide la médula espinal?',
    answer: 'Se divide en 31 segmentos correspondientes a 31 pares de nervios espinales: 8 Cervicales, 12 Torácicos, 5 Lumbares, 5 Sacros y 1 Coxígeo.',
    examNote: '31 pares: 8C, 12T, 5L, 5S, 1Co. La médula se parte en función de los nervios que entran y salen.',
    tags: ['Segmentos', '31 Pares', 'Examen']
  },
  {
    id: 'fc-2',
    category: 'Morfología & Segmentos',
    subcategory: 'Límite Medular',
    question: '¿Hasta qué vértebra llega la médula espinal en un adulto promedio y qué hay por debajo?',
    answer: 'Llega hasta la vértebra L1. De L1 hacia abajo ya no hay médula espinal; solo existen raíces nerviosas que forman la "Cauda Equina" o "Cola de Caballo".',
    examNote: 'Límite anatómico en adulto: L1. Por debajo es Cauda Equina.',
    tags: ['L1', 'Cauda Equina', 'Límite']
  },
  {
    id: 'fc-3',
    category: 'Morfología & Segmentos',
    subcategory: 'Ley de Bell-Magendie',
    question: '¿Qué establece la Ley de Bell-Magendie respecto a las raíces espinales?',
    answer: 'Establece que la Raíz Dorsal es aferente/sensorial (zona de recepción/input) y la Raíz Ventral es eferente/motora (zona de salida/output).',
    examNote: 'Raíz dorsal = input sensorial aferente. Raíz ventral = output motor eferente.',
    tags: ['Bell-Magendie', 'Aferente', 'Eferente']
  },
  {
    id: 'fc-4',
    category: 'Morfología & Segmentos',
    subcategory: 'Organización Tisular',
    question: '¿Cómo se distribuye la sustancia gris y blanca en la médula comparada con la corteza cerebral?',
    answer: 'A diferencia de la corteza cerebral (donde la sustancia gris está afuera), en la médula la sustancia gris está por dentro formando una "H" y la sustancia blanca está por fuera en la periferia actuando como cables.',
    examNote: 'Médula: Gris central en "H", blanca periférica (cables de subida y bajada).',
    tags: ['Sustancia Gris', 'Sustancia Blanca', 'Corte Transversal']
  },
  {
    id: 'fc-5',
    category: 'Morfología & Segmentos',
    subcategory: 'Acueducto / Conducto Central',
    question: '¿Qué es el agujero o acueducto central de la médula espinal y qué contiene?',
    answer: 'Es el vestigio del tubo neural embrionario que se cerraba como taquito y quedó como un pequeño orificio central que transporta líquido cefalorraquídeo.',
    examNote: 'Vestigio embrionario del tubo neural con líquido cefalorraquídeo.',
    tags: ['Acueducto', 'Tubo Neural', 'LCR']
  },
  {
    id: 'fc-6',
    category: 'Morfología & Segmentos',
    subcategory: 'Hernia de Disco',
    question: '¿Qué función tienen los discos vertebrales y qué ocurre en una hernia de disco?',
    answer: 'Los discos se encuentran en medio de las vértebras y funcionan como amortiguadores. Una hernia ocurre cuando el disco se desplaza e imposibilita que la información pase con fluidez, comprimiendo raíces nerviosas.',
    examNote: 'El disco amortigua; su desplazamiento bloquea el paso fluido del impulso nervioso.',
    tags: ['Hernia', 'Discos', 'Patología']
  },
  {
    id: 'fc-7',
    category: 'Morfología & Segmentos',
    subcategory: 'Proporción de Tejido',
    question: '¿Por qué la proporción de sustancia gris aumenta en ciertas regiones de la médula?',
    answer: 'Porque aumenta en los segmentos que controlan extremidades (cervical para brazos/hombros y lumbar/sacro para piernas/pies). Por eso la región dorsal/torácica tiene menor sustancia gris.',
    examNote: 'Más sustancia gris donde se controlan brazos y piernas; menos en región dorsal.',
    tags: ['Extremidades', 'Sustancia Gris', 'Intumescencias']
  },
  {
    id: 'fc-8',
    category: 'Tipos de Neuronas Medulares',
    subcategory: 'Clasificación Medular',
    question: '¿Cuáles son los 3 tipos de neuronas que contiene la médula espinal según la clase?',
    answer: '1. Neuronas Motoras (en astas ventrales, alfa o gamma).\n2. Neuronas de Fascículo (en astas dorsales, forman cables ascendentes).\n3. Interneuronas ("las chismosas del medio", intercomunican en sustancia gris y median reflejos).',
    examNote: '3 tipos: Motoras (alfa/gamma), De fascículo (cables hacia encéfalo), Interneuronas (reflejos).',
    tags: ['3 Tipos', 'Motoras', 'Fascículo', 'Interneuronas']
  },
  {
    id: 'fc-9',
    category: 'Tipos de Neuronas Medulares',
    subcategory: 'Neuronas Motoras',
    question: '¿Dónde se ubican las neuronas motoras en la médula y en qué subtipos se clasifican?',
    answer: 'Se ubican en las astas ventrales (anteriores) para enviar su axón hasta los efectores musculares ("hasta el dedito gordo del pie"). Se clasifican en neuronas motoras Alfa (α) o Gama (γ).',
    examNote: 'Astas ventrales; clasificadas en Alfa o Gama.',
    tags: ['Motoras', 'Alfa', 'Gamma', 'Astas Ventrales']
  },
  {
    id: 'fc-10',
    category: 'Tipos de Neuronas Medulares',
    subcategory: 'Neuronas de Fascículo',
    question: '¿Cuál es la función específica de las neuronas de fascículo?',
    answer: 'Reciben la información de las raíces dorsales, hacen sinapsis con ellas y proyectan sus axones hacia regiones subcorticales o corticales (hacia arriba), formando los fascículos o cables ascendentes de la sustancia blanca.',
    examNote: 'Forman los fascículos ascendentes que suben al encéfalo.',
    tags: ['Fascículo', 'Axones Ascendentes', 'Sinapsis']
  },
  {
    id: 'fc-11',
    category: 'Tipos de Neuronas Medulares',
    subcategory: 'Interneuronas',
    question: '¿Por qué el profesor describe a las interneuronas como "las chismosas del medio"?',
    answer: 'Porque están en la sustancia gris intercomunicando a las neuronas de fascículo con las neuronas motoras, recibiendo información que baja por los fascículos descendentes y mediando reflejos rápidos como el reflejo rotuliano.',
    examNote: 'Intercomunican neurona de fascículo con motora; median el reflejo rotuliano.',
    tags: ['Interneuronas', 'Reflejo Rotuliano', 'Chismosas']
  },
  {
    id: 'fc-12',
    category: 'Sustancia Gris (Núcleos)',
    subcategory: 'Astas Dorsales',
    question: '¿Cuáles son los 5 núcleos de las astas dorsales que el profesor pide identificar para el examen?',
    answer: '1. Zona de Waldeyer (más superficial/ápice).\n2. Sustancia gelatinosa (de Rolando).\n3. Núcleo propio.\n4. Núcleo de Clarke.\n5. Núcleo propioceptivo basal.',
    examNote: '"En el examen solo vendrá identificarlos": Waldeyer, Sustancia Gelatinosa, Propio, Clarke, Propioceptivo basal.',
    tags: ['Astas Dorsales', '5 Núcleos', 'Examen Identificación']
  },
  {
    id: 'fc-13',
    category: 'Sustancia Gris (Núcleos)',
    subcategory: 'Zona Intermedia',
    question: '¿Cuál es la diferencia entre el Núcleo Intermedio Medial y el Núcleo Intermedio Lateral?',
    answer: 'El Núcleo Intermedio Medial está todo el tiempo a lo largo de toda la médula. El Núcleo Intermedio Lateral SOLO está cuando existen las astas laterales a nivel torácico y lumbar (encargado del sistema simpático).',
    examNote: 'Intermedio medial = siempre. Intermedio lateral = solo toracolumbar (simpático).',
    tags: ['Intermedio Lateral', 'Intermedio Medial', 'Simpático']
  },
  {
    id: 'fc-14',
    category: 'Sustancia Gris (Núcleos)',
    subcategory: 'Astas Ventrales',
    question: '¿Cuáles son los 6 núcleos de las astas ventrales/anteriores?',
    answer: '1. Núcleo dorsolateral.\n2. Núcleo ventrolateral.\n3. Núcleo central.\n4. Núcleo anterior.\n5. Núcleo dorsomedial.\n6. Núcleo ventromedial.\n(2 laterales, 2 mediales, 1 central y 1 anterior).',
    examNote: 'Dorsolateral, Ventrolateral, Central, Anterior, Dorsomedial, Ventromedial.',
    tags: ['Astas Ventrales', '6 Núcleos Motores', 'Identificación']
  },
  {
    id: 'fc-15',
    category: 'Sustancia Gris (Núcleos)',
    subcategory: 'Somatotopía Motora',
    question: '¿Cómo se distribuye la somatotopía motora en las astas ventrales (medial vs lateral)?',
    answer: 'La región medial (núcleos dorsomedial y ventromedial) controla las zonas proximales del cuerpo (tronco, cuello). La región lateral (dorsolateral y ventrolateral) controla las regiones distales (brazos, manos, piernas).',
    examNote: 'Medial = control proximal (tronco). Lateral = control distal (brazos, manos, hombros, piernas).',
    tags: ['Somatotopía', 'Medial Proximal', 'Lateral Distal']
  },
  {
    id: 'fc-16',
    category: 'Láminas de Rexed',
    subcategory: 'Clasificación de Rexed',
    question: '¿En qué consiste la clasificación de Láminas de Rexed y para quién es especialmente útil?',
    answer: 'Rexed dividió la sustancia gris en 10 láminas secuenciadas y numeradas del 1 al 10 (I al X), desde las astas dorsales hacia las ventrales y luego la parte medial. Es especialmente útil para neurocirujanos.',
    examNote: '10 láminas secuenciadas del 1 al 10 (I a X). Muy útil para neurocirujanos.',
    tags: ['Rexed', '10 Láminas', 'Neurocirugía']
  },
  {
    id: 'fc-17',
    category: 'Sustancia Blanca (Fascículos)',
    subcategory: 'Columna Dorsal',
    question: '¿Qué fascículos componen la columna dorsal de la médula?',
    answer: 'Incluye al Fascículo Gracilis (medial), al Fascículo Cuneatus (lateral) y al Fascículo Dorsolateral (o de Lissauer).',
    examNote: 'Columna dorsal: Gracilis y Cuneatus. Fascículo dorsolateral en el límite.',
    tags: ['Columna Dorsal', 'Gracilis', 'Cuneatus']
  },
  {
    id: 'fc-18',
    category: 'Sustancia Blanca (Fascículos)',
    subcategory: 'Fascículo Dorsolateral (Lissauer)',
    question: '¿Qué es el fascículo dorsolateral o de Lissauer y dónde se sitúa?',
    answer: 'Es la separación anatómica que hay entre la parte lateral y dorsal de la médula. Está formado por las fibras que entran a la médula espinal por la raíz dorsal.',
    examNote: 'Separación entre columna lateral y dorsal; fibras que entran a la médula.',
    tags: ['Lissauer', 'Fascículo Dorsolateral', 'Límite']
  },
  {
    id: 'fc-19',
    category: 'Sustancia Blanca (Fascículos)',
    subcategory: 'Regla de Oro de los Fascículos',
    question: '¿Cuál es la regla de oro que enseña el profesor para entender los fascículos de las columnas lateral y ventral?',
    answer: '"Los nombres lo dicen todo: de dónde comienza y hacia dónde va/termina". Por ejemplo: cortico-espinal (de la corteza a la médula = descendente/motor); espino-talámico (de la médula al tálamo = ascendente/sensorial).',
    examNote: '"El nombre dice todo: de dónde comienza y hacia dónde va". Espino- = ascendente. -espinal = descendente.',
    tags: ['Regla Nemotécnica', 'Fascículos', 'Origen y Destino']
  },
  {
    id: 'fc-20',
    category: 'Sustancia Blanca (Fascículos)',
    subcategory: 'Fascículos Ascendentes',
    question: 'Menciona los fascículos ascendentes señalados en los apuntes de la clase:',
    answer: '1. Espinocerebeloso posterior\n2. Espinotalámico lateral\n3. Espinoreticular\n4. Espinocerebeloso\n5. Espinoolivar\n6. Espinotectal\n7. Espinotalámico anterior',
    examNote: 'Todos inician con "Espino-": llevan información hacia centros superiores.',
    tags: ['Ascendentes', 'Sensoriales', 'Espino-']
  },
  {
    id: 'fc-21',
    category: 'Sustancia Blanca (Fascículos)',
    subcategory: 'Fascículos Descendentes',
    question: 'Menciona fascículos descendentes de las columnas lateral y ventral:',
    answer: 'Laterales: Corticoespinal lateral, rubroespinal lateral, reticuloespinal lateral, olivoespinal, vestibuloespinal, vestibuloespinal lateral.\nVentrales: Longitudinal medial, reticuloespinal, corticoespinal anterior, vestibuloespinal, tecto-espinal.',
    examNote: 'Todos terminan en "-espinal": bajan impulsos motores desde encéfalo/corteza a la médula.',
    tags: ['Descendentes', 'Motores', '-espinal']
  },
  {
    id: 'fc-22',
    category: 'Sistema Autónomo & Vías',
    subcategory: 'Relevo Tálamo & Brodmann',
    question: '¿Por dónde asciende la información y dónde hace relevo antes de llegar a la corteza?',
    answer: 'La información sensorial sube directo por los fascículos ascendentes, hace relevo obligatorio en el Tálamo (a excepción del sistema olfatorio) y llega de manera directa al área de Brodmann correspondiente en la corteza parietal (homúnculo sensorial).',
    examNote: 'Relevo en el tálamo (excepto olfatorio) -> Área de Brodmann en corteza parietal primaria.',
    tags: ['Tálamo', 'Homúnculo Sensorial', 'Brodmann']
  },
  {
    id: 'fc-23',
    category: 'Sistema Autónomo & Vías',
    subcategory: 'Sistema Simpático y Parasimpático',
    question: '¿Dónde se originan las divisiones simpática y parasimpática en relación a la médula según la clase?',
    answer: 'El Sistema Simpático sale de las astas laterales a nivel Torácico y Lumbar (toracolumbar). El Sistema Parasimpático sale por 3 pares craneales (Vago X, Facial VII y otro) y división cervical/sacra.',
    examNote: 'Astas laterales toracolumbares = Simpático. Parasimpático = Pares craneales (X, VII) y sacro.',
    tags: ['Simpático', 'Parasimpático', 'Astas Laterales']
  },
  {
    id: 'fc-24',
    category: 'Morfología & Segmentos',
    subcategory: 'Surcos Medulares',
    question: '¿Cómo son los surcos posterior y anterior de la médula espinal?',
    answer: 'Atrás hay un surco dorsal cerrado/profundo (pegado), mientras que adelante hay un surco ventral abierto y amplio.',
    examNote: 'Surco dorsal cerrado/pegado atrás; surco ventral abierto adelante.',
    tags: ['Surco Dorsal', 'Surco Ventral', 'Corte']
  }
];

export const classLectureNotesMarkdown = `---
fecha:
hora:
materia: Neuroanatomía
profesor:
tipo: clase
unidad: Médula Espinal
estado: 🟢 Completo
tags:
  - notas-clase
---

## 🎯 Objetivos de la Clase
- [x] Conocer la morfología externa e interna de la médula espinal.
- [x] Comprender la ley de Bell-Magendie (raíz dorsal aferente vs raíz ventral eferente).
- [x] Identificar los 31 pares de nervios espinales y el límite vertebral L1 (Cauda Equina).
- [x] Diferenciar los 3 tipos de neuronas presentes en la médula (motoras, de fascículo, interneuronas).
- [x] Conocer las 2 clasificaciones de la sustancia gris (núcleos clásicos y 10 láminas de Rexed).
- [x] Reconocer los fascículos ascendentes y descendentes de las columnas dorsal, lateral y ventral.

---

## 📝 Apuntes / Notas Principales

- #  Médula Espinal
	- ## Zona de recepción y salida de información según la ley de bell-magendí 
	- ## 8 Cervicales, 12 Torácicos, 5 Lumbares, 5 Sacros, 1 Coxígeo (Total 31 pares)
	- ## La parte vertebral llega hasta antes de la región lumbar (L1 en adulto)
	- ## Hernia de disco ocurre al moverse e imposibilita pasar la información con fluidez, los discos se encuentran en medio de las vértebras y funcionan como amortiguador 
	- ## Está cubierta por las meninges (piamadre, aracnoides, duramadre)
	- ## Raíz dorsal aferente (sensorial/input) y Raíz ventral eferente (motora/output) y son muchas chiquitas
	- ## La parte medial tiene sustancia blanca por fuera y gris por dentro, a diferencia de la corteza cerebral en la médula la sustancia gris está por dentro
	- ## La proporción de la sustancia gris aumenta si tienen que controlar extremidades como brazos y piernas, así que la región dorsal tiene menor sustancia gris
	- ## Estructura: H en medio de sustancia gris, acueducto al centro con líquido cefalorraquídeo, sustancia blanca por fuera, astas dorsales, ventrales y laterales (en la zona torácica y lumbar)
	- ## Contiene 3 tipos de neuronas
		- ### Motoras (en astas ventrales, alfa o gamma, van hasta los músculos/pies)
		- ### De fascículo (reciben información de raíces dorsales y forman cables ascendentes hacia el encéfalo)
		- ### Interneuronas ("las chismosas del medio", intercomunican en sustancia gris, median reflejos como el rotuliano)
	- ## La sustancia gris se clasifica de 2 formas:
		- ### Forma clásica por Núcleos [En el examen solo vendrá identificarlos]
			- #### Astas dorsales de la médula: 
				- Zona de Waldeyer
				- Sustancia gelatinosa
				- Núcleo propio
				- Núcleo de Clarke
				- Núcleo propioceptivo basal
			- #### Zona intermedia / Astas laterales:
				- Núcleo intermedio medial (está todo el tiempo)
				- Núcleo intermedio lateral (solo en región torácica y lumbar, forma astas laterales del simpático)
			- #### Astas anteriores de la médula (Motoras):
				- Núcleo dorsolateral
				- Núcleo ventrolateral
				- Núcleo central
				- Núcleo anterior
				- Núcleo dorsomedial
				- Núcleo ventromedial
				- [Somatotopía: Medial = zonas proximales/tronco; Lateral = zonas distales/brazos/piernas]
		- ### Láminas de Rexed
			- #### Láminas y áreas secuenciadas y enumeradas del 1-10 (I a X, de dorsal a ventral y medial, útil para neurocirujanos)
	- ## Sustancia blanca, dividida en 3 columnas o funículos
		- ### Columna dorsal, incluye fascículo gracilis y cuneatus
			- Gracilis
			- Cuneatus
			- Dorsolateral (de Lissauer: separación entre dorsal y lateral, fibras que entran a la médula)
		- ### Columna lateral y ventral, sin demarcación o límite anatómico, son mixtos, los nombres lo dicen todo: de dónde comienza y hacia dónde va/termina
		- #### Descendentes (-espinal):
			- Corticoespinal lateral
			- Rubroespinal lateral
			- Reticuloespinal lateral
			- Olivoespinal
			- Vestibuloespinal
			- Vestibuloespinal lateral
			- Longitudinal medial
			- Reticuloespinal
			- Corticoespinal ventral
			- Vestibuloespinal ventral
			- Tecto-espinal
		- #### Ascendentes (Espino-):
			- Espinocerebeloso posterior
			- Espinotalámico lateral
			- Espinoreticular
			- Espinocerebeloso
			- Espinoolivar
			- Espinotectal
			- Espinotalámico anterior
	- ## La información sube directo, hace relevo en el tálamo (menos olfatorio) y llega de manera directa al área de Brodmann correspondiente (corteza parietal primaria, homúnculo sensorial)
	- ## Astas laterales salen al nivel torácico lumbar y se encargan del sistema simpático 
	- ## Y parasimpático: 3 pares craneales (vago 10, facial 7 y cervical/sacro)
`;
