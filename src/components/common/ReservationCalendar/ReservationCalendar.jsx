import React from 'react'
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./ReservationCalendar.css"
import Calendar from "../../common/Calendar/Calendar";

const ReservationCalendar = () => {
    const [residentialZone, setResidentialZone] = useState([]);
    const location = useLocation();
    const { zone } = location.state || {}; 

    useEffect(() => {
        if (zone) {
            setResidentialZone(zone);
        }
    }, [zone]);

  return (
    <div className='reservation-calendar'>
        <h1 className='reservation-calendar__title'>Reserva tu zona</h1>
        <p className='reservation-calendar__name-zone'>{residentialZone.nombre}</p>
        <Calendar zoneObject={residentialZone} />
    </div>
  )
}

export default ReservationCalendar