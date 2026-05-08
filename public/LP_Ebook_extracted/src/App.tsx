import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Hero from './components/Hero';
import Pain from './components/Pain';
import Method from './components/Method';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Author from './components/Author';
import FAQ from './components/FAQ';
import Offer from './components/Offer';
import Bonus from './components/Bonus';
import Guarantee from './components/Guarantee';
import FloatingTimer from './components/FloatingTimer';
import FinalCTA from './components/FinalCTA';
import SalesPop from './components/SalesPop';
import { CHECKOUT_URL } from './constants';

export default function App() {
  const scrollToOffer = () => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface selection:bg-primary/30 overflow-x-hidden">
      <FloatingTimer />
      <SalesPop />
      <div>
        <main className="pt-16 md:pt-20">
          <Hero />
          <Pain />
          <Method />
          <Benefits />
          <Testimonials />
          <Author />
          <FAQ />
          <Offer />
          <Bonus />
          <Guarantee />
          <FinalCTA />
        </main>

        {/* Footer */}
        <footer className="bg-surface-container-low w-full py-12 px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 text-center md:text-left">
              <div>
                <div className="text-xl font-black text-white font-headline">O Método Anti-Tímido™</div>
                <p className="text-on-surface-variant text-xs mt-1 font-medium">Do Zero aos Grandes Players</p>
              </div>
              <div className="text-on-surface-variant text-sm font-medium">
                © 2025 O Método Anti-Tímido. Todos os direitos reservados.
              </div>
            </div>

            {/* Payment Methods */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/5">
              {[
                { name: 'Apple Pay', icon: ' Pay' },
                { name: 'Boleto', icon: '|||||' },
                { name: 'Cartão de Crédito', icon: '💳' },
                { name: 'Google Pay', icon: 'G Pay' },
                { name: 'PicPay', icon: 'P' },
                { name: 'PIX', icon: '❖' }
              ].map((pm, i) => (
                <div key={i} className="flex flex-col items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white text-xs md:text-sm">
                    {pm.icon}
                  </div>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter text-center">{pm.name}</span>
                </div>
              ))}
            </div>
          </div>
        </footer>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:hidden z-50">
          <a 
            href={CHECKOUT_URL}
            className="w-full btn-primary shadow-2xl shadow-primary/20 py-4"
          >
            Quero Meu Acesso Imediato <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
