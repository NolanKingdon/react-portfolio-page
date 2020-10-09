import React from 'react';
import Header from './Header';
import Pane from './Pane';

function Page(props){
    return (
        <div className="main-page">
            <Header pageName={props.currentPage}></Header>
            <Pane content={props.pageContents}></Pane>
        </div>
    );
}

export default Page;
