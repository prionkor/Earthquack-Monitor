import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"
import { ultraLight, shadesOfGrey } from '../utils/mapStyles';

const key = 'AIzaSyA5ZWLhFKwToJrthACmEfDk1K7x1d7tpSg';

const map = props => {

    return (
    <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
        defaultOptions={{
            styles: shadesOfGrey,
        }}
    >
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
    );
}

const MapWithHoc = withScriptjs(withGoogleMap(map));

export default () => (
    <MapWithHoc 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `95vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />
);

