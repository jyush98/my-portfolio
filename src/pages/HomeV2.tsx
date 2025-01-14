import React from "react";
import "../styles/Home.css";
import HeroContent from "../components/home/hero/HeroContent";
import NavIconLinks from "../components/home/hero/NavIconLinks";
import NavBar from "../components/NavBar";
import HeroSectionTechnologies from "../components/home/hero/HeroSectionTechnologies";
import Experience from "../components/home/experience/Experience";

const HomeV2: React.FC = () => {
  return (
    <div className="home-container dark-backgrounnd">

      <div className="left-column dark-background">
        <HeroContent/>
        <NavBar/>
        <NavIconLinks/>
      </div>

      {/* Right Side */}
      <div className="right-column dark-background">
        <div id="technologies" className="section">
          <h2 className="figtree-heading">Technologies</h2>
          <HeroSectionTechnologies/>
        </div>
        <div id="experience" className="section">
          <h2 className="figtree-heading">Experience</h2>
          <Experience/>
        </div>
        <div id="projects" className="section">
          <h2 className="figtree-heading">Projects</h2>
          <p>Content coming soon...</p>
          <p>Content coming soon...</p>
          <p>Content coming soon...</p>
          <p>Content coming soon...</p>
          <p>Content coming soon...</p>
          <p>Content coming soon...</p>
          <p>Content coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default HomeV2;
