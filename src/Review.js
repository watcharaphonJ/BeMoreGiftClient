import React, { Component } from 'react'
import Menu from './menu'
import './css/review.css'
import pic from './img/bgphone.jpg'
import { ReactBingmaps } from 'react-bingmaps';
import { Link } from 'react-router-dom'
import Footer from './footer'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const API_URL = process.env.REACT_APP_API_URL;
export default class Review extends Component {

    constructor(props) {
        super(props)
        this.state = {
            district: "",
            province: "",
            category: "",
            contact: "",
            describe: "",
            shop: "",
            Arrmenu: [],
            location: [],
            name: "",
            email: "",
            comment: ""
            , fetched: false
        }
    }
    postReview = () => {
        console.log("test")

    }
    componentWillMount = () => {
        let ID = this.props.location.state._id
        let URL = API_URL + "shop/" + ID
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                this.setState({
                    province: data.results.address.province,
                    district: data.results.address.district,
                    category: data.results.category,
                    contact: data.results.contact,
                    describe: data.results.description,
                    shop: data.results.name,
                    Arrmenu: data.results.menu
                });
                let location = []
                location.push({
                    "location": [data.results.location.lat, data.results.location.lng],
                    "option": { title: data.results.name, description: '...' },
                    "addHandler": {
                        "type": "click",
                        callback: this.callBackMethod
                    }
                });
                this.setState({
                    location: location,
                    fetched: true
                })
            });
    }
    render() {
        let { province, district, category, contact, describe, name, Arrmenu, location, shop } = this.state
        console.log(this.state.location)
        return (
            <div>
                <Menu />
                {!this.state.fetched ? <div className="loading"><i class="fas fa-spinner "></i></div> :
                    <div className="container-review">
                        <Carousel>
                            <div>
                                <img src={pic} />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img src={pic} />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img src={pic} />
                                <p className="legend">Legend 3</p>
                            </div>
                        </Carousel>
                        <div className="titlebar">
                            <div className="listing-titlebar">
                                <div className="review-left">
                                    <div className="title-bar">
                                        <div className="titlereview">{shop}</div>
                                        <span>
                                            <div className="listing-location"><i class="fas fa-map-marker-alt"></i>
                                                {district + province}
                                            </div>
                                        </span>
                                    </div>

                                    <div className="title-overview">
                                        <div className="listing-nav-container">
                                            <div className="listing-nav">
                                                <AnchorLink className="anchorLink" href='#overview'>Overview </AnchorLink>
                                                <AnchorLink className="anchorLink" href='#pricing'>Pricing</AnchorLink>
                                                <AnchorLink className="anchorLink" href='#location'>Location</AnchorLink>
                                                <AnchorLink className="anchorLink" href='#review'>Reviews</AnchorLink>
                                                <AnchorLink className="anchorLink" href='#addreview'>Add Review</AnchorLink>
                                            </div>
                                        </div>
                                        <section id="overview">
                                            <div className="describe">{describe}</div>
                                        </section>
                                    </div>
                                    <div className="title-pricing">
                                        <section id="pricing">
                                            <div className="header-overview">Pricing</div>
                                            {Arrmenu.map((menu, i) => {
                                                return (
                                                    <div className="menu-box">
                                                        <div className="menu-desc">
                                                            <div className="menu-name">{menu.title}</div>
                                                            <div className="menu-description">{menu.description}</div>
                                                        </div>
                                                        <div className="menu-cost" key={i}>฿ {menu.cost}</div>
                                                    </div>
                                                )
                                            })}
                                        </section>
                                    </div>
                                    <section id="location">
                                        <div className="header-overview">Location</div>
                                        <div className="bing-map">
                                            <ReactBingmaps
                                                bingmapKey="AleauFqO2uD7oVweE5j9YUDa9gD37p7_x74OGzWHE9qtFwmYd_IgFkmoqiJfX3we"
                                                center={[this.state.location.lat, this.state.location.lng]}
                                                pushPins={this.state.location}
                                                heading={300}
                                            >
                                            </ReactBingmaps>
                                        </div>
                                    </section>
                                    <section id="review">
                                        <div className="header-overview">Reviews</div>
                                        <div className="box-review-comment">
                                            <div>
                                                {name}
                                            </div>
                                            <div>
                                                date
                                        </div>
                                            <div>
                                                star
                                        </div>
                                            <div>
                                                comment
                                        </div>
                                        </div>
                                    </section>
                                    <section id="addreview">
                                        <div className="container-add-review">
                                            <div className="title-add-review">Add Review</div>
                                            <div>Your rating for this listing</div>
                                            <div>star</div>
                                            <div className="title-input">Name:</div>
                                            <input
                                                onChange={e => {
                                                    this.setState({
                                                        name: e.target.value
                                                    });
                                                }}
                                                className="input input-location"
                                                type="text" />
                                            <br id="test" />
                                            <div className="title-input">Email:</div>
                                            <input
                                                onChange={e => {
                                                    this.setState({
                                                        email: e.target.value
                                                    });
                                                }}
                                                className="input input-location"
                                                type="text" />
                                            <br />
                                            <div className="title-input">Review:</div>
                                            <input
                                                onChange={e => {
                                                    this.setState({
                                                        review: e.target.value
                                                    });
                                                }}
                                                className="input input-location input-review"
                                                type="text" />
                                            <br />

                                            <div className="button-search" >
                                                <div className="button is-danger is-rounded" onClick={this.postReview}>Search</div>
                                            </div>
                                        </div>
                                        <div className="verified-box">
                                            Verified Listing
                                    </div>
                                    </section>
                                </div>



                                <div className="review-right">
                                    <div className="opening-box">
                                        <div className="title-opening">
                                            <i class="far fa-clock"></i> Opening Hours
                                        </div>
                                        <div className="day-opening">
                                            Monday
                                            <div className="time">
                                                9AM - 5PM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-contact">
                                        <div id="contact" className="title-contact">
                                            Contact
                                        </div>
                                        <div className="detail-contact">
                                            <i class="fas fa-phone"></i> {contact.phone}
                                        </div>
                                        <div className="detail-contact">
                                            <i class="far fa-envelope"></i> {contact.email}
                                        </div>
                                        <div className="detail-contact">
                                            <i class="fab fa-facebook"></i><a href={contact.facebook} className="social">  facebook</a>
                                        </div>
                                        <div className="detail-contact">
                                            <i class="fab fa-twitter"></i><a href={contact.twitter} className="social"> twitter</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <Footer />
                    </div>
                }

            </div>
        )
    }
}
