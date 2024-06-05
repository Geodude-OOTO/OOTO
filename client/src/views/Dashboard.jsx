import React, { useState, useCallback, useEffect } from "react";
import '../styles/dashboard.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css'


import BigCalendar from "../components/BigCalendar";

const Dashboard = () => {
    // value state variable is set to the current date initially. setValue is used to update this date.
    const [value, setValue] = useState(new Date());
    //currently disabling navigation, need to see what side effects are overwritting 
    const [activeStartDate, setActiveStartDate] = useState(new Date());

    // handleDateChange function updates the date state with the new date selected on the react-calendar.
    const handleDateChange = (date) => {
        setValue(date);
         //currently disabling navigation, need to see what side effects are overwritting 
        setActiveStartDate(date);
    }

    // onNavigate is a memoized callback that updates the date state. This function is passed to BigCalendar to handle navigation changes.
    const onNavigate = useCallback((newDate) => {
        setValue(newDate);
         //currently disabling navigation, need to see what side effects are overwritting 
        setActiveStartDate(newDate);
    }, [setValue, setActiveStartDate]);

    const handleActiveDateChange = ({ activeStartDate }) => {
        setActiveStartDate(activeStartDate);
    };
    
    return (
        <div className="dashboard-container">
            <div>
                <Calendar onChange={handleDateChange} value={value} activeStartDate={activeStartDate} onActiveStartDateChange={handleActiveDateChange}  />
            </div>
            <BigCalendar date={value} onNavigate={onNavigate} />
        </div>
    );
}

export default Dashboard;
