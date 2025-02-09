import React from "react";
import "./Footer.css"; // Ensure the styles are in a separate CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column logo-column">
          <h2 className="footer-logo">ShenCarCar</h2>
          <p>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li>
              <button className="link-button">How it works</button>
            </li>
            <li>
              <button className="link-button">Featured</button>
            </li>
            <li>
              <button className="link-button">Partnership</button>
            </li>
            <li>
              <button className="link-button">Business Relation</button>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Community</h4>
          <ul>
            <li>
              <button className="link-button">Events</button>
            </li>
            <li>
              <button className="link-button">Blog</button>
            </li>
            <li>
              <button className="link-button">Podcast</button>
            </li>
            <li>
              <button className="link-button">Invite a friend</button>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Socials</h4>
          <ul>
            <li>
              <button className="link-button">Discord</button>
            </li>
            <li>
              <button className="link-button">Instagram</button>
            </li>
            <li>
              <button className="link-button">Twitter</button>
            </li>
            <li>
              <button className="link-button">Facebook</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2025 ShenCarCar. All rights reserved</p>
        <div className="footer-links">
          <button className="link-button">Privacy & Policy</button>
          <button className="link-button">Terms & Condition</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
