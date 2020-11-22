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

    // const displayCheckInMessage = () => {
    //     return <p>You're checked in!</p>
    // }

    /* stretch feature - how to check out 
        localCheckOut = () => {
        }
    */

    let history = useHistory();

    const redirectToBikeShowPage = () => {
        history.push(`/bike_station/${props.bike.id}`)
    }

    return (
        <>
            <ul>
                <li key={props.bike.id}>
                    <h4 onClick={redirectToBikeShowPage}>Address: {props.bike.location}</h4>
                    <p>Borough: {props.bike.borough}</p>
                    <button onClick={clickHandler}> { clicked ? "Check Out" : "Check In" } </button> 
                    <button onClick={favoriteHandler}>Favorite</button>
                </li>
            </ul>
        </>
    )
}

export default BikeStation