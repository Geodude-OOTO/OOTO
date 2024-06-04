import React, { useState } from "react";
import '../styles/dashboard.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import MyCalendar from "../components/BigCalendar";



const Dashboard = () => {

    const [value, setValue] = useState(new Date());
    const handleDateChange = (date) => {
        setValue (date);
    }
    return (<div className="dashboard-container">
        <div>
        <Calendar onChange={handleDateChange} value={value} />
       
        </div>
        <MyCalendar/>

        </div>
    );

}


export default Dashboard;