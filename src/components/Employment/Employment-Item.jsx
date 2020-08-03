import React, { Component } from 'react'
import './css/Employment.css';

class EmploymentItem extends Component {

  render(){
    return(
      <div className = "employment-item-container">
        <img className = "employer-logo" src = {this.props.image} alt = "logo"></img>
        <div>
          <h1 className = "employment-header employment-h1">{this.props.Company}</h1>
          <h2 className = "employment-header employment-h2">{this.props.Title}</h2>
          <p className = "employment-time">{this.props.Time}</p>
          <hr className = "employment-hr"/>
          <p className = "employment-description">{this.props.Description}</p>
        </div>
      </div>
    )
  }

}

export default EmploymentItem;
