import React, { useState, useEffect } from "react";
import "../assets/styles/hero.css";
import "../assets/styles/Navbar.css";
import heroImage from "../assets/images/hero-image.png";
import { motion } from 'framer-motion';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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

  useEffect(() => {
    const targetDate = new Date('2025-04-17T00:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-image">
        <img src={heroImage} alt="Greenov Hackathon" />
      </div>
      <div className="hero-content">
        <h1>Greenov Hackathon</h1>
        <p className="date">April 17 - April 19, 2025</p>
        
        <div className="countdown">
          <div className="countdown-item">
            <span className="number">{timeLeft.days}</span>
            <span className="label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="number">{timeLeft.hours}</span>
            <span className="label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="number">{timeLeft.minutes}</span>
            <span className="label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="number">{timeLeft.seconds}</span>
            <span className="label">Seconds</span>
          </div>
        </div>

        <p className="description">
          Join us in innovating for a greener future through technology! 
          Build sustainable solutions, connect with industry experts, and ............
        </p>
        <div className="features">
          <div className="feature">
            <span className="feature-icon">👥</span>
            <span className="feature-text">Team work</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🌱</span>
            <span className="feature-text">Sustainable Focus</span>
          </div>
        </div>
        <div className="cta-buttons">
          <a href="#register" className="cta primary" onClick={smoothScroll}>Register Now</a>
          <a href="#hiw" className="cta secondary" onClick={smoothScroll}>How it works</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;