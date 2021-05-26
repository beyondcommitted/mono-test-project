import React from "react";
import { Container } from "react-bootstrap";
function CTOSection() {
  return (
    <Container>
      <div className="CTO-Background">
        <h2
          style={{
            color:"white",
            position:"absolute",
            marginTop:"320px",
            marginLeft:"110px",
            width:"444px",
            height:"42px",
            left:"785px",
            fontFamily:"Source Serif Pro",
            fontStyle:"normal",
            fontWeight:"normal",
            fontSize:"36px",
            lineHeight:"45px",
            textAlign:"center",
            letterSpacing:"0.01em",
          }}
        >
          Brand Roots
        </h2>
        <p
          style={{
            color:"white",
            position:"absolute",
            marginTop:"405px",
            marginLeft:"110px",
            width:"487px",
            height:"43px",
            left:"764px",
            fontFamily:"Roboto",
            fontStyle:"normal",
            fontWeight:"normal",
            fontSize:"18px",
            lineHeight:"21px",
            textAlign:"center",
          }}
        >
          Traditional Elegance MEETS MODERN SOPHISTICATION with confidence,
          precision and the unexpected
        </p>
        <img
          className="CTO-Image"
          style={{
            height:"700px",
            width:"800px",
            marginLeft:"0",
            marginTop:"90px",
            marginBottom:"25px",
            marginRight:"850px",
          }}
          src="https://monosandboxst.wpengine.com/wp-content/uploads/2021/05/4.jpg"
          alt="CTO Pic"
        />
        <button className="CTO-Button">
          <p
            style={{
              position:"static",
              left:"14.98%",
              right:"14.98%",
              top:"25%",
              bottom:"25%",
              fontFamily:"Roboto",
              fontStyle:"normal",
              fontWeight:"normal",
              fontSize:"16px",
              lineHeight:"22px",
              display:"flex",
              alignItems:"center",
              textAlign:"center"
            }}
          >
            Explore The Hideoki Brand
          </p>
        </button>
      </div>
    </Container>
  );
}

export default CTOSection;
