import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";
import "../styles/FeaturedPageSection.css";

function FeaturedPageSection() {
  return (
    <Container>
      <div className="Vector">
        <img
          className="FPS1"
          src="https://monosandboxst.wpengine.com/wp-content/uploads/2021/05/home-featured-page-1-800x800-1.jpg"
          alt="FPS Section"
        />
        <p className="FPS-1-Text">Hideoki Bespoke</p>
        <button className="FPS-1-Button">
          <a className="link" href="https://google.com">
            Experience True BeSpoke
          </a>
        </button>
        <img
          className="FPS2"
          src="https://monosandboxst.wpengine.com/wp-content/uploads/2021/05/home-featured-pages-2-800x800-1.jpg"
          alt="FPS Section"
        />
        <p className="FPS-2-Text">Fresh Looks</p>
        <button className="FPS-2-Button">
          <a className="link" href="https://google.com">
            Discover The Looks
          </a>
        </button>
      </div>
    </Container>
  );
}

export default FeaturedPageSection;
