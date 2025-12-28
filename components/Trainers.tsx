import React from 'react';
import { TRAINERS } from '../constants';
import { Instagram, Twitter } from 'lucide-react';

const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Expertos en <span className="text-brand-neon">Resultados</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer) => (
            <div key={trainer.name} className="group relative rounded-2xl overflow-hidden bg-brand-surface">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-brand-dark to-transparent pt-20">
                <h3 className="text-2xl font-bold text-white">{trainer.name}</h3>
                <p className="text-brand-neon font-medium mb-4">{trainer.role}</p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                  <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-neon hover:text-black text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-neon hover:text-black text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;