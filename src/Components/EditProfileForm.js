import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField"
import Icon from "@material-ui/core/Icon"
import SaveIcon from "@material-ui/icons/Save"

export default class EditProfileForm extends React.Component{

    state={
        username: "",
        email: "",
        bike: "",
        bio: "",
        avatar: ""
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) =>{
        e.preventDefault()
        this.props.editProfile(this.state)
        this.props.hideProfileSpan()
        this.setState(()=>({
            username: "",
            email: "",
            bike: "",
            bio: "",
            avatar: ""
        }))
    }


    render(){
        return(
            <span>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="username" value={this.state.username} placeholder="Update username" onChange={this.changeHandler} />
                    <input type="text" name="email" value={this.state.email} placeholder="Update email" onChange={this.changeHandler} />
                    <input type="text" name="bike" value={this.state.bike} placeholder="Update bike" onChange={this.changeHandler} />
                    <input type="textarea" name="bio" value={this.state.bio} placeholder="Update bio" onChange={this.changeHandler} />
                    <input type="text" name="avatar" value={this.state.avatar} placeholder="Upload new profile photo" onChange={this.changeHandler} />
                    <Button variant="contained" color="primary" size="medium" input="submit" value="Submit"><SaveIcon/>&nbsp;Update &nbsp;</Button>
                </form>
            </span>
        )
    }
}
