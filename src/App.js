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
    specificBikeStationObj: {} /* testing - grab object from BikeStation and put here in state. Then create a filter to find just that obj and pass down */
  }

  componentDidMount(){
    // localStorage.setItem("token", data.jwt)
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
        this.setState({user: data.user}, () => this.props.history.push(`/home`) )
      }
      )
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

/* validate checked in one place - backend */
  currentCheckStatus = (checkedInObj) => {
    fetch(`http://localhost:3000/api/v1/check_ins`, {
      method: "POST",
      headers: { /* token */
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
        check_in: {
          user_id: this.state.user.id,
          bike_station_id: checkedInObj.id
        }
      })
    })
  }

/* fn grabs the bike station ID from BikeStation Component, sets state with it in App */
  setStationIdForFilteringReviews = (clickedBikeStationId) => {
    this.setState(()=> ({
      bikeStationId: clickedBikeStationId
    }))
  }

/* test to see if this can grab specific bike station obj to state */
  setBikeObjToDisplayInShowPage = (clickedBikeStationObj) => {
    this.setState(() => ({
      specificBikeStationObj: clickedBikeStationObj
    }))
  }



/* passed down to the user profile page, will delete checked into station on backend */
  checkOutHandler = (checkedInObjId) => {
    // fetch(`http://localhost:3000/api/v1/check_ins${checkedInObjId}`,{
    //   method: "DELETE"
    // })
    console.log("this is the checkOutHandler")
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
          <Route path ="/profile" render={() => <ProfilePage user={this.state.user} checkOut={this.checkOutHandler} /> } />
        </Switch> 

      </>
    );
  }
}

export default withRouter(App);
