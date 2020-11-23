import React from "react"

class BikeStationShowPage extends React.Component {

    state={
        comment:""
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    localSubmitComments = (e) => {
        e.preventDefault()
        // pass down props from somewhere
        console.log("in bike show page", e)

        this.setState(()=> ({
            comment: ""
        }))
    }

    render(){
        return(
            <>
                {/* <img>Bike Image */}
                <h4>Bike Location</h4>
                <p>Bike Borough</p>

                <form onSubmit={this.localSubmitComments}>
                    <input type="textarea" name="comment" value={this.state.comment} placeholder="Write a comment..." onChange={this.changeHandler} />
                    <button input="submit" value="Submit comment">Submit</button>
                </form>

            </>
        )
    }
}

export default BikeStationShowPage