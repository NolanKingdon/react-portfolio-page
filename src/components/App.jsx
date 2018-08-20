import React, { Component } from 'react';
import NavMain from './Nav-Bar/navMain.jsx';
import AboutPage from './About/About-Page.jsx';

class App extends Component {
  render(){
    return(
      <div>
        <NavMain className = "nav-bar test"/>
        <AboutPage />
      </div>
    )
  }
}

export default App;
