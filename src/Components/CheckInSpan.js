import React from "react"
class CheckInSpan extends React.Component{

    state={
        curTime: new Date().toLocaleString()
    }
    
    render(){
        // console.log("Props in check in span", this.props.checkIn[0].location)

        return(
            <span>
                <p>You checked into a bike station at {this.props.checkIn[0].location}</p>
                <p>Checked In Since: </p> {/* {props.checkIn.}</p> */}
                <p>Current time: {this.state.curTime}</p>
            </span>
        )

    }
}

export default CheckInSpan