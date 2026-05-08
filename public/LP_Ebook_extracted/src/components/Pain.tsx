import { motion } from 'motion/react';
import { EyeOff, TrendingDown, MessageCircleOff, DollarSign, Quote, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../constants';

const painPoints = [
  {
    icon: <EyeOff className="text-primary w-6 h-6" />,
    title: "Invisibilidade que custa caro",
    desc: "Você tem talento, mas ninguém sabe. Profissionais menos preparados crescem mais rápido simplesmente porque conhecem as pessoas certas."
  },
  {
    icon: <MessageCircleOff className="text-primary w-6 h-6" />,
    title: "Travado na hora de abordar",
    desc: "Você vê a pessoa certa, sabe que poderia ser uma oportunidade. E trava. Seja no DM, no evento ou no corredor. A mensagem nunca é enviada."
  },
  {
    icon: <TrendingDown className="text-primary w-6 h-6" />,
    title: "Networking falso não funciona",
    desc: "Já tentou distribuir cartões, ir em eventos sem direção ou mandar 'oi tudo bem?' aleatório? A sensação é de que networking é para os extrovertidos."
  },
  {
    icon: <DollarSign className="text-primary w-6 h-6" />,
    title: "Conexões que não geram renda",
    desc: "Você conhece pessoas, mas nenhuma delas vira cliente, parceiro ou indicação. A rede existe, mas não gera resultado concreto no seu bolso."
  }
];

export default function Pain() {
  return (
    <section className="py-12 md:py-20 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-32"
          >
            <span className="label-md text-tertiary mb-6 block font-bold tracking-[0.2em] uppercase text-xs">Você já se sentiu assim?</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              A timidez que{' '}
              <span className="text-primary">silencia oportunidades.</span>
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6 font-medium">
              Para quem é tímido ou introvertido, networking parece um jogo com regras para extrovertidos. Isso custa caro: em clientes, em salário, em oportunidades.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-surface border border-white/5 hover:border-primary/20 transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
                  <div className="p-4 bg-surface-container-high rounded-2xl group-hover:bg-primary/10 transition-colors shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{point.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed text-base">{point.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-8 p-10 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                Isso não é um traço de personalidade.
              </h3>
              <p className="text-on-surface-variant mb-6 font-medium">
                É falta de um <span className="text-primary italic font-bold">método.</span> E é exatamente isso que a comunidade entrega.
              </p>
              <a
                href={CHECKOUT_URL}
                className="btn-primary"
              >
                Quero Sair da Invisibilidade <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
