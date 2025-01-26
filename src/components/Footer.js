import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo Section */}
      <div className="footer-logo">
        <h2>Zapify</h2>
        <p>Fashion Style</p>
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram social-icon"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook social-icon"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter social-icon"></i>
          </a>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h3>Sale</h3>
          <a href="#discounts">Discounts</a>
          <a href="#news">News</a>
          <a href="#register-discounts">Register Discounts</a>
        </div>
        <div className="footer-column">
          <h3>About Us</h3>
          <a href="#about">About Zapify</a>
          <a href="#work-with-us">Work With Us</a>
          <a href="#company-profile">Company Profile</a>
        </div>
        <div className="footer-column">
          <h3>Buying</h3>
          <a href="#loyalty-card">Zapify Loyalty Card</a>
          <a href="#terms">Terms Of Use</a>
          <a href="#privacy-policy">Privacy Policy</a>
          
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <a href="#contact">Contact</a>
          <a href="#how-to-buy">How to Buy at Zapify</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
