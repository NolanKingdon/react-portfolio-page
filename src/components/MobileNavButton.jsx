import React from 'react';
import arrow from '../images/navbar/arrow-left.png';

function MobileNavButton(props){
    let visibility = props.navExtended ? 'inline' : 'none';
    let rotation = props.direction === 'forward' ? 'rotate(180deg)' : '';

    return (
        <div 
            className={"mobile-btn " + "mobile-btn-" + props.direction}
            style={{display: visibility}}>
            <button onClick={() => props.pageChanger(props.direction)}>
                <img src={arrow} alt="navigational arrow" style={{transform: rotation}}/>
            </button>
        </div>
    );
}

export default MobileNavButton;
