import React, { Component } from 'react'
import './css/footer.css'
import logo from './img/logo.png'
import { Link } from "react-router-dom";
export default class footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container-footer">
                    <div className="about box-footer">
                        <img className="logo-footer" src={logo} alt="logo" />
                        <div className="describe-footer">
                            "bemoregift.com" เป็นโครงการรวบรวมร้านขายของฝากในภาคอีสานตอนบน เพื่อสนับสนุนการท่องเที่ยว
                            นวัตกรรม และสินค้าประจำท้องถิ่นต่างๆ ซึ่งได้รับการสนับสนุนจาก
                            <a style={{ color: "red" }} href="https://www.innohubkku.com/" target="_blank">
                                "Innovation Hub KKU"</a>
                        </div>
                    </div>
                    <div className="help box-footer">
                        <div className="title-helpful">
                            Helpful Links
                        </div>
                        <div className="footer-link">
                            <div>
                                <Link to={"/list"}><i class="fas arrow-footer fa-angle-right"></i> <div className="text-link-footer">Listing</div></Link>
                            </div>
                            <div>
                                <Link to={"/blog"}><i class="fas arrow-footer fa-angle-right"></i> <div className="text-link-footer">Blog</div></Link>
                            </div>
                            <div>
                                <Link to={"/promotion"}><i class="fas arrow-footer fa-angle-right"></i> <div className="text-link-footer">Promotion</div></Link>
                            </div>
                        </div>
                        <div className="footer-link link-right">
                            <div>
                                <Link to={"/partner"}><i class="fas arrow-footer fa-angle-right"></i> <div className="text-link-footer">Partner</div></Link>
                            </div>
                            <div>
                                <Link to={"/contact"}><i class="fas arrow-footer fa-angle-right"></i> <div className="text-link-footer">Contact</div></Link>
                            </div>
                        </div>
                    </div>
                    <div className="contact box-footer">
                        <div className="header-helpful">
                            Contact Us
                        </div>
                        <div>
                            สาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยขอนแก่น อ.เมือง จ.ขอนแก่น 40002</div>
                        E-mail : <a href="mailto:bemoregiftkku@gmail.com" style={{ display: "inline-block", color: "#f91942", whiteSpace: "pre-line" }}>bemoregiftkku@gmail.com</a>
                        <br />Phone : <div style={{ display: "inline-block", whiteSpace: "pre-line" }}>(+66) 945304058 </div>
                    </div>
                </div>
            </div>
        )
    }
}
