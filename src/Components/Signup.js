import React, {useState} from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import {NavLink} from "react-router-dom"

const Signup = props => {
// class Signup extends React.Component{
    const [user, setUser] = useState({
        name: "",
        bike: "",
        username: "",
        email: "",
        password: "",
        bio: ""
    })

    // state={
    //     name: "",
    //     bike: "",
    //     username: "",
    //     email: "",
    //     password: "",
    //     bio: ""
    // }

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    
    const localSignupHandler = (e) => {
        e.preventDefault()
        props.signUpHandler(user)

        setUser({
            name: "",
            bike: "",
            username: "",
            email: "",
            password: "",
            bio:""
        })

        // this.setState(()=>({
        //     name: "",
        //     bike: "",
        //     username: "",
        //     email: "",
        //     password: "",
        //     bio:""
        // }))
    }
    

    // render(){
        return(
            <div className="login-background">

                <div className="signup-body">

                    <div className="logo">
                        <img alt="" src ="/ubike.png" />
                    </div>

                    <form className="signup-form" noValidate autoComplete="off" onSubmit={localSignupHandler}>

                        <h3>Join ubike</h3>
                        <TextField required id="outlined-required" label="Name" variant="outlined" input type="text" name="name" value={user.name} onChange={changeHandler} />
                        <TextField required id="outlined-required" label="Username" variant="outlined" input type="text" name="username" value={user.username} onChange={changeHandler} />
                        <TextField required id="outlined-required" label="Email" variant="outlined" input type="text" name="email" value={user.email} onChange={changeHandler} />
                        <TextField required id="outlined-required" label="Bike Details" variant="outlined" input type="text" name="bike" placeholder="Bike details" value={user.bicycle} onChange={changeHandler} />
                        <TextField id="outlined" label="About Me" variant="outlined" input type="text" name="bio" value={user.bio} onChange={changeHandler} />
                        <TextField required id="outlined-required" label="Password" variant="outlined" input type="password" name="password" value={user.password} onChange={changeHandler} />
                        <br></br>
                        <br></br>
                        <Button variant="contained" color="primary" type="submit" value="sign up">Create My Account</Button>
                        <br></br>
                        <NavLink to="/login">Log in to my account</NavLink>
                        
                    </form>
                </div>
            </div>
        )
    // }
}

export default Signup