import React from 'react';
import burger from '../images/navbar/nav-icons/mobile/Hamburger_icon.png';

function MobileNavButton(props){
    let imgRotation = props.extended ? 'rotate(0deg)' : 'rotate(180deg)';

    return (
        <div className="mobile-btn mobile-btn-toggle">
            <button onClick={() => props.toggleHandler()}>
                <img src={burger} alt="Menu toggle icon" style={{transform: imgRotation}}/>
            </button>
        </div>
    );
}

export default MobileNavButton;
