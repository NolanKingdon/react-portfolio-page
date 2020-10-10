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
            <img src={props.icon} alt={props.iconAltText}/>
            <div className="panel-item-content">
                <h2 className="panel-header-text">{props.primaryText}</h2>
                {props.secondaryText && <p className="panel-secondary-text">{props.secondaryText}</p>}
                {props.date && <p className="panel-date">{props.date}</p>}
                {props.description && 
                    <React.Fragment>
                        <hr/>
                        <p>{props.description}</p> 
                    </React.Fragment>
                }
            </div>
        </a>
    );
}

export default PaneItem;