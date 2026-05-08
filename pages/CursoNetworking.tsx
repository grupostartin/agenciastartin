import React from 'react';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/CursoNetworking/Hero';
import Pain from '../components/CursoNetworking/Pain';
import Method from '../components/CursoNetworking/Method';
import Benefits from '../components/CursoNetworking/Benefits';
import Testimonials from '../components/CursoNetworking/Testimonials';
import Author from '../components/CursoNetworking/Author';
import FAQ from '../components/CursoNetworking/FAQ';
import Offer from '../components/CursoNetworking/Offer';
import Bonus from '../components/CursoNetworking/Bonus';
import Guarantee from '../components/CursoNetworking/Guarantee';
import FinalCTA from '../components/CursoNetworking/FinalCTA';
import FloatingTimer from '../components/CursoNetworking/FloatingTimer';
import SalesPop from '../components/CursoNetworking/SalesPop';

const CHECKOUT_URL = "https://pay.cakto.com.br/i39hvnd_852878";

export function CursoNetworkingPage() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden" style={{ background: '#111415', color: '#e1e3e4' }}>
      {/* SEO */}
      <title>O Método Anti-Tímido™ | Curso de Networking de Alto Valor</title>

      {/* Floating urgency timer bar */}
      <FloatingTimer />

      {/* Social proof popup */}
      <SalesPop />

      <main className="pt-12 md:pt-14">
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
      <footer className="w-full py-12 px-8 border-t border-white/5" style={{ background: '#191c1d' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 text-center md:text-left">
            <div>
              <div className="text-xl font-black text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                O Método Anti-Tímido™
              </div>
              <p className="text-xs mt-1 font-medium" style={{ color: '#c8c5cd' }}>
                Do Zero aos Grandes Players
              </p>
            </div>
            <div className="text-sm font-medium" style={{ color: '#c8c5cd' }}>
              © 2025 O Método Anti-Tímido. Todos os direitos reservados.
            </div>
          </div>

          {/* Payment Methods */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/5">
            {[
              { name: 'Apple Pay', icon: ' Pay' },
              { name: 'Boleto', icon: '|||||' },
              { name: 'Cartão de Crédito', icon: '💳' },
              { name: 'Google Pay', icon: 'G Pay' },
              { name: 'PicPay', icon: 'P' },
              { name: 'PIX', icon: '❖' }
            ].map((pm, i) => (
              <div key={i} className="flex flex-col items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-bold text-white text-xs md:text-sm" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {pm.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-tighter text-center" style={{ color: '#c8c5cd' }}>{pm.name}</span>
              </div>
            ))}
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:hidden z-50">
        <a
          href={CHECKOUT_URL}
          className="btn-primary w-full shadow-2xl py-4 flex items-center justify-center"
        >
          Quero Meu Acesso Imediato <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
