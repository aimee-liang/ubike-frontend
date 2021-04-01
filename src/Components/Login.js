import React, {useState} from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import {NavLink} from "react-router-dom"

const Login = (props) => {
// class Login extends React.Component{
    
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    // state={
    //     username: "",
    //     password: ""
    // }

    changeHandler = (e) => {
        this.setState({...user, [e.target.name]: e.target.value})
    }
    
    localLoginHandler = (e) => {
        e.preventDefault()
        props.loginHandler(user)

        setUser({
            username: "",
            password: ""
        })

        // this.setState(()=>({
        //     username: "",
        //     password: ""
        // }))
    }    


    // render(){
        return(
            <div className="login-background">

                <div className="login-body">

                    <div className="logo">
                        <img alt="" src ="/ubike.png" />
                    </div>


                    <form className="login-form" noValidate autoComplete="off" onSubmit={this.localLoginHandler}>
                        
                        <h4>Login</h4>

                        <TextField required id="outlined-required" label="Enter Username" variant="outlined" input type="text" name="username" value={this.state.username} onChange={this.changeHandler} />
                        <br></br>
                        <TextField required id="outlined-required" label="Enter Password" variant="outlined"input type="password" name="password" value={this.state.password} onChange={this.changeHandler} />
                        <br></br>
                        <br></br>
                        <Button variant="contained" color="primary" type="submit" value="Log In"> Login </Button>
                        <br></br>
                    <NavLink to="/signup">Create an account</NavLink>
                    
                    </form>
                    
                </div>
                
            </div>
        )
    // }
}

export default Login
