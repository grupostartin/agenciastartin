import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CHECKOUT_URL = "https://pay.cakto.com.br/i39hvnd_852878";

export default function Hero() {
  return (
    <section className="relative min-h-[auto] md:min-h-[80vh] flex items-center pt-8 md:pt-24 pb-12 md:pb-16 overflow-hidden bg-surface">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 blur-[100px] md:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 cursor-default pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-tertiary/5 blur-[80px] md:blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4 cursor-default pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-tertiary" />
              <span className="text-tertiary font-bold tracking-[0.1em] uppercase text-[10px] md:text-xs">
                Curso · Do Zero aos Grandes Players
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
              Você não nasceu tímido.{' '}
              <span className="text-gradient italic">Você só nunca aprendeu</span>{' '}
              a usar seu verdadeiro potencial.
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed max-w-2xl font-medium">
              O <span className="text-white font-bold">Método Anti-Tímido</span> ensina pessoas introvertidas e tímidas a construir networking de alto valor, criar conexões estratégicas e transformar relacionamentos em{' '}
              <span className="text-primary">oportunidades reais de renda</span>, sem fingir ser quem não são.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12 w-full sm:w-auto">
              <a
                href={CHECKOUT_URL}
                className="btn-primary w-full sm:w-auto"
              >
                Quero Garantir Meu Acesso <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md w-full sm:w-fit">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=member${i}`}
                    className="w-10 h-10 rounded-full border-2 border-surface"
                    alt="Membro"
                  />
                ))}
              </div>
              <p className="text-sm text-on-surface-variant font-medium">
                Mais de <span className="text-white font-bold">150+</span> pessoas já transformaram suas conexões.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full opacity-50" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
                alt="Networking de Alto Valor"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl shadow-2xl max-w-[260px] hidden md:block"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Resultado Real</span>
              </div>
              <p className="text-sm font-bold text-white leading-tight">
                "Fechei meu primeiro cliente de R$ 3k através de uma conexão que fiz no grupo."
              </p>
              <p className="text-[10px] mt-2 text-primary font-bold">Aluno do Método</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
