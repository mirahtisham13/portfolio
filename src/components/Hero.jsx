import React from 'react';
import { ArrowRight, Code, User, FileText } from 'lucide-react';
import useTypewriter from '../hooks/useTypewriter';
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
          <div style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid var(--accent-primary)', borderRadius: '20px', color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
            🟢 Available for Freelance Projects
          </div>
          <h2 className="hero-subtitle text-gradient">Hello, I'm Ahtisham Majeed Mir</h2>
          <h1 className="heading-xl hero-title" style={{ minHeight: '1.2em' }}>
              <span className="text-gradient" style={{ display: 'inline-flex', alignItems: 'center' }}>
                {typingText}<span className="cursor">|</span>
              </span>
          </h1>
          <p className="hero-description text-muted">
            A passionate Creator and AI Orchestrator specializing in rapidly building exceptional digital experiences, 
            clinic management systems, and modern web applications by leveraging advanced AI collaboration.
          </p>
          <div className="hero-cta">
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="#projects" className="btn btn-primary">
                View My Work <ArrowRight size={20} />
              </a>
              <a href="#resume" className="btn btn-outline">
                View Resume <FileText size={20} />
              </a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/mirahtisham13" target="_blank" rel="noreferrer" className="social-icon">
                <Code size={24} />
              </a>
              <a href="https://linkedin.com/in/mirahtisham13" target="_blank" rel="noreferrer" className="social-icon">
                <User size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-visual animate-fade-in delay-200">
          <div className="visual-blob"></div>
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
    </section>
  );
};

export default Hero;
