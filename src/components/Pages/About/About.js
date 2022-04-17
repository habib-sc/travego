import React from 'react';
import profileImage from '../../../assets/images/habib-bg-white.png';
import './About.css';

const About = () => {
    return (
        <div className='container d-flex flex-wrap flex-md-nowrap justify-content-between align-items-center mt-5 gap-5'>
            <div>
                <h1>Md. Habibur Rahman</h1>
                <p className='w-75 fs-5'>Currently I work as a React Js Developer. I like programming and technology and I am always trying to increase my programming skill and tech knowledge. In next 3 month I will learn Node Js, Express Js, MongoDB. And in the mean time I will try to get a remote job as a junior developer. Then I will try to gain more skill in this stack and get promotion or get better job. Finally within next 2 years I will do my best to be a highly professional software developer.</p>
            </div>
            <div className='about-img shadow-lg w-100'>
                <img src={profileImage} className='img-fluid' alt="" />
            </div>
        </div>
    );
};

export default About;