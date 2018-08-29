import React, { Component } from 'react'

class EmploymentItem extends Component {

  render(){
    return(
      <div className = "employment-container">
        <img className = "employer-logo" src = {this.props.image}></img>
        <div>
          <h1 className = "employment-header">{this.props.Company}</h1>
          <h2 className = "employment-header">{this.props.Title}</h2>
          <p className = "employment-time">{this.props.Time}</p>
          <hr className = "employment-hr"/>
          <p className = "employment-description">{this.props.Description}</p>
        </div>
      </div>
    )
  }

}

export default EmploymentItem;
