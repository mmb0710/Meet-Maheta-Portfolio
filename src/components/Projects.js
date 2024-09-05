import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCar, faDesktop } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
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

    srLeft.reveal('.reveal-left-projects', { interval: 200 });
    srRight.reveal('.reveal-right-projects', { interval: 200 });
  }, []);

  return (
    <section className="project-content" id="projects">
      <div className="container">
        <div className="project-title">
          <h4>My Projects</h4>
          <p>Discover my projects, where creativity meets innovation</p>
        </div>
        <div className="projects">
          {/* 1st Project */}
          <div className="project">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faCoffee} className="project-icon" />
            </div>
            <h4>SnakeGame Using Java</h4>
            <p>This is a simple implementation of the classic Snake game using Java and Swing.</p>
          </div>
          {/* 2nd Project */}
          <div className="project">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faCar} className="project-icon" />
            </div>
            <h4>Nightguard</h4>
            <p>An innovative embedded system solution for safer driving, combining matrix LED technology to reduce headlight glare and vibration sensors to detect potholes, enhancing road safety and minimizing accidents.</p>
          </div>
          {/* 3rd Project */}
          <div className="project">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faDesktop} className="project-icon" />
            </div>
            <h4>Portfolio Website</h4>
            <p>Created a portfolio website using HTML, CSS, and JavaScript, It serves as a platform to introduce myself, share my projects, and provide information about my education and internship.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;