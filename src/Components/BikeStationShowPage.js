import React from "react"
import ReviewsContainer from "../Containers/ReviewsContainer"
class BikeStationShowPage extends React.Component {

    state={
        reviews: [],
        filteredReviews: [],
        comment: ""
    }

    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/reviews/`)
            .then(resp => resp.json())
            .then(reviewsData => {
                this.setState(() => ({
                    reviews: reviewsData
                }))
            })
            .catch(errors => console.log(errors))
    }
    
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    localSubmitComments = (e) => {
        e.preventDefault()
        this.submitComments(this.state.comment)
        this.setState(()=> ({
            comment: ""
        }))
    }

    filterReviews = () => {
        return this.state.reviews.filter(review => review.bike_station_id === this.props.bikeId)
    }

    submitComments = (commentObj) => {
        fetch(`http://localhost:3000/api/v1/reviews`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify({
                review: {
                    user_id: 1, /* need to update */
                    bike_station_id: this.state.bikeStationId,
                    comment: commentObj
                }
            })
            }
        .then(resp => resp.json())
        .then(includingNewReview => {
        let updatedReviews = [...this.state.reviews, includingNewReview]
        this.setState(() => ({
            reviews: updatedReviews
        }))
    }))}

    render(){
        return(
            <>
            <h4>You've reached the bike show page</h4>
                {/* <img>Bike Image */}
                <h4>Bike Location Here</h4>
                <h4>Bike Borough Here</h4>

                <p>Write a comment below</p>
                <form onSubmit={this.localSubmitComments}>
                    <input type="textarea" name="comment" value={this.state.comment} placeholder="Write a comment..." onChange={this.changeHandler} />
                    <button input="submit" value="Submit comment">Submit</button>
                </form>

                <div>
                    <h4>Below is the Reviews Container</h4>
                    <ReviewsContainer filterReviews={this.filterReviews()}/>
                </div>
            </>
        )
    }
}

export default BikeStationShowPage