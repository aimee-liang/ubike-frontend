import React from "react"

const CheckInSpan = (props) => {

    console.log("Props in check in span:", props)

    return(
        <span>
            <p>@{props.username} is currently checked in {props.checkedInAt.location}</p>
        </span>
    )
}

export default CheckInSpan