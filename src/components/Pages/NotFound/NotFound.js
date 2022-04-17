import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../../../assets/images/404-travego.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='container text-center'>
            <h2 className='mt-5 text-secondary'>Opps...</h2>
            <img src={notFoundImage} className="w-25" alt="" />
            <h1 className='mt-3 text-secondary'>Page Not Found!</h1>
            <Link to="/"><button className='btn btn-light text-white fw-bold tg-button'>Back To Home</button></Link>
        </div>
    );
};

export default NotFound;