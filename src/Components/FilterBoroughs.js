import React from "react"

class FilterBoroughs extends React.Component{


    clickHandler = (e) => {
        this.props.searchBorough(e.target.value)
    }

    render(){
        return(
            <>
            <p>Find Bike Parking Shelters in</p>
                <select name="borough" onChange={this.clickHandler}>
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
}

export default FilterBoroughs