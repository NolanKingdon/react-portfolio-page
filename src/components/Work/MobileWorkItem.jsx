import React, { Component } from 'react';
import './css/work.css';

class MobileWorkItem extends Component {

    handleClick(){
      this.props.sliderToggle();
      this.props.projectSelector(this.props.title);
    }


    render(){
      {/* Instead of linking out, maybe provide a quick description of what it actually is. Have a Div element slide on in from the side */}
      return(
        <button className = "education-item-button" onClick = {() => this.handleClick()}>
          <div className = "education-item-grid" style = {{width: "100%"}}>
            <img src = {this.props.image} className = "work-logo" alt = "Logo"/>
            <h2 className = "education-item-title">{this.props.title}</h2>
            <div style = {{gridColumn: "1/3"}}>
              <hr className = "work-item-hr"/>
              <p className = "education-item-note-text">{this.props.noteText}</p>
            </div>
          </div>
        </button>
      )
    }

  }
export default MobileWorkItem;
