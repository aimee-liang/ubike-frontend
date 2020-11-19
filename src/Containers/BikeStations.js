import React from "react"
import FilterBoroughs from "../Components/FilterBoroughs"
import BikeStation from "../Components/BikeStation"
import { connect } from "react-redux"
import { getBikes } from "../redux/rootReducer"

class BikeStations extends React.Component{

    state={
        searchValue: "All"
    }

    componentDidMount(){
        this.props.fetchBikes()
    }

    searchBorough = (boroughObj) => {
        this.setState(() => ({
            searchValue: boroughObj
        }))
    }

    sortByBorough = () => {
        if (this.state.searchValue === "All"){
            return 
        }
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