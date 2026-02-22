import React from 'react';
import { Section } from '../components/UI/Section';
import { FadeIn } from '../components/UI/FadeIn';
import { Button } from '../components/UI/Button';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Sobre a Startin</h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              Nascemos em Belo Horizonte com um propósito claro: simplificar o marketing digital e focar no que realmente importa: resultados.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="aspect-[21/9] bg-brand-gray rounded-2xl mb-12 overflow-hidden relative">
               <img 
                 src="https://picsum.photos/1200/500?grayscale" 
                 alt="Equipe Startin" 
                 className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
               />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <FadeIn delay={200}>
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-gray-400">
                Democratizar o acesso a estratégias de marketing digital de alta performance para pequenas e médias empresas, 
                entregando qualidade visual e inteligência de dados.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
              <p className="text-gray-400">
                Ser referência em produção audiovisual mobile e estratégias de conversão em Minas Gerais, 
                reconhecida pela agilidade e transparência.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={400} className="bg-white text-black p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-bold mb-4">Vamos crescer juntos?</h3>
            <p className="mb-8 text-gray-600 max-w-xl mx-auto">
              Nossa equipe está pronta para entender seu desafio e propor a melhor solução.
            </p>
            <Button to="/contact" className="bg-black text-white hover:bg-gray-800">
              Falar com Especialista
            </Button>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};