import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DottedSurface } from './dotted-surface';
import { cn } from '@/lib/utils';

export const SplashScreen: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3500); // 3.5 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] bg-black"
                >
                    {/* Componente solicitado: DottedSurface */}
                    <DottedSurface className="size-full">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                            {/* Efeito de brilho solicitado no estilo do demo */}
                            <div
                                aria-hidden="true"
                                className={cn(
                                    'pointer-events-none absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 rounded-full',
                                    'bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)]',
                                    'blur-[100px]',
                                )}
                            />

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="relative z-10"
                            >
                                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                                    STARTIN<span className="text-brand-gray-text opacity-50">.</span>
                                </h1>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="max-w-md relative z-10"
                            >
                                <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide italic">
                                    "Comunicação leve e descontraída, focada no que realmente importa: seu resultado."
                                </p>
                            </motion.div>

                            {/* Barra de progresso sutil */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 3, ease: "linear", delay: 0.2 }}
                                className="absolute bottom-0 left-0 h-1 bg-white/20 w-full origin-left"
                            />
                        </div>
                    </DottedSurface>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
