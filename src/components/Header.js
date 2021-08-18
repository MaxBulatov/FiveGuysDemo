import React from 'react';
import './styles/Header.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const Header = () => {
    return ( 
        <div>
            <nav id="headerMain">
                <Link to="/" style={{ textDecoration: 'none' }}><h2>FIVE GUYS</h2></Link>
                <ul id="nav-links">
                        <li>
                            <Link to="/Locations">Locations</Link>
                        </li>
                        <li>
                            <Link to="/Menu">Menu</Link>
                            {/* <a href="#">Menu</a>   */}
                        </li>
                        <li>
                            <Link to="/Gift">Gift Cards</Link>
                            
                        </li>
                        <li>
                            <Link to="/Contact">Contact Us</Link>
                        </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Header;