import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const {name, img, price, text} = props.service;
    const navigate = useNavigate();
    
    const handleHire = () => {
        navigate('/checkout');
    }

    return (
        <div className="card position-relative" style={{'height': '500px'}}>
            <img src={img} className="card-img-top position-absolute" style={{'height': '100%', 'backgroundSize': 'cover'}} alt="..."/>
            <div className='service-card-price rounded-pill px-2 py-1 bg-light'>
                <p className='mb-0 fw-bold'>{price}$ <span>/ day</span></p>
            </div>
            <div className="card-body service-card-body m-3 rounded-3 shadow-lg">
                <h5 className="card-title fw-bold">{name}</h5>
                <p className="card-text">{text}</p>
                <button onClick={handleHire} className='btn btn-light shadow-lg fw-bold'>Hire For This</button>
            </div>
        </div>
    );
};

export default Service;