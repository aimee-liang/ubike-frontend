import React from "react"
import ReviewsContainer from "../Containers/ReviewsContainer"
import ReviewsForm from "./ReviewsForm"
import PhotosContainer from "../Containers/PhotosContainer"

class BikeStationShowPage extends React.Component {

    state={
        reviews: [],
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
        console.log(this.props)
        return(
            <>
            {/* <div>
                <img alt=""src={this.props.bikeObj.photos ? this.props.bikeObj.photos : "/placeholder.jpg" }  className="default-pic"  />
            </div> */}
            <PhotosContainer photos={this.props.bikeObj.photos} />
                <h3>{this.props.bikeObj.location}</h3>
                <h4>{this.props.bikeObj.borough}</h4>

                <p>Please keep our community guidelines in mind when you write a review.</p>
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