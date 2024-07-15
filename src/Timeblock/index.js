import React from 'react';
import Moment from "react-moment";


function TimeMsk() {
   
    const text_test = 'timeMSK';
   
    return(
        <div className = "timeMSK" >
        <p>Время с библиотекой</p>
       time:  <Moment format="YYYY-MM-DD HH:mm:ss" interval={1000} />
       {text_test} 

        </div>
        );

}

export default TimeMsk;