// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>Contact: 8667627318 | dhanushbalan24@gmail.com</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/dhanushbalan24" target="_blank" rel="noopener noreferrer">dhanushbalan24</a></p>
      <p>Portfolio: <a href="#" target="_blank" rel="noopener noreferrer">Portfolio Link</a></p>
    </footer>
  );
};

const footerStyle = {
  background: "#222",
  color: "#fff",
  textAlign: "center",
  padding: "1rem",
};

export default Footer;
