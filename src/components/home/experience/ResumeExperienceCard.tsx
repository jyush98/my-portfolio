import React from "react";
import "./ResumeExperienceCard.css";

interface ResumeExperienceCardProps {
    date: string;
    title: string;
    company: string;
    description: [];
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
                <ul className="bulleted-description">
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ResumeExperienceCard;
