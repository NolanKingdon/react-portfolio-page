import React, { Component } from 'react';
import whiteX from './images/white-X.png';
import './css/slider.css';

class WorkSlider extends Component {

  handleSliderExit(){
    console.log("Clicked");
    this.props.sliderToggle();
  }

  render(){
    {/*TODO - Just make a more efficient component and DRY*/}
    return(
        <div className = "education-info-slider" style = {this.props.sliderStyles}>
          <button className = "info-slider-exit-button" onClick = {() => this.handleSliderExit()}>
            <img src = {whiteX} className = "info-slider-exit-button-image" alt = "white X"/>
          </button>
          <div className = "info-slider-text-body">
            <h1 className = "info-slider-text-header">{this.props.currentProject}</h1>
              {this.props.currentProject === "Test Title" &&
                <div>
                  <h3 className = "info-slider-text-dates">Test Dates</h3>
                  <hr className = "info-slider-hr"/>
                  <p className = "info-slider-text-description">
                      MIT Core computer science courses - Online and through OCW
                  </p>
                  <ul>
                    <li>Course Content</li>
                    <li>Course Content</li>
                    <li>Course Content</li>
                    <li>Course Content</li>
                  </ul>
                </div>
              }
          </div>
      </div>
    )
  }
}

export default WorkSlider;
