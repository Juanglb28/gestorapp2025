import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import lunaIcon from '../../../assets/Img/lunaBlue.png';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo-container'>
                <div className='header__logo'>
                    <img src={lunaIcon} alt="Luna Icon" />
                    <span>LUNA HOTELS</span>
                </div>
            </div>

            <nav className='header__navigation'>
                <ul className="header__list">
                    <li className="header__item"><a href="/">Home</a></li>
                    <li className="header__item"><a href="/booking">Booking</a></li>
                    <li className="header__item"><a href="/dashboard">Dashboard</a></li>
                    <li className="header__item">
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;