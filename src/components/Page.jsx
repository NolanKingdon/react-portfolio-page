import React, { Component } from 'react';
import Header from './Header';
import './css/styles.css';

class Page extends Component {
  constructor(props){
    super(props);
  }

  // Rendering our components.
  render(){
    return (
      <div className="main-page">
          <Header pageName="About"></Header>
      </div>
    );
  }
}

export default Page;
