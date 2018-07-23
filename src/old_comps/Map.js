import React from '../../../../.cache/typescript/2.9/node_modules/@types/react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MyMarker from './MyMarker';
import LocationList from './LocationList';

const Map = withScriptjs(withGoogleMap((props) => {

    const locations = [
        {
            id: 0,
            name: "Piazza Maggiore",
            position: { lat: 44.493877, lng: 11.343354 }
        },
        {
            id: "1",
            name: "Two Towers",
            position: { "lat": 44.494408, "lng": 11.346731 }
        },
        {
            id: "2",
            name: "Central Station",
            position: { "lat": 44.506219, "lng": 11.343166 }
        },
        {
            id: "3",
            name: "Zanhotel Tre Vecchi",
            position: { "lat": 44.499770, "lng": 11.344429 }
        },
        {
            id: "3",
            name: "Zanhotel Tre Vecchi",
            position: { "lat": 44.499770, "lng": 11.344429 }
        },
        {
            id: "4",
            name: "Zanhotel Tre Vecchi",
            position: { "lat": 44.501438, "lng": 11.336510 }
        }
    ]

    const markers = locations.map((place) => 
        <MyMarker
            key={place.id}
            location={{lat: place.position.lat, lng: place.position.lng}}
        />   
    )

    return(
        <GoogleMap
            defaultZoom={14}
            center={{ lat: 44.498955, lng: 11.327591 }}
        >   
            <LocationList 
                places={locations}
            />
            {markers}
        </GoogleMap>
    );
}))

export default Map

