import React from "react"
import Review from "../Components/Review"

const ReviewsContainer = props => {

    // render through all reviews
    let renderReviews = props.filterReviews.map(filteredReview => <Review review={filteredReview} /> )
    
    return(
        <>
        <p>Review for this bike station below</p>
        {renderReviews}
        </>
    )
}

export default ReviewsContainer