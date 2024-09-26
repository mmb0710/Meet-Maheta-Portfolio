import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import ProfileImage from '../files/Me.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
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
        <h5>Hi I'm</h5><br />
        <h1>Meet Maheta</h1><br />
        <p>
        Welcome to my portfolio website! I am an international student who has recently completed a Computer Programming course at Algonquin College in Ottawa, Canada. With a strong passion for coding and a commitment to continuous learning, I have developed a solid foundation in software development and database management. My experience has fueled my eagerness to create innovative solutions and tackle real-world challenges in the tech industry. As I embark on my professional journey, I am excited to contribute my skills and knowledge to impactful projects that push the boundaries of technology. Thank you for visiting, and I look forward to connecting with like-minded professionals.
        </p>
        <div className="btn-group">
          <a href="mailto:mmb0702004@gmail.com" className="btn">Contact</a>
        </div>
        <div className="social">
          <a href="mailto:mmb0702004@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://github.com/mmb0710">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/meet-maheta-063608265/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
      </div>
    </div>
    </div>
  );
};

export default Home;
