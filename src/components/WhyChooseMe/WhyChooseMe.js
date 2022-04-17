import React from 'react';
import pricingImg from '../../assets/images/affordable.png';
import experienceImg from '../../assets/images/experience.png';
import flexibleImg from '../../assets/images/flexibility.png';

const WhyChooseMe = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-5'>Why Choose Me</h1>
            <div className="row row-cols-1 row-cols-md-3 pb-5">
                <div className="col">
                    <div className="text-center shadow-lg rounded-3 py-3 my-3">
                        <img src={flexibleImg} style={{'width': '150px'}} alt="..."/>
                        <h3 className='my-3'>Ultimate Flexibility</h3>
                    </div>
                </div>
                <div className="col">
                    <div className="text-center shadow-lg rounded-3 py-3 my-3">
                        <img src={experienceImg} style={{'width': '150px'}} alt="..."/>
                        <h3 className='my-3'>Memoriable Experience</h3>
                    </div>
                </div>
                <div className="col">
                    <div className="text-center shadow-lg rounded-3 py-3 my-3">
                        <img src={pricingImg} style={{'width': '150px'}} alt="..."/>
                        <h3 className='my-3'>Compititive Pricing</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseMe;