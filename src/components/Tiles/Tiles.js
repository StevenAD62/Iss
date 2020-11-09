import React from 'react'
import Aux from '../../hoc/Aux'
import { Link } from 'react-router-dom';
import './Tiles.css'

const Tiles = () => (
    <Aux>
        <Link to="/iss" className="card-iss">
            <div className="bg-iss"></div>
            <p className="card-title">ISS</p>
            <p className="card-block">Track ISS in real time</p>
        </Link>
        <Link to="/pictures" className="card-astro">
            <div className="bg-astro"></div>
            <p className="card-title">Space Pictures</p>
            <p className="card-block">Discover the beauty of space</p>
        </Link>
        <Link to="/rover" className="card-rover">
            <div className="bg-rover"></div>
            <p className="card-title">Rover on Mars</p>
            <p className="card-block">View data from Mars</p>
        </Link>
    </Aux>
)

export default Tiles