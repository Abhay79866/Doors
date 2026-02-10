
import React from 'react';

const CallButton: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <a 
        href="tel:8090385242"
        className="flex items-center gap-3 bg-primary text-slate-950 px-6 py-4 rounded-full shadow-[0_10px_40px_rgba(247,163,8,0.4)] hover:scale-105 hover:shadow-[0_15px_50px_rgba(247,163,8,0.5)] transition-all duration-300 group border border-white/10"
      >
        <div className="w-10 h-10 bg-slate-950/10 rounded-full flex items-center justify-center group-hover:bg-slate-950/20 transition-colors">
          <span className="material-icons text-2xl group-hover:rotate-12 transition-transform">phone</span>
        </div>
        <div className="flex flex-col pr-2">
          <span className="text-[10px] uppercase tracking-[0.2em] font-black opacity-70 leading-none mb-1">Instant Booking</span>
          <span className="font-bold uppercase tracking-widest text-sm whitespace-nowrap">Call Us Now</span>
        </div>
      </a>
    </div>
  );
};

export default CallButton;
