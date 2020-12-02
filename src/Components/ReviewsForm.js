import React from "react"
import Button from "@material-ui/core/Button"
import AddCommentIcon from '@material-ui/icons/AddComment';

export default class ReviewsForm extends React.Component{
    state={
        comment: ""
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    localSubmitComments = (e) => {
        e.preventDefault()
        this.props.submitComments(this.state.comment)

        this.setState(()=> ({
            comment: ""
        }))
    }

    render(){
        return(
            <form onSubmit={this.localSubmitComments}>
                <input type="textarea" name="comment" value={this.state.comment} placeholder="Write a comment" onChange={this.changeHandler} />
                <br></br>
                <br></br>
                <Button variant="contained" color="primary" input="submit" value="Submit comment"> <AddCommentIcon/> &nbsp;Submit</Button>
            </form>
        )
    }
}