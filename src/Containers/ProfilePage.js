import React from "react"
import EditProfileForm from "../Components/EditProfileForm"
import FavoriteStationsContainer from "./FavoriteStationsContainer"
import CheckInSpan from "../Components/CheckInSpan"
import {Redirect} from "react-router-dom"
import Button from "@material-ui/core/Button"
import EditIcon from '@material-ui/icons/Edit';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

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

    hasUserCheckInProps = () => {
        if (this.props.check_in.length >= 1){
            return this.displayCheckedIn()
            // return <Button variant="outlined" color="secondary" onClick={this.localCheckOut} className="check-out-button">Check Out</Button>
        } else if (this.props.check_in === null) {
            return this.displayNotCheckedIn()
        }
    }
    
    render(){
        return(
            <>
            {this.props.user ? 
                <div className="profile-page"> 
                        <div className = "profile-pic-container">
                            <img alt="" className="default-pic"  src={this.props.user.avatar ? this.props.user.avatar : "/Octocat.png" }/>
                        </div>

                    <div className="about-me">
                        <h4>@{this.props.user.username}</h4>
                        <p>Name: {this.props.user.name}</p>
                        <p>About Me: {this.props.user.bio ? this.props.user.bio : "This user did not submit a profile!"}</p>
                        <p>Bike Info: {this.props.user.bike}</p>
                        <Button variant="contained" color="primary" onClick={() => this.setState({profile: true}) }><EditIcon />&nbsp;Edit Profile</Button>
                        {this.state.profile ? this.clickToEditProfile() : null }
                    </div>
    
                    <div className="currently-checked-status">
                        <h3>Status</h3>
                        {this.hasUserCheckInProps()}
                        {/* {this.props.check_in.length ? this.displayCheckedIn() && <Button variant="outlined" color="secondary" onClick={this.localCheckOut} className="check-out-button"> Check Out </Button> : null } */}
                        {this.props.check_in === null ? null : <Button variant="contained" color="secondary" onClick={this.localCheckOut} className="check-out-button"><DirectionsBikeIcon/>&nbsp; Check Out </Button> }
                    </div>
    
                    <div className="fav-stations-div">
                        <h3>@{this.props.user.username}'s Favorite Stations</h3>
                        {this.props.user.favorite_stations.length ?
                            <FavoriteStationsContainer filterFavorites={this.props.favorites} unlike={this.props.unlike}/> 
                                :
                            "This user did not favorite any stations."
                        }
                    </div>
                    
                </div>
            : <Redirect to="/home" /> }
        </>
        )
    }
}

export default ProfilePage
