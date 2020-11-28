import React, {useState} from "react"
import { NavLink } from "react-router-dom";

const BikeStation = props => {

    const [clicked, setClicked] = useState(false)


    const clickHandler = (e) => {
        setClicked(true)
        props.checkedIn(props.bike.id)
        props.bike.available_bike_racks -= 1 /* need to update this to a PATCH request to the backend */
    }

    const favoriteHandler = (e) => {
        props.addFaves(props.bike)
    }

    const localFilter = (e) => {
        props.setStationIdForFilteringReviews(props.bike.id)
        props.setBikeObjToDisplayInShowPage(props.bike)
    }

        return (
            <>
    
                <ul>
                    <li key={props.bike.id}>
                        <NavLink to={`/bike_stations/${props.bike.id}`}>
                            <h4 onClick={localFilter}>{props.bike.location}</h4>
                        </NavLink>
    
                        <p>Available Bike Racks: {props.bike.available_bike_racks}</p>
                        <button onClick={clickHandler}> { clicked ? "You've checked in!": "Check In" } </button> 
                        <button onClick={favoriteHandler}>Favorite</button>
                    </li>
                </ul>
    
            </>
        )
}

export default BikeStation