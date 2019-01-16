import React, { Component } from 'react'
import Menu from './menu'
import Footer from './footer'
import './css/partner.css'

export default class partner extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="title-bar-partner">
                    <div className="container-text-partner">
                        Welcome to partner</div>
                </div>
                <div class="container">

                    <div class="row">

                        <div class="col-md-12">
                            <div class="pricing-container margin-top-30">


                                <div class="plan">

                                    <div class="plan-price">
                                        <h3>Basic</h3>
                                        <span class="value">Free</span>
                                        <span class="period">ลงข้อมูลฟรีแบบมีเงื่อนไข</span>
                                    </div>

                                    <div class="plan-features">
                                        <ul className="fontsize-plan">
                                            <li>-ทางร้านต้องถ่ายรูปเอง</li>
                                            <li>-กรอกข้อมูลลงแบบฟอร์ม</li>
                                            <li>-รอการตรวจสอบว่าผ่านหรือไม่</li>
                                            <li>-ลูกค้าสามารถอัพเดตข้อมูลได้ฟรี</li>
                                            <li>-ต้องร่วมจัดโปรโมชันตามเหมาะสม</li>
                                        </ul>
                                        <a class="button border getStart-button" href="https://docs.google.com/forms/d/e/1FAIpQLSchCgz9t5WBH5nlKQSFJOF9a6WdORLhY4b-VNI6CNiw7RASyA/viewform?usp=sf_link" target="_blank">Get Started</a>
                                    </div>

                                </div>

                                <div class="plan featured">

                                    <div class="listing-badge">
                                        <span class="featured">แนะนำ</span>
                                    </div>

                                    <div class="plan-price bgRed">
                                        <h3>Advanced</h3>
                                        <span class="value"><s>100THB</s></span>
                                        <span class="value">Free</span>
                                        <span class="period">ลงพื้นที่เก็บข้อมูลฟรี</span>
                                    </div>
                                    <div class="plan-features">
                                        <ul className="fontsize-plan">
                                            <li>-มีเจ้าหน้าที่ลงเก็บข้อมูล</li>
                                            <li>-มีเจ้าหน้าที่ถ่ายรูป และรีทัชรูป</li>
                                            <li>-เจ้าหน้าที่อัพโหลดข้อมูล</li>
                                            <li>-ต้องรอรอบการลงพื้นที่เก็บข้อมูล</li>
                                            <li>-มีเจ้าหน้าที่ตรวจสอบและแนะนำทันที <br />(กรณีที่ลูกค้าอัพโหลดข้อมูลเอง)</li>
                                            <li>-ลูกค้าสามารถอัพเดตข้อมูลได้ทันที</li>
                                        </ul>
                                        <a class="button border getStart-button" style={{ backgroundColor: "#f91942", color: "white" }} href="https://docs.google.com/forms/d/e/1FAIpQLScJBHlY9xQlsvkDGQZNVeAcFrC6h_utmNV2a5l5IFr5Xu29ag/viewform?usp=sf_link" target="_blank">Get Started</a>
                                    </div>
                                </div>

                                <div class="plan">
                                    <div class="plan-price">
                                        <h3>Professional</h3>
                                        <span class="value">200 บาท <br />(คิดค่าเดินทาง)</span>
                                        <span class="period">เดินทางเก็บข้อมูลทันที</span>
                                    </div>

                                    <div class="plan-features">
                                        <ul className="fontsize-plan">
                                            <li>-มีเจ้าหน้าที่ลงเก็บข้อมูลทันที</li>
                                            <li>-มีเจ้าหน้าที่ถ่ายรูป และรีทัชรูป</li>
                                            <li>-เจ้าหน้าที่ดูแลทุกกระบวนการ</li>
                                            <li>-มีเจ้าหน้าที่ช่วยเหลือ <br />(กรณีที่ลูกค้าอัพเดตข้อมูลเอง)</li>
                                            <li>-ติด tag ผู้สนับสนุน</li>
                                        </ul>
                                        <a class="button border getStart-button" href="https://docs.google.com/forms/d/e/1FAIpQLSdk0wKSRgKHGhA9AUwBDWLlxWM-7rfJpSVrW4cX9j1Q8528Kw/viewform?usp=sf_link" target="_blank">Get Started</a>
                                    </div>
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
