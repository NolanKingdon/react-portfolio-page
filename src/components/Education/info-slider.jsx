import React, { Component } from 'react';
import whiteX from './images/white-X.png';
import './css/slider.css';

const MITDates = ["10/01/2018", "Ongoing"];
const UdemyDates = ["09/01/2017", "06/01/2018"];
const BrockDates = ["09/01/2011", "04/01/2015"];

class InfoSlider extends Component {

  handleSliderExit(){
    this.props.sliderToggle();
  }

  render(){
    {/*Consider having a transparent div behind the currnet one so that when it slides in, you can't click the icons and mess everything up*/}
    return(
        <div className = "education-info-slider" style = {this.props.sliderStyles}>
          <button className = "info-slider-exit-button" onClick = {() => this.props.sliderToggle()}>
            <img src = {whiteX} className = "info-slider-exit-button-image"/>
          </button>
          <div className = "info-slider-text-body">
            <h1 className = "info-slider-text-header">{this.props.currentCourse}</h1>
              {this.props.currentCourse == "Core Computer Science Courses" &&
                <div>
                  <h3 className = "info-slider-text-dates">{MITDates[0]} - {MITDates[1]}</h3>
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
              {this.props.currentCourse == "React JS and Redux - Mastering Web Apps" &&
                <div>
                  <h3 className = "info-slider-text-dates">{UdemyDates[0]} - {UdemyDates[1]}</h3>
                  <p className = "info-slider-text-description">
                     Master some web apps with react.
                  </p>
                  <ul>
                    <li>Course Content</li>
                    <li>Course Content</li>
                    <li>Course Content</li>
                    <li>Course Content</li>
                  </ul>
                </div>
              }
              {this.props.currentCourse == "Create a PHP Login and Registration from Scratch" &&
                <div>
                  <h3 className = "info-slider-text-dates">{UdemyDates[0]} - {UdemyDates[1]}</h3>
                  <p className = "info-slider-text-description">
                    Some cool PHP stuff
                  </p>
                  <ul>
                    <li>Course Content</li>
                    <li>Course Content</li>
                    <li>Course Content</li>
                    <li>Course Content</li>
                  </ul>
                </div>
              }
              {this.props.currentCourse == "Learn JavaScript for Web Development" &&
                <div>
                  <h3 className = "info-slider-text-dates">{UdemyDates[0]} - {UdemyDates[1]}</h3>
                  <p className = "info-slider-text-description">
                    Basics of JS
                  </p>
                  <ul>
                    <li>Course Content</li>
                    <li>Course Content</li>
                    <li>Course Content</li>
                    <li>Course Content</li>
                  </ul>
                </div>
              }
              {this.props.currentCourse == "C# Basics for Beginners: Learn C# Fundamentals by Coding" &&
                <div>
                  <h3 className = "info-slider-text-dates">{UdemyDates[0]} - {UdemyDates[1]}</h3>
                  <p className = "info-slider-text-description">
                    Fundamentals of C# and .NET for current role
                  </p>
                  <ul>
                    <li>Course Content</li>
                    <li>Course Content</li>
                    <li>Course Content</li>
                    <li>Course Content</li>
                  </ul>
                </div>
              }
              {this.props.currentCourse == "Complete Python Bootcamp: Go from zero to hero in Python" &&
                <div>
                  <h3 className = "info-slider-text-dates">{UdemyDates[0]} - {UdemyDates[1]}</h3>
                  <p className = "info-slider-text-description">
                    Python basics - first real programming course
                  </p>
                  <ul>
                    <li>Course Content</li>
                    <li>Course Content</li>
                    <li>Course Content</li>
                    <li>Course Content</li>
                  </ul>
                </div>
              }
              {this.props.currentCourse == "Bachelor of Arts (BA)" &&
                <div>
                  <h3 className = "info-slider-text-dates">{BrockDates[0]} - {BrockDates[1]}</h3>
                  <p className = "info-slider-text-description">
                    Walking and talking
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

export default InfoSlider;
