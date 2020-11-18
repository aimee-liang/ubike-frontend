import React from "react"
import FilterBoroughs from "../Components/FilterBoroughs"
import BikeStation from "../Components/BikeStation"

export default class BikeStations extends React.Component{
    render(){
        return(
            <>
                <FilterBoroughs />
                <BikeStation />
            </>
        )
    }
}