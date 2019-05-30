import React, { Component } from 'react';
import Menu from './menu';
import './css/home.css'
import Searchbox from './Searchbox'
import Footer from './footer'
import bgwindow from './img/bgphone.jpg'
import bgphone from './img/bgphonee.jpg'
import { Link } from "react-router-dom";
import ck from './img/ck-por.jpg'
import kk from './img/kk-por.jpg'
import mh from './img/mh-por.jpg'
import MenuMobile from './menuMobile'
import dec from './img/decoration.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: false
        }
    }
    getPosition = () => {
        window.addEventListener("scroll", function (event) {
            var scroll = this.scrollY;
            // if (scroll >= 500) {
            //     document.getElementById("backtotop").style.visibility = "visible";
            //     document.getElementById("backtotop").style.opacity = "1";
            //     document.getElementById("backtotop").style.transform = "scale(1)";
            // }
            // else if (scroll <= 500) {
            //     document.getElementById("backtotop").style.visibility = "hidden";
            //     document.getElementById("backtotop").style.opacity = "0";
            //     document.getElementById("backtotop").style.transform = "scale(1)";
            // }
        });
    }

    checkScreen = () => {
        var width = window.screen.availWidth
        if (width > 640) {
            return (

                <div className="home-img">

                    <img src={bgwindow} alt="Background" className="BGhome" />
                </div>
            )
        }
        else {
            return (
                <img src={bgphone} alt="Background" className="BGhome" />
            )
        }
    }
    showMenu = () => {

        var width = window.screen.availWidth
        if (width > 640) {
            return (

                <Menu />
            )
        } else {
            return (

                <MenuMobile />)
        }
    }
    render() {
        this.getPosition()
        return (
            <div className="page-home">

                {
                    this.showMenu()
                }
                <div className="content-home" id="begin">
                    <div>

                        {this.checkScreen()}
                        <div className="container-search-box">
                            <div className="text-top-searchbox">
                                <div className="title">Find Nearby Attractions</div>
                                <div className="sub-title">Find the perfect gift for your loved ones.</div>
                            </div>
                            <Searchbox />
                        </div>
                        <div id="backtotop" className="visible">
                            <AnchorLink className=" backtotop fas fa-arrow-circle-up" href='#begin'></AnchorLink>

                        </div>
                        <div className="container-browse-categories">
                            <div className="header-browse">
                                Browse Categories
                         </div>
                            <div className="container-browse-box">
                                <Link className="box-browse" to={"/list?category=" + escape("Food & Drink")}>
                                    <div>

                                        <i class="fas fa-utensils"></i>
                                        <div>Food & Drink</div>
                                    </div>
                                </Link>
                                <Link className="box-browse" to={"/list?category=Appliance"}>
                                    <div>

                                        <i class="fas fa-shopping-basket"></i>
                                        <div>Appliance</div>
                                    </div>
                                </Link>
                                <Link className="box-browse" to={"/list?category=Decoration"}>
                                    <div >
                                        <i class="fas fa-couch"></i>
                                        <div>Decoration</div>
                                    </div>
                                </Link>

                                <Link className="box-browse" to={"/list?category=Costume"}>
                                    <div>
                                        <i class="fas fa-tshirt"></i>
                                        <div>Costume</div>
                                    </div>
                                </Link>

                                <Link className="box-browse" to={"/list?category=Accessories"}>
                                    <div >
                                        <i class="far fa-gem"></i>
                                        <div>Accessories</div>
                                    </div>
                                </Link>
                                <Link className="box-browse" to={"/list?category=etc"}>
                                    <div >
                                        <i class="fas fa-dumbbell"></i>
                                        <div>etc.</div>
                                    </div>
                                </Link>
                            </div>
                        </div></div>
                    <div className="popular-container">
                        <div className="title-popular">
                            Popular Blog
                        </div>
                        <div className="post-popular-container">
                            <Link to={"/blog/ck"} className="box-popular">
                                <div className="box-compact-item-container">
                                    <img className="img-popular-blog" src={ck} />
                                    <div className="blog-item-tag">จัดอันดับ</div>
                                    <div className="blog-compact-item-content">
                                        <div className="blog-item-date">December 22,2018</div>
                                        <div className="blog-item-title">อันดับของฝากเชียงคาน</div>
                                        <div className="blog-item-content">ถ้าหากนึกถึงเชียงคาน หลายๆคนคงนึกถึงมะพร้าวแก้ว
										แต่จะมีสักที่คนที่จะรู้ว่า....</div>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/blog/kk"} className="box-popular">
                                <div className="box-compact-item-container">
                                    <img className="img-popular-blog" src={kk} />
                                    <div className="blog-item-tag">จัดอันดับ</div>
                                    <div className="blog-compact-item-content">
                                        <div className="blog-item-date">January 2, 2019</div>
                                        <div className="blog-item-title">ไม่แวะซื้อไม่ได้แล้ว!! 5 อันดับของฝากจังหวัดขอนแก่น </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/blog/mh"} className="box-popular">
                                <div className="box-compact-item-container">
                                    <img className="img-popular-blog" src={mh} />
                                    <div className="blog-item-tag">จัดอันดับ</div>
                                    <div className="blog-compact-item-content">
                                        <div className="blog-item-date">January 2, 2019</div>
                                        <div className="blog-item-title">ไปไหนดี ที่สารคาม?</div>
                                        <div className="blog-item-content">มหาสารคามจังหวัดเล็กๆที่ใครๆก็มองข้าม
											หากพูดถึงจังหวัดมหาสารคามหลายๆคนคงนึกถึง....</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="view-blog-container">
                            <Link className="button-viewblog" to={"/blog"}>
                                View Blog
                            </Link>

                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}

export default Home;
