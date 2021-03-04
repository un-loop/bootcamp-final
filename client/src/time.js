import React from 'react';
import moment from 'moment';
import { Box } from '@material-ui/core';

const Time = () => {

    return (

<Box> {moment().format('MMMM Do YYYY, h:mm:ss a')}


</Box>

    )
};
export default  Time;