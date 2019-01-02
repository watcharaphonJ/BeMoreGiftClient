import React, { Component } from 'react';
import './css/search-box.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Searchbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "",
            name: "",
            province: "",
            district: ""
        }
    }
    onDistrictChange = (e) => {
        this.setState({
            district: e.target.value
        })
    }
    onProvinceChange = (e) => {
        this.setState({
            province: e.target.value
            , district: "Muang Khon Kaen"
        })
        let province = e.target.value;
        let district = this.district;

        let districtOptions = '<option disabled="disabled" value="">Select District</option>';
        switch (province) {
            case 'Khon Kaen':
                districtOptions += '<option value="Muang Khon Kaen">Muang Khon Kaen</option>';
                districtOptions += '<option value="Chum Phae">Chum Phae</option>';
                districtOptions += '<option value="Nam Phong">Nam Phong</option>';
                districtOptions += '<option value="Ban Phai">Ban Phai</option>';
                districtOptions += '<option value="Nong Ruea">Nong Ruea</option>';
                districtOptions += '<option value="Phon">Phon</option>';
                districtOptions += '<option value="Kranuan">Kranuan</option>';
                districtOptions += '<option value="Si Chomphu">Si Chomphu</option>';
                districtOptions += '<option value="Nong Song Hong">Nong Song Hong</option>';
                districtOptions += '<option value="Phu Wiang">Phu Wiang</option>';
                districtOptions += '<option value="Mancha Khiri">Mancha Khiri</option>';
                districtOptions += '<option value="Ban Fang">Ban Fang</option>';
                districtOptions += '<option value="Chonnabot">Chonnabot</option>';
                districtOptions += '<option value="Ubolratana">Ubolratana</option>';
                districtOptions += '<option value="Waeng Noi">Waeng Noi</option>';
                districtOptions += '<option value="Khao Suan Kwang">Khao Suan Kwang</option>';
                districtOptions += '<option value="Phra Yuen">Phra Yuen</option>';
                districtOptions += '<option value="Ban Haet">Ban Haet</option>';
                districtOptions += '<option value="Waeng Yai">Waeng Yai</option>';
                districtOptions += '<option value="Non Sila">Non Sila</option>';
                districtOptions += '<option value="Khok Pho Chai">Khok Pho Chai</option>';
                districtOptions += '<option value="Nong Na Kham">Nong Na Kham</option>';
                districtOptions += '<option value="Sam Sung">Sam Sung</option>';
                districtOptions += '<option value="Phu Pha Man">Phu Pha Man</option>';
                districtOptions += '<option value="Pueai Noi">Pueai Noi</option>';
                districtOptions += '<option value="Wiang Kao">Wiang Kao</option>';
                break;
        }
        district.innerHTML = districtOptions;
    }
    render() {
        let { category, district, province, name } = this.state
        return (
            <div className="container-search">
                <input
                    onChange={e => {
                        this.setState({
                            things: e.target.value
                        });
                    }}
                    className="input input-location"
                    type="text"
                    placeholder="What are you looking for?" />
                <div className="container-select">
                    <div className="select select-categories" >
                        <select id="province" name="province" defaultValue="" onChange={this.onProvinceChange} >
                            <option disabled="disabled" value="">Select Province</option>
                            <option value="Khon Kaen">Khon Kaen</option>
                        </select>
                    </div>
                    <div className="select select-categories select-district" >
                        <select id="district" name="district" defaultValue="" ref={select => { this.district = select }} onChange={this.onDistrictChange}>
                            <option disabled="disabled" value="">Select District</option>
                        </select>
                    </div>
                </div>
                <div className="select select-categories" >
                    <select onClick={
                        this.chkCategories
                    }>
                        <option value="" > All Categories </option>
                        <option value="Food & Drink" > Food & Drink </option>
                        <option value="Appliance" > Appliance </option>
                        <option value="Decoration" > Decoration </option>
                        <option value="Costume" > Costume </option>
                        <option value="Accessories" > Accessories </option>
                        <option value="etc." > etc. </option>
                    </select >
                </div>
                <div className="button-search">
                    <Link to={{ pathname: "/list", state: { category, name, district, province } }} className="button is-danger is-rounded" >Search</Link>
                </div>
            </div>

        )
    }

}
