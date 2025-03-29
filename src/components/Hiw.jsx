import React, { useEffect, useRef } from "react";
import "../assets/styles/hiw.css";
import hiw1 from "../assets/images/hiw1.png";
import hiw2 from "../assets/images/hiw2.png";
import hiw3 from "../assets/images/hiw3.png";

const Hiw = () => {
  const stepsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const stepWrappers = document.querySelectorAll(".step-wrapper");
    stepWrappers.forEach((wrapper) => {
      observer.observe(wrapper);
    });

    return () => {
      stepWrappers.forEach((wrapper) => {
        observer.unobserve(wrapper);
      });
    };
  }, []);

  return (
    <section id="hiw" className="how-it-works">
      <div className="how-it-works-header">
        <h2>How It Works</h2>
        <p>Join our hackathon in four simple steps and be part of the sustainable innovation movement</p>
      </div>
      
      <div className="steps-container">
        <div className="step-wrapper text-left">
          <div className="step-content">
            <div className="step-text">
              <div className="step-number">Step 01</div>
              <h3>Register Your Team</h3>
              <p>Form your team of 2-4 members and register for Greenov 2025. Get ready to collaborate with creative minds and tackle sustainability challenges together.</p>
            </div>
            <div className="step-image">
              <img src={hiw1} alt="Register Your Team" />
            </div>
          </div>
        </div>

        <div className="step-wrapper text-right">
          <div className="step-content">
            <div className="step-text">
              <div className="step-number">Step 02</div>
              <h3>Submit Your Idea</h3>
              <p>Present your innovative solution for a sustainable future. Our experts will review your proposal and provide feedback to help you refine your concept.</p>
            </div>
            <div className="step-image">
              <img src={hiw2} alt="Submit Your Idea" />
            </div>
          </div>
        </div>

        <div className="step-wrapper text-left">
          <div className="step-content">
            <div className="step-text">
              <div className="step-number">Step 03</div>
              <h3>Build Your Solution</h3>
              <p>Work on your project during the hackathon with mentorship from industry experts. Transform your idea into a tangible prototype or solution.</p>
            </div>
            <div className="step-image">
              <img src={hiw3} alt="Build Your Solution" />
            </div>
          </div>
        </div>

        <div className="step-wrapper text-right">
          <div className="step-content">
            <div className="step-text">
              <div className="step-number">Step 04</div>
              <h3>Present & Win</h3>
              <p>Showcase your solution to our panel of judges and compete for exciting prizes. Gain visibility, network with industry leaders, and potentially secure funding for your project.</p>
            </div>
            <div className="step-image">
              <img src={hiw1} alt="Present & Win" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Keep the original structure for compatibility */}
      <div className="how-it-works-sections" style={{ display: 'none' }}>
        <div className="how-it-works-container">
          <div className="step">
            <div className="step-text">
              <h3>Register Your Team</h3>
              <p>Form your team of 2-4 members and register for Greenov 2025</p>
            </div>
            <img src={hiw1} alt="Register" />
          </div>

          <div className="step">
            <div className="step-text">
              <h3>Submit Your Idea</h3>
              <p>Present your innovative solution for a sustainable future</p>
            </div>
            <img src={hiw2} alt="Submit" />
          </div>

          <div className="step">
            <div className="step-text">
              <h3>Build Your Solution</h3>
              <p>Work on your project during the hackathon</p>
            </div>
            <img src={hiw3} alt="Build" />
          </div>

          <div className="step">
            <div className="step-text">
              <h3>Present & Win</h3>
              <p>Showcase your solution and win exciting prizes</p>
            </div>
            <img src={hiw1} alt="Present" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hiw;