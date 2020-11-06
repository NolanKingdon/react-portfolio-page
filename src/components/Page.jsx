import React from 'react';
import Header from './Header';
import Pane from './Pane';
import { Swipeable } from 'react-swipeable'

function Page(props){
    return (
        <Swipeable 
            onSwipedLeft={props.leftSwipeHandler}
            onSwipedRight={props.rightSwipeHandler}
            className="main-page">
            <Header pageName={props.currentPage}></Header>
            <Pane content={props.pageContents}></Pane>
        </Swipeable>
    );
}

export default Page;
