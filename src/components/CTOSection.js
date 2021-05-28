import React from "react";
import { Container } from "react-bootstrap";
import "../styles/CTOSection.css";

function CTOSection() {
  return (
    <Container>
      <div className="CTO-Background">
        <h2 className="Brand-Roots">Brand Roots</h2>
        <p className="CTO-Text">
          Traditional Elegance MEETS MODERN SOPHISTICATION with confidence,
          precision and the unexpected
        </p>
        <img
          className="CTO-Image"
          src="https://monosandboxst.wpengine.com/wp-content/uploads/2021/05/4.jpg"
          alt="CTO Pic"
        />
        <button className="CTO-Button">
          <a className="CTO-Button-Text" href="https://google.com">
            Explore The Hideoki Brand
          </a>
        </button>
      </div>
    </Container>
  );
}

export default CTOSection;
