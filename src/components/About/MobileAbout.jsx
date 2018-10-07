import React, { Component } from 'react';
import './css/about.css';
import selfImage from './images/self-image-rotated.jpeg';
import Animate from 'react-move/Animate';
import { easeExpOut, easeLinear } from 'd3-ease';

class MobileAboutPage extends Component {
  render(){

    return(
      <div className = "about" style = {{textAlign: "center"}}>
        <div className = "about-head">
            <div className = "about-text">
              <h1 id = "about-hello">Hello.</h1>
              <p id = "about-intro">My name is Nolan - I am a web developer.</p>
              <p id = "about-background">I currently work at PowerSchool as a Project Manager.</p>
              <p id = "about-invitation">Feel free to explore my site.</p>
            </div>
            <img src = {selfImage} className = "self-image" alt = "Self"/>
        </div>
      </div>
    )
  }
}

export default MobileAboutPage;
