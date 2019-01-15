import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
export class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            lat: "",
            lng: "",
            name: "",
            width: "",
            height: ""
        })
    }
    onMarkerClick = () => {
        const { lat, lng } = this.state
        window.open("https://google.com/maps/search/?api=1&query=" + lat + "," + lng, "_blank")
    }
    componentWillMount = () => {
        console.log(this.props)
        this.setState({
            lat: this.props.state.lat,
            lng: this.props.state.lng,
            name: this.props.state.name,
            width: this.props.state.width,
            height: this.props.state.height
        })
    }
    render() {
        const { lat, lng, name, width, height } = this.state
        return (
            <Map
                style={{ width: width, height: height, display: "inline-block" }}
                initialCenter={{
                    lat: lat,
                    lng: lng
                }}
                google={this.props.google} zoom={14}>
                <Marker onClick={this.onMarkerClick}
                    name={name}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                </InfoWindow>
            </Map>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyBbkRGhengln60xT_oFyPPOg1HV7OwWHuQ")
})(MapContainer)