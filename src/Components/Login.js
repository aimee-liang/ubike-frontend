import React from "react"

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
            <>
            <p className="welcome-back">Login</p>

            <form className="login-form" onSubmit={this.localLoginHandler}>
                
                <input type="text" name="username" placeholder="Enter Username" value={this.state.username} onChange={this.changeHandler} />
                <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.changeHandler} />
                <button input type="submit" value="Log In"> Login </button>
            
            </form>

            </>
        )
    }
}

export default Login
