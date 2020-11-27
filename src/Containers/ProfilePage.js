import React from "react"
import EditProfileForm from "../Components/EditProfileForm"
import FavoriteStationsContainer from "./FavoriteStationsContainer"
import CheckInSpan from "../Components/CheckInSpan"

class ProfilePage extends React.Component{

    state={
        check_ins: [],
        filteredForUserCheckIns: [],
        favorites: [],
        profile: false
    }

    componentDidMount(){
        Promise.all([
            fetch(`http://localhost:3000/api/v1/check_ins`),
            fetch(`http://localhost:3000/api/v1/favorite_stations`)
        ])
            .then(([resp1, resp2]) => Promise.all([resp1.json(), resp2.json()]))
            .then(([checkInData, favoritesData]) => this.setState({
                check_ins: checkInData,
                favorites: favoritesData
            }))
            .catch(errors => console.log(errors))
    }

    clickToEditProfile = () => {
        return <EditProfileForm editProfile={this.props.editProfile}/>
    }

    displayCheckInStyling = () => {
        return <CheckInSpan checkIn={this.props.user.check_ins} username={this.props.user.username}/>
    }

    displayNotCheckedIn = () => {
        return(
            <span>
                This user is not checked in anywhere!
            </span>
        )
    }

/* filter for check ins to pass down && validate on backend */
    filterCheckIns = () => {
        let filteredForUser = new Set(this.props.user.check_ins)
        console.log("filteredForUser:", filteredForUser)
    }

    filterFavorites = () => {
        return this.state.favorites.filter(favorite => favorite.user_id === this.props.user.id)
    }

    localCheckOut = (e) => {
        console.log("this is the local check out")
        // props.checkOut(props.bike.id)
    }

render(){
    console.log("User:", this.props.user)
    console.log("Filtered:", this.filterCheckIns())
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
                    {this.props.user.check_ins ? this.displayCheckInStyling() : this.displayNotCheckedIn()}
                    <button onClick={this.localCheckOut}> Check Out </button>
                </div>

                <div className="fav-stations-div">
                    <h4>@{this.props.user.username}'s favorite stations</h4>
                    <FavoriteStationsContainer filterFavorites={this.filterFavorites()} />
                </div>

            </>
        )
    }
}

export default ProfilePage
