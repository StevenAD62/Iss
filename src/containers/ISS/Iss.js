import React from 'react'
import Aux from '../../hoc/Aux'
import MapTracker from '../../components/Tracker/Map'
import './Iss.css'


const Iss = () => (
    <Aux>
        <div className="map-container">
            <MapTracker />
        </div>
    </Aux>
)

export default Iss
