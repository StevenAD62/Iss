import React from 'react'
import Aux from '../../hoc/Aux'
import './Iss.css'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import { Icon } from 'leaflet'


const Iss = () => {
    return (
        <Aux>
            <div className="map-container">
                <MapContainer id="map" center={[50.629250, 3.057256]} zoom={2}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>
        </Aux>
    )
}

export default Iss