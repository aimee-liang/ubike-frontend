import React from "react"
import Map from "../Components/Map"
import BikeStations from "./BikeStations"

class Home extends React.Component{

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
        console.log(this.state.reviews)
    }

    render(){
        this.showMeReviews()
        return(
            <>
            <p> This is the home page</p>
                <BikeStations bikes={this.sortByBorough()} searchBorough={this.searchBorough} searchValue={this.state.searchValue} addFaves={this.props.addFaves} checkedIn={this.props.checkedIn} fetchSpecificReviews={this.fetchSpecificReviews} />
                <Map />
            </>
        )
    }
}


export default Home

