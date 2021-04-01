import React, {useState, useEffect} from "react"
import ReviewsContainer from "../Containers/ReviewsContainer"
import ReviewsForm from "./ReviewsForm"
import PhotosContainer from "../Containers/PhotosContainer"

const BikeStationShowPage = (props) => {
// class BikeStationShowPage extends React.Component {

    const [reviews, setReviews] = useState([])
    const reviewsUrl = `http://localhost:3000/api/v1/reviews/`

    // state={
    //     reviews: [],
    // }

    useEffect(() => {
        fetchReviews(reviewsUrl)
    }, [])

    const fetchReviews = (url) => {
        fetch(url)
            .then(response => response.json())
            .then((data) => setReviews(data))
            .catch(errors => console.log(errors))
    }

    // componentDidMount(){
    //     fetch(`http://localhost:3000/api/v1/reviews/`)
    //         .then(resp => resp.json())
    //         .then(reviewsData => {
    //             this.setState(() => ({
    //                 reviews: reviewsData
    //             }))
    //         })
    //         .catch(errors => console.log(errors))
    // }

    const filterReviews = () => {
        return reviews.filter(review => review.bike_station_id === props.bikeId)
    }

    // const submitComments = (commentObj) => {
    //     const token = localStorage.getItem("secret")
    //     fetch(`http://localhost:3000/api/v1/reviews`, {
    //         method: "POST",
    //         headers: { 
    //             Authorization: `Bearer ${token}`,
    //             "content-type": "application/json",
    //             accepts: "application/json"
    //         },
    //         body: JSON.stringify({
    //             review: {
    //                 user_id: this.props.user.id,
    //                 username: this.props.user.username,
    //                 bike_station_id: this.props.bikeId,
    //                 comment: commentObj
    //             }
    //         })
    //     })
    //     .then(resp => resp.json())
    //     .then(includingNewReview => {
    //     let updatedReviews = [...this.state.reviews, includingNewReview]
    //     this.setState(() => ({
    //         reviews: updatedReviews
    //     }))
    // })
    // }

    const submitComments = (commentObj) => {
        const token = localStorage.getItem("secret")
        fetch(reviewsUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify({
                review: {
                    user_id: props.user.id,
                    username: props.user.username,
                    bike_station_id: props.bikeId,
                    comment: commentObj
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            let updatedReviews = [...reviews, data]
            setReviews(updatedReviews)
        })
    }

    // render(){
        return(
            <>
            <div className="show-page-container">

                <div className="show-page-components">

                    <PhotosContainer photos={props.bikeObj.photos}/>
                        <h2>{props.bikeObj.location}</h2>
                        <h3>{props.bikeObj.borough}</h3>

                    <div className="reviews">
                        <h4 className="community-guidelines">Please keep our community guidelines in mind when you write a review.</h4>
                        <ReviewsForm submitComments={submitComments} />

                        <h4>All Reviews </h4>
                        <ReviewsContainer filterReviews={filterReviews()} />
                    </div>

                </div>
            
            </div>
            </>
        )
    // }
}

export default BikeStationShowPage