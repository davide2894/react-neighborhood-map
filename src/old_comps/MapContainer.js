import React, {Component} from "react";
import Map from "./Map";

export default class MapContainer extends Component {
    render(){
        return(
            <Map
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCzE5nhb6F0Tcr_BALpCtN5h_G3onbDdJE&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100vh`, width: `100vw` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            /> 
        )
    }
}