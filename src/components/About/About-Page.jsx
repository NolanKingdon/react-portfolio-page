import React, { Component } from 'react';
import './css/about.css';

class AboutPage extends Component {
  render(){
    return(
      <div className = "about" style = {{textAlign: "center"}}>
        <div className = "about-head">
          <h1>Nolan Kingdon</h1>
          <h2>Project Manager</h2>
          <h3><a href = "tel:9052201705">(905)-220-1705</a></h3>
          <h3><a href = "mailto:nolan.kingdon@gmail.com">nolan.kingdon@gmail.com</a></h3>
        </div>
      </div>
    )
  }
}

export default AboutPage;
