import React from 'react';
import '../assets/styles/footer.css';
import { ArrowRight, Dribbble, Facebook, Twitter, Instagram, Linkedin, ChevronRight, Mail, Send, MapPin, Phone, Clock, Heart } from 'lucide-react';
import octopusSvg from '../assets/images/Untitled design(1).svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <h3>Greenov Hackathon</h3>
          <p>Innovating for a sustainable future through technology and collaboration.</p>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#hiw">How It Work</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#sponsors">Sponsors</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Visit Octopus</h4>
          <a href="https://your-octopus-website.com" aria-label="Octopus Website" className="octopus-link">
            <div className="flex items-center justify-center relative" style={{ width: "150px", height: "150px" }}>
              <img 
                src={octopusSvg} 
                alt="Octopus Icon" 
                width="100%" 
                height="100%"
                className="transition-all duration-500 hover:scale-110"
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