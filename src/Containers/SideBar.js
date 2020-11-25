import React from "react"
import {NavLink} from "react-router-dom"

const SideBar = props => {
    return(
        <>
        {props.user ? 
        <>
            <NavLink to="/home">
                Home
            </NavLink>

            <NavLink to="/profile">
                Profile
            </NavLink>

            <NavLink to="/login" onClick={props.logOut}>
                Log out
            </NavLink>

        </>
        :
        <>
            <NavLink to="/signup">Create an account</NavLink>
            <NavLink to="/login">Sign in</NavLink>
        </>
        }
    </>
    )
}

export default SideBar