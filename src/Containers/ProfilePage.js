import React from "react"
import EditProfileForm from "../Components/EditProfileForm"
import FavoriteStationsContainer from "./FavoriteStationsContainer"
import CheckInSpan from "../Components/CheckInSpan"

/* consider making this functional component later on */
class ProfilePage extends React.Component{

    state={
        profile: false,
    }

    clickToEditProfile = () => {
        return <EditProfileForm editProfile={this.props.editProfile} profile={this.state.profile}/>
    }

    displayCheckedIn = () => {
        return <CheckInSpan checkIn={this.props.user.check_ins} username={this.props.user.username} /* checkedInAt={this.props.checkedInAt}*/ />
    }

    displayNotCheckedIn = () => {
        return(
            <span>
                This user is not checked in anywhere!
            </span>
        )
    }
    
    localCheckOut = () => {
        this.props.checkOut(this.props.user.id)
    }
    
    render(){
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
                    {this.props.user.check_ins.length ? this.displayCheckedIn() &&  <button onClick={this.localCheckOut}> Check Out </button>  : this.displayNotCheckedIn()}
                    {/* {this.props.user.check_ins.length ? <button onClick={this.localCheckOut}> Check Out </button> : null} */}
                </div>

                <div className="fav-stations-div">
                    <h4>@{this.props.user.username}'s Favorite Stations</h4>
                    <FavoriteStationsContainer filterFavorites={this.props.user.favorite_stations} unlike={this.props.unlike}/>
                </div>

            </>
        )
    }
}

export default ProfilePage
