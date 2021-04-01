import React, {useState} from "react"
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button"

const BikeStation = (props) => {
// class BikeStation extends React.Component {

    const [clicked, setClicked] = useState(false)
    const [liked, setLiked] = useState(false)
    
    // state={
    //     clicked: false,
    //     liked: false
    // }

    const clickHandler = (e) => {
        setClicked(!clicked)
        // setState(previousState => ({
        //     clicked: !previousState.clicked
        // }))
        props.checkedIn(props.bike)
    }


    const favoriteHandler = (e) => {
        props.addFaves(props.bike)
        setLiked(!liked)
        // setState(previousState => ({
        //     liked: !previousState.liked
        // }))
    }

    const localFilter = (e) => {
        props.setStationIdForFilteringReviews(props.bike.id)
        props.setBikeObjToDisplayInShowPage(props.bike)
    }

    // render(){
        return (
            <div className="individual-station">
    
                    <span key={props.bike.id}>
                        <img alt="" src="/bikestockphoto.jpg" className="bike-stock-photo" />
                        <NavLink to={`/bike_stations/${props.bike.id}`}>
                            <h4 onClick={localFilter}>{props.bike.location}</h4>
                        </NavLink>
    
                        {/* <p>Available Bike Racks: {props.bike.available_bike_racks}</p> */}
                        <Button variant="contained" onClick={clickHandler}> {clicked.clicked ? "✔️ You've checked in!": "Check In" } </Button> 
                        <Button variant="contained" color="secondary" onClick={favoriteHandler}>{liked.liked ? "♡ Liked!" : "Like"}</Button>
                    </span>   
                    
            </div>
        )

    // }
}

export default BikeStation