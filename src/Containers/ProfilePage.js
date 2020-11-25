import React from "react"
import FavoriteStationsContainer from "./FavoriteStationsContainer"
// import EditProfileForm from "../Components/EditProfileForm"

class ProfilePage extends React.Component{

/* need to validate only one check in on backend */
    state={
        check_ins: [],
        filteredForUserCheckIns: [],
        favorites: [],
        username: "",
        email: "",
        bike: "",
        bio: "",
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

/* on click, a form span needs to appear*/
    clickToEditProfile = () => {
        <span>
            <p>test</p>
        </span>
    }

/* on submit of the above form span, fetch the specific show page for this user and patch */
    submitEditedProfile = (userId) =>{
        this.props.editProfile(userId)
    }

/* filter for check ins to pass down ? or validate on backend */
    filterCheckIns

    filterFavorites = () => {
        return this.state.favorites.filter(favorite => favorite.user_id === this.props.user.id)
    }
    
/* delete method - on click, check out*/
    deleteHandler = (e) => {
        console.log(e.target.value)
        // props.checkOut(props.bike.id)
    }

render(){
        return(
            <>
                <div className="about-me">
                    <h4>@{this.props.user.username}</h4>
                    <img alt="" src={this.props.user.avatar ? this.props.user.avatar : null} />
                    <p>{this.props.user.name}</p>
                    <p>{this.props.user.bio ? this.props.user.bio : "This user did not submit a profile!"}</p>
                    <button onClick={() => /* console.log("click")*/ this.setState({profile: true}) }>Edit Profile</button>
                    {this.state.profile ? this.clickToEditProfile() : null }
                </div>

                <div className="currently-checked-status">
                    {/* is User checked in? */}


                    <button onClick={this.deleteHandler}> Check Out </button>
                    
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
