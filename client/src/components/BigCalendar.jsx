import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { useMemo } from 'react';
import moment from 'moment'
import '../styles/bigcalendar.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const MyCalendar = (props) => {

    const {defaultDate} = useMemo(() => ({
        defaultDate: new Date()
      }), [])
    
    return (
  <div className="myCustomHeight">
    <Calendar
    defaultDate={defaultDate}
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
)
}

export default MyCalendar;