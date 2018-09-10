import React, { Component } from 'react';
import WorkItem from './WorkItem.jsx';
import WorkSlider from './WorkSlider.jsx';
import Background from './work-slider-background.jsx';
import Animate from 'react-move/Animate';
import { easeExpOut, easeLinear } from 'd3-ease';

class Work extends Component {

  render(){
    let t = [ this.props.showInfoSlider ? "block" : "none" ]
    {/*Again, map this in the future*/}
    return(
      <div className = "work-grid">
        <WorkItem />
          <Animate
            start={()=> ({
              x: "-50vw",
            })}

            update={() => ({
              x: [ this.props.showInfoSlider ? "30vw" : "-50vw"],
              timing: { duration: 1000, ease: easeExpOut },
            })}
          >
            {(state) => {
              const { x } = state;

              return(
                <WorkSlider
                  currentCourse = {this.props.currentCourse}
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
                    MozBoxShadow:    "4px 3px 10px 1px #ccc",
                    WebkitBoxShadow: "4px 3px 10px 1px #ccc",
                    boxShadow:       "4px 5px 10px 1px gray",
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
