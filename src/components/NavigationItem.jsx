import React from 'react';

function NavigationItem(props){

    return (
        <div className="navigation-item">
            <div>{props.name}</div>
            <div>{props.icon}</div>
        </div>
    );
}

export default NavigationItem;