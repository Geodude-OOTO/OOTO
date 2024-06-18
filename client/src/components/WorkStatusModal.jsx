import React, {useState, useRef} from "react";
import {Button,TimeField, CalendarCell, CalendarGrid, CalendarGridBody, CalendarGridHeader, CalendarHeaderCell, DateInput, DateRangePicker, DateSegment, Dialog, FieldError, Group, Heading, Label, Popover, RangeCalendar, Text} from 'react-aria-components';



const WorkStatusModal = ({open, close, updateCal, setEvents})=>{
if(open === false) return null;

// let [range, setRange] = React.useState<DateRange | null>(null);
let [startTime, setStartTime] = useState(null);
let [endTime, setEndTime] = useState(null);


async function submitStatus(){
   const status = document.querySelector('#workstatus').value;
   const dateEle = document.getElementsByClassName('react-aria-Input');
   
   const startDate = dateEle[0].value;
   const endDate = dateEle[1].value ;

   if(!status | !startDate | !endDate | !startTime | !endDate ) return alert('Please fill all input fields');

   const reqData = await JSON.stringify({
      title: status,
      start: new Date(`${startDate} ${startTime}`).toISOString(),
      end: new Date(`${endDate} ${endTime}`).toISOString(),
   })

   console.log(reqData)
   const req = await fetch('http://localhost:3000/api/events', {
      method: 'POST',
      headers: { 'Content-type': 'application/json'},
      body: reqData,
   })

   if(req.status == 200){
      alert('Success');
      const resData = await req.json();
      console.log (resData)
      const transformedEvents = resData.map(event => ({
         ...event,
         start: new Date(event.start),
         end: new Date(event.end)
     }));
     console.log ('response we get after getting events', transformedEvents)
     setEvents(transformedEvents);
      close()
   }else{
      return alert('Unsuccessful')
   }
}



return(
   <div className="modal-wrapper" >
      <div id="testbox">
         <div className="modal-close-bttn-container">
            <button type="button" id="wsmodal-close-bttn" className={'calender-button'} onClick={()=>close()}>Close</button>
         </div>
         <div id="wsmodal-content-container">
            <div id="modal-leftContent-container">
               <form action="">
                  <label htmlFor="workstatus">Status Discription:</label>
                  <input type="text" id="workstatus"/>

                  <div id="ws-submit-bttn">
                     <button type="button" className={'calender-button'} onClick={()=>submitStatus()}>Submit</button>
                  </div>

               </form>

            </div>
            <div id="modal-rightContent-container">
               <div id="modal-calender-container">
               <DateRangePicker>
                  <div className="date-container">
                     <div id="calender-header">
                     <span>Start:  </span>
                     <DateInput className={'calendar-DateInput'} slot="start">
                        {(segment) => <DateSegment className={'calenderStart'} segment={segment} />}
                     </DateInput>
                     </div>
                     <hr />
                     <div id="calender-header">
                     <span>End:  </span>
                     <DateInput className={'calendar-DateInput'} slot="end">
                        {(segment) => <DateSegment className={'calenderStart'} segment={segment} />}
                     </DateInput>
                     </div>
                  </div>

                  <Dialog>
                     <RangeCalendar>
                     <header>
                        <Button slot="previous">◀</Button>
                        <Heading />
                        <Button slot="next">▶</Button>
                     </header>
                     <CalendarGrid>
                        {(date) => <CalendarCell date={date} />}
                     </CalendarGrid>
                     </RangeCalendar>
                  </Dialog>
               </DateRangePicker>
               </div>

               {/* Time components */}
               <div className="time-container">
                  <TimeField onChange={setStartTime}>
                     <Label>Start Time</Label>
                     <DateInput>
                        {segment => <DateSegment segment={segment} />}
                     </DateInput>
                  </TimeField>
                  <TimeField onChange={setEndTime}>
                     <Label>End Start</Label>
                     <DateInput>
                        {segment => <DateSegment cla segment={segment} />}
                     </DateInput>
                  </TimeField>

               </div>
         </div>
         </div>
         
      </div>
   </div>
)
}
export default WorkStatusModal;