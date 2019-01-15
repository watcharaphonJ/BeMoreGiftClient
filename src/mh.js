import React, { Component } from 'react'

import Menu from './menu'
import Footer from './footer'
import img1 from './img/mhrank1.jpg'
import img2 from './img/mhrank2.jpg'
import img3 from './img/mhrank3.jpg'
import img4 from './img/mhrank4.jpg'
import img5 from './img/mhrank5.jpg'
import kk from './img/kk.jpg'
import mh from './img/mh.jpg'

import { Link } from "react-router-dom";
import ck from './img/ck.jpg'
import './css/blog.css'


export default class MH extends Component {
    render() {
        return (<div>
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
                            <h3 style={{ fontSize: "22px" }}>ไปไหนดี ที่สารคาม?</h3>
                            <div className="post-date">
                                January 2, 2019 by ITreeMan
                            </div>
                            <div className="post-text">
                                มหาสารคามจังหวัดเล็กๆที่ใครๆก็มองข้าม หากพูดถึงจังหวัดมหาสารคามหลายๆคนคงนึกถึงภาพมหาวิทยาลัยมหาสาาคาม มหาวิทยาลัยราชภัฎมหาสารคาม และ พระธาตุนาดูนกันใช่ไหมครับ แต่จริงๆแล้วมหาสารคามยังมีสถานที่ที่น่าเที่ยวอีกหลายแห่งเลยครับ ที่รอให้พวกเราได้เข้าไปเยี่ยมชม หากคิดจะมองข้ามจังหวัดเล็กๆใจกลางอีสานแห่งนี้ ก็ขอให้ลองไปชมให้เห็นกับตากันก่อนครับ
                            </div>
                            <div className="rank">
                                พระบรมมธาตุนาดูน
                            </div>
                            <div className="text-rank">
                                พระบรมมธาตุนาดูน เป็นพระบรมธาตุประจําจังหวัดมหาสารคาม สร้างขึ้นจากรูปแบบของ ผอบบรรจุพระบรมสารีริกธาตุที่ขุดค้นพบ ณ บริเวณอําเภอนาดูน เกี่ยวข้องกับตํานาน เมืองนครจําปาศรี ซึ่งเป็นเมืองโบราณที่เคยตั้งอยู่บริเวณนี้ พระธาตุนาดูนก่อสร้างแล้วเสร็จเมื่อ พ.ศ. 2529 และถูกขนาน นามว่า “พุทธมณฑลอีสาน” ประชาชนต่างเดินทางมาสักการะเพื่อเป็นศิริมงคลแก่ชีวิตต

</div>
                            <img src={img1} className="img-rank" />
                            <div className="rank">สะพานไม้แกดำ
                            </div>
                            <div className="text-rank">
                                ตั้งอยู่ในสถานีวิจัยวลัยรุกขเวช มหาวิทยาลัยมหาสารคาม เป็นพื้นที่ติดต่อกับพระบรมธาตุ นาดูน ซึ่งได้เก็บรวบรวมเรือนไทยอีสานแบบดั้งเดิมของทุกชาติพันธุ์ของคนอีสาน โดยการค้นหาเรือน โบราณเหล่านี้จากทั่วทั้งภาคอีสานแล้วทําการย้ายมารวมกันไว้ที่นี่ พร้อมจําลองบรรยากาศหมู่บ้านของ ชุมชนชาวอีสานแบบดั้งเดิม ไว้ได้อย่างสมบูรณ์แบบ สถานที่แห่งนี้จะพาทุกท่านย้อนเวลาได้อย่างน่า พิศวง</div>
                            <img src={img2} className="img-rank" />
                            <div className="rank">
                                พิพิธภันฑ์บ้านอีสาน
                            </div>
                            <div className="text-rank">
                                สะพานไม้เก่าแก่อายุเกือบร้อยปีที่ชุมชนบ้านแกดําและบ้านหัวขัวสร้างขึ้นเพื่อข้ามหนอง แกดํา ใช้ไปมาหาสู่ระหว่างชุมชน ความยาวกว่า 500 เมตร สะท้อนชีวิตชนบทอันมีมนต์เสน่ห์ด้วย สะพานที่สร้างแบบฝีมือชาวบ้าน ทอดตัวคดเคี้ยวไร้ระเบียบลัดเลาะไปในทุ่งบัวหลวง หาโอกาสสักครั้ง มายืนบนสะพานแห่งนี้ เพื่อชมบรรยากาศพระอาทิตย์อัสดงที่สวยงามที่สุดของจังหวัดมหาสารคาม
                            </div>
                            <img src={img3} className="img-rank" />
                            <div className="rank">วัดหนองหูลิง
                            </div>
                            <div className="text-rank">
                                โบสถ์รูปเรือที่สร้างเป็นปริศนาธรรมอันลึกซึ้ง ออกแบบและก่อสร้างอย่างวิจิตรงดงามเปรียบ เสมือนเรือโนอาร์แห่งพระพุทธศาสนา ให้พุทธศาสนิกชนได้เร่งสร้างบุญกุศลเพื่อบรรจุไว้ในเรือเมื่อต้อง ข้ามฟากฝั่งแห่งผลกรรม ภายในประดิษฐานพระประธานปรางค์ประถมเทศนาศิลปะแบบทวารวดี หากเดินรอบโบสถ์ก็จะพบงานศิลปะที่แฝงไปด้วยปริศนาธรรมให้ผู้มาเยือนได้ขบคิดได้ทั้งปัญญาอิ่มบุญและ ทราบซึ้งในความงดงามของสถานที่แห่งนี้ <img src={img4} className="img-rank" />
                                <div className="rank">
                                    วัดหนองหูลิง
                            </div>
                                <div className="text-rank">
                                    โบสถ์รูปเรือที่สร้างเป็นปริศนาธรรมอันลึกซึ้ง ออกแบบและก่อสร้างอย่างวิจิตรงดงามเปรียบ เสมือนเรือโนอาร์แห่งพระพุทธศาสนา ให้พุทธศาสนิกชนได้เร่งสร้างบุญกุศลเพื่อบรรจุไว้ในเรือเมื่อต้อง ข้ามฟากฝั่งแห่งผลกรรม ภายในประดิษฐานพระประธานปรางค์ประถมเทศนาศิลปะแบบทวารวดี หากเดินรอบโบสถ์ก็จะพบงานศิลปะที่แฝงไปด้วยปริศนาธรรมให้ผู้มาเยือนได้ขบคิดได้ทั้งปัญญาอิ่มบุญและ ทราบซึ้งในความงดงามของสถานที่แห่งนี้</div>
                                <img src={img5} className="img-rank" />
                                <div className="post-quote">
                                    ที่มา : สำนักงานท่องเที่ยวและกีฬาจังหวัดมหาสารคาม
								<br />
                                    <a
                                        href="https://adobeindd.com/view/publications/1632b665-9e97-466f-997e-2268427872cb/apsn/publication-web-resources/pdf/%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B1%E0%B8%A7%E0%B8%A3%E0%B9%8C.pdf" target="_blank">สะออนทัวร์ วารสารเพื่อการท่องเที่ยวจังหวัดมหาสารคาม ประจำปี 2560</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="right-blog">
                    <div className="question">
                        <h3 className="got-any-question">Got any question?</h3>
                        <div className="info-box">
                            <div>Having any questions? Feel free to ask!</div>
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
