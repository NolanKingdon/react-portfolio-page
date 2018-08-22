import React, { Component } from 'react';
import './css/about.css';
import selfImage from './images/self-image-rotated.jpeg';

class AboutPage extends Component {
  render(){
    return(
      <div className = "about" style = {{textAlign: "center"}}>
        <div className = "about-head">
          <img src = {selfImage} className = "self-image"/>
        </div>
      </div>
    )
  }
}

export default AboutPage;
