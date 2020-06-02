import React from 'react';
import { GoogleMap, LoadScript, InfoBox } from '@react-google-maps/api'

import axios from 'axios';

import { ultraLight, shadesOfGrey } from '../utils/mapStyles';
import Marker from './CircelMarker';
import { CircularProgress } from '@material-ui/core';

const url = process.env.REACT_APP_DATA_FEED_URL;
const key = process.env.REACT_APP_GOOGLE_API_KEY;

// const defaultCenter = { lat: 23.797911, lng: 90.414391 }; // Dhaka/Bangladesh
const defaultCenter = {lat: -33.865427, lng: 151.196123};

class Map extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount(){
        this.updateData();
        setInterval(this.updateData, 60 * 1000);
    }

    updateData = async () => {
        const res = await axios.get(url);
        const data = res.data.features.filter(v => v.properties.mag >= 2);

        this.setState({data: data});
    }

    onHoverItem = item => {
        this.setState({hoveredItem: item});
    }

    onBlurItem = () => {
        this.setState({hoveredItem: null});
    }

    render(){
        return (
            <LoadScript
                id="script-loader"
                googleMapsApiKey={key}
                loadingElement={<CircularProgress />}
                
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
                    <React.Fragment>
                        
                    
                        {this.state.data.length && this.state.data.map(d => {
                            return <Marker key={d.id} onBlur={this.onBlurItem} onHover={e => this.onHoverItem(d, e)} magnitude={d.properties.mag} position={{ lat: d.geometry.coordinates[1], lng: d.geometry.coordinates[0] }} />
                        })}
                    </React.Fragment> 
                </GoogleMap>
            </LoadScript>
        );
    }
}

export default Map;
