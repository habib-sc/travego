import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import Service from './Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    } , []);

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
            <h1 className='text-center mb-5'>Popular Tourist Spots</h1>
            <OwlCarousel className='owl-theme' {...owlOptions}>
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
            </OwlCarousel>
            
        </div>
    );
};

export default Services;