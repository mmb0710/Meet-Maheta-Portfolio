import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBars } from '@fortawesome/free-solid-svg-icons';

// Import the image using the relative path
import SignatureImage from '../files/Signature.png';  // Adjust path based on actual location

function Header() {
    return (
        <header className="header-area">
            <div className="container">
                <div className="header">
                    <a href="#home" className="logo">
                        {/* Use the imported image here */}
                        <img src={SignatureImage} alt="signature" className="signature" />
                        <FontAwesomeIcon icon={faBolt} className="bolt-icon" />
                    </a>
                    <ul className="navbar">
                        <li><a href="#home ">Home</a></li>
                        <li><a href=" #about">About</a></li>
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
