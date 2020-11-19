import React from "react"

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
        return <p> You've checked out!</p>
    }

    favoriteHandler = () => {
        console.log("eat veggies")
    }

    render(){
        return (
            <>
            {/* <div key={props.id}> */}
                <ul>
                    <li key={this.props.id}>
                        Address: {this.props.bike.location} 
                        <br>
                        </br>
                        Borough: {this.props.bike.borough}
                        <br>
                        </br>
                        <button onClick={this.clickHandler ? this.localCheckIn() : this.localCheckOut()}>Check In</button>
                        <button onClick={this.favoriteHandler}>Star Feature Here</button>
                    </li>
                </ul>
            {/* </div> */}
            </>
        )
    }
}

export default BikeStation