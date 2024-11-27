import React from 'react';
// Import FontAwesome icons
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPython, FaDatabase, FaGithub, FaTools } from 'react-icons/fa';
import { SiMongodb, SiVisualstudiocode, SiPostman, SiVercel } from 'react-icons/si'; // Importing Postman and Vercel icons

const Skills = () => {
  return (
    <section id="skills" style={skillsStyle}>
      <h2 style={h2Style}>Skills</h2>
      <br></br>
      {/* Container for all skills */}
      <div style={flexContainerStyle}>
        {skills.map((skill, index) => (
          <div key={index} style={skillItemStyle}>
            {skill.icon}
          </div>
        ))}
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
  padding: '80px',
  background: 'linear-gradient(90deg, #1a1a2e, #16213e)',
  color: '#fff',
  textAlign: 'center',
  minHeight: '100vh', // Ensures the section takes up the full viewport height
  overflow: 'hidden', // Prevent content from spilling out
};

const flexContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap', // Allow items to wrap onto new lines
  justifyContent: 'center', // Center items horizontally
  gap: '80px', // Space between items
  marginLeft: '3%',
  marginRight: '3%',
  paddingBottom: '50px', // Add bottom padding to avoid content being too close to the edge
};

// Individual skill item styles
const skillItemStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#16213e',
  transition: 'transform 0.3s, background-color 0.3s',
  minWidth: '100px', // Ensure consistent size
  height: '100px',
  maxWidth: '120px', // Limit size on large screens
  width: 'calc(20% - 20px)', // 5 items per row (100% / 5 = 20%), subtract gap to fit
};

// Heading styles
const h2Style = {
  color: 'white',
  fontSize: '30px',
  marginBottom: '20px', // Space between heading and icons
};

// Responsive styles using media queries (added extra backticks)
const responsiveStyles = `
  @media (max-width: 768px) {
    #skills div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      gap: 20px;
      padding: 20px;
    }
    #skills div > div {
      width: calc(33.33% - 20px); /* 3 items per row on smaller screens */
    }
  }

  @media (max-width: 480px) {
    #skills div {
      display: flex;
      flex-wrap: wrap; 
      justify-content: center;
      gap: 20px;
      padding: 20px;
    }
    #skills div > div {
      width: calc(50% - 20px); /* 2 items per row on small screens */
    }
  }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = responsiveStyles;
document.head.appendChild(styleSheet);

export default Skills;
