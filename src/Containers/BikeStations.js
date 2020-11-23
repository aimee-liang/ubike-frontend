import React from "react"
import { Route, Switch } from "react-router-dom"
import FilterBoroughs from "../Components/FilterBoroughs"
import BikeStation from "../Components/BikeStation"
import BikeStationShowPage from "../Components/BikeStationShowPage"

// import { connect } from "react-redux"
// import { fetchBikes } from "../redux/actions"

// const BikeStations = (props) => {
class BikeStations extends React.Component{

    state={
        bikesAPI: [],
        searchValue: "All",
        reviews: []
    }

    componentDidMount(){
        // this.props.fetchBikes()
        Promise.all([
            fetch(`http://localhost:3000/api/v1/bike_stations`),
            fetch(`http://localhost:3000/api/v1/reviews/`)
        ])
            .then(([resp1, resp2]) => Promise.all([resp1.json(), resp2.json()]))
            .then(([data1, data2]) => 
                this.setState({
                    bikesAPI: data1,
                    reviews: data2
                }))
    }

    searchBorough = (boroughObj) => {
        this.setState(() => ({
            searchValue: boroughObj
        }))
    }

    sortByBorough = () => {
        if (this.state.searchValue === "All"){
            return this.state.bikesAPI
        } else {
            return this.state.bikesAPI.filter(bikeShelter => bikeShelter.borough === this.state.searchValue)
        }
    }

    showMeReviews = () => {
        console.log("Reviews:", this.state.reviews)
    }

    filterReviews = (specificBikeStationId) => {
        return this.state.reviews.filter(review => review.bikeStationId === specificBikeStationId)
    }

    // const renderBikes = props.bikes.map(bike => <BikeStation key={bike.id} bike={bike} addFaves={props.addFaves} checkedIn={props.checkedIn} filterReviews={props.filterReviews} />)

    renderBikes = this.state.bikesAPI.map(bike => <BikeStation key={bike.id} bike={bike} addFaves={this.props.addFaves} checkedIn={this.props.checkedIn} filterReviews={this.filterReviews} />)

    render(){
        console.log("bike API", this.state.bikesAPI)
        return(
            <>
            <h4>This is the bike station container</h4>
                <FilterBoroughs searchBorough={this.searchBorough} searchValue={this.state.searchValue} />
                
                {/* <Switch>
                    <Route path="/bike_stations/:id" render={({ match }) => {
                        let id = parseInt(match.params.id)
                        let bikeStation = this.state.bikesAPI.find((bikeStation) => bikeStation.id === id)
                        return <BikeStation bikestation={bikeStation} key={bikeStation.id} />
                        
                    }}/> */}
                    {/* <Route path="/bike_stations/" render={() => {
                        return( 
                            <> */}
                                {this.renderBikes}
                            {/* </>
                        )
                    }} />
                </Switch> */}

            </>
        )}
    }


// const mapStateToProps = (state) => {
//     return {bike_stations: state.bike_stations}
// }

// const mapDispatchToProps = (dispatch) => {
//     return {fetchBikes: () => dispatch(fetchBikes)}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BikeStations)
export default BikeStations

