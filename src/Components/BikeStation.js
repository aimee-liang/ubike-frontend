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

    /* stretch feature - check out 
        localCheckOut = () => {
            props.checkOut(props.bike.id)
        }
    */

/* this function to grab id of clicked station, then pass it up to the filterReviews fn in App*/
    const localFilter = (e) => {
        props.setStationIdForFilteringReviews(props.bike.id)
        // console.log(props.bike.id)
    }

    return (
        <>

            <ul>
                <li key={props.bike.id}>
                    <NavLink to={`/bike_stations/${props.bike.id}`}>
                        <h4 onClick={localFilter}>Address: {props.bike.location}</h4>
                    </NavLink>

                    <p>Borough: {props.bike.borough}</p>
                    <button onClick={clickHandler}> { clicked ? "Check Out" : "Check In" } </button> 
                    <button onClick={favoriteHandler}>Favorite</button>
                </li>
            </ul>

        </>
    )
}

export default BikeStation