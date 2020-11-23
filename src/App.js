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
    reviews: [],
    filteredReviews: [],
    bikeStationId: 0,
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
          user_id: 1, /*need to change this to user's unique ID*/
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

/* validate checked in one place - backend */
  currentCheckStatus = (checkedInObj) => {
    fetch(`http://localhost:3000/api/v1/check_ins`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
        check_in: {
          user_id: 1,
          bike_station_id: checkedInObj.id
        }
      })
    })
    .then(resp => resp.json())
    .then(status => {
      let checkedInto = [...this.state.currentStation, status]
      this.setState(() => ({
        currentStation: checkedInto
      }))
    })
  }

  fetchReviews = () => {
    fetch(`http://localhost:3000/api/v1/reviews/`)
      .then(resp => resp.json())
      .then(reviewsData => {
        let allReviews = [...this.state.reviews, reviewsData]
        this.setState(() => ({
          reviews: allReviews
    }))
  })
      .catch(errors => console.log(errors))
}

/* fn grabs the bike station ID from BikeStation Component, sets state with it in App */
  setStationIdForFilteringReviews = (clickedBikeStationId) => {
    this.setState(()=> ({
      bikeStationId: clickedBikeStationId
    }))
    // console.log("bike station ID in app to setState with:", clickedBikeStationId)
  }

/* fn grabs the id of the bike station and filters for all reviews matching that station */
  filterReviews = (specificBikeStationId) => {
    return this.state.reviews.filter(review => review.bikeStationId === specificBikeStationId)
  }

/* passed down to the bike station show page route, will post new comment to backend */
  submitComments = (commentObj) => {
    fetch(`http://localhost:3000/api/v1/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(commentObj)
    }
    .then(resp => resp.json())
    .then(includingNewReview => {
      let updatedReviews = [...this.state.reviews, includingNewReview]
      this.setState(() => ({
        reviews: updatedReviews
      }))
    }))}

/* passed down to the user profile page, will delete checked into station on backend */
  checkOutHandler = (checkedInObjId) => {
    fetch(`http://localhost:3000/api/v1/check_ins${checkedInObjId}`,{
      method: "DELETE"
    })
  }

  render(){
    console.log("Reviews in the app:", this.state.reviews)
    return (
      <>
        <SideBar />

        <Switch>
          <Route path ="/signup" render={()=> <Signup signUpHandler={this.signUpHandler}/>} />
          <Route path ="/login" render={()=> <Login loginHandler={this.loginHandler} />} />
          <Route path ="/home" render={()=> <Home addFaves={this.favoriteStationsUpdate} checkedIn={this.currentCheckStatus} setStationIdForFilteringReviews={this.setStationIdForFilteringReviews} /> } />
          <Route path ="/bike_stations" render={()=> <BikeStationShowPage  filterReviews={this.filterReviews} submitComments={this.submitComments} />} />
          <Route path ="/profile" render={() => <ProfilePage checkOut={this.checkOutHandler} /> } />
        </Switch> 

      </>
    );
  }
}

export default withRouter(App);
