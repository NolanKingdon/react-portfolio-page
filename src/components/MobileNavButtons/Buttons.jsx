import React, { Component } from 'react';
import './css/buttons.css';
//Images
import MENU from '../Nav-Bar/images/nav-icons/mobile/Hamburger_icon.png';
import LEFTARROW from '../Nav-Bar/images/arrow-left.png';
import RIGHTARROW from '../Nav-Bar/images/arrow-right.png';

export default class Buttons extends Component {

  constructor(props){
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleForwardClick = this.handleForwardClick.bind(this);
    this.handleBackwardClick = this.handleBackwardClick.bind(this);

  }

  handleToggle(){
    this.props.displayToggle();
  }

  handleForwardClick(){
    console.log("forward");
    this.props.displayToggle();
  }

  handleBackwardClick(){
    //Put function in App to pass in. Compare to where we're at and decide where to go
    console.log("backward");
    this.props.displayToggle();
  }

  render(){
    let rotation = [ this.props.navHidden ? "rotate(180deg)" : "rotate(0deg)"];
    //Make this a bit more complex -- Check to see if there IS a next page to go to, and THEN send them arrows out
    let rightArrowX = [this.props.navHidden ? "-100px" : "10px"];
    let leftArrowX = [this.props.navHidden ? "-100px" : "70px"];

    return(
      <div>
        <button
          className = "mobile-btn"
          onClick = {this.handleToggle}
          >
          <img src = {MENU} className = "mobile-btn-icon" style = {{transform: rotation}}/>
        </button>
        <button
          style = {{bottom: 75, right: rightArrowX, transition: "500ms"}}
          className = "mobile-btn"
          onClick = {this.handleForwardClick}
        >
          <img src = {RIGHTARROW} className = "mobile-btn-icon"/>
        </button>
        <button
          style = {{bottom: 75, right: leftArrowX, transition: "500ms"}}
          className = "mobile-btn"
          onClick = {this.handleBackwardClick}
        >
          <img src = {LEFTARROW} className = "mobile-btn-icon"/>
        </button>
      </div>
    )
  }



}
