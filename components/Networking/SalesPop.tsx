import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const buyers = [
  { name: "Ana P.", city: "São Paulo" },
  { name: "Bruno M.", city: "Curitiba" },
  { name: "Carla S.", city: "Belo Horizonte" },
  { name: "Diego F.", city: "Rio de Janeiro" },
  { name: "Elena R.", city: "Porto Alegre" },
  { name: "Fabio L.", city: "Brasília" },
  { name: "Gisele O.", city: "Salvador" },
  { name: "Hugo T.", city: "Fortaleza" },
  { name: "Isabela V.", city: "Recife" },
  { name: "Julio C.", city: "Manaus" }
];

export default function SalesPop() {
  const [current, setCurrent] = useState<typeof buyers[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];
      setCurrent(randomBuyer);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 4000); // Show for 4 seconds
    };

    const interval = setInterval(showNotification, 6000); // Every 6 seconds
    
    // Initial delay
    const initialTimeout = setTimeout(showNotification, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div className="fixed bottom-32 left-4 md:bottom-24 md:left-8 z-[999] pointer-events-none">
      <AnimatePresence>
        {isVisible && current && (
          <motion.div
            initial={{ x: -100, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: -100, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="glass-card p-2 md:p-4 rounded-lg md:rounded-2xl flex items-center gap-2 md:gap-4 shadow-2xl border border-white/10 w-fit"
          >
            <div className="hidden md:flex w-10 h-10 rounded-full bg-primary/20 items-center justify-center text-primary shrink-0">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div className="flex flex-col md:block">
              <p className="text-white text-[9px] md:text-sm font-bold leading-tight whitespace-nowrap">
                {current.name} <span className="md:hidden">adquiriu em {current.city}</span>
                <span className="hidden md:inline">acabou de adquirir</span>
              </p>
              <p className="hidden md:block text-tertiary text-xs font-medium mt-0.5">
                em {current.city}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
