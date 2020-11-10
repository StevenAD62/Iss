import React from 'react'
import Aux from '../../hoc/Aux'
import MapTracker from '../../components/Tracker/Map'
import Team from '../../components/Tracker/Team'
import './Iss.css'


const Iss = () => (
    <Aux>
        <div className="map-container">
            <MapTracker />
            <Team />
        </div>
    </Aux>
)

export default Iss
