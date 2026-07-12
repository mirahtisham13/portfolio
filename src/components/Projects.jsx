import React from 'react';
import { ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';
import './Projects.css';

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const projects = [
  {
    id: 1,
    title: 'Dr. Kaiser Clinic',
    description: 'A professional clinic website with an admin dashboard. Built with modern HTML/CSS/JS and powered by a Supabase backend.',
    tags: ['HTML/CSS/JS', 'Supabase', 'Admin Dashboard'],
    image: '/kaiser.png',
    github: 'https://github.com/mirahtisham13/kaiser-website',
    live: 'https://drkaiser.in',
  },
  {
    id: 2,
    title: 'Dr. Suhail Tantry Clinic',
    description: 'A responsive web application for a dental clinic featuring beautiful UI, custom styling, and a complete administrative panel.',
    tags: ['Vanilla JS', 'Admin Panel', 'SEO Optimized'],
    image: '/suhail.png',
    github: 'https://github.com/mirahtisham13/sk-dental-clinic',
    live: 'https://drsuhailtantry.in',
  },
  {
    id: 3,
    title: 'FileForge',
    description: 'A powerful client-side file management tool and Progressive Web App (PWA) with service workers for offline capability.',
    tags: ['JavaScript', 'PWA', 'Web APIs'],
    image: '/fileforge.png',
    github: 'https://github.com/mirahtisham13/FileForge',
    live: 'https://file-forge.dev',
  },
  {
    id: 4,
    title: 'Prompt Vault',
    description: 'A robust Next.js application featuring an Admin Panel and Supabase integration to securely organize, version, and test AI prompts.',
    tags: ['Next.js', 'Admin Panel', 'Supabase'],
    image: '/prompt.png',
    github: 'https://github.com/mirahtisham13/Prompt-Vault',
    live: 'https://prompt-vault-sepia-two.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header animate-fade-in">
          <h2 className="heading-lg">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted">Here are some of the recent projects I've worked on.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <TiltCard 
              key={project.id} 
              className={`project-card glass-card animate-fade-in delay-${(index % 3 + 1) * 100}`}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <h3 className="heading-md">{project.title}</h3>
                <p className="project-description text-muted">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                {project.github !== '#' && (
                  <a href={project.github} className="icon-link" aria-label="GitHub Repository" target="_blank" rel="noreferrer">
                    <GitHubIcon />
                  </a>
                )}
                {project.live !== '#' && (
                  <a href={project.live} className="icon-link" aria-label="Live Demo" target="_blank" rel="noreferrer">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
