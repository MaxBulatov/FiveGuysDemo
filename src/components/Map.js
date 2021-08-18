import React from 'react'
import GoogleMapReact from 'google-map-react'
import './styles/Contact.css';

const Map = () => {
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
    }
      
    return ( 
        <div className="google-map">
           <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBVeDBY8YubEph8Up2DyYwovnJuyVVdYeo' }}
                defaultCenter={location}
                defaultZoom={14}
            >
               
            </GoogleMapReact>
        <h1>no billing info added</h1>
        </div>);
}
 
export default Map;