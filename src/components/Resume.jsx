import React from 'react';
import { Download } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="section-header animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <h2 className="heading-lg" style={{ marginBottom: 0 }}>
            Resume & <span className="text-gradient">Experience</span>
          </h2>
          <a href="/Resume.pdf" download="Ahtisham_Resume.pdf" className="btn btn-primary">
            Download PDF <Download size={20} />
          </a>
        </div>

        <div className="resume-grid">
          {/* Education & Experience Column */}
          <div className="resume-column animate-fade-in delay-100">
            <h3 className="heading-md">Education & Experience</h3>
            
            <div className="timeline">
              <div className="timeline-item glass-card">
                <div className="timeline-dot"></div>
                <h4>Bachelor of Arts in Economics</h4>
                <p className="text-accent">Government Degree College Kupwara | Expected Aug 2026</p>
                <p className="text-muted">
                  Focusing on core economic principles and data analysis while combining analytical coursework with creative problem-solving and rapid technical skill acquisition.
                </p>
              </div>

              <div className="timeline-item glass-card">
                <div className="timeline-dot"></div>
                <h4>Digital Support Assistant (Volunteer)</h4>
                <p className="text-accent">Community Support | Kupwara, J&K</p>
                <p className="text-muted">
                  Assisted community members with creating, formatting, and managing spreadsheets and digital documents, providing hands-on digital literacy support.
                </p>
              </div>

              <div className="timeline-item glass-card">
                <div className="timeline-dot"></div>
                <h4>Certifications & Learning</h4>
                <p className="text-accent">DataCamp & Educative</p>
                <p className="text-muted">
                  • Data Analysis (In Progress) - DataCamp<br/>
                  • Learn Python 3 - Educative
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills Column */}
          <div className="resume-column animate-fade-in delay-200">
            <h3 className="heading-md">Technical Skills</h3>
            
            <div className="skills-container glass-card">
              <div className="skill-category">
                <h4>AI Tools & Development</h4>
                <p className="text-muted">ChatGPT, Gemini, Claude, Antigravity</p>
              </div>
              
              <div className="skill-category">
                <h4>Data & Programming</h4>
                <p className="text-muted">Python, Data Analysis Fundamentals</p>
              </div>

              <div className="skill-category">
                <h4>Web Deployment</h4>
                <p className="text-muted">Vercel, Domain Management</p>
              </div>

              <div className="skill-category">
                <h4>Productivity & Collaboration</h4>
                <p className="text-muted">Microsoft Excel/Word, Google Sheets/Docs, Zoom, Teams</p>
              </div>

              <div className="skill-category">
                <h4>Design & Multimedia</h4>
                <p className="text-muted">Mobile Photography, Canva, CapCut</p>
              </div>

              <div className="skill-category">
                <h4>Languages</h4>
                <p className="text-muted">English (Fluent), Urdu (Fluent), Kashmiri (Fluent), Hindi (Conversational)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
