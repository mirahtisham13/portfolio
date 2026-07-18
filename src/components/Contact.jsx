import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({ submitting: false, success: false, error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ submitting: true, success: false, error: false });
    const formData = new FormData(e.target);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setFormState({ submitting: false, success: true, error: false });
        e.target.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setFormState({ submitting: false, success: false, error: true });
    }
  };

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
            <a href="mailto:mirahtisham13@gmail.com" className="info-item glass-card info-item-link">
              <Mail className="info-icon" size={24} aria-hidden="true" />
              <div>
                <h4 className="info-title">Email</h4>
                <p className="text-muted">mirahtisham13@gmail.com</p>
              </div>
            </a>

            <div className="info-item glass-card">
              <Phone className="info-icon" size={24} aria-hidden="true" />
              <div>
                <h4 className="info-title">Phone</h4>
                <p className="text-muted">+91 7780875867</p>
              </div>
            </div>

            <div className="info-item glass-card">
              <MapPin className="info-icon" size={24} aria-hidden="true" />
              <div>
                <h4 className="info-title">Location</h4>
                <p className="text-muted">Kupwara, J&K (Remote)</p>
              </div>
            </div>
          </div>

          <form
            className="contact-form glass-card animate-fade-in delay-200"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY} />

            {formState.success && (
              <div className="form-feedback form-feedback--success" role="alert">
                <CheckCircle size={20} />
                <span>Message sent! I'll get back to you soon.</span>
              </div>
            )}
            {formState.error && (
              <div className="form-feedback form-feedback--error" role="alert">
                <AlertCircle size={20} />
                <span>Something went wrong. Please try again or email me directly.</span>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input type="text" id="contact-name" name="name" placeholder="John Doe" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input type="email" id="contact-email" name="email" placeholder="john@example.com" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows="4" placeholder="Tell me about your project..." className="form-control" required></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary contact-submit-btn"
              disabled={formState.submitting}
              aria-label="Send Message"
            >
              {formState.submitting ? (
                <><Loader size={20} className="spin-icon" /> Sending…</>
              ) : (
                <><Send size={20} /> Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
