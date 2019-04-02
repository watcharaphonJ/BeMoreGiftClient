import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import zeroStar from "./img/0.png"
import oneStar from "./img/1.png"
import twoStar from "./img/2.png"
import threeStar from "./img/3.png"
import fourStar from "./img/4.png"
import fiveStar from "./img/5.png"
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
                location.star,
                location.center[0],
                location.center[1],
                location.img[0],
                location.id,
                location.comment
            ])
        })
        this.setState({
            points: locations
        })
    }
    componentDidMount = () => {
        this.initMap()
    }
    starPath = (star) => {
        switch (star) {
            case 0: return '<img class="star-googlemap" src="https://api.bemoregift.com/static/0.png" />'; break;
            case 1: return '<img class="star-googlemap" src="https://api.bemoregift.com/static/1png"/>'; break;
            case 2: return '<img class="star-googlemap" src="https://api.bemoregift.com/static/2.png"/>'; break;
            case 3: return '<img class="star-googlemap" src="https://api.bemoregift.com/static/3.png"/>'; break;
            case 4: return '<img class="star-googlemap" src="https://api.bemoregift.com/static/4.png"/>'; break;
            case 5: return '<img class="star-googlemap" src="https://api.bemoregift.com/static/5.png" />'; break;
        }
    }

    initMap = () => {
        const { points } = this.state
        const detail = this.props.state
        console.log(points)
        var myLatLng, iniLat, iniLng;
        if (points.length == 0) {
            myLatLng = { lat: 16.4335967, lng: 102.8228224 }
            var map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: myLatLng
            });
        }
        else {
            iniLat = points[0][1]
            iniLng = points[0][2]
            myLatLng = { lat: points[0][4], lng: points[0][5] };
            var i;
            var map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: myLatLng
            });
            var infowindow = new window.google.maps.InfoWindow();
            var marker, i;
            points.map((points) => {
                let star = points[3]
                let id = points[7]
                console.log(id)
                let urlImg = "https://api.bemoregift.com/static/" + points[6]
                let divStar = this.starPath(star)
                let contentInfowindow =
                    "<div class='map-box'>" +
                    "   <a href='review/" + id + " 'class='listing-img-container'>" +
                    '       <img src=' + urlImg + ' alt="">' +
                    '       <div class="listing-item-content">' +
                    '           <h3> ' + points[0] + '</h3>' +
                    '           <span>ถ.มิตรภาพ ศิลา เมืองขอนแก่น ขอนแก่น</span>' +
                    '       </div>' +
                    '   </a>' +
                    '   <div class="listing-content">' +
                    '       <div class="listing-title">' +
                    '           <div class="star-rating" >' +
                    divStar +
                    '           <div class="rating-counter">(' + points[8] + ' reviews)</div>' +

                    '  </div>' +
                    '</div>' +
                    '</div>' +
                    ' </div>'
                var contentString = '<div>' +
                    points[0] +
                    '</div>';
                var infowindow = new window.google.maps.InfoWindow({
                    content: contentInfowindow
                });
                marker = new window.google.maps.Marker({
                    position: new window.google.maps.LatLng(points[1], points[2]),
                    map: map,
                    title: points[0]
                });
                window.google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {

                        infowindow.open(map, marker);
                    }
                })(marker, i));
            })
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