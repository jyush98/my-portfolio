import React from "react";
import { heroContent } from "../../../content/heroContent";

const HeroContent: React.FC = () => {
  return (
    <section className="hero-content">
      <h1 className="hero-heading figtree-heading">Jonathan Yushuvayev</h1>
      <h2 className="hero-subheading ibm-plex-mono-medium-italic text-blue">Co-Founder & Full-Stack Software Engineer</h2>
      <p className="hero-about figtree-body">
        {heroContent.blurb.split("\n").map((line, index) => (
          <span key={index}>{line}<br /></span>
        ))}
      </p>
    </section>
  );
};

export default HeroContent;
