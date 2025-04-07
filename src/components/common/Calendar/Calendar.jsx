import React, { useState, useEffect } from 'react';
import "./Calendar.css";
import { calendar } from '../../../data/data';
import { useNavigate } from 'react-router-dom';

const Calendar = ({ zoneObject }) => {
    const [days, setDays] = useState([]);
    const [hours, setHours] = useState([]);
    const [zoneReserve, setZoneReserve] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("🔁 useEffect ejecutado - Cargando calendario");
        setDays(calendar[0]);
        setHours(calendar[1]);

        const fetchReservas = async () => {
            const reservasTotales = [];
            for (const day of calendar[0]) {
                console.log(`📡 Consultando reservas para zona: ${zoneObject.nombre}, día: ${day}`);
                try {
                    const res = await fetch(`http://localhost:3000/disponibilidad/${encodeURIComponent(zoneObject.nombre)}/${day}`);
                    const data = await res.json();
                    console.log(`✅ Respuesta recibida para el día ${day}:`, data);
                    const reservasDia = data.ocupados.map((hora) => ({
                        day: data.dia,
                        time: hora.trim()
                    }));
                    reservasTotales.push(...reservasDia);
                } catch (error) {
                    console.error("❌ Error al consultar disponibilidad:", error);
                }
            }
            console.log("📥 Reservas totales obtenidas:", reservasTotales);
            setZoneReserve(reservasTotales);
        };

        fetchReservas();
    }, [zoneObject.nombre]);

    const reserve = (day, hour, nameZone) => {
        navigate(`/reservation-form`, { state: { day, hour, nameZone } });
    };

    const isReserved = (day, hour) => {
        const horaLimpia = hour.trim();
        const match = zoneReserve.some(res =>
            res.day === day && res.time === horaLimpia
        );

        if (match) {
            console.log(`❗ Reservado: ${day} - ${horaLimpia}`);
        }

        return match;
    };

    return (
        <table className='calendar-table'>
            <thead className='calendar-table__table-head'>
                <tr className='calendar-table__days'>
                    <th className='calendar-table-day'>Hours</th>
                    {days.map((day) => (
                        <th className='calendar-table-day' key={day}>{day}</th>
                    ))}
                </tr>
            </thead>
            <tbody className='calendar-table__table-body'>
                {hours.map((hour) => (
                    <tr className='calendar-table__hours' key={hour}>
                        <td className='calendar-table-hour'>{hour}</td>
                        {days.map((day) => {
                            const reserved = isReserved(day, hour);
                            return (
                                <td key={`${day}-${hour}`} className='calendar-table-hour'>
                                    <button
                                        onClick={() => !reserved && reserve(day, hour, zoneObject.nombre)}
                                        disabled={reserved}
                                        className={reserved ? 'calendar-table__button--reserved' : ''}
                                        title={reserved ? "Este horario ya está reservado" : "Haz clic para reservar"}
                                    >
                                        {reserved ? "Reservado" : "Reservar"}
                                    </button>
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Calendar;
