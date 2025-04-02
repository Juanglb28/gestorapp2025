import React from 'react';
import "./Footer.css";
import Sky from '../../../assets/Img/Sky.jpeg'

const Footer = () => {
    return (
        <div className='footer'>
            <img className='footer__img' src={Sky} alt="Lake and sky" />
            <div className='footer__content'>
                <h3 className='footer__tittle'>Things to do in Luna Hotel</h3>
                <p className='footer__paragraph'>Always discovering activities</p>
            </div>
        </div>
    );
}
export default Footer
