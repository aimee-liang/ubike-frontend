import React from "react"

class Signup extends React.Component{
    state={
        name: "",
        username: "",
        email: "",
        password: "",
        // confirm_password: "",
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    localSignupHandler = (e) => {
        e.preventDefault()
        this.props.signUpHandler(this.state)

        this.setState(()=>({
            name: "",
            username: "",
            email: "",
            password: "",
            // confirm_password: ""
        }))
    }
    

    render(){
        return(
            <>
            <h4 className="create-account">Create a new account</h4>
            <form onSubmit={this.localSignupHandler}>
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.changeHandler} />
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.changeHandler} />
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                <button input type="submit" value="sign up">Sign up </button>
            
            </form>
            </>
        )
    }
}

export default Signup