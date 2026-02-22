import React from 'react';
import { Section } from '../components/ui/Section';
import { FadeIn } from '../components/ui/FadeIn';
import { SERVICES } from '../constants';
import { Button } from '../components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <Section>
        <div className="text-center mb-16">
          <FadeIn>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">Nossos Serviços</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Soluções integradas de marketing digital para alavancar seu negócio em todas as frentes.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 100}>
              <div className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <div className="bg-brand-gray p-8 md:p-12 rounded-2xl border border-white/5 h-full flex items-center justify-center aspect-video md:aspect-auto min-h-[300px]">
                    <div className="transform scale-150 text-white/20">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <div className="w-12 h-12 bg-white text-black rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>

                  <div className="space-y-3 pt-4">
                    <h4 className="font-semibold text-white">O que entregamos:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-400">
                          <CheckCircle2 size={16} className="mr-2 text-white shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 flex flex-wrap gap-4">
                    <Button to={`/contact?service=${service.title}`} variant="secondary">
                      Tenho interesse
                    </Button>
                    {service.id === 'ugc' && (
                      <Button to="/ugc" variant="outline" className="border-white/20 text-white hover:bg-white/5">
                        Ver Portfólio de Criadores
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
};
