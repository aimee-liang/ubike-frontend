import React from "react"
import {NavLink} from "react-router-dom"

export default class SideBar extends React.Component{
    render(){
        return(
            <>
            <NavLink to="/Home">
                Home
            </NavLink>

            <NavLink to="/profile">
                Profile
            </NavLink>

            <NavLink to="/login">
                Sign out
            </NavLink>
            </>
        )
    }
}