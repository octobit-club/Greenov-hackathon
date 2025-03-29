import React, { useState, useEffect, useRef } from "react";
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
  
  // Falling leaves refs
  const containerRef = useRef(null);
  const leavesRef = useRef([]);
  const worldRef = useRef(null);
  const timerRef = useRef(0);
  const optionsRef = useRef({
    numLeaves: 20,
    wind: {
      magnitude: 1.2,
      maxSpeed: 12,
      duration: 300,
      start: 0,
      speed: 0
    }
  });
  
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
  
  // Countdown timer effect
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
  
  // Falling leaves functions
  const resetLeaf = (leaf) => {
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;
    
    // place leaf towards the top left
    leaf.x = width * 2 - Math.random() * width * 1.75;
    leaf.y = -10;
    leaf.z = Math.random() * 200;
    if (leaf.x > width) {
      leaf.x = width + 10;
      leaf.y = Math.random() * height / 2;
    }
    // at the start, the leaf can be anywhere
    if (timerRef.current === 0) {
      leaf.y = Math.random() * height;
    }

    // Choose axis of rotation.
    leaf.rotation.speed = Math.random() * 10;
    const randomAxis = Math.random();
    if (randomAxis > 0.5) {
      leaf.rotation.axis = 'X';
    } else if (randomAxis > 0.25) {
      leaf.rotation.axis = 'Y';
      leaf.rotation.x = Math.random() * 180 + 90;
    } else {
      leaf.rotation.axis = 'Z';
      leaf.rotation.x = Math.random() * 360 - 180;
      leaf.rotation.speed = Math.random() * 3;
    }

    // random speed
    leaf.xSpeedVariation = Math.random() * 0.8 - 0.4;
    leaf.ySpeed = Math.random() + 1.5;

    return leaf;
  };

  const updateLeaf = (leaf) => {
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;
    
    const leafWindSpeed = optionsRef.current.wind.speed(timerRef.current - optionsRef.current.wind.start, leaf.y);

    const xSpeed = leafWindSpeed + leaf.xSpeedVariation;
    leaf.x -= xSpeed;
    leaf.y += leaf.ySpeed;
    leaf.rotation.value += leaf.rotation.speed;

    let t = `translateX(${leaf.x}px) translateY(${leaf.y}px) translateZ(${leaf.z}px) rotate${leaf.rotation.axis}(${leaf.rotation.value}deg)`;
    if (leaf.rotation.axis !== 'X') {
      t += ` rotateX(${leaf.rotation.x}deg)`;
    }
    
    leaf.el.style.transform = t;
    leaf.el.style.WebkitTransform = t;
    leaf.el.style.MozTransform = t;
    leaf.el.style.oTransform = t;

    // reset if out of view
    if (leaf.x < -10 || leaf.y > height + 10) {
      resetLeaf(leaf);
    }
  };

  const updateWind = () => {
    const height = containerRef.current.offsetHeight;
    
    // wind follows a sine curve
    if (timerRef.current === 0 || timerRef.current > (optionsRef.current.wind.start + optionsRef.current.wind.duration)) {
      optionsRef.current.wind.magnitude = Math.random() * optionsRef.current.wind.maxSpeed;
      optionsRef.current.wind.duration = optionsRef.current.wind.magnitude * 50 + (Math.random() * 20 - 10);
      optionsRef.current.wind.start = timerRef.current;

      const screenHeight = height;

      optionsRef.current.wind.speed = function(t, y) {
        // should go from full wind speed at the top, to 1/2 speed at the bottom, using leaf Y
        const a = this.magnitude / 2 * (screenHeight - 2 * y / 3) / screenHeight;
        return a * Math.sin(2 * Math.PI / this.duration * t + (3 * Math.PI / 2)) + a;
      };
    }
  };

  const animate = () => {
    if (!containerRef.current) return;
    
    updateWind();
    leavesRef.current.forEach(leaf => {
      updateLeaf(leaf);
    });

    timerRef.current++;
    requestAnimationFrame(animate);
  };

  // Falling leaves initialization
  useEffect(() => {
    if (!containerRef.current) return;
    
    worldRef.current = document.createElement('div');
    worldRef.current.className = 'leaf-scene';
    containerRef.current.appendChild(worldRef.current);

    // Create leaves
    leavesRef.current = [];
    for (let i = 0; i < optionsRef.current.numLeaves; i++) {
      const leafDiv = document.createElement('div');
      const leaf = {
        el: leafDiv,
        x: 0,
        y: 0,
        z: 0,
        rotation: {
          axis: 'X',
          value: 0,
          speed: 0,
          x: 0
        },
        xSpeedVariation: 0,
        ySpeed: 0
      };
      
      resetLeaf(leaf);
      leavesRef.current.push(leaf);
      worldRef.current.appendChild(leafDiv);
    }

    // Set perspective
    worldRef.current.style.perspective = "400px";
    worldRef.current.style.WebkitPerspective = "400px";
    worldRef.current.style.MozPerspective = "400px";
    worldRef.current.style.oPerspective = "400px";

    // Handle resize
    const handleResize = () => {
      if (containerRef.current) {
        // Update dimensions if needed
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Start animation
    requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && worldRef.current) {
        containerRef.current.removeChild(worldRef.current);
      }
    };
  }, []);
  
  return (
    <section id="home" className="hero">
      {/* Falling leaves container - directly inside the Hero component */}
      <div ref={containerRef} className="falling-leaves"></div>
      
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
        <div className="cta-buttons" >
          <a href="#register"  className="cta primary" onClick={smoothScroll}>Register Now</a>
          <a href="#hiw" className="cta secondary" onClick={smoothScroll}>How it works</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;