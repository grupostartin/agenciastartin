import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Section } from '../components/UI/Section';
import { FadeIn } from '../components/UI/FadeIn';
import { Button } from '../components/UI/Button';
import { ContactFormData, ContactServiceType } from '../types';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const location = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    consent: false
  });

  useEffect(() => {
    // Pre-fill service if passed via URL param
    const searchParams = new URLSearchParams(location.search);
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      // Simple mapping attempt, fallback to empty if not exact match
      const found = Object.values(ContactServiceType).find(v => serviceParam.includes(v));
      if (found) setFormData(prev => ({ ...prev, service: found }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, consent: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const searchParams = new URLSearchParams(location.search);
    const creatorParam = searchParams.get('creator');

    // Construct the WhatsApp message
    const message = `*Nova Solicitação de Orçamento - Agência Startin*
--------------------------------------------
*Nome:* ${formData.name}
*Empresa:* ${formData.company || 'Não informado'}
*Email:* ${formData.email}
*WhatsApp:* ${formData.phone}
*Serviço:* ${formData.service}${creatorParam ? `\n*Criador Selecionado:* ${creatorParam}` : ''}
*Mensagem:* ${formData.message || 'Sem mensagem adicional'}
--------------------------------------------
_Enviado via site agenciastartin.com_`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5531982781618?text=${encodedMessage}`;

    // Show loading state
    const btn = document.getElementById('submit-btn') as HTMLButtonElement;
    if (btn) btn.innerHTML = 'Redirecionando...';

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Show success state in the UI
    setTimeout(() => {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <FadeIn className="text-center p-8 max-w-md">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Mensagem Enviada!</h2>
          <p className="text-gray-400 mb-8">
            Obrigado pelo interesse. Nossa equipe entrará em contato com você em breve pelo WhatsApp ou Email informado.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="secondary">
            Voltar ao site
          </Button>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <Section>
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Info Side */}
          <div className="lg:w-1/3">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Vamos Conversar?</h1>
              <p className="text-gray-400 mb-12 text-lg">
                Preencha o formulário ao lado e um de nossos especialistas entrará em contato para entender o seu momento.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-gray rounded-lg border border-white/10">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp / Telefone</h4>
                    <p className="text-gray-400">+55 (31) 98278-1618</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-gray rounded-lg border border-white/10">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-400">contatostartin@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-gray rounded-lg border border-white/10">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Localização</h4>
                    <p className="text-gray-400">Belo Horizonte, MG</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <FadeIn delay={200}>
              <form onSubmit={handleSubmit} className="bg-brand-gray p-8 md:p-10 rounded-2xl border border-white/5 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Nome Completo *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-white focus:outline-none transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-300">Empresa</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-white focus:outline-none transition-colors"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Corporativo *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-white focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-300">WhatsApp *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-white focus:outline-none transition-colors"
                      placeholder="(31) 98278-1618"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-gray-300">Serviço de Interesse *</label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-white focus:outline-none transition-colors appearance-none"
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    {Object.values(ContactServiceType).map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Mensagem (Opcional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-white focus:outline-none transition-colors resize-none"
                    placeholder="Conte um pouco mais sobre seu projeto..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleCheckboxChange}
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-black focus:ring-white bg-black"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-400">
                    Concordo em fornecer meus dados para contato comercial, de acordo com as políticas de privacidade.
                  </label>
                </div>

                <Button id="submit-btn" type="submit" fullWidth disabled={!formData.consent}>
                  Enviar Solicitação
                </Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </Section>
    </div>
  );
};