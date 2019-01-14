import React, { Component } from 'react';
import Menu from './menu'
import './css/list.css'
import { ReactBingmaps } from 'react-bingmaps';
import CardList from './CardList'
import Footer from './footer'
import { Link } from "react-router-dom";
import MapContainer from './map'
import InputRange from 'react-input-range';

const API_URL = process.env.REACT_APP_API_URL;
const API_CATEGORY = process.env.REACT_APP_API_GET_CATEGORY
var locations = []

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
            center: [],
            value: { min: 2, max: 10 },
        }

    }
    sortList = (e) => {
        console.log(e.target.value)
    }


    componentWillMount = () => {
        var params = (this.props.location.search)
        let URL = API_URL + "query" + params;
        console.log(URL)
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                const result = data.results
                console.log(result)
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
    render() {
        var resultCate = this.state.result
        var { location, volume } = this.state
        console.log(location)
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
                        <div className="sort-container">

                            <select className="sort" onChange={this.sortList}>
                                <option className="option" value="">Default Order </option>
                                <option className="option" value="A-Z">A-Z </option>
                                <option className="option" value="Z-A">Z-A </option>
                                <option className="option" value="review">Review </option>
                                <option className="option" value="2">Test </option>
                            </select>
                            <InputRange
                                maxValue={20}
                                minValue={0}
                                value={this.state.value}
                                onChange={value => this.setState({ value })} />
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
