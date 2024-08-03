

import React from 'react';
import './footer.css';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="The Pet Vibes Logo" className="logo" />
          <p className="mission">
            TPV is on a mission to be your trusted bridge, connecting pet owners with passionate and skilled pet service providers. With us, pet parents can discover a World of Services
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li>Pet Boarding</li>
              <li>Pet Events</li>
              <li>Pet Cafes</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright © 2024, thepetvibes.com
      </div>
    </footer>
  );
}

export default Footer;
