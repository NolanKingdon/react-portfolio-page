import React, { Component } from 'react';
import whiteX from './images/white-X.png';
import './css/slider.css';

class InfoSlider extends Component {

  handleSliderExit(){
    this.props.sliderToggle();
  }

  render(){
    return(
      <div className = "education-info-slider" style = {this.props.sliderStyles}>
        <button className = "info-slider-exit-button" onClick = {() => this.props.sliderToggle()}>
          <img src = {whiteX} className = "info-slider-exit-button-image"/>
        </button>
        <div className = "info-slider-text-body">
          <h1>Course Title</h1>
          <p>This was the course description</p>
          <ul>
            <li>Course Content</li>
            <li>Course Content</li>
            <li>Course Content</li>
            <li>Course Content</li>
          </ul>
        </div>
      </div>
    )
  }

}

export default InfoSlider;
