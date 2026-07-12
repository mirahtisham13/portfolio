import React from 'react';
import { Download } from 'lucide-react';
import TiltCard from './TiltCard';
import './Resume.css';

const skillCategories = [
  {
    label: 'AI Tools & Development',
    skills: ['ChatGPT', 'Gemini', 'Claude', 'Antigravity'],
  },
  {
    label: 'Data & Programming',
    skills: ['Python', 'Data Analysis', 'Google Sheets'],
  },
  {
    label: 'Web & Deployment',
    skills: ['HTML/CSS/JS', 'React', 'Next.js', 'Supabase', 'Vercel'],
  },
  {
    label: 'Design & Multimedia',
    skills: ['Canva', 'CapCut', 'Mobile Photography'],
  },
  {
    label: 'Productivity',
    skills: ['Microsoft Excel/Word', 'Google Docs', 'Zoom', 'Teams'],
  },
  {
    label: 'Languages',
    skills: ['English', 'Urdu', 'Kashmiri', 'Hindi'],
  },
];

const Resume = () => {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="section-header resume-header animate-fade-in">
          <h2 className="heading-lg">
            Resume &amp; <span className="text-gradient">Experience</span>
          </h2>
          <a href="/Resume.pdf" download="Ahtisham_Resume.pdf" className="btn btn-primary" aria-label="Download PDF Resume">
            Download PDF <Download size={20} />
          </a>
        </div>

        <div className="resume-grid">
          {/* Education & Experience Column */}
          <div className="resume-column animate-fade-in delay-100">
            <h3 className="heading-md">Education &amp; Experience</h3>

            <div className="timeline">
              <TiltCard className="timeline-item glass-card">
                <div className="timeline-dot"></div>
                <h4>Bachelor of Arts in Economics</h4>
                <p className="text-accent">Government Degree College Kupwara | Expected Aug 2026</p>
                <p className="text-muted">
                  Focusing on core economic principles and data analysis while combining analytical coursework with creative problem-solving and rapid technical skill acquisition.
                </p>
              </TiltCard>

              <TiltCard className="timeline-item glass-card">
                <div className="timeline-dot"></div>
                <h4>Freelance Web Developer</h4>
                <p className="text-accent">Self-Employed | 2024 – Present</p>
                <p className="text-muted">
                  Built and deployed professional clinic websites with admin dashboards for real clients (Dr. Kaiser Clinic, Dr. Suhail Tantry Clinic), handling full-cycle development and domain management.
                </p>
              </TiltCard>

              <TiltCard className="timeline-item glass-card">
                <div className="timeline-dot"></div>
                <h4>Certifications &amp; Learning</h4>
                <p className="text-accent">DataCamp &amp; Educative</p>
                <p className="text-muted">
                  • Data Analysis (In Progress) – DataCamp<br/>
                  • Learn Python 3 – Educative
                </p>
              </TiltCard>
            </div>
          </div>

          {/* Technical Skills Column */}
          <div className="resume-column animate-fade-in delay-200">
            <h3 className="heading-md">Technical Skills</h3>

            <TiltCard className="skills-container glass-card">
              {skillCategories.map((cat) => (
                <div className="skill-category" key={cat.label}>
                  <h4>{cat.label}</h4>
                  <div className="skill-pills">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="skill-pill">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
