import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const About = () => {
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

    srLeft.reveal('.reveal-left-about', { interval: 200 });
    srRight.reveal('.reveal-right-about', { interval: 200 });
  }, []);

  return (
    <section className="about-area" id="about">
      <div className="container">
        <div className="about">
          <div className="about-content reveal-left-about">
            <h4>About Me</h4>
            <ul>
              <li>Computer Programming graduate from Algonquin College, Ottawa, with a strong foundation in software development, databases, and system design.</li>
              <li>I bring 2 years of professional experience as a Web Portal Developer at Sintex Industries, where I built and maintained real production systems used by internal teams.</li>
              <li>I'm passionate about writing clean, maintainable code and enjoy the challenge of learning new technologies to stay current in a fast-moving industry.</li>
              <li>Currently seeking full-time opportunities in software development — feel free to reach out if you'd like to connect or collaborate.</li>
            </ul>

            <div className="skills-section">
              <h5>Technical Skills</h5>
              <div className="skills-grid">
                <div className="skill-category">
                  <span className="skill-label">Languages</span>
                  <div className="skill-tags">
                    <span className="tag">Java</span>
                    <span className="tag">Python</span>
                    <span className="tag">PHP</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">SQL</span>
                    <span className="tag">COBOL</span>
                  </div>
                </div>
                <div className="skill-category">
                  <span className="skill-label">Frameworks & Tools</span>
                  <div className="skill-tags">
                    <span className="tag">React</span>
                    <span className="tag">Django</span>
                    <span className="tag">Android Studio</span>
                    <span className="tag">MySQL</span>
                    <span className="tag">Git</span>
                    <span className="tag">REST APIs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-skills reveal-right-about">
            <ul>
              <li><span className="info-label">Name</span> Meet Maheta</li>
              <li><span className="info-label">Location</span> Ottawa, Canada</li>
              <li><span className="info-label">Email</span> mmb0702004@gmail.com</li>
              <li><span className="info-label">Availability</span> Full-time</li>
              <li><span className="info-label">Experience</span> 2 years</li>
              <li><span className="info-label">Education</span> Computer Programming Diploma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
