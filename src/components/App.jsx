import React, { Component } from 'react';
import NavMain from './Nav-Bar/navMain.jsx';
import AboutPage from './About/About-Page.jsx';
import Header from './Header-Bar/Header.jsx';
import Employment from './Employment/Employment.jsx';
import Education from './Education/Education.jsx';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';

class App extends Component {
//Commented out code was an attempt at having the navBar display, and then move to -20vw to improve UI
//Will return to this later
  constructor(props){
    super(props);
    this.state = {
      page: "Education",
      navHidden: false,
      showInfoSlider: false,
      currentCourse: "None"
    }
    this.pageChanger = this.pageChanger.bind(this);
    this.displayToggle = this.displayToggle.bind(this);
    this.sliderToggle = this.sliderToggle.bind(this);
    this.courseSelector = this.courseSelector.bind(this);
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

  render(){
    return(
      <div>
        <Animate
          start={()=> ({
            x: "0vw",
          })}

          update={() => ({
            x: [ this.state.navHidden ? "-20vw" : "0vw"],
            timing: { duration: 1000, ease: easeExpOut },
          })}
        >
          {(state) => {
            const { x } = state;

            return(
              <NavMain
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
          page = {this.state.page}
        />
        {this.state.page == "About" && <AboutPage />}
        {this.state.page == "Employment History" && <Employment />}
        {this.state.page == "Education" && <Education
                                              currentCourse = {this.state.currentCourse}
                                              courseSelector = {this.courseSelector}
                                              showInfoSlider = {this.state.showInfoSlider}
                                              sliderToggle = {this.sliderToggle}
                                            />
                                          }
      </div>
    )
  }
}

export default App;
