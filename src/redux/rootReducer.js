import {combineReducers} from "redux"

// function getBikesReducer()
//     return function (dispatch){

//         fetch(`http://localhost:3000/api/v1/bike_stations`)
//             .then(resp => resp.json())
//             .then(data => console.log(data))
//             // .then(data => dispatch({type : "add_bikes_from_fetch", payload: data}))
//             // .catch(error => console.log(error))
//     }

function getBikesReducer(state=defaultState.api, action){
    switch (action.type){
        case "FETCH BIKES":
            return {}
            break;
        default:
            return state
            break
    }
}

const rootReducer = combineReducers({
    api: getBikesReducer
})

export default rootReducer