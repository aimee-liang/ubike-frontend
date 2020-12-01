import React from "react"
import {PureComponent} from "react"
import ReactMapGL, {Marker} from "react-map-gl"

const shelters=[
    {name: "Dekalb Ave & Flatbush Ave", longitude: -73.981096, latitude: 40.689851},
    {name: "Graham Ave & Metropolitan Ave", longitude: -73.944512, latitude: 40.714712},
    {name: "Kings Hwy & E. 15th St", longitude: -73.958153, latitude: 40.608880},
    {name: "4th Ave & 36th St", longitude: -74.004185, latitude: 40.654291},
    {name: "Surf Ave & Stillwell Ave", longitude: -73.980495, latitude: 40.575674},
    {name: "E. Kingsbridge Rd & Briggs Ave", longitude: -73.894291, latitude: 40.862970},
    {name: "Grand Concourse & E.Tremont Ave", longitude: -73.906012, latitude: 40.849843},
    {name: "E. 17th St & Broadway", longitude: -73.989979, latitude: 40.737018},
    {name: "W. 23rd St & 6th Ave", longitude: -73.992562, latitude: 40.742699},
    {name: "W. 23rd St & 8th Ave", longitude: -73.998087, latitude: 40.745228},
    {name: "W. 33rd St & 8th Ave", longitude: -73.993644, latitude: 40.751326},
    {name: "Rutgers St & East Broadway", longitude: -73.990093, latitude: 40.713792},
    {name: "Jackson Ave & 50th Ave", longitude: -73.952187, latitude: 40.742659},
    {name: "31st St & 30th Ave", longitude: -73.921500, latitude: 40.766573},
    {name: "Lefferts Blvd & Liberty Ave", longitude: -73.823941, latitude: 40.685975},
    {name: "71st Ave & Austin St", longitude: -73.844842, latitude: 40.719917},
    {name: "Father Capodanno Blvd & Sand Lane", longitude: -74.066198, latitude: 40.590507},
    {name: "Richmond Ave & Wainwright Ave", longitude: -74.170972, latitude: 40.560158}
]
class Markers extends PureComponent{
    render(){
        const {data}=this.props 
        return data.map(
            shelter => <Marker key={shelter.name} longitude={shelter.longitude} latitude={shelter.latitude}><img alt="" className="location-pin" src="/green-location-pin.png"/></Marker>
        )
    }
}

class Map extends React.Component{
    state={
        viewport:{
            width: "49vw",
            height: "100vh",
            latitude: 40.730610,
            longitude: -73.935242,
            zoom: 10
        },
        // selectedSpot: null
    }

    render(){
        return(
            <div className="map">
                <ReactMapGL {...this.state.viewport} mapStyle="mapbox://styles/lianga/cki678vrg0y5q19o8wvrb9bj7"
                onViewportChange={(viewport => this.setState({viewport}))}
                mapboxApiAccessToken="pk.eyJ1IjoibGlhbmdhIiwiYSI6ImNraG9kODF6djAybDkyd3FsMnhxcG8wMmsifQ.5Z8qlJahYdbW_JlGhhs1hQ">
                    <Markers data={shelters}  />
                </ReactMapGL>
            </div>
        )}
}

export default Map