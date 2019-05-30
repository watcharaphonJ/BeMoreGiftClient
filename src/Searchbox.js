import React, { Component } from 'react';
import './css/search-box.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import jsonProvince from './changwats.json'
import Select from 'react-select';
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
            selectedOption: null,
            allProvince: [],
            allDistrict: [{
                value: "",
                label: "All District"

            }],
            name: "",
            province: {
                value: "",
                label: "All Province"
            },
            district: {
                value: "",
                label: "All District"

            },
            category: ""
        }
    }

    chkCategories = (e) => {
        this.setState({
            category: e.target.value
        })
    }
    onDistrictChange = (district) => {
        this.setState({
            district: {
                value: district.value,
                pid: district.pid,
                label: district.value
            }
        })
    }
    onProvinceChange = (province) => {
        this.setState({
            province: {
                value: getChangwatByPid(province.pid)[0].name,
                pid: province.pid,
                label: getChangwatByPid(province.pid)[0].name
            }
        })
        let that = this
        var Arr = [
            {
                value: "",
                label: "All District",

            }
        ]
        jsonDistrict.en.amphoes
            .filter((el) => {
                return (el.changwat_pid === province.pid);
            })
            .map((el) => {
                console.log(el)
                Arr.push({
                    value: el.name,
                    label: el.name,
                    pid: el.pid
                })
                that.setState({
                    allDistrict: Arr
                })
            });
    }
    componentWillMount = () => {
        var { allProvince } = this.state
        jsonProvince.en.changwats.map((data, i) => {
            allProvince.push({ value: data.name, label: data.name, pid: data.pid })
        })

    }
    render() {
        let { category, district, province, name, allProvince, allDistrict } = this.state
        console.log(district, province)

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
                            <Select
                                id="province"
                                name="province"
                                defaultValue=""
                                style={{ borderColor: "transparent", color: "#808080", width: "100%", height: "100%" }}
                                value={province}
                                onChange={this.onProvinceChange}
                                options={allProvince}
                            />
                        </div>
                        <div className="select select-location select-district"
                            style={{ width: 'calc(50% - 10px)', height: '100%' }}
                        >
                            <Select
                                id="district"
                                style={{ borderColor: "transparent", color: "#808080", width: "100%", height: "100%" }}
                                value={district}
                                onChange={this.onDistrictChange}
                                options={allDistrict}
                            />
                        </div>
                    </div>
                    <div className="select select-categories height-input" style={{ height: '100%' }}>
                        <select className="select-cate"
                            style={{ borderColor: "transparent", color: "#808080", width: "100%", height: "100%" }}
                            onChange={
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
                        <Link to={"/list?name=" + name + "&district=" + district.value + "&province=" + province.value + "&category=" + escape(category)} className="button is-danger is-rounded" >Search</Link>
                    </div>
                </div>

            </div>

        )
    }

}
