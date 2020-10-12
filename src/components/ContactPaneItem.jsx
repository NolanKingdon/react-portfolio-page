import React from 'react';

function PaneItem(props){
    return (
        <a href={props.link} target="_blank" className={"panel-item " + props.panelType}>
            <img src={props.icon} alt={props.iconAltText}/>
            <div className="panel-item-content">
                <h2 className="panel-header-text">{props.primaryText}</h2>
            </div>
        </a>
    );
}

export default PaneItem;