import React from "react";
import "../assets/styles/Navbar.css"; // Importing CSS for styling
import logoGif from "../assets/images/6-unscreen.gif";

const Navbar = () => {
  const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
<<<<<<< HEAD
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
=======
      const startPosition = window.pageYOffset;
      const targetPosition = targetElement.getBoundingClientRect().top + startPosition - 80;
      const distance = targetPosition - startPosition;
      const duration = 800; // Reduced duration for smoother feel
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      // Improved easing function for smoother motion
      const easeInOutCubic = (t, b, c, d) => {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
      };

      requestAnimationFrame(animation);
    } else {
      // Fallback for register section if ID not found
      if (targetId === 'register') {
        const registerSection = document.querySelector('.register-section');
        if (registerSection) {
          const registerPosition = registerSection.getBoundingClientRect().top + window.pageYOffset - 80;
          const smoothScroll = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
              targetElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }
          };
        }
      }
>>>>>>> origin/med
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoGif} alt="Greenov 2025 Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#about" onClick={smoothScroll}>About Us</a></li>
        <li><a href="#contact" onClick={smoothScroll}>Contact</a></li>
        <a href="#register" className="cta primary" onClick={smoothScroll}>Register</a>
      </ul>
    </nav>
  );
};

export default Navbar;