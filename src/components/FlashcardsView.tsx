import React, { useState } from 'react';
import { flashcardsData } from '../data/neuroData';
import { 
  Check, 
  RotateCcw, 
  Search, 
  Sparkles, 
  BookmarkCheck, 
  Layers,
  HelpCircle,
  Shuffle
} from 'lucide-react';

interface FlashcardsViewProps {
  masteredIds: Set<string>;
  onToggleMastered: (id: string) => void;
  onResetProgress: () => void;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  masteredIds,
  onToggleMastered,
  onResetProgress
}) => {
  const [flippedIds, setFlippedIds] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cardSearch, setCardSearch] = useState<string>('');

  const handleCardClick = (id: string) => {
    setFlippedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const categories = Array.from(new Set(flashcardsData.map(fc => fc.category)));

  const filteredCards = flashcardsData.filter(fc => {
    const matchesCategory = selectedCategory === 'all' || fc.category === selectedCategory;
    if (!matchesCategory) return false;
    if (!cardSearch.trim()) return true;
    const term = cardSearch.toLowerCase().trim();
    return (
      fc.question.toLowerCase().includes(term) ||
      fc.answer.toLowerCase().includes(term) ||
      fc.category.toLowerCase().includes(term) ||
      fc.subcategory.toLowerCase().includes(term) ||
      fc.examNote.toLowerCase().includes(term)
    );
  });

  const percentMastered = flashcardsData.length > 0 
    ? Math.round((masteredIds.size / flashcardsData.length) * 100) 
    : 0;

  return (
    <section id="view-flashcards" className="block font-sans space-y-6">
      
      {/* Deck Controls Header */}
      <div className="bg-[#fbf8f5] p-4 sm:p-5 rounded-2xl border border-[#d4cbc2] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-[#292420]">
            Tarjetas de Estudio ({flashcardsData.length})
          </h2>
          <p className="text-xs text-[#49423c] mt-0.5">
            31 Segmentos, 3 tipos de neuronas, núcleos de sustancia gris, Rexed y fascículos.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-[#d4cbc2] shadow-2xs">
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs gap-4">
              <span className="font-semibold text-[#787169]">Dominio:</span>
              <span className="font-bold text-[#2b553c]">{masteredIds.size} / {flashcardsData.length} ({percentMastered}%)</span>
            </div>
            <div className="w-36 h-2 bg-[#f0ebe5] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#2b553c] transition-all duration-300"
                style={{ width: `${percentMastered}%` }}
              />
            </div>
          </div>

          <button
            onClick={onResetProgress}
            title="Reiniciar progreso de estudio"
            className="p-1.5 hover:bg-[#f5efe9] text-[#787169] hover:text-[#231f1c] rounded-lg transition cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-xl border border-[#d4cbc2] p-3 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-semibold text-[#787169] mr-1 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" />
            Filtrar:
          </span>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-1 text-xs rounded-md font-semibold transition cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#2b553c] text-white shadow-2xs'
                : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
            }`}
          >
            Todas ({flashcardsData.length})
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 text-xs rounded-md font-semibold transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#2b553c] text-white shadow-2xs'
                  : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#787169]" />
          <input
            type="text"
            placeholder="Buscar por pregunta, respuesta o concepto..."
            value={cardSearch}
            onChange={(e) => setCardSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#fbf8f5] border border-[#d4cbc2] rounded-lg text-[#231f1c] focus:outline-none focus:ring-1 focus:ring-[#2b553c]"
          />
        </div>
      </div>

      {/* Grid of Flashcards */}
      {filteredCards.length === 0 ? (
        <div className="bg-white rounded-2xl border border-[#d4cbc2] p-12 text-center text-[#787169]">
          <HelpCircle className="w-8 h-8 mx-auto mb-2 text-[#787169]/60" />
          <p className="text-sm font-semibold">No se encontraron tarjetas con esos criterios.</p>
          <button
            onClick={() => { setSelectedCategory('all'); setCardSearch(''); }}
            className="mt-3 px-3 py-1.5 text-xs font-bold bg-[#2b553c] text-white rounded-lg cursor-pointer"
          >
            Restablecer filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCards.map((card) => {
            const isFlipped = flippedIds.has(card.id);
            const isMastered = masteredIds.has(card.id);

            return (
              <div
                key={card.id}
                className="perspective-1000 min-h-[300px] cursor-pointer"
                onClick={() => handleCardClick(card.id)}
              >
                <div
                  className={`w-full h-full relative transition-transform duration-500 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* FRONT FACE (Question) */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl border p-5 shadow-parchment flex flex-col justify-between select-none ${
                    isMastered ? 'border-[#2b553c]/50 bg-[#fafdfa]' : 'border-[#d4cbc2]'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#d4cbc2]/50">
                        <span className="text-[10px] font-bold text-[#787169] uppercase tracking-wider">
                          {card.category} • {card.subcategory}
                        </span>
                        {isMastered && (
                          <span className="flex items-center gap-1 text-[10px] font-bold text-[#2b553c] bg-[#edf5f0] px-2 py-0.5 rounded-full">
                            <Check className="w-3 h-3" /> Dominada
                          </span>
                        )}
                      </div>

                      <div className="space-y-2 mt-4">
                        <span className="text-[11px] font-bold text-[#704812] uppercase tracking-wider block">
                          Pregunta de Examen:
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-[#292420] leading-snug">
                          {card.question}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#d4cbc2]/50 flex items-center justify-between text-xs text-[#787169]">
                      <span className="text-[11px] text-[#787169]">Pregunta</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleMastered(card.id);
                        }}
                        className={`p-1.5 rounded-lg border transition cursor-pointer ${
                          isMastered
                            ? 'bg-[#2b553c] text-white border-[#2b553c]'
                            : 'bg-[#f5efe9] text-[#787169] border-[#d4cbc2] hover:bg-[#ede3d8]'
                        }`}
                        title={isMastered ? 'Desmarcar' : 'Marcar aprendida'}
                      >
                        <Check className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* BACK FACE (Answer) */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#fbf8f5] rounded-2xl border p-5 shadow-parchment flex flex-col justify-between select-none ${
                    isMastered ? 'border-[#2b553c]/50' : 'border-[#d4cbc2]'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#d4cbc2]/50">
                        <span className="text-[10px] font-bold text-[#2b553c] uppercase tracking-wider">
                          Respuesta
                        </span>
                        <span className="text-[10px] text-[#787169] font-mono">
                          {card.id}
                        </span>
                      </div>

                      <div className="text-xs sm:text-sm text-[#231f1c] leading-relaxed whitespace-pre-line font-medium mb-3">
                        {card.answer}
                      </div>

                      {/* Exam Note */}
                      {card.examNote && (
                        <div className="bg-[#fdf7ea] p-2.5 rounded-lg border border-amber-300/80 text-[11px] text-[#704812] mt-2">
                          <span className="font-bold block mb-0.5">Nota:</span>
                          {card.examNote}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#d4cbc2]/50 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-[#787169]">Respuesta</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleMastered(card.id);
                        }}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border transition cursor-pointer flex items-center gap-1 ${
                          isMastered
                            ? 'bg-[#2b553c] text-white border-[#2b553c]'
                            : 'bg-white text-[#49423c] border-[#d4cbc2] hover:bg-[#ede3d8]'
                        }`}
                      >
                        <Check className="w-3 h-3" />
                        <span>{isMastered ? 'Aprendida' : 'Marcar lista'}</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}

    </section>
  );
};
