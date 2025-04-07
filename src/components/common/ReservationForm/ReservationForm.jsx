import React, { useState, useEffect } from 'react';
import './ReservationForm.css';
import { useLocation } from 'react-router-dom';
import { FiUser, FiMail, FiPhone, FiCheckCircle } from 'react-icons/fi';

const ReservationForm = () => {
    const [submitted, setSubmitted] = useState(false);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías enviar los datos...
        setSubmitted(true);
    };

    return (
        <div className="reservation-container">
            {
                submitted ? (
                    <div className="reservation-success">
                        <FiCheckCircle size={60} color="#22c55e" />
                        <h3>¡Reserva confirmada!</h3>
                        <p>Te hemos enviado los detalles por correo.</p>
                    </div>
                ) : (
                    <form className="reservation-form" onSubmit={handleSubmit}>
                        <h3>Reservar espacio</h3>

                        <div className="input-icon">
                            <FiUser className="icon" />
                            <input type="text" name="nombre" placeholder="Tu nombre" required />
                        </div>

                        <div className="input-icon">
                            <FiMail className="icon" />
                            <input type="email" name="email" placeholder="Correo electrónico" required />
                        </div>

                        <div className="input-icon">
                            <FiPhone className="icon" />
                            <input type="text" name="contacto" placeholder="Contacto" />
                        </div>

                        <input type="text" placeholder='Zona' readOnly value={userZone} />
                        <input type="text" placeholder='Día' readOnly value={userDay} />
                        <input type="text" placeholder='Hora' readOnly value={userHour} />

                        <button type="submit">Confirmar Reserva</button>
                    </form>
                )
            }
        </div>
    );
};

export default ReservationForm;


