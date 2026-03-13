import React from 'react';
import { Smartphone, Monitor, BarChart3, Users, Rocket, Zap, Video } from 'lucide-react';
import { ServiceItem, Project, Testimonial, Creator, CaseStudy } from './types';

export const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  // { name: 'UGC', path: '/ugc' }, // Hidden for now
  { name: 'Serviços', path: '/services' },
  { name: 'Cases', path: '/cases' },
  { name: 'Sobre', path: '/about' },
  { name: 'Contato', path: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'videomaker',
    title: 'Videomaker Mobile para Eventos',
    description: 'Cobertura profissional de eventos corporativos e sociais em BH com agilidade.',
    icon: <Smartphone className="w-8 h-8" />,
    deliverables: ['Reels e Stories', 'Highlights do evento', 'Material institucional', 'Entrega rápida']
  },
  {
    id: 'sites',
    title: 'Sites e Landing Pages',
    description: 'Desenvolvimento focado em performance, SEO e alta conversão de visitantes.',
    icon: <Monitor className="w-8 h-8" />,
    deliverables: ['Design responsivo', 'Otimização SEO', 'Alta performance', 'Foco em conversão']
  },
  {
    id: 'trafego',
    title: 'Gestão de Tráfego Pago',
    description: 'Campanhas estratégicas em Meta Ads e Google Ads para escalar seu negócio.',
    icon: <BarChart3 className="w-8 h-8" />,
    deliverables: ['Estratégia personalizada', 'Gestão de anúncios', 'Relatórios mensais', 'Otimização de ROI']
  },
  {
    id: 'ugc',
    title: 'Agenciamento de UGC\'s',
    description: 'Conectamos sua marca a criadores de conteúdo para gerar anúncios autênticos e provas sociais.',
    icon: <Video className="w-8 h-8" />,
    deliverables: ['Curadoria de criadores', 'Gestão de campanhas', 'Edição de conteúdo', 'Estratégia de criativos']
  }
];

export const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Briefing',
    description: 'Entendemos seu negócio, objetivos e público-alvo em detalhes.',
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 2,
    title: 'Estratégia',
    description: 'Desenvolvemos um plano de ação personalizado para sua meta.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 3,
    title: 'Execução',
    description: 'Implementamos as soluções com técnica e criatividade.',
    icon: <Rocket className="w-6 h-6" />
  },
  {
    id: 4,
    title: 'Resultados',
    description: 'Analisamos métricas e otimizamos para crescimento contínuo.',
    icon: <BarChart3 className="w-6 h-6" />
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'isabella-franklin',
    client: 'Isabella Franklin',
    description: 'Mentora feminina e Terapeuta Sistêmica que escalou seu posicionamento digital. Através de uma estratégia de conversão otimizada, aumentamos a autoridade e as vendas do seu negócio.',
    category: 'Mentoria & Terapia',
    tags: ['Estratégia Digital', 'Conversão', 'Branding'],
    metrics: [
      { label: 'Aumento no Faturamento', value: '+97%' },
      { label: 'Mais Agendamentos', value: '+120%' },
      { label: 'Cliques no Site', value: '+238%' }
    ]
  },
  {
    id: 'lideranca-portas-aco',
    client: 'Liderança Portas de Aço',
    description: 'Empresa líder em soluções de segurança. Implementamos uma gestão de tráfego pago agressiva e focada em ROI, resultando em um crescimento exponencial de vendas em tempo recorde.',
    category: 'Indústria',
    tags: ['Tráfego Pago', 'Escala', 'Vendas'],
    metrics: [
      { label: 'Faturamento Extra', value: '+200%' },
      { label: 'Período', value: '3 Meses' }
    ]
  },
  {
    id: 'prevent-vision',
    client: 'Prevent Vision',
    description: 'Lançamento de produto exclusivo no setor de saúde e tecnologia. Desenvolvemos uma Landing Page de alta performance, leve e moderna para garantir a melhor experiência de conversão.',
    category: 'Saúde & Tech',
    tags: ['Lançamento', 'Web Design', 'Performance'],
    metrics: [
      { label: 'Faturamento vs Esperado', value: '+30%' },
      { label: 'Site', value: 'Leve & Tech' }
    ]
  }
];

// Redundant PROJECTS removed. Using CASE_STUDIES for high-performance references.

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendes',
    role: 'CEO',
    company: 'TechStart',
    content: 'A Startin transformou nossa presença digital. O site novo aumentou nossa conversão em 40% no primeiro mês.'
  },
  {
    id: '2',
    name: 'Ana Paula',
    role: 'Diretora de Marketing',
    company: 'Modas BH',
    content: 'A cobertura do nosso evento foi impecável. Vídeos entregues no mesmo dia para postarmos nos stories.'
  }
];

export const UGC_CREATORS: Creator[] = [
  {
    id: '1',
    name: 'Julia Silva',
    specialties: ['Moda', 'Beleza', 'Lifestyle'],
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    bio: 'Julia é especialista em criar conexões genuínas através de conteúdos de "Get Ready With Me" e unboxings detalhados. Com um olhar apurado para estética minimalista, ela transforma produtos de moda e beleza em objetos de desejo, sempre focando em como a marca se integra naturalmente à rotina feminina de alto padrão.',
    instagram: '@juliasgc',
  },
  {
    id: '2',
    name: 'Lucas Ferreira',
    specialties: ['Tech', 'Games', 'Productivity'],
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400',
    bio: 'Lucas domina a arte da demonstração técnica sem perder a leveza. Seus conteúdos são reconhecidos pela edição dinâmica e roteiro focado em solucionar as "dores" do consumidor. É o criador ideal para marcas que buscam explicar funcionalidades complexas de forma simples, gerando desejo imediato através de setups tech impecáveis.',
    tiktok: '@lucasugc',
  },
  {
    id: '3',
    name: 'Bia Santos',
    specialties: ['Culinária', 'Home Decor', 'Organização'],
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400',
    bio: 'Referência em lifestyle e "aesthetic home", Bia cria narrativas visuais acolhedoras que performam muito bem em campanhas de topo de funil. Sua habilidade em contar histórias através de pequenos momentos do dia a dia garante um tempo de retenção acima da média, tornando seus vídeos ideais para gerar autoridade em nichos domésticos e de bem-estar.',
    instagram: '@biaestilo',
  },
  {
    id: '4',
    name: 'Gabriel Costa',
    specialties: ['Fitness', 'Saúde', 'Suplementos'],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    bio: 'Gabriel une performance física com uma comunicação direta e motivacional. Seu foco está em marcas que valorizam a disciplina e resultados reais. Seus vídeos de rotina de treino e review de suplementos possuem um alto índice de compartilhamento, ajudando marcas de saúde a expandirem seu alcance orgânico com credibilidade.',
    instagram: '@gabiugc',
  }
];
