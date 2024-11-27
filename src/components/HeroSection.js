import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import lalasaImage from './images/lalasa.jpeg';

const HeroSection = () => {
  const designations = ["Software Engineer", "Web Developer", "Tech Enthusiast"];
  const [currentDesignationIndex, setCurrentDesignationIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 150;
  const deletingSpeed = 100;

  useEffect(() => {
    if (isTyping) {
      if (typingIndex < designations[currentDesignationIndex].length) {
        const timeout = setTimeout(() => {
          setTypedText((prev) => prev + designations[currentDesignationIndex][typingIndex]);
          setTypingIndex((prev) => prev + 1);
        }, typingSpeed);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, 2000);

        return () => clearTimeout(timeout);
      }
    }

    if (isDeleting) {
      if (typedText.length > 0) {
        const timeout = setTimeout(() => {
          setTypedText((prev) => prev.slice(0, -1));
        }, deletingSpeed);

        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setIsTyping(true);
        setTypingIndex(0);
        setCurrentDesignationIndex((prev) => (prev + 1) % designations.length);
      }
    }
  }, [typingIndex, isTyping, isDeleting, typedText, currentDesignationIndex]);

  return (
    <section id="home">
    
      <div className="text-container">
        <h1 style={{ fontSize: '2.3rem' }}>Hi There! <span className="wave">👋</span></h1>
        <h2 style={{ fontSize: '2.3rem' }}>
          I'M <span style={{ color: '#1E90FF' }}>LALASA NAVYA</span>
        </h2>
        <h3 className="designation">
          {typedText}<span className="cursor">{isTyping || isDeleting ? '|' : ''}</span>
        </h3>
      </div>
      <div className="image-container">
        <svg className="pulse-circle" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" />
        </svg>
        <img src={lalasaImage} alt="Lalasa Navya" className="shadow-effect" />
      </div>
    </section>
  );
};

export default HeroSection;
