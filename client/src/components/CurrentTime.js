const moment = require ("moment");


const CurrentTime = () => {
    

    let curr_time = moment().format('LT');
    return curr_time;
}; 

export default CurrentTime;