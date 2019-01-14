import React, { Component } from 'react'
import Menu from './menu'
import Footer from './footer'
import './css/blog.css'
import ck from './img/ck.jpg'
import kk from './img/kk.jpg'
import mh from './img/mh.jpg'
import { Link } from "react-router-dom";

export default class blog extends Component {
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
                                <Link to="/blog/ck" className="readmore">
                                    Read More <div className="arrow">></div>
                                </Link>
                            </div>
                        </div>
                        <div className="blog-post">
                            <img src={kk} className="img-blog-post" />
                            <div className="post-content">
                                <h3 style={{ fontSize: "22px" }}>ไม่แวะซื้อไม่ได้แล้ว!! 5 อันดับของฝากจังหวัดขอนแก่น</h3>
                                <div className="post-date">
                                    January 2, 2019 | by ilittlestar
                                </div>
                                <div className="post-text">
                                    สำหรับของฝากจังหวัดขอนแก่น ใครที่แวะผ่านไปผ่านมาก็คงจะพอรู้จักกับของฝากขึ้นชื่อของจังหวัดขอนแก่นว่ามีอะไรกันบ้าง แต่ก็มีบางท่านที่ยังไม่ทราบ วันนี้ทางเราจึงขอพาทุกท่านไปรู้จักกับ 5 อันดับของฝากขึ้นชื่อของจังหวัดขอนแก่นที่ควรค่าแก่การซื้อไปฝากลูกฝากหลานหรือคนที่ท่านรัก หรือจะซื้อไปใช้ไปทานเองก็ได้ครับ
                                </div>
                                <Link to="/blog/kk" className="readmore">
                                    Read More <div className="arrow">></div>
                                </Link>
                            </div>
                        </div>

                        <div className="blog-post">
                            <img src={mh} className="img-blog-post" />
                            <div className="post-content">
                                <h3 style={{ fontSize: "22px" }}>ไปไหนดี ที่สารคาม?</h3>
                                <div className="post-date">
                                    January 2, 2019 | by ITreeMan
                                </div>
                                <div className="post-text">
                                    มหาสารคามจังหวัดเล็กๆที่ใครๆก็มองข้าม หากพูดถึงจังหวัดมหาสารคามหลายๆคนคงนึกถึงภาพมหาวิทยาลัยมหาสาาคาม มหาวิทยาลัยราชภัฎมหาสารคาม และ พระธาตุนาดูนกันใช่ไหมครับ แต่จริงๆแล้วมหาสารคามยังมีสถานที่ที่น่าเที่ยวอีกหลายแห่งเลยครับ ที่รอให้พวกเราได้เข้าไปเยี่ยมชม หากคิดจะมองข้ามจังหวัดเล็กๆใจกลางอีสานแห่งนี้ ก็ขอให้ลองไปชมให้เห็นกับตากันก่อนครับ
                                   </div>
                                <Link to="/blog/mh" className="readmore">
                                    Read More <div className="arrow">></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-blog">
                        <div className="question">
                            <h3 className="got-any-question">Got any question?</h3>
                            <div className="info-box">
                                <div>3 Having any questions? Feel free to ask!</div>
                                <Link className="link-to-contact" to="/contact">
                                    <i class="far fa-envelope"></i>
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
                                <div className="widget-text ">
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
