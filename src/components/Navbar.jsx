import React from "react";
import "../assets/styles/Navbar.css"; // Importing CSS for styling
import logoGif from "../assets/images/6-unscreen.gif";

const Navbar = () => {
  const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const startPosition = window.pageYOffset;
      const targetPosition = targetElement.getBoundingClientRect().top + startPosition - 80;
      const distance = targetPosition - startPosition;
      const duration = 2000;
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
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