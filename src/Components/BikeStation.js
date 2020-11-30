import React from "react"
import { NavLink } from "react-router-dom";

class BikeStation extends React.Component {

    state={
        clicked: false
    }

    clickHandler = (e) => {
        this.setState(previousState => ({
            clicked: !previousState.clicked
        }))
        this.props.checkedIn(this.props.bike)
        // this.props.bike.available_bike_racks -= 1 /* need to update this to a PATCH request to the backend */
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
    
                    <span key={this.props.bike.id} className="individual-station">
                        <img alt="" src="/bikestockphoto.jpg" className="bike-stock-photo" />
                        <NavLink to={`/bike_stations/${this.props.bike.id}`}>
                            <h4 onClick={this.localFilter}>{this.props.bike.location}</h4>
                        </NavLink>
    
                        {/* <p>Available Bike Racks: {this.props.bike.available_bike_racks}</p> */}
                        <button onClick={this.clickHandler}> { this.state.clicked ? "You've checked in!": "Check In" } </button> 
                        <button onClick={this.favoriteHandler}>{this.state.clicked ? "Liked!" : "Like"}</button>
                    </span>    
            </>
        )

    }
}

export default BikeStation