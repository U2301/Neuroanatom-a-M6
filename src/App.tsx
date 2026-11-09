/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenId, MainTab } from './types';
import { GraphView } from './components/GraphView';
import { TimelineView } from './components/TimelineView';
import { DisciplinesView } from './components/DisciplinesView';
import { FlashcardsView } from './components/FlashcardsView';
import { ExamGuideModal } from './components/ExamGuideModal';
import { OriginalBackupScreen } from './components/OriginalBackupScreen';
import { flashcardsData } from './data/neuroData';
import {
  Rat,
  Search,
  X,
  BookmarkCheck,
  GitGraph,
  Layers,
  Zap,
  Copy,
  FileText
} from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('atlas');
  const [activeTab, setActiveTab] = useState<MainTab>('graph');
  const [globalSearch, setGlobalSearch] = useState<string>('');
  const [isExamModalOpen, setIsExamModalOpen] = useState<boolean>(false);
  const [masteredCards, setMasteredCards] = useState<Set<string>>(new Set());

  const handleToggleMastered = (cardId: string) => {
    setMasteredCards(prev => {
      const next = new Set(prev);
      if (next.has(cardId)) {
        next.delete(cardId);
      } else {
        next.add(cardId);
      }
      return next;
    });
  };

  const handleResetProgress = () => {
    setMasteredCards(new Set());
  };

  const navigateToAtlas = () => {
    setCurrentScreen('atlas');
  };

  const navigateToBackup = () => {
    setCurrentScreen('backup');
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#231f1c] font-sans selection:bg-[#ffb692] selection:text-[#292420] flex flex-col relative overflow-x-hidden">
      {currentScreen === 'backup' ? (
        <OriginalBackupScreen onNavigateToAtlas={navigateToAtlas} />
      ) : (
        <div className="flex flex-col min-h-screen w-full">
          {/* Header */}
          <header className="bg-white border-b border-[#d4cbc2] sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                {/* Rat Icon anchored on top-left corner */}
                <div className="flex items-center gap-2.5">
                  <div 
                    className="w-9 h-9 rounded-lg bg-[#2b553c] flex items-center justify-center text-white flex-shrink-0"
                    title="Neuroanatomía"
                  >
                    <Rat className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h1 className="text-base sm:text-lg font-bold text-[#292420] leading-none">
                      Médula Espinal, Neuronas & Vías
                    </h1>
                    <p className="text-[11px] text-[#787169] mt-0.5">Apuntes de Neuroanatomía</p>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="relative flex-grow sm:w-56">
                    <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#787169]" />
                    <input
                      type="text"
                      value={globalSearch}
                      onChange={(e) => setGlobalSearch(e.target.value)}
                      placeholder="Buscar término..."
                      className="w-full pl-8 pr-7 py-1 text-xs bg-[#fbf8f5] border border-[#d4cbc2] rounded-md text-[#231f1c] focus:outline-none focus:ring-1 focus:ring-[#2b553c]"
                      id="global-search-input"
                    />
                    {globalSearch && (
                      <button
                        onClick={() => setGlobalSearch('')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-[#787169] hover:text-[#231f1c] text-xs cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  <button
                    onClick={() => setIsExamModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-[#2b553c] bg-[#2b553c]/10 border border-[#2b553c]/20 rounded-md hover:bg-[#2b553c]/15 transition cursor-pointer"
                  >
                    <BookmarkCheck className="w-3.5 h-3.5 text-[#2b553c]" />
                    <span>Resumen Examen</span>
                  </button>

                  <button
                    onClick={navigateToBackup}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-[#704812] bg-[#fdf7ea] border border-[#d4cbc2] rounded-md hover:bg-[#faede6] transition cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#704812]" />
                    <span>Notas Originales</span>
                  </button>
                </div>
              </div>

              {/* Study Tabs */}
              <nav
                aria-label="Pestañas de estudio"
                className="flex space-x-1 border-t border-[#d4cbc2]/40 mt-2 pt-2 overflow-x-auto no-scrollbar"
              >
                <button
                  onClick={() => setActiveTab('graph')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition cursor-pointer ${
                    activeTab === 'graph'
                      ? 'bg-[#2b553c] text-white'
                      : 'text-[#49423c] hover:bg-[#f5efe9]'
                  }`}
                >
                  <GitGraph className="w-3.5 h-3.5" />
                  <span>Mapa Conceptual</span>
                </button>

                <button
                  onClick={() => setActiveTab('structures')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition cursor-pointer ${
                    activeTab === 'structures'
                      ? 'bg-[#2b553c] text-white'
                      : 'text-[#49423c] hover:bg-[#f5efe9]'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Estructuras & Núcleos</span>
                </button>

                <button
                  onClick={() => setActiveTab('pathway')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition cursor-pointer ${
                    activeTab === 'pathway'
                      ? 'bg-[#2b553c] text-white'
                      : 'text-[#49423c] hover:bg-[#f5efe9]'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Circuito & Vía Refleja</span>
                </button>

                <button
                  onClick={() => setActiveTab('flashcards')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition cursor-pointer ${
                    activeTab === 'flashcards'
                      ? 'bg-[#2b553c] text-white'
                      : 'text-[#49423c] hover:bg-[#f5efe9]'
                  }`}
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Tarjetas ({flashcardsData.length})</span>
                </button>
              </nav>
            </div>
          </header>

          {/* Main Content Area without website footer */}
          <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5">
            {activeTab === 'graph' && <GraphView />}
            {activeTab === 'structures' && <DisciplinesView />}
            {activeTab === 'pathway' && <TimelineView searchQuery={globalSearch} />}
            {activeTab === 'flashcards' && (
              <FlashcardsView
                masteredIds={masteredCards}
                onToggleMastered={handleToggleMastered}
                onResetProgress={handleResetProgress}
              />
            )}
          </main>

          {/* Exam Guide Modal */}
          <ExamGuideModal
            isOpen={isExamModalOpen}
            onClose={() => setIsExamModalOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
