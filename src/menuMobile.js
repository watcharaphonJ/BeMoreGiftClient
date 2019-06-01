import React, { Component } from 'react'
import './css/menuMobile.css'

import { NavLink } from 'react-router-dom'
var open = false
export default class menuMobile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            hong: false
        }
    }
    toggleMenuBar = () => {
        open = !open
        console.log(open)
        // this.setState({
        //     open: !open
        // })
        if (open) {
            document.getElementById("menu-nav-mobile").style.transition = "0.5s";
            document.getElementById("menu-nav-mobile").style.display = 'block'
            document.getElementById("menu-nav-mobile").style.overflowY = "hidden";
            document.getElementById("menu-nav-mobile").style.maxHeight = "500px";
            document.getElementById("menu-nav-mobile").style.boxShadow = "rgb(54, 54, 54) -10px 11px 10px -9px";
        } else {
            document.getElementById("menu-nav-mobile").style.transition = "0.5s";
            document.getElementById("menu-nav-mobile").style.maxHeight = "0";
            document.getElementById("menu-nav-mobile").boxShadow = "none"
        }
    }

    render() {
        var { open } = this.state
        console.log(open)
        return (
            <div className="bgMenu-mobile">
                <div className="menu-wrapper-mobile" id="main">
                    <div className="logo-menu-mobile">
                        <i id="icon-menu-mobile" class="fas fa-bars icon-menu-mobile" onClick={

                            this.toggleMenuBar

                        }></i>
                    </div>
                    <div id="menu-nav-mobile" className="menu-nav-mobile">
                        <div className="element-sub-menu-mobile">

                            <NavLink exact to="/" className="text-sub-menu-mobile" activeClassName="selected">Home</NavLink>


                        </div>
                        <div className="element-sub-menu-mobile">
                            <NavLink exact to="/list" className="text-sub-menu-mobile" activeClassName="selected">Listing</NavLink>
                        </div>
                        <div className="element-sub-menu-mobile">
                            <NavLink exact to="/blog" className="text-sub-menu-mobile" activeClassName="selected">Blog</NavLink>
                        </div>
                        <div className="element-sub-menu-mobile">

                            <NavLink exact to="/contact" className="text-sub-menu-mobile" activeClassName="selected">Contact</NavLink>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
