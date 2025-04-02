import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import lunaIcon from '../../../assets/Img/lunaBlue.png';

const Header = () => {
    return (
        <header className='header'>
            <nav className='header__navigation'>
                <div className='header__logo'>
                    <img src={lunaIcon} alt="Luna Icon" />
                    <span>LUNA HOTELS</span>
                </div>
                <ul className='header__list'>
                    <li className='header__item'><Link to="/home">Home</Link></li>
                    <li className='header__item'><Link to="/booking">Booking</Link></li>
                    <li className='header__item'><Link to="/dashboard">Dashboard</Link></li>
                </ul>
                <div className='header__book'>
                    <Link to="/booking" className='header__book-btn'>Book Now</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;