import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const button = props => (
    <div id="container">
        <button className="Button learn-more">
            <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
            </span>
            <span className="button-text"><Link to=''>{props.children}</Link></span>
        </button>
    </div>
);

export default button;