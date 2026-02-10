
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="grid lg:grid-cols-2 min-h-[700px]">
      <div className="bg-slate-50 dark:bg-slate-950 py-24 px-12 lg:px-24 flex flex-col justify-center transition-colors duration-500">
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white mb-6 transition-colors">Visit Our Experience Center</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg transition-colors">Experience the texture of Burma Teak and the weight of solid steel first-hand. Our consultants are ready to bring your vision to life.</p>
        
        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col group">
              <label className="text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2 font-bold group-focus-within:text-primary transition-colors">Full Name</label>
              <input 
                type="text" 
                placeholder="Johnathan Doe"
                className="bg-transparent border-0 border-b border-slate-300 dark:border-slate-800 focus:border-primary focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-700 py-3 transition-all"
              />
            </div>
            <div className="flex flex-col group">
              <label className="text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2 font-bold group-focus-within:text-primary transition-colors">Email Address</label>
              <input 
                type="email" 
                placeholder="john@luxury.com"
                className="bg-transparent border-0 border-b border-slate-300 dark:border-slate-800 focus:border-primary focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-700 py-3 transition-all"
              />
            </div>
          </div>
          
          <div className="flex flex-col group">
            <label className="text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2 font-bold group-focus-within:text-primary transition-colors">Project Type</label>
            <select className="bg-transparent border-0 border-b border-slate-300 dark:border-slate-800 focus:border-primary focus:ring-0 text-slate-900 dark:text-white py-3 transition-all appearance-none cursor-pointer">
              <option className="bg-white dark:bg-slate-900">Residential Villa</option>
              <option className="bg-white dark:bg-slate-900">Commercial Office</option>
              <option className="bg-white dark:bg-slate-900">Interior Renovation</option>
              <option className="bg-white dark:bg-slate-900">Hospitality Project</option>
            </select>
          </div>
          
          <div className="flex flex-col group">
            <label className="text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2 font-bold group-focus-within:text-primary transition-colors">Your Message</label>
            <textarea 
              placeholder="Describe your dream entrance..." 
              rows={3}
              className="bg-transparent border-0 border-b border-slate-300 dark:border-slate-800 focus:border-primary focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-700 py-3 transition-all resize-none"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-primary text-slate-950 py-5 font-bold rounded-xl hover:shadow-[0_0_30px_rgba(247,163,8,0.2)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Book Private Tour
          </button>
        </form>
      </div>

      <div className="relative min-h-[500px] lg:min-h-full overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 z-10 pointer-events-none transition-colors"></div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22381.536338475104!2d82.41749529957623!3d25.967247075683193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39906dc38e8290e5%3A0x6f95f405e36e5913!2sMallupur%2C%20Uttar%20Pradesh%20222125%2C%20India!5e1!3m2!1sen!2sus!4v1770725097024!5m2!1sen!2sus" 
          className="absolute inset-0 w-full h-full border-0 grayscale dark:invert dark:opacity-70 transition-all"
          title="MalluPur-Doors Showroom Location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute top-10 left-10 z-20 bg-white/90 dark:bg-slate-900/80 backdrop-blur p-6 border border-black/5 dark:border-white/5 rounded-xl shadow-lg dark:shadow-none">
           <p className="text-primary text-[10px] uppercase font-bold tracking-widest mb-1">Global HQ & Showroom</p>
           <h5 className="text-slate-900 dark:text-white font-serif text-xl mb-1 transition-colors">MalluPur Doors</h5>
           <p className="text-slate-500 dark:text-slate-400 text-xs transition-colors">Mallupur, Uttar Pradesh 222125, India</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
