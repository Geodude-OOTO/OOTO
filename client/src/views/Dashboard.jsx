import React, { useState, useCallback, useEffect } from "react";
import '../styles/dashboard.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import '../styles/workStatusModal.css'

import BigCalendar from "../components/BigCalendar";
import WorkStatusModal from "../components/WorkStatusModal";
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css'




const Dashboard = () => {

    // value state variable is set to the current date initially. setValue is used to update this date.
    const [value, setValue] = useState(new Date());
    //currently disabling navigation, need to see what side effects are overwritting 
    const [activeStartDate, setActiveStartDate] = useState(new Date());

    const [events, setEvents] = useState([]);

 
    //
    const [modalToggle, setModalToggle] = useState(false);
    const handleModalToggle = ()=>{
        setModalToggle(!modalToggle);
        console.log("Inside modal toggle: ", modalToggle);
    }
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

    const formatShortWeekday = (locale, date) => {
        return date.toLocaleDateString(locale, { weekday: 'narrow' }); // This returns a single letter
    };

    //get request to get all entries
    useEffect(() => {
        fetch('http://localhost:3000/api/events')
            .then(response => response.json())
            .then(data => {
                const transformedEvents = data.map(event => ({
                    ...event,
                    start: new Date(event.start),
                    end: new Date(event.end)
                }));
                console.log ('response we get after getting events', transformedEvents)
                setEvents(transformedEvents);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    }, []);
    
    
    return (
        <div className="dashboard-container">
            <button type="button" onClick={()=>{handleModalToggle()}}>Add Work Status</button>
            <WorkStatusModal open={modalToggle} close={handleModalToggle}/>
            <div className="react-calendar-container">
                <Calendar onChange={handleDateChange} value={value} activeStartDate={activeStartDate} onActiveStartDateChange={handleActiveDateChange} formatShortWeekday={formatShortWeekday} />
            </div>
            <div className="react-big-calendar-container">
            <BigCalendar date={value} onNavigate={onNavigate} events={events}  />
            </div>
        </div>
    );
}

export default Dashboard;
