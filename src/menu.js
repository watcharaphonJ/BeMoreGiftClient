import React, { Component } from 'react';
import './css/menu.css'
import Logo from './img/logo.png'
import { NavLink } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div className="bgMenu" id="menu">
                <div className="menu-wrapper">

                    <div className="logo-menu">

                        <img className="logo" src={Logo} />
                    </div>
                    <div className="menu-nav">
                        <NavLink exact to="/" activeClassName="selected">Home</NavLink>
                        <NavLink exact to="/list" activeClassName="selected">Listing</NavLink>
                        <NavLink exact to="/blog" activeClassName="selected">Blog</NavLink>
                        <NavLink exact to="/contact" activeClassName="selected">Contact</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
