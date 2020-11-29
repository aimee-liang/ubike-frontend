import React from "react"
import Map from "../Components/Map"
import BikeStations from "./BikeStations"

class Home extends React.Component{
    state={
        bikesAPI: [],
        searchValue: "All"
    }

    componentDidMount(){
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
        let arrayOfBikeStations = this.state.bikesAPI
        if (this.state.searchValue !== "All"){
            arrayOfBikeStations = this.state.bikesAPI.filter((bikeStation) => {
                return bikeStation.borough === this.state.searchValue
            })
        } 
        return arrayOfBikeStations
    }

    render(){
        return(
            <div className="home">
                <BikeStations bikes={this.sortByBorough()} searchBorough={this.searchBorough} searchValue={this.state.searchValue} addFaves={this.props.addFaves} checkedIn={this.props.checkedIn} setStationIdForFilteringReviews={this.props.setStationIdForFilteringReviews} setBikeObjToDisplayInShowPage={this.props.setBikeObjToDisplayInShowPage} />
                {/* <Map /> */}
            </div>
        )
    }
}


export default Home

