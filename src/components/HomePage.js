import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedPageSection from "../components/FeaturedPageSection";
import BannerSection from "../components/BannerSection";
import CTOSection from "../components/CTOSection";
import FeaturedCategoriesSection from "../components/FeaturedCategoriesSection";
import FooterSection from "../components/FooterSection";


export default function HomePage(props) {
  return (
    
      <>
        
          <HeroSection />
          <FeaturedPageSection />
          <BannerSection />
          <CTOSection />
          <FeaturedCategoriesSection />
          <FooterSection />
        
      </>
    
  );
}
