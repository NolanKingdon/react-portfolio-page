import React, { Component } from 'react';
import './css/nav-bar.css';
import navArrowUp from './images/arrow-up.png';
import navArrowDown from './images/arrow-down.png';

class NavMobile extends Component {

  handleNavToggle(){
    this.props.displayToggle();
  }

  render(){
    return(
      <div className = "mobile-nav-bar" style = {this.props.divStyle}>
        <button
          className = "mobile-nav-display-toggle"
          onClick = {() => this.handleNavToggle()}
        >
          {this.props.navHidden ? <img src = {navArrowDown} className = "mobile-nav-display-arrow-left" alt = "arrow"/> : <img src = {navArrowUp} className = "mobile-nav-display-arrow-left" alt = "arrow"/>}
        </button>
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
