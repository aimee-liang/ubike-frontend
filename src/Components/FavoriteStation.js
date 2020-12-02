import React from "react"
import Button from "@material-ui/core/Button"

const FavoriteStation = props => {

    const clickHandler = () => {
        props.unlike(props.station.id)
    }

    return(
        <>
        <p>{props.station.location} in {props.station.borough}</p>
        <Button variant="outlined" color="secondary" onClick={clickHandler}>Unfavorite this station</Button>
        </>
    )
}

export default FavoriteStation