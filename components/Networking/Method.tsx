import { motion } from 'framer-motion';
import { Target, MessageCircle, TrendingUp, ArrowRight, Zap } from 'lucide-react';
import { CHECKOUT_URL } from './constants';

const pillars = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Posicionamento Magnético",
    desc: "Como se apresentar de forma que as pessoas certas queiram se conectar com você primeiro — sem precisar 'se vender' de forma agressiva."
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-primary" />,
    title: "Conversas de Alto Valor",
    desc: "O sistema de 3 etapas para transformar qualquer interação casual em uma conexão estratégica duradoura, mesmo se você travar no início."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Monetização Orgânica",
    desc: "O processo de transformar conexões em oportunidades reais de renda — indicações e contratos — de forma natural e ética."
  }
];

export default function Method() {
  const scrollToOffer = () => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="metodo" className="py-20 md:py-32 bg-surface-container-low relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-primary/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-xs">A Estrutura do Sucesso</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">O Método Anti-Tímido™</h2>
          <p className="text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            Uma abordagem sistemática que funciona exatamente porque ignora o carisma tradicional e foca em <span className="text-white italic">processos replicáveis.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20 relative">
          {pillars.map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-card p-10 rounded-3xl hover:bg-surface-container-highest/50 transition-all duration-500 border-white/5"
            >
              <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{pillar.title}</h3>
              <p className="text-on-surface-variant leading-relaxed text-base font-medium">{pillar.desc}</p>
              
              <div className="mt-8 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Ver Detalhes <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface p-10 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-5xl mx-auto shadow-2xl shadow-black/50"
        >
          <div className="flex-1">
            <h4 className="text-2xl font-bold text-white mb-4">Diferente de tudo que você já viu.</h4>
            <p className="text-on-surface-variant leading-relaxed font-medium">
              Não ensinamos a 'fingir ser extrovertido'. Ensinamos a usar sua natureza analítica como uma <span className="text-tertiary">vantagem competitiva</span> no mercado de conexões.
            </p>
          </div>
          <a 
            href={CHECKOUT_URL}
            className="btn-primary whitespace-nowrap"
          >
            Acessar o Método <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
