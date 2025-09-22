
import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Here are some of the projects I'm proud of. Each one represents a challenge I was excited to tackle.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
