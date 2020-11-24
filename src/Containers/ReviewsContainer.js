import React from "react"
import Review from "../Components/Review"

const ReviewsContainer = props => {

    // render through all reviews
    // let renderReviews = props.filterReviews.map((filteredReview, index) => <Review key={index} review={filteredReview} /> )

    // console.log("props in reviews container", props)
    return(
        <>
        <p>this is the super awesome reviews container</p>
        {/* {renderReviews} */}
        </>
    )
}

export default ReviewsContainer