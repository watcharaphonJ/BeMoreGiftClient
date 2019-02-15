import React, { Component } from 'react';
import Menu from './menu'
import './css/list.css'
import CardList from './CardList'
import Footer from './footer'
import { Link } from "react-router-dom";
import MapContainer from './map'
import SearchBox from './Searchbox'
import ReactSimpleRange from 'react-simple-range';

const API_URL = process.env.REACT_APP_API_URL;
const API_CATEGORY = process.env.REACT_APP_API_GET_CATEGORY
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetched: false,
            result: [],
            name: "",
            location: [],
            volume: 10,
            CurrLat: "",
            CurrLng: "",
            toggle: true,
            sort: ""
        }

    }
    sortList = (e) => {
        let params = (this.props.location.search)
        let sort = e.target.value;
        this.setState({
            sort: sort,
            result: []
        })
        let URL = "https://api.bemoregift.com/query?" + params + "&sort=" + sort
        console.log(URL)
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                const result = data.results
                result.map((data, i) => {
                    this.setState({
                        location: [
                            {
                                name: data.name,
                                lat: data.location.lat,
                                lng: data.location.lng
                            }
                        ]
                    })
                })
                this.setState({
                    fetched: true,
                    result: data.results
                });
            });
    }


    getMyLocation() {
        const location = window.navigator && window.navigator.geolocation

        if (location) {
            location.getCurrentPosition((position) => {
                this.setState({
                    CurrLat: position.coords.latitude,
                    CurrLng: position.coords.longitude
                })
            }, (error) => {
                this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
            })
        }

    }
    componentWillMount = () => {
        const location = window.navigator && window.navigator.geolocation
        const center = []
        if (location) {
            location.getCurrentPosition((position) => {
                center.push(
                    position.coords.latitude,
                    position.coords.longitude
                )
            })
        }
        this.getMyLocation()
        var params = (this.props.location.search)
        let URL = API_URL + "query" + params;
        console.log(URL)
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const result = data.results
                let locations = []
                result.map((data, i) => {
                    let starSum = Math.round((data.rating.sum / data.rating.count)) || 0
                    locations.push({
                        name: data.name,
                        lat: data.location.lat,
                        lng: data.location.lng,
                        center: center,
                        img: data.images,
                        star: starSum,
                        id: data._id,
                        comment: data.rating.count
                    })
                })
                this.setState({
                    fetched: true,
                    result: data.results,
                    location: locations
                });
            });
    }
    showSlider = () => {
        const { toggle } = this.state
        this.setState({
            toggle: !toggle
        })
        if (toggle) {
            document.getElementById("container-slider").style.display = "block"
        } else {

            document.getElementById("container-slider").style.display = "none"
        }
    }
    changeValue = (value) => {
        this.setState({
            volume: value.value
        })
    }
    changeDistance = (value) => {
        const { sort, CurrLat, CurrLng } = this.state
        const location = window.navigator && window.navigator.geolocation
        const center = []
        if (location) {
            location.getCurrentPosition((position) => {
                center.push(
                    position.coords.latitude,
                    position.coords.longitude
                )
            })
        }
        let params = (this.props.location.search)
        let URL = "https://api.bemoregift.com/query?"
            + params
            + "&sort=" + sort
            + "&distance=" + value.value
            + "&latLng=" + CurrLat + "," + CurrLng
        this.setState({
            volume: value.value,
            location: [],
            result: []
        })
        console.log(URL)
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const result = data.results
                result.map((data, i) => {
                    let starSum = Math.round((data.rating.sum / data.rating.count)) || 0
                    this.setState({
                        location: [
                            {
                                name: data.name,
                                lat: data.location.lat,
                                lng: data.location.lng,
                                star: starSum,
                                center: center,
                                img: data.images,
                                id: data._id,
                                comment: data.rating.count
                            }
                        ]
                    })
                })
                this.setState({
                    fetched: true,
                    result: data.results
                });
            });
    }
    render() {
        const { volume, result } = this.state
        return (
            <div className="page-list">
                <Menu />
                {!this.state.fetched ?
                    <div className="loading"><i class="fas fa-spinner "></i></div>
                    :
                    <div>

                        <div className="bing-map">
                            <MapContainer state={this.state.location} />
                            <div className="searchbox-list" style={{ display: "none" }}>
                                <SearchBox />
                            </div>
                        </div>
                        <div className="sort-container">
                            <select className="sort" onChange={this.sortList}>
                                <option className="option" value="">A - Z </option>
                                <option className="option" value="rating"> Highest Rated </option>
                                <option className="option" value="review"> Most Reviewed </option>
                            </select>
                            <div className="distance" onClick={this.showSlider}>
                                Distance Radius
                                <i class="fas fa-angle-down arrow-distance">
                                </i>
                            </div>
                            <div id="container-slider" className="container-slider">
                                <div>
                                    <div id="show-range-value" className="range-value"> {volume}</div>
                                    <div style={{ display: "inline-block" }}>km</div>
                                </div>
                                <div className="data-title">
                                    Radius around selected destination
                                </div>
                                <ReactSimpleRange
                                    sliderSize={9}
                                    min={1}
                                    max={1000}
                                    sliderColor={"#e6e6e6"}
                                    customThumb={"<div className='circle'></div>"}
                                    trackColor={"#f91942"}
                                    thumbColor={"#66676b"}
                                    onChangeComplete={this.changeDistance}
                                    value={volume}
                                    onChange={this.changeValue} />
                            </div>
                        </div>
                        <div className="container-list">
                            {
                                this.state.result.length === 0 ?
                                    <div className="notfound">ไม่พบผลลัพธ์</div>
                                    : null
                            }

                            {this.state.result.map((shop, i) => {
                                return (
                                    <Link className="container-card-list" to={"/review/" + shop._id}>
                                        <CardList detail={shop} key={i} />
                                    </Link>
                                );
                            })}
                        </div>
                        <Footer />

                    </div>
                }
            </div >
        )
    }
}

export default List;
