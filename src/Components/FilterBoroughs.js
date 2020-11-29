import React from "react"
// import Select from "react-select"

const FilterBoroughs = (props) => {
    
    const clickHandler = (e) => {
        props.searchBorough(e.target.value)
    }

    // const boroughs =[
    //     {label: "All Boroughs", value: "All"},
    //     {label: "Brooklyn", value: "Brooklyn"},
    //     {label: "Manhattan", value: "Manhattan"},
    //     {label: "Queens", value: "Queens"},
    //     {label: "Staten Island", value: "Staten Island"},
    //     {label: "The Bronx", value: "Bronx"}
    // ]

    return(
        <>
        <p>Find Bike Parking Shelters in</p>

        {/* <Select options={boroughs} onChange={clickHandler} /> */}
            <select name="borough" onChange={clickHandler}>
                <option value="All">All Boroughs</option>
                <option value="Brooklyn">Brooklyn</option>
                <option value="Manhattan">Manhattan</option>
                <option value="Queens">Queens</option>
                <option value="Staten Island">Staten Island</option>
                <option value="Bronx">The Bronx</option>
            </select>
        </>
    )
}
export default FilterBoroughs