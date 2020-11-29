import React from "react"
class CheckInSpan extends React.Component{
    
    render(){
        return(
            <span>
                <p>You checked into a bike station at {this.props.checkIn[1].location}</p>
                <p>Checked In Since: {this.props.checkIn[1].datetime}</p>
            </span>
        )

    }
}

export default CheckInSpan