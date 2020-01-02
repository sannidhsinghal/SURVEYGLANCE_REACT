import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: {}
    };
  }

  componentDidMount() {
    let position = { lat: this.props.lat, lng: this.props.lng };
    this.setState({ position: position });
  }

  render() {
    const mapStyles = {
      width: "100%",
      height: "100%"
    };

    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        center={this.state.position}
      >
        <Marker position={this.state.position} />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAp9tYNI0iahZ-N0iEuy2Iz7-_nR5IxnBQ"
})(MapComponent);
