import React from 'react';
import { Section } from '../components/ui/Section';
import { FadeIn } from '../components/ui/FadeIn';

export const Terms: React.FC = () => {
    return (
        <div className="pt-20">
            <Section>
                <div className="max-w-3xl mx-auto prose prose-invert">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-bold mb-8">Termos de Uso</h1>
                        <p className="text-gray-400 mb-8">
                            Última atualização: 11 de fevereiro de 2026
                        </p>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 text-white">1. Propriedade Intelectual</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Todo o conteúdo deste site, incluindo textos, logotipos, designs, vídeos e códigos, é de propriedade exclusiva da Agência Startin ou de seus licenciadores e está protegido por leis de direitos autorais. A reprodução não autorizada é proibida.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 text-white">2. Uso do Site</h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Ao utilizar este site, você se compromete a:
                            </p>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                                <li>Não utilizar o conteúdo para fins ilegais.</li>
                                <li>Fornecer informações verdadeiras e precisas em nossos formulários.</li>
                                <li>Não realizar ações que possam comprometer a segurança da plataforma.</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 text-white">3. Prestação de Serviços</h2>
                            <p className="text-gray-400 leading-relaxed">
                                As informações contidas no site sobre serviços e portfólio são ilustrativas. Cada projeto realizado pela Agência Startin é regido por um contrato específico que detalha escopo, prazos e responsabilidades.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 text-white">4. Limitação de Responsabilidade</h2>
                            <p className="text-gray-400 leading-relaxed">
                                A Agência Startin busca manter as informações do site sempre atualizadas, mas não se responsabiliza por eventuais erros técnicos ou interrupções temporárias de acesso.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 text-white">5. Links para Terceiros</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Nosso site pode conter links para sites externos (como redes sociais). Não temos controle sobre o conteúdo ou as políticas de privacidade desses sites de terceiros.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 text-white">6. Alterações nos Termos</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Reservamo-nos o direito de atualizar estes Termos de Uso a qualquer momento. Recomendamos a revisão periódica desta página para estar ciente de eventuais mudanças.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 text-white">7. Lei Aplicável</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida no foro da comarca de Belo Horizonte, MG.
                            </p>
                        </section>
                    </FadeIn>
                </div>
            </Section>
        </div>
    );
};
