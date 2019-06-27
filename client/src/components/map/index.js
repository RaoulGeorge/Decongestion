import React from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";

import "./map.scss";

const key = "AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk";
const mykey = "AIzaSyB-LNfxZAYI0nlQ-DZjmzNNWJGE3mebpEY";

const AtlassianCoords = { lat: 12.925808, lng: 77.689115 };
const gateCoords = { lat: 12.929507, lng: 77.684596 };
const outsideCoords = { lat: 12.930828, lng: 77.686347 };

const handleApiLoaded = (m, ma) => {
  displayRoutes(m, ma);
};

const displayRoutes = (m, ma) => {
  var directionsService = new ma.DirectionsService();
  var directionsDisplay = new ma.DirectionsRenderer();
  var trafficLayer = new ma.TrafficLayer();

  var start = new ma.LatLng(AtlassianCoords.lat, AtlassianCoords.lng);
  var end = new ma.LatLng(gateCoords.lat, gateCoords.lng);
  var bounds = new ma.LatLngBounds();
  bounds.extend(start);
  bounds.extend(end);
  m.fitBounds(bounds);
  var request = {
    origin: start,
    destination: end,
    travelMode: ma.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    console.log("Trip takes", response.routes[0].legs[0].duration);

    if (status == ma.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      directionsDisplay.setMap(m);
      trafficLayer.setMap(m);
    } else {
      alert(
        "Directions Request from " +
          start.toUrlValue(6) +
          " to " +
          end.toUrlValue(6) +
          " failed: " +
          status
      );
    }
  });
};

class GMap extends React.Component {
  static defaultProps = {
    center: AtlassianCoords,
    zoom: 20
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: mykey }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      />
    );
  }
}

export default GMap;
