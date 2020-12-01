import React from "react"
import FilterBoroughs from "../Components/FilterBoroughs"
import BikeStation from "../Components/BikeStation"
import CustomChatBot from "../Components/CustomChatbot"

// import { connect } from "react-redux"
// import { fetchBikes } from "../redux/actions"
class BikeStations extends React.Component{
// const BikeStations = (props) => {

    state={
        clicked: false
    }

    clickHandler = () =>{
        this.setState(previousState => ({
            clicked: !previousState.clicked
        }))
    }

    /*const */ renderBikes = this.props.bikes.map(bike => <BikeStation key={bike.id} bike={bike} addFaves={this.props.addFaves} checkedIn={this.props.checkedIn} setStationIdForFilteringReviews={this.props.setStationIdForFilteringReviews} setBikeObjToDisplayInShowPage={this.props.setBikeObjToDisplayInShowPage} />)

    render(){
        return(
            <>
                <FilterBoroughs searchBorough={this.props.searchBorough} searchValue={this.props.searchValue} />
                {this.renderBikes}
                <button onClick={this.clickHandler}>Live Chat</button>
                {this.state.clicked ? <CustomChatBot /> : null}
            </>
        )
    }
}


// const mapStateToProps = (state) => {
//     return {bike_stations: state.bike_stations}
// }

// const mapDispatchToProps = (dispatch) => {
//     return {fetchBikes: () => dispatch(fetchBikes)}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BikeStations)
export default BikeStations

