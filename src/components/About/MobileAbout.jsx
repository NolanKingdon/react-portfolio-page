import React, { Component } from 'react';
import './css/about.css';
import selfImage from './images/linkedin.png';
import Animate from 'react-move/Animate';
import { easeExpOut, easeLinear } from 'd3-ease';

class MobileAboutPage extends Component {
  render(){

    return(
      <div className = "about" style = {{textAlign: "center"}}>
        <div className = "about-head">
            <div className = "about-text">
              <h1 id = "about-hello">Hello, World!</h1>
              <p id = "about-intro">My name is Nolan and I am a Software Development Student at Mohawk College.</p>
              <p id = "about-background">Feel free to explore my portfolio!</p>
            </div>
            <img src = {selfImage} className = "self-image" alt = "Self"/>
        </div>
      </div>
    )
  }
}

export default MobileAboutPage;
