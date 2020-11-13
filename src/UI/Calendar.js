import React, { useState } from 'react'
import DatePicker from 'react-date-picker'
import './Calendar.css'


const Calendar = (props) => {
    const [value, setValue] = useState(new Date())

    const onChangeHandler = (value) => {
        setValue(value)
        props.onChange(value)
    }

    return (
        <div className='calendar-space'>
            <DatePicker
                className='calendar-container'
                maxDate={new Date()}
                minDate={new Date("01-01-2000")}
                onChange={onChangeHandler}
                value={value ? value : new Date()}
            />
        </div>
    )
}

export default Calendar