// src/components/Footer/Footer.jsx
import React from "react";
import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";
import "./footerStyle.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <FooterLogo />
        <FooterLinks />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
