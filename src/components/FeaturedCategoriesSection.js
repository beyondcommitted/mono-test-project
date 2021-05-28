import React from "react";
import "../styles/FeaturedCategoriesSection.css";

function FeaturedCategoriesSection() {
  return (
    <div className="FCS">
      <p className="Shop-Online">Shop Online</p>
      <div className="FCS-Left">
        <p className="Men-1">ME</p>
        <p className="Men-2">N</p>
      </div>
      <div className="FCS-Right">
        <p className="Women-1">WO</p>
        <p className="Women-2">MEN</p>
      </div>
    </div>
  );
}

export default FeaturedCategoriesSection;
