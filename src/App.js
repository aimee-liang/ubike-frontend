import './App.css';
import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import ProfilePage from "./Containers/ProfilePage"
import Home from "./Containers/Home"
import SideBar from "./Containers/SideBar"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import BikeStationShowPage from "./Components/BikeStationShowPage"

class App extends React.Component{  
  
  state={
    user: null,
    favorite_stations: [],
    currentStation: [],
    bikeStationId: 0,
    specificBikeStationObj: {},
    check_in: [],
    timeAndDay: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
  }

  componentDidMount(){
    const token = localStorage.getItem("secret")
    if (token){
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`},
      })
        .then(resp => resp.json())
        .then(data => this.setState({user: data.user}))
    } else {
      this.props.history.push("/login")
    }
  }

  signUpHandler = (userObj) => {
    fetch(`http://localhost:3000/api/v1/users`, {
      method: "POST",
      headers:{
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({user: userObj})
    })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem("secret", data.jwt)
        this.setState({user: data.user}, () => this.props.history.push(`/home`) )
      })
  }

  loginHandler = (userInfo) => {
    fetch(`http://localhost:3000/api/v1/login`,{
      method: "POST",
      headers:{
          "content-type": "application/json",
          accepts: "application/json",
        },
        body: JSON.stringify({user: userInfo})
      })
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("secret", data.jwt)
      this.setState({
        user: data.user,
      }, 
      () => this.props.history.push(`/home`) )
    })
  }

  logOut = () => {
    localStorage.removeItem("secret")
    this.setState({user: null})
    this.props.history.push("/login")
  }

/* Creates a POST with new favorite station */
  favoriteStationsUpdate = (favBikeStation) => {
  /* new */
  const token = localStorage.getItem("secret")
    fetch(`http://localhost:3000/api/v1/favorite_stations/`,{
      method: "POST",
      headers: {
          Authorization: `Bearer ${token}`, /* new */
          "content-type": "application/json",
          accepts: "application/json"
      },
      body: JSON.stringify({
        favorite_station: {
          user_id: this.state.user.id,
          bike_station_id: favBikeStation.id,
          location: favBikeStation.location,
          borough: favBikeStation.borough
        }})
    })
    this.getUserFavoriteStations(this.state.user.id)
  }

/* helper method to get favorite stations from user and save in state */
getUserFavoriteStations = (userId) => {
  fetch(`http://localhost:3000/api/v1/users/${userId}`)
    .then(resp => resp.json())
    .then(favoriteData => {
      let arrayToUpdate = favoriteData.favorite_stations
      this.setState(() => ({
        favorite_stations: arrayToUpdate
      }))
    })
}

/* remove from favorite Stations in state */
unlike = (faveId) => {
  fetch(`http://localhost:3000/api/v1/favorite_stations/${faveId}`,{
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      accepts: "application/json"
    }
  })
  .then(resp => resp.json())
  let filtered = this.state.favorite_stations.filter(station => station.id !== faveId)
  this.setState({favorite_stations: filtered})

}

/* POST method to check in, invokes getUserCheckIn() which sets state of user's check in */
  currentCheckStatus = (checkedInObj) => {
    fetch(`http://localhost:3000/api/v1/check_ins`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
        check_in: {
          user_id: this.state.user.id,
          bike_station_id: checkedInObj.id,
          location: checkedInObj.location,
          datetime: this.state.timeAndDay
        }
      })
    })
    this.getUserCheckIn(this.state.user.id)
  }

/* may clean up at a later time - this () grabs station ID from the bike station component and filters reviews in the show page */
  setStationIdForFilteringReviews = (clickedBikeStationId) => {
    this.setState(()=> ({
      bikeStationId: clickedBikeStationId
    }))
  }

/* this () grabs the entire bike station object and is used in bike station show page for basic info on location, etc. */
  setBikeObjToDisplayInShowPage = (clickedBikeStationObj) => {
    this.setState(() => ({
      specificBikeStationObj: clickedBikeStationObj
    }))
  }

/* PATCH request to update user's profile page */
  editProfile = (userObj) => {
    fetch(`http://localhost:3000/api/v1/users/${this.state.user.id}`, {
      method: "PATCH",
      headers: {
          "content-type": "application/json",
          accepts: "application/json"
      },
      body: JSON.stringify({
          user: {
              id: this.state.user.id,
              username: userObj.username,
              avatar: userObj.avatar,
              email: userObj.email,
              bike: userObj.bike,
              bio: userObj.bio
          }
      })
  })
    .then(resp => resp.json())
    .then(userData => this.setState({user: userData}))
    .catch(errors => console.log(errors))
  }

/* helper method which gets current user's ID and sets state with where they checked in*/
  getUserCheckIn = (userId) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}`)
      .then(resp => resp.json())
      .then(checkInData => {
        let arrayToDelete = checkInData.check_in
        this.setState(() => ({
          check_in: [arrayToDelete]
        }))
      })
  }


/* find the one check in which is set in state, deletes it */
  checkOut = (checkedInId) => {
    fetch(`http://localhost:3000/api/v1/check_ins/${checkedInId}`,{
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      }
    })
    .then(resp => resp.json())
    .then(nullData => {
      this.setState({check_in: nullData})
    })
  }


  render(){
    return (
      <>
        <SideBar user={this.state.user} logOut={this.logOut} />

        <Switch>
          <Route path ="/signup" render={()=> <Signup signUpHandler={this.signUpHandler}/>} />
          <Route path ="/login" render={()=> <Login loginHandler={this.loginHandler} />} />
          <Route path ="/home" render={()=> <Home addFaves={this.favoriteStationsUpdate} checkedIn={this.currentCheckStatus} setStationIdForFilteringReviews={this.setStationIdForFilteringReviews} setBikeObjToDisplayInShowPage={this.setBikeObjToDisplayInShowPage} /> } />
          <Route path ="/bike_stations/:id" render={()=> <BikeStationShowPage bikeId={this.state.bikeStationId} bikeObj={this.state.specificBikeStationObj} user={this.state.user} /> } />
          <Route path ="/profile" render={() => <ProfilePage user={this.state.user} checkOut={this.checkOut} editProfile={this.editProfile} unlike={this.unlike} check_in={this.state.check_in} favorites={this.state.favorite_stations} /> } />
        </Switch> 

      </>
    );
  }
}

export default withRouter(App);
