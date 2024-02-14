import React from "react";
import "../styles/Cv.css";

const Cv = () => {
  return (
    <div className="cv-section" id="cv">
      <h1>Resume</h1>
      <h2 className="cv-subtitle">
        My goal is to find a job where I have the opportunity to continue
        developing both professionally and personally.
      </h2>

      <div className="cv-row">
        <div className="cv-col">
        <h2 className="cv-category">Education</h2>


          <div className="cv-wrap">
            <span className="cv-date">2023 - 2024</span>
            <h2>MERN - Stack Development</h2>
            <span className="cv-position">Techover Academy</span>
            <p className="cv-description">
              Professionally trained by industry consultants to become a React
              developer.
            </p>
          </div>
          <div className="cv-wrap">
            <span className="cv-date">2021 - 2022</span>
            <h2>Web Programming</h2>
            <span className="cv-position">
              Blekinge Institute of Technology
            </span>
            <p className="cv-description">
              Acquire a comprehensive understanding and cultivate enduring
              opportunities within the field of web development, equipped with
              the expertise to seamlessly adapt tools according to specific
              requirements.
            </p>
          </div>
          <div className="cv-wrap">
            <span className="cv-date">2017 - 2020</span>
            <h2>Media Communication - Film & Photography</h2>
            <span className="cv-position">Törnströmska Gymnasiet</span>
            <p className="cv-description">
              I have completed a three-year program in Media Communication,
              specializing in Film and Photography at the high school level.
            </p>
          </div>
        </div>

        <div className="cv-col">
        <h2 className="cv-category">Experience</h2>

          <div className="cv-wrap">
            <span className="cv-date">2019 - 2024</span>
            <h2>Healthcare Assistant</h2>
            <span className="cv-position">Prima Hemtjänst</span>
            <p className="cv-description">
              In 2019, I undertook a temporary role as a healthcare assistant at
              Prima Hemtjänst. During this period, my responsibilities included
              visiting diverse clients and aiding them in their daily routines
              at home. Transitioning to a permanent position in May 2023, I
              persist in delivering dedicated care and assistance within the
              comfort of clients' home environments.
            </p>
          </div>
          <div className="cv-wrap">
            <span className="cv-date">2018-2023</span>
            <h2>Department of Functional Support</h2>
            <span className="cv-position">Karlskrona Kommun</span>
            <p className="cv-description">
              From 2018 to 2020, I served in summer substitute roles as a
              personal assistant within the Functional Support Administration at
              Karlskrona municipality. Simultaneously, I juggled part-time
              employment alongside my studies. Since September 2020, I have
              seamlessly transitioned into a permanent position, persisting in
              my commitment to deliver high-quality support in the realm of
              personal assistance.
            </p>
          </div>
          <div className="cv-wrap">
            <span className="cv-date">2017-2018</span>
            <h2>Swimming Trainer</h2>
            <span className="cv-position">Karlskrona Swimming Club</span>
            <p className="cv-description">
              During my tenure at the Karlskrona Swimming Club, I dedicated
              myself to the roles of a passionate swimming instructor and coach.
              Additionally, I underwent extensive training facilitated by the
              Swedish Lifeguard Association, concurrently fulfilling
              responsibilities as a certified lifeguard. Through my multifaceted
              contributions within the organization, I played an integral role
              in advancing the cause of swimming and fostering water safety.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
