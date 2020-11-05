import React from 'react'
import Aux from '../../hoc/Aux'
import './Homepage.css'

const Homepage = () => (
    <Aux>
        <div className="home">
            <div className="card-iss">
                <p className="card-title">Test</p>
            </div>
            <div className="card-astro">
                <p className="card-title">Test 2</p>
            </div>
            <div className="card-rover">
                <p className="card-title">Test 3</p>
            </div>
        </div>
    </Aux>
);

export default Homepage