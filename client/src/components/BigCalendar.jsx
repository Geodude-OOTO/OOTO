import React from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import { useMemo, useState, useCallback} from 'react';
import moment from 'moment'
import '../styles/bigcalendar.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const BigCalendar = ({date, onNavigate}) => {
//commenting this since we are already getting a date in the dashboard container
    // const {defaultDate} = useMemo(() => ({
    //     defaultDate: new Date()
    //   }), [])
    const [view, setView] = useState(Views.DAY)
    const onView = useCallback((newView) => setView(newView), [setView])

    // Define the views you want to allow
    const allowedViews = [Views.DAY, Views.AGENDA];
    
    return (
  <div className="myCustomHeight">
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
    />
  </div>
)
}

export default BigCalendar; 