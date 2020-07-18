import React, { Component } from 'react';
import './css/contact.css';
import GMAIL from "./images/gmailCircle.png";
import PHONE from "./images/phoneIcon.png";
import LINKEDIN from '../Nav-Bar/images/LinkedIn-Logo.png';

export default class Contact extends Component {
  render(){
    return(
      <div className = "about-container">
        <h1 id = "about-h1">I'd love to hear from you!</h1>
        <h2 id = "about-h2">Feel free to reach out to me using any of the below:</h2>
        <div className = "contact-grid">
          <a href = "mailto:nolan.kingdon@gmail.com" className = "contact-grid-item">
              <img src = {GMAIL} alt = "gmail" />
              <hr />
              <p id = "about-email">nolan.kingdon@gmail.com</p>
          </a>
          <a href = "https://www.linkedin.com/in/nolan-kingdon/" target = "_blank" rel = "noopener noreferrer" className = "contact-grid-item">
            <img src = {LINKEDIN} alt = "linkedin" />
            <hr />
            <p id = "about-linkedIn">LinkedIn</p>
          </a>
          <a href = "tel:9052201705" className = "contact-grid-item">
            <img src = {PHONE} alt = "phone" />
            <hr />
            <p id = "about-phone">(905) 220-1705</p>
          </a>
        </div>
      </div>
    );
  }
}
