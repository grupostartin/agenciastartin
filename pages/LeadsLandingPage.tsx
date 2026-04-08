import React, { useState } from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { FadeIn } from '../components/ui/FadeIn';
import { supabase } from '../lib/supabase';
import { CheckCircle2, Rocket, Layout, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import NeuralBackground from '../components/ui/flow-field-background';

export const LeadsLandingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    businessType: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            whatsapp: formData.whatsapp,
            business_type: formData.businessType,
            interest: 'landing_page',
            source: 'facebook_ads',
          },
        ]);

      if (supabaseError) throw supabaseError;

      setSubmitted(true);
      // Track event if gtag is available
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          'event_category': 'engagement',
          'event_label': 'leads_landing_page'
        });
      }
    } catch (err: any) {
      console.error('Error saving lead:', err);
      setError('Ocorreu um erro ao enviar seus dados. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <FadeIn className="max-w-md w-full text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center">
              <CheckCircle2 size={40} />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Solicitação Enviada!</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Recebemos seu interesse. Nossa equipe entrará em contato via WhatsApp em breve para discutir sua nova Landing Page.
          </p>
          <Button to="/" variant="primary">Voltar para Início</Button>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero with Background */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <NeuralBackground
            color="#FFFFFF"
            speed={0.5}
            particleCount={200}
            trailOpacity={0.1}
            className="w-full h-full"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest mb-6">
                  <Rocket size={14} className="text-white" />
                  <span>Alta Performance Digital</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-6">
                  Transforme cliques em <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">clientes reais</span>.
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl font-light leading-relaxed">
                  Não adianta investir em tráfego se a sua página não vende. Criamos Landing Pages de alta conversão com design premium focado em resultados imediatos.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-white mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-300">Design exclusivo e responsivo (Mobile First)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-white mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-300">Copywriting focado em gatilhos mentais</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-white mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-300">Carregamento ultra-rápido para evitar perdas</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="relative">
              <FadeIn delay={200} direction="up">
                <div className="bg-[#0A0A0A] border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  <h2 className="text-2xl font-bold mb-2">Solicitar Orçamento</h2>
                  <p className="text-gray-400 mb-8 text-sm">Preencha os dados abaixo e entramos em contato hoje mesmo.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">
                        Seu Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Ex: João Silva"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="whatsapp" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">
                        WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        required
                        placeholder="Ex: (31) 99999-9999"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                        value={formData.whatsapp}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="businessType" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">
                        Seu Negócio / Segmento
                      </label>
                      <input
                        type="text"
                        id="businessType"
                        name="businessType"
                        placeholder="Ex: Clínica, Advocacia, Loja Online"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                        value={formData.businessType}
                        onChange={handleChange}
                      />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                    >
                      {loading ? 'Enviando...' : 'Quero minha Landing Page'}
                      {!loading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                    </button>
                    
                    <p className="text-[10px] text-gray-600 text-center uppercase tracking-widest flex items-center justify-center gap-2">
                      <ShieldCheck size={12} /> Seus dados estão seguros conosco
                    </p>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <Section bg="gray">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn delay={100} className="text-center p-8 bg-black/50 border border-white/5 rounded-2xl">
            <Zap className="mx-auto mb-4 text-white" size={32} />
            <div className="text-4xl font-bold mb-2">+40%</div>
            <p className="text-gray-400 text-sm uppercase tracking-widest">Aumento médio em conversão</p>
          </FadeIn>
          <FadeIn delay={200} className="text-center p-8 bg-black/50 border border-white/5 rounded-2xl">
            <Layout className="mx-auto mb-4 text-white" size={32} />
            <div className="text-4xl font-bold mb-2">100%</div>
            <p className="text-gray-400 text-sm uppercase tracking-widest">Projetos Mobile-First</p>
          </FadeIn>
          <FadeIn delay={300} className="text-center p-8 bg-black/50 border border-white/5 rounded-2xl">
            <Rocket className="mx-auto mb-4 text-white" size={32} />
            <div className="text-4xl font-bold mb-2">07 Dias</div>
            <p className="text-gray-400 text-sm uppercase tracking-widest">Prazo médio de entrega</p>
          </FadeIn>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Pare de queimar dinheiro com anúncios ruins.</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Uma página profissional é o que separa um curioso de um cliente pagante. Vamos construir sua máquina de vendas?
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-10 py-4 border border-white text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all"
          >
            Começar Agora
          </button>
        </FadeIn>
      </section>
    </div>
  );
};
