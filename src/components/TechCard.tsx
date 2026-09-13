import React from 'react';
import type { TechItem } from '../types/TechItem';

interface TechCardProps {
  tech: TechItem;
  isAdded: boolean;
  onAddToStack: (tech: TechItem) => void;
}

const TechCard: React.FC<TechCardProps> = ({ tech, isAdded, onAddToStack }) => {
  return (
    <div className="border border-slate-200 rounded-2xl p-6 shadow-sm bg-white flex flex-col justify-between hover:shadow-xl transition-all duration-300">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 bg-slate-50 p-2 rounded-xl border border-slate-100 flex items-center justify-center overflow-hidden">
            {tech.icon ? (
              <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
            ) : (
              <span className="font-bold text-slate-700">{tech.name[0]}</span>
            )}
          </div>
          
          {tech.badge && (
            <span className="text-xs px-3 py-1 rounded-full font-bold bg-pink-50 text-pink-600 border border-pink-100">
              {tech.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">{tech.name}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">{tech.description}</p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-4">
          <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-semibold">{tech.category}</span>
          <span>{tech.difficulty}</span>
          <span className="text-amber-500 font-bold">★ {tech.rating}</span>
        </div>

        {/* Add to Stack Button */}
        <button
          type="button"
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
            isAdded
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
              : 'bg-slate-900 text-white hover:bg-slate-800 active:scale-95'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default TechCard;