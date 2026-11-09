import React from 'react';
import { X, BookOpen, Sparkles, Check, Layers, AlertCircle, Compass, Zap } from 'lucide-react';

interface ExamGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExamGuideModal: React.FC<ExamGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/45 backdrop-blur-xs flex items-center justify-center p-4 font-sans"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full border border-[#d4cbc2] p-6 sm:p-7 shadow-2xl relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-[#787169] hover:text-[#231f1c] text-base p-1 transition cursor-pointer"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#2b553c] text-xs font-bold uppercase tracking-wider mb-1">
          <BookOpen className="w-3.5 h-3.5 text-[#2b553c]" />
          <span>Guía de Estudio de Cátedra</span>
        </div>

        <h3 className="text-xl font-bold text-[#292420] mb-1">
          Resumen de Examen: Médula Espinal, Neuronas & Fascículos
        </h3>
        <p className="text-xs text-[#787169] mb-4">
          Definiciones cardinales, los 3 tipos de neuronas, núcleos para identificar y reglas de examen.
        </p>

        <div className="space-y-4 text-xs sm:text-sm text-[#231f1c] leading-relaxed">
          
          {/* Cornell Summary */}
          <div className="p-4 bg-[#fbf8f5] rounded-xl border border-[#d4cbc2]">
            <p className="font-bold text-[#292420] mb-2 flex items-center gap-2 text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#2b553c]" />
              <span>Resumen Ejecutivo de la Clase (Método Cornell):</span>
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-xs text-[#49423c]">
              <li className="leading-relaxed">
                <strong>Organización & Ley de Bell-Magendie:</strong> La médula espinal posee 31 segmentos correspondientes a 31 pares de nervios espinales (8C, 12T, 5L, 5S, 1Co) y en el adulto termina en la vértebra L1 (prolongándose inferiormente como Cauda Equina o Cola de Caballo). Su arquitectura invierte la de la corteza: sustancia gris central en "H" con acueducto vestigial del tubo neural y sustancia blanca periférica (cables). Rige la Ley de Bell-Magendie: raíz dorsal aferente (input sensorial) y raíz ventral eferente (output motor).
              </li>
              <li className="leading-relaxed">
                <strong>Los 3 Tipos de Neuronas Medulares:</strong> 1) <em>Motoras</em> (en astas ventrales, subtipos Alfa y Gama, cuyos axones salen hasta los efectores musculares); 2) <em>De Fascículo</em> (en astas dorsales, reciben información de raíces dorsales y forman los cables ascendentes hacia el encéfalo); 3) <em>Interneuronas</em> ("las chismosas del medio", intercomunican en sustancia gris a las de fascículo con las motoras y median reflejos rápidos como el rotuliano).
              </li>
              <li className="leading-relaxed">
                <strong>Sustancia Gris (Núcleos & Rexed) y Sustancia Blanca (Fascículos):</strong> La sustancia gris se clasifica en <em>Forma Clásica por Núcleos</em> (en el examen solo vendrá identificarlos: 5 en astas dorsales, 2 intermedias y 6 en astas ventrales bajo somatotopía donde medial = control proximal y lateral = control distal) o en <em>10 Láminas de Rexed</em> (I a X, de dorsal a ventral/medial, útil en neurocirugía). La sustancia blanca se divide en 3 columnas cuyos fascículos se deducen por su nombre ("de dónde comienza y hacia dónde va").
              </li>
            </ol>
          </div>

          {/* Checklist de Preguntas Fijas de Cátedra */}
          <div className="p-3.5 bg-[#fcf5e9] rounded-xl border border-[#e8d5b5]">
            <p className="font-bold text-[#704812] mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <Check className="w-4 h-4 text-[#704812]" />
              <span>Checklist de Preguntas Fijas de Cátedra:</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-white p-2.5 rounded-lg border border-[#e8d5b5]">
                <span className="font-bold text-[#704812] block">1. Pares de Nervios & Límite L1:</span>
                <span className="text-[#49423c] text-[11px]">31 pares (8C, 12T, 5L, 5S, 1Co). Llega hasta vértebra L1; abajo es la cauda equina (cola de caballo).</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-[#e8d5b5]">
                <span className="font-bold text-[#704812] block">2. Ley de Bell-Magendie:</span>
                <span className="text-[#49423c] text-[11px]">Raíz dorsal = aferente (input sensorial). Raíz ventral = eferente (output motor muscular).</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-[#e8d5b5]">
                <span className="font-bold text-[#704812] block">3. Los 3 Tipos de Neuronas:</span>
                <span className="text-[#49423c] text-[11px]">Motoras (alfa/gama en astas ventrales), De fascículo (cables ascendentes), Interneuronas (reflejos).</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-[#e8d5b5]">
                <span className="font-bold text-[#704812] block">4. Los 5 Núcleos Dorsales:</span>
                <span className="text-[#49423c] text-[11px]">1) Waldeyer, 2) Gelatinosa Rolando, 3) Núcleo Propio, 4) Clarke, 5) Propioceptivo Basal.</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-[#e8d5b5]">
                <span className="font-bold text-[#704812] block">5. Somatotopía Medular:</span>
                <span className="text-[#49423c] text-[11px]">Medial = control proximal (cuello, tronco). Lateral = control distal (brazos, manos, piernas).</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-[#e8d5b5]">
                <span className="font-bold text-[#704812] block">6. Regla Nemotécnica de Fascículos:</span>
                <span className="text-[#49423c] text-[11px]">"De dónde comienza y hacia dónde va". Espino- = ascendente. -espinal = descendente.</span>
              </div>
            </div>
          </div>

          {/* Tabla de Núcleos de Sustancia Gris */}
          <div className="p-3.5 bg-white rounded-xl border border-[#d4cbc2]">
            <p className="font-bold text-[#292420] mb-2 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#2b553c]" />
              <span>Tabla de Identificación de Núcleos (Forma Clásica para Examen):</span>
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-[#d4cbc2] rounded-lg overflow-hidden">
                <thead className="bg-[#f5efe9] text-[#292420] font-bold">
                  <tr>
                    <th className="p-2 border-b border-[#d4cbc2]">Región</th>
                    <th className="p-2 border-b border-[#d4cbc2]">Núcleos Específicos</th>
                    <th className="p-2 border-b border-[#d4cbc2]">Función / Somatotopía</th>
                    <th className="p-2 border-b border-[#d4cbc2]">Clave de Examen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d4cbc2]/50 text-[11px]">
                  <tr>
                    <td className="p-2 font-bold text-[#2b553c]">Astas Dorsales (5)</td>
                    <td className="p-2">Waldeyer, Sust. Gelatinosa, Núcleo Propio, Clarke, Propioceptivo Basal</td>
                    <td className="p-2">Sensorial: dolor, temperatura, tacto y propiocepción</td>
                    <td className="p-2 font-semibold text-[#2b553c]">Solo vendrá identificarlos</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-[#8a4b18]">Zona Intermedia (2)</td>
                    <td className="p-2">Intermedio Medial (siempre) e Intermedio Lateral (toracolumbar)</td>
                    <td className="p-2">Intermedio lateral forma las astas laterales</td>
                    <td className="p-2 font-semibold text-[#8a4b18]">Se encarga del Sistema Simpático</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-[#1d5e68]">Astas Ventrales (6)</td>
                    <td className="p-2">Dorsolateral, Ventrolateral, Central, Anterior, Dorsomedial, Ventromedial</td>
                    <td className="p-2">Motoras: 2 laterales, 2 mediales, 1 central, 1 anterior</td>
                    <td className="p-2 font-semibold text-[#1d5e68]">Medial = proximal; Lateral = distal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Vía hacia el Tálamo & Homúnculo */}
          <div className="p-3.5 bg-[#edf5f0] rounded-xl border border-[#c5e0cf] text-xs text-[#1e3c2a] leading-relaxed">
            <strong>Relevo Tálamo-Cortical:</strong> Toda la información sensorial que asciende por la médula hace <em>relevo en el Tálamo</em> (a excepción del olfatorio) y llega de manera directa al <em>área de Brodmann correspondiente</em> en la corteza parietal primaria, donde se mapea en el <strong>Homúnculo Sensorial</strong>.
          </div>

        </div>

        <div className="mt-5 pt-4 border-t border-[#d4cbc2] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#2b553c] text-white text-xs font-bold rounded-lg hover:bg-[#1f3f2c] transition cursor-pointer"
          >
            Entendido, volver al estudio
          </button>
        </div>
      </div>
    </div>
  );
};
