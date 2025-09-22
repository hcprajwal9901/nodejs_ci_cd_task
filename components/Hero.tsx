
import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS, ICONS } from '../constants';
import Section from './Section';

const Hero: React.FC = () => {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <Section id="home" className="min-h-screen flex items-center">
      <div className="animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4">
          Hi, I'm <span className="text-accent">{PERSONAL_INFO.name}</span>.
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-secondary mb-8">
          {PERSONAL_INFO.title}
        </h2>
        <p className="max-w-3xl text-lg text-text-secondary mb-12">
          {PERSONAL_INFO.bio}
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
                onClick={scrollToProjects}
                className="bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-accent/20"
            >
                View My Work
            </button>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">{ICONS.github}</a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">{ICONS.linkedin}</a>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">{ICONS.twitter}</a>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
