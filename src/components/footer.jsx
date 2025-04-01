import React, { useState, useRef } from 'react';
import '../assets/styles/footer.css';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
// Import just the GIF
import octopusGif from '../assets/images/octopus-animation.gif'; // Replace with your actual GIF path

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const gifRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Create a URL for a transparent 1x1 pixel image to use as placeholder
  const transparentPixel = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  
  const handleMouseEnter = () => {
    setIsHovering(true);
    if (gifRef.current) {
      // Load and play the GIF when hovering
      gifRef.current.src = octopusGif + '?t=' + new Date().getTime();
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (gifRef.current) {
      // Stop the GIF by replacing it with a transparent pixel
      // We'll use CSS to show a preview frame instead
      gifRef.current.src = transparentPixel;
    }
  };

  // We'll use this style to show a preview of the GIF when not hovering
  const previewStyle = {
    backgroundImage: `url(${octopusGif})`,
    backgroundPosition: '0 0', // First frame
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%'
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <h3>Greenov Hackathon</h3>
          <p>Innovating for a sustainable future through technology and collaboration.</p>
          <p>Join us in making a difference!</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#hiw">How It Works</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#sponsors">Sponsors</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Visit Octopus</h4>
          <a href="https://your-octopus-website.com" aria-label="Octopus Website" className="octopus-link">
            <div 
              className="flex items-center justify-center relative transition-all duration-500 hover:scale-110" 
              style={{ width: "150px", height: "150px" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* We use a div with background-image for the preview */}
              <div style={isHovering ? { display: 'none' } : previewStyle}></div>
              
              {/* The actual GIF only shows when hovering */}
              <img 
                ref={gifRef}
                src={transparentPixel}
                alt="Octopus Animation" 
                width="100%" 
                height="100%"
                style={{ display: isHovering ? 'block' : 'none' }}
              />
            </div>
          </a>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Greenov. All Rights Reserved.</p>
        <p>Made with <Heart size={14} style={{ color: '#ff6b6b', verticalAlign: 'middle', margin: '0 3px' }} /> for a sustainable future</p>
      </div>
    </footer>
  );
};

export default Footer;