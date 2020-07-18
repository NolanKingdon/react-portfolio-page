import React, { Component } from 'react';
import './css/work.css';

class WorkItem extends Component {

    handleClick(){
      this.props.sliderToggle();
      this.props.projectSelector(this.props.title);
    }

    render(){
      return(
        <button className = "work-item-button" onClick = {() => this.handleClick()}>
          <div className = "work-item-grid">
            <img src = {this.props.image} className = "work-logo" alt = "Logo"/>
            <div>
              <h2 className = "work-item-title">{this.props.title}</h2>
              <hr className = "work-item-hr"/>
              <p className = "work-item-note-text">{this.props.noteText}</p>
            </div>
          </div>
        </button>
      )
    }

  }
export default WorkItem;
