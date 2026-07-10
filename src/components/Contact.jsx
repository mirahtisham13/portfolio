import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header animate-fade-in">
          <h2 className="heading-lg">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted">Have a project in mind? Let's work together to create something amazing.</p>
        </div>

        <div className="contact-container">
          <div className="contact-info animate-fade-in delay-100">
            <div className="info-item glass-card">
              <Mail className="info-icon" size={24} />
              <div>
                <h4 className="heading-md" style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Email</h4>
                <p className="text-muted">mirahtisham13@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item glass-card">
              <Phone className="info-icon" size={24} />
              <div>
                <h4 className="heading-md" style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Phone</h4>
                <p className="text-muted">+91 7780875867</p>
              </div>
            </div>

            <div className="info-item glass-card">
              <MapPin className="info-icon" size={24} />
              <div>
                <h4 className="heading-md" style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Location</h4>
                <p className="text-muted">Kupwara, J&K (Remote)</p>
              </div>
            </div>
          </div>

          <form className="contact-form glass-card animate-fade-in delay-200" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="d668ad3a-687d-44a7-997e-de1ddfea496d" />
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Tell me about your project..." className="form-control" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
