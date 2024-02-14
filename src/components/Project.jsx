import React from "react";
import "../styles/Project.css";

const Project = () => {
  return (
    <div className="projects-container" id="project">
      <div className="my-projects">
        <h1>My Projects</h1>
      </div>
      <div className="project-card">
        <div className="project">
          <div className="img-container">
            <img className="project-img" src="/images/project1.png" />
            <div className="img-overlay"></div>
          </div>
          <div className="project-text-container">
            <h3 className="project-text-title">Spotify Clone</h3>
            <p className="project-text-subtitle">
              I developed a Spotify replica using the Spotify API, enabling
              users to log in to their actual Spotify accounts, access their
              personal playlists, and play, pause, and skip tracks within those
              playlists. This application utilizes JavaScript, React, Basic Auth
              for authentication, Material UI for styling, CSS for additional
              customization, and Git for version control.
            </p>
            <a
              href="https://nabil-spotify.vercel.app/"
              className="app-button"
            >
              View App
            </a>
          </div>
        </div>
        <div className="project">
          <div className="img-container">
            <img className="project-img" src="/images/project3.png" />
            <div className="img-overlay"></div>
          </div>

          <div className="project-text-container">
            <h3 className="project-text-title">Klarna Checkout</h3>
            <p className="project-text-subtitle">
              Integrates Klarna Checkout into a fictional store using Express
              and Node.js for a seamless e-commerce solution.
            </p>
            <a
              href="https://nabil-klarna-checkout.vercel.app/"
              className="app-button"
            >
              View App
            </a>
          </div>
        </div>

        <div className="project">
          <div className="img-container">
            <img className="project-img" src="/images/project2.png" />
            <div className="img-overlay"></div>
          </div>
          <div className="project-text-container">
            <h3 className="project-text-title">The Earth</h3>
            <p className="project-text-subtitle">
              Discover comprehensive country data effortlessly with our React.js
              app for a streamlined and engaging exploration of global
              information.
            </p>
            <a
              href="https://flag-api-nabil.netlify.app/"
              className="app-button"
            >
              View App
            </a>
          </div>
        </div>

        <div className="project">
          <div className="img-container">
            <img className="project-img" src="/images/project4.png" />
            <div className="img-overlay"></div>
          </div>
          <div className="project-text-container">
            <h3 className="project-text-title">Password Generator</h3>
            <p className="project-text-subtitle">
              Boost online security effortlessly with our password generator—a
              sleek HTML, CSS, and JS-powered app for creating strong, unique
              passwords.
            </p>
            <a
              href="https://nabil-password-generator.netlify.app/"
              className="app-button"
            >
              View App
            </a>
          </div>
        </div>
        <div className="project">
          <div className="img-container">
            <img className="project-img" src="/images/project6.png" />
            <div className="img-overlay"></div>
          </div>
          <div className="project-text-container">
            <h3 className="project-text-title">Light & Dark mode</h3>
            <p className="project-text-subtitle">
              A sleek one-page template using HTML, CSS, and JS, effortlessly
              switching between light and dark modes through DOM manipulation
              for a seamless user experience.
            </p>
            <a
              href="https://nabil-portfoliomode.netlify.app/"
              className="app-button"
            >
              View App
            </a>
          </div>
        </div>
        <div className="project">
          <div className="img-container">
            <img className="project-img" src="/images/project6.png" />
            <div className="img-overlay"></div>
          </div>
          <div className="project-text-container">
            <h3 className="project-text-title">Spotify Cards</h3>
            <p className="project-text-subtitle">
              Explore various captivating Spotify card designs on our HTML and
              CSS page.
            </p>
            <a
              href="https://nabil-spotify-cards.netlify.app/"
              className="app-button"
            >
              View App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
