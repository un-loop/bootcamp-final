const moment = require ("moment");


const CurrentTime = () => {
    let curr_time = moment().format('MMMM Do YYYY, h:mm:ss a');
    return curr_time;
}; 


setInterval(() => {
    CurrentTime();
}, 1000);
CurrentTime()

export default CurrentTime;