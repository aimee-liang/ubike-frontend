import React from "react"
class CheckInSpan extends React.Component{
    
    render(){
        return(
            <span className="check-in-span">
                <i className="fas fa-map-pin"></i><p>Parked at {this.props.checkIn.location} since: {this.props.checkIn.datetime}</p>
            </span>
        )

    }
}

export default CheckInSpan