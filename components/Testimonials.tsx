
import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="py-24 bg-white dark:bg-surface-dark overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900 dark:text-white mb-6 relative inline-block transition-colors">
            Voices of Luxury
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary"></span>
          </h2>
          <p className="text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] text-[10px] font-bold mt-8">
            Client Validation Reports
          </p>
        </div>

        <div className="relative group max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="bg-slate-50 dark:bg-slate-900/40 border border-black/5 dark:border-white/5 shadow-xl dark:shadow-none rounded-[2rem] p-4 md:p-12 min-h-[450px] flex flex-col md:flex-row items-center gap-10 md:gap-16 transition-all duration-700">
            {/* Image Side */}
            <div className="w-full md:w-5/12 aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={current.image} 
                alt="Client Project" 
                className="w-full h-full object-cover grayscale brightness-90 dark:brightness-75 transition-all duration-700 hover:grayscale-0 hover:brightness-100"
              />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-7/12 flex flex-col justify-center">
              <div className="flex gap-1 mb-8">
                {[...Array(current.rating)].map((_, i) => (
                  <span key={i} className="material-icons text-primary text-lg">star</span>
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl font-serif text-slate-700 dark:text-slate-300 italic leading-relaxed mb-10 transition-colors">
                {current.text}
              </blockquote>

              <div className="flex items-center gap-6">
                {/* Rhombus Initials */}
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <div className="absolute inset-0 border border-primary rotate-45"></div>
                  <span className="text-primary font-bold text-sm tracking-tighter relative z-10">{current.initials}</span>
                </div>

                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold tracking-widest uppercase text-sm mb-1 transition-colors">{current.author}</h4>
                  <p className="text-slate-400 dark:text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold transition-colors">{current.project}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-center gap-12">
            <div className="flex gap-4">
              <button 
                onClick={prev}
                className="w-14 h-14 bg-white dark:bg-slate-900 border border-black/5 dark:border-white/5 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 transition-all rounded-lg shadow-sm"
              >
                <span className="material-icons">west</span>
              </button>
              <button 
                onClick={next}
                className="w-14 h-14 bg-white dark:bg-slate-900 border border-black/5 dark:border-white/5 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 transition-all rounded-lg shadow-sm"
              >
                <span className="material-icons">east</span>
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-3">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i ? 'bg-primary w-6' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
