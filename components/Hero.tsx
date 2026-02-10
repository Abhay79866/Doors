
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background-light dark:from-background-dark via-background-light/70 dark:via-background-dark/80 to-transparent z-10 transition-colors duration-500"></div>
        <img 
          alt="Luxury Door Entrance" 
          className="w-full h-full object-cover scale-105 animate-[slow-zoom_20s_infinite_alternate] brightness-110 dark:brightness-100" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMlpjOJY4nBTnVHHzL-u08GJBgZiLNRrjtbVpYr0Vheh82UWRNK7hX-vbph8WD42ACXng0oLkQG_V9MazneDsxqTVk4M8Q17KtrxIO_5tBUlWxgWv_SsW1X1QpQj6a-cU1espehjNjStShUGi01YkFCj1bkwfxnDMBtuo7jrTt2aWVK8SdNsXJR-lH4Ejy-MXPIP1JZSG_9n2BxG66iO7y8MmAjyges_Y8VPRsfOWeWJW-iXSwmrfnHzOb4hIHgpmH2K4j6nzv_bc"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-20">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-primary font-medium tracking-widest text-xs uppercase">Est. 1994 Premium Woodwork</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 dark:text-white leading-[1.1] mb-8 transition-colors duration-500">
            The Gateway to <br/>
            <span className="italic text-primary">Luxury</span> Living.
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed transition-colors duration-500">
            Elevate your home's character with handcrafted Burma Teak and reinforced Modern Steel doors. Built for the elite, designed for a lifetime.
          </p>
          
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">15Y</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Warranty</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">100%</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Pure Teak</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">1.2K+</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Luxury Homes</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-background-dark px-10 py-4 font-bold rounded-lg hover:shadow-[0_0_20px_rgba(247,163,8,0.3)] hover:-translate-y-1 transition-all duration-300">
              View Catalogue
            </button>
            <button className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white px-10 py-4 font-medium rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-all">
              Our Process
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
