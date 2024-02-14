import React from "react";
import "../styles/Work.css";

const Work = () => {
  return (
    <section className="work">
      <h2 className="about-title">About me</h2>
      <div className="about-text">
        <p className="work-subtitle">
          I am a Web Developer skilled in the MERN stack, with expertise
          in React for front-end, MongoDB for databases, and Express/Node.js for
          server-side development. I bring a creative and technically proficient
          approach to projects, specializing in crafting visually appealing and
          responsive designs using HTML and CSS. My passion for contributing to
          innovative web solutions is coupled with a commitment to continuous
          learning and staying abreast of industry trends. Let's collaborate to
          bring your digital vision to life!
        </p>
      </div>
      <h2 className="work-title">My Skills</h2>

      <div className="skills-wrapper">
        <div className="skills">
          <img src="images/html.svg" alt="html" />
          <p> HTML</p>
        </div>
        <div className="skills">
          <img src="images/css.svg" alt="css" />
          <p>CSS</p>
        </div>
        <div className="skills">
          <img src="images/express-js.png" alt="express" />
          <p>Express Js</p>
        </div>
        <div className="skills">
          <img src="images/react.png" alt="react" />
          <p>React Js</p>
        </div>
        <div className="skills">
          <img src="images/mongodb.svg" alt="mongodb" />
          <p>MongoDB</p>
        </div>
        <div className="skills">
          <img src="images/node-js.svg" alt="node" />
          <p>Node Js</p>
        </div>
        <div className="skills">
          <img src="images/js.svg" alt="js" />
          <p>JavaScript</p>
        </div>
        <div className="skills">
          <img src="images/git.svg" alt="git" />
          <p>Git</p>
        </div>
      </div>
    </section>
  );
};

export default Work;
