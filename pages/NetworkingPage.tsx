import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Networking/Hero';
import Pain from '../components/Networking/Pain';
import Story from '../components/Networking/Story';
import Method from '../components/Networking/Method';
import Benefits from '../components/Networking/Benefits';
import Testimonials from '../components/Networking/Testimonials';
import FAQ from '../components/Networking/FAQ';
import Offer from '../components/Networking/Offer';
import Bonus from '../components/Networking/Bonus';
import Guarantee from '../components/Networking/Guarantee';
import FinalCTA from '../components/Networking/FinalCTA';
import SalesPop from '../components/Networking/SalesPop';
import { CHECKOUT_URL } from '../components/Networking/constants';
import '../networking.css';

export const NetworkingPage: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="networking-page min-h-screen bg-surface font-sans text-on-surface selection:bg-primary/30 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-surface flex flex-col items-center justify-center"
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-[2px] bg-primary rounded-full mb-6"
            />
            <div className="text-primary font-headline font-bold text-xs uppercase tracking-[0.4em] animate-pulse">
              Carregando Experiência
            </div>
          </motion.div>
        ) : (
          <div className="relative">
            <SalesPop />
            
            {/* Top Promotion Banner */}
            <div className="bg-primary py-2 px-4 text-center relative z-[100]">
              <p className="text-primary-container font-black text-[10px] md:text-sm uppercase tracking-[0.2em]">
                ⚡ PROMOÇÃO EXCLUSIVA: SOMENTE HOJE POR APENAS R$ 97,00 ⚡
              </p>
            </div>

            <main>
              <Hero />
              <Pain />
              <Story />
              <Method />
              <Benefits />
              <Testimonials />
              <FAQ />
              <Offer />
              <Bonus />
              <Guarantee />
              <FinalCTA />
            </main>

            {/* Footer */}
            <footer className="bg-surface-container-low w-full py-16 px-8 border-t border-white/5">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto text-center md:text-left">
                <div className="text-xl font-black text-white font-headline">O Método Anti-Tímido</div>
                <div className="text-on-surface-variant text-sm font-medium">
                  © 2024 O Método Anti-Tímido. Todos os direitos reservados.
                </div>
              </div>
            </footer>

            {/* Mobile Sticky CTA */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:hidden z-50">
              <a 
                href={CHECKOUT_URL}
                className="w-full btn-primary shadow-2xl shadow-primary/20 py-4 flex items-center justify-center"
              >
                Quero Meu Acesso Imediato <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NetworkingPage;
