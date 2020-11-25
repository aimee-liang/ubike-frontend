import React from "react"
import FavoriteStationsContainer from "./FavoriteStationsContainer"

// const ProfilePage = (props) => {
class ProfilePage extends React.Component{

    
    deleteHandler = (e) => {
        console.log(e.target.value)
/* stretch feature - check out 
        props.checkOut(props.bike.id)
    }
*/
}

render(){
    console.log("Props:", this.props.user)
        return(
            <>
                <div className="about-me">
                    <p> About Me</p>
                    @{this.props.user.username}
                    {/* <img src/> */}
                    <p>{this.props.user.name}</p>
                    <p>{this.props.user.bio}</p>
                    <button onClick>Edit Profile</button>
                </div>

                <div className="currently-checked-status">
                    {/* is User checked in? */}
                

                    <button onClick={this.deleteHandler}> Check Out </button>
                    
                </div>

                <FavoriteStationsContainer favoriteStations={this.props.favoriteStations} />

            </>
        )
    }
}

export default ProfilePage
