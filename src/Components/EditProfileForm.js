import React, {useState} from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField"
import Icon from "@material-ui/core/Icon"
import SaveIcon from "@material-ui/icons/Save"

const EditProfileForm = (props) => {
// export default class EditProfileForm extends React.Component{

    const [user, setUser] = useState({
        username: "",
        email: "",
        bike: "",
        bio: "",
        avatar: ""
    })

    // state={
    //     username: "",
    //     email: "",
    //     bike: "",
    //     bio: "",
    //     avatar: ""
    // }

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        props.editProfile(user)
        props.hideProfileSpan()

        setUser({
            username: "",
            email: "",
            bike: "",
            bio: "",
            avatar: ""
        })

        // setState(()=>({
        //     username: "",
        //     email: "",
        //     bike: "",
        //     bio: "",
        //     avatar: ""
        // }))
    }


    // render(){
        return(
            <span>
                <form onSubmit={submitHandler}>
                    <input type="text" name="username" value={user.username} placeholder="Update username" onChange={changeHandler} />
                    <input type="text" name="email" value={user.email} placeholder="Update email" onChange={changeHandler} />
                    <input type="text" name="bike" value={user.bike} placeholder="Update bike" onChange={changeHandler} />
                    <input type="textarea" name="bio" value={user.bio} placeholder="Update bio" onChange={changeHandler} />
                    <input type="text" name="avatar" value={user.avatar} placeholder="Upload new profile photo" onChange={changeHandler} />
                    <Button variant="contained" color="primary" size="medium" input="submit" value="Submit"><SaveIcon/>&nbsp;Update &nbsp;</Button>
                </form>
            </span>
        )
    // }
}

export default EditProfileForm