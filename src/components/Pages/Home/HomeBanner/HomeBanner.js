import React from 'react';
import { ArrowDownShort } from 'react-bootstrap-icons';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className='home-banner position-absolute'>
            <div className='container h-100 d-flex align-items-center justify-content-center'>
                <div className='mt-5 pt-2 text-white text-uppercase text-center'>
                    <h4 className='tg-letter-space'>Let's Explorer</h4>
                    <h1 className='tg-large-heading fw-bold'>Explore With Me And Gather Amazing experience.</h1>
                    <a href="#services-section"><ArrowDownShort className='banner-arrow'></ArrowDownShort></a>
                    
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;