import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
  
      <footer className="footer">
       
        <div className="footer-content">
          
  
          {/* Company Section */}
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/terms-of-services">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/">Anti-Discrimination Policy</Link></li>
              <li><Link to="/">UC Impact</Link></li>
              <li><Link to="/">Careers</Link></li>
            </ul>
          </div>
  
          {/* For Customers Section */}
          <div className="footer-section">
            <h3>For Customers</h3>
            <ul>
              <li><Link to="/refundable-policy">Refundable Policy</Link></li>
              <li><Link to="/">Categories Near You</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contactUs">Contact Us</Link></li>
            </ul>
          </div>
  
          {/* For Partners Section */}
          <div className="footer-section">
            <h3>For Partners</h3>
            <ul>
              <li><Link to="/register-as-professional">Register as a Professional</Link></li>
            </ul>
          </div>
  
          {/* Social Links Section */}
          <div className="footer-section">
            <h3>Social Links</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <CiFacebook className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FiTwitter className="social-icon" />
              </a>
            </div>
  
            <h3>Download Our App</h3>
            <div className="app-links">
              <a href="https://appstore.com" target="_blank" rel="noopener noreferrer">
                <img src="https://i.postimg.cc/Njh8H21b/Appstore.webp" alt="App Store" />
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <img src="https://i.postimg.cc/gcZK4PGg/Google-Play.webp" alt="Google Play" />
              </a>
            </div>
          </div>
        </div>
  
        {/* Copyright Notice */}
        <div className="footer-bottom">
          <p>© Copyright 2024 College Project All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
