import React, { Component } from 'react';
import whiteX from './images/white-X.png';
import './css/slider.css';

class WorkSlider extends Component {

  handleSliderExit(){
    this.props.sliderToggle();
  }

  render(){
    {/*Consider having a transparent div behind the currnet one so that when it slides in, you can't click the icons and mess everything up*/}
    return(
        <div className = "education-info-slider" style = {this.props.sliderStyles}>
          <button className = "info-slider-exit-button" onClick = {() => this.props.sliderToggle()}>
            <img src = {whiteX} className = "info-slider-exit-button-image" alt = "white X"/>
          </button>
          <div className = "info-slider-text-body">
            <h1 className = "info-slider-text-header">{this.props.currentCourse}</h1>
              {this.props.currentCourse === "Core Computer Science Courses" &&
                <div>
                  <h3 className = "info-slider-text-dates">Placeholder</h3>
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
