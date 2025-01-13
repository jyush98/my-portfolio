import React from "react";
import ProfileImage from "./ProfileImage";
import HeroContent from "./HeroContent";
import "../../../styles/hero-section.css"

const HeroSection2: React.FC = () => {
    return (
        <div className="hero-section">
            <ProfileImage />
            <HeroContent />
        </div>
    );
};

export default HeroSection2;
