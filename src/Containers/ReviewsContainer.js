import React from "react"
import Review from "../Components/Review"

const ReviewsContainer = props => {

    // render through all reviews
    // console.log("this is filter reviews", props)

    let renderReviews = props.filterReviews.map(filteredReview => <Review review={filteredReview} /> )
    
    // console.log("props in reviews container", props)
    return(
        <>
        <p>this is the super awesome reviews container</p>
        {renderReviews}
        {/* <Review /> */}
        </>
    )
}

export default ReviewsContainer