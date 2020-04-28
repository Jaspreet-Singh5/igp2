import React from 'react';

import './Reporting.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import ReportingCards from '../ReportingCards/ReportingCards';

const reporting = props => (
    <Aux classes={ "Reporting " + props.classes }>
        <header>
            <div className="header_reporting">
                <h1 className="display-1 header_reporting--heading1">Something wrong!</h1>
                <h3 className="display-3 header_reporting--heading3">Report Now</h3>            
            </div>
        </header>

        <ReportingCards classes="reportingCards" historyObj={props.history}></ReportingCards>

        
    </Aux>    
);

export default reporting;