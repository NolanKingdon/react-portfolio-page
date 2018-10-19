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
      navTop: (window.innerHeight - (window.innerHeight/3)*4)
    }
    this.pageChanger = this.pageChanger.bind(this);
    this.pageChangerMobile = this.pageChangerMobile.bind(this);
    this.displayToggle = this.displayToggle.bind(this);
    this.sliderToggle = this.sliderToggle.bind(this);
    this.courseSelector = this.courseSelector.bind(this);
    this.workSliderToggle = this.workSliderToggle.bind(this);
    this.projectSelector = this.projectSelector.bind(this);
  }

  pageChanger(newPage){
    this.setState({
      page: newPage
    });
  }

  pageChangerMobile(newPage){
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
      <div>

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
              x: this.state.navTop,
            })}

            update={() => ({
              x: [ this.state.navHidden ? this.state.navTop : 0],
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
                    top: x,
                    left: "0",
                    width: "100%",
                    height: "40%",
                    backgroundColor: "#023670",
                    color: "white",
                    MozBoxShadow:    "4px 3px 10px 1px #ccc",
                    WebkitBoxShadow: "4px 3px 10px 1px #ccc",
                    boxShadow:       "4px 5px 10px 1px gray",
                  }}
                  />
              )
            }}
          </Animate>
          <Header
            screenSize = {this.state.width}
            page = {this.state.page}
            dynamicTopMargin = {{marginTop: "4em"}}
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
