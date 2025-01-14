import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const NavIconLinks: React.FC = () => {
    return (
        <nav className="hero-icons">
            <a
                href="https://www.linkedin.com/in/jonathan-yushuvayev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <FaLinkedin className="icon" />
            </a>
            <a
                href="https://github.com/jyush98"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
            >
                <FaGithub className="icon" />
            </a>
            <a
                href="mailto:jyushuvayev98@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
            >
                <FaEnvelope className="icon" />
            </a>
        </nav>
    );
};

export default NavIconLinks;
