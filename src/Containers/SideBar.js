import React from "react"
import {NavLink} from "react-router-dom"

// const SideBar = props => {
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
            <button onClick={this.clickHandler}>BUTTON</button>
    
            <div className={
                this.state.show ? "sidebar menu" : "off-screen menu"
            }>

            {this.props.user ? 
            <>
                <NavLink to="/home">
                    Home
                </NavLink>
    
                <NavLink to="/profile">
                    Profile
                </NavLink>
    
                <NavLink to="/login" onClick={this.props.logOut}>
                    Log out
                </NavLink>
    
            </>
            :
            <>
                <NavLink to="/signup">Create an account</NavLink>
                <NavLink to="/login">Sign in</NavLink>
            </>
            }
        </div>
    
        </>
        )
    }

}

export default SideBar