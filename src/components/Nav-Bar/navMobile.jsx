import React, { Component } from 'react';
import Background from '../Education/info-slider-background.jsx';
import './css/nav-bar.css';
//IMAGES
import ABOUT from './images/nav-icons/white/nav-icon-person-white.png';
import HAT from './images/nav-icons/white/nav-icon-grad-cap-white.png';
import ENVELOPE from './images/nav-icons/white/nav-icon-envelope-white.png';
import CODE from './images/nav-icons/white/nav-icon-code-white.png';
import BREIFCASE from './images/nav-icons/white/nav-icon-briefcase-white.png';

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
        <div className = "mobile-nav-accent-header" onClick = {() => this.props.changer("About")} style = {{marginTop: 3}}>
          <h3 style = {{float: "right", marginRight: 10}} className = "mobile-nav-header">About</h3>
          <img style = {{float: "left", marginLeft: 10, marginTop: 7}} src = {ABOUT} className = "mobile-nav-header-icon"/>
        </div>
        <div className = "mobile-nav-accent-header" onClick = {() => this.props.changer("Employment History")}>
          <h3 style = {{float: "right", marginRight: 10}} className = "mobile-nav-header">Employment History</h3>
          <img style = {{float: "left", marginLeft: 10, marginTop: 7}} src = {BREIFCASE} className = "mobile-nav-header-icon"/>
        </div>
        <div className = "mobile-nav-accent-header" onClick = {() => this.props.changer("My Work")}>
          <h3 style = {{float: "right", marginRight: 10}} className = "mobile-nav-header">My Work</h3>
          <img style = {{float: "left", marginLeft: 10, marginTop: 7}} src = {CODE} className = "mobile-nav-header-icon"/>
        </div>
        <div className = "mobile-nav-accent-header" onClick = {() => this.props.changer("Education")}>
          <h3 style = {{float: "right", marginRight: 10}} className = "mobile-nav-header">Education</h3>
          <img style = {{float: "left", marginLeft: 10, marginTop: 7}} src = {HAT} className = "mobile-nav-header-icon"/>
        </div>
        <div className = "mobile-nav-accent-header" onClick = {() => this.props.changer("Contact")}>
          <h3 style = {{float: "right", marginRight: 10}} className = "mobile-nav-header">Contact</h3>
          <img style = {{float: "left", marginLeft: 10, marginTop: 7}} src = {ENVELOPE} className = "mobile-nav-header-icon"/>
        </div>
      </div>
    )
  }
}

export default NavMobile;
