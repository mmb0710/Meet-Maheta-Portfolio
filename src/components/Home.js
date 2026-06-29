import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import ProfileImage from '../files/Me.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  useEffect(() => {
    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '100px',
      duration: 1000,
      delay: 200,
      reset: false,
    });

    const srRight = ScrollReveal({
      origin: 'right',
      distance: '100px',
      duration: 1000,
      delay: 200,
      reset: false,
    });

    srLeft.reveal('.reveal-left-home', { interval: 200 });
    srRight.reveal('.reveal-right-home', { interval: 200 });
  }, []);

  return (
    <div className="FirstElement" id="home">
      <div className="profile-photo reveal-left-home">
        <img src={ProfileImage} alt="Meet Maheta" />
      </div>
      <div className="profile-text reveal-right-home">
        <h5>Hi, I'm</h5><br />
        <h1>Meet Maheta</h1><br />
        <h2 className="profile-subtitle">Full-Stack Developer</h2><br />
        <p>
          Computer Programming graduate from Algonquin College, Ottawa, with hands-on experience
          building web portals, mobile apps, and database-driven systems. I enjoy turning complex
          problems into clean, practical solutions — and I'm actively looking for full-time
          opportunities where I can contribute and grow.
        </p>
        <div className="btn-group">
          <a href="#projects" className="btn">View My Work</a>
          <a href="mailto:mmb0702004@gmail.com" className="btn">Get In Touch</a>
        </div>
        <div className="social">
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
      </div>
    </div>
  );
};

export default Home;
