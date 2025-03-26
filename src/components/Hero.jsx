import React from "react";
import "../assets/styles/hero.css"; // Import CSS
import heroImage from "../assets/images/hero-image.jpg"; // Replace with your image path

const Hero = () => {
  return (
    <section className="hero">
      {/* Left Side - Image */}
      <div className="hero-image">
        <img src={heroImage} alt="Greenov Hackathon" />
      </div>

      {/* Right Side - Text Content */}
      <div className="hero-content">
        <h1>Greenov Hackathon</h1>
        <p className="date">April 17 - April 19, 2025</p>
        <p className="description">
          Join us in innovating for a greener future through technology!
        </p>
        <button className="cta">Register Now</button>
      </div>
    </section>
  );
};

export default Hero;