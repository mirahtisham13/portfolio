import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons/index.jsx';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          Built with AI &amp; ⚡ by <span className="text-gradient footer-name">Ahtisham Majeed Mir</span> &copy; {year}
        </p>
        <div className="footer-socials">
          <a
            href="https://github.com/mirahtisham13"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
            aria-label="GitHub Profile"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href="https://linkedin.com/in/mirahtisham13"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href="mailto:mirahtisham13@gmail.com"
            className="footer-social-link"
            aria-label="Send Email"
          >
            <MailIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
