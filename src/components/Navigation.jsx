import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "../styles/Navigation.css";

const Navigation = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav>
      <div className="navbar">
        <div className="nav-logo">
          <img src="images/portfolio.webp" alt="logo" />
        </div>
        <div className="nav-links">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            className="nav-links-button"
            onClick={scrollToTop}
          >
          <img className="nav-links-img" src="images/home.webp" alt="logo" />
            Home
          </ScrollLink>
          <ScrollLink
            to="work"
            smooth={true}
            duration={500}
            className="nav-links-button"
          >
          <img className="nav-links-img" src="images/about.webp" alt="logo" />
            About
          </ScrollLink>
          <ScrollLink
            to="project"
            smooth={true}
            duration={500}
            className="nav-links-button"
          >
          <img className="nav-links-img" src="images/portfolio.webp" alt="logo" />
            Portfolio
          </ScrollLink>
          <ScrollLink
            to="cv"
            smooth={true}
            duration={500}
            className="nav-links-button"
          >
          <img className="nav-links-img" src="images/cv.webp" alt="logo" />
            Resume
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="nav-links-button"
          >
          <img className="nav-links-img" src="images/contact.webp" alt="logo" />

            Contact
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
