import React, { Component } from 'react'
import './css/footer.css'
import logo from './img/logo.png'
export default class footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="about box-footer">
                    <img className="logo-footer" src={logo} alt="logo" />
                    <div className="describe">
                        bruh bruh bruh
                    </div>
                </div>
                <div className="helful box-footer">
                    <div className="header-helpful">Helpful Links</div>
                    test
            </div>
                <div className="contact box-footer">
                    <div className="header-helpful">
                        Contact Us
                    </div>

                    E-mail : <div style={{ display: "inline-block", color: "#f91942", whiteSpace: "pre-line" }}>example@hotmail.com</div>
                    <br />Phone : <div style={{ display: "inline-block", whiteSpace: "pre-line" }}>081-3722300</div>
                </div>
            </div>
        )
    }
}
