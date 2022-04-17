import React from 'react';
import Services from '../../Services/Services';
import HomeBanner from './HomeBanner/HomeBanner';

const Home = ({services, handleHire}) => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Services services={services} handleHire={handleHire}></Services>
        </div>
    );
};

export default Home;