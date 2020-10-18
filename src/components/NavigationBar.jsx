import React from 'react';
import NavigationItem from './NavigationItem';
import githubLogo from '../images/GitHub-Logo.png';
import linkedinLogo from '../images/LinkedIn-Logo.png';
import leftArrow from '../images/navbar/arrow-left.png';
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
                            {props.extended && <img src={leftArrow} alt="Left Arrow Icon" />}
                            {!props.extended && <img src={leftArrow} className="flipped-img" alt="Left Arrow Icon" />}
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
            <div className={"navigation-socials" + hiddenClass}>
                <a href="https://github.com/NolanKingdon" target="_blank">
                    <img src={githubLogo} alt="GitHub logo"/>
                </a>
                <a href="https://www.linkedin.com/in/nolan-kingdon/" target="_blank">
                    <img src={linkedinLogo} alt="Linkedin Logo"/>
                </a>
            </div>
        </div>
    );
}

export default NavigationBar;
