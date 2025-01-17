import React from "react";
import { resumeExperiences } from "../../../content/resumeContent"
import ResumeExperienceCard from "./ResumeExperienceCard";

const Experience: React.FC = () => {
  return (
    <section className="experience-section figtree-body">
        {resumeExperiences.map((experience, index) => (
        <ResumeExperienceCard
          key={index} // Unique key for each item
          date={experience.date}
          title={experience.title}
          company={experience.company}
          description={experience.description}
          technologies={experience.technologies}
        />
      ))}
    </section>
  );
};

export default Experience;