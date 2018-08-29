import React, { Component } from 'react';
import EmploymentItem from './Employment-Item.jsx';
import './css/Employment.css';
import PSLogo from './images/PS-logo.png'
import BVPLogo from './images/BVP-logo.png'

class Employment extends Component {

  render(){
    return(
      <div style = {{position: "absolute", left: 500}}>
        {/*Consider making this a cool Grid/Tile fade in to reduce whitespace*/}
        {/*Turn this into a map function with a functional backend using either firebase or a PHP DB depending on where you host this*/}
        <EmploymentItem
          Company = "Buona Vita Pizza"
          Title = "Web Developer"
          Time = "May - Present"
          Description = "Web Developer for Buona Vita Pizza. Made a website. More placeHolder Text."
          image = {BVPLogo}
        />
      <EmploymentItem
        Company = "PowerSchool"
        Title = "Project Manager"
        Time = "January 2018 - Present"
        Description = "Project Manager for the Registration department in PowerSchool. Managed multiple implementation projects of PowerSchool's Online registration software."
        image = {PSLogo}
      />
      <EmploymentItem
        Company = "PowerSchool"
        Title = "Online Solution Specialist"
        Time = "June 2017 - January 2018"
        Description = "Online Solution Specialist for the Registration department in PowerSchool. Designed and deployed online registration forms using a custom CMS."
        image = {PSLogo}
      />
      {/*End Potential Map Function*/}
      </div>
    )
  }
}

export default Employment
