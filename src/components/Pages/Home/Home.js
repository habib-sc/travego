import React from 'react';
import Services from '../../Services/Services';
import HomeBanner from './HomeBanner/HomeBanner';

const Home = ({services}) => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Services services={services}></Services>
        </div>
    );
};

export default Home;