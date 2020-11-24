import React from "react"
import ReviewsContainer from "../Containers/ReviewsContainer"
class BikeStationShowPage extends React.Component {

    state={
        reviews: [],
        filteredReviews: [],
        comment: ""
    }

    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/reviews/`)
            .then(resp => resp.json())
            .then(reviewsData => {
                let allReviews = [...this.state.reviews, reviewsData]
                this.setState(() => ({
                    reviews: allReviews
                }))
            })
            .catch(errors => console.log(errors))
    }
    
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    localSubmitComments = (e) => {
        e.preventDefault()
        // this.props.submitComments(this.state.comment)
        console.log("Submitting comment in bike show page", e)

        this.setState(()=> ({
            comment: ""
        }))
    }

    filterReviews = () => {
        console.log("Reviews info:", this.state.reviews)
        let filterReviews = this.state.reviews.filter(review => review.bike_station_id === this.props.bikeId)
        this.setState(() => ({
            filteredReviews: [...this.state.filteredReviews, filterReviews]
        }))
    }

    render(){
        console.log("The Show Page has these props:", this.props)
        console.log("filtered", this.state.filteredReviews)
        return(
            <>
            <h4>You've reached the bike show page</h4>
                {/* <img>Bike Image */}
                {/* <h4>Bike Location</h4>
                <p>Bike Borough</p> */}

                <form onSubmit={this.localSubmitComments}>
                    <input type="textarea" name="comment" value={this.state.comment} placeholder="Write a comment..." onChange={this.changeHandler} />
                    <button input="submit" value="Submit comment">Submit</button>
                </form>

                <div>
                    Below is the Reviews Container
                    <ReviewsContainer filterReviews={this.filterReviews}/>
                </div>
            </>
        )
    }
}

export default BikeStationShowPage