import React from "react";
import HeroContent from "./HeroContent";
import "./HeroSection.css"
import HeroSectionTechnologies from "./HeroSectionTechnologies";

const HeroSection: React.FC = () => {
    return (
        <div className="hero-section">
            <HeroContent />
            <HeroSectionTechnologies/>
        </div>
    );
};

export default HeroSection;
