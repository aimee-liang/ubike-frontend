import React from "react"
import {styled} from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

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
            <div className="login-body">

            <p>Login</p>

            <form className="login-form" onSubmit={this.localLoginHandler}>
                
                <input type="text" name="username" placeholder="Enter Username" value={this.state.username} onChange={this.changeHandler} />
                <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.changeHandler} />
                {/* <button input="submit" value="Log In"> Login </button> */}
                <br></br>
                <Button variant="contained" color="primary" type="submit" value="Log In"> Login </Button>

            
            </form>

            </div>
        )
    }
}

export default Login
