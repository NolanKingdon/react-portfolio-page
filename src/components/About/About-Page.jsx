import React, { Component } from 'react';
import './css/about.css';
import selfImage from './images/self-image-rotated.jpeg';
import Animate from 'react-move/Animate';
import { easeExpOut, easeLinear } from 'd3-ease';

class AboutPage extends Component {
  render(){
    return(
      <div className = "about" style = {{textAlign: "center"}}>
        <div className = "about-head">
          <img src = {selfImage} className = "self-image" alt = "Self"/>

          <Animate
            start={()=> ({
              h: "5rem",
              intro: "2rem",
              b: "1.4rem",
              inv: "1.2rem",
            })}

            update={() => ({
              h: [ this.props.navHidden ? "6rem" : "5rem"],
              intro: [ this.props.navHidden ? "3rem" : "2rem"],
              b: [ this.props.navHidden ? "2rem" : "1.4rem"],
              inv: [ this.props.navHidden ? "1.5rem" : "1.2rem"],
              timing: { duration: 1000, ease: easeExpOut },
            })}
            >
            {(state) => {
              const { h, intro, b, inv } = state;

              return(
                <div className = "about-text">
                  <h1 id = "about-hello" style = {{fontSize: h}}>Hello.</h1>
                  <p id = "about-intro" style = {{fontSize: intro}}>My name is Nolan - I am a web developer.</p>
                  <p id = "about-background" style = {{fontSize: b}}>I currently work at PowerSchool as a Project Manager.</p>
                  <p id = "about-invitation" style = {{fontSize: inv}}>Feel free to explore my site.</p>
                </div>
              )
            }}

        </Animate>
        </div>
      </div>
    )
  }
}

export default AboutPage;
