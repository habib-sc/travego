import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Service from './Service/Service';
import './Services.css';

const Services = ({services, handleHire}) => {

    // Slider Setting 
    const sliderSettings = {
        dots: true,
        autoplay: true,
        pauseOnHover: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
      };

    return (
        <div id="services-section" className='container tg-home-services'>
            <h1 className='text-center mb-5'>My Guide Services</h1>
            <Slider {...sliderSettings}>
                {
                    services.map(service => <Service key={service.id} service={service} handleHire={handleHire}></Service>)
                }
            </Slider>
        </div>
    );
};

export default Services;