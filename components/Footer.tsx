
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 py-20 border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(247,163,8,0.3)]">
              <span className="material-icons text-white text-2xl">door_front</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white uppercase transition-colors">
              MalluPur<span className="text-primary">-</span>Doors
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-12 text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 font-bold">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Warranty Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Design Studio</a>
            <a href="#" className="hover:text-primary transition-colors">Investor Relations</a>
          </div>

          <div className="flex gap-5">
            {[ 'facebook', 'photo_camera', 'email' ].map((icon, i) => (
              <a 
                key={i}
                href="#" 
                className="w-12 h-12 rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-white/5 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300"
              >
                <span className="material-icons text-xl">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 dark:text-slate-600 text-[10px] uppercase tracking-[0.2em] font-medium text-center transition-colors">
            <p>© 2024 MalluPur-Doors Premium Woodwork. All Rights Reserved.</p>
            <p className="text-slate-500 dark:text-slate-700">Crafted for the Exceptional World Elite.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
