import React, { useState } from "react"
import { useHistory } from "react-router-dom";

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

    const displayCheckInMessage = () => {
        return <p>You're checked in!</p>
    }

    /* stretch feature - how to check out 
        localCheckOut = () => {
        }
    */

    const ViewBikeStation = () => {
        let history = useHistory();
        return (
            <button type="button" onClick={()=> history.push(`/bike_station/${props.bike.id}`)}>See More</button>
        )
    }

    return (
        <>
            <ul>
                <li key={props.bike.id}>
                    Address: {props.bike.location}
                    <br></br>
                    Borough: {props.bike.borough}
                    <br></br>
                    <button onClick={clickHandler}> { clicked ? displayCheckInMessage() : "Check In" }</button> 
                    <button onClick={favoriteHandler}>Favorite</button>
                    {/* {ViewBikeStation} */}
                </li>
            </ul>
        </>
    )
}

export default BikeStation