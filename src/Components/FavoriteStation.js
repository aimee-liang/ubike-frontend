import React from "react"

const FavoriteStation = props => {

    console.log(props)

    return(
        <>
        <p>{props.station.location} in {props.station.borough}</p>
        </>
    )
}

export default FavoriteStation