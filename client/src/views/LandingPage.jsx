import React from 'react';
import Benefits from '../components/landingPageComponents/Benefits';
import NavBar from '../components/landingPageComponents/NavBar';
import Testimonials from '../components/landingPageComponents/Testimonials';
import '../styles/landingpage.css';

const LandingPage = () => {
    return (
        <div>
            <NavBar/>
            <Benefits/>
            <Testimonials/>
        </div>
    )
};

export default LandingPage