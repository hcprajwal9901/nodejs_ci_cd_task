
import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-primary">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
            <img 
              src="https://picsum.photos/seed/profile/800/800"
              alt="Alex Doe"
              className="rounded-full aspect-square object-cover shadow-2xl"
            />
        </div>
        <div className="md:col-span-3">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-text-secondary text-lg mb-8">
            Hello! I'm a frontend developer with a deep passion for creating intuitive, dynamic, and high-performance web experiences. With several years in the industry, I've honed my skills in the React ecosystem, turning complex requirements into elegant, user-friendly solutions. I thrive in collaborative environments and am always eager to learn new technologies to push the boundaries of what's possible on the web.
          </p>
          <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map(skill => (
              <span key={skill} className="bg-secondary text-text-secondary py-2 px-4 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
