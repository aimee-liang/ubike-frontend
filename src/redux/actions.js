// export function fetchBikes(){
//     return function(dispatch){
//         fetch(`http://localhost:3000/api/v1/bike_stations`)
//             .then(resp => resp.json())
//             .then(console.log("hello"))
//             // .then(api => dispatch({type: "FETCH_BIKES", payload: api}))
//             .catch(error => console.log(error))
//     }
// }