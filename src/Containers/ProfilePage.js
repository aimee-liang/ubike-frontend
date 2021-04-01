import React, {useState} from "react"
import EditProfileForm from "../Components/EditProfileForm"
import FavoriteStationsContainer from "./FavoriteStationsContainer"
import CheckInSpan from "../Components/CheckInSpan"
import {Redirect} from "react-router-dom"
import Button from "@material-ui/core/Button"
import EditIcon from '@material-ui/icons/Edit';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

// class ProfilePage extends React.Component{
const ProfilePage = props => {

    const [profile, setProfile] = useState(false)

    // state={
    //     profile: false,
    // }

    const clickToEditProfile = () => {
        return <EditProfileForm editProfile={props.editProfile} profile={profile} hideProfileSpan={setProfileBackToFalse} />
    }

    const displayCheckedIn = () => {
        return <CheckInSpan checkIn={props.user.check_in} username={props.user.username} />
    }

    const displayNotCheckedIn = () => {
        return (
            <span>
                This user is not checked in anywhere!
            </span>
        )
    }
    
    const localCheckOut = () => {
        props.checkOut(this.props.user.check_in.id)
        displayNotCheckedIn()
    }

    const setProfileBackToFalse = () => {
        this.setState(previousState => ({
            profile: !previousState.profile
        }))
    }

    const hasUserCheckInProps = () => {
        if (this.props.check_in.length >= 1){
            return this.displayCheckedIn()
            // return <Button variant="outlined" color="secondary" onClick={this.localCheckOut} className="check-out-button">Check Out</Button>
        } else if (this.props.check_in === null) {
            return this.displayNotCheckedIn()
        }
    }
    
    // render(){
        return(
            <>
            {this.props.user ? 
                <div className="profile-page"> 
                    <div className="profile-page-border">
                        <div className = "profile-pic-container">
                            <img alt="" className="default-pic"  src={this.props.user.avatar ? this.props.user.avatar : "/Octocat.png" }/>
                        </div>

                        <div className="about-me">
                            <h3>@{this.props.user.username}</h3>
                            <h4>Name: {this.props.user.name}</h4>
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
                </div>
            : <Redirect to="/home" /> }
        </>
        )
    // }
}

export default ProfilePage
