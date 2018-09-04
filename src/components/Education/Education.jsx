import React, { Component } from 'react';
import './css/education.css';
import EducationItem from './educationItem.jsx';
import UdemyLogo from './images/udemy-logo.png';
import BrockLogo from './images/Brock_logo.png';
import MitLogo from './images/MITOCW.png';

class Education extends Component {

  render(){
    {/*Again, map this in the future*/}
    return(
      <div className = "education-grid">
        <EducationItem link = {"https://www.udemy.com/react-js-and-redux-mastering-web-apps/learn/v4/overview"} image = {UdemyLogo} title = {"React JS and Redux - Mastering Web Apps"} noteText = {"David Katz - Software Engineer"}/>
        <EducationItem link = {"https://www.udemy.com/create-php-ajax-js-jquery-mysql-login-system-today/learn/v4/overview"} image = {UdemyLogo} title = {"Create a PHP Login and Registration from Scratch"} noteText = {"Kalob Taulien - Web Developer"}/>
        <EducationItem link = {"https://www.udemy.com/javascript-learn-javascript-essentials-and-build-project/learn/v4/overview"} image = {UdemyLogo} title = {"Learn JavaScript for Web Development"} noteText = {"Irfan Dayan - Freelancer/Web Developer"}/>
        <EducationItem link = {"https://www.udemy.com/csharp-tutorial-for-beginners/learn/v4/"} image = {UdemyLogo} title = {"C# Basics for Beginners: Learn C# Fundamentals by Coding"} noteText = {"Mosh Hamedani - Software Engineer"}/>
        <EducationItem link = {"https://www.udemy.com/complete-python-bootcamp/learn/v4/overview"} image = {UdemyLogo} title = {"Complete Python Bootcamp: Go from zero to hero in Python"} noteText = {"Jose Portilla - Data Scientist"}/>
        <EducationItem link = {"https://ocw.mit.edu/index.htm"} image = {MitLogo} title = {"Core Computer Science Courses"} noteText = {"https://ocw.mit.edu/index.htm"}/>
        <EducationItem link = {"https://brocku.ca/social-sciences/"} image = {BrockLogo} title = {"Bachelor of Arts (BA)"} noteText = {"Honours Sociology, Conc. Criminology - Minor in Philosophy"}/>
      </div>
    )
  }

}

export default Education;
