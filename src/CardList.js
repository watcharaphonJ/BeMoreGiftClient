import React, { Component } from 'react'
import './css/card-list.css'

export default class CardList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            district: "",
            province: "",
            img: ""
        }
    }
    componentWillMount = () => {
        console.log(this.props.detail)
        let nameDetail = this.props.detail.name
        let addressDetail = this.props.detail.address
        this.setState({
            name: nameDetail,
            district: addressDetail.district,
            province: addressDetail.province,
            img: this.props.detail.images
        })
    }
    render() {
        let { name, district, province, img } = this.state
        console.log(img)
        return (
            <div className="carddd">
                <div className="card-detail">
                    <img className="img-card-list" src={"https://api.bemoregift.com/static/" + img} />
                    <div className="detail">
                        <div className="container-detail">
                            <div className="name-location">{name}</div>
                            <div className="address">
                                {district + province}
                            </div>
                            <div className="review">kewfpo</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
