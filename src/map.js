import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import './css/map.css'
import marker from './img/0.png'
const mapStyles = {
    width: '100%',
    height: '100%'
};
var iconURLPrefix = 'http://maps.google.com/mapfiles/ms/icons/';
var icons = {
    food: {
        icon: iconURLPrefix + 'parking_lot_maps.png'
    },
    Appliance: {
        icon: iconURLPrefix + 'library_maps.png'
    },
    Decoration: {
        icon: iconURLPrefix + 'info-i_maps.png'
    },
    Costume: {
        icon: iconURLPrefix + 'parking_lot_maps.png'
    },
    Accessories: {
        icon: iconURLPrefix + 'parking_lot_maps.png'
    },
    etc: {
        icon: iconURLPrefix + 'parking_lot_maps.png'
    },
};
var points = []

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

        var i;
        var image = {
            url: '/img/0.png',
            // This marker is 20 pixels wide by 32 pixels high.
            size: new window.google.maps.Size(20, 32),
            // The origin for this image is (0, 0).
            origin: new window.google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new window.google.maps.Point(0, 32)
        };
        for (i = 0; i < points.length; i++) {
            var marker = new window.google.maps.Marker({
                position: new window.google.maps.LatLng(points[i][1], points[i][2]),
                map: map,
                icon: 'img/0.png',
                title: points[i][0]
            });
        }
        marker.addListener('click', function () {
            window.location.href = "https://google.com/maps/search/?api=1&query=" + points[0][1] + points[0][2]
        });
    }
    render() {


        return (
            <div className="google-map" id="map">

            </div>

        );
    }
}

export default MapContainer