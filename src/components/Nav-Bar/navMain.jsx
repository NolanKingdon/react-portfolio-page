import React, { Component } from 'react';
import './css/nav-bar.css';

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
        <div className = "nav-content">
        </div>
        <div className = "nav-accent-header">
          <h3 className = "nav-header">Social Media</h3>
        </div>
        <div className = "nav-content">
          <h4>LinkedIn</h4>
          <p>https://www.linkedin.com/in/nolan-kingdon/</p>
          <h4>Github</h4>
          <p>https://github.com/NolanKingdon</p>
        </div>
        {/*
        <div className = "nav-content">
          <p><b>HTML</b></p>
          <p><b>CSS3</b></p>
          <ul>
            <li>SCSS/SASS</li>
            <li>Grid/Flexbox</li>
            <li>Animations</li>
          </ul>
          <p><b>JavaScript</b></p>
          <ul>
            <li>ES6</li>
            <li>React</li>
            <li>JQuery</li>
            <li>node.js</li>
          </ul>
          <p><b>PHP</b></p>
          <ul>
            <li>WordPress</li>
            <li>PHP 7+</li>
          </ul>
          <p><b>SQL</b></p>
          <ul>
            <li>SQLite3</li>
            <li>MySQL</li>
          </ul>
          <p><b>Python</b></p>
          <ul>
            <li>Django</li>
          </ul>
          <p><b>NoSQL</b></p>
          <ul>
            <li>Firebase</li>
          </ul>
        </div>*/}
      </div>
    )
  }
}

export default NavMain;
