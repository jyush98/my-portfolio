import React from "react";
// import ProfileImage from "./ProfileImage";
import HeroContent from "./HeroContent";
import "../../../styles/hero-section.css"
import HeroSectionTechnologies from "./HeroSectionTechnologies";

const HeroSection: React.FC = () => {
    return (
        <div className="hero-section">


            {/* <div style={{ gridColumn: "1 / span 3" }}>
                <HeroStarDecorations />
            </div> */}


            {/* <ProfileImage /> */}
            <HeroContent />
            <HeroSectionTechnologies/>


            {/* <div style={{ gridColumn: "10 / span 3" }}>
                <HeroStarDecorations />
            </div> */}
        </div>
    );
};

export default HeroSection;
