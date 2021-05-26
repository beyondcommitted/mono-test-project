import React from "react";

function FeaturedCategoriesSection() {
  return (
    <div>
      <div
        style={{
          float: "left",
          width: "47%",
          marginTop: "180px",
          marginLeft: "35px",
          height: "650px",
          background: "black",
        }}
      >
        <p
          style={{
            position: "absolute",
            width: "380px",
            height: "45px",
            left: "572px",
            marginTop: "-100px",
            fontFamily: "Source Serif Pro",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "36px",
            lineHeight: "45px",
            textAlign: "center",
            letterSpacing: "0.01rem",
            color: "black",
          }}
        >
          Shop Online
        </p>
        <p
          style={{
            position: "absolute",
            width: "380px",
            height: "422px",
            left: "13px",
            marginTop: "-20px",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "264px",
            lineHeight: "80%",
            color: "white",
          }}
        >
          ME
        </p>
        <p
          style={{
            position: "absolute",
            width: "380px",
            height: "422px",
            left: "-73px",
            marginTop: "196px",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "264px",
            lineHeight: "80%",
            color: "white",
          }}
        >
          N
        </p>
      </div>
      <div
        style={{
          float: "right",
          width: "47%",
          marginTop: "180px",
          marginRight: "35px",
          height: "650px",
          background: "black",
        }}
      >
        <p
          style={{
            position: "absolute",
            width: "573px",
            height: "422px",
            left: "922px",
            marginTop: "208px",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "264px",
            lineHeight: "80%",
            textAlign: "right",
            color: "white",
          }}
        >
          WO
        </p>
        <p
          style={{
            position: "absolute",
            width: "573px",
            height: "422px",
            left: "904px",
            marginTop: "436px",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "264px",
            lineHeight: "80%",
            textAlign: "right",
            color: "white",
          }}
        >
          MEN
        </p>
      </div>
    </div>
  );
}

export default FeaturedCategoriesSection;
