import React, { StrictMode, Component, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class RootErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  override state: ErrorBoundaryState = { hasError: false, error: null };

  constructor(props: ErrorBoundaryProps) {
    super(props);
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('App Crash Caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#fdfbf7] p-8 flex items-center justify-center font-sans">
          <div className="max-w-lg bg-white p-6 rounded-2xl border border-red-200 shadow-lg text-center">
            <h2 className="text-lg font-bold text-red-700 mb-2">Aviso de carga</h2>
            <p className="text-xs text-[#49423c] mb-4">
              Ocurrió un problema al inicializar la vista:
            </p>
            <pre className="text-[11px] bg-red-50 p-3 rounded text-left overflow-x-auto text-red-900 border border-red-100">
              {this.state.error?.message || String(this.state.error)}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-[#2b553c] text-white text-xs font-bold rounded-lg cursor-pointer"
            >
              Recargar página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </StrictMode>,
);
