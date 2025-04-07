import React, { useState, useEffect } from 'react';
import './ReservationForm.css';
import { useLocation } from 'react-router-dom';
import { FiUser, FiMail, FiPhone, FiCheckCircle } from 'react-icons/fi';

const ReservationForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [userZone, setUserZone] = useState('');
    const [userDay, setUserDay] = useState('');
    const [userHour, setUserHour] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');

    const location = useLocation();
    const { day, hour, nameZone } = location.state || {};

    useEffect(() => {
        if (day && hour && nameZone) {
            setUserDay(day);
            setUserHour(hour);
            setUserZone(nameZone);
        }
    }, [day, hour, nameZone]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reserva = {
            zona: userZone,
            dia: userDay,
            hora: userHour,
            nombre: name,
            contacto: contact,
            email: email
        };

        console.log("📤 Enviando reserva:", reserva);

        try {
            const response = await fetch('http://localhost:3000/reservar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reserva),
            });

            const data = await response.json();
            console.log("✅ Respuesta del servidor:", data);

            if (response.ok) {
                setStatusMessage("✅ ¡Reserva exitosa!");
                setSubmitted(true);
            } else {
                setStatusMessage(`⚠️ Error: ${data.mensaje}`);
            }
        } catch (error) {
            console.error("❌ Error al enviar la reserva:", error);
            setStatusMessage("❌ Error de conexión al servidor.");
        }
    };

    return (
        <div className="reservation-container">
            {
                submitted ? (
                    <div className="reservation-success">
                        <FiCheckCircle size={60} color="#22c55e" />
                        <h3>¡Reserva confirmada!</h3>
                        <p>{statusMessage || "Te hemos enviado los detalles por correo."}</p>
                    </div>
                ) : (
                    <form className="reservation-form" onSubmit={handleSubmit}>
                        <h3>Reservar espacio</h3>

                        <div className="input-icon">
                            <FiUser className="icon" />
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Tu nombre"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-icon">
                            <FiMail className="icon" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-icon">
                            <FiPhone className="icon" />
                            <input
                                type="text"
                                name="contacto"
                                placeholder="Contacto"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </div>

                        <input type="text" placeholder='Zona' readOnly value={userZone} />
                        <input type="text" placeholder='Día' readOnly value={userDay} />
                        <input type="text" placeholder='Hora' readOnly value={userHour} />

                        <button type="submit">Confirmar Reserva</button>
                        {statusMessage && <p>{statusMessage}</p>}
                    </form>
                )
            }
        </div>
    );
};

export default ReservationForm;
