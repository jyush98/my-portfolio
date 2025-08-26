import React from "react";
import "./ProjectCard.css";

interface ProjectCardProps {
  date: string; // Start and end dates of the project
  title: string; // Project title
  description: string; // Brief project description
  technologies: string[]; // Technologies used in the project
  githubLink?: string; // Optional GitHub link
  projectLink?: string; // Optional project link
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  date,
  title,
  description,
  technologies,
  githubLink,
  projectLink,
}) => {
  return (
    <div className="project-card">
      {/* Left Column: Date/Details */}
      <div className="project-card-date">
        <p>{date}</p>
      </div>

      {/* Right Column: Project Title and Description */}
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="small-project-card-date">{date}</p>
        <p className="project-card-description">{description}</p>

        {/* Technologies */}
        <div className="card-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="experience-tech">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          {/* Project Link */}
          {projectLink && (
            <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          )}
          {/* GitHub Link */}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
              View Repo
            </a>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
