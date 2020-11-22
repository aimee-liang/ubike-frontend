import React, { useState } from "react"
// import { Route, Switch } from "react-router-dom"
import FilterBoroughs from "../Components/FilterBoroughs"
import BikeStation from "../Components/BikeStation"
// import { connect } from "react-redux"
// import { fetchBikes } from "../redux/actions"

// class BikeStations extends React.Component{
const BikeStations = (props) => {

    // state={
    //     filteredReviews:[]
    // }

/* function grabs review from the backend and used to set state, then send down as props to Bike Station? - just for testing */
    // fetchSpecificReviews = (specificBikeStationId) => {
    //     fetch(`http://localhost:3000/api/v1/reviews/specificBikeStationId`)
    //         .then(resp => resp.json())
    //         .then(reviews => {
    //             this.setState(()=> ({
    //                 filteredReviews: [...this.state.reviews, reviews]
    //         }))
    //     })
    // }
    
    const renderBikes = props.bikes.map(bike => <BikeStation key={bike.id} bike={bike} addFaves={props.addFaves} checkedIn={props.checkedIn} fetchSpecificReviews={props.fetchSpecificReviews} />)

        return(
            <>
                <FilterBoroughs searchBorough={props.searchBorough} searchValue={props.searchValue} />
                {renderBikes}
            </>
        )
}


// const mapStateToProps = (state) => {
//     return {bike_stations: state.bike_stations}
// }

// const mapDispatchToProps = (dispatch) => {
//     return {fetchBikes: () => dispatch(fetchBikes)}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BikeStations)
export default BikeStations

