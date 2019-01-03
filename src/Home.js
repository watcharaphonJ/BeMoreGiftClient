import React, { Component } from 'react';
import Menu from './menu';
import './css/home.css'
import Searchbox from './Searchbox'
import Footer from './footer'
import BGwindow from './img/bgwindow.jpg'
import bgphone from './img/bgphone.jpg'

import { Link } from "react-router-dom";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: false
        }
    }
    checkScreen = () => {
        var width = window.screen.availWidth
        if (width > 640) {
            return (
                <img src={BGwindow} alt="Background" className="BGhome" />
            )
        }
        else {
            return (
                <img src={bgphone} alt="Background" className="BGhome" />
            )
        }
    }
    render() {
        return (
            <div className="page-home">
                <Menu />
                <div className="content-home">
                    {this.checkScreen()}
                    <div className="container-search-box">
                        <div className="text-top-searchbox">
                            <div className="title">Find Nearby Attractions</div>
                            <div className="sub-title">Find the perfect gift for your loved ones.</div>
                        </div>
                        <Searchbox />
                    </div>
                    <div className="container-browse-categories">
                        <div className="header-browse">
                            Browse Categories
                         </div>
                        <div className="container-browse-box">
                            <Link className="box-browse" to={{ pathname: "/list", state: { category: "Food & Drink", search: true } }}>
                                <div >

                                    <i class="fas fa-utensils"></i>
                                    <div>Food & Drink</div>
                                </div>
                            </Link>
                            <Link className="box-browse" to={{ pathname: "/list", state: { category: "Appliance", search: true } }}>
                                <div>

                                    <i class="fas fa-bed"></i>
                                    <div>Appliance</div>
                                </div>
                            </Link>
                            <Link className="box-browse" to={{ pathname: "/list", state: { category: "Decoration", search: true } }}>
                                <div >
                                    <i class="fas fa-shopping-cart"></i>
                                    <div>Decoration</div>
                                </div>
                            </Link>

                            <Link className="box-browse" to={{ pathname: "/list", state: { category: "Costume", search: true } }}>
                                <div>
                                    <i class="fas fa-tshirt"></i>
                                    <div>Costume</div>
                                </div>
                            </Link>

                            <Link className="box-browse" to={{ pathname: "/list", state: { category: "Accessories", search: true } }}>
                                <div >
                                    <i class="fas fa-guitar"></i>
                                    <div>Accessories</div>
                                </div>
                            </Link>
                            <Link className="box-browse" to={{ pathname: "/list", state: { category: "Etc", search: true } }}>
                                <div >
                                    <i class="fas fa-dumbbell"></i>
                                    <div>etc.</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container-footer">
                    <Footer />
                </div>
            </div >
        );
    }
}

export default Home;
