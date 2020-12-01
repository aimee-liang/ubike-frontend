import React from "react"
// import CustomChatBot from "../Components/CustomChatbot"
import Map from "../Components/Map"
import BikeStations from "./BikeStations"

class Home extends React.Component{
    state={
        bikesAPI: [],
        searchValue: "All",
        clicked: false,
        // available: 0
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

    clickHandler = () => {
        this.setState(previousState => ({
            clicked: !previousState.clicked
        }))
    }

    /* TO DO: update bike racks available */
    // decreaseAvailableBikeRacks = (stationId) => {
    //     fetch(`http://localhost:3000/api/v1/bike_stations/${stationId}`,{
    //         method: "PATCH",
    //         headers: {
    //             "content-type": "application/json",
    //             accepts: "application/json",
    //         },
    //     body: JSON.stringify({
    //         bike_station: {

    //         }
    //     })
    //     })
    // }

    // increaseAvailableBikeRacks = (station) => {
    //     fetch(`http://localhost:3000/api/v1/bike_stations/${station.id}`,{
    //         method: "PATCH",
    //         headers: {
    //             "content-type": "application/json",
    //             accepts: "application/json",
    //         },
    //     body: JSON.stringify({
    //         bike_station: {
    //         id: station.id,
    //         location: station.location,
    //         borough: station.borough,
    //         // available_bike_racks: += 1
    //         }
    //     })
    //     })
    // }

    render(){
        return(
            <div className="home">
                <BikeStations bikes={this.sortByBorough()} searchBorough={this.searchBorough} searchValue={this.state.searchValue} addFaves={this.props.addFaves} checkedIn={this.props.checkedIn} setStationIdForFilteringReviews={this.props.setStationIdForFilteringReviews} setBikeObjToDisplayInShowPage={this.props.setBikeObjToDisplayInShowPage} />
                <Map />
                {/* <button onClick={this.clickHandler}></button> */}
                {/* {this.state.clicked ? <CustomChatBot /> : null } */}
                {/* <CustomChatBot /> */}
            </div>
        )
    }
}


export default Home

