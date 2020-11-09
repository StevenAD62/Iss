import React from 'react'
import Aux from '../../hoc/Aux'
import './Homepage.css'
import Tiles from '../../components/Tiles/Tiles'

const Homepage = () => (
    <Aux>
        <div className="home">
            <Tiles />
        </div>
    </Aux>
);

export default Homepage