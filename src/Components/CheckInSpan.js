import React from "react"

const CheckInSpan = (props) => {
// class CheckInSpan extends React.Component{
    
    // render(){
        return(
            <span>
                <p>Parked at {this.props.checkIn.location} since: {this.props.checkIn.datetime}</p>
            </span>
        )

    // }
}

export default CheckInSpan