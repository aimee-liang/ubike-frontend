import React from "react"
import FavoriteStationsContainer from "./FavoriteStationsContainer"

export default class ProfilePage extends React.Component{
    render(){
        return(
            <>
                <div className="about-me">
                    <p> About Me</p>
                    {/* <img src/> */}
                    {/* username */}
                </div>

                <div className="currently-checked-status">
                    {/* is User checked in? */}
                </div>

                <FavoriteStationsContainer />
            </>
        )
    }
}