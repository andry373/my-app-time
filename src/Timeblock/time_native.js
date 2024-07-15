import React from 'react';



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