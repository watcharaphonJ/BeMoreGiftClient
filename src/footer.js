import React, { Component } from 'react'
import './css/footer.css'
import logo from './img/logo.png'
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
                    { /* <div className="helful box-footer">
                        <div className="header-helpful">Helpful Links</div>
                        test
            </div>*/}
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
