import React from "react"

const Review = props => {
    return (
        <>
        <p>@{props.user.username}: {props.review.comment}</p>
        </>
    )
}

export default Review