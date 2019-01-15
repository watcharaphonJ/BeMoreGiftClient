import React, { Component } from 'react'
import './css/card-list.css'
import Review from './Review';
import zeroStar from "./img/0.png"
import oneStar from "./img/1.png"
import twoStar from "./img/2.png"
import threeStar from "./img/3.png"
import fourStar from "./img/4.png"
import fiveStar from "./img/5.png"

export default class CardList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            district: "",
            province: "",
            img: "",
            ReviewStar: "",
            category: "",
            count: "",
            fetched: false
        }
    }
    componentWillMount = () => {
        let nameDetail = this.props.detail.name
        let cate = this.props.detail.category
        let count = this.props.detail.rating.count;
        let addressDetail = this.props.detail.address
        let star = Math.round((this.props.detail.rating.sum / this.props.detail.rating.count)) || 0
        this.setState({
            name: nameDetail,
            count: count,
            district: addressDetail.district,
            province: addressDetail.province,
            img: this.props.detail.images,
            ReviewStar: star,
            category: cate,
            fetched: true
        })
    }
    starPath = (star) => {
        switch (star) {
            case 0: return zeroStar; break;
            case 1: return oneStar; break;
            case 2: return twoStar; break;
            case 3: return threeStar; break;
            case 4: return fourStar; break;
            case 5: return fiveStar; break;
        }
    }
    render() {
        let { name, district, province, img, ReviewStar, category, count } = this.state
        return (
            <div className="carddd">
                {!this.state.fetched ?
                    <div className="loading"><i class="fas fa-spinner "></i></div>
                    :
                    <div className="card-detail">
                        <div className="listing-item-image">
                            <div className="image"><img className="img-card-list" src={"https://api.bemoregift.com/static/" + img[0]} /></div>
                            <span className="card-detail-category">{category}</span>
                        </div>
                        <div className="detail">
                            <div className="container-detail">
                                <div className="name-location">{name}</div>
                                <div className="address">
                                    {district + ',' + province}
                                </div>
                                <img className="review" src={this.starPath(ReviewStar)} /><div className="count">({count} reviews)</div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
