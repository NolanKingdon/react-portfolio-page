import React, { Component } from 'react';
import Header from './Header';
import Pane from './Pane';

class Page extends Component {
  constructor(props){
    super(props);
  }

  // Rendering our components.
  render(){
    return (
      <div className="main-page">
          <Header pageName={this.props.currentPage}></Header>
          <Pane content={this.props.pageContents}></Pane>
      </div>
    );
  }
}

export default Page;
