import React, { useEffect, useRef } from 'react';
import '../assets/styles/hiw.css';



const steps = [
  {
    id: 1,
    title: "Team Formation",
    description: "Assemble a dynamic team of 2-4 innovators. Blend diverse skills from development, design, and strategic problem-solving to create a powerhouse of creativity.",
    image: "/src/assets/images/hiw1.png"
  },
  {
    id: 2,
    title: "Challenge Selection",
    description: "Dive into groundbreaking sustainability challenges. Explore cutting-edge solutions in renewable energy, circular waste management, or regenerative agriculture.",
    image: "/src/assets/images/hiw2.png"
  },
  {
    id: 3,
    title: "Innovation Sprint",
    description: "Collaborate intensively over 48 hours. Transform ideas into impactful prototypes with guidance from industry-leading mentors and sustainability experts.",
    image: "/src/assets/images/hiw3.png"
  }
];

const Hiw = () => {
  const stepsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    stepsRef.current.forEach((step) => {
      if (step) {
        step.style.opacity = '0';
        step.style.transform = 'translateY(50px)';
        step.style.transition = 'all 0.6s ease-out';
        observer.observe(step);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hiw" className="how-it-works">
      <div className="how-it-works-header">
        <h2>Hackathon Journey</h2>
        <p>Embark on a transformative 48-hour innovation odyssey that turns sustainability challenges into breakthrough solutions</p>
      </div>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => (stepsRef.current[index] = el)}
            className={`step-wrapper ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
          >
            <div className="step-content">
              <div className="step-text">
                <div className="step-number">Stage {step.id}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <div className="step-image">
                <img src={step.image} alt={step.title} loading="lazy" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hiw;