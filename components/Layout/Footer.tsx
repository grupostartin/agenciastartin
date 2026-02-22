import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-gray pt-16 pb-8 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
              STARTIN<span className="text-brand-gray-text">.</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Transformamos ideias em resultados reais através de estratégias digitais personalizadas,
              produção audiovisual de alto nível e tecnologia.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/agenciastartin" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contatostartin@gmail.com" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Menu</h4>
            <ul className="space-y-4">
              {NAVIGATION_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Belo Horizonte, MG</li>
              <li>contatostartin@gmail.com</li>
              <li>+55 (31) 98278-1618</li>
              <li>
                <Link to="/contact" className="inline-flex items-center gap-2 text-white hover:underline mt-2">
                  <MessageSquare size={16} /> Iniciar projeto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Agência Startin. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
