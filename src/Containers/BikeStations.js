import React from "react"
import { Route, Switch } from "react-router-dom"
import FilterBoroughs from "../Components/FilterBoroughs"
import BikeStation from "../Components/BikeStation"
// import { connect } from "react-redux"
// import { fetchBikes } from "../redux/actions"

const BikeStations = (props) => {

    let renderBikes = props.bikes.map(bike => <BikeStation key={bike.id} bike={bike} addFaves={props.addFaves} checkedIn={props.checkedIn} />)

        return(
            <>
            {/* <Switch> */}
                {/* <Route path="/bike_stations/:id" render={({ match }) => {
                    let id = parseInt(match.params.id)
                    let bike_station = props.bike.find((bike_station) => bike_station.id === id)
                }} /> */}


                <FilterBoroughs searchBorough={props.searchBorough} searchValue={props.searchValue} />
                {renderBikes}
            {/* </Switch> */}
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

