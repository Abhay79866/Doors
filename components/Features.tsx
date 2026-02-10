
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16">
          {FEATURES.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 border border-primary/10 group-hover:bg-primary/20 transition-all duration-500 transform group-hover:-rotate-6">
                <span className="material-icons text-primary text-4xl">{feature.icon}</span>
              </div>
              <h4 className="text-2xl font-serif text-slate-900 dark:text-white mb-4 transition-colors">{feature.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
