import React from "react";
import { Container } from "react-bootstrap";
import "../styles/BannerSection.css";

function BannerSection() {
  return (
    <Container>
      <div className="Vector">
        <div className="Banner-Section">
          <img
            className="Banner-Logo"
            src="https://monosandboxst.wpengine.com/wp-content/uploads/2021/05/mason.png"
            alt="Banner Logo"
          />
          <p className="Banner-Text">
            Elegant studio located within an enclave of beautifully designed
            shops of hidden gems.
          </p>
          <button className="Banner-Button">
            <a className="Banner-Button-Text" href="https://google.com">
              Explore The Studio
            </a>
          </button>
          <img
            className="Banner-Image"
            src="https://monosandboxst.wpengine.com/wp-content/uploads/2021/05/3.jpg"
            alt="Banner Section"
          />
        </div>
      </div>
    </Container>
  );
}

export default BannerSection;
