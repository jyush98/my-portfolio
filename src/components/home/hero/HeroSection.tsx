import React from "react";
import ProfileImage from "./ProfileImage";
import HeroContent from "./HeroContent";
import "../../../styles/hero-section.css"
// import AsciiArtAnimation from "./AsciiArtAnimation";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section" id="hero-container">
      <ProfileImage />
      {/* <AsciiArtAnimation/> */}
      <HeroContent />
    </div>
  );
};

export default HeroSection;
