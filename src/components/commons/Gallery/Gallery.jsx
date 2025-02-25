import React from 'react';
import "./Gallery.css";
import Luna5 from '../../../assets/Img/Luna5.jpg'
import iluka from  '../../../assets/Img/iluka-hero.jpg'
import iluka3 from  '../../../assets/Img/iluka3.jpg'
import lawrence from  '../../../assets/Img/lawrence-hero.jpg'
import iluka4 from  '../../../assets/Img/iluka4.jpg'


const Gallery = () => {
    return (
    <>    
        <div className='Gallery'>
            <div className='Gallery__img'> 
                <img src={Luna5} alt=" image"/>
                <img src={iluka} alt=" image"/>
                <img src={lawrence} alt=" image"/>
                <img src={iluka4} alt=" image"/>
                <img src={iluka3} alt=" image"/>
            </div>
        </div>         
        
    </>    
    );
}

    export default Gallery