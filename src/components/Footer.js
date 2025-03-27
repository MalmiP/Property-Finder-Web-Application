
import React from 'react';
import './Footer.css';

/* Footer component displaying social-media links and copyright information*/
const Footer = () => {
  return (
    <footer className="footer">
      <h3>Stay Connected</h3>
      {/* Links to social media profiles */}
      <div className="footer-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      {/* Footer bottom text */}
      <div className="footer-bottom">
        &copy; 2025 Visionary Homes. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
