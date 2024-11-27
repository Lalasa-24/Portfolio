import React from "react";
import agreementTrackingImg from "./images/Legal.png";
import suicidalIdeationImg from "./images/Suicidal_Ideation.png";
import reactDashboardImg from "./images/Dashboard.png";
const Projects = () => {
  const projects = [
    {
      title: "Agreement Tracking",
      description:
        "Legal Agreement Tracking System is a software tool that organizes, monitors, and manages legal agreements, ensuring timely compliance and reducing risks associated with contract management.",
      githubLink: "https://github.com/Lalasa-24/Legal",
      demoLink: "",
      image: agreementTrackingImg,
    },
    {
      title: "Suicidal Ideation",
      description:
        "Research project that employs analytical techniques to examine social media content for indicators of suicidal thoughts and behaviors, aiming to identify patterns and provide insights for prevention strategies.",
      githubLink: "https://github.com/Lalasa-24/Suicidal_Ideation",
      demoLink: "https://demo-link.com",
      image: suicidalIdeationImg,
    },
    {
      title: "React-Dashboard",
      description:
        "A feature-rich React dashboard offering a responsive, customizable interface for tracking key metrics, managing tasks, and visualizing data through dynamic, interactive charts and widgets.",
      githubLink: "https://github.com/Lalasa-24/React-dashboard",
      demoLink: "https://react-dashboard-blue-chi.vercel.app",
      image: reactDashboardImg,
    },
  ];

  // Inline CSS Styles
  const styles = {
    section: {
      textAlign: "center",
      padding: "50px 0",
      backgroundColor: "#16213e",
      color: "#fff",
    },
    h2: {
      fontSize: "2.5rem",
      color: "#fff",
      marginBottom: "20px",
    },
    span: {
      color: "#1E90FF",
    },
    p: {
      fontSize: "1.2rem",
      marginBottom: "40px",
    },
    projectsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
    },
    card: {
      backgroundColor: "#1e1e3f",
      borderRadius: "10px",
      padding: "20px",
      width: "300px",
      textAlign: "center",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    },
    img: {
      maxWidth: "100%",
      borderRadius: "10px",
      marginBottom: "15px",
    },
    h3: {
      fontSize: "1.5rem",
      marginBottom: "10px",
      color: "#fff",
    },
    cardText: {
      fontSize: "1rem",
      color: "#c4c4e4",
      marginBottom: "20px",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
    },
    button: {
      backgroundColor: "#1E90FF",
      color: "black",
      padding: "10px 15px",
      borderRadius: "5px",
      textDecoration: "none",
      fontWeight: "bold",
    },
    buttonHover: {
      backgroundColor: "#1E90FF",
    },
  };

  return (
    <section id="projects" style={styles.section}> {/* Ensure ID is set here */}
      <h2 style={styles.h2}>
        My Recent <span style={styles.span}>Works</span>
      </h2>
      <p style={styles.p}>Here are a few projects I've worked on recently.</p>
      <div style={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <img src={project.image} alt={project.title} style={styles.img} />
            <h3 style={styles.h3}>{project.title}</h3>
            <p style={styles.cardText}>{project.description}</p>
            <div style={styles.buttonContainer}>
              <a
                href={project.githubLink}
                style={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  style={styles.button}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
