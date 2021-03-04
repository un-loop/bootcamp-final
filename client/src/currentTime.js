import React, { useState, useEffect } from 'react';
// import moment from 'moment';

export const CurrentTime = () => {
    // var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    var [date, setDate] = useState(new Date());
    
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <p> {date.toLocaleDateString()} {date.toLocaleTimeString()}</p>
        </div>
    )
}

export default CurrentTime;