
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  isScrolled: boolean;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const phoneNumber = "8090385242";

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav bg-white/80 dark:bg-slate-900/90 py-4 shadow-xl' 
          : 'bg-transparent py-6'
      } border-b border-black/5 dark:border-white/5`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="material-icons text-white text-xl">door_front</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase transition-colors">
            MalluPur<span className="text-primary">-</span>Doors
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}

          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
            aria-label="Toggle Theme"
          >
            <span className="material-icons text-xl">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <a 
            href={`tel:${phoneNumber}`}
            className="px-6 py-2.5 border border-primary/50 text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <span className="material-icons text-sm">phone</span>
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full text-slate-900 dark:text-white"
          >
            <span className="material-icons text-xl">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button 
            className="text-slate-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-icons">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl absolute top-full left-0 w-full py-8 border-b border-black/5 dark:border-white/5 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-lg text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href={`tel:${phoneNumber}`}
              className="px-8 py-3 bg-primary text-slate-900 font-bold rounded-lg flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="material-icons">phone</span>
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
