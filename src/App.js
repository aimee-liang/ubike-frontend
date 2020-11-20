import './App.css';
import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import ProfilePage from "./Containers/ProfilePage"
import Home from "./Containers/Home"
import SideBar from "./Containers/SideBar"

class App extends React.Component{  
  
  //reminder to set state for favorites here
  state={
    favorites: [],
    currentBikeStation: [],
    favoriteStations: []
  }

  favoriteStationsUpdate = (bikeStationObj) => {
    this.setState(() => ({
      favoriteStations: [...bikeStationObj]
    }))
  }



  render(){
    return (
      <>
      <SideBar />

      <Switch>
        <Home favoriteStations={this.state.favoriteStations} />
        {/* <Route path ="/home" render={()=> <Home /> } /> */}
        <Route path="/profile" render={() => <ProfilePage /> } /> 
      </Switch> 
      </>
    );
  }
}

export default withRouter(App);
