import React, { Component } from 'react';
import NavMain from './Nav-Bar/navMain.jsx';
import AboutPage from './About/About-Page.jsx';
import Header from './Header-Bar/Header.jsx';

class App extends Component {
//Commented out code was an attempt at having the navBar display, and then move to -20vw to improve UI
//Will return to this later
  constructor(props){
    super(props);
    this.state = {
      page: "About",
      navOrigin: "0vw"
    }
    //this.navUpdate = this.navUpdate.bind(this);
    //this.mouseEntered = this.mouseEntered.bind(this);
  }

  // navUpdate(){
  //   this.setState({
  //     navOrigin: "-20vw"
  //   })
  //   console.log("Moved: ", this.state.navOrigin);
  // }
  //
  // mouseEntered(){
  //   console.log("Mouse entered");
  //   this.setState({
  //     navOrigin: "0vw"
  //   })
  // }
  //
  // mouseLeft(){
  //   console.log("Mouse Leaving")
  //   this.setState({
  //     navOrigin: -"20vw"
  //   })
  // }

  render(){
    return(
      <div>
        <NavMain
          className = "nav-bar test"
        />
      {/*
        navUpdate = {this.navUpdate}
        navOrigin = {this.state.navOrigin}
        onMouseEnter = {this.mouseEntered}
        onMouseLeave = {this.mouseLeft}
        */}
        <Header
          page = {this.state.page}
        />
        <AboutPage />
      </div>
    )
  }
}

export default App;
