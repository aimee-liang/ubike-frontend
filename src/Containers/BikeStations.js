import React from "react"
import FilterBoroughs from "../Components/FilterBoroughs"
import BikeStation from "../Components/BikeStation"
import {connect} from "react-redux"

class BikeStations extends React.Component{
    render(){
        return(
            <>
                <FilterBoroughs />
                <BikeStation />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {bike_stations: state.bike_stations}
}

export default connect(mapStateToProps, null)(BikeStations)