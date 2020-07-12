import React, { Component } from 'react';
import NavMain from './Nav-Bar/navMain.jsx';
import AboutPage from './About/About-Page.jsx';
import Header from './Header-Bar/Header.jsx';
import Employment from './Employment/Employment.jsx';
import Education from './Education/Education.jsx';
import Work from './Work/Work.jsx';
import Contact from './Contact/Contact.jsx';
import Buttons from './MobileNavButtons/Buttons.jsx';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';
import { CSSTransitionGroup } from 'react-transition-group';
import './css/transitions.css';
import './css/general.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      page: "About",
      pages: [ "About", "Employment", "Work", "Education", "Contact" ],
      navHidden: false,
      showInfoSlider: false,
      currentCourse: "None",
      showWorkSlider: false,
      currentProject: "None",
      mobileBtnDisplay: [false, true]
    }

    // Binding our functions.
    this.pageChanger = this.pageChanger.bind(this);
    this.pageChangerMobile = this.pageChangerMobile.bind(this);
    this.displayToggle = this.displayToggle.bind(this);
    this.sliderToggle = this.sliderToggle.bind(this);
    this.courseSelector = this.courseSelector.bind(this);
    this.workSliderToggle = this.workSliderToggle.bind(this);
    this.projectSelector = this.projectSelector.bind(this);
    this.mobileButtonToggle = this.mobileButtonToggle.bind(this);
  }

  // Communicates with the Router to move between pages.
  pageChanger(newPage){
    this.setState({
      page: newPage
    });
  }

  // Communicates while in mobile. Main difference is our fancy nav will be hidden on click
  // and our window goes back to top.
  pageChangerMobile(newPage){
    window.scrollTo(0, 0);
    this.setState({
      page: newPage
    });
    this.displayToggle();
  }

  // Toggles our nav visibility
  displayToggle(){
    this.setState({navHidden: !this.state.navHidden});
  }

  // Toggles info slider when you click on projects/education
  sliderToggle(){
    this.setState({showInfoSlider: !this.state.showInfoSlider});
  }

  // Used in tandem with sliderToggle - Highlights what information to pull
  courseSelector(currentCourse) {
    this.setState({currentCourse: currentCourse})
  }

  // Shows slider when in work page
  workSliderToggle(){
    this.setState({showWorkSlider: !this.state.showWorkSlider});
  }

  // Used in tandem with wordToggle - Demonstrates the content of the current project
  projectSelector(currentProject) {
    this.setState({currentProject: currentProject})
  }

  // Handling Resize when component mounts - react event
  componentDidMount() {

  }

  mobileButtonToggle(direction){
    let nextIndex;
    if (direction === "fwd"){
      nextIndex = this.state.pages.indexOf(this.state.page) + 1;
    } else {
      nextIndex = this.state.pages.indexOf(this.state.page) - 1; 
    }

    if (nextIndex < this.state.pages.length && nextIndex > 0){
      this.pageChanger(this.state.pages[nextIndex]);
    }
  }

  // Rendering our components
  render(){
    return(
      <div className = "page-container">
        <div className = "page-left">

        </div>
          <NavMain className = "nav-bar"
                   changer = {this.pageChanger}
                   displayToggle = {this.displayToggle}
                   navHidden = {this.state.navHidden}/>
        <div className = "page-right">
          <Header page = {this.state.page}/>
          {/* Buttons are the mobile nav buttons. Add conditional rendering here */}         
        <Buttons displayToggle = {this.displayToggle}
                 navHidden = {this.state.navHidden}
                 mobileButtonToggle = {this.mobileButtonToggle}
                 page = {this.state.page}/>

        {this.state.page === "About" && <AboutPage screenSize = {this.state.width}
                                                   navHidden = {this.state.navHidden}/>}
        {this.state.page === "Employment History" && <Employment screenSize = {this.state.width}
                                                                 navHidden = {this.state.navHidden}/>}
        {this.state.page === "Education" && <Education screenSize = {this.state.width}
                                                       navHidden = {this.state.navHidden}
                                                       currentCourse = {this.state.currentCourse}
                                                       courseSelector = {this.courseSelector}
                                                       showInfoSlider = {this.state.showInfoSlider}
                                                       sliderToggle = {this.sliderToggle}/>}
        {this.state.page === "My Work" && <Work screenSize = {this.state.width}
                                                navHidden = {this.state.navHidden}
                                                currentProject = {this.state.currentProject}
                                                projectSelector = {this.projectSelector}
                                                showWorkSlider = {this.state.showWorkSlider}
                                                sliderToggle = {this.workSliderToggle}/>}
        {this.state.page === "Contact" && <Contact screenSize = {this.state.width}
                                                   navHidden = {this.state.navHidden}/>} 
        </div>
      </div>
    )
  }
}

export default App;
