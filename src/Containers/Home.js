import React, {useState, useEffect} from "react"
import CustomChatBot from "../Components/CustomChatbot"
import Map from "../Components/Map"
import BikeStations from "./BikeStations"

export default function Home(){
    const [bikesAPI, setBikesAPI] = useState([])
    const [searchValue, setSearchValue] = useState("All")
    const [clicked, setClicked] = useState(false)
    const bikeStationsURL = `http://localhost:3000/api/v1/bike_stations`

    useEffect(() => {
        fetchBikeStations()
    }, [])

    const fetchBikeStations = () => {
        fetch(bikeStationsURL)
            .then(resp => resp.json())
            .then(bikesData => setBikesAPI([bikesAPI, ...bikesData]))
            .catch(error => console.log(error))
    }

    const searchBorough = (boroughObj) => {
        setSearchValue(`${boroughObj}`)
    }

    const sortByBorough = () => {
        let arrayOfBikeStations = bikesAPI
        if (searchValue !== "All"){
            arrayOfBikeStations = bikesAPI.filter((bikeStation) => {
                return bikeStation.borough === searchValue
            })
            return arrayOfBikeStations
        }
    }

    const clickHandler = () => {
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

