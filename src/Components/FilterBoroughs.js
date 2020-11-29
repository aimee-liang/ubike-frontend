import React from "react"
import Select from "react-select"

const FilterBoroughs = (props) => {
    
    const clickHandler = (e) => {
        props.searchBorough(e.value)
    }

    const boroughs =[
        {value: "All", label: "All Boroughs"},
        {value: "Brooklyn", label: "Brooklyn"},
        {value: "Manhattan", label: "Manhattan"},
        {value: "Queens", label: "Queens"},
        {value: "Staten Island", label: "Staten Island"},
        {value: "Bronx", label: "The Bronx"}
    ]

    return(
        <>
        <p>Find Bike Parking Shelters in</p>

        <Select options={boroughs} onChange={clickHandler} />
            {/* <select name="borough" onChange={clickHandler}>
                <option value="All">All Boroughs</option>
                <option value="Brooklyn">Brooklyn</option>
                <option value="Manhattan">Manhattan</option>
                <option value="Queens">Queens</option>
                <option value="Staten Island">Staten Island</option>
                <option value="Bronx">The Bronx</option>
            </select> */}
        </>
    )
}
export default FilterBoroughs