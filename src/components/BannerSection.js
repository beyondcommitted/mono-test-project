import React from "react";
import { Container } from "react-bootstrap";

function BannerSection() {
  return (
    <Container>
      <div className="Vector">
        <div className="Banner-Section">
          <img
            className="Banner-Logo"
            style={{
              marginTop: "100px",
              marginRight: "450px",
            }}
            src="https://monosandboxst.wpengine.com/wp-content/uploads/2021/05/mason.png"
            alt="Banner Logo"
          />
          <p
            style={{
              position: "absolute",
              color: "white",
              width: "428px",
              height: "44px",
              marginTop: "40px",
              marginLeft: "277px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "18px",
              lineHeight: "21px",
              textAlign: "center",
            }}
          >
            Elegant studio located within an enclave of beautifully designed
            shops of hidden gems.
          </p>
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "11px 40px",
              position: "absolute",
              width: "213px",
              height: "44px",
              marginLeft: "385px",
              marginTop: "100px",
              background: "white",
              border: "1px solid",
            }}
          >
            <p
              style={{
                position: "static",
                left: "18.78%",
                right: "18.78%",
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
              }}
            >
              Explore The Studio
            </p>
          </button>
          <img
            className="Banner-Image"
            style={{
              position: "absolute",
              width: "520px",
              height: "542px",
              left: "965px",
            }}
            src="https://monosandboxst.wpengine.com/wp-content/uploads/2021/05/3.jpg"
            alt="Banner Section"
          />
        </div>
      </div>
    </Container>
  );
}

export default BannerSection;
