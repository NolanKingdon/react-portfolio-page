import React from 'react';
import NavigationItem from './NavigationItem';
import './css/styles.css';


function NavigationBar(props){
    return (
        <div className="navigation-bar-body">
            <div className="navigation-header">
                <h3>Nolan Kingdon</h3>
                <p><a href="tel:9052201705">905-220-1705</a></p>
                <p><a href="mailto:nolan.kingdon@gmail.com">nolan.kingdon@gmail.com</a></p>
            </div>
            {
                Object.keys(props.items).map(keyName => {
                    return (<NavigationItem key={keyName} name={keyName} icon={props.items[keyName].icon}></NavigationItem>)
                })
            }
        </div>
    );
}

export default NavigationBar;
