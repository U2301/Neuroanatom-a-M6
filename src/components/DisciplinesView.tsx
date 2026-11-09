import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Activity, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Zap,
  Split,
  Eye,
  Cpu,
  BookmarkCheck,
  AlertCircle,
  HelpCircle,
  RotateCcw,
  CheckCircle2,
  Compass,
  ArrowDownUp,
  Brain
} from 'lucide-react';
import { 
  spinalNucleiData, 
  rexedLaminaeData, 
  spinalTractsData 
} from '../data/neuroData';
import { SpinalNucleus, SpinalTract } from '../types';

export const DisciplinesView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'anatomia' | 'neuronas' | 'nucleos' | 'rexed' | 'fasciculos'>('anatomia');
  
  // Interactive Cross-Section Hotspots
  const [selectedHotspot, setSelectedHotspot] = useState<string>('h_shape');

  // Interactive Reflex Simulator State
  const [reflexSimStep, setReflexSimStep] = useState<number>(0);
  const [reflexType, setReflexType] = useState<'rotuliano' | 'sensorial_ascendente'>('rotuliano');

  // Nucleus selection
  const [selectedNucleus, setSelectedNucleus] = useState<SpinalNucleus>(spinalNucleiData[0]);
  const [nucleusRegionFilter, setNucleusRegionFilter] = useState<'all' | 'dorsal' | 'intermedia' | 'ventral'>('all');

  // Exam Practice Quiz for Nuclei ("En el examen solo vendrá identificarlos")
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [quizSelectedAnswer, setQuizSelectedAnswer] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  // Tracts filter
  const [tractColumnFilter, setTractColumnFilter] = useState<'all' | 'dorsal' | 'lateral' | 'ventral'>('all');
  const [tractTypeFilter, setTractTypeFilter] = useState<'all' | 'ascendente' | 'descendente'>('all');
  const [selectedTract, setSelectedTract] = useState<SpinalTract>(spinalTractsData[0]);

  // Quiz questions based on teacher's specific class notes
  const quizQuestions = [
    {
      question: '¿Qué núcleo sensorial está en la capa más superficial (ápice) del asta dorsal?',
      options: ['Zona de Waldeyer', 'Núcleo de Clarke', 'Sustancia Gelatinosa', 'Núcleo Propio'],
      correct: 'Zona de Waldeyer',
      feedback: 'Correcto. La Zona de Waldeyer ocupa el ápice más posterior del asta dorsal (Lámina I).'
    },
    {
      question: '¿Qué núcleo de la zona intermedia solo existe a nivel torácico y lumbar, formando las astas laterales?',
      options: ['Núcleo Intermedio Medial', 'Núcleo Intermedio Lateral', 'Núcleo Central', 'Núcleo de Clarke'],
      correct: 'Núcleo Intermedio Lateral',
      feedback: '¡Exacto! El núcleo intermedio lateral solo se presenta en la región toracolumbar y se encarga del sistema simpático.'
    },
    {
      question: 'Según la somatotopía de las astas ventrales, ¿qué núcleos controlan las zonas distales (brazos, manos, piernas)?',
      options: ['Núcleos dorsolateral y ventrolateral', 'Núcleos dorsomedial y ventromedial', 'Núcleo central', 'Núcleo propio'],
      correct: 'Núcleos dorsolateral y ventrolateral',
      feedback: '¡Muy bien! Los núcleos laterales (dorso y ventrolateral) controlan las extremidades distales, mientras que los mediales controlan el tronco proximal.'
    },
    {
      question: '¿Qué núcleo del asta dorsal recibe propiocepción inconsciente y proyecta hacia el cerebelo?',
      options: ['Núcleo de Clarke', 'Zona de Waldeyer', 'Sustancia Gelatinosa de Rolando', 'Núcleo Anterior'],
      correct: 'Núcleo de Clarke',
      feedback: 'Correcto. La columna o núcleo de Clarke conecta con el fascículo espinocerebeloso.'
    },
    {
      question: '¿Qué fascículo marca la separación entre la parte lateral y dorsal, formado por fibras que entran?',
      options: ['Fascículo Dorsolateral (de Lissauer)', 'Fascículo Gracilis', 'Fascículo Corticoespinal', 'Fascículo Cuneatus'],
      correct: 'Fascículo Dorsolateral (de Lissauer)',
      feedback: '¡Excelente! El fascículo dorsolateral de Lissauer delimita la columna dorsal de la lateral.'
    }
  ];

  const handleQuizAnswer = (option: string) => {
    if (quizSelectedAnswer !== null) return;
    setQuizSelectedAnswer(option);
    if (option === quizQuestions[quizIndex].correct) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuiz = () => {
    if (quizIndex + 1 < quizQuestions.length) {
      setQuizIndex(prev => prev + 1);
      setQuizSelectedAnswer(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setQuizIndex(0);
    setQuizSelectedAnswer(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  const filteredNuclei = spinalNucleiData.filter(n => {
    if (nucleusRegionFilter === 'all') return true;
    return n.region === nucleusRegionFilter;
  });

  const filteredTracts = spinalTractsData.filter(t => {
    const matchesCol = tractColumnFilter === 'all' || t.column === tractColumnFilter;
    const matchesType = tractTypeFilter === 'all' || 
      (tractTypeFilter === 'ascendente' && (t.type === 'ascendente' || t.type === 'eferente_dorsal')) ||
      (tractTypeFilter === 'descendente' && t.type === 'descendente');
    return matchesCol && matchesType;
  });

  return (
    <section id="view-disciplines" className="block space-y-6 font-sans">
      
      {/* 1. Header & Section Sub-Tabs */}
      <div className="bg-white rounded-2xl border border-[#d4cbc2] p-4 sm:p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#292420]">
              Médula Espinal: Estructuras, Neuronas & Fascículos
            </h2>
            <p className="text-xs text-[#787169] mt-0.5">
              Anatomía • 3 Tipos de Neuronas • Núcleos de Sustancia Gris • 10 Láminas de Rexed • 17 Fascículos
            </p>
          </div>

          {/* Subtab Selector */}
          <div className="flex items-center gap-1.5 bg-[#f5efe9] p-1.5 rounded-xl border border-[#d4cbc2]/70 flex-wrap">
            <button
              onClick={() => setActiveSubTab('anatomia')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'anatomia'
                  ? 'bg-[#2b553c] text-white shadow-2xs'
                  : 'text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>1. Anatomía & Corte Transversal</span>
            </button>

            <button
              onClick={() => setActiveSubTab('neuronas')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'neuronas'
                  ? 'bg-[#1d5e68] text-white shadow-2xs'
                  : 'text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>2. Los 3 Tipos de Neuronas</span>
            </button>

            <button
              onClick={() => setActiveSubTab('nucleos')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'nucleos'
                  ? 'bg-[#704812] text-white shadow-2xs'
                  : 'text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>3. Núcleos (Sustancia Gris)</span>
            </button>

            <button
              onClick={() => setActiveSubTab('rexed')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'rexed'
                  ? 'bg-[#8a4b18] text-white shadow-2xs'
                  : 'text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              <Split className="w-3.5 h-3.5" />
              <span>4. Láminas de Rexed (I-X)</span>
            </button>

            <button
              onClick={() => setActiveSubTab('fasciculos')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'fasciculos'
                  ? 'bg-[#2a5078] text-white shadow-2xs'
                  : 'text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              <ArrowDownUp className="w-3.5 h-3.5" />
              <span>5. Fascículos & Columnas</span>
            </button>
          </div>
        </div>
      </div>

      {/* SUBTAB 1: ANATOMÍA & CORTE TRANSVERSAL */}
      {activeSubTab === 'anatomia' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Interactive Diagram of the Spinal Cross-Section */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-[#d4cbc2]/60 pb-2">
                  <div>
                    <h3 className="text-sm font-bold text-[#292420] flex items-center gap-1.5">
                      <Compass className="w-4 h-4 text-[#2b553c]" />
                      <span>Corte Transversal Prototípico de la Médula</span>
                    </h3>
                    <p className="text-[11px] text-[#787169]">
                      Haz clic en las zonas anatómicas para inspeccionar los detalles de la clase.
                    </p>
                  </div>
                  <span className="text-[10px] font-semibold bg-[#edf5f0] text-[#2b553c] px-2 py-0.5 rounded">
                    Organización Inversa a la Corteza
                  </span>
                </div>

                {/* SVG Visual Representation of Spinal Cord in "H" */}
                <div className="relative bg-[#fcfbf9] rounded-xl border border-[#d4cbc2] p-4 flex items-center justify-center min-h-[300px]">
                  <svg viewBox="0 0 460 320" className="w-full max-w-[440px] select-none">
                    {/* Background Vertebral Ring Guide */}
                    <ellipse cx="230" cy="160" rx="200" ry="135" fill="#f4eee7" stroke="#d4cbc2" strokeWidth="2" strokeDasharray="4 4" />
                    
                    {/* Meninges Layers (Duramadre, Aracnoides, Piamadre) */}
                    <ellipse cx="230" cy="160" rx="180" ry="118" fill="#eae1d6" stroke="#9e8f81" strokeWidth="2.5" />
                    <ellipse cx="230" cy="160" rx="172" ry="110" fill="#dfd3c5" stroke="#787169" strokeWidth="1.5" />
                    <ellipse cx="230" cy="160" rx="165" ry="103" fill="#ffffff" stroke="#2b553c" strokeWidth="2" />

                    {/* Fissures / Sulci: Posterior/Dorsal Sulcus (Closed/Deep) vs Anterior/Ventral Sulcus (Open) */}
                    {/* Posterior Median Sulcus (Top = Dorsal / Espalda) */}
                    <line x1="230" y1="57" x2="230" y2="125" stroke="#787169" strokeWidth="3" />
                    {/* Anterior Median Fissure (Bottom = Ventral / Vientre - Abierto) */}
                    <polygon points="220,263 240,263 234,195 226,195" fill="#eae1d6" stroke="#787169" strokeWidth="1.5" />

                    {/* White Matter Peripheral Columns (Clickable) */}
                    <path
                      d="M 120 70 Q 230 40 340 70 Q 395 160 340 250 Q 230 270 120 250 Q 65 160 120 70 Z"
                      fill={selectedHotspot === 'sustancia_blanca' ? '#e1ecf4' : '#edf4fa'}
                      stroke={selectedHotspot === 'sustancia_blanca' ? '#2a5078' : '#b8c9d9'}
                      strokeWidth="2"
                      className="cursor-pointer transition hover:opacity-90"
                      onClick={() => setSelectedHotspot('sustancia_blanca')}
                    />

                    {/* Central Gray Matter "H" Shape */}
                    <path
                      d="M 175 90 
                         Q 195 105 210 135 
                         Q 220 145 230 145 
                         Q 240 145 250 135 
                         Q 265 105 285 90 
                         Q 295 100 290 125 
                         Q 275 145 260 155 
                         Q 285 160 295 165
                         Q 285 175 260 178 
                         Q 275 200 285 225 
                         Q 270 235 250 230 
                         Q 240 205 230 185 
                         Q 220 205 210 230 
                         Q 190 235 175 225 
                         Q 185 200 200 178 
                         Q 175 175 165 165
                         Q 175 160 200 155 
                         Q 185 145 170 125 
                         Q 165 100 175 90 Z"
                      fill={selectedHotspot === 'h_shape' ? '#c7ab88' : '#d8be9b'}
                      stroke="#704812"
                      strokeWidth="2.5"
                      className="cursor-pointer transition hover:brightness-95"
                      onClick={() => setSelectedHotspot('h_shape')}
                    />

                    {/* Central Aqueduct / Canal Central (Vestigio Tubo Neural con LCR) */}
                    <circle
                      cx="230"
                      cy="165"
                      r="7"
                      fill={selectedHotspot === 'acueducto' ? '#4da2d6' : '#8bc8ec'}
                      stroke="#205b76"
                      strokeWidth="2"
                      className="cursor-pointer transition"
                      onClick={() => setSelectedHotspot('acueducto')}
                    />

                    {/* Dorsal Horns (Astas Dorsales - Top / Espalda) */}
                    <circle cx="185" cy="98" r="10" fill="#704812" className="cursor-pointer hover:scale-110 transition" onClick={() => setSelectedHotspot('asta_dorsal')} />
                    <circle cx="275" cy="98" r="10" fill="#704812" className="cursor-pointer hover:scale-110 transition" onClick={() => setSelectedHotspot('asta_dorsal')} />

                    {/* Lateral Horns (Astas Laterales - Toracolumbar Simpático) */}
                    <polygon points="160,165 175,158 175,172" fill="#8a4b18" className="cursor-pointer" onClick={() => setSelectedHotspot('asta_lateral')} />
                    <polygon points="300,165 285,158 285,172" fill="#8a4b18" className="cursor-pointer" onClick={() => setSelectedHotspot('asta_lateral')} />

                    {/* Ventral Horns (Astas Ventrales - Bottom / Vientre - Motor) */}
                    <circle cx="190" cy="220" r="13" fill="#1d5e68" className="cursor-pointer hover:scale-110 transition" onClick={() => setSelectedHotspot('asta_ventral')} />
                    <circle cx="270" cy="220" r="13" fill="#1d5e68" className="cursor-pointer hover:scale-110 transition" onClick={() => setSelectedHotspot('asta_ventral')} />

                    {/* Nerve Roots: Dorsal Root (Aferente) & Ventral Root (Eferente) */}
                    {/* Dorsal Root Incoming (Top) */}
                    <path d="M 60 70 Q 120 75 175 92" stroke="#2b553c" strokeWidth="3" fill="none" strokeDasharray="3 3" />
                    <circle cx="95" cy="72" r="10" fill="#2b553c" className="cursor-pointer" onClick={() => setSelectedHotspot('raiz_dorsal')} />
                    <text x="95" y="55" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#2b553c">Raíz Dorsal (Aferente)</text>

                    {/* Ventral Root Outgoing (Bottom) */}
                    <path d="M 180 225 Q 120 245 60 255" stroke="#1d5e68" strokeWidth="3" fill="none" />
                    <circle cx="95" cy="250" r="8" fill="#1d5e68" className="cursor-pointer" onClick={() => setSelectedHotspot('raiz_ventral')} />
                    <text x="95" y="275" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#1d5e68">Raíz Ventral (Eferente)</text>

                    {/* Anatomical Orientation Markers */}
                    <text x="230" y="24" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#787169">DORSAL / POSTERIOR (Espalda)</text>
                    <text x="230" y="308" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#787169">VENTRAL / ANTERIOR (Vientre)</text>
                  </svg>
                </div>

                {/* Hotspot Quick Selectors */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#d4cbc2]/60">
                  <span className="text-[11px] font-semibold text-[#787169] self-center mr-1">Zonas:</span>
                  {[
                    { id: 'h_shape', label: 'Sustancia Gris en H' },
                    { id: 'sustancia_blanca', label: 'Sustancia Blanca (Cables)' },
                    { id: 'acueducto', label: 'Acueducto (LCR)' },
                    { id: 'asta_dorsal', label: 'Astas Dorsales (Input)' },
                    { id: 'asta_lateral', label: 'Astas Laterales (Simpático)' },
                    { id: 'asta_ventral', label: 'Astas Ventrales (Motor)' },
                    { id: 'raiz_dorsal', label: 'Ley Bell-Magendie (Dorsal)' },
                    { id: 'raiz_ventral', label: 'Ley Bell-Magendie (Ventral)' },
                  ].map(btn => (
                    <button
                      key={btn.id}
                      onClick={() => setSelectedHotspot(btn.id)}
                      className={`px-2 py-0.5 text-xs rounded transition cursor-pointer ${
                        selectedHotspot === btn.id
                          ? 'bg-[#2b553c] text-white font-medium shadow-2xs'
                          : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Information Panel for Selected Hotspot */}
              <div className="mt-4 p-3 bg-[#fcf5e9] rounded-xl border border-[#e8d5b5]">
                {selectedHotspot === 'h_shape' && (
                  <div>
                    <h4 className="text-xs font-bold text-[#704812] mb-1">
                      Sustancia Gris Medular en Forma de "H":
                    </h4>
                    <p className="text-xs text-[#52330a] leading-relaxed">
                      A diferencia de la corteza cerebral, donde la sustancia gris está en el exterior, en la médula espinal la sustancia gris queda por dentro agrupada como una "H". Alberga los cuerpos neuronales y se subdivide en astas dorsales, intermedias y ventrales.
                    </p>
                  </div>
                )}
                {selectedHotspot === 'sustancia_blanca' && (
                  <div>
                    <h4 className="text-xs font-bold text-[#2a5078] mb-1">
                      Sustancia Blanca Periférica (Los Cables):
                    </h4>
                    <p className="text-xs text-[#122a44] leading-relaxed">
                      Son los cables mielinizados que suben y bajan la información. En las regiones cervicales hay más sustancia blanca porque lleva todos los cables del cuerpo; hacia abajo (sacro) disminuye la sustancia blanca al haber menos cables ascendentes/descendentes.
                    </p>
                  </div>
                )}
                {selectedHotspot === 'acueducto' && (
                  <div>
                    <h4 className="text-xs font-bold text-[#205b76] mb-1">
                      Acueducto Central (Conducto Ependimario):
                    </h4>
                    <p className="text-xs text-[#0e3444] leading-relaxed">
                      "Este agujerito es el vestigio de ese tubo neural que se cerraba como taquito y que quedaba un agujerito en medio". Contiene líquido cefalorraquídeo a todo lo largo del eje medular.
                    </p>
                  </div>
                )}
                {selectedHotspot === 'asta_dorsal' && (
                  <div>
                    <h4 className="text-xs font-bold text-[#704812] mb-1">
                      Astas Dorsales (Picos Sensoriales):
                    </h4>
                    <p className="text-xs text-[#52330a] leading-relaxed">
                      Picos dirigidos hacia la espalda. Contienen 5 núcleos clave: Waldeyer, Sustancia Gelatinosa de Rolando, Núcleo Propio, Núcleo de Clarke y Propioceptivo Basal. Reciben la información sensorial de la raíz dorsal.
                    </p>
                  </div>
                )}
                {selectedHotspot === 'asta_lateral' && (
                  <div>
                    <h4 className="text-xs font-bold text-[#8a4b18] mb-1">
                      Astas Laterales (Nivel Torácico y Lumbar):
                    </h4>
                    <p className="text-xs text-[#4a2408] leading-relaxed">
                      "No están todo el tiempo; solamente en ciertos segmentos: a nivel torácico y lumbar". Contienen el Núcleo Intermedio Lateral que se encarga del Sistema Nervioso Simpático.
                    </p>
                  </div>
                )}
                {selectedHotspot === 'asta_ventral' && (
                  <div>
                    <h4 className="text-xs font-bold text-[#1d5e68] mb-1">
                      Astas Ventrales (Motoras):
                    </h4>
                    <p className="text-xs text-[#0f3238] leading-relaxed">
                      Picos anteriores redondeados. Contienen neuronas motoras (Alfa y Gamma) que envían axones a los músculos ("hasta el dedito gordo del pie"). La región medial controla zonas proximales (tronco); la lateral controla zonas distales (brazos/piernas).
                    </p>
                  </div>
                )}
                {selectedHotspot === 'raiz_dorsal' && (
                  <div>
                    <h4 className="text-xs font-bold text-[#2b553c] mb-1">
                      Ley de Bell-Magendie: Raíz Dorsal Aferente (Input):
                    </h4>
                    <p className="text-xs text-[#162e21] leading-relaxed">
                      Múltiples raicillas que entran por detrás. Transportan la información sensorial de la piel, músculos y articulaciones hacia el interior de la médula.
                    </p>
                  </div>
                )}
                {selectedHotspot === 'raiz_ventral' && (
                  <div>
                    <h4 className="text-xs font-bold text-[#1d5e68] mb-1">
                      Ley de Bell-Magendie: Raíz Ventral Eferente (Output):
                    </h4>
                    <p className="text-xs text-[#0f3238] leading-relaxed">
                      Fibras motoras que salen por delante de la médula espinal para contraer los músculos esqueléticos y ejecutar las respuestas voluntarias o reflejas.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Segments, L1 Limit, Cauda Equina & Hernia */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Card 1: 31 Pares de Nervios */}
              <div className="bg-white rounded-2xl border border-[#d4cbc2] p-4 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold text-[#292420] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#2b553c]" />
                    <span>Los 31 Pares de Nervios Espinales</span>
                  </h4>
                  <span className="text-[11px] font-bold text-[#2b553c] bg-[#edf5f0] px-2 py-0.5 rounded">
                    Total: 31 Segmentos
                  </span>
                </div>
                <p className="text-xs text-[#49423c] leading-relaxed mb-3">
                  "La médula se divide en tantos segmentos como nerviecitos entran y salen a ella". Cada uno inerva un territorio corporal específico (dermatoma/miotoma).
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-[#fbf8f5] rounded-lg border border-[#d4cbc2]">
                    <span className="font-bold text-[#2b553c]">8 Cervicales</span>
                    <p className="text-[11px] text-[#787169] mt-0.5">Control de cuello, hombros y brazos.</p>
                  </div>
                  <div className="p-2 bg-[#fbf8f5] rounded-lg border border-[#d4cbc2]">
                    <span className="font-bold text-[#2b553c]">12 Torácicos</span>
                    <p className="text-[11px] text-[#787169] mt-0.5">Tronco, tórax y astas laterales (simpático).</p>
                  </div>
                  <div className="p-2 bg-[#fbf8f5] rounded-lg border border-[#d4cbc2]">
                    <span className="font-bold text-[#2b553c]">5 Lumbares</span>
                    <p className="text-[11px] text-[#787169] mt-0.5">Caderas, muslos y piernas.</p>
                  </div>
                  <div className="p-2 bg-[#fbf8f5] rounded-lg border border-[#d4cbc2]">
                    <span className="font-bold text-[#2b553c]">5 Sacros + 1 Coxígeo</span>
                    <p className="text-[11px] text-[#787169] mt-0.5">Pies, periné y órganos pélvicos.</p>
                  </div>
                </div>
              </div>

              {/* Card 2: Límite L1 & Cauda Equina */}
              <div className="bg-white rounded-2xl border border-[#d4cbc2] p-4 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#704812] mb-1">
                  <AlertCircle className="w-3.5 h-3.5 text-[#704812]" />
                  <span>Límite Vertebral L1 & Cauda Equina (Cola de Caballo):</span>
                </div>
                <p className="text-xs text-[#49423c] leading-relaxed mb-2">
                  "En un cuerpo adulto promedio la médula llega hasta la vértebra L1 y de aquí para abajo ya no hay médula espinal, hay puras raicitas nerviosas: la Cauda Equina o Cola de Caballo".
                </p>
                <div className="p-2.5 bg-[#fcf5e9] rounded-lg border border-[#e8d5b5] text-xs text-[#52330a]">
                  <strong>Dato de examen:</strong> Las punciones lumbares se realizan por debajo de L1 (en L3-L4 o L4-L5) para no dañar la médula espinal.
                </div>
              </div>

              {/* Card 3: Discos Intervertebrales & Hernia de Disco */}
              <div className="bg-white rounded-2xl border border-[#d4cbc2] p-4 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a4b18] mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8a4b18]" />
                  <span>Discos Vertebrales & Hernia de Disco:</span>
                </div>
                <p className="text-xs text-[#49423c] leading-relaxed">
                  "Los discos se encuentran en medio de las vértebras y funcionan como amortiguador. La hernia de disco ocurre al moverse e imposibilita pasar la información con fluidez", provocando compresión de las raíces nerviosas espinales.
                </p>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* SUBTAB 2: LOS 3 TIPOS DE NEURONAS MEDULARES */}
      {activeSubTab === 'neuronas' && (
        <div className="space-y-6">
          
          {/* Top 3 Cards of Neuronal Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* 1. Neuronas Motoras */}
            <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1d5e68]">
                    Tipo 1: Motoras
                  </span>
                  <span className="text-[10px] bg-[#eaf3f5] text-[#0f3238] font-bold px-2 py-0.5 rounded">
                    Astas Ventrales
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#292420] mb-2">
                  Neuronas Motoras (Alfa y Gama)
                </h3>
                <p className="text-xs text-[#49423c] leading-relaxed mb-3">
                  "Están en las astas ventrales para sacar el axón e ir hasta el dedito gordo del pie o donde sea necesario". Son las efectoras directas del movimiento.
                </p>

                <div className="space-y-1.5 text-xs text-[#231f1c] mb-3">
                  <div className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#1d5e68] flex-shrink-0 mt-0.5" />
                    <span><strong>Alfa (α):</strong> Inervan fibras musculares extrafusales (fuerza de contracción).</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#1d5e68] flex-shrink-0 mt-0.5" />
                    <span><strong>Gama (γ):</strong> Inervan husos musculares intrafusales (tono muscular).</span>
                  </div>
                </div>
              </div>

              <div className="p-2.5 bg-[#eaf3f5] rounded-xl border border-[#c4dce2] text-[11px] text-[#0f3238]">
                <strong>Ley de Bell-Magendie:</strong> Su axón sale exclusivamente por la <em>raíz ventral eferente</em>.
              </div>
            </div>

            {/* 2. Neuronas de Fascículo */}
            <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2a5078]">
                    Tipo 2: De Fascículo
                  </span>
                  <span className="text-[10px] bg-[#edf4fa] text-[#122a44] font-bold px-2 py-0.5 rounded">
                    Astas Dorsales
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#292420] mb-2">
                  Neuronas de Fascículo
                </h3>
                <p className="text-xs text-[#49423c] leading-relaxed mb-3">
                  "Son las neuronas a las que llega la información de las raíces dorsales y hacen sinapsis con ellas. Sacan sus axones y los mandan hacia regiones subcorticales o corticales hacia arriba".
                </p>

                <div className="space-y-1.5 text-xs text-[#231f1c] mb-3">
                  <div className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#2a5078] flex-shrink-0 mt-0.5" />
                    <span>Forman los cables ascendentes (fascículos) de la sustancia blanca.</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#2a5078] flex-shrink-0 mt-0.5" />
                    <span>Conectan con el tálamo, cerebelo, colículos superiores y formación reticular.</span>
                  </div>
                </div>
              </div>

              <div className="p-2.5 bg-[#edf4fa] rounded-xl border border-[#c2d7eb] text-[11px] text-[#122a44]">
                <strong>Origen de los Fascículos:</strong> Por eso se les llama <em>"de Fascículo"</em>, porque originan los tractos ascendentes.
              </div>
            </div>

            {/* 3. Interneuronas */}
            <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8a4b18]">
                    Tipo 3: Interneuronas
                  </span>
                  <span className="text-[10px] bg-[#faf0eb] text-[#4a2408] font-bold px-2 py-0.5 rounded">
                    Sustancia Gris
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#292420] mb-2">
                  Interneuronas ("Las Chismosas")
                </h3>
                <p className="text-xs text-[#49423c] leading-relaxed mb-3">
                  "Son las chismosas del medio que están en la sustancia gris, intercomunicando a las neuronas de fascículo con las neuronas motoras, pero tal vez también recibiendo la información de los fascículos descendentes".
                </p>

                <div className="space-y-1.5 text-xs text-[#231f1c] mb-3">
                  <div className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#8a4b18] flex-shrink-0 mt-0.5" />
                    <span>Median circuitos rápidos como el <strong>reflejo rotuliano</strong>.</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#8a4b18] flex-shrink-0 mt-0.5" />
                    <span>Reciben órdenes superiores descendentes y modulan el disparo motor.</span>
                  </div>
                </div>
              </div>

              <div className="p-2.5 bg-[#faf0eb] rounded-xl border border-[#edd1c2] text-[11px] text-[#4a2408]">
                <strong>Rol reflejo:</strong> Permiten la respuesta inmediata sin esperar a que el mensaje suba a la corteza.
              </div>
            </div>

          </div>

          {/* Interactive Reflex Simulator: Reflejo Rotuliano vs Ascenso Sensorial */}
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-[#d4cbc2]/60 pb-3">
              <div>
                <h3 className="text-sm font-bold text-[#292420] flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#2b553c]" />
                  <span>Simulador Interactivo del Circuito Neuronal Medular</span>
                </h3>
                <p className="text-xs text-[#787169]">
                  Observa cómo actúan la raíz dorsal, las interneuronas, las motoneuronas y las de fascículo.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setReflexType('rotuliano'); setReflexSimStep(0); }}
                  className={`px-3 py-1 text-xs rounded-md font-medium transition cursor-pointer ${
                    reflexType === 'rotuliano'
                      ? 'bg-[#2b553c] text-white shadow-2xs'
                      : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
                  }`}
                >
                  Arco Reflejo Rotuliano
                </button>
                <button
                  onClick={() => { setReflexType('sensorial_ascendente'); setReflexSimStep(0); }}
                  className={`px-3 py-1 text-xs rounded-md font-medium transition cursor-pointer ${
                    reflexType === 'sensorial_ascendente'
                      ? 'bg-[#2b553c] text-white shadow-2xs'
                      : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
                  }`}
                >
                  Vía Ascendente al Tálamo
                </button>
              </div>
            </div>

            {/* Stepper Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-4">
              {[
                { s: 0, title: '1. Estímulo', desc: reflexType === 'rotuliano' ? 'Golpe en tendón rotuliano' : 'Estímulo táctil/dolor' },
                { s: 1, title: '2. Entrada Dorsal', desc: 'Raíz dorsal aferente (Bell-Magendie)' },
                { s: 2, title: '3. Sinapsis en H', desc: reflexType === 'rotuliano' ? 'Interneurona ("chismosa")' : 'Neurona de Fascículo' },
                { s: 3, title: '4. Respuesta', desc: reflexType === 'rotuliano' ? 'Motoneurona Alfa -> Patada' : 'Fascículo sube al Tálamo' },
              ].map(step => (
                <button
                  key={step.s}
                  onClick={() => setReflexSimStep(step.s)}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                    reflexSimStep === step.s
                      ? 'bg-[#edf5f0] border-[#2b553c] shadow-2xs'
                      : 'bg-[#fbf8f5] border-[#d4cbc2] hover:bg-[#f5efe9]'
                  }`}
                >
                  <span className={`text-[11px] font-bold block ${reflexSimStep === step.s ? 'text-[#2b553c]' : 'text-[#787169]'}`}>
                    {step.title}
                  </span>
                  <span className="text-xs font-medium text-[#292420] mt-0.5 block leading-tight">
                    {step.desc}
                  </span>
                </button>
              ))}
            </div>

            {/* Simulation Graphic & Narrative */}
            <div className="p-4 bg-[#fbf8f5] rounded-xl border border-[#d4cbc2]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#2b553c] uppercase tracking-wider">
                  Fase {reflexSimStep + 1} de 4:
                </span>
                <button
                  onClick={() => setReflexSimStep(prev => (prev + 1) % 4)}
                  className="px-3 py-1 bg-[#2b553c] text-white text-xs font-medium rounded-md hover:bg-[#1f3f2c] transition cursor-pointer flex items-center gap-1.5"
                >
                  <span>{reflexSimStep === 3 ? 'Reiniciar' : 'Siguiente Paso'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {reflexType === 'rotuliano' ? (
                <div className="text-xs text-[#231f1c] leading-relaxed space-y-1.5">
                  {reflexSimStep === 0 && (
                    <p>
                      <strong>Fase 1 (Estímulo):</strong> El martillo de reflejos estira bruscamente el tendón rotuliano del cuádriceps. Los husos musculares detectan el estiramiento y disparan un tren de potenciales de acción por el nervio periférico.
                    </p>
                  )}
                  {reflexSimStep === 1 && (
                    <p>
                      <strong>Fase 2 (Entrada por Raíz Dorsal):</strong> Cumpliendo la <em>Ley de Bell-Magendie</em>, el impulso ingresa por las raicillas dorsales sensoriales a las astas posteriores de la médula espinal lumbar (L2-L4).
                    </p>
                  )}
                  {reflexSimStep === 2 && (
                    <p>
                      <strong>Fase 3 (Sinapsis con la Interneurona):</strong> La neurona sensorial hace sinapsis en la sustancia gris medular. Aquí interviene la <em>interneurona ("la chismosa del medio")</em>, que conecta casi instantáneamente la información aferente con las neuronas motoras de las astas ventrales.
                    </p>
                  )}
                  {reflexSimStep === 3 && (
                    <p>
                      <strong>Fase 4 (Salida Motora por Raíz Ventral):</strong> Las <em>neuronas motoras Alfa</em> del asta ventral se activan y mandan su axón por la raíz ventral eferente hacia el músculo cuádriceps, provocando la contracción inmediata y la extensión de la pierna (patada refleja) antes de que la persona tenga consciencia del golpe.
                    </p>
                  )}
                </div>
              ) : (
                <div className="text-xs text-[#231f1c] leading-relaxed space-y-1.5">
                  {reflexSimStep === 0 && (
                    <p>
                      <strong>Fase 1 (Estímulo):</strong> Un receptor térmico o de tacto en el dedo capta un estímulo cutáneo en su territorio sensitivo (dermatoma).
                    </p>
                  )}
                  {reflexSimStep === 1 && (
                    <p>
                      <strong>Fase 2 (Entrada por Raíz Dorsal):</strong> El axón aferente penetra por la raíz dorsal a través del fascículo dorsolateral de Lissauer hacia las astas posteriores de la médula.
                    </p>
                  )}
                  {reflexSimStep === 2 && (
                    <p>
                      <strong>Fase 3 (Sinapsis con Neurona de Fascículo):</strong> En el asta dorsal, el axón hace sinapsis con una <em>Neurona de Fascículo</em>. Esta neurona no se queda en la médula: envía su axón hacia la sustancia blanca para convertirse en un cable ascendente.
                    </p>
                  )}
                  {reflexSimStep === 3 && (
                    <p>
                      <strong>Fase 4 (Ascenso hacia Tálamo & Corteza):</strong> El cable (ej. Fascículo Espinotalámico) asciende por la médula, hace <em>relevo en el Tálamo</em> (a excepción del olfato) e impacta en el <em>Área de Brodmann</em> del homúnculo sensorial de la corteza parietal primaria.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

        </div>
      )}

      {/* SUBTAB 3: SUSTANCIA GRIS (NÚCLEOS CLÁSICOS & SOMATOTOPÍA) */}
      {activeSubTab === 'nucleos' && (
        <div className="space-y-6">
          
          {/* Top Banner Alert from the teacher */}
          <div className="bg-[#fcf5e9] rounded-xl border border-[#e8d5b5] p-4 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#704812] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-[#704812] uppercase tracking-wider">
                Advertencia del Profesor para el Examen:
              </h4>
              <p className="text-xs text-[#52330a] mt-0.5 leading-relaxed">
                <em>"En el examen solo vendrá identificarlos"</em>. La clasificación clásica de la sustancia gris medular agrupa las neuronas en núcleos funcionales: 5 en astas dorsales, 2 intermedias y 6 en astas ventrales motoras, gobernadas por la ley de somatotopía (medial = proximal, lateral = distal).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Nuclei List & Region Filter */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-white rounded-2xl border border-[#d4cbc2] p-4 shadow-xs">
                
                {/* Region Filter Buttons */}
                <div className="flex items-center justify-between mb-3 border-b border-[#d4cbc2]/60 pb-2 flex-wrap gap-2">
                  <span className="text-xs font-bold text-[#292420]">
                    Núcleos a Identificar ({filteredNuclei.length}):
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setNucleusRegionFilter('all')}
                      className={`px-2 py-0.5 text-xs rounded transition cursor-pointer ${
                        nucleusRegionFilter === 'all'
                          ? 'bg-[#704812] text-white font-medium'
                          : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
                      }`}
                    >
                      Todos
                    </button>
                    <button
                      onClick={() => setNucleusRegionFilter('dorsal')}
                      className={`px-2 py-0.5 text-xs rounded transition cursor-pointer ${
                        nucleusRegionFilter === 'dorsal'
                          ? 'bg-[#704812] text-white font-medium'
                          : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
                      }`}
                    >
                      Astas Dorsales (5)
                    </button>
                    <button
                      onClick={() => setNucleusRegionFilter('intermedia')}
                      className={`px-2 py-0.5 text-xs rounded transition cursor-pointer ${
                        nucleusRegionFilter === 'intermedia'
                          ? 'bg-[#704812] text-white font-medium'
                          : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
                      }`}
                    >
                      Intermedia (2)
                    </button>
                    <button
                      onClick={() => setNucleusRegionFilter('ventral')}
                      className={`px-2 py-0.5 text-xs rounded transition cursor-pointer ${
                        nucleusRegionFilter === 'ventral'
                          ? 'bg-[#704812] text-white font-medium'
                          : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
                      }`}
                    >
                      Ventrales (6)
                    </button>
                  </div>
                </div>

                {/* Scrollable List of Nuclei */}
                <div className="space-y-1.5 max-h-[460px] overflow-y-auto pr-1">
                  {filteredNuclei.map(nucleus => (
                    <button
                      key={nucleus.id}
                      onClick={() => setSelectedNucleus(nucleus)}
                      className={`w-full p-2.5 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${
                        selectedNucleus.id === nucleus.id
                          ? 'bg-[#fcf5e9] border-[#704812] shadow-2xs'
                          : 'bg-[#fbf8f5] border-[#d4cbc2] hover:bg-[#f5efe9]'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold text-[#292420] block">
                          {nucleus.name}
                        </span>
                        <span className="text-[11px] text-[#787169]">
                          {nucleus.location}
                        </span>
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded capitalize ${
                        nucleus.region === 'dorsal' ? 'bg-[#edf5f0] text-[#2b553c]' :
                        nucleus.region === 'intermedia' ? 'bg-[#faf0eb] text-[#8a4b18]' :
                        'bg-[#eaf3f5] text-[#1d5e68]'
                      }`}>
                        {nucleus.region}
                      </span>
                    </button>
                  ))}
                </div>

              </div>
            </div>

            {/* Right: Selected Nucleus Detail Card + Exam Practice Quiz */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Nucleus Detail Card */}
              <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
                <div className="flex items-center justify-between mb-2 border-b border-[#d4cbc2]/60 pb-2">
                  <span className="text-[11px] font-bold text-[#704812] uppercase tracking-wider">
                    Ficha de Identificación de Examen
                  </span>
                  <span className="text-[11px] font-bold text-[#787169]">
                    {selectedNucleus.rexedEquivalent}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#292420] mb-1">
                  {selectedNucleus.name}
                </h3>
                <p className="text-xs text-[#2b553c] font-medium mb-3">
                  📍 Ubicación: {selectedNucleus.location}
                </p>

                <p className="text-xs text-[#49423c] leading-relaxed mb-4">
                  {selectedNucleus.description}
                </p>

                {selectedNucleus.somaticRole && (
                  <div className="p-2.5 bg-[#edf5f0] rounded-xl border border-[#c5e0cf] mb-3 text-xs text-[#1e3c2a]">
                    <strong>Regla de Somatotopía:</strong> {selectedNucleus.somaticRole}
                  </div>
                )}

                <div className="p-3 bg-[#fcf5e9] rounded-xl border border-[#e8d5b5]">
                  <p className="text-xs font-bold text-[#704812] mb-1 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Pregunta Típica de Examen:</span>
                  </p>
                  <p className="text-xs text-[#52330a] leading-relaxed">
                    {selectedNucleus.examImportance}
                  </p>
                </div>
              </div>

              {/* Mini Quiz to Train for Nuclei Identification */}
              <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold text-[#292420] uppercase tracking-wider flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-[#2b553c]" />
                    <span>Práctica Rápida: Identificación de Núcleos</span>
                  </h4>
                  <span className="text-[11px] text-[#787169]">
                    Pregunta {quizIndex + 1} de {quizQuestions.length}
                  </span>
                </div>

                {!quizFinished ? (
                  <div>
                    <p className="text-xs font-semibold text-[#292420] mb-3 leading-snug">
                      {quizQuestions[quizIndex].question}
                    </p>

                    <div className="space-y-1.5 mb-3">
                      {quizQuestions[quizIndex].options.map((opt, i) => {
                        const isChosen = quizSelectedAnswer === opt;
                        const isCorrect = opt === quizQuestions[quizIndex].correct;
                        let btnStyle = 'bg-[#fbf8f5] border-[#d4cbc2] text-[#292420] hover:bg-[#f5efe9]';

                        if (quizSelectedAnswer !== null) {
                          if (isCorrect) {
                            btnStyle = 'bg-[#edf5f0] border-[#2b553c] text-[#162e21] font-bold';
                          } else if (isChosen) {
                            btnStyle = 'bg-[#fdf2f2] border-red-300 text-red-800';
                          } else {
                            btnStyle = 'bg-[#fbf8f5] border-[#d4cbc2] opacity-50';
                          }
                        }

                        return (
                          <button
                            key={i}
                            onClick={() => handleQuizAnswer(opt)}
                            className={`w-full p-2 text-xs rounded-lg border text-left transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {quizSelectedAnswer !== null && isCorrect && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#2b553c]" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSelectedAnswer !== null && (
                      <div className="mt-3 pt-3 border-t border-[#d4cbc2]/60 flex items-center justify-between">
                        <p className="text-[11px] text-[#49423c] leading-tight">
                          {quizQuestions[quizIndex].feedback}
                        </p>
                        <button
                          onClick={handleNextQuiz}
                          className="px-3 py-1 bg-[#2b553c] text-white text-xs font-medium rounded-md hover:bg-[#1f3f2c] transition cursor-pointer flex-shrink-0 ml-2"
                        >
                          {quizIndex + 1 < quizQuestions.length ? 'Siguiente' : 'Ver Resultado'}
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <CheckCircle2 className="w-8 h-8 text-[#2b553c] mx-auto mb-2" />
                    <h5 className="text-sm font-bold text-[#292420]">¡Práctica Completada!</h5>
                    <p className="text-xs text-[#787169] mt-1 mb-3">
                      Obtuviste <strong>{quizScore} de {quizQuestions.length}</strong> respuestas correctas.
                    </p>
                    <button
                      onClick={handleResetQuiz}
                      className="px-4 py-1.5 bg-[#2b553c] text-white text-xs font-bold rounded-lg hover:bg-[#1f3f2c] transition cursor-pointer flex items-center gap-1.5 mx-auto"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reintentar Práctica</span>
                    </button>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      )}

      {/* SUBTAB 4: LÁMINAS DE REXED (I A X) */}
      {activeSubTab === 'rexed' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-[#d4cbc2]/60 pb-3">
              <div>
                <h3 className="text-base font-bold text-[#292420] flex items-center gap-2">
                  <Split className="w-4 h-4 text-[#8a4b18]" />
                  <span>Clasificación de las Láminas de Rexed (1 al 10)</span>
                </h3>
                <p className="text-xs text-[#787169] mt-0.5">
                  Bror Rexed dividió la sustancia gris en 10 láminas secuenciadas desde dorsal hacia ventral y medial.
                </p>
              </div>

              <div className="p-2 bg-[#fcf5e9] rounded-lg border border-[#e8d5b5] text-xs text-[#704812]">
                <strong>Utilidad:</strong> Clasificación preferida en <em>neurocirugía</em>.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {rexedLaminaeData.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 bg-[#fbf8f5] rounded-xl border border-[#d4cbc2] hover:bg-[#f5efe9] transition"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-[#8a4b18]">
                      {item.lamina}
                    </span>
                    <span className="text-[10px] text-[#787169] font-medium bg-white px-2 py-0.5 rounded border border-[#d4cbc2]">
                      {idx < 6 ? 'Astas Dorsales' : idx < 7 ? 'Zona Intermedia' : idx < 9 ? 'Astas Ventrales' : 'Canal Central'}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[#292420] mb-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#49423c] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 5: FASCÍCULOS & COLUMNAS (17 FASCÍCULOS) */}
      {activeSubTab === 'fasciculos' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
            
            {/* Header & Filter Controls */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4 border-b border-[#d4cbc2]/60 pb-3">
              <div>
                <h3 className="text-base font-bold text-[#292420] flex items-center gap-2">
                  <ArrowDownUp className="w-4 h-4 text-[#2a5078]" />
                  <span>Sustancia Blanca: 3 Columnas & Fascículos</span>
                </h3>
                <p className="text-xs text-[#787169] mt-0.5">
                  Regla de la clase: <em>"Los nombres lo dicen todo: de dónde comienza y hacia dónde va/termina"</em>.
                </p>
              </div>

              {/* Filters */}
              <div className="flex items-center gap-2 flex-wrap">
                {/* Column filter */}
                <div className="flex items-center gap-1 bg-[#f5efe9] p-1 rounded-lg border border-[#d4cbc2]">
                  <span className="text-[10px] font-semibold text-[#787169] px-1">Columna:</span>
                  {(['all', 'dorsal', 'lateral', 'ventral'] as const).map(col => (
                    <button
                      key={col}
                      onClick={() => setTractColumnFilter(col)}
                      className={`px-2 py-0.5 text-xs rounded capitalize transition cursor-pointer ${
                        tractColumnFilter === col
                          ? 'bg-[#2a5078] text-white font-medium'
                          : 'text-[#49423c] hover:bg-[#ede3d8]'
                      }`}
                    >
                      {col === 'all' ? 'Todas' : col}
                    </button>
                  ))}
                </div>

                {/* Type filter */}
                <div className="flex items-center gap-1 bg-[#f5efe9] p-1 rounded-lg border border-[#d4cbc2]">
                  <span className="text-[10px] font-semibold text-[#787169] px-1">Sentido:</span>
                  {(['all', 'ascendente', 'descendente'] as const).map(typ => (
                    <button
                      key={typ}
                      onClick={() => setTractTypeFilter(typ)}
                      className={`px-2 py-0.5 text-xs rounded capitalize transition cursor-pointer ${
                        tractTypeFilter === typ
                          ? 'bg-[#2a5078] text-white font-medium'
                          : 'text-[#49423c] hover:bg-[#ede3d8]'
                      }`}
                    >
                      {typ === 'all' ? 'Todos' : typ}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Split: List & Tract Inspector */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* List of Tracts */}
              <div className="lg:col-span-7 space-y-2 max-h-[500px] overflow-y-auto pr-1">
                {filteredTracts.map(tract => (
                  <button
                    key={tract.id}
                    onClick={() => setSelectedTract(tract)}
                    className={`w-full p-3 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${
                      selectedTract.id === tract.id
                        ? 'bg-[#edf4fa] border-[#2a5078] shadow-2xs'
                        : 'bg-[#fbf8f5] border-[#d4cbc2] hover:bg-[#f5efe9]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-[#292420]">
                          {tract.name}
                        </span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded uppercase ${
                          tract.type === 'ascendente' ? 'bg-[#edf5f0] text-[#2b553c]' :
                          tract.type === 'descendente' ? 'bg-[#fdf3ee] text-[#944920]' :
                          'bg-[#eaf3f5] text-[#1d5e68]'
                        }`}>
                          {tract.type === 'eferente_dorsal' ? 'Sensorial Dorsal' : tract.type}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#787169] line-clamp-1">
                        {tract.function}
                      </p>
                    </div>

                    <span className="text-[10px] text-[#787169] bg-white border border-[#d4cbc2] px-2 py-0.5 rounded capitalize ml-2 flex-shrink-0">
                      Columna {tract.column}
                    </span>
                  </button>
                ))}
              </div>

              {/* Tract Inspector */}
              <div className="lg:col-span-5 bg-[#fbf8f5] rounded-xl border border-[#d4cbc2] p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2 border-b border-[#d4cbc2]/60 pb-2">
                    <span className="text-[11px] font-bold text-[#2a5078] uppercase tracking-wider">
                      Detalle del Fascículo
                    </span>
                    <span className="text-[11px] font-semibold text-[#787169] capitalize">
                      Columna {selectedTract.column}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#292420] mb-2">
                    {selectedTract.name}
                  </h4>

                  {/* Origen y Destino formula box */}
                  <div className="bg-white rounded-lg border border-[#d4cbc2] p-3 mb-3 text-xs space-y-1.5">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-[#787169] w-14 flex-shrink-0">Origen:</span>
                      <span className="text-[#231f1c]">{selectedTract.origin}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-[#787169] w-14 flex-shrink-0">Destino:</span>
                      <span className="text-[#231f1c]">{selectedTract.destination}</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="text-xs font-bold text-[#292420] block mb-1">
                      Función Principal:
                    </span>
                    <p className="text-xs text-[#49423c] leading-relaxed">
                      {selectedTract.function}
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-[#edf4fa] rounded-lg border border-[#c2d7eb] text-xs text-[#122a44]">
                  <strong>Clave de Examen:</strong> {selectedTract.examTip}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
