import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Lock, Globe } from 'lucide-react';
import { CHECKOUT_URL } from './constants';

export default function FinalCTA() {
  const scrollToOffer = () => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="py-24 md:py-40 bg-surface text-center relative overflow-hidden border-t border-white/5">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-primary/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-16 h-16 bg-surface-container-high rounded-2xl flex items-center justify-center mx-auto mb-10 border border-white/10">
            <Globe className="w-8 h-8 text-primary animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-10 leading-[1.05] tracking-tight">
            Uma Decisão Que Muda <br/>
            <span className="text-gradient italic">Toda a Sua Trajetória.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-on-surface-variant mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
            A escolha é sua: continuar invisível na multidão ou começar agora a construir o networking que vai transformar sua carreira para sempre.
          </p>
          
          <a 
            href={CHECKOUT_URL}
            className="w-full sm:w-auto btn-primary py-5 md:py-6 px-8 md:px-16 text-lg md:text-2xl shadow-2xl shadow-primary/30 mb-12 hover:scale-[1.02] uppercase font-black"
          >
            QUERO COMEÇAR AGORA <ArrowRight className="ml-3 w-6 h-6 md:w-8 md:h-8" />
          </a>
          
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className="flex items-center gap-3 text-sm font-bold text-on-surface-variant uppercase tracking-widest">
              <Lock className="w-4 h-4 text-primary" /> Pagamento Seguro
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-on-surface-variant uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-primary" /> 7 Dias de Garantia
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-on-surface-variant uppercase tracking-widest">
              <div className="w-2 h-2 rounded-full bg-green-500" /> Acesso Imediato
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
