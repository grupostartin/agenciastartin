import React from 'react';
import { Button } from './Button';
import { FadeIn } from './FadeIn';
import { ArrowRight } from 'lucide-react';

interface SectionCTAProps {
  title?: string;
  buttonText?: string;
  to?: string;
  delay?: number;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const SectionCTA: React.FC<SectionCTAProps> = ({
  title = "Gostou do que viu?",
  buttonText = "Fale Conosco",
  to = "/contact",
  delay = 300,
  variant = "primary",
  className = ""
}) => {
  return (
    <FadeIn delay={delay} className={`mt-12 md:mt-16 ${className}`}>
      <div className="flex flex-col sm:flex-row items-center justify-between p-6 md:p-10 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl gap-6 hover:bg-white/10 transition-all duration-300">
        <h4 className="text-xl md:text-2xl font-bold text-white text-center sm:text-left tracking-tight">{title}</h4>
        <Button to={to} variant={variant} className="group whitespace-nowrap">
          {buttonText} <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </FadeIn>
  );
};
