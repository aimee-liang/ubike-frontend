import React, {useState} from "react"

const Review = props => {
    // maybe fetch here, filter if id matches user id?
    return (
        <>
        <p>@: {props.review.comment}</p>
        </>
    )
}

export default Review