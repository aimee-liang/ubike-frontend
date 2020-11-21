import React from "react"
import Map from "../Components/Map"
import BikeStations from "./BikeStations"

class Home extends React.Component{

    state={
        bikesAPI: [],
        searchValue: "All",
        favorites: []
    }

    componentDidMount(){
        // this.props.fetchBikes()
        fetch(`http://localhost:3000/api/v1/bike_stations`)
            .then(resp => resp.json())
            .then(data => {
                this.setState(()=> ({
                    bikesAPI: data
                }))
            })
            .catch(error => console.log(error))
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

    render(){
        return(
            <>
            <p> This is the home page</p>
                <BikeStations bikes={this.sortByBorough()} searchBorough={this.searchBorough} searchValue={this.state.searchValue} addFaves={this.props.addFaves} checkedIn={this.props.checkedIn} />
                <Map />
            </>
        )
    }
}


export default Home

