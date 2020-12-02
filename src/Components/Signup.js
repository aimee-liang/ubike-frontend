import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import {NavLink} from "react-router-dom"

class Signup extends React.Component{
    state={
        name: "",
        bike: "",
        username: "",
        email: "",
        password: "",
        bio: ""
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    localSignupHandler = (e) => {
        e.preventDefault()
        this.props.signUpHandler(this.state)

        this.setState(()=>({
            name: "",
            bike: "",
            username: "",
            email: "",
            password: "",
            bio:""
        }))
    }
    

    render(){
        return(
            <div className="login-background">

                <div className="signup-body">

                    <div className="logo">
                        <img alt="" src ="/ubike.png" />
                    </div>


                    <form className="signup-form" noValidate autoComplete="off" onSubmit={this.localSignupHandler}>

                        <h3>Join ubike</h3>
                        <br></br>
                        <TextField required id="standard-required" label="Name" input type="text" input="true" name="name" value={this.state.name} onChange={this.changeHandler} />
                        <br></br>
                        <TextField required id="standard-required" label="Username" input type="text" input="true" name="username" value={this.state.username} onChange={this.changeHandler} />
                        <br></br>
                        <TextField required id="standard-required" label="Email" input type="text" input="true" name="email" value={this.state.email} onChange={this.changeHandler} />
                        <br></br>
                        <TextField required id="standard-required" label="Bicycle info" input type="text" input="true" name="bike" placeholder="Bike details" value={this.state.bicycle} onChange={this.changeHandler} />
                        <br></br>
                        <TextField required id="standard-required" label="About Me" input type="text" name="bio" value={this.state.bio} onChange={this.changeHandler} />
                        <br></br>
                        <TextField required id="standard-required" label="Password" input type="password" input="true" name="password" value={this.state.password} onChange={this.changeHandler} />
                        <br></br>
                        <br></br>
                        <Button variant="contained" color="primary" type="submit" value="sign up">Create My Account</Button>
                        <br></br>
                        <br></br>
                        <NavLink to="/login">Log in</NavLink>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup