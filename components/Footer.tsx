
import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS, ICONS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto max-w-screen-xl px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-text-secondary text-sm">
          &copy; {currentYear} {PERSONAL_INFO.name}. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">{ICONS.github}</a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">{ICONS.linkedin}</a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">{ICONS.twitter}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
