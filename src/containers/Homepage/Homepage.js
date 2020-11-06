import React from 'react'
import Aux from '../../hoc/Aux'
import './Homepage.css'
import { Link } from 'react-router-dom';

const Homepage = () => (
    <Aux>
        <div className="home">
            <Link to="/iss" className="card-iss">
                <div className="bg-iss"></div>
                <p className="card-title">ISS</p>
                <p className="card-block">Suivre l'ISS en temps reel</p>
            </Link>
            <Link to="/pictures" className="card-astro">
                <div className="bg-astro"></div>
                <p className="card-title">Space Pictures</p>
                <p className="card-block">Decouvrir les beautes de l'espace</p>
            </Link>
            <Link to="/rover" className="card-rover">
                <div className="bg-rover"></div>
                <p className="card-title">Rover on Mars</p>
                <p className="card-block">Visualiser les donnees de Mars</p>
            </Link>
        </div>
    </Aux>
);

export default Homepage