import React from "react"

const Review = props => {
    return (
        <>
        <p>@{props.review.username}: {props.review.comment}</p>
        </>
    )
}

export default Review