import React from "react"
// import {makeStyles, styled} from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import TextField from '@material-ui/core/TextField';

class Login extends React.Component{
    state={
        username: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    localLoginHandler = (e) => {
        e.preventDefault()
        this.props.loginHandler(this.state)

        this.setState(()=>({
            username: "",
            password: ""
        }))
    }    

    
    render(){
        return(
            <div className="login-background">

                <div className="login-body">

                    <div className="logo">
                        <img alt="" src ="/ubike.png" />
                    </div>


                    <form className="login-form" noValidate autoComplete="off" onSubmit={this.localLoginHandler}>
                        
                        <p>Login</p>
                        <TextField required id="standard-required" label="Enter Username" input type="text" input="true" name="username" value={this.state.username} onChange={this.changeHandler} />
                        <br></br>
                        <TextField required id="standard-required" label="Enter Password" input type="password" input="true" name="password" value={this.state.password} onChange={this.changeHandler} />
                        {/* <button input="submit" value="Log In"> Login </button> */}
                        <br></br>
                        <Button variant="contained" color="primary" type="submit" value="Log In"> Login </Button>
                    
                    </form>

                </div>
                
            </div>
        )
    }
}

export default Login
