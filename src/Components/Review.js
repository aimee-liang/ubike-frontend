import React from "react"

const Review = props => {
    console.log("Review", props)
    return (
        <>
        <p>This is a review</p>
        {/* <p>{props.review.comment}</p> */}
        </>
    )
}

export default Review