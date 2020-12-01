import React from "react"
import {PureComponent} from "react"
import ReactMapGL, {Marker} from "react-map-gl"

// creating list of bike shelters
const shelters=[
    {name: "Dekalb Ave & Flatbush Ave", longitude: -74.170972, latitude: 40.560158},
    {name: "Grahan Ave & Metropolitan Ave", longitude: -74.066198, latitude: 40.590507},
    {name: "Kings Hwy & E. 15th St", longitude:, latitude: },
    {name: "4th Ave & 36th St", longitude: -74.004185, latitude: 40.654291},
    {name: "Surf Ave & Stillwell Ave", longitude:, latitude: },
    {name: "E. Kingbridge Rd & Briggs Ave", longitude:, latitude: },
    {name: "Grand Concourse & E.Tremont Ave", longitude:, latitude: },
    {name: "E. 17th St & Broadway", longitude:, latitude: },
    {name: "W. 23rd St & 6th Ave", longitude:, latitude: },
    {name: "W. 23rd St & 8th Ave", longitude: -73.998087, latitude: 40.745228},
    {name: "W. 33rd St & 8th Ave", longitude: -73.993644, latitude: 40.751326},
    {name: "Rutgers St & East Broadway", longitude:, latitude: },
    {name: "Jackson Ave & 50th Ave", longitude:, latitude: },
    {name: "31st St & 30th Ave", longitude:, latitude: },
    {name: "Lefferts Blvd & Liberty Ave", longitude:, latitude: },
    {name: "71st Ave & Austin St", longitude:, latitude: },
    {name: "Father Capodanno Blvd & Sand Lane", longitude:, latitude: },
    {name: "Richmond Ave & Wainwright Ave", longitude:, latitude: }
]
// class Markers extends PureComponent{
//     render(){
//         const data={this.props}
//         return data.map(
//             shelter => <Marker key={shelter.name} longitude={shelter.longitude} latitude={shelter.latitude}><img src=""/></Marker>
//         )
//     }
// }

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
        <div className="map">
            <ReactMapGL {...this.state.viewport} mapStyle="mapbox://styles/lianga/ckhppbi8209vs19qtm3yamjmt"
            onViewportChange={(viewport => this.setState({viewport}))}
            mapboxApiAccessToken="pk.eyJ1IjoibGlhbmdhIiwiYSI6ImNraG9kODF6djAybDkyd3FsMnhxcG8wMmsifQ.5Z8qlJahYdbW_JlGhhs1hQ">
                {/* <Markers data={shelters} /> */}
            </ReactMapGL>
        </div>
    )}
}

export default Map