import React from "react"
import EditProfileForm from "../Components/EditProfileForm"
import FavoriteStationsContainer from "./FavoriteStationsContainer"
import CheckInSpan from "../Components/CheckInSpan"
import {Redirect} from "react-router-dom"
import Button from "@material-ui/core/Button"

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
        this.displayNotCheckedIn()
    }

    setProfileBackToFalse = () => {
        this.setState(previousState => ({
            profile: !previousState.profile
        }))
    }
    
    render(){
        return(
            <>

            {this.props.user ? 
                <>
                    <div className="about-me">
                        <h4>@{this.props.user.username}</h4>
                        <div>
                            <img alt="" className="default-pic"  src={this.props.user.avatar ? this.props.user.avatar : "/Octocat.png" }/>
                        </div>
                        <p>Name: {this.props.user.name}</p>
                        <p>About Me: {this.props.user.bio ? this.props.user.bio : "This user did not submit a profile!"}</p>
                        <p>Bike Info: {this.props.user.bike}</p>
                        <Button variant="outlined" color="primary" onClick={() => this.setState({profile: true}) }>Edit Profile</Button>
                        {this.state.profile ? this.clickToEditProfile() : null }
                    </div>
    
                    <div className="currently-checked-status">
                        <h4>Status</h4>
                        {this.props.check_in.length ? this.displayCheckedIn() : this.displayNotCheckedIn() }
                        {this.props.check_in.length ? <button onClick={this.localCheckOut}> Check Out </button> : null}
                    </div>
    
                    <div className="fav-stations-div">
                        <h4>@{this.props.user.username}'s Favorite Stations</h4>
                        {this.props.user.favorite_stations.length ?
                            <FavoriteStationsContainer filterFavorites={this.props.favorites} unlike={this.props.unlike}/> 
                                :
                            "This user did not favorite any stations."
                    }
                    
                    </div>
                    
                </>
            : <Redirect to="/home" /> }
        </>
        )
    }
}

export default ProfilePage
