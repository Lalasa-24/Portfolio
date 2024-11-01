// components/Header.js
import React from 'react';
import { FaHome, FaUser, FaTools, FaFileAlt, FaProjectDiagram, FaBlog } from 'react-icons/fa';
import lalasaresume from './images/LalasaCV.pdf'; // Importing the resume PDF

const Header = () => {
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
  };

  return (
    <header style={headerStyle}>
      <div className="logo" style={logoStyle}>Ln.</div>
      <nav style={navStyle}>
        <ul style={navListStyle}>
          <li><a href="#home" style={linkStyle} onClick={handleScrollTo}><FaHome style={iconStyle}/> Home</a></li>
          <li><a href="#about" style={linkStyle} onClick={handleScrollTo}><FaUser style={iconStyle}/> About</a></li>
          <li><a href="#skills" style={linkStyle} onClick={handleScrollTo}><FaTools style={iconStyle}/> Skills</a></li>
          <li><a href="#" style={linkStyle} onClick={handleResumeDownload}><FaFileAlt style={iconStyle}/> Resume</a></li>
          <li><a href="#projects" style={linkStyle} onClick={handleScrollTo}><FaProjectDiagram style={iconStyle}/> Projects</a></li>

         
        </ul>
      </nav>
    </header>
  );
};

// Styles

const headerStyle = { 
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  padding: '10px',  
  background: 'linear-gradient(90deg, #1a1a2e, #16213e)',
  position: 'fixed', 
  width: '100%', 
  top: 0, 
  zIndex: 1000,  // Lowered z-index value to be below the cursor
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)',
  cursor: 'default' 
};

  

const logoStyle = { 
  fontSize: '30px', 
  fontWeight: 'bold', 
  color: '#1E90FF', 
  marginLeft: '7%',
};

const navStyle = { 
  marginRight: '5%',
  flexGrow: 1, 
  display: 'flex', 
  justifyContent: 'flex-end', 
};

const navListStyle = { 
  display: 'flex', 
  listStyle: 'none', 
  gap: '40px',  // Increased the gap between nav items
};

const linkStyle = { 
  color: '#fff', 
  textDecoration: 'none', 
  fontSize: '18px',
  display: 'flex',
  alignItems: 'center', 
  transition: 'color 0.3s',
};

const iconStyle = { 
  marginRight: '8px', 
  fontSize: '18px'
};

export default Header;
