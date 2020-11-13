import React, { useState, useEffect } from 'react'
import Calendar from '../../UI/Calendar'
import './Space.css'

const Space = () => {
    const [picture, setPicture] = useState({})
    const [dateData, setDateData] = useState({})

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=' + process.env.REACT_APP_NASA_API_KEY)
            .then(response => response.json())
            .then(responseData => {
                setPicture(responseData)
            })
    }, [])

    const dateHandler = (value) => {
        const data = {
            day: value.getDay(),
            month: value.getMonth(),
            year: value.getYear()
        }
        setDateData(data)
    }

    return (
        <div className='space-container'>
            <div className='space-date'>
                <p>Choose a date and see the astronomic picture :</p>
                <Calendar onChange={(value) => dateHandler(value)} />
            </div>
            <div className='picture-container'>
                <img className='space-picture' src={picture.url} alt={picture.title} />
                <div className='details-container'>
                    <p className='space-title'>{picture.title}</p>
                    <p className='space-author'><em>{picture.copyright}</em></p>
                    <p className='space-description'>{picture.explanation}</p>
                </div>
            </div>
        </div>
    )
};

export default Space