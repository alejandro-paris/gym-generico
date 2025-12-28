import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <Activity className="h-8 w-8 text-brand-neon group-hover:rotate-12 transition-transform" />
              <span className="text-2xl font-black italic tracking-tighter text-white">
                PULSE<span className="text-brand-neon">FIT</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-brand-neon px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wide"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#pricing"
                className="bg-brand-neon text-brand-dark px-6 py-2 rounded-full font-bold hover:bg-white transition-colors"
              >
                Únete Hoy
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-surface border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </a>
            ))}
            <a 
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="block text-center mt-4 bg-brand-neon text-brand-dark px-6 py-3 rounded-md font-bold"
              >
                Únete Hoy
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;