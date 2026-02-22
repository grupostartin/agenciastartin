import React from 'react';
import { Section } from '../components/ui/Section';
import { FadeIn } from '../components/ui/FadeIn';

export const Privacy: React.FC = () => {
    return (
        <div className="pt-20">
            <Section>
                <div className="max-w-3xl mx-auto prose prose-invert">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-bold mb-8">Política de Privacidade</h1>
                        <p className="text-gray-400 mb-8">
                            Última atualização: 11 de fevereiro de 2026
                        </p>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 text-white">1. Introdução</h2>
                            <p className="text-gray-400 leading-relaxed">
                                A Agência Startin valoriza a sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações ao utilizar nosso site e serviços. Ao acessar nossa plataforma, você concorda com as práticas descritas aqui.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 text-white">2. Coleta de Informações</h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Coletamos informações que você nos fornece diretamente, como:
                            </p>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                                <li>Nome completo</li>
                                <li>E-mail corporativo</li>
                                <li>Número de telefone/WhatsApp</li>
                                <li>Nome da empresa</li>
                                <li>Detalhes do serviço de interesse</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 text-white">3. Uso dos Dados</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Suas informações são utilizadas exclusivamente para:
                            </p>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                                <li>Responder às suas solicitações de orçamento e contato.</li>
                                <li>Enviar informações relevantes sobre nossos serviços.</li>
                                <li>Melhorar a experiência do usuário em nosso site.</li>
                                <li>Cumprir obrigações legais.</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 text-white">4. Proteção de Dados</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Implementamos medidas de segurança técnicas e administrativas para proteger seus dados contra acessos não autorizados, perda ou alteração. Seus dados são armazenados de forma segura e acessados apenas por pessoal autorizado.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 text-white">5. Compartilhamento com Terceiros</h2>
                            <p className="text-gray-400 leading-relaxed">
                                A Agência Startin não vende ou aluga seus dados pessoais para terceiros. Podemos compartilhar informações apenas com parceiros de confiança que nos auxiliam na operação do site e na prestação de serviços, desde que estes concordem em manter a confidencialidade.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 text-white">6. Seus Direitos</h2>
                            <p className="text-gray-400 leading-relaxed">
                                De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento. Para isso, entre em contato conosco através do e-mail <strong>contatostartin@gmail.com</strong>.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 text-white">7. Contato</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail: <br />
                                <span className="text-white">contatostartin@gmail.com</span>
                            </p>
                        </section>
                    </FadeIn>
                </div>
            </Section>
        </div>
    );
};
