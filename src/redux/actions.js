export const fetchBikes = () => {
    return function (dispatch){

        fetch(`http://localhost:3000/api/v1/bike_stations`)
            .then(resp => resp.json())
            .then(console.log)
            .catch(error => console.log(error))
    }
}