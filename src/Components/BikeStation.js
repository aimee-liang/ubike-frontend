import React, { useState } from "react"
import { useHistory } from "react-router-dom";
// import {Redirect} from "react-router"

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

    /* stretch feature - check out 
        localCheckOut = () => {
            props.checkOut(props.bike.id)
        }
    */

    // let history = useHistory();

    const redirectToBikeShowPage = (e) => {
        props.filterReviews(props.bike.id)
        // history.push(`/bike_station/${props.bike.id}`)
    }

    return (
        <>
        {/* <Switch> */}

            <ul>
                <li key={props.bike.id}>
                    {/* <Route path="/bike_stations/:id" render={({ match }) => {
                        let id = parseInt(match.params.id)
                    }}>
                        <h4>Address:{props.bike.location}</h4>
                    </Route> */}
                    {/* <NavLink to="/bike_stations/:id"><h4>Address: {props.bike.location}</h4></NavLink> */}
                        
                    {/* <h4 onClick={redirectToBikeShowPage}>{props.bike.location}</h4> */}
                    <p>Borough: {props.bike.borough}</p>
                    <button onClick={clickHandler}> { clicked ? "Check Out" : "Check In" } </button> 
                    <button onClick={favoriteHandler}>Favorite</button>
                </li>
            </ul>

        {/* </Switch> */}
        </>
    )
}

export default BikeStation