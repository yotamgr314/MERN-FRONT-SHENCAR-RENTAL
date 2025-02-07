// src/components/Footer/FooterLinks.jsx
import React from "react";

const linkSections = [
  {
    title: "About",
    links: ["How it works", "Featured", "Partnership", "Business Relation"],
  },
  {
    title: "Community",
    links: ["Events", "Blog", "Podcast", "Invite a friend"],
  },
  {
    title: "Socials",
    links: ["Discord", "Instagram", "Twitter", "Facebook"],
  },
];

const FooterLinks = () => {
  return (
    <div className="footer-links">
      {linkSections.map((section) => (
        <div className="footer-column" key={section.title}>
          <h3>{section.title}</h3>
          <ul>
            {section.links.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
