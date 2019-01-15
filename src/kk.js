import React, { Component } from 'react'

import Menu from './menu'
import Footer from './footer'
import img1 from './img/kkrank1.jpg'
import img2 from './img/kkrank2.jpg'
import img3 from './img/kkrank3.jpg'
import img4 from './img/kkrank4.jpg'
import img5 from './img/kkrank5.jpg'
import kk from './img/kk.jpg'
import mh from './img/mh.jpg'

import { Link } from "react-router-dom";
import ck from './img/ck.jpg'
import './css/blog.css'

export default class KK extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="title-bar">
                    <div className="title-blog">
                        Blog
                    </div>
                    <div className="title-latestNews">
                        Latest News
                    </div>
                    <div className="nav-homeblog">
                        Home > Blog
                    </div>

                </div>
                <div className="container-blog">
                    <div className="left-blog">
                        <div className="blog-post">
                            <img src={kk} className="img-blog-post" />
                            <div className="post-content">
                                <h3 style={{ fontSize: "22px" }}>ไม่แวะซื้อไม่ได้แล้ว!! 5 อันดับของฝากจังหวัดขอนแก่น</h3>
                                <div className="post-date">
                                    January 2, 2019 by ilittlestar
                                </div>
                                <div className="post-text">
                                    สำหรับของฝากจังหวัดขอนแก่น ใครที่แวะผ่านไปผ่านมาก็คงจะพอรู้จักกับของฝากขึ้นชื่อของจังหวัดขอนแก่นว่ามีอะไรกันบ้าง แต่ก็มีบางท่านที่ยังไม่ทราบ วันนี้ทางเราจึงขอพาทุกท่านไปรู้จักกับ 5อันดับของฝากขึ้นชื่อของจังหวัดขอนแก่นที่ควรค่าแก่การซื้อไปฝากลูกฝากหลานหรือคนที่ท่านรัก หรือจะซื้อไปใช้ไปทานเองก็ได้ครับ

                                </div>
                                <div className="rank">
                                    ผ้าไหมมัดหมี่ อำเภอชนบท
                                </div>
                                <div className="text-rank">
                                    สำหรับผ้าไหมมัดหมี่ของอำเภอชนบทนั้นถือว่าเป็นเอกลักษณ์อย่างหนึ่งของภาคอีสานเลยก็ว่าได้ เนื่องจากที่นี่ทอผ้าไหมด้วยวิธีกรรมการผลิตแบบโบราณที่สืบต่อกันมายาวนาน ตั้งแต่การปลูกหม่อนเลี้ยงไหมไปจนถึงการทอผ้า ผ้าไหมมัดหมี่ทีนี่มีสีสันลวดลายที่สวยงามประณีตเป็นเอกลักษณ์เฉพาะตัว มีคุณภาพ มีความหลากหลาย และมีการปรับลวดลายและสีสันให้ทันสมัยอยู่เสมอ เพื่อตอบสนองต่อความต้องการของผู้บริโภค
                                </div>
                                <img src={img1} className="img-rank" />
                                <div className="rank">ขนมตุ๊บตั๊บ
                                </div>
                                <div className="text-rank">
                                    ขนมขึ้นชื่อของร้านชื่อดังสูตรต้นตำหรับที่ผลิตและขายเองมานานกว่า 80 ปี การันตีความอร่อยจากรางวัลพระราชทาน เครื่องหมายรับรองจากเชลล์ชวนชิม เครื่องหมายรับรองจากช่องโทรทัศน์และรายการต่างๆ รสชาติอร่อยไม่เหมือนใคร ไม่ใช้วัตถุกันเสีย
                                </div>
                                <img src={img2} className="img-rank" />
                                <div className="rank">
                                    หมั่นโถว5ดาว
                                </div>
                                <div className="text-rank">
                                    หมั่นโถวขึ้นชื่อแสนอร่อย ราคาไม่แพง จนคนที่แวะไปขอนแก่นต้องไปแวะไปทาน หรือซื้อกลับไปเป็นของฝากหรือทานกันเอง การันตีความอร่อยจากรีวิวของดาราดังหลายท่านที่แวะมาทานหมั่นโถวที่นี่

                                </div>
                                <img src={img3} className="img-rank" />
                                <div className="rank">กุนเชียงบ้านไผ่
                                </div>
                                <div className="text-rank">
                                    มาขอนแก่นก็ต้องห้ามพลาดกุนเชียงแสนอร่อยของจังหวัดขอนแก่น เพราะกุนเชียงที่นี่เป็นระดับตำนานสุดยอดของฝากจากขอนแก่น เพราะสืบทอดกิจการจากรุ่นสู่รุ่นมานานกว่า 100 ปี ซึ่งเป็นสูตรดั้งเดิมจากเมืองจีน และมีการพัฒนาคุณภาพของกุนเชียงให้เข้ากับปัจจุบัน แต่ยังคงไว้ซึ่งรสชาติของความอร่อยไม่เปลี่ยนแปลง การันตีจากรางวัลสินค้าโอท็อป จุดเด่นของกุนเชียงที่นี่อยู่ที่วัตถุดิบมีคุณภาพคัดสรรมาเป็นอย่างดี สะอาด และผลิตด้วยกรรมวิธีที่ทันสมัย</div>
                                <img src={img4} className="img-rank" />
                                <div className="rank">
                                    หม่ำเมืองพล
                                </div>
                                <div className="text-rank">
                                    หม่ำเมืองพล อาหารขึ้นชื่อของอำเภอพล จังหวัดขอนแก่น หรือที่บางคนอาจจะรู้จักในชื่อไส้กรอกอีสาน อาหารสำหรับคนชอบทานเนื้อสัตว์ ซึ่งมีทั้งแบบที่ทำจากเนื้อหมูและเนื้อวัว วิธีกรรมผลิตจะใช้วัตถุดิบเครื่องเทศตามธรรมชาติ ปราศจากวัตถุกันเสีย
                                </div>
                                <img src={img5} className="img-rank" />

                            </div>
                        </div>

                    </div>
                    <div className="right-blog">
                        <div className="question">
                            <h3 className="got-any-question">Got any question?</h3>
                            <div className="info-box">
                                <div> Having any questions? Feel free to ask!</div>
                                <Link className="link-to-contact" to="/contact">
                                    <i class="far fa-envelope icon-mail-blog"></i>
                                    Drop Us a Line
                                </Link>
                            </div>

                        </div>
                        <div className="popular-posts">
                            <div className="title-popular-posts">
                                Popular Posts
                            </div>
                            <div className="widget-content">
                                <img className="widget-image" src={ck} />
                                <div className="widget-text">
                                    <Link to={"/blog/ck"} className="widget-name">3 อันดับของฝากเชียงคาน</Link>
                                    <div className="widget-date">December 22, 2018</div>

                                </div>
                            </div>
                            <div className="widget-content">
                                <img className="widget-image" src={kk} />
                                <div className="widget-text">
                                    <Link to={"/blog/kk"} className="widget-name">ไม่แวะซื้อไม่ได้แล้ว!! 5 อันดับของฝากจากจังหวัดขอนแก่น</Link>
                                    <div className="widget-date">December 28, 2018</div>

                                </div>
                            </div>
                            <div className="widget-content">
                                <img className="widget-image" src={mh} />
                                <div className="widget-text">
                                    <Link to={"/blog/mh"} className="widget-name">ไปไหนดีที่สารคาม</Link>
                                    <div className="widget-date">January 2, 2019</div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />

            </div>
        )
    }
}
