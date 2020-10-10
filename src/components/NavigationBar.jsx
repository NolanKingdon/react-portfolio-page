import React from 'react';
import NavigationItem from './NavigationItem';
import './css/styles.css';


function NavigationBar(props){
    // I don't like this. feels like the exact thing I'm refactoring to get away from.
    let hiddenClass = props.extended ? "" : " content-hidden";
    let navWidth = props.extended ? "350px" : "50px";

    return (
        <div className="navigation-bar-body shadowed" style={{width: navWidth}}>
            <div className="navigation-header-container">
                <div className={"navigation-header" + hiddenClass}>
                    <h3>Nolan Kingdon</h3>
                    <p><a href="tel:9052201705">905-220-1705</a></p>
                    <p><a href="mailto:nolan.kingdon@gmail.com">nolan.kingdon@gmail.com</a></p>
                </div>
                <div className="navigation-button-container">
                    <button
                        className="navigation-toggle-button"
                        onClick={() => props.toggleHandler()}>
                            Toggle
                    </button>
                </div>
            </div>
            {
                Object.keys(props.items).map(keyName => {
                    return (<NavigationItem
                                hidden={hiddenClass}
                                key={keyName}
                                name={keyName}
                                icon={props.items[keyName].icon} 
                                changeState={props.changeState}/>)
                })
            }
        </div>
    );
}

export default NavigationBar;
