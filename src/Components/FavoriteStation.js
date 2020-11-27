import React from "react"

const FavoriteStation = props => {

    const clickHandler = () => {
        props.unlike(props.station.id)
    }

    return(
        <>
        <p>{props.station.location} in {props.station.borough}</p>
        <button onClick={clickHandler}>Unfavorite this station</button>
        </>
    )
}

export default FavoriteStation