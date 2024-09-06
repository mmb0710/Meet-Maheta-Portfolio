import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import SignatureImage from '../files/Signature.png'; // Adjust path based on actual location

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-area">
      <div className="container">
        <div className="header">
          <a href="#home" className="logo">
            <img src={SignatureImage} alt="signature" className="signature" />
            <FontAwesomeIcon icon={faBolt} className="bolt-icon" />
          </a>
          <ul className={`navbar ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#education" onClick={toggleMenu}>Education</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          </ul>
          <div className="menu_icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="bars-icon" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
