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
                      Buona Vita Pizza's online menu system. Currently designing a React based ordering system and PHP based backend for price updates.
                  </p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript/Jquery</li>
                    <li>PHP</li>
                  </ul>
                  <center><a href = "http://www.buonavitapizza.ca/" target = "_blank" rel = "noopener noreferrer" className = "work-slider-link">Live Webpage</a></center>
                </div>
              }
              {this.props.currentProject === "Moon Phase" &&
                <div>
                  <a href = {this.props.link}>{this.props.link}</a>
                  <hr className = "info-slider-hr"/>
                  <p className = "info-slider-text-description">
                      A module for the open source <a href="https://github.com/MichMich/MagicMirror/" style={{color: "#CCC"}}>Magic Mirror<sup>2</sup></a> - a Raspberry Pi Project.
                  </p>
                  <p>Module will generate a canvas image of the moon, and then calculate the number of days since the last new moon using the Julian Calendar. Once it has the days, it will convert it into a percentage of 360, and use trigonometry to plot a curve on to the canvas.</p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript/nodeJS</li>
                  </ul>
                  <p>Multiple languages are supported thanks to contributors from France and Spain!</p>
                  <center><a href = "https://github.com/NolanKingdon/MMM-MoonPhase" target = "_blank" rel = "noopener noreferrer" className = "work-slider-link">Github Repo</a></center>
                </div>
              }
              {this.props.currentProject === "Daily Pokemon" &&
                <div>
                  <a href = {this.props.link}>{this.props.link}</a>
                  <hr className = "info-slider-hr"/>
                  <p className = "info-slider-text-description">
                      A module for the open source <a href="https://github.com/MichMich/MagicMirror/" style={{color: "#CCC"}}>Magic Mirror<sup>2</sup></a> - a Raspberry Pi Project.
                  </p>
                  <p>Module will query <a href="https://pokeapi.co/" style={{color: "#CCC"}}>pokeapi</a> with a random number and bring back a random Pokemon. Intervals can be set, and multiple languages are supported thanks to contributors in France!</p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript/nodeJS</li>
                  </ul>
                  <center><a href = "https://github.com/NolanKingdon/MMM-MoonPhase" target = "_blank" rel = "noopener noreferrer" className = "work-slider-link">Github Repo</a></center>
                </div>
              }
               {this.props.currentProject === "Speed Reader" &&
                <div>
                  <a href = {this.props.link}>{this.props.link}</a>
                  <hr className = "info-slider-hr"/>
                  <p className = "info-slider-text-description">
                      A project I created just before exams to help me consolidate and condense information in an easy and quick way.
                  </p>
                  <p>Program will take in a folder location and scrape text within the provided files (.pptx, .docx, .txt, .pdf). The program then parses the information and streams it back to the user one word at a time. This reduces the amount of time
                    the user spends looking for the next word and moving their eye across. This drastically improves read speed and comprehension, keeping the flow of information strong.
                     </p>
                  <ul>
                    <li>Python</li>
                    <li>PyQt5 (For the UI Component)</li>
                    <li>Multi-threading</li>
                  </ul>
                  <center><a href = "https://github.com/NolanKingdon/Python_Speed_Reader" target = "_blank" rel = "noopener noreferrer" className = "work-slider-link">Github Repo</a></center>
                </div>
              }
              {this.props.currentProject === "Monitor Landing Screen" &&
                <div>
                  <a href = {this.props.link}>{this.props.link}</a>
                  <hr className = "info-slider-hr"/>
                  <p className = "info-slider-text-description">
                      A project I created to condense multiple application I used regularly into one, convenient half screen.
                  </p>
                  <p>Includes modules for music streaming, time tracking, and task tracking.</p>
                  <ul>
                    <li>nodeJS - and several related node modules</li>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>Websockets for realtime data streaming</li>
                    <li>External APIs for Firebase and Youtube streams</li>
                  </ul>
                  <center><a href = "https://github.com/NolanKingdon/Monitor_Landing_Screen" target = "_blank" rel = "noopener noreferrer" className = "work-slider-link">Github Repo</a></center>
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
                  <center><a href = "https://nolankingdon.github.io/JavaScript-Calculator/" target = "_blank" rel = "noopener noreferrer" className = "work-slider-link">Live Webpage</a></center>
                </div>
              }
              {this.props.currentProject === "Python QA Reporting Tool" &&
                <div>
                  <a href = {this.props.link}>{this.props.link}</a>
                  <hr className = "info-slider-hr"/>
                  <p className = "info-slider-text-description">
                    An automated QA reporting tool. Takes a csv file as an input and auto-writes a formated, cumulative report.
                  </p>
                  <p>Will also store the previous week's information in a SQLite3 database for future queries. Database holds any relevant information about tasks completed, time it took, turnaround, etc.</p>
                  <ul>
                    <li>Python</li>
                    <li>CSV Writer</li>
                    <li>SQLite3</li>
                  </ul>
                  <p>Functionally this project was great and saved a lot of time to run weekly. However, I will admit that being my first project, the project should be more object oriented, and the code could be cleaned up a lot.</p>
                  <p>I suppose I'm just proud of my first bit of code.</p>
                  <center><a href = "https://github.com/NolanKingdon/QA-Reporting-Tool" target = "_blank" rel = "noopener noreferrer" className = "work-slider-link">Github repository</a></center>
                </div>
              }
              {this.props.currentProject === "Project Efficiency Tool" &&
                <div>
                  <a href = {this.props.link}>{this.props.link}</a>
                  <hr className = "info-slider-hr"/>
                  <p className = "info-slider-text-description">
                    A react based client tracker/efficiency tool. Includes a Task organizer, Client organizer, and a timeline estimator to send clients.
                  </p>
                  <p>This was born from needing to keep track of project status and client responsiveness in an efficient way that didn't involve multiple spreadsheets. This 
                    project was handy in that it would assign a specific color to each client depending on what phase they were in relative to their launch date, and relative to 
                    their last date of communication. Using a color coded system, I could tell at a glance how far along/precarious the project was, and if it needed any special attention. 
                    This saved me upwards of an hour of project management in any given week.
                  </p>
                  <ul>
                    <li>React</li>
                    <li>NoSQL - Firebase</li>
                  </ul>
                  <center><a href = "https://github.com/NolanKingdon/efficiency_tool" target = "_blank" rel = "noopener noreferrer" className = "work-slider-link">Github repository</a></center>
                </div>
              }
              {this.props.currentProject === "This Page" &&
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
                <p>I'm particularily proud of how the mobile version of this site turned out. If you haven't already, check it out on mobile!</p>
                <center><a href = "https://github.com/NolanKingdon/react-portfolio-page" target = "_blank" rel = "noopener noreferrer" className = "work-slider-link">Github repository</a></center>
              </div>
            }
            {this.props.currentProject === "PHP based Login System" &&
            <div>
              <a href = {this.props.link}>{this.props.link}</a>
              <hr className = "info-slider-hr"/>
              <p className = "info-slider-text-description">
                A simple login system using PHP. Communicates with MySQL to store passwords and create new users.
              </p>
              <ul>
                <li>PHP</li>
                <li>SQL</li>
                <li>XAMPP</li>
                <li>CSS3</li>
                <li>HTML5</li>
              </ul>
              <center><a href = "https://github.com/NolanKingdon/PHP-Registration" target = "_blank" rel = "noopener noreferrer" className = "work-slider-link">Github repository</a></center>
            </div>
          }
          </div>
      </div>
    )
  }
}

export default WorkSlider;
