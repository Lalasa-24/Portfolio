import React, { useState } from 'react';
import { FaHome, FaUser, FaTools, FaFileAlt, FaProjectDiagram, FaBlog, FaBars } from 'react-icons/fa';
import lalasaresume from './images/LalasaCV.pdf';
import './Style.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const handleResumeDownload = (event) => {
    event.preventDefault();
    const link = document.createElement('a');
    link.href = lalasaresume;
    link.download = 'LalasaCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollTo = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsNavOpen(false); // Close menu after clicking a link
  };

  return (
    <header className="headerStyle">
      <div className="logoStyle">Ln.</div>
      <div className="hamburger" onClick={toggleNav}>
        <FaBars />
      </div>
      <nav className="navStyle">
        <ul className={`navListStyle ${isNavOpen ? 'active' : ''}`}>
          <li><a href="#home" className="linkStyle" onClick={handleScrollTo}><FaHome className="iconStyle"/> Home</a></li>
          <li><a href="#about" className="linkStyle" onClick={handleScrollTo}><FaUser className="iconStyle"/> About</a></li>
          <li><a href="#skills" className="linkStyle" onClick={handleScrollTo}><FaTools className="iconStyle"/> Skills</a></li>
          <li><a href="#" className="linkStyle" onClick={handleResumeDownload}><FaFileAlt className="iconStyle"/> Resume</a></li>
          <li><a href="#projects" className="linkStyle" onClick={handleScrollTo}><FaProjectDiagram className="iconStyle"/> Projects</a></li>
          {/* <li><a href="#blogs" className="linkStyle" onClick={handleScrollTo}><FaBlog className="iconStyle"/> Blogs</a></li>
        </ul> */}
        </ul> 
      </nav>
    </header>
  );
};

export default Header;
