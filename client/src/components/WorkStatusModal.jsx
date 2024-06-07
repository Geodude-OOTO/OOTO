import React, {useState, useRef} from "react";
import {Button, CalendarCell, CalendarGrid, CalendarGridBody, CalendarGridHeader, CalendarHeaderCell, DateInput, DateRangePicker, DateSegment, Dialog, FieldError, Group, Heading, Label, Popover, RangeCalendar, Text} from 'react-aria-components';



const WorkStatusModal = ({open, close})=>{
if(open === false) return null;

// let [range, setRange] = React.useState<DateRange | null>(null);

async function submitStatus(){
   const status = document.querySelector('#workstatus').value;

   if(!status) return alert('Please fill all input fields');

   const reqData = await JSON.stringify({
      status
   })

   const req = await fetch('/XXXXX', {
      method: 'POST',
      headers: { 'Content-type': 'application/json'},
      body: reqData,
   })

   if(req.status == 200){
      alert('Success');
      close()
   }else{
      return alert('Unsuccessful')
   }
}



return(
   <div className="modal-wrapper" >
      <div id="testbox">
         <div className="modal-close-bttn-container">
            <button type="button" id="wsmodal-close-bttn" onClick={()=>close()}>close</button>
         </div>
         <div id="wsmodal-content-container">
            <div>
               <form action="">
                  <label htmlFor="workstatus">Status Discription:</label>
                  <input type="text" id="workstatus"/>

                  <div id="ws-submit-bttn">
                     <button type="button" onClick={()=>submitStatus()}>Submit</button>
                  </div>

               </form>

            </div>
            <div id="modal-calender-container">
            <DateRangePicker>
               <div className="date-container">
                  <div id="calender-header">
                  <span>Start:</span>
                  <DateInput slot="start">
                     {(segment) => <DateSegment segment={segment} />}
                  </DateInput>
                  </div>
                  <hr />
                  <div id="calender-header">
                  <span>End:</span>
                  <DateInput slot="end">
                     {(segment) => <DateSegment segment={segment} />}
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
         </div>
         
      </div>
   </div>
)
}
export default WorkStatusModal;