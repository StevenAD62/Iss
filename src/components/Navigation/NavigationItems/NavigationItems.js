import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'

const NavigationItems = () => (
    <ul className="nav-list">
        <NavigationItem link="/iss">ISS</NavigationItem>
        <NavigationItem link="/pictures">Space Pictures</NavigationItem>
        <NavigationItem link="/mars">Rover on Mars</NavigationItem>
    </ul>
)

export default NavigationItems