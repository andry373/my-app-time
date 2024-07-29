import React from 'react';


const options = {
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric'
  }

setInterval (
    function() {
    var time_date_full = new Date();

        document.getElementById("date").innerHTML = time_date_full;
        absolute_time_msk();
      },1000);
  
/* js приведение ко времени МСК */

//setInterval (
    function absolute_time_msk() {

        const offset_time_msk = 180; 
        const local_time = new Date();
        const local_time_offset = local_time.getTimezoneOffset();
        const abslt_time_msk_ms = local_time.setMinutes(local_time.getMinutes() + offset_time_msk + local_time_offset);
        const abslt_time_msk = new Date(abslt_time_msk_ms);
        document.getElementById("time_abs_MSK").innerHTML = abslt_time_msk.toTimeString();
        document.getElementById("time_abs_MSK_2").innerHTML = abslt_time_msk.toLocaleTimeString('ru-RU');

    }

//)

/* js приведение ко времени МСК */


function TimeMsk_native() {
    //const text_test = 'timeMSK';
    //const options_time = {    }

    //const time_date = new Date().toLocaleString();
    /*const time_date = new Date().toLocaleString();*/

    return (
 <div>
    <div id="date"></div>

    <div id="time_abs_MSK"></div>
    <div id="time_abs_MSK_2"></div>
 </div>
 );
}
export default TimeMsk_native;