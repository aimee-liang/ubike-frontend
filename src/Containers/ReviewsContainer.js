import React from "react"
import Review from "../Components/Review"

const ReviewsContainer = (props) => {

    let renderReviews = props.filterReviews.map((filteredReview, index) => <Review key={index} review={filteredReview} /> )
    
    return(
        <>
        {renderReviews}
        </>
    )
}

export default ReviewsContainer