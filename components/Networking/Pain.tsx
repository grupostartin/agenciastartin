import { motion } from 'framer-motion';
import { Target, Users, Zap, AlertCircle, Quote, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from './constants';

const painPoints = [
  {
    icon: <Users className="text-primary w-6 h-6" />,
    title: "Invisibilidade Social",
    desc: "Estar em um evento mas nunca interagir, saindo de lá com a sensação de que ninguém notou sua presença."
  },
  {
    icon: <AlertCircle className="text-primary w-6 h-6" />,
    title: "Competência vs. Conexão",
    desc: "Ver profissionais menos qualificados crescendo mais rápido apenas por terem os contatos certos."
  },
  {
    icon: <Target className="text-primary w-6 h-6" />,
    title: "Depender do Acaso",
    desc: "Saber que uma indicação mudaria sua vida, mas não saber como pedir ou pra quem recorrer sem parecer invasivo."
  },
  {
    icon: <Zap className="text-primary w-6 h-6" />,
    title: "O Pânico do Networking",
    desc: "A ideia de 'vender seu peixe' parece artificial e desesperada, travando qualquer iniciativa genuína."
  }
];

export default function Pain() {
  const scrollToOffer = () => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="py-20 md:py-32 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-32"
          >
            <span className="label-md text-tertiary mb-6 block font-bold tracking-[0.2em] uppercase text-xs">O Cenário Comum</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              O Silêncio que <br/>
              <span className="text-primary">Drena sua Carreira.</span>
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10">
              A maioria das pessoas tímidas acredita que networking é um dom de fábrica. Elas aceitam a invisibilidade como um destino, enquanto o mercado recompensa quem é visto.
            </p>
            
            <div className="p-8 rounded-3xl bg-surface-container-highest border border-white/5 relative overflow-hidden">
               <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/5 rotate-12" />
               <p className="text-white font-medium italic relative z-10">
                 "Eu era o cara que ficava no canto da festa olhando o celular. Hoje, eu sou o cara que os grandes nomes chamam para jantar."
               </p>
               <p className="text-xs text-primary font-bold mt-4 uppercase tracking-widest">— Pedro Augusto</p>
            </div>
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
              <h3 className="text-2xl font-bold text-white mb-6">
                Isso não é um traço de personalidade. É falta de um <span className="text-primary italic">Processo.</span>
              </h3>
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
