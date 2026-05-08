import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: "Sou muito tímido. O método realmente funciona para mim?",
    a: "Sim, e foi feito exatamente para você. O Método Anti-Tímido não tenta eliminar sua timidez, mas usar ela como vantagem. Pessoas tímidas têm escuta ativa, profundidade e atenção aos detalhes que extrovertidos raramente têm. Você aprende a usar isso estrategicamente."
  },
  {
    q: "Não tenho nenhuma experiência com networking ou vendas.",
    a: "Ótimo ponto de partida. O treinamento foi pensado para quem está do zero. Você aprende desde a mentalidade correta até scripts prontos para abordar pessoas, definir serviços, precificar e fechar clientes, passo a passo, sem salto no vácuo."
  },
  {
    q: "Preciso ter seguidores ou uma audiência para funcionar?",
    a: "Não. O método foca em conexões estratégicas, não em quantidade de seguidores. Você aprende a abordar as pessoas certas, no momento certo, com a mensagem certa. Isso funciona com 100 ou 100.000 seguidores."
  },
  {
    q: "Quanto tempo vou levar para ter resultados?",
    a: "Isso varia de pessoa para pessoa, mas os exercícios práticos são para aplicação imediata. Vários alunos relatam primeiros resultados nas primeiras 2 a 4 semanas: uma resposta positiva, uma reunião marcada ou o primeiro cliente fechado."
  },
  {
    q: "Networking estratégico não é artificial ou manipulador?",
    a: "Não quando feito com intenção genuína. O método se baseia na mentalidade de 'agricultor': você planta valor antes de colher. Persuasão ética não é manipulação. É clareza, empatia e conduzir o cliente com confiança."
  },
  {
    q: "Tenho acesso vitalício ao conteúdo?",
    a: "Sim. Após a compra, você acessa a área de membros para sempre, incluindo todas as atualizações e novos materiais que forem adicionados."
  }
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mb-4 rounded-3xl overflow-hidden transition-all duration-500 border ${isOpen ? 'bg-surface-container border-primary/20 shadow-2xl' : 'bg-surface-container-low border-white/5'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-8 py-6 font-bold text-lg text-white flex justify-between items-center focus:outline-none"
      >
        <span className="pr-6">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'rotate-180 bg-primary/20 text-primary' : 'bg-white/5 text-white/40'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-8 pb-8 pt-2 text-on-surface-variant leading-relaxed font-medium">
              <div className="h-px w-full bg-white/5 mb-6" />
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-20 bg-surface">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tertiary/10 border border-tertiary/20 mb-6">
            <HelpCircle className="w-4 h-4 text-tertiary" />
            <span className="text-tertiary font-bold tracking-widest uppercase text-xs">Suporte & FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Perguntas{' '}
            <span className="text-primary italic">Frequentes</span>
          </h2>
          <p className="text-lg text-on-surface-variant font-medium">Ainda resta alguma dúvida? Veja os pontos mais comuns antes de entrar.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <FAQItem question={faq.q} answer={faq.a} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
