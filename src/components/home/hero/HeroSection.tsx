import React from "react";
import ProfileImage from "./ProfileImage";
import HeroContent from "./HeroContent";
import "../../../styles/hero-section.css"
// import HeroDecorations from "./HeroDecorations";
// import HeroSnowDecorations from "./HeroSnowDecorations";
// import HeroStarDecorations from "./HeroStarDecorations";
// import AsciiArtAnimation from "./AsciiArtAnimation";

const HeroSection: React.FC = () => {
    return (
        <div className="hero-section" id="hero-container">
            {/* <div style={{ gridColumn: "1 / span 3" }}>
                <HeroStarDecorations />
            </div> */}
            <ProfileImage />
            {/* <AsciiArtAnimation/> */}
            <HeroContent />
            {/* <div style={{ gridColumn: "10 / span 3" }}>
                <HeroStarDecorations />
            </div> */}
        </div>
    );
};

export default HeroSection;
