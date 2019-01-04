import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import './css/map.css'
const mapStyles = {
    width: '100%',
    height: '100%'
};
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
var icons = {
    food: {
        icon: iconBase + 'parking_lot_maps.png'
    },
    Appliance: {
        icon: iconBase + 'library_maps.png'
    },
    Decoration: {
        icon: iconBase + 'info-i_maps.png'
    },
    Costume: {
        icon: iconBase + 'parking_lot_maps.png'
    },
    Accessories: {
        icon: iconBase + 'parking_lot_maps.png'
    },
    etc: {
        icon: iconBase + 'parking_lot_maps.png'
    },
};
var points = []
var infowindow = <div>test</div>
export class MapContainer extends Component {
    constructor(props) {
        super(props)
    }
    onMarkerClick = () => {
        alert("test")
    }
    componentWillMount = () => {
        var location = this.props.state
        location.map((location, i) => {
            points.push([
                location.name,
                location.lat,
                location.lng, i
            ])
        })
        console.log(points)
    }
    componentDidMount = () => {
        this.initMap()
    }
    initMap = () => {
        console.log(points)
        var iniLat = points[0][1]
        var iniLng = points[0][2]
        var myLatLng = { lat: iniLat, lng: iniLng };

        var map = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: myLatLng
        });

        var marker, i;
        console.log(points)

        for (i = 0; i < points.length; i++) {
            marker = new window.google.maps.Marker({
                position: new window.google.maps.LatLng(points[i][1], points[i][2]),
                map: map
            });
        }
    }
    render() {


        return (
            <div className="google-map" id="map">

            </div>

        );
    }
}

export default MapContainer