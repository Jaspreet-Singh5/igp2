import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css';

const navbar = props => (
    <nav className={ "nav " + props.classes }>
        <ul className="nav-list">
            <div className="brand">
                <li className="nav-list--item">
                    <NavLink 
                        className="nav-list--link nav-list--brand"
                        to='/'>
                        <div className="nav-logo">
                        
                        </div>
                    </NavLink>
                </li>
            </div>
            

            <div className="menu">
                <li className="nav-list--item">
                    <NavLink 
                        className="nav-list--link"
                        to='/'>Modules
                    </NavLink>
                </li>

                <li className="nav-list--item">
                    <NavLink 
                        className="nav-list--link"
                        to='/prediction'>Prediction
                    </NavLink>
                </li>

                <li className="nav-list--item">
                    <NavLink 
                        className="nav-list--link"
                        to='/about'>About
                    </NavLink>
                </li>
            </div>
            


            <div className="registration">
                <li className="nav-list--item nav-list--item__registration">
                    <NavLink 
                        className="nav-list--link nav-list--link__registration"
                        to='/login'>
                        Log in
                    </NavLink>
                </li>

                <li className="nav-list--item nav-list--item__registration">
                    <NavLink 
                        className="nav-list--link nav-list--link__registration"
                        to='/signup'>Sign up
                    </NavLink>
                </li>
            </div> 
        </ul>
    </nav>   
);

export default navbar;