import React from "react";
import ExperienceCard from "./ExperienceCard";
import "./ExperienceSection.css";
import JasonLogo from "../../../../public/jasonlogo.svg"
import QvtLogo from "../../../../public/qvtlogo.jpg"
import BetterLogo from "../../../../public/betterlogo.jpg"

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      image: JasonLogo,
      company: "Jason & Co.",
      title: "Co-Founder",
      description: "Developed scalable web applications using React and Node.js.",
    },
    {
      image: QvtLogo,
      company: "QVT Financial LP",
      title: "FullStack Software Engineer",
      description: "Built APIs and optimized server-side processes for performance.",
    },
    {
      image: BetterLogo,
      company: "Better Mortgage",
      title: "Backend Developer",
      description: "Collaborated on user-facing features and fixed critical bugs.",
    },
  ];

  return (
    <section className="experience-section">
      <h2 className="experience-section-heading">Experience</h2>
      <div className="experience-section-cards">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            image={exp.image}
            company={exp.company}
            title={exp.title}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
