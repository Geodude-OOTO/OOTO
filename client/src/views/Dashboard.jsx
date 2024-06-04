import React, { useState, useCallback } from "react";
import '../styles/dashboard.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import BigCalendar from "../components/BigCalendar";



const Dashboard = () => {

    const [value, setValue] = useState(new Date());
    const handleDateChange = (date) => {
        setValue (date);
    }

    const onNavigate = useCallback((newDate) => setValue(newDate), [setValue])
    return (<div className="dashboard-container">
        <div>
        <Calendar onChange={handleDateChange} value={value} />
       
        </div>
        <BigCalendar date={value} onNavigate={onNavigate}/>

        </div>
    );

}


export default Dashboard;