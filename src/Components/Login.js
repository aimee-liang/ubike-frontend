import React from "react"
import {withStyles} from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import {NavLink} from "react-router-dom"

// const CssTextField = withStyles({
//     root: {
//         '& label.Mui-focused': {
//             color: 'black',
//         },
//         '& .MuiInput-underline:after': {
//             borderBottomColor: 'black',
//         },
//         '& .MuiOutlinedInput-root': {
//             '&.Mui-focused fieldset': {
//                 borderColor: 'black',
//             },
//         },
//     },
// })(TextField);

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
                        
                        <h4>Login</h4>

                        <TextField variant="filled" required id="standard-required" label="Enter Username" input type="text" name="username" value={this.state.username} onChange={this.changeHandler} />
                        <br></br>
                        <TextField variant="filled" required id="standard-required" label="Enter Password" input type="password" name="password" value={this.state.password} onChange={this.changeHandler} />
                        <br></br>
                        <br></br>
                        <Button variant="contained" color="primary" type="submit" value="Log In"> Login </Button>
                        <br></br>
                    <NavLink to="/signup">Create an account</NavLink>
                    
                    </form>
                    
                </div>
                
            </div>
        )
    }
}

export default Login
