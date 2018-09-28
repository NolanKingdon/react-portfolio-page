import React, { Component } from 'react';
import NavMain from './Nav-Bar/navMain.jsx';
import AboutPage from './About/About-Page.jsx';
import Header from './Header-Bar/Header.jsx';
import Employment from './Employment/Employment.jsx';
import Education from './Education/Education.jsx';
import Work from './Work/Work.jsx';
import Contact from './Contact/Contact.jsx';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';
import { CSSTransitionGroup } from 'react-transition-group';
import './css/transitions.css';

class App extends Component {
//Commented out code was an attempt at having the navBar display, and then move to -20vw to improve UI
//Will return to this later
  constructor(props){
    super(props);
    this.state = {
      page: "About",
      navHidden: false,
      showInfoSlider: false,
      currentCourse: "None",
      showWorkSlider: false,
      currentProject: "None",
      width: window.innerWidth
    }
    this.pageChanger = this.pageChanger.bind(this);
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
    if(windowWidth >= 1900){
      this.setState({width: 1920});
    } else if (windowWidth <= 1919 && windowWidth >= 1300){
      this.setState({width: 1366});
    } else if (windowWidth <= 1299 && windowWidth >= 1000){
      this.setState({width: 1280});
    } else if (windowWidth < 760){
      this.setState({width: "mobile"});
    }
    console.log(this.state.width);
  }

  render(){

    let responsiveX = "0vw";

    if(this.state.width == 1920){
      responsiveX = "-20vw";
    } else if(this.state.width == 1366){
      responsiveX = "-19vw";
    } else if(this.state.width == 1280){
      responsiveX = "-19vw";
    }

    return(
      <div>

        <Animate
          start={()=> ({
            x: "0vw",
          })}

          update={() => ({
            x: [ this.state.navHidden ? responsiveX : "0vw"],
            timing: { duration: 1000, ease: easeExpOut },
          })}
        >
          {(state) => {
            const { x } = state;

            return(
              <NavMain
                screenSize = {this.state.width}
                className = "nav-bar test"
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
    )
  }
}

export default App;
