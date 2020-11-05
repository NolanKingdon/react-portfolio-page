import React, { Component } from 'react';
import Page from './components/Page';
import NavigationBar from './components/NavigationBar';
import MobileNavButton from './components/MobileNavButton';
import MobileNavToggle from './components/MobileNavToggle';
import './css/styles.css';
import navigationItems from './model/navigation.jsx';
import pageContent from './model/pageContent.jsx';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentPage: "About",
      navExtended: true,
      viewportWidth: window.innerWidth,
      isMobile: window.innerWidth <= 700
    }

    this.changeState = this.changeState.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
    this.stepThroughPages = this.stepThroughPages.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  }

  changeState(page){
    this.setState({currentPage: page});
  }

  /**
   * Updates the state and automatically adjusts page content accordingly.
   */
  updateWindowWidth(){
    let width = window.innerWidth;

    this.setState({viewportWidth: width});

    // As part of the update, I Want to automatically close our navbar.
    if (width < 875 && this.state.navExtended) {
      this.toggleNavbar();
    }

    // I also want to check to see if we're tripping into our mobile css.
    if (width <= 700 && !this.state.navExtended){
      // Openning the navbar if it's closed. Keeps text visible.
      this.toggleNavbar();
      this.setState({isMobile: true});
    } else {
      this.setState({isMobile: false});
    }
  }

  stepThroughPages(direction){
    let keys = Object.keys(navigationItems);
    let currentIndex = keys.indexOf(this.state.currentPage);

    // Should be impossible to go out of bounds with normal use -> Buttons disappear.
    if (direction === 'forward') {
      this.setState({currentPage: keys[currentIndex+1]});
    } else if (direction === "back") {
      this.setState({currentPage: keys[currentIndex-1]});
    }
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
            extended={this.state.navExtended} 
            isMobile={this.state.isMobile} />
        {
          this.state.viewportWidth <= 700 &&
            <div className="mobile-nav-btns">
              {
                this.state.currentPage !== "About" &&
                  <MobileNavButton
                    navExtended={this.state.navExtended}
                    direction="back" 
                    pageChanger={this.stepThroughPages}/>
              }
              {
                this.state.currentPage !== "Contact" &&
                  <MobileNavButton 
                    navExtended={this.state.navExtended}
                    direction="forward" 
                    pageChanger={this.stepThroughPages}/>
              }
              <MobileNavToggle 
                extended={this.state.navExtended}
                toggleHandler={this.toggleNavbar}/>
            </div>
        }
        <Page
          currentPage={this.state.currentPage}
          pageContents={pageContent[this.state.currentPage]} />
      </div>
    );
  }
}

export default App;
