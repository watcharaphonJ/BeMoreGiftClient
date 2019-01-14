import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const mapStyles = {
    width: '100%',
    height: '100%',
};

export class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            lat: "",
            lng: "",
            name: ""
        })
    }
    onMarkerClick = () => {
        const { lat, lng } = this.state
        console.log(lat, lng)
        window.open("https://google.com/maps/search/?api=1&query=" + lat + "," + lng, "_blank")
    }
    componentWillMount = () => {
        this.setState({
            lat: this.props.state.lat,
            lng: this.props.state.lng,
            name: this.props.state.name
        })
    }
    render() {
        const { lat, lng, name } = this.state
        return (
            <Map
                style={mapStyles}
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
                    <div>
                        test
          </div>
                </InfoWindow>

            </Map>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyBbkRGhengln60xT_oFyPPOg1HV7OwWHuQ")
})(MapContainer)