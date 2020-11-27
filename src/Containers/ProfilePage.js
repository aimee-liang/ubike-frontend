import React from "react"
import EditProfileForm from "../Components/EditProfileForm"
import FavoriteStationsContainer from "./FavoriteStationsContainer"

class ProfilePage extends React.Component{

/* need to validate only one check in on backend */
    state={
        check_ins: [],
        filteredForUserCheckIns: [],
        favorites: [],
        // updatedUserInfo: {}, /* may need to have this saved as obj, pass up to App to patch  */
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

/* filter for check ins to pass down ? or validate on backend */
    filterCheckIns

    filterFavorites = () => {
        return this.state.favorites.filter(favorite => favorite.user_id === this.props.user.id)
    }

    localCheckOut = (e) => {
        console.log("this is the local check out")
        // props.checkOut(props.bike.id)
    }

render(){
    console.log(this.props)
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
                    {/* is User checked in? */}


                    <button onClick={this.localCheckOut}> Check Out </button>
                    
                </div>

                <div>
                    <h4>@{this.props.user.username}'s favorite stations</h4>
                    <FavoriteStationsContainer filterFavorites={this.filterFavorites()} />
                </div>

            </>
        )
    }
}

export default ProfilePage
