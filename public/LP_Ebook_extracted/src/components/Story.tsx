import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Story() {
  return (
    <section id="historia" className="py-12 md:py-20 bg-surface">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="label-md text-primary mb-6 block font-bold tracking-[0.2em] uppercase text-xs">Minha Jornada</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-10 leading-[1.1]">
              De tímido a construtor <br/>
              <span className="italic">de redes de alto valor.</span>
            </h2>

            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed font-medium">
              <p>
                Eu era o mais tímido da sala. Fugia de apresentações e nunca sabia o que falar. No digital, aprendi que <span className="text-primary">talento sozinho não abre portas</span> — quem abre é o relacionamento certo.
              </p>
              <p>
                Parei de tentar ser extrovertido e estudei o <span className="text-white font-semibold">"código"</span> das conexões. O resultado foi o <span className="text-tertiary font-semibold">Método Anti-Tímido</span>: networking de alto valor sendo exatamente quem você é.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1544717297-fa95b35c76d5?q=80&w=2040&auto=format&fit=crop" 
                alt="Pedro Augusto - Autor" 
                className="w-full h-full object-cover grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="absolute -bottom-8 -left-8 glass-card p-8 rounded-3xl shadow-2xl max-w-[320px] hidden md:block"
            >
              <Quote className="w-10 h-10 text-primary mb-6 opacity-40 shrink-0" />
              <p className="text-white font-bold leading-relaxed">
                "Você não precisa virar outra pessoa para se comunicar melhor. Você precisa de um método."
              </p>
              <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-3">
                <div className="w-8 h-px bg-primary" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Pedro Augusto | Método Anti-Tímido</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
