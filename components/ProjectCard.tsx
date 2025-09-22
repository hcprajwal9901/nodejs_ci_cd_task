
import React from 'react';
import type { Project } from '../types';
import { ICONS } from '../constants';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, image, tags, liveUrl, codeUrl } = project;

  return (
    <div className="bg-primary rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative overflow-hidden aspect-video">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-text-secondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => (
            <span key={tag} className="bg-secondary text-accent text-xs font-bold py-1 px-3 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-accent font-semibold transition-colors"
            >
              {ICONS.externalLink}
              Live Demo
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-accent font-semibold transition-colors"
            >
              {ICONS.github}
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
