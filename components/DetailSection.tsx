
import React from 'react';
import { TEXTURES } from '../constants';

const DetailSection: React.FC = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white inline-block relative pb-4 transition-colors">
            The Art of Detail
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-primary"></span>
          </h2>
          <p className="text-slate-400 dark:text-slate-500 mt-6 max-w-2xl mx-auto uppercase tracking-[0.2em] text-[10px] font-bold">
            Pure Raw Materials. Refined Execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">
          {TEXTURES.map((texture, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-xl border border-black/5 dark:border-white/5 hover:border-primary/50 transition-all duration-500 ${texture.colSpan} ${texture.rowSpan}`}
            >
              <img 
                src={texture.url} 
                alt={texture.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                <div>
                  <p className="text-primary text-xs uppercase tracking-widest font-bold mb-1">Craftsmanship</p>
                  <h4 className="text-white text-lg font-serif">{texture.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
