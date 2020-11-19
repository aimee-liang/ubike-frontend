export const getBikes = () => {
    return function (dispatch){

        fetch(`http://localhost:3000/api/v1/bike_stations`)
            .then(resp => resp.json())
            .then(data => dispatch({type : "add_bikes_from_fetch", payload: data}))
            .catch(error => console.log(error))
    }
}