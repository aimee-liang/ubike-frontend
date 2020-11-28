import React from "react"

const CheckInSpan = (props) => {
    // console.log(props.checkIn.created_at)

    // let dateTime = props.checkIn.createdAt
    // let dateOnly = 

    return(
        <span>
            <p>@{props.username} is currently checked in</p>
            {/* <p>Checked In Since: {props.checkIn.}</p> */}
            
        </span>
    )
}

export default CheckInSpan