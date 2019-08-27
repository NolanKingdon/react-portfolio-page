import React, { Component } from 'react';
import NavMain from './Nav-Bar/navMain.jsx';
import NavMobile from './Nav-Bar/navMobile.jsx';
import AboutPage from './About/About-Page.jsx';
import MobileAboutPage from './About/MobileAbout.jsx';
import Header from './Header-Bar/Header.jsx';
import Employment from './Employment/Employment.jsx';
import MobileEmployment from './Employment/MobileEmployment.jsx';
import Education from './Education/Education.jsx';
import MobileEducation from './Education/MobileEducation.jsx';
import Work from './Work/Work.jsx';
import WorkMobile from './Work/WorkMobile.jsx';
import Contact from './Contact/Contact.jsx';
import MobileContact from './Contact/MobileContact.jsx';
import Buttons from './MobileNavButtons/Buttons.jsx';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';
import { CSSTransitionGroup } from 'react-transition-group';
import './css/transitions.css';

class App extends Component {
//Commented out code was an attempt at having the navBar display, and then move to -20vw to improve UI
//Will return to this later
  constructor(props){
    super(props);
    const navHiddenInitial =  (window.innerWidth < 1100 ? true : false);
    this.state = {
      page: "About",
      navHidden: navHiddenInitial,
      showInfoSlider: false,
      currentCourse: "None",
      showWorkSlider: false,
      currentProject: "None",
      width: window.innerWidth,
      navRight: -400,
      mobileBtnDisplay: [false, true]
    }
    this.pageChanger = this.pageChanger.bind(this);
    this.pageChangerMobile = this.pageChangerMobile.bind(this);
    this.displayToggle = this.displayToggle.bind(this);
    this.sliderToggle = this.sliderToggle.bind(this);
    this.courseSelector = this.courseSelector.bind(this);
    this.workSliderToggle = this.workSliderToggle.bind(this);
    this.projectSelector = this.projectSelector.bind(this);
    this.mobileButtonToggle = this.mobileButtonToggle.bind(this);
  }

  pageChanger(newPage){
    this.setState({
      page: newPage
    });
  }

  pageChangerMobile(newPage){
    window.scrollTo(0, 0);
    this.setState({
      page: newPage
    });
    this.displayToggle();
  }

  displayToggle(){
    this.setState({navHidden: !this.state.navHidden});
  }

  sliderToggle(){
    this.setState({showInfoSlider: !this.state.showInfoSlider});
  }

  courseSelector(currentCourse) {
    this.setState({currentCourse: currentCourse})
  }

  workSliderToggle(){
    this.setState({showWorkSlider: !this.state.showWorkSlider});
  }

  projectSelector(currentProject) {
    this.setState({currentProject: currentProject})
  }

  componentDidMount() {
      window.addEventListener("resize", this.resize.bind(this));
      this.resize();
  }

  resize() {
    let windowWidth = window.innerWidth;
    this.setState({navTop: (window.innerHeight - (window.innerHeight/3)*4)})
    if(windowWidth >= 1900){
      this.setState({width: 1920, navHidden: false});
    } else if (windowWidth <= 1919 && windowWidth >= 1300){
      this.setState({width: 1366, navHidden: false});
    } else if (windowWidth <= 1299 && windowWidth >= 1100){
      this.setState({width: 1280, navHidden: false});
    } else if (windowWidth < 1100 && windowWidth > 750){
      this.setState({width: 900, navHidden: true});
    } else if (windowWidth < 750 && windowWidth > 650){
      this.setState({width: 750, navHidden: true});
    } else if (windowWidth <= 650) {
      this.setState({width: 650, navHidden: true});
    }
  }

  mobileButtonToggle(direction){
    //Mapping the pages based on what is before and after
    const pages = {
      "About":["","Employment History"],
      "Employment History": ["About", "My Work"],
      "My Work": ["Employment History", "Education"],
      "Education":["My Work", "Contact"],
      "Contact":["Education", ""]
    }
    //Checking to see the direction of the btn press
    if(direction == "fwd"){
      //if our array is not empty execute the following
      if(pages[this.state.page][1] !== ""){
        //Change page to associated next item
        this.pageChangerMobile(pages[this.state.page][1]);
        //Set state so we know that we should load in the button again
        this.setState({
          mobileBtnDisplay: [true, true]
        });
      } else {
        //If the next item in our map IS empty, we're going to want to hide the button
        this.setState({
          mobileBtnDisplay: [false, true]
        })
      }
    } else if(direction == "back"){
      if(pages[this.state.page][0] !== ""){
        this.pageChangerMobile(pages[this.state.page][0]);
        this.setState({
          mobileBtnDisplay: [true, true]
        });
      } else {
        this.setState({
          mobileBtnDisplay: [true, false]
        })
      }
    }
  }

