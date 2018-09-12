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
            <img src = {whiteX} className = "info-slider-exit-button-image" alt = "white X"/>
          </button>
          <div className = "info-slider-text-body">
            <h1 className = "info-slider-text-header">{this.props.currentCourse}</h1>
              {this.props.currentCourse === "Core Computer Science Courses" &&
                <div>
                  <h3 className = "info-slider-text-dates"><center>{MITDates[0]} - {MITDates[1]}</center></h3>
                  <hr  className = "info-slider-hr" />
                  <p className = "info-slider-text-description">
                      MIT Core computer science courses - Online through OCW. Various courses pertaining to:
                  </p>
                  <ul>
                    <li>Intro to Computer Science/Programming concepts</li>
                    <li>Intro to Algorithms and efficiency</li>
                    <li>Computer Science related math</li>
                  </ul>
                </div>

              }
              {this.props.currentCourse === "React JS and Redux - Mastering Web Apps" &&
                <div>
                  <h3 className = "info-slider-text-dates"><center>{UdemyDates[0]} - {UdemyDates[1]}</center></h3>
                  <hr  className = "info-slider-hr" />

                  <p className = "info-slider-text-description">
                     Course focused on developing applications using React and Redux. Projects were:
                  </p>
                  <ul>
                    <li>A countdown app in vanilla React</li>
                    <li>A reminder app using Redux and Cookies for task storage</li>
                    <li>Goal tracker using Redux and Firebase for user authentication and data storage</li>
                  </ul>
                </div>
              }
              {this.props.currentCourse === "Create a PHP Login and Registration from Scratch" &&
                <div>
                  <h3 className = "info-slider-text-dates"><center>{UdemyDates[0]} - {UdemyDates[1]}</center></h3>
                  <hr  className = "info-slider-hr" />
                  <p className = "info-slider-text-description">
                    Created a PHP based log in system to gain familiarity with PHP syntax and concepts. The App performed the following tasks:
                  </p>
                  <ul>
                    <li>MySQL DataBase user authentication</li>
                    <li>Password hashing</li>
                    <li>Good coding practices and organization</li>
                  </ul>
                </div>
              }
              {this.props.currentCourse === "Learn JavaScript for Web Development" &&
                <div>
                  <h3 className = "info-slider-text-dates"><center>{UdemyDates[0]} - {UdemyDates[1]}</center></h3>
                  <hr  className = "info-slider-hr" />
                  <p className = "info-slider-text-description">
                    Basics of JavaScript. This was used to gain a familiarity with the JavaScript coding language. Learned:
                  </p>
                  <ul>
                    <li>Document Object Model</li>
                    <li>Browser Object Model</li>
                    <li>Errors and Strict mode</li>
                    <li>Creation of a menu overlay</li>
                  </ul>
                </div>
              }
              {this.props.currentCourse === "C# Basics for Beginners: Learn C# Fundamentals by Coding" &&
                <div>
                  <h3 className = "info-slider-text-dates"><center>{UdemyDates[0]} - {UdemyDates[1]}</center></h3>
                  <hr  className = "info-slider-hr" />
                  <p className = "info-slider-text-description">
                    Fundamentals of C# and .NET for current role. This was mainly used as an intro to C#/.NET in order to better understand scripting capabilities at PowerSchool
                  </p>
                </div>
              }
              {this.props.currentCourse === "Complete Python Bootcamp: Go from zero to hero in Python" &&
                <div>
                  <h3 className = "info-slider-text-dates"><center>{UdemyDates[0]} - {UdemyDates[1]}</center></h3>
                  <hr  className = "info-slider-hr" />
                  <p className = "info-slider-text-description">
                    Python basics - first real programming course to learn syntax and core programming concepts
                  </p>
                </div>
              }
              {this.props.currentCourse === "Bachelor of Arts (BA)" &&
                <div>
                  <h3 className = "info-slider-text-dates"><center>{BrockDates[0]} - {BrockDates[1]}</center></h3>
                  <hr  className = "info-slider-hr" />
                  <p className = "info-slider-text-description">
                    Major in Honours Sociology with a Concentration in Criminology and a minor in Eastern Philosophy
                  </p>
                  <ul>
                    <li>Critical Evaluation of Criminal Organizations and Gangs</li>
                    <li>Exposure to leading Sociological theories such as Post Structuralism and Post Modernism</li>
                    <li>Philosophy oriented in Eastern Religions such as Buddhism and Hinduism</li>
                    <li>Philisophical study of logic and argument construction/deconstruction</li>
                  </ul>
                </div>
              }

          </div>
      </div>
    )
  }

}

export default InfoSlider;
