import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CHECKOUT_URL = "https://pay.cakto.com.br/i39hvnd_852878";

const benefits = [
  "Inicie conversas estratégicas com qualquer pessoa, no DM, por e-mail ou pessoalmente, usando a estrutura: gancho, contexto, valor e CTA.",
  "Use sua timidez como superpoder: escuta ativa, profundidade e atenção aos detalhes são vantagens que extrovertidos raramente têm.",
  "Construa uma rede de relacionamentos que gera indicações, parcerias e clientes. Seu maior ativo profissional.",
  "Aprenda a cobrar seus serviços sem se desvalorizar e sem travar na hora de passar preço, mesmo sendo iniciante.",
  "Feche clientes usando persuasão ética: autoridade, prova social, empatia e scripts práticos de negociação.",
  "Transforme conversas informais em propostas reais usando o método de nutrição de conexões contínua.",
  "Acesse oportunidades que nunca aparecem em vagas ou posts. Elas só chegam por conexão.",
  "Defina serviços de alta demanda para oferecer (landing page, edição, design, copy, social media) sem precisar de um grande portfólio."
];

export default function Benefits() {
  return (
    <section className="py-12 md:py-20 bg-surface">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="label-md text-tertiary mb-6 block font-bold tracking-[0.2em] uppercase text-xs">A Transformação</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              O que você vai{' '}
              <span className="text-primary italic">conquistar.</span>
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6 font-medium">
              Não é sobre virar outra pessoa. É sobre usar quem você já é de forma mais estratégica e construir conexões que abrem portas, geram renda e duram anos.
            </p>

            <div className="hidden lg:block">
              <a href={CHECKOUT_URL} className="btn-primary">
                Garantir Minha Vaga <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-5 p-6 rounded-2xl bg-surface-container-low border border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-on-surface font-medium leading-relaxed">{benefit}</p>
              </motion.div>
            ))}

            <div className="lg:hidden mt-10">
              <a href={CHECKOUT_URL} className="btn-primary w-full">
                Garantir Minha Vaga <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
