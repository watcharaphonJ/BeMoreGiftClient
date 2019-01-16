import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import './css/map.css'

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
        this.setState({
            points: []
        })
        let locations = []
        location.map((location, i) => {
            locations.push([
                location.name,
                location.lat,
                location.lng,
                i,
                location.center[0],
                location.center[1]
            ])
        })
        this.setState({
            points: locations
        })
    }
    componentDidMount = () => {
        this.initMap()
    }

    initMap = () => {
        const { points } = this.state
        var myLatLng, iniLat, iniLng;
        console.log(points)
        if (points.length == 0) {
            myLatLng = { lat: 16.4335967, lng: 102.8228224 }
            var map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: myLatLng
            });
        }
        else {
            iniLat = points[0][4]
            iniLng = points[0][5]
            myLatLng = { lat: iniLat, lng: iniLng };
            var i;
            var map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: myLatLng
            });
            var infowindow = new window.google.maps.InfoWindow();
            var marker, i;
            for (i = 0; i < points.length; i++) {
                var contentString = '<div>' +
                    points[i][0] +
                    '</div>';
                var infowindow = new window.google.maps.InfoWindow({
                    content: contentString
                });

                marker = new window.google.maps.Marker({
                    position: new window.google.maps.LatLng(points[i][1], points[i][2]),
                    map: map,
                    title: points[i][0]

                });

                window.google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
                    return function () {
                        infowindow.setContent(points[i][0]);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
            }
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