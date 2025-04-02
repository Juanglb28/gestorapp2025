import React, { useState, useEffect } from 'react'
import "./Calendar.css"
import { calendar } from '../../../data/data'
import { Form, useNavigate } from 'react-router-dom'


const Calendar = () => {
    const [days, setDays] = useState([])
    const [hours, setHours] = useState([])

    const navigator = useNavigate = useState([])

    useEffect(() => {
        setDays(calendar[0])
        setHours(calendar[1])
    }, [calendar])

    function createBooking(dia, hora){
       navigator("/form," {state:{day, hour}})
    }
    const reserve = (day, hour)=> {alert(`Se solicita reserva para el dia ${day} a las ${hour}`)} 

    return (
        <table className='calendar-table'>
            <thead className='calendar-table__table-head'>
                <tr className='calendar-table__days'>
                    <th className='calendar-table-day' >Hours</th>
                    {days.map((day) => <th className='calendar-table-day' key={day}>{day}</th>)}
                </tr>
            </thead>
            <tbody className='calendar-table__table-body'>
                {
                    hours.map((hour) =>
                        <tr className='calendar-table__hours' key={hour} >
                            <td className='calendar-table-hour'>{hour}</td>
                            {
                                days.map((i) =>
                                    <td key={i} className='calendar-table-hour'>
                                        <button onClick={()=> reserve(i, hour)}>Reservar</button>
                                    </td>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default Calendar