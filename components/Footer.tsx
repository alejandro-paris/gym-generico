import React from 'react';
import { Activity, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Activity className="h-6 w-6 text-brand-neon" />
            <span className="text-xl font-black italic tracking-tighter text-white">
              PULSE<span className="text-brand-neon">FIT</span>
            </span>
          </div>
          
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2024 PulseFit Gym. Todos los derechos reservados.
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-brand-neon transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-neon transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-neon transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;