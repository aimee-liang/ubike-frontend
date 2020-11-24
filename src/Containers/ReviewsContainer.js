import React from "react"
import Review from "../Components/Review"

const ReviewsContainer = props => {

    let renderReviews = props.filterReviews.map((filteredReview, index) => <Review key={index} review={filteredReview} /> )
    
    return(
        <>
        <p>Review for this bike station below</p>
        {renderReviews}
        </>
    )
}

export default ReviewsContainer