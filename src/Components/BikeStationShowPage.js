import React from "react"
import ReviewsContainer from "../Containers/ReviewsContainer"
import ReviewsForm from "./ReviewsForm"
class BikeStationShowPage extends React.Component {

    state={
        reviews: [],
        // comment: ""
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
    
    // changeHandler = (e) => {
    //     this.setState({[e.target.name]: e.target.value})
    // }

    // localSubmitComments = (e) => {
    //     e.preventDefault()
    //     this.submitComments(this.state.comment)

    //     this.setState(()=> ({
    //         comment: ""
    //     }))
    // }

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
                    user_id: this.props.user.id,
                    username: this.props.user.username,
                    bike_station_id: this.props.bikeId,
                    comment: commentObj
                }
            })
        })
        .then(resp => resp.json())
        .then(includingNewReview => {
        let updatedReviews = [...this.state.reviews, includingNewReview]
        this.setState(() => ({
            reviews: updatedReviews
        }))
    })}

    render(){
        console.log("Show page props", this.props)
        console.log("Reviews", this.state.reviews)
        return(
            <>
                {/* <img>Bike Image */}
                <h3>{this.props.bikeObj.location}</h3>
                <h4>{this.props.bikeObj.borough}</h4>

                <p>Please keep our community guidelines in mind when you write a review.</p>
                {/* <form onSubmit={this.localSubmitComments}>
                    <input type="textarea" name="comment" value={this.state.comment} placeholder="Write a comment" onChange={this.changeHandler} />
                    <button input="submit" value="Submit comment">Submit</button>
                </form> */}
                <ReviewsForm submitComments={this.submitComments} />

                <div>
                    <h4>All Reviews </h4>
                    <ReviewsContainer filterReviews={this.filterReviews()} />
                </div>
            </>
        )
    }
}

export default BikeStationShowPage