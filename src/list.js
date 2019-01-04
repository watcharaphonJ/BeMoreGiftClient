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
            URL += 'category=' + category + "&name=" + name + "&address=" + address;
        }
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                data.results.map((shop) => {
                    const location = this.state.location;
                    var locations = []
                    const result = data.results
                    console.log(result)
                    result.map((data, i) => {
                        locations.push({
                            name: data.name,
                            lat: data.location.lat,
                            lng: data.location.lng
                        })
                    })
                    this.setState({
                        location: locations
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
        console.log(location)
        var resultCate = this.state.result
        return (
            <div className="page-list">
                <Menu />
                {!this.state.fetched ?
                    <div className="loading"><i class="fas fa-spinner "></i></div>
                    :
                    <div>

                        <div className="bing-map">
                            <MapContainer state={location} />
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
                        <Footer />

                    </div>
                }
            </div >
        )
    }
}

export default List;
