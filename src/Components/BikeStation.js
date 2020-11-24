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
    }

    const favoriteHandler = (e) => {
        setFavStation({
            id: props.bike.id,
            location: props.bike.location,
            borough: props.bike.borough
        })
        props.addFaves(station)
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
                        <h4 onClick={localFilter}>Address: {props.bike.location}</h4>
                    </NavLink>

                    <p>Borough: {props.bike.borough}</p> {/* may remove for styling */}
                    <button onClick={clickHandler}> { clicked ? "Check Out" : "Check In" } </button> 
                    <button onClick={favoriteHandler}>Favorite</button>
                </li>
            </ul>

        </>
    )
}

export default BikeStation