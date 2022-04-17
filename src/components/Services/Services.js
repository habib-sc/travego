import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Service from './Service/Service';
import './Services.css';

const Services = ({services, handleHire}) => {

    //Owl Carousel Settings
    const owlOptions = {
        loop: true,
        center: true,
        items: 3,
        margin: 15,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    };

    return (
        <div className='container tg-home-services'>
            <h1 className='text-center mb-5'>My Guide Services</h1>
            <OwlCarousel id='service-carousel' className='owl-theme' {...owlOptions}>
            {
                services.map(service => <Service key={service.id} service={service} handleHire={handleHire}></Service>)
            }
            </OwlCarousel>
            
        </div>
    );
};

export default Services;