import React from "react"
import ReactMapGL from "react-map-gl"

class Map extends React.Component{
    state={
        viewport:{
            width: "50vw",
            height: "100vh",
            latitude: 40.730610,
            longitude: -73.935242,
            zoom: 10
        }
    }
    render(){
    return(
        <ReactMapGL {...this.state.viewport} mapStyle="mapbox://styles/lianga/ckhppbi8209vs19qtm3yamjmt"
        mapboxApiAccessToken="pk.eyJ1IjoibGlhbmdhIiwiYSI6ImNraG9kODF6djAybDkyd3FsMnhxcG8wMmsifQ.5Z8qlJahYdbW_JlGhhs1hQ">
        </ReactMapGL>
    )}
}

export default Map