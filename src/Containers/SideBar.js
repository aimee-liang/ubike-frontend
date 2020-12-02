import React from "react"
import {NavLink} from "react-router-dom"

class SideBar extends React.Component{
    
    state={
        show: false
    }

    clickHandler=()=>{
        this.setState(previousState => ({
            show: !previousState.show
        })
    )}

    render(){

        return(
            <>
            <button className="menuToggle" onClick={this.clickHandler}>{this.state.show ? "x" : "=" }</button>
    
            <div className={this.state.show ? "sidebar menu" : "off-screen menu"}>

            <>
                <NavLink to="/home">
                <i className="fas fa-house-user"></i> Home
                </NavLink>
    
                <NavLink to="/profile">
                <i className="fas fa-user-circle"></i> Profile
                </NavLink>
    
                <NavLink to="/login" onClick={this.props.logOut}>
                <i className="fas fa-sign-out-alt"></i> Log out
                </NavLink>
    
            </>

        </div>
    
        </>
        )
    }

}

export default SideBar