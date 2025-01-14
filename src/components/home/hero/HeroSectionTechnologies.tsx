import React from "react";
import "./HeroSectionTechnologies.css";

const technologies = [
    { name: "React", iconClass: "fab fa-react" },
    { name: "JavaScript", iconClass: "fab fa-js" },
    { name: "Node.js", iconClass: "fab fa-node-js" },
    { name: "HTML5", iconClass: "fab fa-html5" },
    { name: "CSS3", iconClass: "fab fa-css3-alt" },
    { name: "Git", iconClass: "fab fa-git-alt" },
    { name: "Docker", iconClass: "fab fa-docker" },
];

const HeroSectionTechnologies: React.FC = () => {
    return (
        <div className="technologies-section">
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div key={tech.name} className="technology-card">
                        <i className={`${tech.iconClass} technology-icon`}></i>
                        <p className="technology-name">{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroSectionTechnologies;
