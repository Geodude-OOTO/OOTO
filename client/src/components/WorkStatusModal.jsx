import React, {useState} from "react";
import {Button, CalendarCell, CalendarGrid, Heading, RangeCalendar} from 'react-aria-components';

// import "@react-aria/example-theme";


const WorkStatusModal = ({open, close})=>{
if(open === false) return null;

return(
   <div className="modal-wrapper" >
      <div id="testbox">
         <div>
            <button type="button" onClick={()=>close()}>close</button>
         </div>
         <div id="modal-calender-container">
            <RangeCalendar aria-label="Trip dates">
               <header>
                  <Button slot="previous">◀</Button>
                  <Heading />
                  <Button slot="next">▶</Button>
               </header>
            <CalendarGrid>
             {(date) => <CalendarCell date={date} />}
            </CalendarGrid>
            </RangeCalendar>
         </div>
      </div>
   </div>
)
}
export default WorkStatusModal;