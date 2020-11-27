import React from "react"

const CheckInSpan = (props) => {

    return(
        <span>
            <p>@{this.props.user.username} is currently checked in at this location: {props.checkIn}</p>
        </span>
    )
}

export default CheckInSpan