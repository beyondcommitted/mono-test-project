import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";


function FeaturedPageSection() {
  return (
    <Container>
      <div className="Vector"
      >
        <img
          className="FPS1"
          src="https://monosandboxst.wpengine.com/wp-content/uploads/2021/05/home-featured-page-1-800x800-1.jpg"
          alt="FPS Section"
        />
        <p
          style={{
            position: "absolute",
            width: "327px",
            height: "45px",
            left: "238px",
            top: "1169px",
            fontFamily: "Source Serif Pro",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "36px",
            lineHeight: "45px",
            textAlign: "center",
            letterSpacing: "0.01em",
            color: "white",
          }}
        >
          Hideoki Bespoke
        </p>
        <button
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "11px 40px",
            position: "absolute",
            width: "256px",
            height: "44px",
            left: "275px",
            top: "1268px",
            background: "white",
            border: "1px solid",
          }}
        >
          <p
            style={{
              position: "static",
              left: "15.44%",
              right: "15.44%",
              top: "25%",
              bottom: "25%",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "22px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              color: "black",
            }}
          >
            Experience True BeSpoke
          </p>
        </button>
        <img
          className="FPS2"
          src="https://monosandboxst.wpengine.com/wp-content/uploads/2021/05/home-featured-pages-2-800x800-1.jpg"
          alt="FPS Section"
        />
        <p
          style={{
            position: "absolute",
            width: "327px",
            height: "45px",
            left: "972px",
            top: "1169px",
            fontFamily: "Source Serif Pro",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "36px",
            lineHeight: "45px",
            textAlign: "center",
            letterSpacing: "0.01em",
            color: "white",
          }}
        >
          Fresh Looks
        </p>
        <button
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "11px 40px",
            position: "absolute",
            width: "220px",
            height: "44px",
            left: "1026px",
            top: "1268px",
            background: "white",
            border: "1px solid",
          }}
        >
          <p
            style={{
              position: "static",
              left: "18.18%",
              right: "18.18%",
              top: "25%",
              bottom: "25%",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "22px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              color: "black",
            }}
          >
            Discover The Looks
          </p>
        </button>
      </div>
    </Container>
  );
}

export default FeaturedPageSection;
