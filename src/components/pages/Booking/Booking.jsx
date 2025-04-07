import React, { useState, useEffect } from "react";
import "./Booking.css";
import { zones } from "../../../data/data";

const Booking = () => {
    const [residentialZones, setResidentialZones] = useState([]);

    useEffect(() => {
        setResidentialZones(zones);
    }, [zones]);

    return (
        <div className="booking">
            {
                residentialZones.map((zone) => {
                    return <div key={zone.id} className="booking__zone">
                        <div className="booking__container-image">
                            <img className="booking__image" src={zone.imagen} alt="" />
                        </div>
                        <div className="booking__information">
                            <p className="booking__capacity">
                                {`${zone.capacidad} personas`}
                            </p >
                            <h2 className="booking__tittle">
                                {zone.nombre}
                            </h2>
                            <p className="booking__description">
                                {zone.descripcion}
                            </p>
                            <button className="booking__button">
                                Book Now
                            </button>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Booking;


