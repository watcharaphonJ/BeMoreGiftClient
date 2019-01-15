import React, { Component } from 'react';
import './css/search-box.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import jsonProvince from './changwats.json'
import jsonDistrict from './amphoes.json'

function getChangwatByPid(pid) {
    return jsonProvince.en.changwats.filter(
        function (data) { return data.pid === pid }
    );
}
function getAmphoeByPid(pid) {
    return jsonDistrict.en.amphoes.filter(
        function (data) { return data.pid === pid }
    );
}
export default class Searchbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            province: "",
            district: "",
            category: ""
        }
    }
    chkCategories = (e) => {
        console.log(e.target.value)
        this.setState({
            category: e.target.value
        })

    }
    onDistrictChange = (e) => {
        this.setState({
            district: e.target.value
        })
    }
    onProvinceChange = (province) => {
        this.setState({
            province: getChangwatByPid(province.target.value)[0].name
        })
        let district = document.getElementById("district")
        let districtOptions = '<option value="">All District</option>';
        jsonDistrict.en.amphoes
            .filter(function (el) {
                return (el.changwat_pid === province.target.value);
            })
            .map(function (el) {
                districtOptions += '<option value' + el.pid + '>' + el.name + '</option>';
            });
        district.innerHTML = districtOptions;
    }
    render() {
        let { category, district, province, name } = this.state

        return (
            <div className="container-search">
                <div className="main-search-input height-input">
                    <input
                        onChange={e => {
                            this.setState({
                                name: e.target.value
                            });
                        }}
                        className=" input-location"
                        type="text"
                        placeholder="What are you looking for?" />
                    <div className="container-select height-input">
                        <div className="select select-location" style={{ width: '50%', height: '100%' }}>
                            <select className="province" style={{ borderColor: "transparent", color: "#808080", width: "100%", height: "100%" }} id="province" name="province" defaultValue="" onChange={this.onProvinceChange} >
                                <option value="">All Province</option>

                                {
                                    jsonProvince.en.changwats.map((province) => {
                                        return (
                                            <option value={province.pid}>{province.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="select select-location select-district" style={{ width: 'calc(50% - 10px)', height: '100%' }}>
                            <select className="district" style={{ borderColor: "transparent", color: "#808080", width: "100%", height: "100%" }} id="district" name="district" defaultValue="" ref={select => { this.district = select }} onChange={this.onDistrictChange}>
                                <option value="">All District</option>
                            </select>
                        </div>
                    </div>
                    <div className="select select-categories height-input" style={{ height: '100%' }}>
                        <select className="select-cate" style={{ borderColor: "transparent", color: "#808080", width: "100%", height: "100%" }} onClick={
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
                        <Link to={"/list?name=" + name + "&district=" + district + "&province=" + province + "&category=" + escape(category)} className="button is-danger is-rounded" >Search</Link>
                    </div>
                </div>

            </div>

        )
    }

}
