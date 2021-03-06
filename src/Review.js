import React, { Component } from 'react'
import Menu from './menu'
import './css/review.css'
import pic from './img/bgphone.jpg'
import { Link } from 'react-router-dom'
import Footer from './footer'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import zeroStar from "./img/0.png"
import oneStar from "./img/1.png"
import twoStar from "./img/2.png"
import threeStar from "./img/3.png"
import fourStar from "./img/4.png"
import fiveStar from "./img/5.png"
import picUser from "./img/imgUser.png"
import swal from 'sweetalert';
import MenuMobile from './menuMobile'
import SlideShow from 'react-image-show';
import Map from "./MapContainer"
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
            shop: ""
            , star: "",
            location: {},
            Arrmenu: [],
            name: "",
            email: "",
            comment: "",
            lat: "",
            lng: "",
            rating: "",
            img: [],
            fetched: false,
            opening: [],
            reviews: [],
            comment: ""
        }
    }
    changeRating = (rate) => {
        let { rating } = this.state
        this.setState(
            { rating: rate }
        )
    }
    checkRating = (id) => {
        let oneStar = document.getElementById("1")
        let twoStar = document.getElementById("2")
        let threeStar = document.getElementById("3")
        let fourStar = document.getElementById("4")
        let fiveStar = document.getElementById("5")
        if (id == 1) {
            oneStar.style.backgroundColor = "yellow";
            twoStar.style.backgroundColor = "rgb(235, 235, 235)";
            threeStar.style.backgroundColor = "rgb(235, 235, 235)";
            fourStar.style.backgroundColor = "rgb(235, 235, 235)";
            fiveStar.style.backgroundColor = "rgb(235, 235, 235)";
        }
        else if (id == 2) {
            oneStar.style.backgroundColor = "yellow";
            twoStar.style.backgroundColor = "yellow";
            threeStar.style.backgroundColor = "rgb(235, 235, 235)";
            fourStar.style.backgroundColor = "rgb(235, 235, 235)";
            fiveStar.style.backgroundColor = "rgb(235, 235, 235)";
        }
        else if (id == 3) {
            oneStar.style.backgroundColor = "yellow";
            twoStar.style.backgroundColor = "yellow";
            threeStar.style.backgroundColor = "yellow";
            fourStar.style.backgroundColor = "rgb(235, 235, 235)";
            fiveStar.style.backgroundColor = "rgb(235, 235, 235)";
        }
        else if (id == 4) {
            oneStar.style.backgroundColor = "yellow";
            twoStar.style.backgroundColor = "yellow";
            threeStar.style.backgroundColor = "yellow";
            fourStar.style.backgroundColor = "yellow";
            fiveStar.style.backgroundColor = "rgb(235, 235, 235)";
        }
        else if (id == 5) {
            oneStar.style.backgroundColor = "yellow";
            twoStar.style.backgroundColor = "yellow";
            threeStar.style.backgroundColor = "yellow";
            fourStar.style.backgroundColor = "yellow";
            fiveStar.style.backgroundColor = "yellow";
        }

        else if (id == -5) {
            oneStar.style.backgroundColor = "yellow";
            twoStar.style.backgroundColor = "yellow";
            threeStar.style.backgroundColor = "yellow";
            fourStar.style.backgroundColor = "yellow";
            fiveStar.style.backgroundColor = "yellow";
        }

        else if (id == -4) {
            oneStar.style.backgroundColor = "yellow";
            twoStar.style.backgroundColor = "yellow";
            threeStar.style.backgroundColor = "yellow";
            fourStar.style.backgroundColor = "rgb(235, 235, 235)";
            fourStar.style.backgroundColor = "yellow";
        }

        else if (id == -3) {
            oneStar.style.backgroundColor = "yellow";
            twoStar.style.backgroundColor = "yellow";
            threeStar.style.backgroundColor = "yellow";
            fourStar.style.backgroundColor = "rgb(235, 235, 235)";
            fiveStar.style.backgroundColor = "rgb(235, 235, 235)";
        }

        else if (id == -2) {
            oneStar.style.backgroundColor = "yellow";
            twoStar.style.backgroundColor = "yellow";
            threeStar.style.backgroundColor = "rgb(235, 235, 235)";
            fourStar.style.backgroundColor = "rgb(235, 235, 235)";
            fiveStar.style.backgroundColor = "rgb(235, 235, 235)";
        }

        else if (id == -1) {
            oneStar.style.backgroundColor = "yellow";
            twoStar.style.backgroundColor = "rgb(235, 235, 235)";
            threeStar.style.backgroundColor = "rgb(235, 235, 235)";
            fourStar.style.backgroundColor = "rgb(235, 235, 235)";
            fiveStar.style.backgroundColor = "rgb(235, 235, 235)";
        }
    }
    postReview = () => {
        let { name, email, comment, rating } = this.state
        if (name != "" & email != "" & comment != "" & rating != "") {
            fetch('https://api.bemoregift.com' + this.props.location.pathname, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": name,
                    "email": email,
                    "review": comment,
                    "rating": rating
                })
            })
                .then(response => response.json())
                .then(() => swal("Thank you!!", "for your review :)", "success"))
                .then(() => { window.location.reload() })

        } else {
            swal("Please complete the fields", "", "error");
        }
    }
    componentDidMount = () => {
        let ID = this.props.match.params.id
        let URL = API_URL + "shop/" + ID
        fetch("https://api.bemoregift.com/review/" + ID)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    reviews: data.results
                })
            })
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                let imgUrl = "https://api.bemoregift.com/static/";
                let stars = Math.round((data.results.rating.sum / data.results.rating.count)) || 0
                this.setState({
                    province: data.results.address.province,
                    district: data.results.address.district,
                    category: data.results.category,
                    contact: data.results.contact,
                    describe: data.results.description,
                    shop: data.results.name,
                    Arrmenu: data.results.menu,
                    opening: data.results.opening,
                    ID: data.results._id,
                    star: stars,
                    comment: data.results.rating.count,
                    lat: data.results.location.lat,
                    lng: data.results.location.lng,
                    name: data.results.name
                });

                let ArrImg = []
                data.results.images.map((data, i) => {
                    ArrImg.push(
                        imgUrl + data
                    )
                })
                this.setState({
                    img: ArrImg,
                    fetched: true
                })
            });
    }
    starPath = (rating) => {
        switch (rating) {
            case 0: return zeroStar; break;
            case 1: return oneStar; break;
            case 2: return twoStar; break;
            case 3: return threeStar; break;
            case 4: return fourStar; break;
            case 5: return fiveStar; break;
        }
    }
    checkDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
    }
    checkMobile = () => {

        var width = window.screen.availWidth
        if (width > 640) {
            return (
                <div className="listing-nav-container">
                    <div className="listing-nav">
                        <AnchorLink className="anchorLink Overview" href='#overview'>Overview </AnchorLink>
                        <AnchorLink className="anchorLink" href='#pricing'>Pricing</AnchorLink>
                        <AnchorLink className="anchorLink" href='#location'>Location</AnchorLink>
                        <AnchorLink className="anchorLink" href='#review'>Reviews</AnchorLink>
                        <AnchorLink className="anchorLink" href='#addreview'>Add Review</AnchorLink>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="listing-nav-container">
                    <div className="text-overview">Overview </div>
                </div>
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
        let { reviews, comment, star, province, district, category, contact, describe, name, lat, lng, Arrmenu, shop, img, opening } = this.state
        let imgUrl = "https://api.bemoregift.com/static/";
        return (
            <div>
                {
                    this.showMenu()
                }
                {!this.state.fetched ? <div className="loading"><i class="fas fa-spinner "></i></div> :
                    <div className="container-review">
                        <div className="Divcarousel">
                            <SlideShow
                                images={img}
                                width="1000px"
                                imagesWidth="900px"
                                imagesHeight="400px"
                                imagesHeightMobile="56vw"
                                thumbnailsWidth="500px"
                                thumbnailsHeight="400px"
                                infinite indicators thumbnails fixedImagesHeight
                            />
                        </div>
                        <div className="titlebar">
                            <div className="listing-titlebar">
                                <div className="review-left">
                                    <div className="title-bar-review">
                                        <div className="titlereview">{shop}</div>
                                        <div className="listing-tag">{category}</div>
                                        <span>
                                            <div className="listing-location"><i class="fas fa-map-marker-alt"></i>
                                                {"    " + district + ", " + province}
                                            </div>
                                        </span>
                                        <div className="Container-star-review">
                                            <img className=" headerStar" src={this.starPath(star)} />
                                            <div className="count-comment">({comment} reviews)</div>
                                        </div>
                                    </div>

                                    <div className="title-overview">
                                        {this.checkMobile()}




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
                                                        <div className="menu-cost" key={i}>฿ {menu.price}</div>
                                                    </div>
                                                )
                                            })}
                                        </section>
                                    </div>
                                    <section id="location">
                                        <div className="header-overview">Location</div>
                                        <div className="bing-map" style={{ height: "335px", position: "relative" }}  >
                                            <Map state={{ lat: lat, lng: lng, name: name, width: "100%", height: "100%" }} />
                                            {/* <div className="google-map" style={map} id="map-review">

                                        </div>*/}
                                        </div>
                                    </section>
                                    <section id="review">
                                        <div className="header-overview">Reviews</div>
                                        {!reviews ?
                                            <div > noting review</div>
                                            :
                                            <div className="box-review-comment">
                                                {
                                                    reviews.map((review, i) => {
                                                        return (
                                                            <div className="box-comment">
                                                                <div className="pic-user">
                                                                    <img src={picUser} />
                                                                </div>

                                                                <div className="contain-comment">
                                                                    <div className="comment-by">
                                                                        {review.name}
                                                                        <div className="date">
                                                                            {this.checkDate(review.dateadded)}
                                                                        </div>
                                                                        <div className="star-rating">
                                                                            <img className="review" src={this.starPath(review.rating)} />
                                                                        </div>
                                                                    </div>


                                                                    <div className="comment-content">
                                                                        {review.review}
                                                                    </div>
                                                                    <a href="#" class="rate-review">
                                                                        <i class="far fa-thumbs-up"></i> Helpful Review <span>2</span></a>
                                                                </div>

                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        }
                                    </section>
                                    <section id="addreview">
                                        <div className="container-add-review">
                                            <div className="title-add-review">Add Review</div>
                                            <div>Your rating for this listing</div>
                                            <div className="choose-rating">
                                                <div className="star"
                                                    onMouseOver={() => this.checkRating(1)}
                                                    onMouseOut={() => this.checkRating(-1)}
                                                    onClick={() => this.changeRating(1)}
                                                    id="1">

                                                </div>
                                                <div className="star"
                                                    onMouseOver={() => this.checkRating(2)}
                                                    onMouseOut={() => this.checkRating(-2)}
                                                    onClick={() => this.changeRating(2)}
                                                    id="2">

                                                </div>
                                                <div className="star"
                                                    onMouseOver={() => this.checkRating(3)}
                                                    onMouseOut={() => this.checkRating(-3)}
                                                    onClick={() => this.changeRating(3)}
                                                    id="3">

                                                </div>
                                                <div className="star"
                                                    onMouseOver={() => this.checkRating(4)}
                                                    onMouseOut={() => this.checkRating(-4)}
                                                    onClick={() => this.changeRating(4)}
                                                    id="4">

                                                </div>
                                                <div className="star"
                                                    onMouseOver={() => this.checkRating(5)}
                                                    onMouseOut={() => this.checkRating(-5)}
                                                    onClick={() => this.changeRating(5)}
                                                    id="5">

                                                </div>

                                            </div>
                                            <div className="row-addreivew">
                                                <div className="name-addreview">
                                                    <div className="title-input">Name:</div>
                                                    <input
                                                        onChange={e => {
                                                            this.setState({
                                                                name: e.target.value
                                                            });
                                                        }}
                                                        className="input input-name-addreview"
                                                        type="text" />
                                                </div>
                                                <div className="name-addreview">
                                                    <div className="title-input">Email:</div>
                                                    <input
                                                        onChange={e => {
                                                            this.setState({
                                                                email: e.target.value
                                                            });
                                                        }}
                                                        className="input input-name-addreview"
                                                        type="text" />
                                                </div>
                                            </div>
                                            <div className="title-input">Review:</div>
                                            <textarea
                                                onChange={e => {
                                                    this.setState({
                                                        comment: e.target.value
                                                    });
                                                }}
                                                className="input  input-review input-review-addreview"
                                                type="text" />

                                            <div className="button-search" >
                                                <div className="button is-danger is-rounded" onClick={this.postReview}>Submit Review</div>
                                            </div>
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
                                            <div className="time">{opening.monday[0] !== 'closed' ? opening.monday[0] + ' - ' + opening.monday[1] : 'Closed'}</div>
                                        </div>

                                        <div className="day-opening">
                                            Tuesday
                                            <div className="time">{opening.tuesday[0] !== 'closed' ? opening.tuesday[0] + ' - ' + opening.tuesday[1] : 'Closed'}</div>
                                        </div>
                                        <div className="day-opening">
                                            Wednesday
                                            <div className="time">{opening.wednesday[0] !== 'closed' ? opening.wednesday[0] + ' - ' + opening.wednesday[1] : 'Closed'}</div>
                                        </div>
                                        <div className="day-opening">
                                            Thursday
                                            <div className="time">{opening.thursday[0] !== 'closed' ? opening.thursday[0] + ' - ' + opening.thursday[1] : 'Closed'}</div>
                                        </div>
                                        <div className="day-opening">
                                            Friday
                                            <div className="time">{opening.friday[0] !== 'closed' ? opening.friday[0] + ' - ' + opening.friday[1] : 'Closed'}</div>
                                        </div>
                                        <div className="day-opening">
                                            Saturday
                                            <div className="time">{opening.saturday[0] !== 'closed' ? opening.saturday[0] + ' - ' + opening.saturday[1] : 'Closed'}</div>
                                        </div>
                                        <div className="day-opening">
                                            Sunday
                                            <div className="time">{opening.sunday[0] !== 'closed' ? opening.sunday[0] + ' - ' + opening.sunday[1] : 'Closed'}</div>
                                        </div>
                                        <div className="day-opening">
                                            Holidays
                                            <div className="time">{opening.holidays[0] !== 'closed' ? opening.holidays[0] + ' - ' + opening.holidays[1] : 'Closed'}</div>
                                        </div>
                                    </div>
                                    <div className="box-contact">
                                        <div id="contact" className="title-contact">
                                            Contact
                                        </div>
                                        {contact.phone ? <div className="detail-contact"><i className="fas fa-phone" style={{ height: '0px' }}></i> {contact.phone}</div> : null}
                                        {contact.email ? <div className="detail-contact"><i className="far fa-envelope"></i> {contact.email}</div> : null}
                                        {contact.facebook ? <div className="detail-contact"><i className="fab fa-facebook"></i><a href={contact.facebook} className="social"> facebook</a></div> : null}
                                        {contact.line ? <div className="detail-contact"><i class="fab fa-line"></i><a href={contact.line} className="social"> line</a></div> : null}
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
