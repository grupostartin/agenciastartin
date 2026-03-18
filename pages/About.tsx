import React from 'react';
import { Section } from '../components/ui/Section';
import { FadeIn } from '../components/ui/FadeIn';
import { Button } from '../components/ui/Button';
import { MessageCircle, Zap, Star, Users, Camera, Layout, TrendingUp } from 'lucide-react';
import { SectionCTA } from '../components/ui/SectionCTA';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="pb-12 text-center">
        <FadeIn>
          <span className="inline-block py-1 px-3 bg-white/10 rounded-full text-[10px] md:text-sm font-medium text-white mb-6 border border-white/10 uppercase tracking-widest">
            Nossa Jornada
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            Muito além do <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Blablabla</span>.
          </h1>
        </FadeIn>
      </Section>

      {/* Founder & History Section */}
      <Section className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-white/10 to-transparent blur-2xl opacity-50" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 group select-none bg-white/5">
                <img
                  src="/pedroceo.jpg"
                  alt="Pedro Augusto - Fundador da Startin"
                  className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100 pointer-events-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                {/* Transparent overlay for extra protection */}
                <div className="absolute inset-0 z-20" onContextMenu={(e) => e.preventDefault()} />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent z-30">
                  <p className="text-white font-bold text-xl">Pedro Augusto</p>
                  <p className="text-white/60 text-sm uppercase tracking-widest">Founder & Lead Strategist</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Como tudo começou</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                A Startin nasceu em 2025 pelas mãos de <span className="text-white font-medium">Pedro Augusto</span>, um belo-horizontino de 23 anos apaixonado pelo mundo digital e, acima de tudo, por uma boa conversa.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Nosso objetivo sempre foi claro: deixar o blablabla de lado. Acreditamos que a verdadeira conexão nasce de conversas leves, aquelas que realmente aproximam a agência do cliente e criam laços de confiança.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                  <div className="text-2xl font-bold mb-1">2025</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Ano de Fundação</div>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                  <div className="text-2xl font-bold mb-1">BH</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Nossa Raiz</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        <SectionCTA 
          title="Quer bater um papo com o Pedro?" 
          buttonText="Chamar no WhatsApp" 
          to="/contact" 
          variant="secondary"
        />
      </Section>

      {/* Expertise Timeline */}
      <Section bg="gray">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-tighter italic italic-bold">Evolução Constante</h2>
            <div className="h-1 w-20 bg-white mx-auto mb-6" />
            <p className="text-gray-400">De fotógrafo a especialista em conversão digital.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Camera />, title: "Início aos 17 anos", desc: "Começou no mundo das lentes como fotógrafo, apurando o olhar estético." },
              { icon: <Layout />, title: "Design & Vídeo", desc: "Passou por design e videomaker mobile, dominando o ritmo dos criativos." },
              { icon: <Zap />, title: "Landing Pages", desc: "Especializou-se em sites focados 100% em conversão e performance." },
              { icon: <TrendingUp />, title: "IA & Tráfego", desc: "Hoje utiliza Inteligência Artificial e Gestão de Tráfego para escalar negócios." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100} className="p-8 bg-black border border-white/5 rounded-2xl flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl text-white">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <SectionCTA 
          title="Pronto para transformar sua performance?" 
          buttonText="Bora conversar" 
          to="/contact" 
          variant="primary"
        />
      </Section>

      {/* Philosophy Section */}
      <Section>
        <div className="bg-white text-black p-12 md:p-20 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <FadeIn className="relative z-10 text-center max-w-3xl mx-auto">
            <Star className="w-12 h-12 mb-8 mx-auto fill-black" />
            <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tighter uppercase italic leading-none">
              Não focamos em preço, entregamos <span className="underline decoration-black/20">VALOR</span>.
            </h2>
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 opacity-80">
              Nosso maior prêmio é quando, no mês seguinte, o cliente olha os resultados e diz: <br/>
              <span className="text-3xl md:text-5xl font-black block mt-4 tracking-tighter">"WOW, você merece milhões!"</span>
            </p>
            <p className="text-lg opacity-60">
              Buscamos um valor que caiba no seu bolso, mas com uma entrega que supere todas as suas expectativas.
            </p>
            <div className="mt-12 flex justify-center">
              <Button to="/contact" variant="primary" className="bg-brand-black text-white hover:bg-brand-black/90 !rounded-full px-12 py-4">
                Quero esse valor no meu negócio
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Team Growth */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6">Crescimento & Parceria</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Fomos crescendo gradualmente e hoje a Startin conta com uma equipe dedicada, incluindo um sócio estratégico e nosso elenco exclusivo de criadores UGC.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Mantemos o bom convívio e o relacionamento humano como pilares, garantindo que o processo seja tão gratificante quanto o resultado final.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center border border-white/10">
              <Users size={32} className="mb-4" />
              <div className="font-bold text-xl leading-none">Equipe</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-2">Em Expansão</div>
            </div>
            <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center border border-white/10">
              <Zap size={32} className="mb-4" />
              <div className="font-bold text-xl leading-none">UGC's</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-2">Curadoria Ativa</div>
            </div>
          </div>
        </div>
        <SectionCTA 
          title="Faça parte do nosso sucesso." 
          buttonText="Solicitar Proposta" 
          to="/contact" 
          variant="secondary"
        />
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <FadeIn>
          <h3 className="text-3xl font-bold mb-8 uppercase tracking-tighter italic">Bora conversar de verdade?</h3>
          <Button to="/contact" variant="primary" className="px-12 py-5 text-lg">
            Solicitar Proposta Analítica
          </Button>
        </FadeIn>
      </Section>
    </div>
  );
};