  render(){

    let responsiveX = "0vw";

    if(this.state.width == 1920){
      responsiveX = "-19vw";
    } else if(this.state.width == 1366){
      responsiveX = "-19vw";
    } else if(this.state.width == 1280){
      responsiveX = "-19vw";
    } else if(this.state.width == 900){
      //Nothing, yet.
    }

    return(
      <div style={{overflowX: "hidden"}}>

        { (this.state.width != 900 && this.state.width != 750 && this.state.width != 650) &&
          <div>
            <Animate
              start={()=> ({
                x: "0vw",
                left: "0%"
              })}

              update={() => ({
                x: [ this.state.navHidden ? responsiveX : "0vw"],
                left: [ this.state.navHidden ? "90%" : "5%"],
                timing: { duration: 1000, ease: easeExpOut },
              })}
            >
              {(state) => {
                const { x, left } = state;

                return(
                  <NavMain
                    screenSize = {this.state.width}
                    className = "nav-bar"
                    changer = {this.pageChanger}
                    displayToggle = {this.displayToggle}
                    navHidden = {this.state.navHidden}
                    divStyle = {{
                      position: "fixed",
                      top: "0",
                      left: x,
                      width: "22vw",
                      height: "100%",
                      backgroundColor: "#023670",
                      color: "white",
                      textAlign: "left",
                      MozBoxShadow:    "4px 3px 10px 1px #ccc",
                      WebkitBoxShadow: "4px 3px 10px 1px #ccc",
                      boxShadow:       "4px 5px 10px 1px gray",
                      WebkitTransform: `translate3d(${x}px, 0, 0)`,
                      transform:       `translate3d(${x}px, 0, 0)`,
                    }}
                  navImgLeftPos = {left}
                  />
                )
              }}
            </Animate>
            <Header
              screenSize = {this.state.width}
              page = {this.state.page}
            />
            <CSSTransitionGroup
              transitionName="main-pages"
              transitionEnterTimeout={600}
              transitionLeaveTimeout={1}
              >
                {this.state.page === "About" && <AboutPage
                                                    screenSize = {this.state.width}
                                                    navHidden = {this.state.navHidden}/>}
                {this.state.page === "Employment History" && <Employment
                                                                screenSize = {this.state.width}
                                                                navHidden = {this.state.navHidden}/>}
                {this.state.page === "Education" && <Education
                                                      screenSize = {this.state.width}
                                                      navHidden = {this.state.navHidden}
                                                      currentCourse = {this.state.currentCourse}
                                                      courseSelector = {this.courseSelector}
                                                      showInfoSlider = {this.state.showInfoSlider}
                                                      sliderToggle = {this.sliderToggle}
                                                    />}
                {this.state.page === "My Work" && <Work
                                                    screenSize = {this.state.width}
                                                    navHidden = {this.state.navHidden}
                                                    currentProject = {this.state.currentProject}
                                                    projectSelector = {this.projectSelector}
                                                    showWorkSlider = {this.state.showWorkSlider}
                                                    sliderToggle = {this.workSliderToggle}
                                                  />}
                {this.state.page === "Contact" && <Contact
                                                    screenSize = {this.state.width}
                                                    navHidden = {this.state.navHidden}/>}
            </CSSTransitionGroup>
        </div>
      }
      { (this.state.width == 900 || this.state.width <= 750) &&
        <div>

          <Animate
            start={()=> ({
              x: this.state.navRight,
            })}

            update={() => ({
              x: [ this.state.navHidden ? this.state.navRight : 10],
              timing: { duration: 1000, ease: easeExpOut },
            })}
            >
            {(state) => {
              const { x } = state;

              return(
                <NavMobile
                  changer = {this.pageChangerMobile}
                  displayToggle = {this.displayToggle}
                  navHidden = {this.state.navHidden}
                  divStyle = {{
                    position: "fixed",
                    bottom: "140px",
                    right: x,
                    width: "50vw",
                    height: "11em",
                    backgroundColor: "#023670",
                    color: "white",
                    MozBoxShadow:    "2px 2px 10px 1px black",
                    WebkitBoxShadow: "2px 2px 10px 1px black",
                    boxShadow:       "2px 2px 10px 1px black",
                    zIndex: 99999
                  }}
                  />
              )
            }}
          </Animate>
          <Header
            screenSize = {this.state.width}
            page = {this.state.page}
            />
          <Buttons
            displayToggle = {this.displayToggle}
            navHidden = {this.state.navHidden}
            mobileButtonToggle = {this.mobileButtonToggle}
            page = {this.state.page}
          />
          <CSSTransitionGroup
            transitionName="main-pages"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={1}
            >
              {this.state.page === "About" && <MobileAboutPage
                                                  screenSize = {this.state.width}
                                                  navHidden = {this.state.navHidden}/>}
              {this.state.page === "Employment History" && <MobileEmployment
                                                              screenSize = {this.state.width}
                                                              navHidden = {this.state.navHidden}/>}
              {this.state.page === "Education" && <MobileEducation
                                                    screenSize = {this.state.width}
                                                    navHidden = {this.state.navHidden}
                                                    currentCourse = {this.state.currentCourse}
                                                    courseSelector = {this.courseSelector}
                                                    showInfoSlider = {this.state.showInfoSlider}
                                                    sliderToggle = {this.sliderToggle}
                                                  />}
              {this.state.page === "My Work" && <WorkMobile
                                                  screenSize = {this.state.width}
                                                  navHidden = {this.state.navHidden}
                                                  currentProject = {this.state.currentProject}
                                                  projectSelector = {this.projectSelector}
                                                  showWorkSlider = {this.state.showWorkSlider}
                                                  sliderToggle = {this.workSliderToggle}
                                                />}
              {this.state.page === "Contact" && <MobileContact
                                                  screenSize = {this.state.width}
                                                  navHidden = {this.state.navHidden}/>}
          </CSSTransitionGroup>
        </div>
      }

      </div>
    )
  }
}

export default App;
