import React, { Component } from 'react';
import './css/nav-bar.css';
import gitLogo from './images/GitHub-Logo.png';
import linkedLogo from './images/LinkedIn-Logo.png';

class NavMain extends Component {

  render(){
    return(
      <div className = "nav-bar">
        <div className = "nav-first-header nav-content">
          <h1>Nolan Kingdon</h1>
          <h2>Project Manager</h2>
          <h3><a href = "tel:9052201705">(905)-220-1705</a></h3>
          <h3><a href = "mailto:nolan.kingdon@gmail.com">nolan.kingdon@gmail.com</a></h3>
        </div>
        <div className = "nav-accent-header">
          <h3 className = "nav-header">About</h3>
        </div>
        <div className = "nav-accent-header">
          <h3 className = "nav-header">Employment History</h3>
        </div>
        <div className = "nav-accent-header">
          <h3 className = "nav-header">My Work</h3>
        </div>
        <div className = "nav-accent-header">
          <h3 className = "nav-header">Education</h3>
        </div>
        <div className = "nav-accent-header">
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
