import React, { useState, useEffect } from 'react';
import { Menu, X, BrainCircuit } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <BrainCircuit className="h-8 w-8 text-primary-600 mr-2" />
            <span className="text-xl font-bold text-neutral-900">GubiLabs</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              FAQ
            </button>
            <Button 
              variant="primary"
              onClick={() => scrollToSection('contact')}
            >
              Work With Us
            </Button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              className="text-neutral-700 hover:text-primary-600 transition-colors"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 rounded-md"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 rounded-md"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="block w-full text-left px-3 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 rounded-md"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left px-3 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 rounded-md"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-3 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 rounded-md"
            >
              FAQ
            </button>
            <div className="px-3 py-2">
              <Button
                variant="primary"
                className="w-full"
                onClick={() => scrollToSection('contact')}
              >
                Work With Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;