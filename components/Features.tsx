import React from 'react';
import { FEATURES } from '../constants';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            ¿Por qué <span className="text-brand-neon">PulseFit?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Diseñado para atletas de todos los niveles. Todo lo que necesitas para tu éxito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-brand-surface p-8 rounded-2xl hover:bg-gray-800 transition-colors border border-gray-800 hover:border-brand-neon/50 group"
            >
              <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-neon transition-colors">
                <feature.icon className="w-8 h-8 text-brand-neon group-hover:text-brand-dark transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;