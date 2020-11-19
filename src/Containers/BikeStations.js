import React from "react"
import FilterBoroughs from "../Components/FilterBoroughs"
import BikeStation from "../Components/BikeStation"
// import { connect } from "react-redux"
// import { fetchBikes } from "../redux/actions"

class BikeStations extends React.Component{

    // state={
    //     bikesAPI: [],
    //     searchValue: "All"
    // }

    // componentDidMount(){
    //     // this.props.fetchBikes()
    //     fetch(`http://localhost:3000/api/v1/bike_stations`)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             this.setState(()=> ({
    //                 bikesAPI: data
    //             }))
    //         })
    //         .catch(error => console.log(error))
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

    renderBikes = () => this.props.bikes.map((bike) => {
        return <BikeStation id={bike.id} bike={bike}/>
    })

    render(){
        return(
            <>
                <FilterBoroughs searchBorough={this.props.searchBorough} searchValue={this.props.searchValue} />
                {/* <BikeStation bikes={this.props.bikesAPI}/> */}
                {this.renderBikes()}
            </>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {bike_stations: state.bike_stations}
// }

// const mapDispatchToProps = (dispatch) => {
//     return {fetchBikes: () => dispatch(fetchBikes)}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BikeStations)
export default BikeStations

