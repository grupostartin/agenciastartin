import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FileText, CheckSquare, DollarSign, MessageCircle, PlusCircle, ArrowRight, Gift, Clock } from 'lucide-react';
import { CHECKOUT_URL } from '../constants';

const bonuses = [
  {
    icon: <MessageCircle className="w-7 h-7 text-primary" />,
    title: "Scripts de Abordagem Anti-Tímido™",
    desc: "Mensagens prontas para DM, e-mail e abordagem presencial com estrutura: gancho + contexto + valor + CTA. Copie, adapte e envie.",
    value: "R$ 97"
  },
  {
    icon: <FileText className="w-7 h-7 text-primary" />,
    title: "Guia de Serviços para Iniciantes",
    desc: "Lista completa de serviços digitais de alta demanda (landing page, edição, design, copy, social media) com como precificar e apresentar sem portfólio.",
    value: "R$ 67"
  },
  {
    icon: <CheckSquare className="w-7 h-7 text-primary" />,
    title: "Checklist de Eventos e Meetups",
    desc: "Guia passo a passo para antes, durante e após qualquer evento: o que falar, como sair de uma conversa e como fazer follow-up sem parecer chato.",
    value: "R$ 47"
  },
  {
    icon: <DollarSign className="w-7 h-7 text-primary" />,
    title: "Planilha de Preço Estratégico",
    desc: "Calculadora para definir seu primeiro valor de forma justa, saber quando aumentar o preço e como evitar clientes ruins desde o início.",
    value: "R$ 97"
  }
];

const TIMER_KEY = 'bonus_timer_end';
const DURATION = 15 * 60; // 15 minutos em segundos

function useCountdown() {
  const getInitialSeconds = () => {
    try {
      const stored = localStorage.getItem(TIMER_KEY);
      if (stored) {
        const end = parseInt(stored, 10);
        const remaining = Math.floor((end - Date.now()) / 1000);
        if (remaining > 0) return remaining;
      }
    } catch {}
    const end = Date.now() + DURATION * 1000;
    try { localStorage.setItem(TIMER_KEY, end.toString()); } catch {}
    return DURATION;
  };

  const [seconds, setSeconds] = useState(getInitialSeconds);

  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) { clearInterval(interval); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');
  return { mm, ss, expired: seconds <= 0 };
}

function TimerBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-surface-container-highest border border-primary/30 flex items-center justify-center shadow-[0_0_30px_rgba(255,178,183,0.15)]">
          <span className="text-3xl md:text-4xl font-black text-white tracking-tight tabular-nums">{value}</span>
        </div>
        <div className="absolute inset-0 rounded-2xl bg-primary/5 animate-pulse pointer-events-none" />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mt-2">{label}</span>
    </div>
  );
}

export default function Bonus() {
  const { mm, ss, expired } = useCountdown();
  const totalBonusValue = 97 + 67 + 47 + 97; // R$ 308

  return (
    <section className="py-12 md:py-20 bg-surface">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tertiary/10 border border-tertiary/20 mb-6">
            <PlusCircle className="w-4 h-4 text-tertiary" />
            <span className="text-tertiary font-bold tracking-widest uppercase text-xs">Bônus Exclusivos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            E não para{' '}
            <span className="text-primary italic">por aí...</span>
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-medium">
            Além dos 10 módulos, você recebe 4 materiais práticos para aplicar o método imediatamente e eliminar qualquer trava no caminho.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Urgency CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] overflow-hidden border border-primary/25 shadow-[0_0_80px_rgba(255,178,183,0.08)]"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-surface-container via-surface-container-high to-surface-container pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 p-8 md:p-14">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-6">
                <Gift className="w-7 h-7 text-primary" />
              </div>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                Oferta por tempo limitado
              </span>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                Tudo isso de graça{' '}
                <span className="text-gradient italic">se você comprar hoje.</span>
              </h3>
              <p className="text-on-surface-variant text-lg font-medium max-w-2xl">
                Os 4 bônus valem <span className="text-white font-bold">R$ {totalBonusValue}</span>. Ao garantir seu acesso agora, você leva tudo sem pagar nada a mais. Essa oferta expira quando o contador chegar a zero.
              </p>
            </div>

            {/* Timer */}
            <div className="flex flex-col items-center mb-10">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-primary font-bold text-xs uppercase tracking-widest">
                  {expired ? 'Oferta encerrada' : 'Oferta válida por'}
                </span>
              </div>

              {!expired ? (
                <div className="flex items-center gap-4">
                  <TimerBlock value={mm} label="Min" />
                  <span className="text-3xl md:text-4xl font-black text-primary/60 mb-5 animate-pulse">:</span>
                  <TimerBlock value={ss} label="Seg" />
                </div>
              ) : (
                <div className="px-6 py-3 rounded-2xl bg-surface-container-highest border border-white/10">
                  <p className="text-on-surface-variant font-bold text-sm uppercase tracking-widest">Oferta encerrada</p>
                </div>
              )}
            </div>

            {/* Value summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-2xl mx-auto">
              {bonuses.map((b, i) => (
                <div key={i} className="text-center p-4 rounded-2xl bg-surface-container-highest/60 border border-white/5">
                  <p className="text-white/40 line-through text-sm font-bold">{b.value}</p>
                  <p className="text-primary font-black text-lg">GRÁTIS</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center gap-4">
              <a
                href={CHECKOUT_URL}
                className="btn-primary py-5 md:py-6 px-10 md:px-16 text-base md:text-xl shadow-[0_20px_60px_rgba(255,178,183,0.25)] uppercase font-black hover:scale-[1.03] transition-transform"
              >
                Quero os Bônus Grátis Agora <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6" />
              </a>
              <p className="text-on-surface-variant text-xs font-medium">
                Pagamento seguro · Acesso imediato · 7 dias de garantia
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
