import React from "react"
import Button from "@material-ui/core/Button"
import StarsIcon from '@material-ui/icons/Stars';

const FavoriteStation = (props) => {

    const clickHandler = () => {
        props.unlike(props.station.id)
    }

    return(
        <>
            <p>{props.station.location} in {props.station.borough}</p>
            <Button variant="outlined" color="secondary" onClick={clickHandler}><StarsIcon /> &nbsp;Unlike this station</Button>
        </>
    )
}

export default FavoriteStation