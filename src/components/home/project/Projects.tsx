import React from "react";
import { projects } from "../../../content/projectContent"
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  return (
    <section className="experience-section figtree-body">
        {projects.map((project, index) => (
        <ProjectCard
          key={index} // Unique key for each item
          date={project.date}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          projectLink={project.projectLink}
        />
      ))}
    </section>
  );
};

export default Projects;