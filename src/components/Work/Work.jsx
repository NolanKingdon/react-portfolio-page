import React, { Component } from 'react';
import WorkItem from './WorkItem.jsx';
import WorkSlider from './WorkSlider.jsx';
import Background from './work-slider-background.jsx';
import Animate from 'react-move/Animate';
import { easeExpOut, easeLinear } from 'd3-ease';
import "./css/work.css";
//Images below
import BVP from './images/BVP-logo.png';
import CALC from './images/calc.jpg';
import PYCON from './images/python.png';
import REACT from './images/react.png';
import PHPSQL from './images/php-mysql.png';
import THISIMG from './images/this.png';

class Work extends Component {

  render(){
    let t = [ this.props.showWorkSlider ? "block" : "none" ]
    return(
      <div className = "work-grid">
        <WorkItem
          sliderToggle = {this.props.sliderToggle}
          projectSelector = {this.props.projectSelector}
          image = {BVP}
          title = {"Buona Vita Pizza Online Menu"}
          noteText = {"Online Menu for Buona Vita Pizza, Hamilton"}
        />
        <WorkItem
          sliderToggle = {this.props.sliderToggle}
          projectSelector = {this.props.projectSelector}
          image = {THISIMG}
          title = {"This Page"}
          noteText = {"My React based portfolio page"}
        />
        <WorkItem
          sliderToggle = {this.props.sliderToggle}
          projectSelector = {this.props.projectSelector}
          image = {CALC}
          title = {"JavaScript Calculator"}
          noteText = {"A digital calculator using JavaScript to complete the calculations and interactions"}
        />
        <WorkItem
          sliderToggle = {this.props.sliderToggle}
          projectSelector = {this.props.projectSelector}
          image = {PYCON}
          title = {"Python QA Reporting Tool"}
          noteText = {"Console based QA reporting tool"}
        />
        <WorkItem
          sliderToggle = {this.props.sliderToggle}
          projectSelector = {this.props.projectSelector}
          image = {REACT}
          title = {"Project Efficiency Tool"}
          noteText = {"Client organizational tool"}
        />
        <WorkItem
          sliderToggle = {this.props.sliderToggle}
          projectSelector = {this.props.projectSelector}
          image = {PHPSQL}
          title = {"PHP based Login System"}
          noteText = {"PHP/MySQL login tool"}
        />
          <Animate
            start={()=> ({
              x: "-50vw",
            })}

            update={() => ({
              x: [ this.props.showWorkSlider ? "30vw" : "-50vw"],
              timing: { duration: 1000, ease: easeExpOut },
            })}
          >
            {(state) => {
              const { x } = state;

              return(
                <WorkSlider
                  currentProject = {this.props.currentProject}
                  sliderToggle = {this.props.sliderToggle}
                  sliderStyles = {{
                    position: "fixed",
                    top: "10vh",
                    right: x,
                    width: "40vw",
                    height: "60%",
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
              opacity: [ this.props.showWorkSlider ? "0.5" : "0"],
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
                    height: "100%",
                    width: "100%",
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
export default Work;
