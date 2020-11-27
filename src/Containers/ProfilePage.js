import React from "react"
import EditProfileForm from "../Components/EditProfileForm"
import FavoriteStationsContainer from "./FavoriteStationsContainer"
import CheckInSpan from "../Components/CheckInSpan"

class ProfilePage extends React.Component{

    state={
        profile: false
    }

    clickToEditProfile = () => {
        return <EditProfileForm editProfile={this.props.editProfile}/>
    }

    displayCheckedIn = () => {
        return <CheckInSpan checkIn={this.props.user.check_ins} username={this.props.user.username}/>
    }

    displayNotCheckedIn = () => {
        return(
            <span>
                This user is not checked in anywhere!
            </span>
        )
    }

/* filter for duplicate just in case - does bike station id match the others? */
    // inCaseOfFavoriteStationsDuplicate = () => {
    //     let favStationsFiltered = new Set(this.props.user.favorite_stations)
    //     let favStationsFilteredArray = [...favStationsFiltered]
    //     return favStationsFilteredArray
    // } 
    
    
/* filter for check ins to pass down && validate on backend */
    // filterCheckIns = () => {
        // let filteredForUser = new Set(this.props.user.check_ins)
    //     console.log("My check ins:", this.props.user.check_ins)
    // }
    
    localCheckOut = () => {
        this.props.checkOut(this.props.user.id)
    }
    
    render(){
    console.log("User:", this.props.user)
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
                    {this.props.user.check_ins ? this.displayCheckedIn() : this.displayNotCheckedIn()}
                    <button onClick={this.localCheckOut}> Check Out </button>
                </div>

                <div className="fav-stations-div">
                    <h4>@{this.props.user.username}'s favorite stations</h4>
                    <FavoriteStationsContainer filterFavorites={this.props.user.favorite_stations} />
                </div>

            </>
        )
    }
}

export default ProfilePage
