import React, { useState, useEffect } from 'react';
import './ReservationForm.css';
import { useLocation } from 'react-router-dom';

const ReservationForm = () => {
    const [userName, setUseName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userContact, setUserContact] = useState('');
    const [userZone, setUserZone] = useState('');
    const [userDay, setUserDay] = useState('');
    const [userHour, setUserHour] = useState('');

    const location = useLocation();
    const { day, hour, nameZone } = location.state || {}; 

    useEffect(() => {
        if (day && hour && nameZone) {
            setUserDay(day);
            setUserHour(hour);
            setUserZone(nameZone);
        }
    }, [day, hour, nameZone]);

    return (
        <div className="reservation-container">
            <form className="reservation-form">
                <h3>Reservar espacio</h3>
                <input type="text" name="nombre" placeholder="Tu nombre" required />
                <input type="email" name="email" placeholder="Correo electrónico" required />
                <input type="text" placeholder='Contacto' />
                <input type="text" placeholder='Zone' readOnly value={userZone} />
                <input type="text" placeholder='Dia' readOnly value={userDay} />
                <input type="text" placeholder='Hora' readOnly value={userHour} />
                <button type="submit">Confirmar Reserva</button>
            </form>
        </div>
    );
};

export default ReservationForm;

