import React, { useState, useEffect } from 'react';
import { spinalCircuitSteps } from '../data/neuroData';
import { 
  Zap, 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Activity, 
  ArrowRight,
  Brain,
  CheckCircle2,
  Compass,
  Layers
} from 'lucide-react';

interface TimelineViewProps {
  searchQuery?: string;
}

export const TimelineView: React.FC<TimelineViewProps> = ({ searchQuery = '' }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const currentStage = spinalCircuitSteps[currentStepIndex];

  // Auto-play interval
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStepIndex(prev => (prev + 1) % spinalCircuitSteps.length);
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentStepIndex(prev => Math.min(prev + 1, spinalCircuitSteps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStepIndex(prev => Math.max(prev - 1, 0));
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  const filteredSteps = spinalCircuitSteps.filter(s =>
    searchQuery === '' ? true : (
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.actors.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div id="view-timeline" className="space-y-6 font-sans">
      
      {/* 1. Header Banner */}
      <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#2b553c] text-xs font-bold uppercase tracking-wider mb-1">
              <Zap className="w-3.5 h-3.5 text-[#2b553c]" />
              <span>Circuito & Vía de Información</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-[#292420]">
              El Viaje del Impulso: Periferia, Médula, Tálamo & Homúnculo
            </h2>
            <p className="text-xs text-[#787169] mt-0.5">
              Ley de Bell-Magendie • Sinapsis en Sustancia Gris • Relevo en Tálamo • Corteza Parietal
            </p>
          </div>

          {/* Player controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#2b553c] hover:bg-[#1f3f2c] rounded-lg transition cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Pausar' : 'Reproducir'}</span>
            </button>
            <button
              onClick={handleReset}
              title="Reiniciar al paso 1"
              className="p-1.5 rounded-lg border border-[#d4cbc2] bg-[#fbf8f5] text-[#787169] hover:text-[#231f1c] hover:bg-[#f5efe9] transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Interactive Step Sequence Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {spinalCircuitSteps.map((step, idx) => {
          const isActive = idx === currentStepIndex;
          const isPassed = idx < currentStepIndex;
          return (
            <button
              key={step.step}
              onClick={() => {
                setCurrentStepIndex(idx);
                setIsPlaying(false);
              }}
              className={`p-3 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-[#edf5f0] border-[#2b553c] shadow-2xs'
                  : isPassed
                  ? 'bg-white border-[#c5e0cf] hover:bg-[#f5efe9]'
                  : 'bg-white border-[#d4cbc2] opacity-80 hover:opacity-100 hover:bg-[#fbf8f5]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-bold ${isActive ? 'text-[#2b553c]' : 'text-[#787169]'}`}>
                    Paso {step.step}
                  </span>
                  {isPassed && <CheckCircle2 className="w-3 h-3 text-[#2b553c]" />}
                </div>
                <h4 className="text-xs font-bold text-[#292420] line-clamp-1 leading-snug">
                  {step.name.replace(/^\d+\.\s*/, '')}
                </h4>
              </div>
              <span className="text-[10px] text-[#787169] mt-2 block truncate">
                {step.location}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. Main Stage Focus Card */}
      <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Details */}
          <div className="lg:w-3/5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2b553c]">
                Fase {currentStage.step} de {spinalCircuitSteps.length}
              </span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded capitalize ${
                currentStage.bellMagendieRole === 'aferente' ? 'bg-[#edf5f0] text-[#2b553c]' :
                currentStage.bellMagendieRole === 'integracion' ? 'bg-[#fcf5e9] text-[#704812]' :
                currentStage.bellMagendieRole === 'relevo_cortical' ? 'bg-[#edf4fa] text-[#2a5078]' :
                'bg-[#eaf3f5] text-[#1d5e68]'
              }`}>
                Rol: {currentStage.bellMagendieRole.replace('_', ' ')}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#292420]">
              {currentStage.name}
            </h3>

            <p className="text-xs text-[#2b553c] font-semibold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>Lugar anatómico: {currentStage.location}</span>
            </p>

            <p className="text-sm text-[#49423c] leading-relaxed">
              {currentStage.description}
            </p>

            <div className="p-3 bg-[#fbf8f5] rounded-xl border border-[#d4cbc2] text-xs space-y-1">
              <span className="font-bold text-[#292420] block">Estructuras & Actores en Juego:</span>
              <p className="text-[#49423c] leading-relaxed">
                {currentStage.actors}
              </p>
            </div>

            {/* Analogy */}
            <div className="p-3 bg-[#fcf5e9] rounded-xl border border-[#e8d5b5] text-xs">
              <span className="font-bold text-[#704812] flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#704812]" />
                <span>Metáfora Didáctica:</span>
              </span>
              <p className="text-[#52330a] italic">
                "{currentStage.analogia}"
              </p>
            </div>

            {/* Nav Arrows */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handlePrev}
                disabled={currentStepIndex === 0}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-[#d4cbc2] bg-[#fbf8f5] text-[#49423c] hover:bg-[#f5efe9] disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Anterior</span>
              </button>

              <button
                onClick={handleNext}
                disabled={currentStepIndex === spinalCircuitSteps.length - 1}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-[#2b553c] text-white hover:bg-[#1f3f2c] disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
              >
                <span>Siguiente Paso</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Visual Schematic of the Circuit */}
          <div className="lg:w-2/5 flex flex-col justify-between bg-[#fbf8f5] rounded-xl border border-[#d4cbc2] p-4">
            <div>
              <span className="text-xs font-bold text-[#292420] uppercase tracking-wider block mb-2">
                Mapa del Circuito Medular
              </span>

              <div className="space-y-2 text-xs">
                <div className={`p-2.5 rounded-lg border transition ${
                  currentStepIndex === 0 ? 'bg-[#edf5f0] border-[#2b553c] font-bold text-[#162e21]' : 'bg-white border-[#d4cbc2] text-[#787169]'
                }`}>
                  1. Periferia (Territorio sensitivo)
                </div>

                <div className="text-center text-[#787169] text-xs">↓ Raíz Dorsal (Bell-Magendie)</div>

                <div className={`p-2.5 rounded-lg border transition ${
                  currentStepIndex === 1 || currentStepIndex === 2 ? 'bg-[#fcf5e9] border-[#704812] font-bold text-[#3d2507]' : 'bg-white border-[#d4cbc2] text-[#787169]'
                }`}>
                  2. Sustancia Gris Medular en H (Neurona de Fascículo / Interneurona)
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-xs py-1">
                  <div className="text-[#2a5078] text-[11px]">↑ Ascenso Sensorial</div>
                  <div className="text-[#1d5e68] text-[11px]">↓ Salida Refleja</div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className={`p-2.5 rounded-lg border text-center transition ${
                    currentStepIndex === 3 || currentStepIndex === 4 ? 'bg-[#edf4fa] border-[#2a5078] font-bold text-[#122a44]' : 'bg-white border-[#d4cbc2] text-[#787169]'
                  }`}>
                    Tálamo & Homúnculo Parietal
                  </div>
                  <div className={`p-2.5 rounded-lg border text-center transition ${
                    currentStepIndex === 5 ? 'bg-[#eaf3f5] border-[#1d5e68] font-bold text-[#0f3238]' : 'bg-white border-[#d4cbc2] text-[#787169]'
                  }`}>
                    Astas Ventrales & Raíz Ventral
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#d4cbc2]/70 text-[11px] text-[#787169] flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5 text-[#2b553c]" />
              <span>Excepto el olfato, todo relevo sensorial pasa por el tálamo hacia la corteza.</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
