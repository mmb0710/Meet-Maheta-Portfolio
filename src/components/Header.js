import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import SignatureImage from '../files/Signature.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header-area">
      <div className="container">
        <div className="header">
          <a href="#home" className="logo" onClick={closeMenu}>
            <img src={SignatureImage} alt="Meet Maheta" className="signature" />
            <FontAwesomeIcon icon={faBolt} className="bolt-icon" />
          </a>
          <ul className={`navbar ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#education" onClick={closeMenu}>Education</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="mailto:mmb0702004@gmail.com" className="nav-cta" onClick={closeMenu}>Hire Me</a></li>
          </ul>
          <div className="menu_icon" onClick={toggleMenu} aria-label="Toggle menu">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="bars-icon" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
