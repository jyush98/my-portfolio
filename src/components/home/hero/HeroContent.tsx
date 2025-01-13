import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const HeroContent: React.FC = () => {
  return (
    <section className="hero-content">
      <h1 className="hero-heading ibm-plex-mono-medium-italic">Jonathan Yushuvayev</h1>
      <h2 className="hero-subheading ibm-plex-mono-medium-italic text-blue">FullStack Software Engineer</h2>
      <p className="hero-about"> A short description about yourself. This can include your professional
      background, interests, and what you're passionate about. A short description about yourself. This can include your professional
      background, interests, and what you're passionate about.</p>
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
    </section>
  );
};

export default HeroContent;
