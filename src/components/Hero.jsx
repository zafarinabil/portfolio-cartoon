import React, { useEffect, useState } from "react";
import "../styles/Hero.css";

const Hero = () => {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    // Check if the animation has already been played
    if (!animationPlayed) {
      // Add the 'animate' class to trigger the animation
      document.querySelector(".hero").classList.add("animate");

      // Set the state to indicate that the animation has been played
      setAnimationPlayed(true);
    }
  }, [animationPlayed]);

  return (
    <div className="hero">
      <div className="intro">
        {/* <h3>Hello!</h3> */}
        <div className="hero-name">
          {/* <p>I am</p> */}
          <h1>John Doe</h1>
        </div>
        <h2>Web Developer.</h2>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="resume-button">View Resume</button>
        </a>
      </div>

      <div className="hero-img">
        {/* Apply the lineup animation to the image */}
        <img src="images/ex.webp" alt="Nabil Zafari" />
      </div>

      <div className="socials">
        <a className="github-img" href="#">
          <img src="images/github.svg" alt="Github logo" />
        </a>
        <a href="#">
          <img src="images/linkedin.svg" alt="Linkedin logo" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
