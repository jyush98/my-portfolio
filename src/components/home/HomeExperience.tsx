import React from "react";
import HomeSection from "./HomeSection";

const HomeExperience: React.FC = () => {
  const sections = [
    {
      heading: "/about me",
      blurb: "I am a FullStack Software Engineer with a passion for creating scalable, efficient, and user-friendly applications. I thrive in collaborative environments and enjoy tackling complex problems.",
      color: "orange"
    },
    {
      heading: "/about me",
      blurb: "I am a FullStack Software Engineer with a passion for creating scalable, efficient, and user-friendly applications. I thrive in collaborative environments and enjoy tackling complex problems.",
      color: "yellow"
    },
    {
      heading: "/about me",
      blurb: "I am a FullStack Software Engineer with a passion for creating scalable, efficient, and user-friendly applications. I thrive in collaborative environments and enjoy tackling complex problems.",
      color: "green"
    },
  ];

  return (
    <section className="home-experience-container">
        <h2 className="experience-header text-blue ibm-plex-mono-medium-italic">
          /Experience</h2>
        {sections.map((section, index) => (
          <HomeSection
            key={index}
            heading={section.heading}
            blurb={section.blurb}
            color={"text-"+section.color}
          />
        ))}
    </section>
  );
};

export default HomeExperience;
