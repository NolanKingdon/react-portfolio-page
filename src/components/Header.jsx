import React from 'react';
import './css/styles.css';

function Header(props) {
    return (
        <div className="main-header">
            <h2>
                {props.pageName}
            </h2>
        </div>
    );
}

export default Header;
