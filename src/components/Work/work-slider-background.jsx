import React, { Component } from 'react';

class Background extends Component {

  render(){
    return(
      <div className = "education-slider-transparent-background" style = {this.props.backgroundStyles} onClick = {() => this.props.sliderToggle()}>
      </div>
    )
  }
}

export default Background;
