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

    console.log(services);

    return (
        <div className='container tg-home-services'>
            <OwlCarousel className='owl-theme' loop margin={10} autoplay>
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
            </OwlCarousel>
            
        </div>
    );
};

export default Services;