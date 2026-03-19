import React, { useState, useEffect } from 'react';
import { fluidityAgent } from './QuantumEngine';

interface Props {
  nexusId: string;
  theme: 'dark' | 'light';
}

export const QuantumUI: React.FC<Props> = ({ nexusId, theme }) => {
  const [isEntangled, setIsEntangled] = useState<boolean>(false);

  useEffect(() => {
    // Initiate the fluid connection on mount
    fluidityAgent.entangle(nexusId, 42.5).then((status) => {
      setIsEntangled(status);
    });
  }, [nexusId]);

  return (
    <div className={`glass-card nexus-container ${theme}`}>
      <header className="quantum-header">
        <h1>{isEntangled ? "Nexus Connected" : "Awaiting Fluidity"}</h1>
      </header>
      
      <main id="wave-display" data-agentic-state="active">
        <button 
          onClick={() => setIsEntangled(!isEntangled)}
          className="quantum-btn"
        >
          Toggle Quantum State
        </button>
      </main>
    </div>
  );
};