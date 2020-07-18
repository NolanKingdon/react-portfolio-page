import React, { Component } from 'react';
import './css/education.css';
import EducationItem from './educationItem.jsx';
import InfoSlider from './info-slider.jsx';
import Background from './info-slider-background.jsx'
import UdemyLogo from './images/udemy-logo.png';
import BrockLogo from './images/Brock_logo.png';
import MitLogo from './images/MITOCW.png';
import MohawkLogo from './images/Mohawk.png';
import Animate from 'react-move/Animate';
import { easeExpOut, easeLinear } from 'd3-ease';

class Education extends Component {
  render(){
    return(
      <div>
        <div className = "education-grid">
          <EducationItem 
            courseSelector = {this.props.courseSelector} 
            sliderToggle = {this.props.sliderToggle} 
            link = {"https://www.mohawkcollege.ca/programs/technology/computer-systems-technology-software-development-559"} 
            image = {MohawkLogo} title = {"Software Development Advanced Diploma"} 
            noteText = {"Computer Systems Technology - Software Development - 559"}/>
          <EducationItem 
            courseSelector = {this.props.courseSelector} 
            sliderToggle = {this.props.sliderToggle} 
            link = {"https://brocku.ca/social-sciences/"} 
            image = {BrockLogo} 
            title = {"BA - Sociology"} 
            noteText = {"Honours Sociology, Conc. Criminology - Minor in Philosophy"}/>
        </div>
        {/* <InfoSlider
          currentCourse = {this.props.currentCourse}
          sliderToggle = {this.props.sliderToggle}
          sliderStyles = {{
            position: "fixed",
            top: "10vh",
            right: 0,
            width: "40vw",
            height: "60%",
            backgroundColor: "#023670",
            color: "white",
            textAlign: "left",
            MozBoxShadow:    "4px 5px 10px 1px #1c1c1c",
            WebkitBoxShadow: "4px 5px 10px 1px #1c1c1c",
            boxShadow:       "4px 5px 10px 1px #1c1c1c",
            WebkitTransform: `translate3d(${0}px, 0, 0)`,
            transform:       `translate3d(${0}px, 0, 0)`,
            borderRadius: "5px",
            zIndex: "21"
          }}/>

        <Background
          sliderToggle = {this.props.sliderToggle}
          backgroundStyles = {{
            position: "fixed",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
            display: "block",
            backgroundColor: `rgba(0,0,0,100)`,
            zIndex: "20"
          }}/> */}
      </div>
    )
  }

}

export default Education;
