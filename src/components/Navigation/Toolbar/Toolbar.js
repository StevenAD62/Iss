import React from 'react';
import Logo from '../../..//UI/assets/world.png'
import './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = () => (
    <header className="navigation">
        <a href="/" className="anchor">
            <img className="logo" src={Logo} alt="world" />
            <p className="logo-title">ISStory</p>
        </a>
        <NavigationItems />
    </header>
)

export default Toolbar