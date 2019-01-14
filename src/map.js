import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import './css/map.css'
import marker from './img/0.png'
const mapStyles = {
    width: '100%',
    height: '100%'
};
var map;

export class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            points: []
        }
    }
    onMarkerClick = () => {
        alert("test")
    }
    componentWillMount = () => {
        var location = this.props.state
        console.log(location)
        location.map((location, i) => {
            this.setState({
                points: [[
                    location.name,
                    location.lat,
                    location.lng,
                    i]
                ]
            }
            )
        })
    }
    componentDidMount = () => {
        this.initMap()
    }


    initMap = () => {
        const { points } = this.state
        var myLatLng, iniLat, iniLng;
        console.log(points[0][0])
        if (points.length == 0) {
            myLatLng = { lat: 16.439625, lng: 102.828728 }
            iniLat = 16
            iniLng = 102
            var map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: myLatLng
            });
        }
        else {
            iniLat = points[0][1]
            iniLng = points[0][2]
            myLatLng = { lat: iniLat, lng: iniLng };
            var i;
            var map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: myLatLng
            });


            for (i = 0; i < points.length; i++) {
                const shopName = "<div>" + points[i][0] + "</div>"
                var infowindow = new window.google.maps.InfoWindow({
                    content: shopName
                });

                var marker = new window.google.maps.Marker({
                    position: new window.google.maps.LatLng(points[i][1], points[i][2]),
                    map: map,
                    title: points[i][0]
                });
                infowindow.open(map, marker);
            }
            marker.addListener('click', function () {
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