// App.js
import React, { useRef, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  const cursorRef = useRef(null);
  const outerCursorRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current && outerCursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        outerCursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Create starry background effect
    const container = appRef.current;
    const starsCount = 1000; // Increase number for more coverage
    const containerHeight = container.scrollHeight; // Get total scrollable height of the container

    for (let i = 0; i < starsCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * containerHeight}px`;
      star.style.left = `${Math.random() * 100}vw`;
      container.appendChild(star);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App" ref={appRef}>
      {/* Custom Cursor */}
      <div ref={outerCursorRef} className="custom-cursor outer" />
      <div ref={cursorRef} className="custom-cursor" />

      {/* Main Components */}
      <Header />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
