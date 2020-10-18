import React from 'react';
import PanelItem from './PaneItem';
import ContactPaneItem from './ContactPaneItem';

/**
 *  The meat of the page. Updates based on input provided in props.
 * @param {object} props component specific props
 */
function Pane(props){
    return (
        <div className="main-pane">
            <div className="pane-content">
                {props.content.image && <img
                                            className="pane-image shadowed"
                                            src={props.content.image}
                                            alt={props.content.imageAlt} />}
                {props.content.primaryText && <h2 className="pane-header">{props.content.primaryText}</h2>}
                {props.content.secondaryText && props.content.secondaryText.map( text => <p className="pane-secondary">{text}</p>)}
                {props.content.items !== undefined &&
                    props.content.items.map((item, index) => {
                        if (item.panelType === 'contact-panel'){
                            return <ContactPaneItem 
                                        key={index}
                                        panelType={item.panelType}
                                        icon={item.itemIcon}
                                        iconAltText={item.iconAltText}
                                        primaryText={item.primaryText}/>
                        }

                        if (item.panelType === 'information-panel'){
                            return <PanelItem
                                        key={index}
                                        panelType={item.panelType}
                                        icon={item.itemIcon}
                                        iconAltText={item.iconAltText}
                                        primaryText={item.primaryText}
                                        secondaryText={item.secondaryText}
                                        date={item.date}
                                        description={item.description}
                                        link={item.link}/>
                        }
                        return;
                    })
                }
            </div>
        </div>
    );
}

export default Pane;