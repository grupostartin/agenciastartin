import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowRight, Zap } from 'lucide-react';

const CHECKOUT_URL = "https://pay.cakto.com.br/i39hvnd_852878";
const TIMER_KEY = 'cn_bonus_timer_end';
const DURATION = 15 * 60;

export default function FloatingTimer() {
  const [seconds, setSeconds] = useState<number | null>(null);

  useEffect(() => {
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

    setSeconds(getInitialSeconds());

    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev === null) return null;
        if (prev <= 1) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (seconds === null || seconds <= 0) return null;

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-[150] bg-surface-container-high border-b border-primary/20 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 py-2 md:py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:flex w-10 h-10 rounded-full bg-primary/10 items-center justify-center border border-primary/20">
            <Zap className="w-5 h-5 text-primary animate-pulse" />
          </div>
          <div>
            <p className="text-white font-black text-[10px] md:text-xs uppercase tracking-widest leading-none mb-1">
              Oferta Especial por Tempo Limitado
            </p>
            <div className="flex items-center gap-2 text-primary font-black text-sm md:text-lg tabular-nums">
              <Clock className="w-4 h-4" />
              <span>{mm}:{ss}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden sm:block text-right">
            <p className="text-on-surface-variant text-[10px] uppercase font-bold tracking-tighter line-through">De R$ 1.494,00</p>
            <p className="text-white font-black text-sm md:text-base">Por R$ 97,00</p>
          </div>
          <a
            href={CHECKOUT_URL}
            className="bg-primary text-primary-container px-4 md:px-8 py-2 md:py-3 rounded-full font-black text-[10px] md:text-sm uppercase tracking-wider flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,178,183,0.3)] shrink-0"
          >
            Garantir Meu Acesso <ArrowRight className="w-4 h-4 hidden md:block" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
