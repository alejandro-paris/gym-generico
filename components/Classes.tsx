import React from 'react';
import { CLASSES } from '../constants';
import { Clock, Flame } from 'lucide-react';

const Classes: React.FC = () => {
  return (
    <section id="classes" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
              Clases Destacadas
            </h2>
            <p className="text-gray-400 mt-2">Únete a la energía del grupo.</p>
          </div>
          <button className="text-brand-neon font-bold hover:text-white transition-colors underline underline-offset-4">
            Ver horario completo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLASSES.map((session) => (
            <div key={session.id} className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
              <img 
                src={session.image} 
                alt={session.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                    session.intensity === 'Alta' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                  }`}>
                    {session.intensity}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{session.name}</h3>
                <p className="text-gray-300 text-sm mb-4">con {session.instructor}</p>
                
                <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                  <div className="flex items-center gap-2 text-brand-neon">
                    <Clock className="w-4 h-4" />
                    <span className="font-bold">{session.time}</span>
                  </div>
                  <div className="bg-white/10 p-2 rounded-full hover:bg-brand-neon hover:text-black transition-colors">
                    <Flame className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;