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
              {this.props.currentProject === "Buona Vita Pizza Online Menu" &&
                <div>
                  <a href = {this.props.link}>{this.props.link}</a>
                  <hr className = "info-slider-hr"/>
                  <p className = "info-slider-text-description">
                      Buona Vita Pizza's online menu system. Currently designing a PHP based ordering system and PHP based backend for price updates.
                  </p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript/Jquery</li>
                    <li>PHP</li>
                  </ul>
                </div>
              }
              {this.props.currentProject === "JavaScript Calculator" &&
                <div>
                  <a href = {this.props.link}>{this.props.link}</a>
                  <hr className = "info-slider-hr"/>
                  <p className = "info-slider-text-description">
                    A basic JavaScript calculator that turned out really well. Uses JavaScript to do all the calculations and CSS3 to handle some button presses.
                  </p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS3</li>
                    <li>JavaScript/Jquery</li>
                  </ul>
                </div>
              }
              {this.props.currentProject === "JavaScript Calculator" &&
                <div>
                  <a href = {this.props.link}>{this.props.link}</a>
                  <hr className = "info-slider-hr"/>
                  <p className = "info-slider-text-description">
                    A basic JavaScript calculator that turned out really well. Uses JavaScript to do all the calculations and CSS3 to handle some button presses.
                  </p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS3</li>
                    <li>JavaScript/Jquery</li>
                  </ul>
                </div>
              }
          </div>
      </div>
    )
  }
}

export default WorkSlider;
