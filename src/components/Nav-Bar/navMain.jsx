import React, { Component } from 'react';
import './css/nav-bar.css';

class NavMain extends Component {

  render(){
    return(
      <div className = "nav-bar">
        <div className = "nav-first-header">
          <h1>Nolan Kingdon</h1>
          <h2>Project Manager</h2>
          <h3>(905)-220-1705</h3>
          <h3>nolan.kingdon@gmail.com</h3>
        </div>
        <div className = "nav-accent-header">
          <h3 className = "nav-header">Social Media</h3>
        </div>
        <div>
          <h4>LinkedIn</h4>
          <p>https://www.linkedin.com/in/nolan-kingdon/</p>
          <h4>Github</h4>
          <p>https://github.com/NolanKingdon</p>
        </div>
        <div className = "nav-accent-header">
          <h3 className = "nav-header">Skills</h3>
        </div>
        <div>
          <p>Project Management</p>
          <p>Problem Solving</p>
          <p>Critical Thinking</p>
        </div>
        <div className = "nav-accent-header">
          <h3 className = "nav-header">Programming Languages</h3>
        </div>
        <div>
          <h4>HTML</h4>
          <h4>CSS3</h4>
          <ul>
            {/*Fix this so the bullets aren't so ugly*/}
            <li>SCSS/SASS</li>
            <li>Grid/Flexbox</li>
            <li>Animations</li>
          </ul>
          <h4>JavaScript</h4>
          <ul>
            <li>ES6</li>
            <li>React</li>
            <li>JQuery</li>
            <li>node.js</li>
          </ul>
          <h4>PHP</h4>
          <ul>
            <li>WordPress</li>
            <li>PHP 7+</li>
          </ul>
          <h4>SQL</h4>
          <ul>
            <li>SQLite3</li>
            <li>MySQL</li>
          </ul>
          <h4>Python</h4>
          <ul>
            <li>Django</li>
          </ul>
          <h4>NoSQL</h4>
          <ul>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default NavMain;
