import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="mailto:mmb0702004@gmail.com" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://github.com/mmb0710" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/meet-maheta-063608265/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <small className="message">Designed & built by Meet Maheta</small>
      <small className="copyright">&copy; {currentYear} Meet Maheta. All rights reserved.</small>
    </footer>
  );
}

export default Footer;
