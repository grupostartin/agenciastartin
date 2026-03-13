import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { FadeIn } from '../components/ui/FadeIn';
import { SERVICES, PROCESS_STEPS, CASE_STUDIES, TESTIMONIALS } from '../constants';
import { Link } from 'react-router-dom';
import NeuralBackground from '../components/ui/flow-field-background';

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 md:px-12 bg-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <NeuralBackground
            color="#444444"
            speed={0.8}
            particleCount={400}
            trailOpacity={0.2}
            className="w-full h-full"
          />
          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-3xl">
            <FadeIn delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Onde o olhar do seu cliente pousa, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">a gente converte</span>.
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl font-light">
                Sua empresa é um motor potente que não pode mais girar em falso. Criamos o ecossistema completo onde o conteúdo viral encontra a estrutura de vendas de alta performance. O resultado? Escala sem teto.
              </p>
            </FadeIn>
            <FadeIn delay={300} className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="primary">
                Solicitar Orçamento
              </Button>
              <Button to="/cases" variant="secondary">
                Ver Cases
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section id="services" bg="gray">
        <div className="mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Soluções</h2>
            <div className="h-1 w-20 bg-white" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 100}>
              <div className="group h-full p-6 sm:p-8 bg-black border border-white/5 hover:border-white/20 transition-all duration-300 rounded-xl">
                <div className="mb-6 text-white bg-white/10 p-4 rounded-lg inline-block group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <CheckCircle2 size={16} className="mr-2 text-white" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center text-sm font-semibold border-b border-white pb-1 group-hover:text-gray-300 group-hover:border-gray-300 transition-colors">
                  Saiba mais <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section id="process">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 md:sticky md:top-32">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Como Trabalhamos</h2>
              <p className="text-gray-400 text-lg">
                Um processo estruturado para garantir previsibilidade e excelência em cada entrega.
              </p>
            </FadeIn>
          </div>
          <div className="md:w-2/3 space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <FadeIn key={step.id} delay={index * 100} direction="up" className="flex gap-6 border-b border-white/10 pb-12 last:border-0">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xl font-bold">
                  {step.id}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Cases Preview */}
      <Section bg="gray">
        <div className="flex justify-between items-end mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cases de Sucesso</h2>
            <div className="h-1 w-20 bg-white" />
          </FadeIn>
          <FadeIn delay={100} className="hidden md:block">
            <Link to="/cases" className="text-white border-b border-white/30 hover:border-white pb-1 transition-all">Ver todos os cases</Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.slice(0, 3).map((study, index) => (
            <FadeIn key={study.id} delay={index * 100}>
              <div className="group h-full flex flex-col bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-all p-6 sm:p-10 rounded-3xl md:rounded-[2rem]">
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">{study.category}</span>
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:translate-x-1 transition-transform">{study.client}</h3>
                <p className="text-gray-500 text-sm mb-10 flex-grow font-light leading-relaxed">{study.description}</p>
                
                <div className="space-y-4">
                  {study.metrics.slice(0, 1).map((metric, idx) => (
                    <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/5">
                      <div className="text-4xl font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Button to="/cases" variant="secondary" fullWidth>Ver todos os cases</Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="text-center py-32">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Pronto para escalar seu negócio?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Agende uma conversa com nossos especialistas e descubra como podemos ajudar.
          </p>
          <Button to="/contact" variant="primary" className="text-lg px-10 py-4">
            Iniciar Meu Projeto
          </Button>
        </FadeIn>
      </Section>
    </>
  );
};
