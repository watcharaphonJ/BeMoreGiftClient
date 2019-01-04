import React, { Component } from 'react';
import Menu from './menu'
import './css/list.css'
import { ReactBingmaps } from 'react-bingmaps';
import CardList from './CardList'
import Footer from './footer'
import { Link } from "react-router-dom";
import MapContainer from './map'

const API_URL = process.env.REACT_APP_API_URL;
const API_CATEGORY = process.env.REACT_APP_API_GET_CATEGORY

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetched: false,
            result: [],
            search: false,
            name: "",
            searchCategory: "",
            searchAddress: "",
            location: [],
            center: []
        }
    }
    componentWillMount = () => {
        let { name, searchAddress, searchCategory } = this.state
        let URL = API_URL + 'query?';
        let address = ""
        if (this.props.location.state) {
            if (this.props.location.state.district && this.props.location.state.province) {

                address = this.props.location.state.province + "," + this.props.location.state.district
            }
            var category = escape(this.props.location.state.category)
            console.log(this.props.location.state.category)

            URL += 'category=' + category + "&name=" + name + "&address=" + address;
        }
        console.log(URL)
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                data.results.map((shop) => {
                    const location = this.state.location;
                    const result = data.results
                    result.map((result, i) => {
                        switch (result.category) {
                            case "Food & Drink":
                                {
                                    location.push({
                                        "location": [shop.location.lat, shop.location.lng],
                                        "option": { title: shop.name, description: '...', color: "orange" },
                                        "addHandler": {
                                            "type": "click",
                                            callback: this.callBackMethod
                                        }
                                    })
                                    break;
                                }
                            case "Appliance":
                                {
                                    location.push({
                                        "location": [shop.location.lat, shop.location.lng],
                                        "option": { title: shop.name, description: '...', color: "red" },
                                        "addHandler": {
                                            "type": "click",
                                            callback: this.callBackMethod
                                        }
                                    })
                                    break;
                                }
                            case "Decoration":
                                {
                                    location.push({
                                        "location": [shop.location.lat, shop.location.lng],
                                        "option": { title: shop.name, description: '...', color: "red" },
                                        "addHandler": {
                                            "type": "click",
                                            callback: this.callBackMethod
                                        }
                                    })
                                    break;
                                }
                            case "Costume":
                                {
                                    location.push({
                                        "location": [shop.location.lat, shop.location.lng],
                                        "option": { title: shop.name, description: '...', color: "red" },
                                        "addHandler": {
                                            "type": "click",
                                            callback: this.callBackMethod
                                        }
                                    })
                                    break;
                                }
                            case "Accessories":
                                {
                                    location.push({
                                        "location": [shop.location.lat, shop.location.lng],
                                        "option": { title: shop.name, description: '...', color: "red" },
                                        "addHandler": {
                                            "type": "click",
                                            callback: this.callBackMethod
                                        }
                                    })
                                    break;
                                }
                            case "etc":
                                {
                                    location.push({
                                        "location": [shop.location.lat, shop.location.lng],
                                        "option": { title: shop.name, description: '...', color: "red" },
                                        "addHandler": {
                                            "type": "click",
                                            callback: this.callBackMethod
                                        }
                                    })
                                    break;
                                }
                            default:
                                {
                                }
                        }
                    })

                    this.setState({
                        location: location,
                        center: location[0].location
                    })
                })
                this.setState({
                    fetched: true,
                    result: data.results
                });
            });

    }
    render() {
        const { location, center } = this.state
        var resultCate = this.state.result
        return (
            <div className="page-list">
                <Menu />
                {!this.state.fetched ?
                    <div className="loading"><i class="fas fa-spinner "></i></div>
                    :
                    <div>

                        <div className="bing-map">
                            <ReactBingmaps
                                bingmapKey="AleauFqO2uD7oVweE5j9YUDa9gD37p7_x74OGzWHE9qtFwmYd_IgFkmoqiJfX3we"
                                center={center}
                                pushPins={location}
                                heading={180}
                            >
                            </ReactBingmaps>
                        </div>
                        <div className="container-list">
                            {resultCate.map((shop, i) => {
                                return (
                                    <Link className="container-card-list" to={{ pathname: "/review", state: shop }}>
                                        <CardList detail={shop} key={i} />
                                    </Link>
                                );
                            })}
                        </div>
                        <div style={{ height: '100vh', width: '100%' }}>
                            <MapContainer />
                        </div>
                        <Footer />

                    </div>
                }
            </div >
        )
    }
}

export default List;
