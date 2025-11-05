"use client";

import React, { useState } from 'react';
import { VERTICALS, ServiceVertical } from '@/types/verticals';

interface VerticalSelectorProps {
  onSelectVertical?: (vertical: ServiceVertical) => void;
  selectedVertical?: ServiceVertical;
}

const VerticalSelector: React.FC<VerticalSelectorProps> = ({ 
  onSelectVertical,
  selectedVertical 
}) => {
  const [selected, setSelected] = useState<ServiceVertical | null>(selectedVertical || null);

  const handleSelect = (verticalId: ServiceVertical) => {
    setSelected(verticalId);
    onSelectVertical?.(verticalId);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {VERTICALS.map((vertical) => (
        <button
          key={vertical.id}
          onClick={() => handleSelect(vertical.id)}
          className={`
            group relative p-6 rounded-2xl border-2 transition-all duration-300
            hover:scale-105 hover:shadow-xl
            ${selected === vertical.id 
              ? 'border-indigo-600 bg-gradient-to-br ' + vertical.color + ' text-white shadow-lg' 
              : 'border-gray-200 bg-white hover:border-indigo-400'
            }
          `}
        >
          <div className="flex flex-col items-center space-y-3">
            <i className={`pi ${vertical.icon} text-4xl ${selected === vertical.id ? 'text-white' : 'text-indigo-600'}`} />
            <h3 className={`font-bold text-lg text-center ${selected === vertical.id ? 'text-white' : 'text-gray-900'}`}>
              {vertical.name}
            </h3>
            <p className={`text-sm text-center ${selected === vertical.id ? 'text-white/90' : 'text-gray-600'}`}>
              {vertical.description}
            </p>
          </div>
          {selected === vertical.id && (
            <div className="absolute top-2 right-2">
              <i className="pi pi-check-circle text-white text-xl" />
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default VerticalSelector;
