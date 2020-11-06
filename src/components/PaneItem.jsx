import React from 'react';

// TODO -> Add in more functionality to truncate the description. Clicking on the card should
//      give the rest of the information.

/**
 * Generates the 
 * 
 * @param {object} props component related information.
 */
function PaneItem(props){
    return (
        <a href={props.link} target="_blank" className={"panel-item " + props.panelType}>
            <div className="info-panel-header">
                <img src={props.icon} alt={props.iconAltText}/>
                <div>
                    <h2 className="panel-header-text">{props.primaryText}</h2>
                    {props.secondaryText && <p className="panel-secondary-text">{props.secondaryText}</p>}
                    {props.date && <p className="panel-date">{props.date}</p>}
                </div>
            </div>
            <div className="panel-item-content">
                <hr/>
                {props.description && <p>{props.description}</p> }
            </div>
        </a>
    );
}

export default PaneItem;