import './App.css';
import React from "react"
import {Route, Switch, withRouter} from "react-router-dom"
import ProfilePage from "./Containers/ProfilePage"
class App extends React.Component{  
  
  render(){
    return (
      <>
      <Switch>

        <Route path="/profile" render={() => <ProfilePage /> } />
      </Switch>
      </>
    );
  }
}

export default withRouter(App);
