import React, { Component } from 'react';
import Page from './components/Page';
import NavigationBar from './components/NavigationBar';
import './components/css/styles.css';
import navigationItems from './model/navigation.json';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  // Rendering our components.
  render(){
    return (
      <div className="main-flex-panel">
        <NavigationBar items={navigationItems}></NavigationBar>
        <Page></Page>
      </div>
    );
  }
}

export default App;
