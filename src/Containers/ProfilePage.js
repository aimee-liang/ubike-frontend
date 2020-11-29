import React from "react"
import EditProfileForm from "../Components/EditProfileForm"
import FavoriteStationsContainer from "./FavoriteStationsContainer"
import CheckInSpan from "../Components/CheckInSpan"

class ProfilePage extends React.Component{

    state={
        profile: false,
    }

    clickToEditProfile = () => {
        return <EditProfileForm editProfile={this.props.editProfile} profile={this.state.profile} hideProfileSpan={this.setProfileBackToFalse} />
    }

    displayCheckedIn = () => {
        return <CheckInSpan checkIn={this.props.user.check_in} username={this.props.user.username} />
    }

    displayNotCheckedIn = () => {
        return(
            <span>
                This user is not checked in anywhere!
            </span>
        )
    }
    
    localCheckOut = () => {
        this.props.checkOut(this.props.user.check_in.id)
    }

    setProfileBackToFalse = () => {
        this.setState(previousState => ({
            profile: !previousState.profile
        }))
    }
    
    render(){
        // console.log("ID:", this.props.user.check_in.id)
        return(
            <>
                <div className="about-me">
                    <h4>@{this.props.user.username}</h4>
                    <img alt="" src={this.props.user.avatar ? this.props.user.avatar : null} />
                    <p>Name: {this.props.user.name}</p>
                    <p>About Me: {this.props.user.bio ? this.props.user.bio : "This user did not submit a profile!"}</p>
                    <p>Bike Info: {this.props.user.bike}</p>
                    <button onClick={() => this.setState({profile: true}) }>Edit Profile</button>
                    {this.state.profile ? this.clickToEditProfile() : null }
                </div>

                <div className="currently-checked-status">
                    <h4>Status</h4>
                    {this.props.user.check_in ? this.displayCheckedIn() : this.displayNotCheckedIn() }
                    {this.props.user.check_in ? <button onClick={this.localCheckOut}> Check Out </button> : null}
                </div>

                <div className="fav-stations-div">
                    <h4>@{this.props.user.username}'s Favorite Stations</h4>
                    {this.props.user.favorite_stations ?
                        <FavoriteStationsContainer filterFavorites={this.props.user.favorite_stations} unlike={this.props.unlike}/> 
                            :
                        "This user did not favorite any stations."
                }
                
                </div>

            </>
        )
    }
}

export default ProfilePage
