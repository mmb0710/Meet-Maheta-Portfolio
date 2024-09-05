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
              <li>I have recently completed my studies in Computer Programming at Algonquin College, Ottawa, Canada, where I developed a strong foundation in software development, with a focus on Java, SQL, Git, and GitHub.</li>
              <li>My passion for coding and problem-solving drives me to approach projects with confidence, consistently delivering high-quality results.</li>
              <li>I am deeply committed to continuous learning and staying adaptable in the ever-evolving world of technology. I actively seek opportunities to expand my knowledge and embrace new technologies and methodologies.</li>
              <li>Feel free to explore my work and reach out if you have any questions or opportunities for collaboration.</li>
            </ul>
          </div>
          <div className="about-skills reveal-right-about">
            <ul>
              <li>Name : Meet Maheta</li>
              <li>Age : 21</li>
              <li>From : Canada</li>
              <li>Email : mmb0702004@gmail.com</li>
              <li>Availability : Fulltime</li>
              <li>Experience &lt; 0.5yr</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
