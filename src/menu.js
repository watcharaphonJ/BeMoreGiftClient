import React, { Component } from 'react';
import './css/menu.css'
import Logo from './img/logo.png'
import { NavLink } from 'react-router-dom'


class App extends Component {

    // getPosition = () => {
    //     window.addEventListener("scroll", function (event) {
    //         var scroll = this.scrollY;
    //         if (scroll >= 313.6000061035156) {
    //             document.getElementById("menu").style.position = "fixed";
    //             document.getElementById("menu").style.transform = "translate(0,0) scale(1);";
    //             document.getElementById("menu").style.transition = "0.3s";
    //         }
    //         else if (scroll <= 313.6000061035156) {
    //             document.getElementById("menu").style.visibility = "absolute";
    //             document.getElementById("menu").style.transform = "translate(0,-100%) scale(1);";
    //             document.getElementById("menu").style.transition = "0.3s";
    //         }
    //     });
    // }
    render() {
        //   this.getPosition()
        return (
            <div className="bgMenu" id="menu">
                <div className="menu-wrapper" id="main">
                    <div className="logo-menu">

                        <NavLink exact to="/" activeClassName="selected">  <img className="logo" src={Logo} /></NavLink>

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
