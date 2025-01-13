import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav-bar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list ibm-plex-mono-medium-italic">
        <li className="text-orange-hover"><Link to="/">home</Link></li>
        <li className="text-yellow-hover"><Link to="/projects">projects</Link></li>
        <li className="text-green-hover"><Link to="/experience">resume</Link></li>
        <li className="text-purple-hover"><Link to="/articles">feed</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
