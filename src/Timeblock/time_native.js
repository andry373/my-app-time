import React from 'react';

/*
setInterval (
    function() {
    const time_date = new Date().toLocaleString();
        console.log(time_date);
      },1000);
*/    

function TimeMsk_native() {
    const text_test = 'timeMSK';
    const options_taime = {

    }

    //const time_date = new Date().toLocaleString();
    const time_date = new Date().toLocaleString();

    return (
 <div>
    <p>test</p> + {text_test}
    <p>времячко: {time_date}</p>
 </div>
 );
}
export default TimeMsk_native;