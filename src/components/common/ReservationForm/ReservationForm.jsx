import React, { useState } from 'react';
import './ReservationForm.css';

const ReservationForm = () => {



    return (
        <div className="reservation-container">


            <form className="reservation-form" onSubmit={handleSubmit}>
                <h3>Reservar espacio</h3>
                <input type="text" name="nombre" placeholder="Tu nombre" required />
                <input type="email" name="email" placeholder="Correo electrónico" required />
                <input type="date" name="fecha" required />
                <input type="time" name="hora" min="10:00" max="17:00" required />
                <button type="submit">Confirmar Reserva</button>
            </form>

        </div>
    );
};

export default ReservationForm;

