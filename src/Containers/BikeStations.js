import React, { useState } from "react"
import { Route, Switch } from "react-router-dom"
import FilterBoroughs from "../Components/FilterBoroughs"
import BikeStation from "../Components/BikeStation"
// import { connect } from "react-redux"
// import { fetchBikes } from "../redux/actions"

const BikeStations = (props) => {

    // const [reviews, setReviews] = useState([])
    // const [errors, setErrors] = useState(false)

//     useEffect(() => {
//         fetch(`http://localhost:3000/api/v1/reviews/specificBikeStationId`)
//             .then(resp => setReviews(resp.data))
//             .catch(error => setErrors(true))
// }, [])

/* function grabs review from the backend and used to set state, then send down as props to Bike Station? - just for testing */
    // fetchSpecificReviews = () => {
    //     fetch(`http://localhost:3000/api/v1/reviews/`)
    //         .then(resp => resp.json())
    //         .then("reviews", console.log)
        //     .then(reviews => {
        //         this.setState(()=> ({
        //             filteredReviews: [...this.state.reviews, reviews]
        //     }))
        // })
    // }

    // const filterReviews = (specificBikeStationId) => {
    //     return setReviews.filter(review => review.bikeStationId === specificBikeStationId)
    // }

    const renderBikes = props.bikes.map(bike => <BikeStation key={bike.id} bike={bike} addFaves={props.addFaves} checkedIn={props.checkedIn} filterReviews={props.filterReviews} />)

        return(
            <>
            {/* <Switch> */}
                <FilterBoroughs searchBorough={props.searchBorough} searchValue={props.searchValue} />
                {/* <Route path="/bike_stations/:id" render={(props.filterReviews) => renderBikes} /> */}
                {/* <Route path="/bike_stations" component={renderBikes} /> */}
                {renderBikes}
            {/* </Switch> */}
            </>
        )}


// const mapStateToProps = (state) => {
//     return {bike_stations: state.bike_stations}
// }

// const mapDispatchToProps = (dispatch) => {
//     return {fetchBikes: () => dispatch(fetchBikes)}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BikeStations)
export default BikeStations

