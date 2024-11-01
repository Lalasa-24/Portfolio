import React from 'react';
// Import FontAwesome icons
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPython, FaDatabase, FaGithub, FaTools } from 'react-icons/fa';
import { SiMongodb, SiVisualstudiocode, SiPostman, SiVercel } from 'react-icons/si'; // Importing Postman and Vercel icons

const Skills = () => {
  return (
    <section id="skills" style={skillsStyle}>
      <h2 style={h2Style}>Skills</h2>
      
      {/* Grid for All Skills (single column layout) */}
      <div style={gridContainerStyle}>
        {/* Skills Icons */}
        <div style={skillsGridStyle}>
          {skills.map((skill, index) => (
            <div key={index} style={skillItemStyle}>
              {skill.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Define an array with icons for skills
const skills = [
  { icon: <FaHtml5 size={60} color="#E34C26" /> },
  { icon: <FaCss3Alt size={60} color="#264DE4" /> },
  { icon: <FaJsSquare size={60} color="#F0DB4F" /> },
  { icon: <FaReact size={60} color="#61DBFB" /> },
  { icon: <FaPython size={60} color="#306998" /> },
  { icon: <FaJava size={60} color="#007396" /> },
  { icon: <FaDatabase size={60} color="#336791" /> },
  { icon: <SiMongodb size={60} color="#4DB33D" /> },
  { icon: <FaGithub size={60} color="#181717" /> },
  { icon: <SiVisualstudiocode size={60} color="#007ACC" /> },
  { icon: <SiPostman size={60} color="#FF6C37" /> },
  { icon: <SiVercel size={60} color="#000000" /> },
  { icon: <FaTools size={60} color="#1B6AC6" /> },
];

// Styles
const skillsStyle = {
  padding: '50px',
  background: 'linear-gradient(90deg, #1a1a2e, #16213e)',
  color: '#fff',
  textAlign: 'center',
  height: '90vh',
};

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr', // Single column layout
  gap: '40px',
  marginLeft: '3%',
  marginRight: '3%',
};

const skillsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)', // Display 5 icons in a row
  gap: '20px',
};

const skillItemStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#16213e',
  transition: 'transform 0.3s, background-color 0.3s',
};

// Styles for headings
const h2Style = {
  color: 'white',
  fontSize: '30px',
};

export default Skills;
