import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function Guarantee() {
  return (
    <section id="garantia" className="py-20 md:py-32 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-success-container text-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center border border-success/20 max-w-5xl mx-auto shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-success/10 blur-[130px] rounded-full -z-10" />

          <div className="w-24 h-24 bg-surface text-success rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl border border-white/10 rotate-3 font-bold">
            <ShieldCheck className="w-12 h-12" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight uppercase">
            Risco Zero. <br/>
            <span className="text-success italic">Garantia Total.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-on-success-container max-w-3xl mx-auto leading-relaxed font-bold mb-10">
            Se por qualquer motivo você não se sentir 100% satisfeito, basta enviar um único email em até 7 dias e nós devolveremos cada centavo.
          </p>
          
          <div className="inline-block px-10 py-5 rounded-2xl bg-black/40 border border-white/5 font-bold text-sm md:text-base uppercase tracking-widest text-white/80">
            Sem perguntas. Sem burocracia. <span className="text-white">Transparência absoluta.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
