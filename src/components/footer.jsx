import React from 'react';

import '../assets/styles/footer.css';
import { ArrowRight,Dribbble, Facebook, Twitter, Instagram, Linkedin, ChevronRight, Mail, Send, MapPin, Phone, Clock, Heart } from 'lucide-react';

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
          <h4>Contact Us</h4>
          <p><i className="fas fa-envelope"></i> info@greenov.com</p>
          <p><i className="fas fa-phone"></i> +1 (234) 567-8900</p>
          <p><i className="fas fa-map-marker-alt"></i> Tech Hub, Innovation Street</p>
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
        <div className="copyright">
          <p>&copy; 2025 Greenov Hackathon. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};


export default Footer;


