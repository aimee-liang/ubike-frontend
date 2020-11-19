import React from "react"
import Map from "../Components/Map"
import BikeStations from "./BikeStations"

class Home extends React.Component{
    render(){
        return(
            <>
                <BikeStations />
                <Map />
            </>
        )
    }
}


export default Home

