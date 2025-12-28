import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Gym Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-surface border border-gray-700 text-brand-neon text-sm font-bold tracking-wider mb-6">
            EST. 2024 • PREMIUM FITNESS
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
            Supera tus <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-green-600">
              Límites
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10">
            No es solo un gimnasio. Es el lugar donde construyes tu mejor versión. 
            Entrena con los mejores, usa el mejor equipo y alcanza tus metas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#pricing" 
              className="group bg-brand-neon text-brand-dark font-bold py-4 px-10 rounded-full text-lg hover:bg-white transition-all flex items-center gap-2"
            >
              Empezar Ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#classes" 
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-white hover:text-brand-dark transition-all"
            >
              Ver Clases
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;