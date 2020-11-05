import React from 'react'
import Aux from '../../hoc/Aux'
import './Homepage.css'

const Homepage = () => (
    <Aux>
        <div className="home">
            <div className="card-iss">
                <div className="bg-iss"></div>
                <p className="card-title">Test</p>
            </div>
            <div className="card-astro">
                <div className="bg-astro"></div>
                <p className="card-title">Test 2</p>
            </div>
            <div className="card-rover">
                <div className="bg-rover"></div>
                <p className="card-title">Test 3</p>
            </div>
        </div>
    </Aux>
);

export default Homepage