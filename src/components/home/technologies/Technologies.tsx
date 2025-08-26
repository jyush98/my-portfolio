import React from "react";
import "./Technologies.css";
import { 
  FaJava, 
  FaPython, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaDocker, 
  FaDatabase 
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiNextdotjs,
  SiTailwindcss,
  SiFastapi,
  SiDjango,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiStripe,
  SiVercel
} from "react-icons/si";

const technologies = [
    // Languages
    { name: "Python", Icon: FaPython },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "JavaScript", Icon: FaJs },
    { name: "SQL", Icon: FaDatabase },
    { name: "Java", Icon: FaJava },
    
    // Frontend
    { name: "React", Icon: FaReact },
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "Tailwind CSS", Icon: SiTailwindcss },
    { name: "HTML5", Icon: FaHtml5 },
    { name: "CSS3", Icon: FaCss3Alt },
    
    // Backend
    { name: "FastAPI", Icon: SiFastapi },
    { name: "Node.js", Icon: FaNodeJs },
    { name: "Django", Icon: SiDjango },
    { name: "Express", Icon: SiExpress },
    
    // Databases
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "MySQL", Icon: SiMysql },
    { name: "Redis", Icon: SiRedis },
    
    // Tools
    { name: "Git", Icon: FaGitAlt },
    { name: "Docker", Icon: FaDocker },
    { name: "Stripe", Icon: SiStripe },
    { name: "Vercel", Icon: SiVercel },
];

const Technologies: React.FC = () => {
    return (
        <div className="technologies-section">
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div key={tech.name} className="technology-card">
                        <tech.Icon className="technology-icon" />
                        <p className="technology-name">{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
