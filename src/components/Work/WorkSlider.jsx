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
              {this.props.currentProject === "Python QA Reporting Tool" &&
                <div>
                  <a href = {this.props.link}>{this.props.link}</a>
                  <hr className = "info-slider-hr"/>
                  <p className = "info-slider-text-description">
                    An automated QA reporting tool. Takes a csv file as an input and auto-writes a formated, cumulative report.
                  </p>
                  <ul>
                    <li>Python</li>
                    <li>CSV Writer</li>
                    <li>SQLite3</li>
                  </ul>
                </div>
              }
              {this.props.currentProject === "Project Efficiency Tool" &&
                <div>
                  <a href = {this.props.link}>{this.props.link}</a>
                  <hr className = "info-slider-hr"/>
                  <p className = "info-slider-text-description">
                    A react based client tracker/efficiency tool. Includes a Task organizer, Client organizer, and a timeline estimator to send clients.
                  </p>
                  <ul>
                    <li>React</li>
                    <li>NoSQL - Firebase</li>
                  </ul>
                </div>
              }
              {
              <div>
                <a href = {this.props.link}>{this.props.link}</a>
                <hr className = "info-slider-hr"/>
                <p className = "info-slider-text-description">
                  My React based portfolio page. Uses several libraries and transitions to create a functional page.
                </p>
                <ul>
                  <li>React</li>
                  <li>React-Move</li>
                  <li>D3-Ease</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                  <li>React-Router</li>
                  <li>React-transition-group</li>
                </ul>
              </div>
            }
          </div>
      </div>
    )
  }
}

export default WorkSlider;
