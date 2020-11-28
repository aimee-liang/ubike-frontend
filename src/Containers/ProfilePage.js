import React from "react"
import EditProfileForm from "../Components/EditProfileForm"
import FavoriteStationsContainer from "./FavoriteStationsContainer"
import CheckInSpan from "../Components/CheckInSpan"

/* consider making this functional component later on */
class ProfilePage extends React.Component{

    state={
        profile: false,
        // check_ins: []
    }

    /* fetch all check ins and then delete the one using checkout? */
    // componentDidMount(){
    //     fetch(`http://localhost:3000/api/v1/check_ins`)
    //     .then(resp => resp.json())
    //     .then((checkInData) => 
    //         this.setState({
    //             check_ins: checkInData
    //         })
    //     )
    //     .catch(console.log)
    // }

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
        this.props.checkOut(this.props.user.check_ins[0].id)
    }
    
    render(){
        // console.log(this.props.user.check_ins)
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
                    {this.props.user.check_ins ? <button onClick={this.localCheckOut}> Check Out </button> : null}
                </div>

                <div className="fav-stations-div">
                    <h4>@{this.props.user.username}'s Favorite Stations</h4>
                    {this.props.user.favorite_stations ?
                        <FavoriteStationsContainer filterFavorites={this.props.user.favorite_stations} unlike={this.props.unlike}/> 
                            :
                        null
                }
                
                </div>

            </>
        )
    }
}

export default ProfilePage
