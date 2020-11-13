import React, { useState, useEffect } from 'react'
import Temperature from '../../components/MarsStats/Temperature'
import MarsLogo from '../../UI/assets/mars.png'
import './Rover.css'

const Rover = () => {
    const [roverData, setRoverData] = useState({})
    const [roverKeys, setRoverKeys] = useState([])

    useEffect(() => {
        fetch('https://api.nasa.gov/insight_weather/?feedtype=json&ver=1.0&api_key=' + process.env.REACT_APP_NASA_API_KEY)
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData)
                setRoverData(responseData)
                setRoverKeys(responseData.sol_keys.slice(0, -2))
            })
    }, [])

    const avgTemp = () => {
        const temp = []
        for (const probeId of roverKeys){
            temp.push(roverData[probeId].AT.av)
        }
        let totalTemp = 0
        for (const tmp of temp){
            totalTemp += tmp
        } 
        return (((totalTemp / temp.length)* 9/5)+32).toFixed(2)
    }

    return (
        <div>
            <div>
                <p className='mars-title'>Mars Insights</p>
            </div>
            <div className='mars-global'>
                <div className='overview-container'>
                    <p className='overview'>Overview:</p>
                    <p> Temperature : <span className='stats'>{avgTemp()} °F</span></p>
                    <p> Atmospheric pressure : <span className='stats'>100</span></p>
                    <p> Wind speed : <span className='stats'>100</span></p>
                </div>
                <div className='overview-container'>
                    <p className='overview'>Distance from Earth :</p>
                    <p className='distance'>33.9 million miles</p>
                </div>
                <img className='planet' src={MarsLogo} alt='rover' />
            </div>
            <div className='details-container'>
                <p>DETAILS :</p>
                <div className='line-stroke'></div>
            </div>
            <div className='probes'>
                <p>Temperature (avg) :</p>
                {roverKeys.map(key => (
                    <Temperature key={key} identifier={key} data={roverData[key]} /> 
                    ))
                }
            </div>
        </div>
    )
}

export default Rover