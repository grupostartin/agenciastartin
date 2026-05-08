import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function Guarantee() {
  return (
    <section id="garantia" className="py-8 md:py-12 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-white rounded-3xl p-6 md:p-12 text-center border border-green-500/20 max-w-3xl mx-auto shadow-2xl relative overflow-hidden"
          style={{ background: 'rgb(0, 57, 28)' }}
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-green-500/10 blur-[100px] rounded-full -z-10" />

          <div className="w-16 h-16 bg-surface text-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl border border-white/10 rotate-3">
            <ShieldCheck className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight tracking-tight uppercase">
            Risco Zero. 
            <span className="text-green-400 italic ml-3">Garantia Total.</span>
          </h2>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-bold mb-8 text-green-100">
            Se por qualquer motivo você não se sentir satisfeito, em até 7 dias devolvemos 100% do seu investimento.
          </p>
          
          <div className="inline-block px-6 py-3 rounded-xl bg-black/40 border border-white/5 font-bold text-[10px] md:text-xs uppercase tracking-widest text-white/80">
            Sem perguntas. Sem burocracia. <span className="text-white">Transparência absoluta.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
