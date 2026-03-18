import React, { useState } from 'react';
import { Section } from '../components/ui/Section';
import { FadeIn } from '../components/ui/FadeIn';
import { CASE_STUDIES } from '../constants';
import { Button } from '../components/ui/Button';
import { TrendingUp, Users, MousePointer2, Calendar, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';
import { SectionCTA } from '../components/ui/SectionCTA';

export const Cases: React.FC = () => {
  const getIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('faturamento')) return <TrendingUp className="w-5 h-5 text-white" />;
    if (l.includes('agendamento')) return <Calendar className="w-5 h-5 text-white" />;
    if (l.includes('clique')) return <MousePointer2 className="w-5 h-5 text-white" />;
    if (l.includes('período')) return <Zap className="w-5 h-5 text-white" />;
    if (l.includes('site')) return <ShieldCheck className="w-5 h-5 text-white" />;
    return <Users className="w-5 h-5 text-white" />;
  };

  return (
    <div className="pt-20 bg-black min-h-screen">
      <Section>
        <div className="text-center mb-24 relative">
          <FadeIn>
            <div className="inline-block px-4 py-1.5 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Resultados Reais</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-8 tracking-tighter">
              Nossos <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Cases</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              Transformamos investimentos em escala através de estratégia e tecnologia.
            </p>
          </FadeIn>
        </div>

        {/* Stack - Vertical Layout */}
        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {CASE_STUDIES.map((study, index) => (
            <FadeIn key={study.id} delay={index * 100}>
              <div className="group relative bg-gradient-to-br from-[#111] to-black rounded-3xl md:rounded-[3rem] p-6 sm:p-8 md:p-12 border border-white/10 hover:border-white/30 transition-all duration-700 overflow-hidden">
                
                {/* Decorative glow */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/5 blur-[100px] group-hover:bg-white/10 transition-colors duration-700" />
                
                <div className="relative z-10 flex flex-col lg:flex-row gap-8 md:gap-12">
                  {/* Content Area */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-6 md:mb-8">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white bg-white/10 px-5 py-2.5 rounded-full font-bold">
                        {study.category}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-tight">
                      {study.client}
                    </h3>
                    
                    <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl font-light">
                      {study.description}
                    </p>

                    <div className="flex gap-4 flex-wrap">
                      {study.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold border border-white/5 px-3 py-1 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics Area - Horizontal on Wide, Vertical on Mobile */}
                  <div className="flex-1 flex flex-col gap-4 justify-center">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="relative overflow-hidden bg-white/[0.03] rounded-[2rem] p-6 border border-white/5 group-hover:bg-white/[0.06] transition-all duration-500">
                        <div className="flex justify-between items-center gap-6">
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white">
                              {getIcon(metric.label)}
                            </div>
                            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-tight">{metric.label}</span>
                          </div>
                          <div className="text-3xl md:text-4xl font-bold text-white tabular-nums tracking-tighter">
                            {metric.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <SectionCTA 
          title="Impressionado com os resultados?" 
          buttonText="Agendar minha mentoria" 
          to="/contact" 
          variant="secondary"
        />

        {/* Premium CTA */}
        <FadeIn delay={300} className="mt-32">
          <div className="relative p-1 bg-gradient-to-r from-white/20 via-white/5 to-white/20 rounded-[3rem]">
            <div className="bg-black rounded-3xl md:rounded-[2.9rem] p-8 sm:p-12 md:p-24 text-center relative overflow-hidden">
               {/* Lights */}
              <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              
              <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-white">
                Sua marca pode ser a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/80">próxima a escalar.</span>
              </h3>
              
              <p className="text-gray-500 mb-12 text-lg max-w-xl mx-auto font-light italic">
                "Não vendemos apenas serviços, entregamos os números que o seu negócio precisa para dominar o mercado."
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button to="/contact" variant="primary" className="!px-12 !py-5 text-base shadow-[0_20px_50px_rgba(255,255,255,0.15)] hover:scale-105 transition-transform">
                  Agendar Consultoria Estratégica
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
};
