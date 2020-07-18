import React, {Component} from 'react';

class EducationItem extends Component {

  handleClick(){
    this.props.sliderToggle();
    this.props.courseSelector(this.props.title);
  }

  render(){
    return(
      <button className = "education-item-button" onClick = {() => this.handleClick()}>
        <div className = "education-item-grid">
          <img src = {this.props.image} className = "employment-logo" alt = "Logo"/>
          <div>
            <h2 className = "education-item-title">{this.props.title}</h2>
            <hr className = "education-item-hr" />
            <p className = "education-item-note-text">{this.props.noteText}</p>
          </div>
        </div>
      </button>
    );
  }
}
export default EducationItem;
