import React from "react"
import { NavLink } from "react-router-dom";

// const BikeStation = props => {
class BikeStation extends React.Component{

    state={
        clicked: false,
        checked_in: {}
    }

    clickHandler = (e) => {
        this.setState(previousState => ({
            clicked: !previousState.clicked
        }))
        // console.log(this.props.bike.id)
        this.props.checkedIn(this.props.bike.id)
        this.props.bike.available_bike_racks -= 1 /* need to update this to a PATCH request to the backend */
    }

    favoriteHandler = (e) => {
        this.props.addFaves(this.props.bike)
    }

    localFilter = (e) => {
        this.props.setStationIdForFilteringReviews(this.props.bike.id)
        this.props.setBikeObjToDisplayInShowPage(this.props.bike)
    }

    render(){
        return (
            <>
    
                <ul>
                    <li key={this.props.bike.id}>
                        <NavLink to={`/bike_stations/${this.props.bike.id}`}>
                            <h4 onClick={this.localFilter}>{this.props.bike.location}</h4>
                        </NavLink>
    
                        <p>Available Bike Racks: {this.props.bike.available_bike_racks}</p>
                        <button onClick={this.clickHandler}> { this.state.clicked ? "Check Out" : "Check In" } </button> 
                        <button onClick={this.favoriteHandler}>Favorite</button>
                    </li>
                </ul>
    
            </>
        )
    }
}

export default BikeStation