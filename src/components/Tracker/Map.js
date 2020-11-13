import React, {useState, useEffect} from 'react'
import {MapContainer, Marker, TileLayer, Popup} from 'react-leaflet'
import { Icon } from 'leaflet'
import './Map.css'

const MapTracker = () => {
    const [marker, setMarker] = useState([])

    const satelliteIcon = new Icon ({
        iconUrl: '/satellite.svg',
        iconSize: [50,50]
    })

    const fetching = async () => {
        const results = await fetch('http://api.open-notify.org/iss-now.json')
        const data = await results.json()
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
        <MapContainer id="map" center={[26.23174, 6.13418]} zoom={2}>
            <TileLayer
                attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
            <Marker 
            position={marker.length ? [marker[0], marker[1]] : [1,1]} 
            icon={satelliteIcon}>
                    <Popup>
                        <div className='popup'>
                            <div><p><strong>Latitude:</strong> {marker[0]}</p></div>
                            <div><p><strong>Longitude:</strong> {marker[1]}</p></div>
                            <button onClick={() => window.open("https://youtu.be/DDU-rZs-Ic4", "_blank")}>Live</button>
                        </div>
                    </Popup>
            </Marker>
        </MapContainer>
    )    
}

export default MapTracker