import React from "react";
import "../assets/styles/hiw.css"; // Importing CSS for styling
import hiw1 from "../assets/images/hiw1.png"; // Replace with your image path
import hiw2 from "../assets/images/hiw2.png"; // Replace with your image path
import hiw3 from "../assets/images/hiw3.png"; // Replace with your image path

const Hiw = () => {
  return (
    <section className="how-it-works">
      {/* Title and Description */}
      <div className="title-section">
        <h2>How It Works</h2>
        <p>Discover the process of Greenov Hackathon in simple steps.</p>
      </div>
      
      <div className="how-it-works-sections">
  <div className="how-it-works-container">
    <div className="step">
      <div className="step-text">
        <h3>Step 1: Ideation</h3>
        <p>Brainstorm and define your green tech solution.</p>
      </div>
      <img src={hiw1} alt="Step 1" />
    </div>

    <div className="step">
      <div className="step-text">
        <h3>Step 2: Development</h3>
        <p>Start coding and bring your idea to life.</p>
      </div>
      <img src={hiw2} alt="Step 2" />
    </div>

    <div className="step">
      <div className="step-text">
        <h3>Step 3: Presentation</h3>
        <p>Pitch your project and impress the judges.</p>
      </div>
      <img src={hiw3} alt="Step 3" />
    </div>
  </div>
</div>

    </section>
  );
};

export default Hiw;