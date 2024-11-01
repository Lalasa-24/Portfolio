// StarryBackground.js
import React, { useEffect, useRef } from 'react';
import './StarryBackground.css'; // Create this CSS file for styling

function StarryBackground() {
    const starContainerRef = useRef(null);

    useEffect(() => {
        const container = starContainerRef.current;
        const starsCount = 100; // Number of stars
    
        for (let i = 0; i < starsCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            container.appendChild(star);
        }
    
        console.log(container.childNodes); // Logs stars to the console
    }, []);
    

    return <div className="starry-background" ref={starContainerRef}></div>;
}

export default StarryBackground;
