import React from "react"

const BikeStation = (props) => {

    return (
        <>
        <div key={props.id}>
            {/* <ul> */}
                {/* <li key={props.id}> */}
                    Address: {props.bike.location} 
                    <br></br>
                    Borough: {props.bike.borough}
                {/* </li> */}
            {/* </ul> */}
        </div>
        </>
    )
}

export default BikeStation