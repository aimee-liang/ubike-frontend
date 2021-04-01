import React from "react"

const CheckInSpan = (props) => {
// class CheckInSpan extends React.Component{
    
    // render(){
        return(
            <span>
                <p>Parked at {props.checkIn.location} since: {props.checkIn.datetime}</p>
            </span>
        )

    // }
}

export default CheckInSpan