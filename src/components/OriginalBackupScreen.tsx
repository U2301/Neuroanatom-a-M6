import React, { useState, useEffect } from 'react';
import { ArrowLeft, FileText, Mic, Search, Rat, CheckCircle2 } from 'lucide-react';
import { classLectureNotesMarkdown } from '../data/neuroData';

interface OriginalBackupScreenProps {
  onNavigateToAtlas: () => void;
}

export const OriginalBackupScreen: React.FC<OriginalBackupScreenProps> = ({ onNavigateToAtlas }) => {
  const [activeTab, setActiveTab] = useState<'apuntes' | 'transcripcion'>('apuntes');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [transcriptContent, setTranscriptContent] = useState<string>('');

  useEffect(() => {
    // Attempt fetching the exact transcription file from public assets
    fetch('./assets/aistudio/M_dula_Espinal_1-es-MX.vtt_d35f7f2b.txt')
      .then(res => res.text())
      .then(text => {
        if (text && text.length > 50) {
          setTranscriptContent(text);
        }
      })
      .catch(() => {});
  }, []);

  const defaultTranscriptSnippets = [
    { time: '00:00:03', text: '¿31? Segmentos porque se dividen tanto segmentos como pares de nervios salen de la médula espinal. Tenemos 8 segmentos cervicales, 12 segmentos torácicos, 5 segmentos lumbares, 5 segmentos sacros y un segmento coxígeo. 31 pares de nervios espinales.' },
    { time: '00:01:07', text: 'En un cuerpo adulto promedio la médula llega hasta la vértebra L1 y de aquí para abajo ya no hay médula espinal, ¿qué hay? Hay raíces nerviosas. A esa parte donde ya hay puras raicitas nerviosas se le llama cauda equina o cola de caballo.' },
    { time: '00:01:25', text: 'Los nervios sensoriales tienen un territorio del cual recogen información, por eso tenemos como una especie de mapa de todo nuestro cuerpo. Y acá en la corteza tengo un mapa igual en el lóbulo parietal: el famoso homúnculo sensorial.' },
    { time: '00:03:14', text: 'La médula espinal tiene una organización muy particular: tiene la sustancia blanca hacia la periferia y la sustancia gris en medio formando una H. La sustancia blanca son como los cables, sube y baja la información.' },
    { time: '00:03:36', text: 'Los nervios espinales de entrada (input) son los dorsales (sensoriales) y los ventrales son los de salida (motores). Y como todo, está cubierta por piamadre, aracnoides y duramadre.' },
    { time: '00:05:31', text: 'Esta sustancia gris y blanca va cambiando de acuerdo al nivel del corte: cervical, dorsal, lumbar, sacro. Obviamente hay menos cableado de subida y bajada abajo, hay menos sustancia blanca y arriba hay más cables de subida y bajada, hay más sustancia blanca en proporción a la gris.' },
    { time: '00:06:20', text: 'Un surco profundo en la parte posterior (surco dorsal cerrado) y acá adelante un surco abierto (surco ventral). Y un acueducto al centro: este agujerito es el vestigio de ese tubo neural que se cerraba como taquito y quedaba un agujerito en medio con líquido cefalorraquídeo.' },
    { time: '00:07:44', text: 'Astas dorsales que son 2, astas ventrales que son 2, y a nivel torácico y lumbar tenemos las astas laterales (no están todo el tiempo). Y aquí en esta sustancia gris medular tenemos diferentes tipos de neuronas: motoras, de fascículo e interneuronas.' },
    { time: '00:08:07', text: '1) Neuronas motoras en las astas ventrales para sacar el axón e ir hasta el dedito gordo del pie, clasificadas en alfa o gama. 2) Neuronas de fascículo: a las que llega la información de las raíces dorsales, hacen sinapsis con ellas y mandan sus axones hacia arriba formando fascículos. 3) Interneuronas: las chismosas del medio que intercomunican en sustancia gris y median reflejos.' },
    { time: '00:09:44', text: 'Clasificación de la médula: 1) Clasificación tradicional por núcleos. 2) Clasificación de Láminas de Rexed (dividida en 10 láminas secuenciadas del 1 al 10 de dorsal a ventral/medial, muy útil para neurocirujanos).' },
    { time: '00:10:35', text: 'Astas dorsales: Zona de Waldeyer, Sustancia Gelatinosa de Rolando, Núcleo Propio, Núcleo de Clarke y Núcleo Propioceptivo Basal. (En el examen solo vendrá identificarlos).' },
    { time: '00:11:17', text: 'Zona intermedia: Núcleo intermedio medial está todo el tiempo. Núcleo intermedio lateral solamente está cuando están las astas laterales a nivel torácico y lumbar (sistema simpático).' },
    { time: '00:11:47', text: 'Astas ventrales: Núcleo dorsolateral, ventrolateral, dorsomedial, ventromedial, central y anterior. Somatotopía: la región medial controla zonas proximales (tronco/cuello) y la región lateral controla las regiones distales (brazos, manos, piernas).' },
    { time: '00:12:49', text: '¿Les parece que lo dejemos hasta aquí por hoy para que me quede con las personas que tienen alguna duda sobre su calificación?' }
  ];

  return (
    <div
      id="original-backup-screen"
      className="min-h-screen w-full bg-[#fdfbf7] text-[#231f1c] p-4 sm:p-6 font-sans"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-xl border border-[#d4cbc2] p-5 sm:p-8 shadow-xs">
        {/* Top Header with Rat Icon on Top-Left */}
        <div className="flex items-center justify-between border-b border-[#d4cbc2]/70 pb-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div 
              className="w-9 h-9 rounded-lg bg-[#2b553c] flex items-center justify-center text-white flex-shrink-0"
              title="Neuroanatomía"
            >
              <Rat className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-[#292420] leading-none">
                Apuntes Originales & Transcripción de Clase
              </h1>
              <p className="text-[11px] text-[#787169] mt-0.5">Materia: Neuroanatomía — Tema: Médula Espinal</p>
            </div>
          </div>

          <button
            id="back-to-atlas-btn"
            onClick={onNavigateToAtlas}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#2b553c] bg-[#edf5f0] border border-[#2b553c]/30 rounded-lg hover:bg-[#2b553c] hover:text-white transition cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver a la Plataforma</span>
          </button>
        </div>

        {/* Tab Switcher & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 bg-[#fbf8f5] p-2 rounded-lg border border-[#d4cbc2]">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab('apuntes')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'apuntes'
                  ? 'bg-[#2b553c] text-white'
                  : 'text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Notas de Clase (Markdown)</span>
            </button>
            <button
              onClick={() => setActiveTab('transcripcion')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'transcripcion'
                  ? 'bg-[#2b553c] text-white'
                  : 'text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
              <span>Transcripción de Audio de la Clase</span>
            </button>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#787169]" />
            <input
              type="text"
              placeholder="Buscar en el texto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-xs pl-8 pr-3 py-1 border border-[#d4cbc2] rounded-md bg-white w-full sm:w-56 focus:outline-none focus:ring-1 focus:ring-[#2b553c]"
            />
          </div>
        </div>

        {/* TAB 1: Markdown Notes */}
        {activeTab === 'apuntes' && (
          <div className="bg-[#fcfbf9] p-4 sm:p-5 rounded-lg border border-[#d4cbc2] font-mono text-xs text-[#292420] whitespace-pre-wrap leading-relaxed max-h-[640px] overflow-y-auto">
            {classLectureNotesMarkdown}
          </div>
        )}

        {/* TAB 2: Transcription */}
        {activeTab === 'transcripcion' && (
          <div className="space-y-3 max-h-[640px] overflow-y-auto p-1">
            <div className="p-2.5 bg-[#edf5f0] rounded-lg border border-[#2b553c]/20 text-xs text-[#162e21] flex items-center justify-between">
              <span className="font-semibold">Grabación de Cátedra: "Médula Espinal (Clase en vivo)"</span>
              <span className="font-mono text-[11px] bg-white px-2 py-0.5 rounded border border-[#2b553c]/20 font-bold">13:35 min</span>
            </div>

            <div className="bg-[#fbf8f5] p-4 rounded-lg border border-[#d4cbc2] font-sans text-xs text-[#38332e] leading-relaxed whitespace-pre-line space-y-3">
              {transcriptContent ? (
                <div>{transcriptContent}</div>
              ) : (
                defaultTranscriptSnippets.map((item, idx) => (
                  <div key={idx} className="p-2 bg-white rounded-lg border border-[#d4cbc2]/70 hover:border-[#2b553c] transition">
                    <span className="font-mono text-[11px] font-bold text-[#2b553c] bg-[#edf5f0] px-1.5 py-0.5 rounded mr-2">
                      {item.time}
                    </span>
                    <span className="text-[#231f1c]">{item.text}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
