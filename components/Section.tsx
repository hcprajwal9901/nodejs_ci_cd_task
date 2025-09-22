
import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`w-full py-20 lg:py-32 ${className}`}>
      <div className="container mx-auto max-w-screen-xl px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;
