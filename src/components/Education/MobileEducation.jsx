import React, { Component } from 'react';
import './css/education.css';
import MobileEducationItem from './MobileEducationItem.jsx';
import InfoSlider from './info-slider.jsx';
import Background from './info-slider-background.jsx'
import UdemyLogo from './images/udemy-logo.png';
import BrockLogo from './images/Brock_logo.png';
import MitLogo from './images/MITOCW.png';
import MohawkLogo from './images/Mohawk.png';
import Animate from 'react-move/Animate';
import { easeExpOut, easeLinear } from 'd3-ease';

class MobileEducation extends Component {
  render(){
    let t = [ this.props.showInfoSlider ? "block" : "none" ]


    return(
      <div>
        <div className = "education-grid" style = {{marginLeft: "10vw", marginTop: "2em"}}>
          <MobileEducationItem 
            courseSelector = {this.props.courseSelector} 
            sliderToggle = {this.props.sliderToggle} 
            link = {"https://www.mohawkcollege.ca/programs/technology/computer-systems-technology-software-development-559"} 
            image = {MohawkLogo} title = {"Software Development Advanced Diploma"} 
            noteText = {"Computer Systems Technology - Software Development - 559"}
          />
        <MobileEducationItem
            courseSelector = {this.props.courseSelector}
            sliderToggle = {this.props.sliderToggle}
            link = {"https://brocku.ca/social-sciences/"}
            image = {BrockLogo}
            title = {"BA - Sociology"}
            noteText = {"Honours Sociology, Conc. Criminology - Minor in Philosophy"}
          />
        </div>
        <Animate
          start={()=> ({
            x: "-80vw",
          })}

          update={() => ({
            x: [ this.props.showInfoSlider ? "10vw" : "-80vw"],
            timing: { duration: 1000, ease: easeExpOut },
          })}
          >
          {(state) => {
            const { x } = state;

            return(
              <InfoSlider
                currentCourse = {this.props.currentCourse}
                sliderToggle = {this.props.sliderToggle}
                sliderStyles = {{
                  position: "fixed",
                  top: "10vh",
                  right: x,
                  width: "80vw",
                  height: "80%",
                  overflowY: "scroll",
                  backgroundColor: "#023670",
                  color: "white",
                  textAlign: "left",
                  MozBoxShadow:    "4px 3px 10px 1px black",
                  WebkitBoxShadow: "4px 3px 10px 1px black",
                  boxShadow:       "4px 5px 10px 1px black",
                  WebkitTransform: `translate3d(${x}px, 0, 0)`,
                  transform:       `translate3d(${x}px, 0, 0)`,
                  borderRadius: "5px",
                  zIndex: "21"
                }}
                />
            )
          }}
        </Animate>

        <Animate
          start={()=> ({
            opacity: "0",
          })}

          update={() => ({
            opacity: [ this.props.showInfoSlider ? "0.5" : "0"],
            timing: { duration: 500, ease: easeLinear },
          })}

          >
          {(state) => {
            const { opacity } = state;

            return(
              <Background
                sliderToggle = {this.props.sliderToggle}
                backgroundStyles = {{
                  position: "fixed",
                  top: "0",
                  left: "0",
                  height: "120%",
                  width: "120%",
                  display: t,
                  backgroundColor: `rgba(0,0,0,${opacity})`,
                  zIndex: "20"
                }}
                />
            )
          }}
        </Animate>
      </div>
    )
  }

}

export default MobileEducation;
