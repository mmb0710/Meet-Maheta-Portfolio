import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBars } from '@fortawesome/free-solid-svg-icons';
import SignatureImage from '../files/Signature.png'; // Adjust path based on actual location

function Header() {
  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header-area');
      if (window.scrollY > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header-area">
      <div className="container">
        <div className="header">
          <a href="#home" className="logo">
            <img src={SignatureImage} alt="signature" className="signature" />
            <FontAwesomeIcon icon={faBolt} className="bolt-icon" />
          </a>
          <ul className="navbar">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
          <div className="menu_icon">
            <FontAwesomeIcon icon={faBars} className="bars-icon" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
