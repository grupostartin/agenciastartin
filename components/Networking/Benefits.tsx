import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CHECKOUT_URL } from './constants';

const benefits = [
  "Inicie conversas estratégicas com qualquer pessoa — online ou offline — sem parecer desesperado.",
  "Construa uma rede qualificada com quem realmente abre portas, não apenas colecionadores de cartões.",
  "Gere sua primeira renda via indicação em até 90 dias de aplicação do método.",
  "Networking como seu maior ativo de carreira, parando de depender 100% de currículos.",
  "Fale sobre seu trabalho com confiança e clareza, sem soar arrogante ou artificial.",
  "Seja lembrado e recomendado pelas pessoas certas quando as oportunidades de ouro aparecerem.",
  "Acesso a oportunidades 'invisíveis' que nunca aparecem no LinkedIn."
];

export default function Benefits() {
  const scrollToOffer = () => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="py-20 md:py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="label-md text-tertiary mb-6 block font-bold tracking-[0.2em] uppercase text-xs">A Transformação</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              O que você vai <span className="text-primary italic">conquistar.</span>
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10 font-medium">
              Não é sobre ser o centro das atenções. É sobre construir um ecossistema de pessoas que valorizam e indicam o seu trabalho de forma recorrente.
            </p>
            
            <div className="hidden lg:block">
              <a 
                href={CHECKOUT_URL}
                className="btn-primary"
              >
                Garantir Minha Vaga <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl bg-surface-container-low border border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-on-surface font-medium leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
            
            <div className="lg:hidden mt-10">
              <a 
                href={CHECKOUT_URL}
                className="btn-primary w-full"
              >
                Garantir Minha Vaga <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
