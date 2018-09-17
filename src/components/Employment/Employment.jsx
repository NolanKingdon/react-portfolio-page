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
                Company = "Buona Vita Pizza"
                Title = "Web Developer"
                Time = "May 2018 - Present"
                Description = "Web Developer for Buona Vita Pizza. Worked with the owners to create a simple webpage to hold their online menu. Used a wireframe to create the website from scratch, as well as hosted on a third party hosting service. Currently working to develop a PHP based online ordering system, and a PHP backend for easy price updates. Currently responsible for maintenance of content."
                image = {BVPLogo}
                />
              <EmploymentItem
                Company = "PowerSchool"
                Title = "Project Manager"
                Time = "January 2018 - Present"
                Description = "Project Manager for the Registration department in PowerSchool. Managed multiple implementation projects of PowerSchool's online registration software, often liasing with clients in order to maintain the timeline and drive projects forward. Responsibilities also include running and reporting QA tasks for forms before launch, in which I made a Python based reporting tool to optimize reporting - Saving roughly an hour of time in reporting a week."
                image = {PSLogo}
                />
              <EmploymentItem
                Company = "PowerSchool"
                Title = "Online Solution Specialist"
                Time = "June 2017 - January 2018"
                Description = "Online Solution Specialist for the Registration department in PowerSchool. Designed and deployed online registration forms using HTML, CSS, and JavaScript through a custom CMS. Responsible for both front and backend configuration. Back end responsibilities included leveraging the CMS and API connections to ensure secure data delivery."
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
