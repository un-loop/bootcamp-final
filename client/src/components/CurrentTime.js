import React, { useState } from "react"; 
const moment = require ("moment");


const CurrentTime = () => {
    let time = moment().format('MMMM Do YYYY, h:mm:ss a');
    const [ctime, setCtime] = useState(time);
    const UpdateTime = () => {
        time = moment().format('MMMM Do YYYY, h:mm:ss a')
        setCtime(time);
    };
    setInterval(UpdateTime, 1000);
    return(
        <>
            <p>{ctime}</p>
        </>
    );
}; 



export default CurrentTime;