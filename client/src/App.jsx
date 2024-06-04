import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './views/Dashboard'

const App = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
     )
};


export default App;