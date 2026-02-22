import React from 'react';
import { Section } from '../components/ui/Section';
import { FadeIn } from '../components/ui/FadeIn';
import { Button } from '../components/ui/Button';
import { MessageCircle, Zap, Heart, Shield, Star } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Sobre a Startin</h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              Nascemos em Belo Horizonte com um propósito claro: simplificar o marketing digital e focar no que realmente importa: resultados reais e conexões humanas.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="aspect-[21/9] bg-brand-gray rounded-2xl mb-12 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                alt="Equipe Startin em colaboração"
                className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
          </FadeIn>

          {/* Nosso Diferencial em Destaque */}
          <FadeIn delay={200} className="mb-20">
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-colors">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <Star className="w-5 h-5 text-white fill-white" />
                  <span className="text-sm font-bold uppercase tracking-widest text-white/50">Nosso Grande Diferencial</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Comunicação Leve e Descontraída</h2>
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
                  Acreditamos que os melhores resultados surgem de parcerias reais. Na Startin, fugimos do "corporatês" engessado para oferecer uma <span className="text-white font-bold underline decoration-white/30 underline-offset-4">experiência transparente, ágil e, acima de tudo, humana.</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-white" />
                    <span className="text-sm font-medium">Sem burocracia</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                    <Zap className="w-6 h-6 text-white" />
                    <span className="text-sm font-medium">Diálogo Ágil</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                    <Heart className="w-6 h-6 text-white" />
                    <span className="text-sm font-medium">Parceria Real</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <FadeIn delay={300}>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-white/80" />
                <h3 className="text-2xl font-bold">Nossa Missão</h3>
              </div>
              <p className="text-gray-400">
                Democratizar o acesso a estratégias de marketing digital de alta performance para pequenas e médias empresas,
                entregando qualidade visual e inteligência de dados com um atendimento próximo e sem complicação.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-white/80" />
                <h3 className="text-2xl font-bold">Nossa Visão</h3>
              </div>
              <p className="text-gray-400">
                Ser referência em produção audiovisual mobile e estratégias de conversão em Minas Gerais,
                reconhecida pela leveza no processo e excelência nos resultados.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={500} className="bg-white/5 border border-white/10 p-12 rounded-3xl text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <h3 className="text-3xl font-bold mb-4 relative z-10">Quer uma parceria sem frescura?</h3>
            <p className="mb-8 text-gray-400 max-w-xl mx-auto text-lg relative z-10">
              Nossa equipe está pronta para entender seu desafio com a leveza que você merece e a técnica que seu negócio precisa para escalar.
            </p>
            <div className="relative z-10">
              <Button to="/contact" variant="primary" className="px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 inline-flex items-center gap-2">
                Bora conversar! <MessageCircle size={20} />
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};
