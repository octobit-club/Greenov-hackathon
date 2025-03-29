import React from "react";
import "../assets/styles/Navbar.css"; // Importing CSS for styling
import logoGif from "../assets/images/6-unscreen.gif";

const Navbar = () => {
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