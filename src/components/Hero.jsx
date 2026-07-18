import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import useTypewriter from '../hooks/useTypewriter';
import { GitHubIcon, LinkedInIcon } from './icons/index.jsx';
import './Hero.css';

const Hero = () => {
  const typingText = useTypewriter([
    'AI Orchestrator',
    'Freelance Web Developer',
    'Problem Solver'
  ]);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">
            🟢 Available for Freelance Projects
          </div>
          <p className="hero-subtitle text-gradient">Hello, I'm Ahtisham Majeed Mir</p>
          <h1 className="heading-xl hero-title">
              <span className="text-gradient hero-typing-wrap">
                {typingText}<span className="cursor">|</span>
              </span>
          </h1>
          <p className="hero-description text-muted">
            A passionate Creator and AI Orchestrator specializing in rapidly building exceptional digital experiences, 
            clinic management systems, and modern web applications by leveraging advanced AI collaboration.
          </p>
          <div className="hero-cta">
            <div className="hero-cta-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work <ArrowRight size={20} />
              </a>
              <a href="#resume" className="btn btn-outline">
                View Resume <FileText size={20} />
              </a>
            </div>
            <div className="hero-socials">
              <a
                href="https://github.com/mirahtisham13"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="GitHub Profile"
              >
                <GitHubIcon size={24} />
              </a>
              <a
                href="https://linkedin.com/in/mirahtisham13"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-fade-in delay-200">
          <div className="visual-blob"></div>
          <div className="hero-avatar-wrap">
            <img
              src="/avatar.webp"
              alt="Ahtisham Majeed Mir"
              className="hero-avatar"
              loading="eager"
            />
            <div className="avatar-ring"></div>
          </div>
          <div className="visual-glass glass-card">
            <div className="code-snippet">
              <span className="code-keyword">const</span> <span className="code-variable">creator</span> = {'{'}
              <br/>&nbsp;&nbsp;<span className="code-property">name:</span> <span className="code-string">"Ahtisham Majeed Mir"</span>,
              <br/>&nbsp;&nbsp;<span className="code-property">superpower:</span> [<span className="code-string">"AI Collaboration"</span>, <span className="code-string">"Rapid Prototyping"</span>],
              <br/>&nbsp;&nbsp;<span className="code-property">vision:</span> <span className="code-string">"Limitless"</span>
              <br/>{'}'}; 
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll-indicator" aria-label="Scroll to About section">
        <span className="scroll-indicator-text">Scroll</span>
        <div className="scroll-indicator-chevron">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </a>
    </section>
  );
};

export default Hero;
