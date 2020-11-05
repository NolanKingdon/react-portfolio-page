import React, { Component } from 'react';
import './css/buttons.css';
//Images
import MENU from '../Nav-Bar/images/nav-icons/mobile/Hamburger_icon.png';
import LEFTARROW from '../Nav-Bar/images/arrow-left.png';
import RIGHTARROW from '../Nav-Bar/images/arrow-right.png';

export default class Buttons extends Component {

  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleForwardClick = this.handleForwardClick.bind(this);
    this.handleBackwardClick = this.handleBackwardClick.bind(this);

  }

  handleToggle(){
    this.props.displayToggle();
  }

  handleForwardClick(){
    this.props.displayToggle();
    this.props.mobileButtonToggle("fwd");
  }

  handleBackwardClick(){
    //Put function in App to pass in. Compare to where we're at and decide where to go
    this.props.displayToggle();
    this.props.mobileButtonToggle("back");
  }

  render(){
    let rotation = [ this.props.navHidden ? "rotate(180deg)" : "rotate(0deg)"];
    //if the page is contact: Always Hide the arrow. If not - only hide if if navHidden is true
    let rightArrowX = [ this.props.page == "Contact" ? "-100px" :[this.props.navHidden ? "-100px" : "10px"]];
    //if the page is About: Always hide the arrow. If not - Only hide it if navHidden is true AND if we're on the Contact page, shift it to the left
    let leftArrowX = [ this.props.page == "About" ? "-100px" : [this.props.navHidden ? "-100px" :[ this.props.page == "Contact" ? "10px" : "70px"]]];


    return(
      <div>
        <button
          className = "mobile-btn"
          onClick = {this.handleToggle}
          >
          <img src = {MENU} className = "mobile-btn-icon" style = {{transform: rotation}}/>
        </button>
        {this.props.page !== "Contact" &&

          <button
            style = {{bottom: 75, right: rightArrowX, transition: "500ms"}}
            className = "mobile-btn"
            onClick = {this.handleForwardClick}
            >
            <img src = {RIGHTARROW} className = "mobile-btn-icon"/>
          </button>
        }
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
