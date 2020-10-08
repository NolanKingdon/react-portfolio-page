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
        <div className={"panel-item " + props.panelType}>
            <img src={props.icon} alt={props.iconAltText}/>
            <h2>{props.primaryText}</h2>
            {props.secondaryText && <p>{props.secondaryText}</p>}
            {props.date && <p>{props.date}</p>}
            {props.description && 
                <React.Fragment>
                    <hr/>
                    <p>{props.description}</p> 
                </React.Fragment>
            }
        </div>
    );
}

export default PaneItem;