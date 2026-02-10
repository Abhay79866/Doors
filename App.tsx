
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import DetailSection from './components/DetailSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CallButton from './components/CallButton';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen transition-colors duration-500 bg-background-light dark:bg-surface-dark">
      <Navbar isScrolled={isScrolled} theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <section id="collection">
          <ProductSection />
        </section>
        <section id="craftsmanship">
          <DetailSection />
        </section>
        <Features />
        <section id="voices">
          <Testimonials />
        </section>
        <section id="showrooms">
          <ContactSection />
        </section>
      </main>

      <Footer />
      <CallButton />
    </div>
  );
};

export default App;
