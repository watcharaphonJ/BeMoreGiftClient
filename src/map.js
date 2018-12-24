import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
const mapStyles = {
    width: '100%',
    height: '100%'
};
export class MapContainer extends Component {

    constructor(props) {
        super(props)
    }
    onMarkerClick = () => {
        alert("test")
    }

    render() {

        var bounds = new this.props.google.maps.LatLngBounds();
        var points = [
            { lat: 42.02, lng: -77.01 },
            { lat: 42.03, lng: -77.02 },
            { lat: 41.03, lng: -77.04 },
            { lat: 42.05, lng: -77.02 }
        ]

        for (var i = 0; i < points.length; i++) {
            bounds.extend(points[i]);
        }
        return (
            <Map google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: 42.39,
                    lng: -72.52
                }}

            >
                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{ lat: 37.778519, lng: -122.405640 }}

                />
                <Marker
                    name={'Dolores park'}
                    position={{ lat: 37.759703, lng: -122.428093 }}
                    onClick={this.onMarkerClick} />
                <Marker />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBbkRGhengln60xT_oFyPPOg1HV7OwWHuQ")
})(MapContainer)