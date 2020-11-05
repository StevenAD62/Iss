import React from 'react';
import Logo from '../../UI/assets/world.png'
import './Toolbar.css'

const Toolbar = () => (
    <header className="navigation">
        <a href="/" className="anchor">
            <img className="logo" src={Logo} alt="world" />
            <p>ISStory</p>
        </a>
    </header>
)

export default Toolbar