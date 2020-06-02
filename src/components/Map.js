import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, InfoBox, MarkerClusterer } from '@react-google-maps/api';

import axios from 'axios';
import { shadesOfGrey } from '../utils/mapStyles';
import Marker from './CircelMarker';
import { CircularProgress } from '@material-ui/core';

const url = process.env.REACT_APP_DATA_FEED_URL;
const key = process.env.REACT_APP_GOOGLE_API_KEY;

const defaultCenter = { lat: 23.797911, lng: 90.414391 }; // Dhaka/Bangladesh
// const defaultCenter = {lat: -33.865427, lng: 151.196123};
const markerClusterOption = {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
};

const Map = () => {

    const [ data, setData ] = useState([]);
    const [ hoveredItem, setHoveredItem ] = useState(null);
    
    useEffect(() => {
        updateData();
        setInterval(updateData, 60 * 1000);
    }, []);

    const updateData = async () => {
        const res = await axios.get(url);
        const data = res.data.features.filter(v => v.properties.mag >= 2);
        setData(data);
    }

    const onHoverItem = item => {
        setHoveredItem(item);
    }

    const onBlurItem = () => {
        setHoveredItem(null);
    }
    
    return (
        <LoadScript
            id="script-loader"
            googleMapsApiKey={key}
            loadingElement={<CircularProgress color="#FFFFFF" />}
            
        >
            <GoogleMap
                id="eq-map"
                mapContainerStyle={{height: '100vh'}}
                zoom={4}
                center={defaultCenter}
                options={{
                    styles: shadesOfGrey,
                    streetViewControl: false,
                    fullscreenControl: false,
                    mapTypeControl: false,
                }}
            >  
                { data.length && 
                    <MarkerClusterer averageCenter={true} options={markerClusterOption}>
                        {clusterer => data.map((d, i) => <Marker clusterer={clusterer} key={i} onBlur={onBlurItem} onHover={e => onHoverItem(d, e)} magnitude={d.properties.mag} position={{ lat: d.geometry.coordinates[1], lng: d.geometry.coordinates[0] }} />)}
                    </MarkerClusterer>
                }
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;
