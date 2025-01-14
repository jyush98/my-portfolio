import React from "react";
import "../styles/NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list ibm-plex-mono-medium-italic">
        <li className="text-orange-hover"><a href="#technologies">technologies</a></li>
        <li className="text-yellow-hover"><a href="#experience">experience</a></li>
        <li className="text-green-hover"><a href="#projects">projects</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
