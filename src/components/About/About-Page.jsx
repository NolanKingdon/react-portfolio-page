import React, { Component } from 'react';
import './css/about.css';
import selfImage from './images/self-image-rotated.jpeg';
import Animate from 'react-move/Animate';
import { easeExpOut, easeLinear } from 'd3-ease';

class AboutPage extends Component {
  render(){

    let responsiveH = ["6rem", "5rem"];
    let responsiveIntro = ["3rem", "2rem"];
    let responsiveB = ["2rem", "1.4rem"];
    let responsiveInv = ["1.5rem", "1.2rem"];

    if(this.props.screenSize == 1920){
      responsiveH = ["6rem", "5rem"]
      responsiveIntro = ["3rem", "2rem"];
      responsiveB = ["2rem", "1.4rem"];
      responsiveInv = ["1.5rem", "1.2rem"];
    } else if(this.props.screenSize == 1366){
      responsiveH = ["6rem", "5rem"]
      responsiveIntro = ["3rem", "2rem"];
      responsiveB = ["2rem", "1.4rem"];
      responsiveInv = ["1.5rem", "1.2rem"];
    } else if(this.props.screenSize == 1280){
      responsiveH = ["6rem", "5rem"]
      responsiveIntro = ["2.5rem", "2rem"];
      responsiveB = ["2rem", "1.4rem"];
      responsiveInv = ["1.5rem", "1.2rem"];
    }
    return(
      <div className = "about" style = {{textAlign: "center"}}>
        <div className = "about-head">
          <img src = {selfImage} className = "self-image" alt = "Self"/>

          <Animate
            start={()=> ({
              h: responsiveInv[1],
              intro: responsiveIntro[1],
              b: responsiveIntro[1],
              inv: responsiveIntro[1],
            })}

            update={() => ({
              h: [ this.props.navHidden ? responsiveH[0] : responsiveH[1]],
              intro: [ this.props.navHidden ? responsiveIntro[0] : responsiveIntro[1]],
              b: [ this.props.navHidden ? responsiveB[0] : responsiveB[1]],
              inv: [ this.props.navHidden ? responsiveInv[0] : responsiveInv[1]],
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
