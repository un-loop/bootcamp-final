import React, { useState } from "react"
import moment from "moment"

const Time = () => {
    const [currentTime, setCurrentTime] = useState(moment().format('MMMM Do YYYY, h:mm a'));

    setInterval(
        () => setCurrentTime(moment().format('MMMM Do YYYY, h:mm a')),
        1000
    )

    return (
        <span>
            {currentTime}
        </span>
    )
}

export default Time