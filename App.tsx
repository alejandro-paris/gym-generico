import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Classes from './components/Classes';
import Pricing from './components/Pricing';
import Trainers from './components/Trainers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-neon selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Classes />
        <Pricing />
        <Trainers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;