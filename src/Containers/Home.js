import React from "react"
import Map from "../Components/Map"
import BikeStations from "./BikeStations"

class Home extends React.Component{
// const Home = props => {
    state={
        bikesAPI: [],
        searchValue: "All",
        reviews: []
        // favorites: [],
    }

    componentDidMount(){
        // this.props.fetchBikes()
        Promise.all([
            fetch(`http://localhost:3000/api/v1/bike_stations`),
            fetch(`http://localhost:3000/api/v1/reviews/`)
        ])
            .then(([resp1, resp2]) => Promise.all([resp1.json(), resp2.json()]))
            .then(([data1, data2]) => 
                this.setState({
                    bikesAPI: data1,
                    reviews: data2
                }))
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

    showMeReviews = () => {
        console.log("Reviews:", this.state.reviews)
    }

    filterReviews = (specificBikeStationId) => {
        return this.state.reviews.filter(review => review.bikeStationId === specificBikeStationId)
    }

    render(){
        // this.showMeReviews()
        return(
            <>
            <h3> This is the home page</h3>
                <BikeStations bikes={this.sortByBorough()} searchBorough={this.searchBorough} searchValue={this.state.searchValue} addFaves={this.props.addFaves} checkedIn={this.props.checkedIn} filterReviews={this.filterReviews} />
                {/* <BikeStations addFaves={props.addFaves} checkedIn={props.checkedIn} /> */}
                <Map />
            </>
        )
    }
}


export default Home

