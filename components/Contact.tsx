import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Visítanos
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              Tu primera sesión es gratis. Ven a conocer las instalaciones y habla con nuestros entrenadores.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-neon w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Ubicación</h4>
                  <p className="text-gray-400">Av. de la Constitución, 123<br/>28001 Madrid, España</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center shrink-0">
                  <Phone className="text-brand-neon w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Teléfono</h4>
                  <p className="text-gray-400">+34 912 345 678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center shrink-0">
                  <Mail className="text-brand-neon w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Email</h4>
                  <p className="text-gray-400">hola@pulsefitgym.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-surface p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Reserva tu pase</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Nombre" 
                  className="bg-gray-900 border border-gray-700 text-white rounded-lg p-4 w-full focus:outline-none focus:border-brand-neon transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Apellido" 
                  className="bg-gray-900 border border-gray-700 text-white rounded-lg p-4 w-full focus:outline-none focus:border-brand-neon transition-colors"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-gray-900 border border-gray-700 text-white rounded-lg p-4 w-full focus:outline-none focus:border-brand-neon transition-colors"
              />
              <select className="bg-gray-900 border border-gray-700 text-gray-400 rounded-lg p-4 w-full focus:outline-none focus:border-brand-neon transition-colors">
                <option>Interés Principal</option>
                <option>Musculación</option>
                <option>Clases Grupales</option>
                <option>Entrenador Personal</option>
              </select>
              <button className="w-full bg-brand-neon text-brand-dark font-black uppercase py-4 rounded-lg hover:bg-white transition-colors mt-2">
                Solicitar Acceso
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;