import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './views/Dashboard';
import LandingPage from './views/LandingPage';

const App = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/" element={<LandingPage/>} />
        </Routes>
     )
};


export default App;