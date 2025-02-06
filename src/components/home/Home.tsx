import React, { useState, useEffect } from "react";
import "./Home.css";
import HeroContent from "./hero/HeroContent";
import NavIconLinks from "./hero/NavIconLinks";
import NavBar from "../NavBar";
import Technologies from "./technologies/Technologies";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";

const Home: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  // Function to check screen width & height
  const handleResize = () => {
    const isSmallScreen = window.innerWidth < 800;
    setIsMobileView(isSmallScreen);
  };

  // Run on mount and whenever the window resizes
  useEffect(() => {
    handleResize(); // Check on first render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobileView ? <NavBar /> : null}
      <div className="home-container dark-background">
        <div className="left-column dark-background">
          <div className="left-column-content">
            <HeroContent />
            {!isMobileView && <NavBar />}
            <NavIconLinks />
          </div>
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
    </>
  );
};

export default Home;
