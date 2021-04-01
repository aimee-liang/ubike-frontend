import React, {useState} from "react"
import Button from "@material-ui/core/Button"
import AddCommentIcon from '@material-ui/icons/AddComment';
import TextField from "@material-ui/core/TextField"

const ReviewsForm = props => {
// export default class ReviewsForm extends React.Component{

    const [comment, setComment] = useState("")
    // state={
    //     comment: ""
    // }

    const changeHandler = (e) => {
        this.setState({...comment, [e.target.name]: e.target.value})
    }

    const localSubmitComments = (e) => {
        e.preventDefault()
        props.submitComments(comment)

        setComment("")
        // this.setState(()=> ({
        //     comment: ""
        // }))
    }

    // render(){
        return(
            <form onSubmit={localSubmitComments}>
                <TextField id="outlined-basic" variant="outlined" input type="textarea" name="comment" value={comment.comment} label="Write a comment..." onChange={changeHandler} />
                <br></br>
                <br></br>
                <Button variant="contained" color="primary" type="submit" value="Submit comment"> <AddCommentIcon/> &nbsp;Submit</Button>
            </form>
        )
    // }
}

export default ReviewsForm