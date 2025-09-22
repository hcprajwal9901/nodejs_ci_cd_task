
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = ['about', 'projects', 'contact'];

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto max-w-screen-xl px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={() => scrollToSection('home')} className="text-2xl font-bold tracking-tighter text-text hover:text-accent transition-colors">
          {PERSONAL_INFO.name.split(' ')[0]}<span className="text-accent">.</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <button key={link} onClick={() => scrollToSection(link)} className="capitalize text-text-secondary hover:text-accent transition-colors duration-300">
              {link}
            </button>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-text focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary shadow-xl">
          <div className="flex flex-col items-center px-4 pt-2 pb-4 space-y-4">
            {navLinks.map(link => (
              <button key={link} onClick={() => scrollToSection(link)} className="capitalize w-full text-center py-2 text-text-secondary hover:text-accent hover:bg-secondary rounded-md transition-colors duration-300">
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
