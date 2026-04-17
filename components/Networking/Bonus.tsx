import { motion } from 'framer-motion';
import { FileText, CheckSquare, RefreshCw, Users, PlusCircle } from 'lucide-react';

const bonuses = [
  {
    icon: <FileText className="w-7 h-7 text-primary" />,
    title: "Script Anti-Tímido™",
    desc: "Roteiro testado para se apresentar sem parecer robótico. Saiba como responder 'o que você faz?' gerando curiosidade.",
    value: "R$ 97"
  },
  {
    icon: <CheckSquare className="w-7 h-7 text-primary" />,
    title: "Checklist de Eventos",
    desc: "O guia de ação prática passo a passo para antes, durante e após qualquer evento físico ou online.",
    value: "R$ 67"
  },
  {
    icon: <RefreshCw className="w-7 h-7 text-primary" />,
    title: "Templates de Reconexão",
    desc: "12 templates 'copiar e colar' para retomar contato com pessoas que você não fala há meses ou anos.",
    value: "R$ 136"
  },
  {
    icon: <Users className="w-7 h-7 text-primary" />,
    title: "Comunidade VIP",
    desc: "Grupo exclusivo para troca de experiências e parcerias ativas com pessoas na mesma sintonia.",
    value: "R$ 197"
  }
];

export default function Bonus() {
  return (
    <section className="py-20 md:py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tertiary/10 border border-tertiary/20 mb-6">
            <PlusCircle className="w-4 h-4 text-tertiary" />
            <span className="text-tertiary font-bold tracking-widest uppercase text-xs">Exclusivo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            E não para <span className="text-primary italic">por aí...</span>
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-medium">
            Você vai receber hoje 4 bônus de aceleração projetados para eliminar qualquer trava prática no seu caminho.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonuses.map((bonus, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-low border border-white/5 rounded-[2rem] p-8 flex flex-col hover:bg-surface-container-high transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                {bonus.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 pr-4 leading-tight">{bonus.title}</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm font-medium mb-8 grow">
                {bonus.desc}
              </p>
              <div className="pt-6 border-t border-white/5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1 group-hover:text-primary transition-colors">Avaliado em</p>
                <div className="text-white font-black text-lg">{bonus.value}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
