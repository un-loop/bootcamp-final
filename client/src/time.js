import React from 'react';
import moment from 'moment';
import { Box } from '@material-ui/core';

let Time = () => {
    let update = function() {
        document.getElementById("datetime")
        .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
    }
    setInterval(update, 1000);

    return (
<Box id="datetime">

</Box>

    )
};
export default  Time;