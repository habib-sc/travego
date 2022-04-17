import React from 'react';
import Services from '../../Services/Services';
import WhyChooseMe from '../../WhyChooseMe/WhyChooseMe';
import HomeBanner from './HomeBanner/HomeBanner';

const Home = ({services, handleHire}) => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Services services={services} handleHire={handleHire}></Services>
            <WhyChooseMe></WhyChooseMe>
        </div>
    );
};

export default Home;