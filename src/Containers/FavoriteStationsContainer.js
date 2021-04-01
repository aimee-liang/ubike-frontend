import React from "react"
import FavoriteStation from "../Components/FavoriteStation"

const FavoriteStationsContainer = (props) => {

    const renderFavoriteStations = props.filterFavorites.map((station, index) => <FavoriteStation key={index} station={station} unlike={props.unlike} />)

    return(
        <>
            {renderFavoriteStations}
        </>
    )
}

export default FavoriteStationsContainer