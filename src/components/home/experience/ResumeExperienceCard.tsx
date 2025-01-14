import React from "react";
import "./ResumeExperienceCard.css";

interface ResumeExperienceCardProps {
  date: string;
  title: string;
  company: string;
  description: string;
}

const ResumeExperienceCard: React.FC<ResumeExperienceCardProps> = ({ date, title, company, description }) => {
  return (
    <div className="resume-card">
      {/* Left Column: Date */}
      <div className="resume-card-date">
        <p>{date}</p>
      </div>
      {/* Right Column: Title, Company, Experience */}
      <div className="resume-card-content">
        <h3 className="resume-card-title">{title}</h3>
        <h4 className="resume-card-company">{company}</h4>
        <p className="resume-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ResumeExperienceCard;
