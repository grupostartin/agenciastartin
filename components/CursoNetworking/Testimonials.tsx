import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rafael M.",
    role: "Freelancer de Design",
    city: "São Paulo, SP",
    result: "Primeiro cliente de R$ 3k",
    text: "Consegui aplicar o método de abordagem e fechei meu primeiro cliente de R$ 3k em menos de um mês. O conteúdo sobre precificação foi o divisor de águas para mim."
  },
  {
    name: "Camila F.",
    role: "Analista de Marketing",
    city: "Belo Horizonte, MG",
    result: "Promoção e 3 novas parcerias",
    text: "Sempre achei que era introvertida demais para networking. O módulo de Presença Autêntica mudou tudo. Não precisei fingir ser extrovertida. Aprendi a fazer perguntas certas e ouvir. Resultado: fui promovida e ainda fechei 3 parcerias no mesmo mês."
  },
  {
    name: "Bruno L.",
    role: "Prestador de Serviços Digitais",
    city: "Curitiba, PR",
    result: "Saiu de R$ 0 para R$ 5k/mês",
    text: "Não sabia o que oferecer nem quanto cobrar. Os módulos de Preço Estratégico e Do Contato ao Caixa me deram clareza total. Defini meu serviço, aprendi a abordar os clientes certos e em 60 dias já estava faturando consistentemente."
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-20 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="label-md text-primary mb-6 block font-bold tracking-[0.2em] uppercase text-xs">Resultados Reais</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Pessoas Como Você{' '}
            <span className="text-tertiary">Mudaram de Jogo.</span>
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-medium">
            Introvertidos, tímidos e iniciantes que pararam de esperar a oportunidade chegar e começaram a construir suas conexões com método.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-10 rounded-[2.5rem] flex flex-col h-full hover:bg-surface-container-high transition-colors group"
            >
              <div className="flex gap-1 mb-8">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-primary fill-primary" />)}
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">"{testi.result}"</h3>
                <div className="w-12 h-1 bg-primary/20 rounded-full group-hover:w-20 transition-all duration-500" />
              </div>

              <p className="text-on-surface-variant italic mb-10 grow leading-relaxed font-serif">
                "{testi.text}"
              </p>

              <div className="flex items-center gap-5 mt-auto pt-8 border-t border-white/5">
                <div className="w-14 h-14 bg-surface-container-highest border border-white/10 text-white rounded-full flex items-center justify-center font-bold text-xl uppercase">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white text-base">{testi.name}</p>
                  <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">{testi.role}</p>
                  <p className="text-xs text-on-surface-variant/60 font-medium">{testi.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
