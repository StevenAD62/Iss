import React from 'react'
import './Temperature.css'

const Temperature = (props) => (
    <div className='temp-card'>
        <p><strong>Probe: {props.identifier}</strong></p>
        <p>{((props.data.AT.av * 9/5) + 32).toFixed(3)} °F</p>
    </div>
)

export default Temperature
