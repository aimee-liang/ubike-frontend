import React, { useState } from "react"
import { NavLink } from "react-router-dom";


const BikeStation = props => {

    const [clicked, setClicked] = useState(false)

    const [station, setFavStation] = useState({
        id: 0,
        location: "",
        borough: ""
    })

    const [checkIn, setCheckedIn] = useState({
        id: 0
    })

    const clickHandler = (e) => {
        setClicked(!clicked)
        setCheckedIn({
            id: props.bike.id
        })
        props.checkedIn(checkIn)
        props.bike.available_bike_racks -= 1 /* need to update this to a PATCH request to the backend */
    }

    const favoriteHandler = (e) => {
        setFavStation({
            id: props.bike.id,
            location: props.bike.location,
            borough: props.bike.borough
        })
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

                    <p>Borough: {props.bike.borough}</p> {/* may remove for styling */}

                    <p>Bikes Racks Available: {props.bike.available_bike_racks}</p>
                    <button onClick={clickHandler}> { clicked ? "Check Out" : "Check In" } </button> 
                    <button onClick={favoriteHandler}>Favorite</button>
                </li>
            </ul>

        </>
    )
}

export default BikeStation