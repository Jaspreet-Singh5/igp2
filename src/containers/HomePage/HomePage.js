import React, { Component } from 'react';
import './HomePage.css';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Header from '../../components/Header/Header';
import Reporting from '../../components/Reporting/Reporting';
import Footer from '../../components/Footer/Footer';

class HomePage extends Component {
    render () {

        return (
            <Aux classes='HomePage'>
                <div className="top-section">    
                    <Header classes="header animated bounce"></Header>

                    <Reporting classes="reporting"></Reporting>     

                    <Footer></Footer>               
                </div>
            </Aux>
        );
    }
}

export default HomePage;