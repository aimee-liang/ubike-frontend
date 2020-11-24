import React from "react"
import FilterBoroughs from "../Components/FilterBoroughs"
import BikeStation from "../Components/BikeStation"

// import { connect } from "react-redux"
// import { fetchBikes } from "../redux/actions"

const BikeStations = (props) => {
// class BikeStations extends React.Component{

    // state={
    //     bikesAPI: [],
    //     searchValue: "All",
    //     reviews: []
    // }

    // componentDidMount(){
    //     Promise.all([
    //         fetch(`http://localhost:3000/api/v1/bike_stations`),
    //         fetch(`http://localhost:3000/api/v1/reviews/`)
    //     ])
    //         .then(([resp1, resp2]) => Promise.all([resp1.json(), resp2.json()]))
    //         .then(([data1, data2]) => 
    //             this.setState({
    //                 bikesAPI: data1,
    //                 reviews: data2
    //             }))
    // }

    // searchBorough = (boroughObj) => {
    //     this.setState(() => ({
    //         searchValue: boroughObj
    //     }))
    // }

    // sortByBorough = () => {
    //     if (this.state.searchValue === "All"){
    //         return this.state.bikesAPI
    //     } else {
    //         return this.state.bikesAPI.filter(bikeShelter => bikeShelter.borough === this.state.searchValue)
    //     }
    // }

    // filterReviews = (specificBikeStationId) => {
    //     return this.state.reviews.filter(review => review.bikeStationId === specificBikeStationId)
    // }

/* renders all bike stations */
    const renderBikes = props.bikes.map(bike => <BikeStation key={bike.id} bike={bike} addFaves={props.addFaves} checkedIn={props.checkedIn} filterReviews={props.filterReviews} setStationIdForFilteringReviews={props.setStationIdForFilteringReviews}/>)

        return(
            <>
            <h4>This is the bike station container</h4>
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

