import React from "react"

export default class EditProfileForm extends React.Component{

    state={
        username: "",
        email: "",
        bike: "",
        bio: "",
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) =>{
        e.preventDefault()
        console.log("clickity")
    }

    render(){
        return(
            <span>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="username" value={this.state.username} placeholder="Update" onChange={this.changeHandler} />
                    <input type="text" name="email" value={this.state.email} placeholder="Update email" onChange={this.changeHandler} />
                    <input type="text" name="bike" value={this.state.bike} placeholder="Update bike" onChange={this.changeHandler} />
                    <input type="textarea" name="bio" value={this.state.bio} placeholder="Update bio" onChange={this.changeHandler} />
                    <button input="submit" value="Submit">Update</button>
                </form>
            </span>
        )
    }
}
