import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Lock, Globe } from 'lucide-react';

const CHECKOUT_URL = "https://pay.cakto.com.br/i39hvnd_852878";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-28 bg-surface text-center relative overflow-hidden border-t border-white/5">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-primary/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-16 h-16 bg-surface-container-high rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
            <Globe className="w-8 h-8 text-primary animate-pulse" />
          </div>

          <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6">
            A decisão é agora
          </p>

          <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-10 leading-[1.05] tracking-tight">
            Sua rede de relacionamentos<br />
            <span className="text-gradient italic">pode ser seu maior ativo.</span>
          </h2>

          <p className="text-xl md:text-2xl text-on-surface-variant mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            Grandes oportunidades nascem de grandes conexões. E você não precisa ser extrovertido para construir as suas.
          </p>

          <p className="text-lg text-white font-bold mb-12 italic">
            "Networking não é sobre falar com todo mundo. É sobre criar as conexões certas."
          </p>

          <a
            href={CHECKOUT_URL}
            className="w-full sm:w-auto btn-primary py-5 md:py-6 px-8 md:px-16 text-lg md:text-2xl shadow-2xl shadow-primary/30 mb-12 hover:scale-[1.02] uppercase font-black"
          >
            GARANTIR MEU ACESSO AGORA <ArrowRight className="ml-3 w-6 h-6 md:w-8 md:h-8" />
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
