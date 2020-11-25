import React from "react"
import FilterBoroughs from "../Components/FilterBoroughs"
import BikeStation from "../Components/BikeStation"

// import { connect } from "react-redux"
// import { fetchBikes } from "../redux/actions"

const BikeStations = (props) => {

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


    const renderBikes = props.bikes.map(bike => <BikeStation key={bike.id} bike={bike} addFaves={props.addFaves} checkedIn={props.checkedIn} setStationIdForFilteringReviews={props.setStationIdForFilteringReviews} setBikeObjToDisplayInShowPage={props.setBikeObjToDisplayInShowPage} />)

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

