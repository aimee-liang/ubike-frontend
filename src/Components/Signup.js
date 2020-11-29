import React from "react"

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
            <>
            <h4 className="create-account">Join ubike</h4>
            <form onSubmit={this.localSignupHandler}>
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.changeHandler} />
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.changeHandler} />
                <input type="text" name="bike" placeholder="Bike details" value={this.state.bicycle} onChange={this.changeHandler} />
                <input type="text" name="bio" placeholder="Bio" value={this.state.bio} onChange={this.changeHandler} />
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                <button type="submit" value="sign up">Sign up </button>
            </form>
            </>
        )
    }
}

export default Signup