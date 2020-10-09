import React, { Component } from 'react';
import Page from './components/Page';
import NavigationBar from './components/NavigationBar';
import './components/css/styles.css';
import navigationItems from './model/navigation.jsx';
import pageContent from './model/pageContent.jsx';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentPage: "About",
      navExtended: true
    }

    this.changeState = this.changeState.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  changeState(page){
    this.setState({currentPage: page});
  }

  toggleNavbar(){
    let extended = this.state.navExtended;
    this.setState({navExtended: !extended});
  }

  // Rendering our components.
  render(){

    return (
      <div className="main-flex-panel">
        <NavigationBar
          items={navigationItems}
          changeState={this.changeState} 
          toggleHandler={this.toggleNavbar}
          extended={this.state.navExtended}/>
        <Page
          currentPage={this.state.currentPage}
          pageContents={pageContent[this.state.currentPage]} />
      </div>
    );
  }
}

export default App;
