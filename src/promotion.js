
import React, { PropTypes, Component } from 'react';
import './css/promotion.css'
import logo from './img/logo-coming.png'

class promotion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
        }
    }
    componentDidMount = () => {
        // Set the date we're counting down to
        var countDownDate = new Date("Jan 16, 2020 15:37:25").getTime();

        // Update the count down every 1 second
        var x = setInterval(() => {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var day = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var second = Math.floor((distance % (1000 * 60)) / 1000);
            this.setState({
                days: day,
                hours: hour,
                min: minute,
                sec: second

            })
        }, 1000);
    }


    render() {
        const { days, hours, min, sec } = this.state
        return (
            <div id="wrapper">
                <div class="coming-soon-page" style={{ backgroundImage: " url(/main-search-background-01.jpg)" }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-lg-offset-2">
                                <img src={logo} alt="logo" className="img-promotion" />

                                <h3>We are launching promotion soon!</h3>

                                <div id="countdown" class="margin-top-10 margin-bottom-35">
                                    <div className="div-container-timer">
                                        <span className="timer">{days}</span>
                                        <p className="unit">DAYS</p>
                                    </div>
                                    <div className="div-container-timer">
                                        <span className="timer">{hours}</span>
                                        <p className="unit">HOURS</p>
                                    </div>
                                    <div className="div-container-timer">
                                        <span className="timer">{min}</span>
                                        <p className="unit">MINUTE</p>
                                    </div>
                                    <div className="div-container-timer">
                                        <span className="timer">{sec}</span>
                                        <p className="unit">SECOND</p>
                                    </div>
                                </div>
                                <div>
                                    <a class="button border getStart-button"
                                        href="/" target="_blank">Back to home</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default promotion;