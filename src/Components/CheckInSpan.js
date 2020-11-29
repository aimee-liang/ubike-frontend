import React from "react"
class CheckInSpan extends React.Component{
    
    render(){
        return(
            <span>
                <p>Parked at {this.props.checkIn.location} </p>
                <p>Checked in since: {this.props.checkIn.datetime}</p>
            </span>
        )

    }
}

export default CheckInSpan