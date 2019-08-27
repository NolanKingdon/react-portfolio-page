import React, { Component } from 'react';
import EmploymentItem from './Employment-Item.jsx';
import './css/Employment.css';
import PSLogo from './images/PS-logo.png'
import BVPLogo from './images/BVP-logo.png'
import Animate from 'react-move/Animate';
import { easeExpOut, easeLinear } from 'd3-ease';

class Employment extends Component {

  render(){
    return(
      <Animate
        start={()=> ({
          x: "40vw",
          fd: "column",
          mt: "0vw",
        })}

        update={() => ({
          x: [ this.props.navHidden ? "2vw" : "40vw"],
          fd: [ this.props.navHidden ? "row" : "column"],
          mt: [ this.props.navHidden ? "30vh" : "0vh"],
          timing: { duration: 1000, ease: easeExpOut },
        })}
      >
        {(state) => {
          const { x, fd, mt } = state;
          return(
            <div className = "employment-container" style = {{marginLeft: x, flexDirection: fd, marginTop: mt}}>
              {/*Look into the React-Move for a fancy re-arrange. This will have to do for now though*/}
              <EmploymentItem
                Company = "PowerSchool"
                Title = "Implementation Specialist"
                Time = "January 2018 - December 2018"
                Description = "Work hands on with multiple projects using HTML, CSS, and Javascript through PowerSchool's custom CMS to create mobile friendly school registration forms for first year clients. Responsible for project implementations for districts containing up to 25,000 students."
                image = {PSLogo}
                />
              <EmploymentItem
                Company = "Buona Vita Pizza"
                Title = "Web Developer"
                Time = "May 2018 - December 2018"
                Description = "Worked with the owners to create a simple webpage to hold their online menu. Used a wireframe to create the website from scratch, as well as hosted on a third party hosting service. Currently working to develop a React based online ordering system, and a PHP backend for easy price updates. Currently responsible for maintenance of content."
                image = {BVPLogo}
                />
              <EmploymentItem
                Company = "PowerSchool"
                Title = "Online Solution Specialist"
                Time = "June 2017 - January 2018"
                Description = "Online Solution Specialist for the Registration department in PowerSchool. Maintained existing online registration forms using HTML, CSS, and JavaScript through a custom CMS. Responsibilities included ensuring secure data delivery once collected. Responsible for maintaining forms for school districts of up to 7,000 students."
                image = {PSLogo}
                />
            </div>
          )
        }}

    </Animate>
    )
  }
}

export default Employment
