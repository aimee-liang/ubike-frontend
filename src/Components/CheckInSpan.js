import React from "react"

const CheckInSpan = (props) => {

    console.log(props)
    return(
        <span>
            <p>@{props.username} is currently checked in</p>
        </span>
    )
}

export default CheckInSpan