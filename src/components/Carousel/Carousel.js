import React from 'react'
import Carousel from 'react-elastic-carousel'
import './Carousel.css'

const ImgSlider = () => {
    const items = [
        {id: 1, title: 'https://via.placeholder.com/150'},
        {id: 2, title: 'https://via.placeholder.com/150'},
        {id: 3, title: 'https://via.placeholder.com/150'}
    ]

    return (
        <Carousel className='carousel'>
            {items.map(item => <div key={item.id}>{item.title}</div>)}
        </Carousel>
    )
}

export default ImgSlider