import React from "react";
import "./ExperienceCard.css";

interface ExperienceCardProps {
  image: string;
  company: string;
  title: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ image, company, title, description }) => {
  return (
    <div className="experience-card">
      <img src={image} alt={`${company} logo`} className="experience-card-image" />
      <div className="experience-card-content">
        <h3 className="experience-card-heading">{company}</h3>
        <h4 className="experience-card-subheading text-blue ibm-plex-mono-medium-italic">{title}</h4>
        <p className="experience-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
