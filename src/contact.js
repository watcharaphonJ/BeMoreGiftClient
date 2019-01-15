import React, { Component } from 'react'
import Menu from './menu'
import Footer from './footer'
import Map from "./MapContainer"
import './css/contact.css'
import img from './img/our-office.jpg'
import swal from 'sweetalert';
export default class contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CurrLat: "",
            CurrLng: "",
            name: "",
            email: "",
            subject: "",
            message: ""
        }
    }
    checkScreen = () => {
        const { CurrLat, CurrLng } = this.state
        console.log(CurrLat, CurrLng)
        var width = window.screen.availWidth
        if (width > 640) {
            return (
                <div className="container-contact-map">
                    <Map state={{ lat: CurrLat, lng: CurrLng, name: "Office", width: "60%", height: "420px" }} />

                    <div className="address-box-container">
                        <div class="address-container" >
                            <div class="office-address">
                                <h3 className="title-ouroffice">Our Office</h3>
                                <ul>
                                    <li>สาขาวิชาวิศวกรรมคอมพิวเตอร์ </li>
                                    <li>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยขอนแก่น</li>
                                    <li>อำเภอเมือง จังหวัดขอนแก่น</li>
                                    <li>Phone (+66) 945304058  </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            console.log(CurrLat, CurrLng)
            return (
                <div className="container-contact-map">
                    <Map state={{ lat: CurrLat, lng: CurrLng, name: "Office", width: "100%", height: "300px" }} />

                    <div className="address-box-container">
                        <div class="address-container" >
                            <div class="office-address">
                                <h3 className="title-ouroffice">Our Office</h3>
                                <ul>
                                    <li>สาขาวิชาวิศวกรรมคอมพิวเตอร์ </li>
                                    <li>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยขอนแก่น</li>
                                    <li>อำเภอเมือง จังหวัดขอนแก่น</li>
                                    <li>Phone (+66) 945304058  </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
            )
        }
    }

    getMyLocation() {
        const location = window.navigator && window.navigator.geolocation
        if (location) {
            location.getCurrentPosition((position) => {
                this.setState({
                    CurrLat: 16.472686,
                    CurrLng: 102.8234523
                })
            }, (error) => {
                this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
            })
        }

    }
    postContact = () => {
        const { name, email, message, subject } = this.state
        console.log(name, email, message, subject)
        fetch('https://api.bemoregift.com/contact/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "subject": subject,
                "message": message
            })
        })
            .then(response => response.json())
            .then(data =>
                swal("Thank you!!", "for your review :)", "success")
            ).then(() => { window.location.reload() })

    }
    componentWillMount = () => {
        this.getMyLocation()
    }
    render() {
        return (
            <div>
                <Menu />
                {
                    this.checkScreen()
                }
                <div className="contact-container">

                    <div className="container-map">

                        <div className="container-detail-contact">
                            <div className="contact-left">

                                <div className="title-detail-contact"> Find Us There</div>
                                <div className="detail-contact-text">
                                    "bemoregift.com" เป็นโครงการรวบรวมร้านขายของฝากในภาคอีสานตอนบน เพื่อสนับสนุนการท่องเที่ยว นวัตกรรม และสินค้าประจำท้องถิ่นต่างๆ
                                ซึ่งได้รับการสนับสนุนจาก
                            </div>
                                <a href="https://www.innohubkku.com/" target="_blank"> <b>"Innovation Hub KKU"</b></a>
                                <div className="container-contact-detail">
                                    <div className="contact-phone">
                                        <i class="fas fa-phone-volume icon-contact"></i>
                                        <div className="container-phone">
                                            <div>
                                                Phone:
                                    </div>
                                            <div>
                                                (+66) 945304058
                                    </div>
                                        </div>
                                    </div>
                                    <div className="web">
                                        <i class="fas fa-globe icon-contact"></i>
                                        <div className="container-phone">
                                            <div>
                                                Web:
                                    </div>
                                            <a className="decoration-text" href="https://web.facebook.com/Be-more-gift-2128729863854222">https://facebook.com/bemoregift</a>

                                        </div>
                                    </div>
                                    <div className="mail">
                                        <i class="fas fa-envelope icon-contact"></i>
                                        <div className="container-phone">
                                            <div>
                                                E-mail:
                                    </div>
                                            <a className="decoration-text" href="mailto:bemoregiftkku@gmail.com" target="_top">bemoregiftkku@gmail.com</a>

                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="contact-right">
                                <div className="input-contact">
                                    <div className="title-contact-form">
                                        Contact Form
                            </div>
                                    <input
                                        onChange={e => {
                                            this.setState({
                                                name: e.target.value
                                            });
                                        }}
                                        className="input-name" placeholder="Your Name" />
                                    <input
                                        onChange={e => {
                                            this.setState({
                                                email: e.target.value
                                            });
                                        }}
                                        className="input-name" placeholder="Email Address" />
                                    <input
                                        onChange={e => {
                                            this.setState({
                                                subject: e.target.value
                                            });
                                        }}
                                        className="input-name" placeholder="Subject" />
                                    <textarea
                                        onChange={e => {
                                            this.setState({
                                                message: e.target.value
                                            });
                                        }}
                                        className="text-area" placeholder="Message" />

                                </div>
                                <a onClick={this.postContact} class="button is-danger is-rounded">Submit Message</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
