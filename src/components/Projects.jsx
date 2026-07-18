import React from 'react';
import { ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';
import { GitHubIcon } from './icons/index.jsx';
import './Projects.css';

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
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                  width="400"
                  height="225"
                />
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
                    <GitHubIcon size={20} />
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
