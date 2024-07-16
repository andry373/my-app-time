import React from 'react';


const options = {
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric'
  }

setInterval (
    function() {
    var time_date_full = new Date();
    /*var time_date = new Date().getTime();*/
        console.log(time_date_full);
        document.getElementById("time_1").innerHTML = (time_date_full.getHours() + ":" + time_date_full.getMinutes() + ":" + time_date_full.getSeconds());
        document.getElementById("time_2").innerHTML =time_date_full.toTimeString('ru-RU');
        document.getElementById("time_3").innerHTML =time_date_full.toString('ru-RU');
        document.getElementById("time_4").innerHTML =time_date_full.toLocaleTimeString('ru-RU', options);
        document.getElementById("time_5").innerHTML =time_date_full.toLocaleTimeString('ru-RU');

        document.getElementById("date").innerHTML = time_date_full;
      },1000);
  

function TimeMsk_native() {
    //const text_test = 'timeMSK';
    //const options_time = {    }

    //const time_date = new Date().toLocaleString();
    /*const time_date = new Date().toLocaleString();*/

    return (
 <div>
    <div id="date"></div>
    <div id="time_1"></div>
    <div id="time_2"></div>
    <div id="time_3"></div>
    <div id="time_4"></div>
    <div id="time_5"></div>
 </div>
 );
}
export default TimeMsk_native;