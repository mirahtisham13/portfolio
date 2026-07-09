import React from 'react';
import { Bot, Sparkles, Rocket, Cpu } from 'lucide-react';
import './About.css';

const services = [
  {
    title: 'AI-Driven Development',
    description: 'Leveraging cutting-edge AI agents and LLMs to rapidly architect, build, and deploy full-stack applications.',
    icon: <Bot size={32} className="service-icon" />,
  },
  {
    title: 'Prompt Engineering',
    description: 'Crafting precise, context-rich prompts to direct AI models in generating robust logic and beautiful UIs.',
    icon: <Sparkles size={32} className="service-icon" />,
  },
  {
    title: 'Rapid Prototyping',
    description: 'Transforming ideas into functional digital products at lightning speed through AI collaboration.',
    icon: <Rocket size={32} className="service-icon" />,
  },
  {
    title: 'System Orchestration',
    description: 'Guiding AI systems to seamlessly integrate databases, APIs, and modern frontend frameworks.',
    icon: <Cpu size={32} className="service-icon" />,
  },
];

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text animate-fade-in">
            <h2 className="heading-lg">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted">
              I am an Economics undergraduate and a forward-thinking digital creator who builds powerful applications by partnering with advanced Artificial Intelligence. 
              Instead of writing every line of code by hand, I act as an AI Orchestrator—directing intelligent agents to build complex systems, from intuitive clinic dashboards to powerful file management tools.
            </p>
            <p className="text-muted" style={{ marginTop: '1rem' }}>
              I combine my analytical coursework in Economics and Data Analysis with rapid technical execution, allowing me to focus on the big picture, solve real-world problems, and deliver exceptional value to clients at unprecedented speeds.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className={`service-card glass-card animate-fade-in delay-${(index % 4 + 1) * 100}`}
              >
                {service.icon}
                <h3 className="heading-md">{service.title}</h3>
                <p className="text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
