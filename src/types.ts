export type ScreenId = 'atlas' | 'backup';

export type MainTab = 'graph' | 'structures' | 'pathway' | 'flashcards';

export interface NeuroNode {
  id: number;
  label: string;
  category: 
    | 'Morfología & Segmentos'
    | 'Tipos de Neuronas Medulares'
    | 'Sustancia Gris (Núcleos)'
    | 'Láminas de Rexed'
    | 'Sustancia Blanca (Fascículos)'
    | 'Sistema Autónomo & Vías';
  group: 'segmentos' | 'neuronas' | 'nucleos' | 'rexed' | 'fasciculos' | 'autonomo';
  desc: string;
  exam: string;
  analogia?: string;
  colorGroup: string;
}

export interface NeuroEdge {
  from: number;
  to: number;
  label: string;
  arrows?: string;
}

export interface Flashcard {
  id: string;
  category: string;
  subcategory: string;
  question: string;
  answer: string;
  examNote: string;
  tags?: string[];
}

export interface SpinalNucleus {
  id: string;
  name: string;
  region: 'dorsal' | 'intermedia' | 'ventral';
  location: string;
  description: string;
  rexedEquivalent?: string;
  examImportance: string;
  somaticRole?: string;
}

export interface SpinalTract {
  id: string;
  name: string;
  type: 'ascendente' | 'descendente' | 'eferente_dorsal';
  column: 'dorsal' | 'lateral' | 'ventral';
  origin: string;
  destination: string;
  function: string;
  examTip: string;
}

export interface SpinalCircuitStep {
  step: number;
  name: string;
  location: string;
  description: string;
  actors: string;
  bellMagendieRole: 'aferente' | 'integracion' | 'eferente' | 'relevo_cortical';
  analogia: string;
}
