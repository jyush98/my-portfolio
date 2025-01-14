import React, { useEffect, useState } from "react";
import "./NavBar.css";

const sections = ["technologies", "experience", "projects"];

const NavBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5, // 50% of the section must be visible to trigger
    });

    sections.forEach((id) => {
      const sectionElement = document.getElementById(id);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-list ibm-plex-mono-medium-italic">
        <li className={`text-orange-hover ${activeSection === "technologies" ? "active" : ""}`}>
          <a href="#technologies">technologies</a>
        </li>
        <li className={`text-yellow-hover ${activeSection === "experience" ? "active" : ""}`}>
          <a href="#experience">experience</a>
        </li>
        <li className={`text-green-hover ${activeSection === "projects" ? "active" : ""}`}>
          <a href="#projects">projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
