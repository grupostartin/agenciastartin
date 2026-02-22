import React from 'react';
import { Section } from '../components/ui/Section';
import { FadeIn } from '../components/ui/FadeIn';
import { Button } from '../components/ui/Button';
import { UGC_CREATORS } from '../constants';
import { CheckCircle2, TrendingUp, ShieldCheck, Users, Instagram, Music2 } from 'lucide-react';
import { Carousel, TestimonialCard } from '../components/ui/retro-testimonial';

export const UGCPage: React.FC = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-24 px-6 md:px-12 bg-black overflow-hidden border-b border-white/5">
                {/* Video Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover scale-125 translate-x-32 translate-y-16"
                    >
                        <source src="/Create_a_cinematic_1080p_202602221234.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                </div>

                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <FadeIn>
                            <span className="inline-block py-1 px-3 bg-white/10 rounded-full text-sm font-medium text-white mb-6 border border-white/10">
                                Talent Management & UGC Strategy
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                                Conteúdo que <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Gera Vendas</span>.
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
                                Conectamos sua marca aos melhores criadores de conteúdo do mercado.
                                Produção autêntica, humana e focada em resultados reais para o seu negócio.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button to="/contact?service=UGC" variant="primary">
                                    Solicitar Orçamento
                                </Button>
                                <Button
                                    onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                                    variant="secondary"
                                >
                                    Ver Nosso Elenco
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Importance Section */}
            <Section id="importance" bg="gray">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <ShieldCheck className="w-8 h-8" />,
                            title: "Autoridade",
                            description: "UGC constrói uma camada de confiança que anúncios tradicionais não conseguem alcançar."
                        },
                        {
                            icon: <TrendingUp className="w-8 h-8" />,
                            title: "Performance",
                            description: "Vídeos nativos e autênticos costumam ter um custo por clique (CPC) muito menor."
                        },
                        {
                            icon: <Users className="w-8 h-8" />,
                            title: "Humanização",
                            description: "Sua marca deixa de ser um logotipo e passa a ser uma conversa entre pessoas."
                        }
                    ].map((item, idx) => (
                        <FadeIn key={idx} delay={idx * 150}>
                            <div className="p-8 bg-black rounded-xl border border-white/5">
                                <div className="text-white mb-6 bg-white/5 w-14 h-14 flex items-center justify-center rounded-lg">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            {/* Creators Portfolio */}
            <Section id="portfolio">
                <div className="mb-16">
                    <FadeIn>
                        <h2 className="text-4xl font-bold mb-4">Nosso Elenco</h2>
                        <div className="h-1 w-20 bg-white" />
                    </FadeIn>
                </div>

                <div className="mt-10">
                    <Carousel
                        items={UGC_CREATORS.map((creator, idx) => (
                            <TestimonialCard
                                key={creator.id}
                                index={idx}
                                testimonial={{
                                    name: creator.name,
                                    designation: creator.specialties.join(' • '),
                                    description: creator.bio,
                                    profileImage: creator.imageUrl
                                }}
                                backgroundImage="https://images.unsplash.com/photo-1528458965990-428de4b1cb0d?q=80&w=3129&auto=format&fit=crop"
                            />
                        ))}
                    />
                </div>
            </Section>

            {/* Metrics Section */}
            <Section bg="gray">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold mb-8">Por que nos escolher?</h2>
                        <ul className="space-y-6">
                            {[
                                "Curadoria rigorosa de criadores",
                                "Gestão completa de direitos de uso",
                                "Roteirização estratégica focada em retenção",
                                "Acompanhamento de métricas e ROI"
                            ].map((text, i) => (
                                <li key={i} className="flex items-center gap-4 text-gray-400">
                                    <CheckCircle2 size={20} className="text-white shrink-0" />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>
                    <FadeIn delay={200} className="bg-white/5 p-12 rounded-3xl border border-white/10 text-center">
                        <div className="text-6xl font-bold mb-4">+400%</div>
                        <div className="text-xl text-gray-400 uppercase tracking-widest font-semibold">ROI Médio em Ads</div>
                    </FadeIn>
                </div>
            </Section>

            {/* CTA */}
            <Section className="text-center py-20">
                <FadeIn>
                    <h2 className="text-4xl font-bold mb-8 uppercase tracking-tighter italic">Vamos elevar o nível?</h2>
                    <Button to="/contact?service=UGC" variant="primary" className="text-lg px-12 py-4">
                        Falar com Especialista
                    </Button>
                </FadeIn>
            </Section>
        </div>
    );
};
