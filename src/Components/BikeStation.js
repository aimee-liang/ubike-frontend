import React from "react"

class BikeStation extends React.Component{

/* stretch - use react hooks to make this a functional component */
    state={
        clicked: false
    }

    clickHandler = () => {
        this.setState((previousState)=> ({
            clicked: !previousState.clicked
        }))
    }

    displayCheckInMessage = () => {
        return <p>You're checked in!</p>
    }

/* stretch feature - how to check out 
    localCheckOut = () => {
    }
*/

    rerouteToBikeShowPage = (e) => {
        this.props.history.push(`/bikestation/${this.props.bike.id}`)
    }

    favoriteHandler = (e) => {
        this.props.favoriteStations(this.props.bike)
        // console.log("click")
    }

    render(){
        return (
            <>
                <ul>
                    <li key={this.props.bike.id}>
                        <h4 onClick={this.rerouteToBikeShowPage}>Address: {this.props.bike.location}  </h4>
                        <br>
                        </br>
                        Borough: {this.props.bike.borough}
                        <br>
                        </br>
                        <button onClick={this.clickHandler}>Check In</button> 
                        <button onClick={this.favoriteHandler}>Favorite</button>
                        {this.state.clicked ? this.displayCheckInMessage(): null} 
                    </li>
                </ul>
            </>
        )
    }
}

export default BikeStation