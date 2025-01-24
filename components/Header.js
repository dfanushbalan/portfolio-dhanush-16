// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Dhanushbalan's Codefolio</h1>
      <nav>
        <ul style={navStyle}>
          <li><a href="#objective">Objective</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#extracurricular">Extracurricular</a></li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  padding: "1rem",
  textAlign: "center",
};

const navStyle = {
  listStyleType: "none",
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
};

export default Header;
