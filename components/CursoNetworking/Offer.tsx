import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, Lock, ArrowRight, ShieldCheck, Laptop } from 'lucide-react';

const CHECKOUT_URL = "https://pay.cakto.com.br/i39hvnd_852878";

const modules = [
  { num: "01", title: "Networking de Alto Valor: A Mentalidade do Agricultor" },
  { num: "02", title: "O Método Anti-Tímido: Sua Timidez Como Superpoder" },
  { num: "03", title: "Presença Autêntica: Comunicação Sem Personas Falsas" },
  { num: "04", title: "Engenharia da Abordagem: DM, E-mail e Presencial" },
  { num: "05", title: "Do Contato à Oportunidade: Nutrindo Conexões" },
  { num: "06", title: "Do Contato ao Caixa: Renda via Networking Digital" },
  { num: "07", title: "Preço Estratégico: Como Cobrar Sendo Iniciante" },
  { num: "08", title: "Persuasão Inteligente: Fechar Sem Forçar" },
  { num: "09", title: "Fechamento de Clientes: Scripts e Conversas Comerciais" },
  { num: "10", title: "Materiais e Exercícios Práticos: Aplicação Imediata" },
];

export default function Offer() {
  return (
    <section id="oferta" className="py-12 md:py-20 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="label-md text-primary mb-6 block font-bold tracking-[0.2em] uppercase text-xs">O que está incluso</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Tudo que você precisa para{' '}
            <br />
            <span className="text-gradient">sair da invisibilidade.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 md:mb-10 text-white flex items-center gap-4">
              <BookOpen className="w-8 h-8 text-primary" />
              Os 10 Módulos do Treinamento
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {modules.map((mod, i) => (
                <div key={i} className="bg-surface border border-white/5 p-5 md:p-6 rounded-3xl flex gap-5 items-center group hover:bg-surface-container-high transition-all">
                  <span className="text-2xl md:text-3xl font-black text-white/10 group-hover:text-primary/20 transition-colors uppercase tracking-widest">{mod.num}</span>
                  <p className="font-bold text-on-surface-variant text-sm leading-relaxed">{mod.title}</p>
                </div>
              ))}
            </div>

            {/* Extras */}
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="p-6 rounded-3xl bg-surface-container-high border border-white/5">
                <div className="flex items-start gap-4">
                  <Laptop className="w-6 h-6 text-tertiary shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold mb-1">Área de Membros</p>
                    <p className="text-sm text-on-surface-variant font-medium">Plataforma exclusiva para assistir às aulas e baixar os materiais.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-surface-container-high border border-white/5">
                <div className="flex items-start gap-4">
                  <Laptop className="w-6 h-6 text-tertiary shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold mb-1">Exercícios Práticos</p>
                    <p className="text-sm text-on-surface-variant font-medium">Ebooks, planilhas, scripts e checklists prontos para aplicar agora.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-3xl bg-surface-container-high border border-white/5 mt-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <p className="text-white font-bold mb-1">Acesso Vitalício</p>
                  <p className="text-sm text-on-surface-variant font-medium">Acesse quando e onde quiser, com todas as atualizações futuras inclusas gratuitamente.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-surface border border-primary/20 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative overflow-hidden group/card"
          >
            <div className="absolute top-0 right-0 bg-primary/20 text-primary font-bold py-2 px-6 md:px-8 rounded-bl-3xl text-[9px] md:text-[10px] uppercase tracking-widest border-l border-b border-primary/20 group-hover/card:bg-primary group-hover/card:text-white transition-all duration-500">
              Inscrições Abertas
            </div>

            <h3 className="text-2xl md:text-3xl font-black mb-8 md:mb-10 text-white italic tracking-tighter">Full Experience</h3>

            <div className="space-y-4 md:space-y-5 mb-10 md:mb-12">
              <div className="flex justify-between items-center text-on-surface-variant line-through font-bold opacity-30">
                <span className="text-xs md:text-sm">Valor de Mercado</span>
                <span className="text-sm md:text-base">R$ 1.494,00</span>
              </div>
              <div className="h-px bg-white/5" />
              <div className="flex justify-between items-center font-bold text-on-surface">
                <span className="text-base md:text-lg">Preço Exclusivo</span>
                <span className="text-primary text-xs tracking-widest uppercase font-black">Somente Hoje</span>
              </div>
            </div>

            <div className="mb-10 md:mb-14 relative">
              <div className="absolute -inset-10 bg-primary/20 blur-[60px] rounded-full -z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />

              <p className="text-primary mb-4 md:mb-5 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] flex items-center gap-2">
                <span className="w-6 md:w-8 h-px bg-primary/30" /> Oportunidade Única
              </p>

              <div className="flex flex-col items-start gap-1">
                <div className="flex items-baseline gap-2 md:gap-3">
                  <span className="text-gradient text-2xl md:text-3xl font-black italic tracking-tighter">12x de</span>
                  <div className="text-6xl sm:text-8xl md:text-9xl font-black text-white tracking-tighter flex items-start drop-shadow-[0_0_20px_rgba(255,178,183,0.3)]">
                    <span className="text-2xl md:text-3xl mt-4 mr-1">R$</span>10<span className="text-3xl md:text-4xl mt-12 md:mt-14">,02</span>
                  </div>
                </div>

                <div className="mt-6 px-4 md:px-6 py-2 md:py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md group-hover/card:border-primary/40 transition-colors duration-500">
                  <p className="text-on-surface text-[11px] md:text-sm font-bold uppercase tracking-[0.1em] md:tracking-[0.15em]">
                    ou <span className="text-white">R$ 97,00</span> à vista no PIX
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-5 mb-10 md:mb-12">
              {[
                "Acesso Imediato à Plataforma",
                "10 Módulos Completos em Vídeo",
                "Materiais, Scripts e Exercícios",
                "Acesso Vitalício ao Conteúdo",
                "Todos os Bônus de Aceleração",
                "Certificado Anti-Tímido"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4 text-xs md:text-sm font-bold text-white group/item">
                  <div className="w-5 md:w-6 h-5 md:h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-all">
                    <CheckCircle2 className="w-3 md:w-3.5 h-3 md:h-3.5" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <a
              href={CHECKOUT_URL}
              className="w-full btn-primary py-5 md:py-7 text-lg md:text-xl shadow-[0_20px_50px_rgba(255,178,183,0.2)] mb-8 uppercase font-black text-center flex items-center justify-center"
            >
              Quero Minha Vaga Agora <ArrowRight className="ml-2 w-5 md:w-6 h-5 md:h-6" />
            </a>

            <div className="flex items-center justify-center gap-3 text-[9px] md:text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.2em] opacity-40">
              <Lock className="w-3 md:w-4 h-3 md:h-4 text-primary" /> Transação Criptografada
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
