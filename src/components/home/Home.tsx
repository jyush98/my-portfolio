import React from "react";
import "./Home.css";
import HeroContent from "./hero/HeroContent";
import NavIconLinks from "./hero/NavIconLinks";
import NavBar from "../NavBar";
import Technologies from "./technologies/Technologies";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";

const HomeV2: React.FC = () => {
  return (
    <div className="home-container dark-background">
      <div className="left-column dark-background">
        <HeroContent />
        <NavBar />
        <NavIconLinks />
      </div>

      {/* Right Side */}
      <div className="right-column dark-background">
        <div id="technologies" className="section">
          <h2 className="figtree-heading">Technologies</h2>
          <Technologies />
        </div>
        <div id="experience" className="section">
          <h2 className="figtree-heading">Experience</h2>
          <Experience />
        </div>
        <div id="projects" className="section">
          <h2 className="figtree-heading">Projects</h2>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default HomeV2;
