import React from 'react';
import { Check, Star } from 'lucide-react';
import { PLANS } from '../constants';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-neon/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Planes de <span className="text-brand-neon">Membresía</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sin contratos ocultos. Cancela cuando quieras. Elige tu ritmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative rounded-2xl p-8 border ${
                plan.recommended 
                  ? 'bg-gray-900/80 border-brand-neon shadow-[0_0_30px_rgba(204,255,0,0.15)] transform md:-translate-y-4' 
                  : 'bg-brand-surface border-gray-800'
              } flex flex-col`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-neon text-brand-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" /> Más Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">/mes</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <Check className={`w-5 h-5 mr-3 shrink-0 ${plan.recommended ? 'text-brand-neon' : 'text-gray-500'}`} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-wide transition-all ${
                  plan.recommended 
                    ? 'bg-brand-neon text-brand-dark hover:bg-white' 
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                Elegir Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;