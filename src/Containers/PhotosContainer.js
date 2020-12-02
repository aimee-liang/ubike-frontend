import React from "react"
import Button from "@material-ui/core/Button"

const PhotosContainer = (props) => {
    return (
        <div>
            <img alt=""src={props.photos ? props.photos.photos : "/placeholder.jpg" }  className="default-pic"  />
            <br></br>
            <Button variant="contained" color="primary" component="span">Upload Photos</Button>
        </div>
    )
}

export default PhotosContainer