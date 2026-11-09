import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network/standalone';
import { DataSet } from 'vis-data';
import { NeuroNode } from '../types';
import { neuroNodesData, neuroEdgesData } from '../data/neuroData';
import { 
  Crosshair, 
  Plus, 
  Minus, 
  Sparkles, 
  Activity, 
  Network as NetworkIcon,
  HelpCircle,
  Zap,
  Layers,
  ArrowRight,
  BookOpen
} from 'lucide-react';

export const GraphView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkInstanceRef = useRef<any>(null);
  const nodesDataSetRef = useRef<any>(null);
  const edgesDataSetRef = useRef<any>(null);

  const [selectedNode, setSelectedNode] = useState<NeuroNode>(() => {
    return neuroNodesData.find(n => n.id === 1) || neuroNodesData[0];
  });
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [nodeSearchTerm, setNodeSearchTerm] = useState<string>('');

  useEffect(() => {
    let isMounted = true;

    const initNetwork = () => {
      if (!containerRef.current) return;

      try {
        const formattedNodes = neuroNodesData.map(node => {
          let bgColor = "#fdfbf7";
          let borderColor = node.colorGroup || "#2b553c";
          let fontColor = "#231f1c";

          if (node.id === 1) {
            bgColor = "#2b553c";
            borderColor = "#1b3a28";
            fontColor = "#ffffff";
          } else if (node.group === "segmentos") {
            bgColor = "#edf5f0";
            borderColor = "#2b553c";
            fontColor = "#162e21";
          } else if (node.group === "neuronas") {
            bgColor = "#eaf3f5";
            borderColor = "#1d5e68";
            fontColor = "#0f3238";
          } else if (node.group === "nucleos") {
            bgColor = "#fcf5e9";
            borderColor = "#704812";
            fontColor = "#3d2507";
          } else if (node.group === "rexed") {
            bgColor = "#faf0eb";
            borderColor = "#8a4b18";
            fontColor = "#4a2408";
          } else if (node.group === "fasciculos") {
            bgColor = "#edf4fa";
            borderColor = "#2a5078";
            fontColor = "#122a44";
          } else if (node.group === "autonomo") {
            bgColor = "#f5f0ec";
            borderColor = "#5c3d28";
            fontColor = "#362013";
          }

          return {
            id: node.id,
            label: node.label,
            title: `${node.label} (${node.category})`,
            category: node.category,
            group: node.group,
            shape: node.id === 1 ? 'box' : 'dot',
            size: node.id === 1 ? 30 : 18,
            color: {
              background: bgColor,
              border: borderColor,
              highlight: {
                background: '#ffb692',
                border: '#944920'
              },
              hover: {
                background: '#faede6',
                border: borderColor
              }
            },
            font: {
              color: fontColor,
              face: 'Plus Jakarta Sans, system-ui, sans-serif',
              size: node.id === 1 ? 14 : 12,
              bold: {
                mod: 'bold'
              }
            },
            borderWidth: node.id === 1 ? 3 : 2,
            shadow: {
              enabled: true,
              color: 'rgba(35, 31, 28, 0.08)',
              size: 5,
              x: 1,
              y: 2
            }
          };
        });

        const formattedEdges = neuroEdgesData.map(edge => ({
          id: `${edge.from}-${edge.to}`,
          from: edge.from,
          to: edge.to,
          label: edge.label,
          arrows: edge.arrows || 'to',
          color: {
            color: '#b8afa6',
            highlight: '#944920',
            hover: '#704812'
          },
          font: {
            color: '#787169',
            size: 9,
            face: 'Plus Jakarta Sans',
            background: 'rgba(253, 251, 247, 0.85)',
            strokeWidth: 0
          },
          smooth: {
            type: 'continuous',
            roundness: 0.2
          },
          width: 1.5
        }));

        const nodesDataSet = new DataSet(formattedNodes as any);
        const edgesDataSet = new DataSet(formattedEdges as any);

        nodesDataSetRef.current = nodesDataSet;
        edgesDataSetRef.current = edgesDataSet;

        const data = {
          nodes: nodesDataSet,
          edges: edgesDataSet
        };

        const options = {
          physics: {
            solver: 'forceAtlas2Based',
            forceAtlas2Based: {
              gravitationalConstant: -70,
              centralGravity: 0.015,
              springLength: 120,
              springConstant: 0.06,
              damping: 0.85,
              avoidOverlap: 0.65
            },
            stabilization: {
              iterations: 150,
              updateInterval: 25
            }
          },
          interaction: {
            hover: true,
            tooltipDelay: 150,
            zoomView: true,
            dragView: true,
            navigationButtons: false,
            keyboard: false
          },
          nodes: {
            margin: { top: 8, right: 12, bottom: 8, left: 12 }
          }
        };

        const network = new Network(containerRef.current, data, options);
        networkInstanceRef.current = network;

        network.on('click', (params: any) => {
          if (!isMounted) return;
          if (params.nodes && params.nodes.length > 0) {
            const nodeId = params.nodes[0];
            const nodeObj = neuroNodesData.find(n => n.id === nodeId);
            if (nodeObj) {
              setSelectedNode(nodeObj);
            }
          }
        });

      } catch (err) {
        console.error('Error initializing Vis Network:', err);
      }
    };

    const timer = setTimeout(() => {
      initNetwork();
    }, 50);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      if (networkInstanceRef.current) {
        networkInstanceRef.current.destroy();
        networkInstanceRef.current = null;
      }
    };
  }, []);

  // Filter nodes on category click
  const handleFilter = (groupKey: string) => {
    setActiveFilter(groupKey);
    if (!nodesDataSetRef.current) return;

    if (groupKey === 'all') {
      const allUpdates = neuroNodesData.map(node => ({
        id: node.id,
        hidden: false
      }));
      nodesDataSetRef.current.update(allUpdates);
    } else {
      const updates = neuroNodesData.map(node => ({
        id: node.id,
        hidden: node.group !== groupKey && node.id !== 1 // keep root visible
      }));
      nodesDataSetRef.current.update(updates);
    }

    if (networkInstanceRef.current) {
      networkInstanceRef.current.fit({ animation: { duration: 400 } });
    }
  };

  // Node selection from search
  const handleSelectFromSearch = (nodeId: number) => {
    const found = neuroNodesData.find(n => n.id === nodeId);
    if (!found) return;
    setSelectedNode(found);
    if (networkInstanceRef.current) {
      networkInstanceRef.current.focus(nodeId, {
        scale: 1.25,
        animation: { duration: 500, easingFunction: 'easeInOutQuad' }
      });
      networkInstanceRef.current.selectNodes([nodeId]);
    }
  };

  const handleZoomIn = () => {
    if (networkInstanceRef.current) {
      const currentScale = networkInstanceRef.current.getScale();
      networkInstanceRef.current.moveTo({ scale: currentScale * 1.25, animation: { duration: 250 } });
    }
  };

  const handleZoomOut = () => {
    if (networkInstanceRef.current) {
      const currentScale = networkInstanceRef.current.getScale();
      networkInstanceRef.current.moveTo({ scale: currentScale / 1.25, animation: { duration: 250 } });
    }
  };

  const handleResetZoom = () => {
    if (networkInstanceRef.current) {
      networkInstanceRef.current.fit({ animation: { duration: 400 } });
    }
  };

  const filteredSearchList = neuroNodesData.filter(n =>
    nodeSearchTerm === '' ? false : (
      n.label.toLowerCase().includes(nodeSearchTerm.toLowerCase()) ||
      n.desc.toLowerCase().includes(nodeSearchTerm.toLowerCase())
    )
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Network Canvas Column */}
      <div className="lg:w-2/3 flex flex-col space-y-4">
        
        {/* Controls & Filter Bar */}
        <div className="bg-white rounded-xl border border-[#d4cbc2] p-3 shadow-2xs flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-semibold text-[#787169] mr-1 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              Categorías:
            </span>
            <button
              onClick={() => handleFilter('all')}
              className={`px-2.5 py-1 text-xs rounded-md transition cursor-pointer font-medium ${
                activeFilter === 'all'
                  ? 'bg-[#2b553c] text-white shadow-2xs'
                  : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              Todos ({neuroNodesData.length})
            </button>
            <button
              onClick={() => handleFilter('segmentos')}
              className={`px-2.5 py-1 text-xs rounded-md transition cursor-pointer font-medium ${
                activeFilter === 'segmentos'
                  ? 'bg-[#2b553c] text-white shadow-2xs'
                  : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              Segmentos & Estructura
            </button>
            <button
              onClick={() => handleFilter('neuronas')}
              className={`px-2.5 py-1 text-xs rounded-md transition cursor-pointer font-medium ${
                activeFilter === 'neuronas'
                  ? 'bg-[#1d5e68] text-white shadow-2xs'
                  : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              3 Tipos de Neuronas
            </button>
            <button
              onClick={() => handleFilter('nucleos')}
              className={`px-2.5 py-1 text-xs rounded-md transition cursor-pointer font-medium ${
                activeFilter === 'nucleos'
                  ? 'bg-[#704812] text-white shadow-2xs'
                  : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              Núcleos (Sust. Gris)
            </button>
            <button
              onClick={() => handleFilter('rexed')}
              className={`px-2.5 py-1 text-xs rounded-md transition cursor-pointer font-medium ${
                activeFilter === 'rexed'
                  ? 'bg-[#8a4b18] text-white shadow-2xs'
                  : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              Láminas de Rexed
            </button>
            <button
              onClick={() => handleFilter('fasciculos')}
              className={`px-2.5 py-1 text-xs rounded-md transition cursor-pointer font-medium ${
                activeFilter === 'fasciculos'
                  ? 'bg-[#2a5078] text-white shadow-2xs'
                  : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              Fascículos (Sust. Blanca)
            </button>
            <button
              onClick={() => handleFilter('autonomo')}
              className={`px-2.5 py-1 text-xs rounded-md transition cursor-pointer font-medium ${
                activeFilter === 'autonomo'
                  ? 'bg-[#5c3d28] text-white shadow-2xs'
                  : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              Tálamo & Autónomo
            </button>
          </div>

          {/* Quick Zoom Actions */}
          <div className="flex items-center gap-1 border-l border-[#d4cbc2] pl-2">
            <button
              onClick={handleZoomIn}
              title="Acercar mapa"
              className="p-1 rounded text-[#787169] hover:text-[#231f1c] hover:bg-[#f5efe9] transition cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleZoomOut}
              title="Alejar mapa"
              className="p-1 rounded text-[#787169] hover:text-[#231f1c] hover:bg-[#f5efe9] transition cursor-pointer"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleResetZoom}
              title="Centrar mapa"
              className="p-1 rounded text-[#787169] hover:text-[#231f1c] hover:bg-[#f5efe9] transition cursor-pointer"
            >
              <Crosshair className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Network Canvas */}
        <div className="relative bg-white rounded-2xl border border-[#d4cbc2] shadow-xs overflow-hidden">
          <div 
            id="network-container" 
            ref={containerRef} 
            className="w-full h-[580px] cursor-grab active:cursor-grabbing"
          />

          {/* Helper Legend Badge */}
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1.5 rounded-lg border border-[#d4cbc2] text-[11px] text-[#787169] shadow-2xs flex items-center gap-2 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-[#2b553c]" />
            <span>Médula & 31 Pares</span>
            <span className="w-2 h-2 rounded-full bg-[#1d5e68]" />
            <span>3 Neuronas</span>
            <span className="w-2 h-2 rounded-full bg-[#704812]" />
            <span>Núcleos</span>
            <span className="w-2 h-2 rounded-full bg-[#2a5078]" />
            <span>Fascículos</span>
          </div>
        </div>
      </div>

      {/* Details & Search Column */}
      <div className="lg:w-1/3 flex flex-col space-y-4">
        
        {/* Node Finder Input */}
        <div className="bg-white rounded-xl border border-[#d4cbc2] p-3 shadow-2xs">
          <div className="relative">
            <input
              type="text"
              value={nodeSearchTerm}
              onChange={(e) => setNodeSearchTerm(e.target.value)}
              placeholder="Buscar nodo en el mapa..."
              className="w-full pl-3 pr-8 py-1.5 text-xs bg-[#fbf8f5] border border-[#d4cbc2] rounded-md text-[#231f1c] focus:outline-none focus:ring-1 focus:ring-[#2b553c]"
            />
            {nodeSearchTerm && (
              <button
                onClick={() => setNodeSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#787169] hover:text-[#231f1c]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Search Dropdown matches */}
          {nodeSearchTerm && (
            <div className="mt-2 max-h-48 overflow-y-auto space-y-1 divide-y divide-[#f5efe9]">
              {filteredSearchList.length > 0 ? (
                filteredSearchList.map(n => (
                  <button
                    key={n.id}
                    onClick={() => {
                      handleSelectFromSearch(n.id);
                      setNodeSearchTerm('');
                    }}
                    className="w-full text-left py-1.5 px-2 hover:bg-[#fbf8f5] rounded text-xs transition cursor-pointer flex items-center justify-between"
                  >
                    <span className="font-medium text-[#292420]">{n.label}</span>
                    <span className="text-[10px] text-[#787169]">{n.category}</span>
                  </button>
                ))
              ) : (
                <div className="text-center py-2 text-xs text-[#787169]">
                  No se encontraron conceptos.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Selected Node Inspector Card */}
        <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs flex-grow flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 border-b border-[#d4cbc2]/60 pb-3 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#787169]">
                Ficha del Concepto
              </span>
              <span 
                className="text-[11px] font-semibold px-2 py-0.5 rounded"
                style={{ 
                  backgroundColor: `${selectedNode.colorGroup}15`, 
                  color: selectedNode.colorGroup 
                }}
              >
                {selectedNode.category}
              </span>
            </div>

            <h3 className="text-lg font-bold text-[#292420] mb-2 leading-snug">
              {selectedNode.label}
            </h3>

            <p className="text-xs text-[#49423c] leading-relaxed mb-4">
              {selectedNode.desc}
            </p>

            {/* Exam Highlight Box */}
            <div className="bg-[#fcf5e9] border border-[#e8d5b5] rounded-xl p-3 mb-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#704812] mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#704812]" />
                <span>Punto Clave para el Examen:</span>
              </div>
              <p className="text-xs text-[#52330a] leading-relaxed">
                {selectedNode.exam}
              </p>
            </div>

            {/* Analogy if present */}
            {selectedNode.analogia && (
              <div className="bg-[#edf5f0] border border-[#c5e0cf] rounded-xl p-3 mb-4">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#2b553c] mb-1">
                  <Activity className="w-3.5 h-3.5 text-[#2b553c]" />
                  <span>Nemotecnia / Metáfora:</span>
                </div>
                <p className="text-xs text-[#1e3c2a] italic">
                  "{selectedNode.analogia}"
                </p>
              </div>
            )}
          </div>

          {/* Quick jump to related structures */}
          <div className="pt-3 border-t border-[#d4cbc2]/60 text-xs text-[#787169]">
            <p className="mb-2 font-medium flex items-center gap-1.5 text-[#292420]">
              <NetworkIcon className="w-3.5 h-3.5 text-[#2b553c]" />
              Conexiones en la Red:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {neuroEdgesData
                .filter(e => e.from === selectedNode.id || e.to === selectedNode.id)
                .slice(0, 4)
                .map((edge, idx) => {
                  const targetId = edge.from === selectedNode.id ? edge.to : edge.from;
                  const targetNode = neuroNodesData.find(n => n.id === targetId);
                  if (!targetNode) return null;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectFromSearch(targetNode.id)}
                      className="px-2 py-1 text-[11px] bg-[#fbf8f5] hover:bg-[#f5efe9] border border-[#d4cbc2] rounded text-[#49423c] transition cursor-pointer flex items-center gap-1"
                    >
                      <span>{targetNode.label}</span>
                      <ArrowRight className="w-2.5 h-2.5 text-[#787169]" />
                    </button>
                  );
                })}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
