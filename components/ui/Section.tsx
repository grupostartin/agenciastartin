import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'black' | 'gray';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  bg = 'black'
}) => {
  const bgClass = bg === 'black' ? 'bg-brand-black' : 'bg-brand-gray';
  
  return (
    <section id={id} className={`py-16 md:py-24 px-6 md:px-12 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};
