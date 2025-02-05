import React from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import { useMemo, useState, useCallback } from 'react';
import moment from 'moment'

// Setup the localizer by providing the moment (or globalize, or Luxon) Object to the correct localizer.
const localizer = momentLocalizer(moment); // Using moment to localize dates

const BigCalendar = ({ date, onNavigate, events}) => {
    // Commenting this since we are already getting a date from the dashboard container
    // const {defaultDate} = useMemo(() => ({
    //     defaultDate: new Date()
    // }), []);

     //testing the calendar using this events array of objects

    //  const events = [
    //     {
    //       "title": "Moises Gomez, Currently in Dubai",
    //       "start": new Date("2024-06-07T21:24:00.000Z"),
    //       "end": new Date("2024-06-07T23:00:00.000Z")
    //     }
    // ]

    /* The view state variable is used to set the default view of the big calendar upon render. Default is day view.
       We are importing the Views object on line 2 */
    const [view, setView] = useState(Views.DAY);

    /* If we want to use view in a controlled manner, this line below is needed */
    const onView = useCallback((newView) => setView(newView), [setView]);

    // Define the views you want to allow. Currently, only day and agenda views are enabled.
    const allowedViews = [Views.DAY, Views.AGENDA];
    
    return (
             <Calendar
                defaultDate={date}
                date={date}
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                onNavigate={onNavigate}
                view={view}
                views={allowedViews}
                onView={onView}
                events={events}
            />
    );
}

export default BigCalendar;
