import React from "react"
import Map from "../Components/Map"
import BikeStations from "./BikeStations"

export default class Home extends React.Component{
    render(){
        return(
            <>
                <BikeStations />
                <Map />
            </>
        )
    }
}