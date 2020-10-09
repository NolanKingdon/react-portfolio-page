import React from 'react';

function NavigationItem(props){

    return (
        <div className="navigation-item" onClick={() => props.changeState(props.name)}>
            <div className={props.hidden}>{props.name}</div>
            <img src={props.icon} />
        </div>
    );
}

export default NavigationItem;