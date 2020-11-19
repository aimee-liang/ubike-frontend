import React from "react"
import FilterBoroughs from "../Components/FilterBoroughs"
import BikeStation from "../Components/BikeStation"
import { connect } from "react-redux"
import { getBikes } from "../redux/actions"

class BikeStations extends React.Component{

    componentDidMount(){
        this.props.fetchBikes()
    }

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

const mapDispatchToProps = (dispatch) => {
    return {fetchBikes: () => dispatch(getBikes)}
}

export default connect(mapStateToProps, mapDispatchToProps)(BikeStations)