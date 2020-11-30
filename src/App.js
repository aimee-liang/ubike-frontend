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
    favoriteStations: [],
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

  favoriteStationsUpdate = (favBikeStation) => {
    fetch(`http://localhost:3000/api/v1/favorite_stations/`,{
      method: "POST",
      headers: {
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
  }

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
    this.setState(() => ({
      check_in: this.state.user.check_in
    }))
  }

  setStationIdForFilteringReviews = (clickedBikeStationId) => {
    this.setState(()=> ({
      bikeStationId: clickedBikeStationId
    }))
  }

  setBikeObjToDisplayInShowPage = (clickedBikeStationObj) => {
    this.setState(() => ({
      specificBikeStationObj: clickedBikeStationObj
    }))
  }

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

/* old method that re-renders user data */
  // checkOut = (checkedInId) => {
  //   fetch(`http://localhost:3000/api/v1/check_ins/${checkedInId}`,{
  //     method: "DELETE",
  //     headers: {
  //       "content-type": "application/json",
  //       accepts: "application/json"
  //     }
  //   })
  //   .then(resp => resp.json())
  //   .then(checkedInData => (
  //       this.setState({
  //         user: {

  //         }})))
  // }

/* find the one in state, delete it */
  checkOut = (checkedInId) => {
    // let deleteFromThisCheckInArray = this.state.check_ins.find(checkedInId === check)
    fetch(`http://localhost:3000/api/v1/check_ins/${checkedInId}`,{
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      }
    })
    .then(resp => resp.json())
    // .then(this.setState ({
    //   check_in: []
    // }))
    .then(console.log)
  }

  unlike = (stationId) => {
    fetch(`http://localhost:3000/api/v1/favorite_stations/${stationId}`,{
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      }
    })
    .then(resp => resp.json())
    .then(console.log) /* what to do here? */
  }

  render(){
    console.log("User", this.state.user)
    return (
      <>
        <SideBar user={this.state.user} logOut={this.logOut} />

        <Switch>
          <Route path ="/signup" render={()=> <Signup signUpHandler={this.signUpHandler}/>} />
          <Route path ="/login" render={()=> <Login loginHandler={this.loginHandler} />} />
          <Route path ="/home" render={()=> <Home addFaves={this.favoriteStationsUpdate} checkedIn={this.currentCheckStatus} setStationIdForFilteringReviews={this.setStationIdForFilteringReviews} setBikeObjToDisplayInShowPage={this.setBikeObjToDisplayInShowPage} /> } />
          <Route path ="/bike_stations/:id" render={()=> <BikeStationShowPage bikeId={this.state.bikeStationId} bikeObj={this.state.specificBikeStationObj} user={this.state.user} /> } />
          <Route path ="/profile" render={() => <ProfilePage user={this.state.user} checkOut={this.checkOut} editProfile={this.editProfile} unlike={this.unlike} check_in={this.state.check_in} /> } />
        </Switch> 

      </>
    );
  }
}

export default withRouter(App);
