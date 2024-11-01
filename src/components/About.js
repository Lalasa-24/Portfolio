// components/About.js
import React from 'react';
import myImage from './images/image (2).png'; // Replace with your image path

const About = () => {
  return (
    <section id="about" style={aboutStyle}>
      <div style={contentStyle}>
        <img src={myImage} alt="About Me" style={imageStyle} />
        <div style={textStyle}>
          <h2 style={headingStyle}>LET ME INTRODUCE MYSELF</h2><br />
          <p style={paragraphStyle}>
            A passionate software developer with a love for building innovative <span style={{ color: '#1E90FF' }}>web technologies</span> and products.<br /><br />
            With a strong foundation in programming languages like <span style={{ color: '#1E90FF' }}>Python, Java, and JavaScript, and also HTML, CSS</span>.
            I specialize in creating modern, user-friendly applications.<br /><br />
            My interests extend to <span style={{ color: '#1E90FF' }}>Machine Learning</span> and exploring innovative, state-of-the-art technologies.
            I also have experience in machine learning, working on projects that focus on <span style={{ color: '#1E90FF' }}>Content Analysis</span> to derive meaningful insights.<br /><br />
            By combining my expertise in web development with ML techniques, I enjoy solving complex problems and building impactful digital solutions.
            My work leverages frameworks like <span style={{ color: '#1E90FF' }}>ReactJS</span> alongside ML to create innovative applications.
          </p>
        </div>
      </div>
    </section>
  );
};

const aboutStyle = {
  height: '90vh',
  padding: '50px',
  background: '#16213e',
  color: '#fff',
  textAlign: 'center',
};

const contentStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',
};

const textStyle = {
  flex: '1',
  textAlign: 'left',
  marginLeft: '20px', // Adjusted to create space between image and text
};

const headingStyle = {
  fontSize: '2.5em', // Adjust size as needed
  marginBottom: '0px', // Space below the heading
  color:'#1E90FF'
};

const paragraphStyle = {
  fontSize: '1.2em', // Adjust size as needed
  lineHeight: '1.6', // Improve readability
};

const imageStyle = {
  flex: '0 0 auto', // Prevents image from stretching
  width: '300px', // Set the width for the circular image
  height: '300px', // Set the height for the circular image
  borderRadius: '50%', // Makes the image circular
  objectFit: 'cover', // Ensures the image covers the area nicely
  border: '2px solid #fff', // Optional: adds a border around the image
  marginRight: '30px', // Adds some space between the image and text
};

export default About;
