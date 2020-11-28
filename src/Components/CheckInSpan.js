import React from "react"
class CheckInSpan extends React.Component{

    state={
        curTime: new Date().toLocaleString()
    }

    render(){

        return(
            <span>
                <p>You checked into a bike station at </p> {/* props.user.check_ins.bike_station_id}</p> */}
                <p>Checked In Since: </p> {/* {props.checkIn.}</p> */}
                <p>Current time: {this.state.curTime}</p>
            </span>
        )

    }
}

export default CheckInSpan