import {React, useState, useEffect} from 'react'
import Aux from '../../hoc/Aux'
import './Iss.css'
import {MapContainer, Marker, TileLayer} from 'react-leaflet'
import { Icon } from 'leaflet'


const Iss = () => {
    const [marker, setMarker] = useState([])

    const satelliteIcon = new Icon ({
        iconUrl: '/satellite.svg',
        iconSize: [45,45]
    })

    const fetching = async () => {
        const results = await fetch('http://api.open-notify.org/iss-now.json')
        const data = await results.json()
        console.log('DATA , ', data)
        setMarker([Number(data.iss_position.latitude), Number(data.iss_position.longitude)])
    }

    useEffect(() => {
        if (marker.length === 0) {
            fetching()
        } else {
        const interval = setInterval(() => {
           fetching()
        }, 5000);
        return () => clearInterval(interval)}
    }, [marker])

    return (
        <Aux>
            <div className="map-container">
                <MapContainer id="map" center={[50.629250, 3.057256]} zoom={2}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker 
                        position={marker.length ? [marker[0], marker[1]] : [1,1]}
                        icon={satelliteIcon}
                    />
                </MapContainer>
            </div>
        </Aux>
    )
}

export default Iss