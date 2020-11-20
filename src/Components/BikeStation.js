import React from "react"
// import { useHistory } from "react-router-dom"

// const BikeStation = (props) => {
class BikeStation extends React.Component{
    state={
        clicked: false
    }

    clickHandler = () => {
        this.setState((previousState)=> ({
            clicked: !previousState.clicked
        }))
    }

    localCheckIn = () => {
        // this.props.checkedIn(bikeShelterObj)
        return <p>You're checked in!</p>
    }

    localCheckOut = () => {
        // this.props.checkedOut(bikeShelterObj)
    }

    rerouteToBikeShowPage = () => {
        console.log("click")
    }

    favoriteHandler = (bikeStationObj) => {
        // console.log("eat veggies")
        
    }

    render(){
        return (
            <>
            {/* <div key={props.id}> */}
                <ul>
                    <li key={this.props.id} onClick={this.rerouteToBikeShowPage}>
                        Address: {this.props.bike.location} 
                        <br>
                        </br>
                        Borough: {this.props.bike.borough}
                        <br>
                        </br>
                        <button onClick={this.clickHandler}>Check In</button> 
                        <button onClick={this.favoriteHandler}>Star Feature Here</button>
                        {this.state.clicked ? this.localCheckIn(): null} 
                    </li>
                </ul>
            {/* </div> */}
            </>
        )
    }
}

export default BikeStation