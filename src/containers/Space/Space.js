import React, { useState, useEffect } from 'react'
import Calendar from '../../UI/Calendar/Calendar'
import Spinner from '../../UI/Spinner/Spinner'
import './Space.css'

const Space = () => {
    const [picture, setPicture] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=' + process.env.REACT_APP_NASA_API_KEY)
            .then(response => response.json())
            .then(responseData => {
                setPicture(responseData)
            })
    }, [])

    const dateHandler = (value) => {
        setIsLoading(true)
        console.log('VALUE => ', value)
        const data = {
            day: value.getDate() +1,
            month: value.getMonth() + 1,
            year: value.getYear() + 1900
        }
        console.log('DATE OBJECT => ', data)
        fetch(`https://api.nasa.gov/planetary/apod?date=${data.year}-${data.month}-${data.day}&api_key=` + process.env.REACT_APP_NASA_API_KEY)
            .then(response => response.json())
            .then(resData => {
                console.log(resData)
                setPicture(resData)
                setIsLoading(false)
            })
    }

    return (
        <div className='space-container'>
            <div className='space-date'>
                <p>Choose a date and see the astronomic picture :</p>
                <Calendar onChange={(value) => dateHandler(value)} />
            </div>
            {isLoading
                ? (<div className='spinner-container'><Spinner /></div>)
                : (
                    <div className='picture-container'>
                    {picture.media_type === 'video'
                        ? (<iframe className='space-picture' title={picture.tile} src={picture.url}></iframe>)
                        : (<img className='space-picture' src={picture.url} alt={picture.title} />)
                    }
                    <div className='details-container'>
                        <p className='space-title'>{picture.title}</p>
                        <p className='space-author'><em>{picture.copyright}</em></p>
                        <p className='space-description'>{picture.explanation}</p>
                    </div>
                </div>
                )
            }
        </div>
    )
};

export default Space