import React from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-container" id="contact">
      <h1>Contact Me</h1>
      <div className="contact-details-text">
        <div className="contact-element">
          <h3>Address</h3>
          <p>Sweden</p>
        </div>
        <div className="contact-element">
          <h3>Mobile</h3>
          <p>+46 000 000 000</p>
        </div>
        <div className="contact-element">
          <h3>Email</h3>
          <p>johndoe@gmail.com</p>
        </div>
        <div className="contact-element">
          <h3>Website</h3>
          <a href="#">www.johndoe.com</a>
        </div>
      </div>
      <div className="socials-contact">
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

export default ContactForm;
