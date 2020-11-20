import React from "react"
import ReactMapGL from "react-map-gl"

class Map extends React.Component{
    render(){
    return(
        <ReactMapGL mapboxApiAccessToken="pk.eyJ1IjoibGlhbmdhIiwiYSI6ImNraG9kODF6djAybDkyd3FsMnhxcG8wMmsifQ.5Z8qlJahYdbW_JlGhhs1hQ">
        </ReactMapGL>
    )}
}

export default Map