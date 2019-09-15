import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps"
import axios from 'axios';

import { ultraLight, shadesOfGrey } from '../utils/mapStyles';
import Marker from './CircelMarker';

const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson';
const key = 'AIzaSyDmDSX8pHQ3_OiMSdlMx7m8HURtvMQuU9M';

class Map extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }

    componentWillMount(){
        this.updateData();
        setInterval(this.updateData, 60 * 1000);
    }

    updateData = async () => {
        const res = await axios.get(url);
        const data = res.data.features;
        this.setState({data: data});
    }

    render(){
        return (
            <GoogleMap
                defaultZoom={3}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
                options={{
                    styles: shadesOfGrey,
                    streetViewControl: false,
                    fullscreenControl: false,
                    mapTypeControl: false,
                }}
            >        
                {this.state.data.length && this.state.data.map(d => {
                    return <Marker key={d.id} position={{ lat: d.geometry.coordinates[1], lng: d.geometry.coordinates[0] }} />
                })}
            </GoogleMap>
        );
    }
}

const MapWithHoc = withScriptjs(withGoogleMap(Map));

export default () => (
    <MapWithHoc 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `95vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />
);

