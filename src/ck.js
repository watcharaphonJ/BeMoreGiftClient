import React, { Component } from 'react'
import Menu from './menu'
import Footer from './footer'
import { Link } from "react-router-dom";
import ck from './img/ck.jpg'
import img1 from './img/ckrank1.jpg'
import img2 from './img/ckrank2.jpg'
import img3 from './img/ckrank3.jpg'
import kk from './img/kk.jpg'
import mh from './img/mh.jpg'
import './css/blog.css'

export default class CK extends Component {
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
                            <img src={ck} className="img-blog-post" />
                            <div className="post-content">
                                <h3 style={{ fontSize: "22px" }}>3 อันดับของฝากเชียงคาน</h3>
                                <div className="post-date">
                                    December 22,2018 | by ITreeMan
                                </div>
                                <div className="post-text">
                                    ไปเชียงคานซื้ออะไรดี? ถ้าหากนึกถึงเชียงคาน จังหวัดเลย
                                        หลายๆคนคงนึกถึงมะพร้าวแก้วที่แก่งคุดคู้
                                        แต่จะมีสักที่คนที่จะรู้ว่าเชียงคานไม่ได้มีดีแค่มะพร้าวแก้วที่แก่งคุดคู้เท่านั้น
                                        แต่เชียงคานยังมีของฝากที่เป็นเอกลักษณ์ประจำเชียงคานอีกมากมาย

                                </div>
                                <div className="rank">
                                    อันดับที่ 1 มะพร้าวแก้วเชียงคาน
                                </div>
                                <div className="text-rank">
                                    เป็นผลิตภัณฑ์ประเภทของหวานสำหรับรับประทานเล่น
                                    ซึ่งมีหลากหลายราคา หลายเกรด ถ้าเป็นเกรด A
                                    ราคาจะอยู่ที่ประมาณ 100 บาทต่อถุง เกรด B จะอยู่ที่ราคา
                                     50 บาทต่อถุง และเกรด C จะอยู่ที่ 35 บาทต่อถุง ซึ่งเหมาะสำหรับซื้อเป็นของฝากทุกเทศกาล
                                      เนื่องจากมะพร้าวให้ผลิตตลอดทุกฤดูกาล โดยรับมาจากชาวสวนแถวจังหวัดเพรชบูรณ์
                                      แล้วนำมาแปรรูปเป็นผลิตภัณฑ์ของกลุ่มชาวบ้าน อ.เชียงคาน จ.เลย
                                      และปัจจุบันถือว่าเป็นสินค้าเอกลักษณ์ของอำเภอเชียงคานไปแล้ว
                                </div>
                                <img src={img1} className="img-rank" />
                                <div className="rank">อันดับที่ 2 ผ้าทอ ผ้าขาวม้า
                                </div>
                                <div className="text-rank">
                                    แน่นอนว่าสินค้าประเภทสิ่งทอของอำเภอเชียงคานนั้นเป็นสิ่งของขึ้นชื่อไม่แพ้มะพร้าวแก้วอย่างแน่นอน
                                    โดยสังเกตได้จาก หากท่านได้เดินช็อปปิงที่ถนนคนเดินเชียงคานแล้วนั้น
                                    ท่านจะพบว่าส่วนใหญ่แล้วร้านค้าในถนนคนเดินส่วนใหญ่จะขายสินค้าประเภทสิ่งทอต่างๆ
                                    ไม่ว่าจะเป็น ผ้าข้าวม้า เสื้อ กระโปรง หรือกางเกง เป็นต้น
                                    โดยจะเน้นศิลปะการทอผ้าที่สามารถรับรู้ได้เลยว่าเป็นลวดลายจากอำเภอเชียงคาน จังหวัดเลยอย่างแน่นอน
                                </div>
                                <img src={img2} className="img-rank" />
                                <div className="rank">
                                    อันดับที่ 3 ของฝากจากไทดำ
                                </div>
                                <div className="text-rank">
                                    หากท่านคิดว่าเชียงคานมีเพียงแค่มะพร้าวแก้ว ก
                                    ับถนนคนเดินแล้วนั้น ขอบอกได้เลยว่าท่านคิดผิด..!!
                                    เพราะท่านยังไม่รู้จักบ้านพิพิธภัณฑ์ไทดำ ซึ่งอยู่ที่บ้านนาป่าหนาด
                                     ตำบลเขาแก้ว อำเภอเชียงคาน จังหวัดเลย หมู่บ้านวัฒนธรรมไทดำนั้น
                                     ถือว่าเป็นสถานที่ท่องเที่ยวอีกแห่งหนึ่งที่ไม่ควรพลาดในโปรแกรมการท่องเที่ยวเชียงคานเลย
                                     สำหรับการศึกษาวิถีชีวิต วัฒนธรรม การละเล่น ภาษา และการแต่งกาย ที่เป็นเอกลักษณ์ของชาวไทดำ
                                      นอกจากนี้ยังมีการขายของฝาก ของที่ระลึก หรือของมงคลจากชาวไทดำอีกด้วย


                                </div>
                                <img src={img3} className="img-rank" />
                            </div>
                        </div>

                    </div>
                    <div className="right-blog">
                        <div className="question">
                            <h3 className="got-any-question">Got any question?</h3>
                            <div className="info-box">
                                <div>3 Having any questions? Feel free to ask!</div>
                                <Link className="link-to-contact " to="/contact">
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
