import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../constants';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white z-50">
            STARTIN<span className="text-brand-gray-text">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAVIGATION_LINKS.filter(link => link.name !== 'Contato').map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button variant="primary" to="/contact" className="!px-6 !py-2 text-sm">
              Falar com Especialista
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {NAVIGATION_LINKS.filter(link => link.name !== 'Contato').map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-2xl font-semibold text-white hover:text-gray-400"
          >
            {link.name}
          </Link>
        ))}
        <Button variant="primary" to="/contact" className="mt-4">
          Falar com Especialista
        </Button>
      </div>
    </header>
  );
};
