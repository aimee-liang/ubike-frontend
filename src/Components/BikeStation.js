import React, {useState, useHistory} from "react"


const BikeStation = props => {

    const [clicked, setClicked] = useState(false)
    const [station, setStation] = useState({
        id: 0,
        location: "",
        borough: ""
    })

    const clickHandler = (e) => {
        setClicked(!clicked)
    }

    // const displayCheckInMessage = () => {
    //     return <p>You're checked in!</p>
    // }

/* stretch feature - how to check out 
    localCheckOut = () => {
    }
*/

    const rerouteToBikeShowPage = (e) => {
        props.history.push(`/bikestation/${props.bike.id}`)
    }

    const favoriteHandler = (e) => {
        setStation({
            id: props.bike.id,
            location: props.bike.location,
            borough: props.bike.borough
        })
    }

    // render(){
        return (
            <>
                <ul>
                    <li key={props.bike.id}>
                        <h4 onClick={rerouteToBikeShowPage}>Address: {props.bike.location}  </h4>
                        <br>
                        </br>
                        Borough: {props.bike.borough}
                        <br>
                        </br>
                        <button onClick={clickHandler}>  {/* ternary here */}
                                Check In
                        </button> 
                        <button onClick={favoriteHandler}>Favorite</button>
                    </li>
                </ul>
            </>
        )
    }
// }

export default BikeStation