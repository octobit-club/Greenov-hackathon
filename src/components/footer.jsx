import React from 'react';
<<<<<<< HEAD
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
=======
import '../assets/styles/Footer.css';
import { ArrowRight,Dribbble, Facebook, Twitter, Instagram, Linkedin, ChevronRight, Mail, Send, MapPin, Phone, Clock, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/logo.svg" alt="Greenov Logo" />
          <p>
            Pioneering sustainable solutions for a greener future through innovative technology and community-driven initiatives. Together, we can make a difference for our planet.
          </p>
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
            <a href="#" aria-label="Dribbble">
              <Dribbble size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">
                <ChevronRight size={16} />
                Home
              </a>
            </li>
            <li>
              <a href="#about">
                <ChevronRight size={16} />
                About Us
              </a>
            </li>
            <li>
              <a href="#services">
                <ChevronRight size={16} />
                Our Services
              </a>
            </li>
            <li>
              <a href="#projects">
                <ChevronRight size={16} />
                Projects & Solutions
              </a>
            </li>
            <li>
              <a href="#team">
                <ChevronRight size={16} />
                Our Team
              </a>
            </li>
            <li>
              <a href="#blog">
                <ChevronRight size={16} />
                Blog & Resources
              </a>
            </li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h3>Get In Touch</h3>
          <ul>
            <li>
              <a href="#location">
                <MapPin size={16} />
                123 Eco Street, Green City, 10001
              </a>
            </li>
            <li>
              <a href="tel:+1234567890">
                <Phone size={16} />
                +1 (234) 567-890
              </a>
            </li>
            <li>
              <a href="mailto:info@greenov.com">
                <Mail size={16} />
                info@greenov.com
              </a>
            </li>
            <li>
              <a href="#hours">
                <Clock size={16} />
                Mon - Fri: 9AM - 6PM
              </a>
            </li>
          </ul>
          
          <div className="newsletter">
            <h4>Subscribe to our Newsletter</h4>
            <p>Stay updated with our latest innovations and sustainability tips</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                aria-label="Email address for newsletter"
              />
              <button type="submit" aria-label="Subscribe to newsletter">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Greenov. All Rights Reserved.</p>
        <p>Made with <Heart size={14} style={{ color: '#ff6b6b', verticalAlign: 'middle', margin: '0 3px' }} /> for a sustainable future</p>
>>>>>>> origin/med
      </div>
    </footer>
  );
};

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> origin/med
