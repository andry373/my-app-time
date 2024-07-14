import React from 'react';
import Moment from "react-moment";


function TimeMsk() {
    const date = new Date();
   
    return(
        <div className = "timeMSK" >
        <p>time:</p>
       time:  <Moment format="YYYY-MM-DD HH:mm:ss" interval={10000} />
        </div>

    );

}

export default TimeMsk;