import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <ul className="footer-list ibm-plex-mono-medium-italic footer-nav">
        <li className="text-orange-hover">
          <Link to="/">home</Link>
        </li>
        <li className="text-yellow-hover">
          <Link to="/projects">projects</Link>
        </li>
        <li className="text-green-hover">
          <Link to="/experience">resume</Link>
        </li>
        <li className="text-purple-hover">
          <Link to="/articles">feed</Link>
        </li>
      </ul>
      {/* <div className="footer-contact">
        <h4 className="footer-contact-heading">Contact Me</h4>
        <ul className="contact-list">
          <li>
            <a href="mailto:youremail@example.com" className="contact-link">
              <i className="fas fa-envelope"></i> youremail@example.com
            </a>
          </li>
          <li>
            <a href="https://github.com/yourgithubprofile" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fab fa-github"></i> GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yourlinkedinprofile/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
        </ul>
      </div> */}
      <p className="footer-credit">
        &copy; {new Date().getFullYear()} Jonathan Yushuvayev. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;