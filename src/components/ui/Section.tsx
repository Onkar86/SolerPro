import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  background?: 'white' | 'light' | 'primary' | 'dark';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
}

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  background = 'white',
  spacing = 'lg',
}) => {
  const backgrounds = {
    white: 'bg-white',
    light: 'bg-gray-50',
    primary: 'bg-orange-50',
    dark: 'bg-gray-800 text-white',
  };

  const spacings = {
    none: 'py-0',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 md:py-24',
  };

  return (
    <section
      id={id}
      className={`${backgrounds[background]} ${spacings[spacing]} ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;