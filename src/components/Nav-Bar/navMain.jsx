import React, { Component } from 'react';
import './css/nav-bar.css';
import gitLogo from './images/GitHub-Logo.png';
import linkedLogo from './images/LinkedIn-Logo.png';
import navArrowLeft from './images/arrow-left.png';
import navArrowRight from './images/arrow-right.png';

class NavMain extends Component {

  handleNavToggle(){
    this.props.displayToggle();
  }

  render(){
    return(
      <div className = "nav-bar" style = {this.props.divStyle}> {/*style = {{left: this.props.navOrigin}}*/}
        <button
          className = "nav-display-toggle"
          onClick = {() => this.handleNavToggle()}
        >
          {this.props.navHidden ? <img src = {navArrowRight} className = "nav-display-arrow-left" alt = "arrow"/> : <img src = {navArrowLeft} className = "nav-display-arrow-left" alt = "arrow"/>}
        </button>
        <div className = "nav-first-header nav-content">
          <h1>Nolan Kingdon</h1>
          <h2>Project Manager</h2>
          <h3><a href = "tel:9052201705">(905)-220-1705</a></h3>
          <h3><a href = "mailto:nolan.kingdon@gmail.com">nolan.kingdon@gmail.com</a></h3>
        </div>
        <div className = "nav-accent-header" onClick = {() => this.props.changer("About")}>
          <h3 className = "nav-header">About</h3>
        </div>
        <div className = "nav-accent-header" onClick = {() => this.props.changer("Employment History")}>
          <h3 className = "nav-header">Employment History</h3>
        </div>
        <div className = "nav-accent-header" onClick = {() => this.props.changer("My Work")}>
          <h3 className = "nav-header">My Work</h3>
        </div>
        <div className = "nav-accent-header" onClick = {() => this.props.changer("Education")}>
          <h3 className = "nav-header">Education</h3>
        </div>
        <div className = "nav-accent-header" onClick = {() => this.props.changer("Social")}>
          <h3 className = "nav-header">Social Media</h3>
        </div>
        <div className = "nav-content">
          <div className = "social-media-flex">
            <a href = "https://www.linkedin.com/in/nolan-kingdon/"><img src = {linkedLogo} style={{width:"4vw"}} alt = "LinkedIn"/></a>
            <a href="https://github.com/NolanKingdon"><img src ={gitLogo} style={{width: "4vw"}} alt = "GitHub"/></a>
          </div>
        </div>
      </div>
    )
  }
}

export default NavMain;
