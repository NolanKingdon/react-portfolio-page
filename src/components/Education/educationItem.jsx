import React, {Component} from 'react';

class EducationItem extends Component {

  render(){
    {/* Instead of linking out, maybe provide a quick description of what it actually is. Have a Div element slide on in from the side */}
    return(
      <a href = {this.props.link} className = "education-item-link">
        <div className = "education-item-grid">
          <img src = {this.props.image} className = "employment-logo"/>
          <div>
            <h2 className = "education-item-title">{this.props.title}</h2>
            <p className = "education-item-note-text">{this.props.noteText}</p>
          </div>
        </div>
      </a>
    )
  }

}
export default EducationItem;
