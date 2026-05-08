import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Star } from 'lucide-react';

const stats = [
  { icon: Users, value: '150+', label: 'Alunos Transformados' },
  { icon: BookOpen, value: '7 Anos', label: 'Estudando Conexões Humanas' },
  { icon: Star, value: 'Prático', label: 'Foco em Networking Real' },
  { icon: Star, value: '4.9★', label: 'Avaliação Média' },
];

export default function Author() {
  return (
    <section id="autor" className="py-12 md:py-20 bg-surface-container-low relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs block mb-4">
            Quem Está Por Trás
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]">
            Sobre o{' '}
            <span className="text-gradient">Autor</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 items-center">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-tertiary/20 blur-xl pointer-events-none" />

            {/* Photo frame */}
            <div className="relative w-full max-w-[420px]">
              <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 aspect-[3/4]">
                <img
                  src="/author-networking.png"
                  alt="Pedro Augusto - Autor do Método Anti-Tímido"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                whileHover={{ scale: 1.04 }}
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5 shadow-2xl border border-primary/20 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">Especialista em</p>
                    <p className="text-primary text-xs font-bold tracking-wide">Networking & Conexões</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 font-headline">
                Pedro Augusto
              </h3>
              <p className="text-primary font-semibold tracking-widest text-xs uppercase">
                Criador do Método Anti-Tímido
              </p>
            </div>

            <div className="space-y-5 text-on-surface-variant text-lg leading-relaxed font-medium">
              <p>
                Fui o cara que desaparecia antes de qualquer evento social. Inventava desculpas, fingia dor de cabeça e passava noites evitando conversas que poderiam mudar minha vida.
              </p>
              <p>
                Quando montei minha agência, percebi que{' '}
                <span className="text-white font-semibold">talento sozinho não abre portas</span>. Quem abre é o relacionamento certo no momento certo. Foi aí que decidi desvendar o "código" por trás das conexões humanas.
              </p>
              <p>
                Hoje, após <span className="text-tertiary font-semibold">7 anos estudando psicologia social, comunicação e influência</span>, condensei tudo isso num método que funciona especialmente para quem é introvertido, sem precisar fingir ser outra pessoa.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="glass-card rounded-2xl p-5 border border-white/5 hover:border-primary/20 transition-colors duration-300"
                >
                  <stat.icon className="w-5 h-5 text-primary mb-3 opacity-80" />
                  <p className="text-white font-extrabold text-xl leading-none mb-1">{stat.value}</p>
                  <p className="text-on-surface-variant text-xs font-medium leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
