// components/Resume.js
import React from 'react';
import lalasaresume from './images/Lalasa_CV.pdf'; // Importing the resume PDF

const Resume = () => {
  return (
    <section id="resume" style={resumeStyle}>
      <h2>Resume</h2>
      <a href={lalasaresume} download style={resumeButtonStyle}>
        Download Resume
      </a>
    </section>
  );
};

const resumeStyle = {
  padding: '50px',
  height: '100vh',
  background: '#16213e',
  color: '#fff',
  textAlign: 'center',
};

const resumeButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#ffd700',
  color: '#000',
  border: 'none',
  borderRadius: '5px',
  textDecoration: 'none',
  fontSize: '18px',
};

export default Resume;
