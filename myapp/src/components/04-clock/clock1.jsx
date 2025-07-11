import React from 'react'
import "../../assets/sass/clock.scss"
import moment from 'moment';


export const Clock1 = () => {

    const dateTime = moment();
    const timeStr = dateTime.format("HH:mm");
    const dateStr = dateTime.format("LL");
    const dayStr = dateTime.format("dddd");
    const hour = dateTime.format("H");

    let message ="";
    if(hour >= 6 && hour < 12){
        message ="Morning";
    }
       else if(hour  >= 12 && hour < 18 ){
        message ="Afternoon";
       } 

       else if(hour >= 18 && hour < 24 ){
        message= "Evening";

       }
        else{
            message="Night";
        }


  return (
    <div className='clock-container'>

        <div className='time'>{timeStr}</div>
    <div>
        <div className='date'>{dateStr}</div>
        <div className='day'>{dayStr}</div>
    </div>

    </div>
  );
};
