import React, {useState} from "react"
import {NavLink} from "react-router-dom"

const SideBar = props => {
// class SideBar extends React.Component{
    
    const [show, setShow] = useState(false)
    
    // state={
    //     show: false
    // }

    const clickHandler = () => {
        setShow(!show)
        // this.setState(previousState => ({
        //     show: !previousState.show
        // }))
    }

    // render(){

        return(
            <>
            <button className="menuToggle" onClick={clickHandler}>{show ? "x" : "=" }</button>
            {/* <button className="menuToggle" onClick={clickHandler}>{this.state.show ? "x" : "=" }</button> */}

            <div className={show ? "sidebar menu" : "off-screen menu"}>
            {/* <div className={this.state.show ? "sidebar menu" : "off-screen menu"}> */}

            <>
                <NavLink to="/home">
                <i className="fas fa-house-user"></i> Home
                </NavLink>
    
                <NavLink to="/profile">
                <i className="fas fa-user-circle"></i> Profile
                </NavLink>
    
                {/* <NavLink to="/login" onClick={this.props.logOut}> */}
                <NavLink to="/login" onClick={props.logOut}>
                <i className="fas fa-sign-out-alt"></i> Log out
                </NavLink>
    
            </>

        </div>
    
        </>
        )
    // }

}

export default SideBar