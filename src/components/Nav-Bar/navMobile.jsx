import React, { Component } from 'react';
import Background from '../Education/info-slider-background.jsx';
import './css/nav-bar.css';
import navArrowUp from './images/arrow-up.png';
import navArrowDown from './images/arrow-down.png';

class NavMobile extends Component {

  render(){
    let bgDisplay = [this.props.navHidden ? "none" : "block"];

    return(
      <div className = "mobile-nav-bar" style = {this.props.divStyle}>
        <Background
          backgroundStyles = {{
            position: "fixed",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
            display: bgDisplay,
            backgroundColor: `rgba(0,0,0, 0.3)`,
            transition: "500ms",
            zIndex: "0"
          }}
          sliderToggle = {this.props.displayToggle}
        />
        <div className = "mobile-nav-accent-header" onClick = {() => this.props.changer("About")}>
          <h3 className = "mobile-nav-header">About</h3>
        </div>
        <div className = "mobile-nav-accent-header" onClick = {() => this.props.changer("Employment History")}>
          <h3 className = "mobile-nav-header">Employment History</h3>
        </div>
        <div className = "mobile-nav-accent-header" onClick = {() => this.props.changer("My Work")}>
          <h3 className = "mobile-nav-header">My Work</h3>
        </div>
        <div className = "mobile-nav-accent-header" onClick = {() => this.props.changer("Education")}>
          <h3 className = "mobile-nav-header">Education</h3>
        </div>
        <div className = "mobile-nav-accent-header" onClick = {() => this.props.changer("Contact")}>
          <h3 className = "mobile-nav-header">Contact</h3>
        </div>
      </div>
    )
  }
}

export default NavMobile;
