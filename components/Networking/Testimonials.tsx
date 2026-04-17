import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: "Rafael M.",
    role: "Visual Designer",
    city: "São Paulo, SP",
    result: "Duplicou o volume de clientes em 2 meses",
    text: "Antes eu perdia noites de sono antes de ir para qualquer meetup. Depois do método, eu sei exatamente o que fazer. Fechei 2 projetos via indicação de pessoas que conversei por minutos."
  },
  {
    name: "Camila F.",
    role: "Analista de Dados",
    city: "Belo Horizonte, MG",
    result: "Promoção e convite para Podcast",
    text: "Ficava vendo os 'puxa-sacos' serem promovidos. Depois de aplicar o método, estruturei conversas com as lideranças sem parecer forçada. Resultado: promovida em tempo recorde."
  },
  {
    name: "Bruno L.",
    role: "Dono de Agência",
    city: "Curitiba, PR",
    result: "Primeiro contrato enterprise fechado",
    text: "Networking parecia ser só para quem tomava chopp com desconhecidos. O método me mostrou que dá pra conectar jogando o jogo dos introvertidos. Fechei o maior contrato do ano."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="label-md text-primary mb-6 block font-bold tracking-[0.2em] uppercase text-xs">Resultados Reais</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Pessoas Como Você <span className="text-tertiary">Mudaram de Jogo.</span></h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-medium">Profissionais que decidiram parar de depender da sorte e começaram a usar o método.</p>
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
