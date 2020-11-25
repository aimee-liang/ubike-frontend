import React from "react"
import FavoriteStationsContainer from "./FavoriteStationsContainer"

class ProfilePage extends React.Component{

/* need to validate only one check in on backend */
    state={
        check_ins: [],
        filteredForUserCheckIns: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/check_ins`)
            .then(resp => resp.json())
            .then((checkInData => 
                this.setState({
                    check_ins: checkInData
                })))
            .catch(errors => console.log(errors))
    }

    editProfile = () => {
        console.log("hello")
    }
/* filter for check ins to pass down ? or validate on backend */
    filterCheckIns
    
    deleteHandler = (e) => {
        console.log(e.target.value)
/* stretch feature - check out 
        props.checkOut(props.bike.id)
    }
*/
}

render(){
        return(
            <>
                <div className="about-me">
                    <h4>@{this.props.user.username}</h4>
                    {/* <img src/> */}
                    <p>{this.props.user.name}</p>
                    <p>{this.props.user.bio ? this.props.user.bio : "This user did not submit a profile!"}</p>
                    <button onClick={this.editProfile}>Edit Profile</button>
                </div>

                <div className="currently-checked-status">
                    {/* is User checked in? */}


                    <button onClick={this.deleteHandler}> Check Out </button>
                    
                </div>

                <div>
                    <h4>@{this.props.user.username}'s favorite stations</h4>
                    <FavoriteStationsContainer favoriteStations={this.props.favoriteStations} />
                </div>

            </>
        )
    }
}

export default ProfilePage
