import React, { useState } from 'react';
import { Section } from '../components/ui/Section';
import { FadeIn } from '../components/ui/FadeIn';
import { PROJECTS } from '../constants';
import { Button } from '../components/ui/Button';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Videomaker', 'Sites', 'Tráfego'];

  const filteredProjects = filter === 'Todos' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.includes(filter) || p.category === filter);

  return (
    <div className="pt-20">
      <Section>
        <div className="text-center mb-16">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nosso Portfólio</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Confira alguns dos projetos que desenvolvemos e os resultados que geramos para nossos clientes.
            </p>
          </FadeIn>
        </div>

        {/* Filters */}
        <FadeIn delay={100} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border transition-all ${
                filter === cat 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-white border-white/20 hover:border-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 50}>
              <div className="group bg-brand-gray rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all">
                <div className="aspect-[4/3] overflow-hidden relative">
                   <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium border-b border-white pb-1">Ver detalhes</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 flex-wrap mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs uppercase tracking-wider text-gray-500 border border-white/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.client}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300} className="text-center mt-20 p-12 bg-brand-gray rounded-2xl border border-white/5">
          <h3 className="text-2xl font-bold mb-4">Gostou do que viu?</h3>
          <p className="text-gray-400 mb-8">Vamos criar algo incrível para sua empresa também.</p>
          <Button to="/contact" variant="primary">Solicitar Orçamento</Button>
        </FadeIn>
      </Section>
    </div>
  );
};
