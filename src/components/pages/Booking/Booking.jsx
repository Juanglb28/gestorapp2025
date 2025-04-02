import React, { useState, useEffect } from "react";
import "./Booking.css";
import { zones } from "../../../data/data";

const Booking = () => {
    const [residentialZones, setResidentialZones] = useState([]);

    useEffect(() => {
        setResidentialZones(zones);
    }, []);

    return (
        <div className="booking">
            {residentialZones.map((zone) => (
                <div key={zone.id} className="booking-zones__zones">
                    <img className="booking__zone__imagen" src={zone.imagen} alt={zone.nombre} />
                    <h2 className="booking__zone__nombre">{zone.nombre}</h2>
                    <p className="booking__zone__descripcion">{zone.descripcion}</p>
                    <p className="booking__zone__horarios">{zone.horarios}</p>
                    <p className="booking__zone__capacity">{zone.capacity}</p>
                </div>
            ))}
        </div>
    );
};

export default Booking;


