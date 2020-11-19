import React from "react"

const BikeStation = (props) => {

    const clickHandler = () => {
        console.log("click")
    }

    const favoriteHandler = () => {
        // console.log("eat veggies")
        
    }

    return (
        <>
        {/* <div key={props.id}> */}
            <ul>
                <li key={props.id}>
                    Address: {props.bike.location} 
                    <br>
                    </br>
                    Borough: {props.bike.borough}
                    <br>
                    </br>
                    Number of Available Bike Racks: {props.bike.available_bike_racks}
                    {/* {console.log(props.bike)} */}
                    <br>
                    </br>
                    <button onClick={clickHandler}>Check In</button>
                    <button onClick={favoriteHandler}>Star Feature Here</button>
                </li>
            </ul>
        {/* </div> */}
        </>
    )
}

export default BikeStation