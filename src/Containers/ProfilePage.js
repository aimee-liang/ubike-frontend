import React, { useState } from "react"
import FavoriteStationsContainer from "./FavoriteStationsContainer"

const ProfilePage = (props) => {

    const deleteHandler = (e) => {
        console.log(e.target.value)
        // props.checkOut(e.target.value)
    }

        return(
            <>
                <div className="about-me">
                    <p> About Me</p>
                    {/* <img src/> */}
                    {/* username */}

                </div>

                <div className="currently-checked-status">
                    {/* is User checked in? */}


                    <button onClick={deleteHandler}> Check Out </button>
                    
                </div>

                <FavoriteStationsContainer favoriteStations={props.favoriteStations} />

            </>
        )
}

export default ProfilePage
