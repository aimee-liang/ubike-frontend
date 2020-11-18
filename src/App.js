import './App.css';
import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import ProfilePage from "./Containers/ProfilePage"
import Home from "./Containers/Home"
import SideBar from "./Containers/SideBar"

class App extends React.Component{  
  
  render(){
    return (
      <>
      <SideBar />
      
      <Switch>
        <Route path ="/home" render={()=> <Home /> } />
        <Route path="/profile" render={() => <ProfilePage /> } />
      </Switch>
      </>
    );
  }
}

export default withRouter(App);
