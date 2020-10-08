import React, { Component } from 'react';
import Page from './components/Page';
import NavigationBar from './components/NavigationBar';
import './components/css/styles.css';
import navigationItems from './model/navigation.json';
import pageContent from './model/pageContent.json'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentPage: "My Work"
    }
  }

  // Rendering our components.
  render(){
    return (
      <div className="main-flex-panel">
        <NavigationBar items={navigationItems}></NavigationBar>
        <Page currentPage={this.state.currentPage} pageContents={pageContent[this.state.currentPage]}></Page>
      </div>
    );
  }
}

export default App;
