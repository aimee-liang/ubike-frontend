import React from "react"

const FavoriteStation = props => {

    return(
        <>
        <p>{props.station.location}</p>
        <p>{props.station.borough}</p>
        </>
    )
}

export default FavoriteStation