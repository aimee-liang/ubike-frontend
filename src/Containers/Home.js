import React, {useState, useEffect} from "react"
import CustomChatBot from "../Components/CustomChatbot"
import Map from "../Components/Map"
import BikeStations from "./BikeStations"

export default function Home(){
// class Home extends React.Component{

    const [bikesAPI, setBikesAPI] = useState([])
    state={
        bikesAPI: [],
        searchValue: "All",
        clicked: false,
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

    useEffect(() => {
        fetchBikeStations()
    }, [])



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

    // render(){
        return(
            <div className="home-background">
                <div className="home">
                    <BikeStations bikes={this.sortByBorough()} searchBorough={this.searchBorough} searchValue={this.state.searchValue} addFaves={this.props.addFaves} checkedIn={this.props.checkedIn} setStationIdForFilteringReviews={this.props.setStationIdForFilteringReviews} setBikeObjToDisplayInShowPage={this.props.setBikeObjToDisplayInShowPage} />
                <div className="map-container">
                    <Map />
                </div>
                </div>
                    <button className={this.state.clicked ? "livechat open":"livechat"} onClick={this.clickHandler}>{this.state.clicked ? "x" : <i className="fas fa-comments"></i>}</button>
                    {this.state.clicked ? <div className="chatbot-container"> <CustomChatBot /> </div> : null }
            </div>
        )
    // }
}

