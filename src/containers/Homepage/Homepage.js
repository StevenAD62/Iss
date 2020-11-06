import React from 'react'
import Aux from '../../hoc/Aux'
import './Homepage.css'

const Homepage = () => (
    <Aux>
        <div className="home">
            <div className="card-iss">
                <div className="bg-iss"></div>
                <p className="card-title">ISS</p>
                <p className="card-block">Suivre l'ISS en temps réel</p>
            </div>
            <div className="card-astro">
                <div className="bg-astro"></div>
                <p className="card-title">Space Pictures</p>
                <p className="card-block">Découvrir les beautés de l'espace</p>
            </div>
            <div className="card-rover">
                <div className="bg-rover"></div>
                <p className="card-title">Rover on Mars</p>
                <p className="card-block">Visualiser les données de Mars</p>
            </div>
        </div>
    </Aux>
);

export default Homepage