import React from "react"
import Map from "../Components/Map"
import BikeStations from "./BikeStations"

class Home extends React.Component{
// const Home = props => {
    state={
        bikesAPI: [],
        searchValue: "All",
        // reviews: []
    }

    componentDidMount(){
        // this.props.fetchBikes()
        fetch(`http://localhost:3000/api/v1/bike_stations`)
        .then(resp => resp.json())
        .then((bikesData) => 
            this.setState({
                bikesAPI: bikesData,
            }))
        .catch(errors => console.log(errors))
    }

    searchBorough = (boroughObj) => {
        this.setState(() => ({
            searchValue: boroughObj
        }))
    }

    sortByBorough = () => {
        if (this.state.searchValue === "All"){
            return this.state.bikesAPI
        } else {
            return this.state.bikesAPI.filter(bikeShelter => bikeShelter.borough === this.state.searchValue)
        }
    }


    // filterReviews = (specificBikeStationId) => {
    //     return this.state.reviews.filter(review => review.bikeStationId === specificBikeStationId)
    // }

    render(){
        return(
            <>
            <h3> This is the home page</h3>
                <BikeStations bikes={this.sortByBorough()} searchBorough={this.searchBorough} searchValue={this.state.searchValue} addFaves={this.props.addFaves} checkedIn={this.props.checkedIn} filterReviews={this.props.filterReviews} />
                {/* <BikeStations addFaves={props.addFaves} checkedIn={props.checkedIn} /> */}
                <Map />
            </>
        )
    }
}


export default Home

