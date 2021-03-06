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
                        <TextField required id="outlined-required" label="Name" variant="outlined" input type="text" name="name" value={this.state.name} onChange={this.changeHandler} />
                        <TextField required id="outlined-required" label="Username" variant="outlined" input type="text" name="username" value={this.state.username} onChange={this.changeHandler} />
                        <TextField required id="outlined-required" label="Email" variant="outlined" input type="text" name="email" value={this.state.email} onChange={this.changeHandler} />
                        <TextField required id="outlined-required" label="Bike Details" variant="outlined" input type="text" name="bike" placeholder="Bike details" value={this.state.bicycle} onChange={this.changeHandler} />
                        <TextField id="outlined" label="About Me" variant="outlined" input type="text" name="bio" value={this.state.bio} onChange={this.changeHandler} />
                        <TextField required id="outlined-required" label="Password" variant="outlined" input type="password" name="password" value={this.state.password} onChange={this.changeHandler} />
                        <br></br>
                        <br></br>
                        <Button variant="contained" color="primary" type="submit" value="sign up">Create My Account</Button>
                        <br></br>
                        <NavLink to="/login">Log in to my account</NavLink>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup