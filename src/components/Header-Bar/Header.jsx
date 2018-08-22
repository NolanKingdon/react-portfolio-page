import React, { Component } from 'react';
import './css/Header.css';

class Header extends Component {

  render(){
    return(
      <div>
        <hr className = "about-hr" />
        <h2 className = "about-left">{this.props.page}</h2>
        <hr className = "about-hr" />
      </div>
    )
  }

}

export default Header;
