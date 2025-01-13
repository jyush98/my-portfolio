import React from "react";
import "./HomeSection.css";

interface HomeSectionProps {
  heading: string;
  blurb: string;
  color: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({ heading, blurb, color }) => {
  return (
    <div className="home-section">
      {/* Heading Section */}
      <div className="home-section-heading">
        <h2 className={"ibm-plex-mono-medium-italic " + color}>{heading}</h2>
      </div>

      {/* Blurb Section */}
      <div className="home-section-blurb">
        <p>{blurb}</p>
      </div>
    </div>
  );
};

export default HomeSection;
