import React, { Component } from 'react';
import NavMain from './Nav-Bar/navMain.jsx';
import AboutPage from './About/About-Page.jsx';
import Header from './Header-Bar/Header.jsx';

class App extends Component {

  constructor(props){
    this.bind(props);
  }

  render(){
    return(
      <div>
        <NavMain className = "nav-bar test"/>
        <Header page = {"About"} />
        <AboutPage />
      </div>
    )
  }
}

export default App;
