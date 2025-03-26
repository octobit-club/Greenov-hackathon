import React from "react";
import "../assets/styles/Navbar.css"; // Importing CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Greenov 2025</div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#register" className="cta">Register</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;