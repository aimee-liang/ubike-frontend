import React from "react"
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button"

class BikeStation extends React.Component {

    state={
        clicked: false,
        liked: false
    }

    clickHandler = (e) => {
        this.setState(previousState => ({
            clicked: !previousState.clicked
        }))
        this.props.checkedIn(this.props.bike)
    }


    favoriteHandler = (e) => {
        this.props.addFaves(this.props.bike)
        this.setState(previousState => ({
            liked: !previousState.liked
        }))
    }

    localFilter = (e) => {
        this.props.setStationIdForFilteringReviews(this.props.bike.id)
        this.props.setBikeObjToDisplayInShowPage(this.props.bike)
    }

    render(){
        return (
            <div className="individual-station">
    
                    <span key={this.props.bike.id}>
                        <img alt="" src="/bikestockphoto.jpg" className="bike-stock-photo" />
                        <NavLink to={`/bike_stations/${this.props.bike.id}`}>
                            <h4 onClick={this.localFilter}>{this.props.bike.location}</h4>
                        </NavLink>
    
                        {/* <p>Available Bike Racks: {this.props.bike.available_bike_racks}</p> */}
                        <Button variant="contained" onClick={this.clickHandler}> { this.state.clicked ? "✔️ You've checked in!": "Check In" } </Button> 
                        <Button variant="contained" color="secondary" onClick={this.favoriteHandler}>{ this.state.liked ? "♡ Liked!" : "Like"}</Button>
                    </span>   
                    
            </div>
        )

    }
}

export default BikeStation