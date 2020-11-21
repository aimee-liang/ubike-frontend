import './App.css';
import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import ProfilePage from "./Containers/ProfilePage"
import Home from "./Containers/Home"
import SideBar from "./Containers/SideBar"
import Login from "./Components/Login"
import Signup from "./Components/Signup"

class App extends React.Component{  
  
  state={
    user: null,
    favoriteStations: [],
    currentStation: []
  }

  componentDidMount(){
    const token = localStorage.getItem("token")
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
        localStorage.setItem("token", data.jwt)
        this.setState({user: data.user}, () => this.props.history.push(`/home`) )
      },
    )
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
        localStorage.setItem("token", data.jwt)
        this.setState({user: data.user}, () => this.props.history.push(`/home`) )
      },
      )
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
          user_id: 1,
          bike_station_id: favBikeStation.id,
          location: favBikeStation.location,
          borough: favBikeStation.borough
        }})
    })
    .then(resp => resp.json())
    .then(data => {
      let allFavStations = [...this.state.favoriteStations, data]
      this.setState(()=> ({
        favoriteStations: allFavStations
      }))
    })
  }

/* validate only checked in one place  && POST method to check in */
  currentCheckStatus = (checkedInObj) => {
    fetch(`http://localhost:3000/api/v1/check_ins`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(checkedInObj)
    })
    .then(resp => resp.json())
    .then(status => {
      let checkedInto = [...this.state.currentStation, status]
      this.setState(() => ({
        currentStation: checkedInto
      }))
    })
  }


  render(){
    return (
      <>
        <SideBar />

        <Switch>
          <Route path ="/signup" render={()=> <Signup signUpHandler={this.signUpHandler}/>} />
          <Route path ="/login" render={()=> <Login loginHandler={this.loginHandler} />} />
          <Route path ="/home" render={()=> <Home addFaves={this.favoriteStationsUpdate}/> } />
          <Route path ="/profile" render={() => <ProfilePage favoriteStations={this.state.favoriteStations} /> } /> 
        </Switch> 
      </>
    );
  }
}

export default withRouter(App);
