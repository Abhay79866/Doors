
import React from 'react';
import { PRODUCTS } from '../constants';

const ProductSection: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-surface-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 dark:text-white mb-4 transition-colors">Our Masterpieces</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl transition-colors">Each door is a testament to architectural precision, blending traditional carving techniques with contemporary security engineering.</p>
          </div>
          <a className="text-primary font-medium flex items-center gap-2 group transition-all" href="#">
            View all collections 
            <span className="material-icons group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className="group bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-200/50 dark:from-slate-950 via-transparent to-transparent opacity-60"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-serif text-slate-900 dark:text-white mb-3 transition-colors">{product.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed transition-colors">
                  {product.description}
                </p>
                <div className="flex justify-between items-center pt-6 border-t border-black/5 dark:border-white/5">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 font-bold">{product.category}</span>
                  <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-slate-950 transition-all">
                    <span className="material-icons text-xl">add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
