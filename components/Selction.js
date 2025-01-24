// src/components/Section.js
import React from "react";

const Section = ({ title, children }) => {
  return (
    <section style={sectionStyle}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

const sectionStyle = {
  padding: "1rem",
  margin: "1rem auto",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  maxWidth: "800px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

export default Section;
