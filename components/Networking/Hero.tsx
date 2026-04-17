import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CHECKOUT_URL } from './constants';

export default function Hero() {
  const scrollToOffer = () => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-[auto] md:min-h-screen flex items-center pt-12 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-surface">
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
                O Novo Padrão de Networking para Tímidos
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
              Construa um Networking de <span className="text-primary italic">Alto Valor</span> do Zero — Mesmo Sendo <span className="text-gradient">Tímido.</span>
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed max-w-2xl font-medium">
              A jornada exata que me tirou da paralisação social para dono de uma agência de sucesso, utilizando um método estruturado de conexões que <span className="text-white">ignora o carisma natural.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12 w-full sm:w-auto">
              <a
                href={CHECKOUT_URL}
                className="btn-primary w-full sm:w-auto"
              >
                Quero Construir Meu Networking <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md w-full sm:w-fit">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`}
                    className="w-10 h-10 rounded-full border-2 border-surface"
                    alt="User"
                  />
                ))}
              </div>
              <p className="text-sm text-on-surface-variant font-medium">
                Mais de <span className="text-white font-bold">150+</span> alunos transformando suas conexões.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:block"
          >
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full opacity-50" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5]">
              <img
                src="/pedroceo.jpg"
                alt="Professional Networking"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Card Detail */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl shadow-2xl max-w-[240px] hidden md:block"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Resultado Real</span>
              </div>
              <p className="text-sm font-bold text-white leading-tight">
                "Fechei meu primeiro contrato de R$ 5k através de um contato frio do LinkedIn."
              </p>
              <p className="text-[10px] mt-2 text-primary font-bold">— Aluno do Método</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
